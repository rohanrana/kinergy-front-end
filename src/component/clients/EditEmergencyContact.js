import React from "react";
import { Container, Row, Col, Form, Button, Modal } from "react-bootstrap";
import Sidebar from "../sidenav/Sidebar";

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body className="p-5 text-center">
        <a className="close-modal-btn" onClick={props.onHide}>
          <i className="fas fa-times"></i>
        </a>
        <p>
          Do you want to delete this{" "}
          <b>
            Emergency <br />
            Contact Information ?
          </b>
        </p>
        <Button className="btn btn-theme-white">No</Button>
        <Button className="btn btn-theme ml-2">Yes</Button>
      </Modal.Body>
    </Modal>
  );
}
const EditEmergencyContact = () => {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <div className="clients">
      <Sidebar />
      <Container fluid className="mt-5">
        <Row>
          <Col lg={12} sm={12} xs={12}>
            <h4 className="m-0">Scott Elizabeth</h4>
          </Col>
        </Row>
        <Row>
          <Col lg={12} sm={12} xs={12}>
            <div className="appointment-card form-type mt-3">
              <h5 className="pb-2">
                <a href="#/client-details" className="theme-color">
                  <i className="fas fa-chevron-left mr-2"></i>
                </a>
                Emergency Contact
              </h5>
              <Form>
                <Row>
                  <Col lg={12} sm={12} xs={12}>
                    <p>
                      Emergency contact information - 1
                      <span className="float-right">
                        <u>
                          <a onClick={() => setModalShow(true)}>
                            <b>Delete</b>
                          </a>
                        </u>
                      </span>
                    </p>
                  </Col>
                  <Col lg={4} sm={4} xs={12}>
                    <Form.Group className="mb-3">
                      <Form.Label>Fullname</Form.Label>
                      <Form.Control value="Elizabeth" />
                    </Form.Group>
                  </Col>

                  <Col lg={4} sm={4} xs={12}>
                    <Form.Group className="mb-3">
                      <Form.Label>Relationship</Form.Label>
                      <Form.Control value="Scott" />
                    </Form.Group>
                  </Col>

                  <Col lg={4} sm={4} xs={12}>
                    <Form.Group className="mb-3">
                      <Form.Label>Phone Number Type</Form.Label>
                      <Form.Select defaultValue="1">
                        <option value="1">Home</option>
                        <option value="2">Option</option>
                        <option value="3">Option</option>
                      </Form.Select>
                    </Form.Group>
                  </Col>

                  <Col lg={4} sm={4} xs={12}>
                    <Form.Group className="mb-3">
                      <Form.Label>Phone Number</Form.Label>
                      <Form.Control value="(272)-343-4343" />
                    </Form.Group>
                  </Col>

                  <Col lg={4} sm={4} xs={12}>
                    <Form.Group className="mb-3">
                      <Form.Label>Alt Phone Number</Form.Label>
                      <Form.Control value="(272)-343-4343" />
                    </Form.Group>
                  </Col>
                  <Col lg={4} sm={4} xs={12}>
                    <Form.Group className="mb-3">
                      <Form.Label>Language</Form.Label>
                      <Form.Select defaultValue="1">
                        <option value="1">Spanish</option>
                        <option value="2">Option</option>
                        <option value="3">Option</option>
                      </Form.Select>
                    </Form.Group>
                  </Col>
                </Row>
                <hr />
                <h5>
                  <u>
                    <a href="#/" className="theme-color">
                      + Add More
                    </a>
                  </u>
                </h5>

                <Row>
                  <Col Col lg={12} sm={12} xs={12}>
                    <div className="text-center form-action-btn mt-3">
                      <Button className="btn btn-theme pl-2 pr-2 ml-2">
                        Save
                      </Button>
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

export default EditEmergencyContact;
