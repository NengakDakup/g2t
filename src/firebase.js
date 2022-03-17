// Import the functions you need from the SDKs you need
import {initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendPasswordResetEmail } from "firebase/auth";
import { getFirestore, collection, addDoc, query, where, getDocs, doc, setDoc  } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAkDX5ZW4RpvXwJVsP2DbaMWRPp8qH0xGQ",
  authDomain: "g2t-app.firebaseapp.com",
  projectId: "g2t-app",
  databaseURL: "https://g2t-app-default-rtdb.firebaseio.com/",
  storageBucket: "g2t-app.appspot.com",
  messagingSenderId: "145443999881",
  appId: "1:145443999881:web:0f0e901f1a482f08223658"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore(app);


// sign in with email functionality
const signIn = async (email, password) => {
    try {
      let res = await signInWithEmailAndPassword(auth, email, password);
      const user = res.user;
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
};

// register with email and password
const signUp = async (name, email, password, userData) => {
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      const user = res.user;
      let docRef = await addDoc(collection(db, "users"),{
        uid: user.uid,
        name,
        email,
        ...userData
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
};

// send password reset link to email
const sendPasswordReset = async (email) => {
    try {
      await sendPasswordResetEmail(auth, email);
      alert("Password reset link sent!");
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
};

// sign out functionality
const logout = () => {
    return auth.signOut();
};

const fetchUserData = async (userID) => {
  try {
    const q = query(collection(db, "users"), where("uid", "==", userID));
    const querySnapshot = await getDocs(q);
    let res;
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.id, " => ", doc.data());
      res = doc.data();
    });
    return res;
  } catch (err) {
    console.error(err);
    alert("An error occured while fetching user data");
  }
};

const updateProfileData = async (userID, profileData, qualificationData, employmentData) => {
  console.log('update user data');
  // const q = doc(db, "users");

  await setDoc(doc(db, "profiles", userID), {
    profile: profileData,
    qualification: qualificationData,
    employment: employmentData
  });
}

const fetchRecords = async () => {
  const querySnapshot = await getDocs(collection(db, "profiles"));
  return querySnapshot;

}

export {
    auth,
    db,
    signIn,
    signUp,
    sendPasswordReset,
    logout,
    fetchUserData,
    updateProfileData,
    fetchRecords
};