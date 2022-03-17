import react from 'react';
import { Modal} from 'react-bootstrap'
import ProfileForm from '../forms/ProfileForm';
import QualificationForm from '../forms/QualificationForm';
import EmploymentForm from '../forms/EmploymentForm';

export default function Popup({lgShow, setLgShow, data}) {
    return (
      <>
        <Modal
          size="lg"
          show={lgShow}
          onHide={() => setLgShow(false)}
          aria-labelledby="example-modal-sizes-title-lg"
        >
          <Modal.Header closeButton>
            <Modal.Title id="example-modal-sizes-title-lg">
              User Data
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <ProfileForm setData={null} data={data.profile} disabled={true}/>
            <QualificationForm setData={null} data={data.qualification} disabled={true} />
            <EmploymentForm setData={null} data={data.employment} disabled={true} />
          </Modal.Body>
        </Modal>
      </>
    );
  }
  