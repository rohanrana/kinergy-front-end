import React from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import Sidebar from "../sidenav/Sidebar";
import AdminLeftMenu from "./AdminLeftMenu";

const Communications = () => {
  return (
    <div className="clients">
      <Sidebar />
      <Container fluid>
        <Row>
          <Col lg={2} sm={4} xs={12}>
            <AdminLeftMenu />
          </Col>
          <Col lg={10} sm={8} xs={12}>
            <div className="appointment-card">
              <h5 className="mb-5">Communication Settings</h5>

              <Form>
                <Row>
                  <Col lg={8} sm={8} xs={12}>
                    <h6>Communication</h6>
                    <p className="m-0">
                      Allows you to communicate with the client and the staff
                    </p>
                  </Col>
                  <Col lg={4} sm={4} xs={12}>
                    {["radio"].map((type) => (
                      <div key={`inline-${type}`}>
                        <Form.Check
                          inline
                          checked
                          type={type}
                          name="communications"
                          id={`inline-${type}-1`}
                          label={`Enable`}
                        />

                        <Form.Check
                          inline
                          type={type}
                          name="communications"
                          id={`inline-${type}-2`}
                          label={`Disable`}
                        />
                      </div>
                    ))}
                  </Col>
                </Row>

                <hr />
                <Row>
                  <Col lg={8} sm={8} xs={12}>
                    <h6 className="m-0">Number</h6>
                  </Col>
                  <Col lg={4} sm={4} xs={12}>
                    {["radio"].map((type) => (
                      <div key={`inline-${type}`}>
                        <Form.Check
                          inline
                          checked
                          type={type}
                          name="number"
                          id={`inline-${type}-3`}
                          label={`Enable`}
                        />

                        <Form.Check
                          inline
                          type={type}
                          name="number"
                          id={`inline-${type}-4`}
                          label={`Disable`}
                        />
                      </div>
                    ))}
                  </Col>
                </Row>

                <hr />

                <Row>
                  <Col lg={8} sm={8} xs={12}>
                    <h6 className="m-0">Allow SMS</h6>
                  </Col>
                  <Col lg={4} sm={4} xs={12}>
                    {["radio"].map((type) => (
                      <div key={`inline-${type}`}>
                        <Form.Check
                          inline
                          checked
                          type={type}
                          name="allowsms"
                          id={`inline-${type}-5`}
                          label={`Enable`}
                        />

                        <Form.Check
                          inline
                          type={type}
                          name="allowsms"
                          id={`inline-${type}-6`}
                          label={`Disable`}
                        />
                      </div>
                    ))}
                  </Col>
                </Row>

                <hr />

                <Row>
                  <Col lg={8} sm={8} xs={12}>
                    <h6 className="m-0">Allow clients to respond to SMS</h6>
                  </Col>
                  <Col lg={4} sm={4} xs={12}>
                    {["radio"].map((type) => (
                      <div key={`inline-${type}`}>
                        <Form.Check
                          inline
                          checked
                          type={type}
                          name="allowsclient"
                          id={`inline-${type}-7`}
                          label={`Enable`}
                        />

                        <Form.Check
                          inline
                          type={type}
                          name="allowsclient"
                          id={`inline-${type}-8`}
                          label={`Disable`}
                        />
                      </div>
                    ))}
                  </Col>
                </Row>

                <hr />

                <Row>
                  <Col lg={8} sm={8} xs={12}>
                    <h6 className="m-0">Allow Calls</h6>
                  </Col>
                  <Col lg={4} sm={4} xs={12}>
                    {["radio"].map((type) => (
                      <div key={`inline-${type}`}>
                        <Form.Check
                          inline
                          checked
                          type={type}
                          name="allowcall"
                          id={`inline-${type}-9`}
                          label={`Enable`}
                        />

                        <Form.Check
                          inline
                          type={type}
                          name="allowcall"
                          id={`inline-${type}-10`}
                          label={`Disable`}
                        />
                      </div>
                    ))}
                  </Col>
                </Row>

                <hr />

                <Row>
                  <Col lg={8} sm={8} xs={12}>
                    <h6 className="m-0">Allow Emails</h6>
                  </Col>
                  <Col lg={4} sm={4} xs={12}>
                    {["radio"].map((type) => (
                      <div key={`inline-${type}`}>
                        <Form.Check
                          inline
                          checked
                          type={type}
                          name="allowemails"
                          id={`inline-${type}-11`}
                          label={`Enable`}
                        />

                        <Form.Check
                          inline
                          type={type}
                          name="allowemails"
                          id={`inline-${type}-12`}
                          label={`Disable`}
                        />
                      </div>
                    ))}
                  </Col>
                </Row>
              </Form>
            </div>
            <div className="appointment-card">
              <h5 className="mb-5">Appointment Confirmation</h5>

              <Row>
                <Col lg={8} sm={8} xs={12}>
                  <h6>Method</h6>
                  <p className="m-0">
                    Choosing method establishes the mode of communication with
                    clients for sharing the appointment details and other
                    information
                  </p>
                </Col>
                <Col lg={4} sm={4} xs={12}>
                  {["radio"].map((type) => (
                    <div key={`inline-${type}`}>
                      <Form.Check
                        inline
                        checked
                        type={type}
                        name="method"
                        id={`inline-${type}-13`}
                        label={`Email`}
                      />

                      <Form.Check
                        inline
                        type={type}
                        name="method"
                        id={`inline-${type}-14`}
                        label={`SMS`}
                      />

                      <Form.Check
                        inline
                        type={type}
                        name="method"
                        id={`inline-${type}-15`}
                        label={`Both`}
                      />
                    </div>
                  ))}
                </Col>
              </Row>

              <hr />
              <Row>
                <Col lg={8} sm={8} xs={12}>
                  <h6>Message</h6>
                  <p className="m-0">
                    Create a message template for sending emails and messages to
                    the client
                  </p>
                </Col>
                <Col lg={4} sm={4} xs={12}>
                  <p>
                    <u>
                      <a href="#/" className="theme-color">
                        <b>+ Create a new message template</b>
                      </a>
                    </u>
                  </p>
                </Col>
              </Row>
            </div>

            <div className="appointment-card mb-5">
              <h5 className="mb-5">Appointment Reminders</h5>

              <Row>
                <Col lg={8} sm={8} xs={12}>
                  <h6>Method</h6>
                  <p className="m-0">
                    Choosing method establishes the mode of communication with
                    clients for sharing the appointment details and other
                    information
                  </p>
                </Col>
                <Col lg={4} sm={4} xs={12}>
                  {["radio"].map((type) => (
                    <div key={`inline-${type}`}>
                      <Form.Check
                        inline
                        type={type}
                        name="method2"
                        id={`inline-${type}-16`}
                        label={`Email`}
                      />

                      <Form.Check
                        inline
                        type={type}
                        name="method2"
                        id={`inline-${type}-17`}
                        label={`SMS`}
                      />

                      <Form.Check
                        checked
                        inline
                        type={type}
                        name="method2"
                        id={`inline-${type}-18`}
                        label={`Both`}
                      />
                    </div>
                  ))}
                </Col>
              </Row>

              <hr />
              <Row>
                <Col lg={8} sm={8} xs={12}>
                  <h6>Message</h6>
                  <p className="m-0">
                    Create a message template for sending emails and messages to
                    the client
                  </p>
                </Col>
                <Col lg={4} sm={4} xs={12}>
                  <p>
                    <u>
                      <a href="#/" className="theme-color">
                        <b>+ Create a new message template</b>
                      </a>
                    </u>
                  </p>
                </Col>
              </Row>
              <hr />
              <Row>
                <Col lg={8} sm={8} xs={12}>
                  <h6>Remind Before</h6>
                  <p>
                    This enables the automatic reminder for appointments to the
                    client
                  </p>

                  {["radio"].map((type) => (
                    <div key={`inline-${type}`}>
                      <Form.Check
                        inline
                        checked
                        type={type}
                        name="remind-before"
                        id={`inline-${type}-20`}
                        label={`10 Hrs`}
                      />

                      <Form.Check
                        inline
                        type={type}
                        name="remind-before"
                        id={`inline-${type}-21`}
                        label={`20 Hrs`}
                      />

                      <Form.Check
                        inline
                        type={type}
                        name="remind-before"
                        id={`inline-${type}-22`}
                        label={`24 Hrs`}
                      />

                      <Form.Check
                        inline
                        type={type}
                        name="remind-before"
                        id={`inline-${type}-23`}
                        label={`48 Hrs`}
                      />

                      <Form.Check
                        inline
                        type={type}
                        name="remind-before"
                        id={`inline-${type}-24`}
                        label={`72 Hrs`}
                      />

                      <Form.Check
                        inline
                        type={type}
                        name="remind-before"
                        id={`inline-${type}-25`}
                        label={`96 Hrs`}
                      />

                      <Form.Check
                        inline
                        type={type}
                        name="remind-before"
                        id={`inline-${type}-26`}
                        label={`Others`}
                      />
                    </div>
                  ))}
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Communications;
