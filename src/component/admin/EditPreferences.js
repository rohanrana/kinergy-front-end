import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Sidebar from "../sidenav/Sidebar";

const EditPreferences = () => {
  return (
    <div className="clients">
      <Sidebar />
      <Container fluid>
        <Row>
          <Col lg={12} sm={12} xs={12}>
            <h5>Edit Preferences</h5>
            <Form>
              <div className="appointment-card">
                <Row>
                  <Col lg={12} sm={12} xs={12}>
                    <div className="setting-top">
                      <div className="setting-top-name-col">
                        <span>CB</span>
                      </div>
                      <div className="setting-top-full-name">
                        <h5 className="m-0">Courtney Brittney</h5>
                        <p className="m-0">Receptionist | Level 3</p>
                      </div>
                      <div className="setting-top-button">
                        <p className="d-flex justify-content-end mb-0">
                          <b>Status : Active</b>
                          <Form.Check
                            type="switch"
                            id="custom-switch"
                            checked
                          />
                        </p>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>

              <div className="appointment-card form-type">
                <h5 className="mb-3">Clients</h5>
                <Form.Check
                  inline
                  label="Client Profile"
                  type="checkbox"
                  checked
                  className="font--weight-label mb-3"
                />
                <Row>
                  <Col lg={7} sm={7} xs={12}>
                    <div className="pl-3">
                      <Form.Check
                        inline
                        label="Basic Details"
                        checked
                        type="checkbox"
                      />
                    </div>
                  </Col>

                  <Col lg={5} sm={5} xs={12}>
                    <div className="text-right">
                      <Form.Check inline label="View Only" type="checkbox" />
                      <Form.Check inline label="Can Edit" type="checkbox" />
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col lg={7} sm={7} xs={12}>
                    <div className="pl-3">
                      <Form.Check inline label="SSN Number" type="checkbox" />
                    </div>
                  </Col>

                  <Col lg={5} sm={5} xs={12}>
                    <div className="text-right">
                      <Form.Check inline label="View Only" type="checkbox" />
                      <Form.Check inline label="Can Edit" type="checkbox" />
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col lg={7} sm={7} xs={12}>
                    <div className="pl-3">
                      <Form.Check
                        inline
                        label="Medical History Questionaire"
                        checked
                        type="checkbox"
                      />
                    </div>
                  </Col>

                  <Col lg={5} sm={5} xs={12}>
                    <div className="text-right">
                      <Form.Check inline label="View Only" type="checkbox" />
                      <Form.Check inline label="Can Edit" type="checkbox" />
                    </div>
                  </Col>
                </Row>

                <Row>
                  <Col lg={7} sm={7} xs={12}>
                    <div className=" mb-3 mt-3">
                      <Form.Check
                        inline
                        label="Chart Notes"
                        checked
                        type="checkbox"
                        className="font--weight-label"
                      />
                    </div>
                  </Col>

                  <Col lg={5} sm={5} xs={12}>
                    <div className="text-right  mb-3 mt-3">
                      <Form.Check inline label="View Only" type="checkbox" />
                      <Form.Check inline label="Can Edit" type="checkbox" />
                    </div>
                  </Col>
                </Row>

                <Row>
                  <Col lg={7} sm={7} xs={12}>
                    <div className="pl-3">
                      <Form.Check
                        inline
                        label="Prior Notes"
                        checked
                        type="checkbox"
                      />
                    </div>
                  </Col>

                  <Col lg={5} sm={5} xs={12}>
                    <div className="text-right">
                      <Form.Check inline label="View Only" type="checkbox" />
                      <Form.Check inline label="Can Edit" type="checkbox" />
                    </div>
                  </Col>
                </Row>

                <Row>
                  <Col lg={7} sm={7} xs={12}>
                    <div className="pl-3">
                      <Form.Check
                        inline
                        label="Transfering File"
                        checked
                        type="checkbox"
                      />
                    </div>
                  </Col>

                  <Col lg={5} sm={5} xs={12}>
                    <div className="text-right">
                      <Form.Check inline label="View Only" type="checkbox" />
                      <Form.Check inline label="Can Edit" type="checkbox" />
                    </div>
                  </Col>
                </Row>

                <Row>
                  <Col lg={7} sm={7} xs={12}>
                    <div className="pl-3">
                      <Form.Check
                        inline
                        label="Discharge Summary"
                        type="checkbox"
                      />
                    </div>
                  </Col>

                  <Col lg={5} sm={5} xs={12}>
                    <div className="text-right">
                      <Form.Check inline label="View Only" type="checkbox" />
                      <Form.Check inline label="Can Edit" type="checkbox" />
                    </div>
                  </Col>
                </Row>

                <Row>
                  <Col lg={7} sm={7} xs={12}>
                    <div className="pl-3">
                      <Form.Check inline label="SOAP Note" type="checkbox" />
                    </div>
                  </Col>

                  <Col lg={5} sm={5} xs={12}>
                    <div className="text-right">
                      <Form.Check inline label="View Only" type="checkbox" />
                      <Form.Check inline label="Can Edit" type="checkbox" />
                    </div>
                  </Col>
                </Row>

                <Row>
                  <Col lg={7} sm={7} xs={12}>
                    <div>
                      <Form.Check
                        inline
                        label="Documents"
                        checked
                        type="checkbox"
                      />
                    </div>
                  </Col>

                  <Col lg={5} sm={5} xs={12}>
                    <div className="text-right">
                      <Form.Check inline label="View Only" type="checkbox" />
                      <Form.Check inline label="Can Edit" type="checkbox" />
                    </div>
                  </Col>
                </Row>

                <Row>
                  <Col lg={7} sm={7} xs={12}>
                    <div>
                      <Form.Check
                        inline
                        label="Insurance"
                        checked
                        type="checkbox"
                      />
                    </div>
                  </Col>

                  <Col lg={5} sm={5} xs={12}>
                    <div className="text-right">
                      <Form.Check inline label="View Only" type="checkbox" />
                      <Form.Check inline label="Can Edit" type="checkbox" />
                    </div>
                  </Col>
                </Row>

                <Row>
                  <Col lg={7} sm={7} xs={12}>
                    <div>
                      <Form.Check
                        inline
                        label="Appointments"
                        checked
                        type="checkbox"
                      />
                    </div>
                  </Col>

                  <Col lg={5} sm={5} xs={12}>
                    <div className="text-right">
                      <Form.Check inline label="View Only" type="checkbox" />
                      <Form.Check inline label="Can Edit" type="checkbox" />
                    </div>
                  </Col>
                </Row>

                <hr />

                <h5>Scheduling</h5>

                <Row>
                  <Col lg={12} sm={12} xs={12}>
                    <div>
                      <Form.Check
                        inline
                        label="Scheduling"
                        className="font--weight-label mb-3"
                        checked
                        type="checkbox"
                      />
                    </div>
                  </Col>
                </Row>

                <Row>
                  <Col lg={7} sm={7} xs={12}>
                    <div className="pl-3">
                      <Form.Check
                        inline
                        label="Check In / Checkout"
                        checked
                        type="checkbox"
                      />
                    </div>
                  </Col>

                  <Col lg={5} sm={5} xs={12}>
                    <div className="text-right">
                      <Form.Check inline label="View Only" type="checkbox" />
                      <Form.Check inline label="Can Edit" type="checkbox" />
                    </div>
                  </Col>
                </Row>

                <Row>
                  <Col lg={7} sm={7} xs={12}>
                    <div className="pl-3">
                      <Form.Check
                        inline
                        label="Rescheduling Appointment"
                        checked
                        type="checkbox"
                      />
                    </div>
                  </Col>

                  <Col lg={5} sm={5} xs={12}>
                    <div className="text-right">
                      <Form.Check inline label="View Only" type="checkbox" />
                      <Form.Check inline label="Can Edit" type="checkbox" />
                    </div>
                  </Col>
                </Row>

                <Row>
                  <Col lg={7} sm={7} xs={12}>
                    <div className="pl-3">
                      <Form.Check
                        inline
                        label="Appointment Cancellation"
                        checked
                        type="checkbox"
                      />
                    </div>
                  </Col>

                  <Col lg={5} sm={5} xs={12}>
                    <div className="text-right">
                      <Form.Check inline label="View Only" type="checkbox" />
                      <Form.Check inline label="Can Edit" type="checkbox" />
                    </div>
                  </Col>
                </Row>

                <Row>
                  <Col lg={7} sm={7} xs={12}>
                    <div className="pl-3">
                      <Form.Check
                        inline
                        label="Marking No show"
                        checked
                        type="checkbox"
                      />
                    </div>
                  </Col>

                  <Col lg={5} sm={5} xs={12}>
                    <div className="text-right">
                      <Form.Check inline label="View Only" type="checkbox" />
                      <Form.Check inline label="Can Edit" type="checkbox" />
                    </div>
                  </Col>
                </Row>

                <Row>
                  <Col lg={7} sm={7} xs={12}>
                    <div className="pl-3">
                      <Form.Check
                        inline
                        label="Blocking Calender"
                        type="checkbox"
                      />
                    </div>
                  </Col>

                  <Col lg={5} sm={5} xs={12}>
                    <div className="text-right">
                      <Form.Check inline label="View Only" type="checkbox" />
                      <Form.Check inline label="Can Edit" type="checkbox" />
                    </div>
                  </Col>
                </Row>

                <Row>
                  <Col lg={7} sm={7} xs={12}>
                    <div className="pl-3">
                      <Form.Check
                        inline
                        label="Mark as Private Client"
                        checked
                        type="checkbox"
                      />
                    </div>
                  </Col>

                  <Col lg={5} sm={5} xs={12}>
                    <div className="text-right">
                      <Form.Check inline label="View Only" type="checkbox" />
                      <Form.Check inline label="Can Edit" type="checkbox" />
                    </div>
                  </Col>
                </Row>

                <hr />

                <h5>Billing</h5>

                <Row>
                  <Col lg={12} sm={12} xs={12}>
                    <div>
                      <Form.Check
                        inline
                        label="Billing"
                        className="font--weight-label mb-3"
                        checked
                        type="checkbox"
                      />
                    </div>
                  </Col>
                </Row>

                <Row>
                  <Col lg={7} sm={7} xs={12}>
                    <div className="pl-3">
                      <Form.Check
                        inline
                        label="ICD 10 Codes"
                        checked
                        type="checkbox"
                      />
                    </div>
                  </Col>

                  <Col lg={5} sm={5} xs={12}>
                    <div className="text-right">
                      <Form.Check inline label="View Only" type="checkbox" />
                      <Form.Check inline label="Can Edit" type="checkbox" />
                    </div>
                  </Col>
                </Row>

                <Row>
                  <Col lg={7} sm={7} xs={12}>
                    <div className="pl-3">
                      <Form.Check
                        inline
                        label="Adding Products"
                        checked
                        type="checkbox"
                      />
                    </div>
                  </Col>

                  <Col lg={5} sm={5} xs={12}>
                    <div className="text-right">
                      <Form.Check inline label="View Only" type="checkbox" />
                      <Form.Check inline label="Can Edit" type="checkbox" />
                    </div>
                  </Col>
                </Row>

                <Row>
                  <Col lg={7} sm={7} xs={12}>
                    <div className="pl-3">
                      <Form.Check
                        inline
                        label="Attachments"
                        checked
                        type="checkbox"
                      />
                    </div>
                  </Col>

                  <Col lg={5} sm={5} xs={12}>
                    <div className="text-right">
                      <Form.Check inline label="View Only" type="checkbox" />
                      <Form.Check inline label="Can Edit" type="checkbox" />
                    </div>
                  </Col>
                </Row>
                <hr />

                <h5>Admin</h5>
                <Row>
                  <Col lg={7} sm={7} xs={12}>
                    <div className=" mb-3">
                      <Form.Check
                        inline
                        label="Admin Access"
                        className="font--weight-label"
                        checked
                        type="checkbox"
                      />
                    </div>
                  </Col>
                  <Col lg={5} sm={5} xs={12}>
                    <div className="text-right  mb-3">
                      <Form.Check inline label="View Only" type="checkbox" />
                      <Form.Check inline label="Can Edit" type="checkbox" />
                    </div>
                  </Col>
                </Row>

                <Row>
                  <Col lg={7} sm={7} xs={12}>
                    <div className="pl-3">
                      <Form.Check
                        inline
                        label="Facility Management"
                        checked
                        type="checkbox"
                      />
                    </div>
                  </Col>

                  <Col lg={5} sm={5} xs={12}>
                    <div className="text-right">
                      <Form.Check inline label="View Only" type="checkbox" />
                      <Form.Check inline label="Can Edit" type="checkbox" />
                    </div>
                  </Col>
                </Row>

                <Row>
                  <Col lg={7} sm={7} xs={12}>
                    <div className="pl-3">
                      <Form.Check
                        inline
                        label="Settings"
                        checked
                        type="checkbox"
                      />
                    </div>
                  </Col>

                  <Col lg={5} sm={5} xs={12}>
                    <div className="text-right">
                      <Form.Check inline label="View Only" type="checkbox" />
                      <Form.Check inline label="Can Edit" type="checkbox" />
                    </div>
                  </Col>
                </Row>

                <Row>
                  <Col lg={7} sm={7} xs={12}>
                    <div className="pl-3">
                      <Form.Check
                        inline
                        label="Services"
                        checked
                        type="checkbox"
                      />
                    </div>
                  </Col>

                  <Col lg={5} sm={5} xs={12}>
                    <div className="text-right">
                      <Form.Check inline label="View Only" type="checkbox" />
                      <Form.Check inline label="Can Edit" type="checkbox" />
                    </div>
                  </Col>
                </Row>

                <Row>
                  <Col lg={7} sm={7} xs={12}>
                    <div className="pl-3">
                      <Form.Check
                        inline
                        label="Forms"
                        checked
                        type="checkbox"
                      />
                    </div>
                  </Col>

                  <Col lg={5} sm={5} xs={12}>
                    <div className="text-right">
                      <Form.Check inline label="View Only" type="checkbox" />
                      <Form.Check inline label="Can Edit" type="checkbox" />
                    </div>
                  </Col>
                </Row>

                <Row>
                  <Col lg={7} sm={7} xs={12}>
                    <div className="pl-3">
                      <Form.Check
                        inline
                        label="Appointments"
                        checked
                        type="checkbox"
                      />
                    </div>
                  </Col>

                  <Col lg={5} sm={5} xs={12}>
                    <div className="text-right">
                      <Form.Check inline label="View Only" type="checkbox" />
                      <Form.Check inline label="Can Edit" type="checkbox" />
                    </div>
                  </Col>
                </Row>

                <Row>
                  <Col lg={7} sm={7} xs={12}>
                    <div className="pl-3">
                      <Form.Check
                        inline
                        label="Discounts"
                        checked
                        type="checkbox"
                      />
                    </div>
                  </Col>

                  <Col lg={5} sm={5} xs={12}>
                    <div className="text-right">
                      <Form.Check inline label="View Only" type="checkbox" />
                      <Form.Check inline label="Can Edit" type="checkbox" />
                    </div>
                  </Col>
                </Row>

                <Row>
                  <Col lg={7} sm={7} xs={12}>
                    <div className="pl-3">
                      <Form.Check
                        inline
                        label="User Management"
                        checked
                        type="checkbox"
                      />
                    </div>
                  </Col>

                  <Col lg={5} sm={5} xs={12}>
                    <div className="text-right">
                      <Form.Check inline label="View Only" type="checkbox" />
                      <Form.Check inline label="Can Edit" type="checkbox" />
                    </div>
                  </Col>
                </Row>

                <Row>
                  <Col lg={7} sm={7} xs={12}>
                    <div className="pl-3">
                      <Form.Check
                        inline
                        label="Access Management"
                        checked
                        type="checkbox"
                      />
                    </div>
                  </Col>

                  <Col lg={5} sm={5} xs={12}>
                    <div className="text-right">
                      <Form.Check inline label="View Only" type="checkbox" />
                      <Form.Check inline label="Can Edit" type="checkbox" />
                    </div>
                  </Col>
                </Row>

                <Row>
                  <Col lg={7} sm={7} xs={12}>
                    <div className="pl-3">
                      <Form.Check
                        inline
                        label="Inventory"
                        checked
                        type="checkbox"
                      />
                    </div>
                  </Col>

                  <Col lg={5} sm={5} xs={12}>
                    <div className="text-right">
                      <Form.Check inline label="View Only" type="checkbox" />
                      <Form.Check inline label="Can Edit" type="checkbox" />
                    </div>
                  </Col>
                </Row>
              </div>

              <Row>
                <Col Col lg={12} sm={12} xs={12}>
                  <div className="text-center form-action-btn mt-3 mb-3">
                    <Button className="btn btn-theme-white pl-2 pr-2">
                      Cancel
                    </Button>
                    <Button className="btn btn-theme pl-2 pr-2 ml-2">
                      Save
                    </Button>
                  </div>
                </Col>
              </Row>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default EditPreferences;
