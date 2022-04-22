import React from "react";
import { Container, Row, Col, Form ,Button,Modal} from "react-bootstrap";
import Sidebar from "../../sidenav/Sidebar";
import AdminLeftMenu from "../AdminLeftMenu";
import Dropzone from "react-dropzone-uploader";





const AddService = () => {
  const [modalShow, setModalShow] = React.useState(false);


  const MyUploader = () => {
    const getUploadParams = ({ meta }) => {
      return { url: "" };
    };
  
    const handleChangeStatus = ({ meta, file }, status) => {
      console.log(status, meta, file);
      setModalShow(false)
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
                {/* <a href="#/add-services" className="theme-color mr-2">
                  <i className="fas fa-chevron-left"></i>
                </a> */}
                Services
              </h5>
              <hr />
              <Form>
             
                
                <Row>
                <Col lg={4} sm={6} xs={12}>
                    <Form.Group className="mb-3">
                        <Form.Label>Title</Form.Label>
                        <Form.Control  />
                    </Form.Group>
                  </Col>

                  <Col lg={4} sm={6} xs={12}>
                    <Form.Group className="mb-3">
                        <Form.Label>Description</Form.Label>
                        <Form.Control value="" />
                    </Form.Group>
                  </Col>

                 

                  

                  <Col lg={4} sm={6} xs={12}>
                    <Form.Group className="mb-3">
                        <Form.Label>Status</Form.Label>
                        <Form.Select aria-label="Default select example">
                            <option>ACTIVE</option>
                            <option>INACTIVE</option>
                      </Form.Select>
                    </Form.Group>
                  </Col>

                  <Col lg={4} sm={4} xs={12}>
                  <div className="upload-document-colum text-center">
                    <h6>Logo</h6>
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
                    <h6>Banner</h6>
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
                      <a href="#/add-service" className="btn btn-theme pl-2 pr-2 ml-0">
                        Save
                      </a> 
                    </div>
                  </Col>
                </Row>
              </Form>
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

export default AddService;
