import React from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import Sidebar from "../../PageLayout/SidebarNav/Sidebar";
import AdminLeftMenu from "./AdminLeftMenu";

const AdminAppoitment = () => {
  return (
    <div className="clients">
      <Sidebar />
      <Container fluid>
        <Row>
          <Col lg={3} sm={4} xs={12}>
            <AdminLeftMenu />
          </Col>
          <Col lg={9} sm={8} xs={12}>
            <div className="appointment-card appointment-admin">
              <h5 className="mb-5">Appointments</h5>

              <Row>
                <Col lg={9} sm={8} xs={12}>
                  <h6 className="m-0">Appointment cancellation</h6>
                  <p>
                    Appointment Cancellation cannot be done before 'x' hrs of
                    appointment
                  </p>
                </Col>

                <Col lg={3} sm={4} xs={12}>
                  <Form.Group className="mb-3">
                    <Form.Select>
                      <option>Select Hours</option>
                      <option value="1">24 Hrs</option>
                      <option value="2">48 hrs</option>
                      <option value="3">None</option>
                    </Form.Select>
                  </Form.Group>
                </Col>
              </Row>

              <Row>
                <Col lg={9} sm={8} xs={12}>
                  <h6 className="m-0">Rescheduling Appointment</h6>
                  <p>
                    Rescheduling an appointment cannot be done before 'x' hrs of
                    appointment
                  </p>
                </Col>

                <Col lg={3} sm={4} xs={12}>
                  <Form.Group className="mb-3">
                    <Form.Select>
                      <option>Select Hours</option>
                      <option value="1">24 Hrs</option>
                      <option value="2">48 hrs</option>
                      <option value="3">None</option>
                    </Form.Select>
                  </Form.Group>
                </Col>
              </Row>

              <Row>
                <Col lg={9} sm={8} xs={12}>
                  <h6 className="m-0">
                    How many times an appointment can be rescheduled ?
                  </h6>
                  <p>
                    Appointment cannot be rescheduled more than the defined
                    amount of times
                  </p>
                </Col>

                <Col lg={3} sm={4} xs={12}>
                  <Form.Group className="mb-3">
                    <Form.Select>
                      <option>Select Number</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                    </Form.Select>
                  </Form.Group>
                </Col>
              </Row>

              <hr />

              <h5 className="mb-5">Appointment Confirmation</h5>

              <Row>
                <Col lg={9} sm={8} xs={12}>
                  <h6 className="m-0">
                    Method of sending appointment confirmation
                  </h6>
                  <p>
                    Select the method to establish mode of communication to send{" "}
                    <br /> appointment reiminders.
                  </p>
                </Col>

                <Col lg={3} sm={4} xs={12}>
                  <Form.Group className="mb-3">
                    <Form.Select>
                      <option>Select</option>
                      <option value="1">Email</option>
                      <option value="2">SMS</option>
                      <option value="3">Email/SMS</option>
                    </Form.Select>
                  </Form.Group>
                </Col>
              </Row>

              <hr />

              <Row>
                <Col lg={6} sm={6} xs={12}>
                  <h6 className="m-0">Message</h6>
                  <p>
                    Message template for sending appointment <br />
                    confirmations.
                  </p>
                  <a href="#/" className="btn btn-theme btn-sm ml-0">
                    Edit
                  </a>
                </Col>

                <Col lg={6} sm={6} xs={12}>
                  <Form.Group className="mb-3">
                    <Form.Control
                      as="textarea"
                      rows="7"
                      value="Thank you for booking appointment with Kinergy 
                        Sports Medicine and Performance, 
                        Here are your details


                        When  - {Date} 
                        Where - {Location}
                        Booking ID - {ID}"
                    />
                  </Form.Group>
                </Col>
              </Row>

              <hr />

              <Row>
                <Col lg={6} sm={6} xs={12}>
                  <h6 className="m-0">Email</h6>
                  <p>
                    Email template for sending appointment <br />
                    reminders.
                  </p>
                  <a href="#/" className="btn btn-theme btn-sm ml-0">
                    Edit
                  </a>
                </Col>

                <Col lg={6} sm={6} xs={12}>
                  <Form.Group className="mb-3">
                    <Form.Control
                      as="textarea"
                      rows="7"
                      value="From: kinergy xyx@kinergy.com
                        Send-To: xyz@gmail.com
                        Subject: Appointment confirmation - 
                        Kinergy Sports Medicine and Performance

                        Hi xyz,

                        Your appointment has been booked with 
                        “cxyc” on ”00-00-0000” at “00:00pm” from 
                        Kinergy Sports Medicine and Performance.

                        This invoice has already been paid.

                        Thank you,

                        Kinergy Sports Medicine and Performance"
                    />
                  </Form.Group>
                </Col>
              </Row>
              <hr />

              <h5 className="mb-5">Appointment Reminders</h5>

              <Row>
                <Col lg={9} sm={8} xs={12}>
                  <h6 className="m-0">
                  Method of sending reminders
                  </h6>
                  <p>
                  Select the method to establish mode of communication to send  <br />
appointment reiminders.
                  </p>
                </Col>

                <Col lg={3} sm={4} xs={12}>
                  <Form.Group className="mb-3">
                    <Form.Select>
                    <option>Select</option>
                      <option value="1">Email</option>
                      <option value="2">SMS</option>
                      <option value="3">Email/SMS</option>
                    </Form.Select>
                  </Form.Group>
                </Col>
              </Row>

              <hr />

              <Row>
                <Col lg={6} sm={6} xs={12}>
                  <h6 className="m-0">Message</h6>
                  <p>
                    Message template for sending appointment <br />
                    confirmations.
                  </p>
                  <a href="#/" className="btn btn-theme btn-sm ml-0">
                    Edit
                  </a>
                </Col>

                <Col lg={6} sm={6} xs={12}>
                  <Form.Group className="mb-3">
                    <Form.Control
                      as="textarea"
                      rows="7"
                      value="This is a the reminder message for your 
                      Booking ID - {ID} {Date}."
                    />
                  </Form.Group>
                </Col>
              </Row>

              <hr />

              <Row>
                <Col lg={6} sm={6} xs={12}>
                  <h6 className="m-0">Email</h6>
                  <p>
                    Email template for sending appointment <br />
                    reminders.
                  </p>
                  <a href="#/" className="btn btn-theme btn-sm ml-0">
                    Edit
                  </a>
                </Col>

                <Col lg={6} sm={6} xs={12}>
                  <Form.Group className="mb-3">
                    <Form.Control
                      as="textarea"
                      rows="7"
                      value="From: kinergy xyx@kinergy.com
                        Send-To: xyz@gmail.com
                        Subject: Appointment confirmation - 
                        Kinergy Sports Medicine and Performance

                        Hi xyz,

                        Your appointment has been booked with 
                        “cxyc” on ”00-00-0000” at “00:00pm” from 
                        Kinergy Sports Medicine and Performance.

                        This invoice has already been paid.

                        Thank you,

                        Kinergy Sports Medicine and Performance"
                    />
                  </Form.Group>
                </Col>
              </Row>
              <hr />

              <Row>
                <Col lg={9} sm={8} xs={12}>
                  <h6 className="m-0">
                  Primary Reminder Before
                  </h6>
                  <p>
                  Select the number of hours for the primary reminder that you want to send to <br /> the client before the  appointment.
                  </p>
                </Col>

                <Col lg={3} sm={4} xs={12}>
                  <Form.Group className="mb-3">
                    <Form.Select>
                    <option>Select hours</option>
                      <option value="1">24 Hrs</option>
                      <option value="2" selected>48 hrs</option>
                      <option value="3">72 hrs</option>
                      <option value="4">Disable</option>
                    </Form.Select>
                  </Form.Group>
                </Col>
              </Row>

              <Row>
                <Col lg={9} sm={8} xs={12}>
                  <h6 className="m-0">
                  Secondary Reminder Before
                  </h6>
                  <p>
                  Select the number of hours for the second reminder that you want to send to <br /> the client before the  appointment.
                  </p>
                </Col>

                <Col lg={3} sm={4} xs={12}>
                  <Form.Group className="mb-3">
                    <Form.Select>
                      <option>Select hours</option>
                      <option value="1">24 Hrs</option>
                      <option value="2">48 hrs</option>
                      <option value="3">72 hrs</option>
                      <option value="4">Disable</option>
                    </Form.Select>
                  </Form.Group>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AdminAppoitment;
