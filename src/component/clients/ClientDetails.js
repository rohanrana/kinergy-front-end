import React from "react";
import { Container, Row, Col, Button, Modal } from "react-bootstrap";
import Sidebar from "../sidenav/Sidebar";
import ClientLeftMenu from "./ClientLeftMenu";

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

const ClientDetails = () => {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <div className="clients">
      <Sidebar />
      <Container fluid>
        <Row>
          <Col lg={2} sm={4} xs={12}>
            <ClientLeftMenu />
          </Col>
          <Col lg={10} sm={8} xs={12}>
            <div className="appointment-card">
              <h5 className="pb-2">
                <a href="/client-listing" className="theme-color">
                  <i className="fas fa-chevron-left mr-2"></i>
                </a>
                Client Details{" "}
                <small>
                  <i className="fas fa-caret-up ml-2"></i>
                </small>
                <span className="float-right">
                  <a
                    href="/edit-details"
                    className="btn btn-theme m-0 btn-sm pl-2 pr-2"
                  >
                    Edit
                  </a>
                </span>
              </h5>

              <hr />

              <div className="client-details-row">
                <div className="client-details-col">
                  <h6>Last Name</h6>
                  <p>Elizabeth</p>
                </div>

                <div className="client-details-col">
                  <h6>First Name</h6>
                  <p>Scott</p>
                </div>

                <div className="client-details-col">
                  <h6>Date of Birth</h6>
                  <p>15-12-2021</p>
                </div>

                <div className="client-details-col">
                  <h6>Gender</h6>
                  <p>Male</p>
                </div>

                <div className="client-details-col">
                  <h6>Blood Group</h6>
                  <p>O +ve</p>
                </div>

                <div className="client-details-col">
                  <h6>Address</h6>
                  <p>#101,9623-18A Avenue Las Vegas, NV 89123 (547)-354-6514</p>
                </div>

                <div className="client-details-col">
                  <h6>Phone Number</h6>
                  <p>702-544-2132</p>
                </div>

                <div className="client-details-col">
                  <h6>Email</h6>
                  <p>Scott@gmail.com</p>
                </div>
              </div>
              <h5 className="mt-5 mb-5">Account</h5>
              <div className="client-details-row">
                <div className="client-details-col">
                  <h6>Member Since</h6>
                  <p>08-02-2011</p>
                </div>
                <div className="client-details-col">
                  <h6>Member Type</h6>
                  <p>Premium</p>
                </div>
                <div className="client-details-col">
                  <h6>Membership Expiration</h6>
                  <p>15-12-2021</p>
                </div>
              </div>

              <h5 className="mt-5 mb-5">Communication Preferences</h5>
              <div className="client-details-row">
                <div className="client-details-col">
                  <h6>Automated Reminder</h6>
                  <p>SMS / Email</p>
                </div>
                <div className="client-details-col">
                  <h6>Appointment Confirmation</h6>
                  <p>Email</p>
                </div>
              </div>
            </div>
            <div className="appointment-card">
              <h5 className="pb-2">
                Emergency Contact Information
                <small>
                  <i className="fas fa-caret-up ml-2"></i>
                </small>
                <span className="float-right">
                  <a
                    href="/edit-emergency-contact"
                    className="btn btn-theme m-0 btn-sm pl-2 pr-2"
                  >
                    Add more
                  </a>
                </span>
              </h5>

              <hr />

              <div className="emergency-blog">
                <h6 className="main-h">Contact 1</h6>
                <div className="emergency-blog-row">
                  <div className="emergency-blog-row-col">
                    <h6>Name</h6>
                    <p>Steven Zack</p>
                  </div>

                  <div className="emergency-blog-row-col">
                    <h6>Relationship</h6>
                    <p>Cousin</p>
                  </div>

                  <div className="emergency-blog-row-col">
                    <h6>Phone Number</h6>
                    <p>(517)-234-6546</p>
                  </div>

                  <div className="emergency-blog-row-col">
                    <h6>Location</h6>
                    <p>massachusetts </p>
                  </div>

                  <div className="emergency-blog-row-col">
                    <Button
                      className="btn btn-theme-white mr-2"
                      onClick={() => setModalShow(true)}
                    >
                      <i className="fas fa-trash"></i>
                    </Button>
                    <a href="#/" className="btn btn-theme-white mr-2">
                      <i className="fas fa-pencil"></i>
                    </a>
                  </div>
                </div>
              </div>

              <div className="emergency-blog">
                <h6 className="main-h">Contact 2</h6>
                <div className="emergency-blog-row">
                  <div className="emergency-blog-row-col">
                    <h6>Name</h6>
                    <p>Ken Zackerry</p>
                  </div>

                  <div className="emergency-blog-row-col">
                    <h6>Relationship</h6>
                    <p>Cousin</p>
                  </div>

                  <div className="emergency-blog-row-col">
                    <h6>Phone Number</h6>
                    <p>(517)-234-6546</p>
                  </div>

                  <div className="emergency-blog-row-col">
                    <h6>Location</h6>
                    <p>massachusetts </p>
                  </div>

                  <div className="emergency-blog-row-col">
                    <Button
                      className="btn btn-theme-white mr-2"
                      onClick={() => setModalShow(true)}
                    >
                      <i className="fas fa-trash"></i>
                    </Button>
                    <a href="#/" className="btn btn-theme-white mr-2">
                      <i className="fas fa-pencil"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="appointment-card">
              <h5 className="pb-2">
                Client Medical Information
                <small>
                  <i className="fas fa-caret-up ml-2"></i>
                </small>
                <span className="float-right">
                  <a
                    href="/edit-client-medical"
                    className="btn btn-theme m-0 btn-sm pl-2 pr-2"
                  >
                    Edit
                  </a>
                </span>
              </h5>
              <hr />
              <h6 className="main-h">Allergies</h6>
              <p>Environmental, Animal</p>
              <h6 className="main-h">Medications or suppliments</h6>
              <p>Inhaler (Asthama )</p>
              <h6 className="main-h">General Medical History</h6>
              <div className="general-medical-history">
                <div className="general-medical-history-col">
                  <h6>Personal Medical History</h6>
                  <p>Asthma, Lung Infection</p>
                </div>

                <div className="general-medical-history-col">
                  <h6>Prior Major Issues</h6>
                  <p>R. ankle sprain (2019)</p>
                </div>

                <div className="general-medical-history-col">
                  <h6>Prior Major Illnesses</h6>
                  <p>None</p>
                </div>

                <div className="general-medical-history-col">
                  <h6>Head Injury History</h6>
                  <p>1x concussion (No LOC, 2009)</p>
                </div>

                <div className="general-medical-history-col">
                  <h6>Fracture History</h6>
                  <p>None</p>
                </div>

                <div className="general-medical-history-col">
                  <h6>Surgery History</h6>
                  <p>None</p>
                </div>

                <div className="general-medical-history-col">
                  <h6>Personal Habits</h6>
                  <p>None</p>
                </div>

                <div className="general-medical-history-col">
                  <h6>Female</h6>
                  <p>None</p>
                </div>
              </div>
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

export default ClientDetails;
