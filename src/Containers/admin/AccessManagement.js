import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Modal } from "react-bootstrap";

import AdminLeftMenu from "./AdminLeftMenu";

const AccessManagement = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="clients">
 
      <Container fluid>
        <Row>
          <Col lg={3} sm={4} xs={12}>
            <AdminLeftMenu />
          </Col>
          <Col lg={9} sm={8} xs={12}>
            <Row>
              <Col lg={12} sm={12} xs={12}>
                <ul className="preference-top-links">
                  <li>Level 0</li>
                  <li>Level 1</li>
                  <li>Level 2</li>
                  <li>Level 3</li>
                  <li className="active">Level 4</li>
                  <li>Level 5</li>
                  <li>Level 6</li>
                </ul>
              </Col>
            </Row>
            <Row>
              <Col lg={4} sm={6} xs={12}>
                <Form.Group className="mb-3 form-type">
                  <Form.Control placeholder="Search preferences" />
                </Form.Group>
              </Col>

              <Col lg={8} sm={6} xs={12}>
                <div className="text-right">
                  <Button className="btn btn-theme" onClick={handleShow}>
                    + Add Level
                  </Button>
                </div>
              </Col>
            </Row>
            <Form>
              <div className="appointment-card form-type">
                <h5 className="mb-3">Clinicians</h5>
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

      <Modal
        className="right"
        show={show}
        onHide={handleClose}
        animation={false}
      >
        <Modal.Header className="border-0 pb-0" closeButton></Modal.Header>
        <Modal.Body>
          <h5 className="mb-5">Add New Access Level</h5>
          <Form>
            <Form.Group className="mb-3">
              <Form.Control placeholder="Level 7" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Select>
                <option>Import preferences from</option>
                <option value="1">Level 0</option>
                <option value="2">Level 1</option>
                <option value="3">Level 2</option>
                <option value="4">Level 3</option>
                <option value="5">Level 4</option>
                <option value="6">Level 5</option>
                <option value="7">Level 6</option>
              </Form.Select>
            </Form.Group>
            <Row>
              <Col Col lg={12} sm={12} xs={12}>
                <div className="text-center form-action-btn mt-3">
                  <Button className="btn btn-theme-white pl-2 pr-2">
                    Cancel
                  </Button>
                  <Button className="btn btn-theme pl-2 pr-2 ml-2">Save</Button>
                </div>
              </Col>
            </Row>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default AccessManagement;
