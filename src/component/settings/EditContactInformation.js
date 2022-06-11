import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Sidebar from "../sidenav/Sidebar";

const EditContactInformation = () => {
  return (
    <div className="clients">
      <Sidebar />
      <Container fluid>
        <Row>
          <Col lg={12} sm={12} xs={12}>
            <h5>Settings</h5>
            <div className="appointment-card">
              <Form>
                <h6 className="mb-3">Contact Information</h6>

                <Row>
                  <Col lg={4} sm={4} xs={12}>
                    <Form.Group className="mb-3 form-type">
                      <Form.Label>Phone Type</Form.Label>
                      <Form.Select>
                        <option>Home</option>
                        <option value="1">Mobile</option>
                        <option value="2">Home</option>
                        <option value="3">Work</option>
                        <option value="4">Fax</option>
                        <option value="5">Other</option>
                      </Form.Select>
                    </Form.Group>
                  </Col>

                  <Col lg={4} sm={4} xs={12}>
                    <Form.Group className="mb-3 form-type">
                      <Form.Label>Phone Number</Form.Label>
                      <Form.Control value="(123)-465-6544" />
                    </Form.Group>
                  </Col>

                  <Col lg={4} sm={4} xs={12}>
                    <h5 className="mb-0 mt-3">
                      <a href="#/" className="text-dark">
                        <i class="fas fa-plus-circle"></i>
                      </a>
                    </h5>
                  </Col>
                </Row>

                <Row>
                  <Col lg={4} sm={4} xs={12}>
                    <Form.Group className="mb-3 form-type">
                      <Form.Label>Phone Type</Form.Label>
                      <Form.Select>
                        <option>Cell Phone</option>
                        <option value="1">Mobile</option>
                        <option value="2">Home</option>
                        <option value="3">Work</option>
                        <option value="4">Fax</option>
                        <option value="5">Other</option>
                      </Form.Select>
                    </Form.Group>
                  </Col>

                  <Col lg={4} sm={4} xs={12}>
                    <Form.Group className="mb-3 form-type">
                      <Form.Label>Phone Number</Form.Label>
                      <Form.Control value="(123)-465-6544" />
                    </Form.Group>
                  </Col>

                  <Col lg={4} sm={4} xs={12}>
                    <h5 className="mb-0 mt-3">
                      <a href="#/" className="text-dark">
                        <i class="fas fa-plus-circle"></i>
                      </a>
                    </h5>
                  </Col>
                </Row>
                <Row>
                  <Col lg={4} sm={4} xs={12}>
                    <Form.Group className="mb-3 form-type">
                      <Form.Label>Email</Form.Label>
                      <Form.Control value="scott@gmail.com" />
                    </Form.Group>
                  </Col>
                  <Col lg={4} sm={4} xs={12}>
                    <h5 className="mb-0 mt-3">
                      <a href="#/" className="text-dark">
                        <i class="fas fa-plus-circle"></i>
                      </a>
                    </h5>
                  </Col>
                </Row>
                <Row>
                  <Col lg={12} sm={12} xs={12}>
                    {["checkbox"].map((type) => (
                      <div key={`inline-${type}`} className="mb-3">
                        <Form.Check
                          inline
                          label="Mark this as primary email"
                          name="primary"
                          type={type}
                          id={`inline-${type}-1`}
                        />
                      </div>
                    ))}
                  </Col>
                </Row>
                <hr />
                <Row>
                  <h6 className="mb-3">Address</h6>
                  <Col lg={12} sm={12} xs={12}>
                    <Form.Group className="mb-3 form-type">
                      <Form.Label>Address</Form.Label>
                      <Form.Control value="#101,9623-18A Avenue" />
                    </Form.Group>
                  </Col>

                  <Col lg={4} sm={4} xs={12}>
                    <Form.Group className="mb-3 form-type">
                      <Form.Label>City</Form.Label>
                      <Form.Select>
                        <option>Nevada</option>
                      </Form.Select>
                    </Form.Group>
                  </Col>

                  <Col lg={4} sm={4} xs={12}>
                    <Form.Group className="mb-3 form-type">
                      <Form.Label>State</Form.Label>
                      <Form.Select>
                        <option>Las Vegas</option>
                      </Form.Select>
                    </Form.Group>
                  </Col>

                  <Col lg={4} sm={4} xs={12}>
                    <Form.Group className="mb-3 form-type">
                      <Form.Label>Zip Code</Form.Label>
                      <Form.Control placeholder="89123" />
                    </Form.Group>
                  </Col>
                </Row>

                <hr />

                <h6 className="mb-3">
                  Emergency Contact Information{" "}
                  <span className="float-right">
                    <a href="#/" className="theme-color">
                      <u>Delete</u>
                    </a>
                  </span>
                </h6>

                <Row>
                  <Col lg={4} sm={4} xs={12}>
                    <Form.Group className="mb-3 form-type">
                      <Form.Label>Full Name</Form.Label>
                      <Form.Control value="Daniel Stinson" />
                    </Form.Group>
                  </Col>

                  <Col lg={4} sm={4} xs={12}>
                    <Form.Group className="mb-3 form-type">
                      <Form.Label>Relationship</Form.Label>
                      <Form.Select>
                        <option>Brother</option>
                        <option value="1">Mobile</option>
                        <option value="2">Home</option>
                        <option value="3">Work</option>
                        <option value="4">Fax</option>
                        <option value="5">Other</option>
                      </Form.Select>
                    </Form.Group>
                  </Col>

                  <Col lg={4} sm={4} xs={12}>
                    <Form.Group className="mb-3 form-type">
                      <Form.Label>Language</Form.Label>
                      <Form.Select>
                        <option>English</option>
                        <option value="1">Mobile</option>
                        <option value="2">Home</option>
                        <option value="3">Work</option>
                        <option value="4">Fax</option>
                        <option value="5">Other</option>
                      </Form.Select>
                    </Form.Group>
                  </Col>
                </Row>

                <Row>
                  <Col lg={4} sm={4} xs={12}>
                    <Form.Group className="mb-3 form-type">
                      <Form.Label>Phone Type</Form.Label>
                      <Form.Select>
                        <option>Home</option>
                        <option value="1">Mobile</option>
                        <option value="2">Home</option>
                        <option value="3">Work</option>
                        <option value="4">Fax</option>
                        <option value="5">Other</option>
                      </Form.Select>
                    </Form.Group>
                  </Col>

                  <Col lg={4} sm={4} xs={12}>
                    <Form.Group className="mb-3 form-type">
                      <Form.Label>Phone Number</Form.Label>
                      <Form.Control value="(123)-465-6544" />
                    </Form.Group>
                  </Col>

                  <Col lg={4} sm={4} xs={12}>
                    <h5 className="mb-0 mt-3">
                      <a href="#/" className="text-dark">
                        <i class="fas fa-plus-circle"></i>
                      </a>
                    </h5>
                  </Col>
                </Row>

                <Row>
                  <Col lg={4} sm={4} xs={12}>
                    <Form.Group className="mb-3 form-type">
                      <Form.Label>Phone Type</Form.Label>
                      <Form.Select>
                        <option>Home</option>
                        <option value="1">Mobile</option>
                        <option value="2">Home</option>
                        <option value="3">Work</option>
                        <option value="4">Fax</option>
                        <option value="5">Other</option>
                      </Form.Select>
                    </Form.Group>
                  </Col>

                  <Col lg={4} sm={4} xs={12}>
                    <Form.Group className="mb-3 form-type">
                      <Form.Label>Phone Number</Form.Label>
                      <Form.Control value="(123)-465-6544" />
                    </Form.Group>
                  </Col>

                  <Col lg={4} sm={4} xs={12}>
                    <h5 className="mb-0 mt-3">
                      <a href="#/" className="text-dark">
                        <i class="fas fa-plus-circle"></i>
                      </a>
                    </h5>
                  </Col>
                </Row>

                <Row>
                  <Col Col lg={12} sm={12} xs={12}>
                    <div className="text-center form-action-btn mt-3">
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
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default EditContactInformation;
