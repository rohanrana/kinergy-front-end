import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Sidebar from "../../sidenav/Sidebar";
import ClientLeftMenu from "../ClientLeftMenu";


const AddNewMedicalRecords = () => {
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
              <h5 className="mb-3">
                <a href="#/medical-record-listing" className="theme-color mr-2">
                  <i className="fas fa-chevron-left"></i>
                </a>
                Add New Medical Record
              </h5>
              <hr />
              <Form>
             
                <h6>Personal Details</h6>
                <Row>
                <Col lg={4} sm={6} xs={12}>
                    <Form.Group className="mb-3">
                        <Form.Control placeholder="Date Of Onset" />
                    </Form.Group>
                  </Col>

                  <Col lg={4} sm={6} xs={12}>
                    <Form.Group className="mb-3">
                        <Form.Control placeholder="Treated By*" />
                    </Form.Group>
                  </Col>

                  <Col lg={4} sm={6} xs={12}>
                    <Form.Group className="mb-3">
                    <Form.Select >
                        <option>Case Physician (Y/N)*</option>
                            <option>Yes</option>
                            <option>No</option>
                      </Form.Select>
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                <Col lg={4} sm={6} xs={12}>
                    <Form.Group className="mb-3">
                    <Form.Control placeholder="Case Physician Name" />
                    </Form.Group>
                  </Col>

                  <Col lg={4} sm={6} xs={12}>
                    <Form.Group className="mb-3">
                    <Form.Select >
                        <option>Treatment Scripted Recieved</option>
                       
                      </Form.Select>
                    </Form.Group>
                  </Col>
                </Row>
                <hr />

                <h6>Injury Details</h6>

                <Row>
                <Col lg={4} sm={6} xs={12}>
                    <Form.Group className="mb-3">
                    <Form.Select >
                        <option>Injury Type*</option>
                        <option>Contusion</option>
                        <option>Abrasion</option>
                        <option>Laceration</option>
                        <option>Puncture</option>
                        <option>Sprain</option>
                        <option>Strain</option>
                        <option>Subluxation</option>
                        <option>Dislocation</option>
                        <option>Fracture</option>
                        <option>Burn</option>
                        <option>Nerve Injury</option>
                        <option>Concussion</option>
                      </Form.Select>
                    </Form.Group>
                  </Col>
                </Row>

                <hr />

                <h6>Select Body Part and Side</h6>
                <Row>
                <Col lg={4} sm={5} xs={12}>
                    <Form.Group className="mb-3">
                        <Form.Select>
                            <option>Body Side*</option>
                            <option>Rigth</option>
                            <option>Left</option>
                            <option>Central</option>
                            <option>Bilateral</option>
                            <option>Midline</option>
                            <option>N/A</option>
                      </Form.Select>
                    </Form.Group>
                  </Col>

                  <Col lg={4} sm={5} xs={12}>
                    <Form.Group className="mb-3">
                        <Form.Select >
                            <option>Body Part*</option>
                            <option>Head</option>
                            <option>Face</option>
                            <option>TMJ</option>
                            <option>Nose</option>
                            <option>Eyes</option>
                            <option>Ear</option>
                            <option>Mouth/Dental</option>
                            <option>Neck</option>
                            <option>Chest/Sternum</option>
                            <option>Ribs</option>
                            <option>Abdomen</option>
                            <option>Thoracic Spine</option>
                            <option>Lumbar Spine</option>
                            <option>Pelvis</option>
                            <option>Shoulder</option>
                            <option>Upper Arm</option>
                            <option>Elbow</option>
                            <option>Forearm Arm</option>
                            <option>Wrist</option>
                            <option>Hand</option>
                            <option>Finger</option>
                            <option>Hip</option>
                            <option>Thigh</option>
                            <option>Knee</option>
                            <option>Lower Leg</option>
                            <option>Ankle</option>
                            <option>Foot</option>
                            <option>Toe</option>
                            <option>Other</option>
                     
                      </Form.Select>
                    </Form.Group>
                  </Col>

                  <Col lg={4} sm={2} xs={12}>
                    <Form.Group className="mb-3 add-new-row-btn">
                        <a href="#/"><i className="fas fa-trash"></i></a>
                    </Form.Group>
                  </Col>
                </Row>

                <Row>
                <Col lg={4} sm={5} xs={12}>
                    <Form.Group className="mb-3">
                        <Form.Select>
                            <option>Body Side*</option>
                            <option>Rigth</option>
                            <option>Left</option>
                            <option>Central</option>
                            <option>Bilateral</option>
                            <option>Midline</option>
                            <option>N/A</option>
                      </Form.Select>
                    </Form.Group>
                  </Col>

                  <Col lg={4} sm={5} xs={12}>
                    <Form.Group className="mb-3">
                        <Form.Select >
                            <option>Body Part*</option>
                            <option>Head</option>
                            <option>Face</option>
                            <option>TMJ</option>
                            <option>Nose</option>
                            <option>Eyes</option>
                            <option>Ear</option>
                            <option>Mouth/Dental</option>
                            <option>Neck</option>
                            <option>Chest/Sternum</option>
                            <option>Ribs</option>
                            <option>Abdomen</option>
                            <option>Thoracic Spine</option>
                            <option>Lumbar Spine</option>
                            <option>Pelvis</option>
                            <option>Shoulder</option>
                            <option>Upper Arm</option>
                            <option>Elbow</option>
                            <option>Forearm Arm</option>
                            <option>Wrist</option>
                            <option>Hand</option>
                            <option>Finger</option>
                            <option>Hip</option>
                            <option>Thigh</option>
                            <option>Knee</option>
                            <option>Lower Leg</option>
                            <option>Ankle</option>
                            <option>Foot</option>
                            <option>Toe</option>
                            <option>Other</option>
                     
                      </Form.Select>
                    </Form.Group>
                  </Col>

                  <Col lg={4} sm={2} xs={12}>
                    <Form.Group className="mb-3 add-new-row-btn">
                        <a href="#/"><i className="fas fa-plus"></i></a>
                    </Form.Group>
                  </Col>
                </Row>
                
                <Row>

                  <Col lg={12} sm={12} xs={12}>
                    <Form.Group className="mb-3">
                        <Form.Control as="textarea" rows="3" placeholder="Injury Description" />
                    </Form.Group>
                  </Col>

                  <Col lg={12} sm={12} xs={12}>
                    <Form.Group className="mb-3">
                        <Form.Control as="textarea" rows="3" placeholder="Restrictions and limitations" />
                    </Form.Group>
                  </Col>
                </Row>

                <Row>
                <Col Col lg={12} sm={12} xs={12}>
                    <div className="text-center form-action-btn mt-3">
                      <Button className="btn btn-theme-white pl-2 pr-2 ml-0">
                        Cancel
                      </Button>

                      <Button className="btn btn-theme pl-2 pr-2 ml-2">
                        Save & Next
                      </Button>
                    </div>
                  </Col>
                </Row>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AddNewMedicalRecords;
