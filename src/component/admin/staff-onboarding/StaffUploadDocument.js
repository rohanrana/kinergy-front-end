import React from "react";
import { Container, Row, Col, Button, Modal, Form } from "react-bootstrap";
import Sidebar from "../../sidenav/Sidebar";
import AdminLeftMenu from "../AdminLeftMenu";
import Dropzone from "react-dropzone-uploader";

const MyUploader = () => {
  const getUploadParams = ({ meta }) => {
    return { url: "asdas.png" };
  };

  const handleChangeStatus = ({ meta, file }, status) => {
    console.log(status, meta, file);
  };

  return (
    <Dropzone
      getUploadParams={getUploadParams}
      onChangeStatus={handleChangeStatus}
      accept="image/*,audio/*,video/*"  
    />
  );
};

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body className="p-5">
        <a className="close-modal-btn" onClick={props.onHide}>
          <i className="fas fa-times"></i>
        </a>
        <h5 className="mb-3">Upload document</h5>
        <Row>
          <Col lg={12} sm={12} xs={12}>
            <MyUploader />
          </Col>
        </Row>
        <Row>
          <Col Col lg={12} sm={12} xs={12}>
            <div className="text-center form-action-btn mt-3">
              <Button className="btn btn-theme-white pl-2 pr-2">Cancel</Button>
              <Button className="btn btn-theme pl-2 pr-2 ml-2">Save</Button>
            </div>
          </Col>
        </Row>
      </Modal.Body>
    </Modal>
  );
}

const StaffUploadDocument = () => {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <div className="clients">
      <Sidebar />
      <Container fluid>
        <Row>
          <Col lg={2} sm={4} xs={12}>
            <AdminLeftMenu />
          </Col>
          <Col lg={10} sm={8} xs={12}>
            <div className="appointment-card form-type">
              <h5 className="mb-3">
                <a href="#/add-staff-onboarding" className="theme-color mr-2">
                  <i className="fas fa-chevron-left"></i>
                </a>
                Employee Onboarding
              </h5>
              <hr />

              <h6>Upload Document</h6>
              <Row>
                <Col lg={4} sm={4} xs={12}>
                  <div className="upload-document-colum text-center">
                    <h6>SSN</h6>
                    <Button className="btn btn-theme-white ml-0">
                      <i className="fas fa-eye"></i>
                    </Button>
                    <Button className="btn btn-theme-white ml-2">
                      <i className="fas fa-cloud-download"></i>
                    </Button>
                    <Button className="btn btn-theme-white ml-2">
                      <i className="fas fa-trash"></i>
                    </Button>
                    <p className="main-h text-left mb-0 mt-3">
                      <i className="fas fa-file mr-2"></i>SSN.pdf
                    </p>
                  </div>
                </Col>

                <Col lg={4} sm={4} xs={12}>
                  <div className="upload-document-colum text-center">
                    <h6>Drivers License</h6>
                    <Button
                      className="btn btn-theme ml-0 w-100 btn-sm mt-3"
                      onClick={() => setModalShow(true)}
                    >
                      Upload
                    </Button>
                  </div>
                </Col>

                <Col lg={4} sm={4} xs={12}>
                  <div className="upload-document-colum text-center">
                    <h6>Work Permit</h6>
                    <Button
                      className="btn btn-theme ml-0 w-100 btn-sm mt-3"
                      onClick={() => setModalShow(true)}
                    >
                      Upload
                    </Button>
                  </div>
                </Col>
              </Row>

              <Row>
                <Col Col lg={12} sm={12} xs={12}>
                  <div className="text-center form-action-btn mt-3">
                    <Button className="btn btn-theme pl-2 pr-2 ml-0">
                      Save
                    </Button>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </div>
  );
};

export default StaffUploadDocument;
