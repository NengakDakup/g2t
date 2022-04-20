export default function ObjectToArray(object){
    let arr = [];
    for (var property in object) {
        arr.push(object[property]);
    }

    return arr;
}