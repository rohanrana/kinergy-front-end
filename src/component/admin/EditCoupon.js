import {React, useState} from "react";
import { Container, Row, Col, Form, Button, Modal} from "react-bootstrap";
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
        <Button className="close-modal-btn" onClick={props.onHide}>
          <i className="fas fa-times"></i>
        </Button>
        <h5>
          Are you sure, you want <b>Delete</b> this <b>Coupon?</b>
        </h5>
        <p>Note: The Coupon will be deleted permanently from the system</p>
        <Button className="btn btn-theme-white white-3">No</Button>
        <Button className="btn btn-theme ml-2">Yes</Button>
      </Modal.Body>
    </Modal>
  );
}

function MyVerticallyCenteredModal1(props) {
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body className="p-5 text-center">
        <Button className="close-modal-btn" onClick={props.onHide}>
          <i className="fas fa-times"></i>
        </Button>
        <h5 className="mb-5">
          Are you sure, you want to <b>Activate</b> this <b>Coupon?</b>
        </h5>
        <Button className="btn btn-theme-white white-3">No</Button>
        <Button className="btn btn-theme ml-2">Yes</Button>
      </Modal.Body>
    </Modal>
  );
}

const EditCoupon = () => {
  const [modalShow, setModalShow] = useState(false);
  const [modalShow1, setModalShow1] = useState(false);
  const [checked, setChecked] = useState(false);
  return (
    <div className="clients">
      <Sidebar />
      <Container fluid>
        <Form>
        <Row>
          <Col lg={6} sm="6" col={12}>
            <p className="d-flex m-0">
                <b>Status : {checked ? 'Active' : 'Inactive'}</b>
                <Form.Check 
                  type="switch"
                  id="custom-switch"
                  className="ml-2"
                  onChange={() => setChecked(!checked)}
                  onClick={() => setModalShow1(true)}
                />
              {/* <Form.Check
                type="switch"
                id="custom-switch"
                checked
                className="ml-2"
              /> */}
            </p>
          </Col>
          <Col lg={6} sm="6" col={12}>
            <p className="text-right m-0">
              <Button
                onClick={() => setModalShow(true)}
                className="btn btn-theme-white white-3 m-0"
              >
                <i className="fas fa-trash mr-2"></i>Delete
              </Button>
            </p>
          </Col>
        </Row>
        <Row>
          <Col lg={12} sm={12} xs={12}>
              <div className="appointment-card form-type">
                <h6 className="mb-3">Coupon Detail</h6>

                <Row>
                  <Col lg={4} sm={4} xs={12}>
                    <Form.Group className="mb-3">
                      <Form.Label>Title</Form.Label>
                      <Form.Control value="Scott" />
                    </Form.Group>
                  </Col>

                  <Col lg={4} sm={4} xs={12}>
                    <Form.Group className="mb-3">
                      <Form.Label>Coupon Code</Form.Label>
                      <Form.Control value="Elizabeth" />
                    </Form.Group>
                  </Col>

                  <Col lg={4} sm={4} xs={12}>
                    <Form.Group className="mb-3">
                      <Form.Label>Discount Type</Form.Label>
                      <Form.Control value="Percentage" />
                    </Form.Group>
                  </Col>

                  <Col lg={4} sm={4} xs={12}>
                    <Form.Group className="mb-3">
                      <Form.Label>Percentage</Form.Label>
                      <Form.Control value="20%" />
                    </Form.Group>
                  </Col>

                  <Col lg={4} sm={4} xs={12}>
                    <Form.Group className="mb-3">
                      <Form.Label>Start Date</Form.Label>
                      <Form.Control value="01 May, 2022" />
                    </Form.Group>
                  </Col>

                  <Col lg={4} sm={4} xs={12}>
                    <Form.Group className="mb-3">
                      <Form.Label>End Date</Form.Label>
                      <Form.Control value="25-May-2022" />
                    </Form.Group>
                  </Col>

                  <Col lg={4} sm={4} xs={12}>
                    <Form.Group className="mb-3">
                      <Form.Label>Usage limit per user</Form.Label>
                      <Form.Control value="02" />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col lg={12} sm={12} xs={12}>
                    <Form.Group className="mb-3">
                      <Form.Label>Description</Form.Label>
                      <Form.Control
                        as="textarea"
                        rows="3"
                        value="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                      />
                    </Form.Group>
                  </Col>
                </Row>
              </div>

              <div className="appointment-card">
                <h5>Coupon Valid On:</h5>
                <p>Coupon will be valid on the following Service Category:</p>
                <Row>
                  <Col lg={6} sm={6} xs={12}>
                    <Form.Group className="mb-3">
                      <Form.Select>
                        <option>Select service category</option>
                      </Form.Select>
                    </Form.Group>

                    <ul className="coupon-list-category">
                      <li>
                        Athletic Therapy{" "}
                        <span>
                          <a href="#/">
                            <i class="fas fa-times-circle"></i>
                          </a>
                        </span>
                      </li>
                      <li>
                        Performance Training{" "}
                        <span>
                          <a href="#/">
                            <i class="fas fa-times-circle"></i>
                          </a>
                        </span>
                      </li>
                    </ul>
                  </Col>

                  <Col lg={6} sm={6} xs={12}>
                    <Form.Group className="mb-3">
                      <Form.Select>
                        <option>Select service</option>
                      </Form.Select>
                    </Form.Group>
                    <h6>Athletic Therapy:</h6>

                    <ul className="coupon-list-category">
                      <li>
                        Vestibular Rehabilitation{" "}
                        <span>
                          <a href="#/">
                            <i class="fas fa-times-circle"></i>
                          </a>
                        </span>
                      </li>
                      <li>
                        Video Biochemical Analysis{" "}
                        <span>
                          <a href="#/">
                            <i class="fas fa-times-circle"></i>
                          </a>
                        </span>
                      </li>
                      <li>
                        Orthotics and Bracing{" "}
                        <span>
                          <a href="#/">
                            <i class="fas fa-times-circle"></i>
                          </a>
                        </span>
                      </li>
                      <li>
                        External Therapy{" "}
                        <span>
                          <a href="#/">
                            <i class="fas fa-times-circle"></i>
                          </a>
                        </span>
                      </li>
                    </ul>

                    <h6>Performance Training:</h6>

                    <ul className="coupon-list-category">
                      <li>
                        Performance Theraphy{" "}
                        <span>
                          <a href="#/">
                            <i class="fas fa-times-circle"></i>
                          </a>
                        </span>
                      </li>
                      <li>
                        Performance Training{" "}
                        <span>
                          <a href="#/">
                            <i class="fas fa-times-circle"></i>
                          </a>
                        </span>
                      </li>
                      <li>
                        Personal Training{" "}
                        <span>
                          <a href="#/">
                            <i class="fas fa-times-circle"></i>
                          </a>
                        </span>
                      </li>
                      <li>
                        Remote Training{" "}
                        <span>
                          <a href="#/">
                            <i class="fas fa-times-circle"></i>
                          </a>
                        </span>
                      </li>
                    </ul>
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
          </Col>
        </Row>
            </Form>
      </Container>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
      <MyVerticallyCenteredModal1
        show={modalShow1}
        onHide={() => setModalShow1(false)}
      />
    </div>
  );
};

export default EditCoupon;
