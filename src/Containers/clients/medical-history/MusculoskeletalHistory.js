import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Sidebar from "../../../PageLayout/SidebarNav/Sidebar";

const MusculoskeletalHistory = () => {
  return (
    <div className="clients">
      <Sidebar />
      <Container>
        <Row>
          <Col lg={12} sm={12} xs={12}>
            <div className="appointment-card social-habits">
              <h5 className="pb-2">
                <Link to="/client/client-details" className="theme-color">
                  <i className="fas fa-chevron-left mr-2"></i>
                </Link>
                Musculoskeletal History
              </h5>
              <p className="m-0">Have you ever</p>
              <hr />
              
              <Form>
              <Col lg={4} sm={4} xs={12}>
                    <Form.Group className="mb-3">
                      <Form.Control placeholder="Search" />
                    </Form.Group>
                  </Col>
                <Row>
                  <Col lg={6} sm={6} xs={12}>
                    <p>Injured your head? (Concussion)</p>
                    {["radio"].map((type) => (
                      <div key={`inline-${type}`} className="mt-3">
                        <Form.Check
                          inline
                          label="Yes"
                          name="musculoskeletal-history"
                          type={type}
                          id={`inline-${type}-1`}
                        />
                        <Form.Check
                          inline
                          label="No"
                          name="musculoskeletal-history"
                          type={type}
                          id={`inline-${type}-2`}
                        />
                      </div>
                    ))}
                  </Col>

                  <Col lg={6} sm={6} xs={12}>
                    <Form.Group className="mb-3">
                      <Form.Control placeholder="Enter you comments here" className="bg-light" as="textarea" rows="2" />
                    </Form.Group>
                  </Col>
                </Row>

                <Row>
                  <Col lg={6} sm={6} xs={12}>
                    <p>Injured your face?</p>
                    {["radio"].map((type) => (
                      <div key={`inline-${type}`} className="mt-3">
                        <Form.Check
                          inline
                          label="Yes"
                          name="musculoskeletal-history0"
                          type={type}
                          id={`inline-${type}-3`}
                        />
                        <Form.Check
                          inline
                          label="No"
                          name="musculoskeletal-history0"
                          type={type}
                          id={`inline-${type}-4`}
                        />
                      </div>
                    ))}
                  </Col>

                  <Col lg={6} sm={6} xs={12}>
                    <Form.Group className="mb-3">
                      <Form.Control placeholder="Enter you comments here" className="bg-light" as="textarea" rows="2" />
                    </Form.Group>
                  </Col>
                </Row>

                <Row>
                  <Col lg={6} sm={6} xs={12}>
                    <p>Injured your neck?</p>
                    {["radio"].map((type) => (
                      <div key={`inline-${type}`} className="mt-3">
                        <Form.Check
                          inline
                          label="Yes"
                          name="musculoskeletal-history1"
                          type={type}
                          id={`inline-${type}-5`}
                        />
                        <Form.Check
                          inline
                          label="No"
                          name="musculoskeletal-history1"
                          type={type}
                          id={`inline-${type}-6`}
                        />
                      </div>
                    ))}
                  </Col>

                  <Col lg={6} sm={6} xs={12}>
                    <Form.Group className="mb-3">
                      <Form.Control placeholder="Enter you comments here" className="bg-light" as="textarea" rows="2" />
                    </Form.Group>
                  </Col>
                </Row>

                <Row>
                  <Col lg={6} sm={6} xs={12}>
                    <p>Injured your shoulder? </p>
                    {["radio"].map((type) => (
                      <div key={`inline-${type}`} className="mt-3">
                        <Form.Check
                          inline
                          label="Yes"
                          name="musculoskeletal-history2"
                          type={type}
                          id={`inline-${type}-7`}
                        />
                        <Form.Check
                          inline
                          label="No"
                          name="musculoskeletal-history2"
                          type={type}
                          id={`inline-${type}-8`}
                        />
                      </div>
                    ))}
                  </Col>

                  <Col lg={6} sm={6} xs={12}>
                    <Form.Group className="mb-3">
                      <Form.Control placeholder="Enter you comments here" className="bg-light" as="textarea" rows="2" />
                    </Form.Group>
                  </Col>
                </Row>

                <Row>
                  <Col lg={6} sm={6} xs={12}>
                    <p>Injured an upper arm?</p>
                    {["radio"].map((type) => (
                      <div key={`inline-${type}`} className="mt-3">
                        <Form.Check
                          inline
                          label="Yes"
                          name="musculoskeletal-history3"
                          type={type}
                          id={`inline-${type}-9`}
                        />
                        <Form.Check
                          inline
                          label="No"
                          name="musculoskeletal-history3"
                          type={type}
                          id={`inline-${type}-10`}
                        />
                      </div>
                    ))}
                  </Col>

                  <Col lg={6} sm={6} xs={12}>
                    <Form.Group className="mb-3">
                      <Form.Control placeholder="Enter you comments here" className="bg-light" as="textarea" rows="2" />
                    </Form.Group>
                  </Col>
                </Row>

                <Row>
                  <Col lg={6} sm={6} xs={12}>
                    <p>Injured an elbow?</p>
                    {["radio"].map((type) => (
                      <div key={`inline-${type}`} className="mt-3">
                        <Form.Check
                          inline
                          label="Yes"
                          name="musculoskeletal-history4"
                          type={type}
                          id={`inline-${type}-11`}
                        />
                        <Form.Check
                          inline
                          label="No"
                          name="musculoskeletal-history4"
                          type={type}
                          id={`inline-${type}-12`}
                        />
                      </div>
                    ))}
                  </Col>

                  <Col lg={6} sm={6} xs={12}>
                    <Form.Group className="mb-3">
                      <Form.Control placeholder="Enter you comments here" className="bg-light" as="textarea" rows="2" />
                    </Form.Group>
                  </Col>
                </Row>

                <Row>
                  <Col lg={6} sm={6} xs={12}>
                    <p>Injured a forearm?</p>
                    {["radio"].map((type) => (
                      <div key={`inline-${type}`} className="mt-3">
                        <Form.Check
                          inline
                          label="Yes"
                          name="musculoskeletal-history5"
                          type={type}
                          id={`inline-${type}-13`}
                        />
                        <Form.Check
                          inline
                          label="No"
                          name="musculoskeletal-history5"
                          type={type}
                          id={`inline-${type}-14`}
                        />
                      </div>
                    ))}
                  </Col>

                  <Col lg={6} sm={6} xs={12}>
                    <Form.Group className="mb-3">
                      <Form.Control placeholder="Enter you comments here" className="bg-light" as="textarea" rows="2" />
                    </Form.Group>
                  </Col>
                </Row>

                <Row>
                  <Col lg={6} sm={6} xs={12}>
                    <p>Injured a wrist?</p>
                    {["radio"].map((type) => (
                      <div key={`inline-${type}`} className="mt-3">
                        <Form.Check
                          inline
                          label="Yes"
                          name="musculoskeletal-history6"
                          type={type}
                          id={`inline-${type}-15`}
                        />
                        <Form.Check
                          inline
                          label="No"
                          name="musculoskeletal-history6"
                          type={type}
                          id={`inline-${type}-16`}
                        />
                      </div>
                    ))}
                  </Col>

                  <Col lg={6} sm={6} xs={12}>
                    <Form.Group className="mb-3">
                      <Form.Control placeholder="Enter you comments here" className="bg-light" as="textarea" rows="2" />
                    </Form.Group>
                  </Col>
                </Row>

                <Row>
                  <Col lg={6} sm={6} xs={12}>
                    <p>Injured a hand?</p>
                    {["radio"].map((type) => (
                      <div key={`inline-${type}`} className="mt-3">
                        <Form.Check
                          inline
                          label="Yes"
                          name="musculoskeletal-history7"
                          type={type}
                          id={`inline-${type}-17`}
                        />
                        <Form.Check
                          inline
                          label="No"
                          name="musculoskeletal-history7"
                          type={type}
                          id={`inline-${type}-18`}
                        />
                      </div>
                    ))}
                  </Col>

                  <Col lg={6} sm={6} xs={12}>
                    <Form.Group className="mb-3">
                      <Form.Control placeholder="Enter you comments here" className="bg-light" as="textarea" rows="2" />
                    </Form.Group>
                  </Col>
                </Row>

                <Row>
                  <Col lg={6} sm={6} xs={12}>
                    <p>Injured a finger?</p>
                    {["radio"].map((type) => (
                      <div key={`inline-${type}`} className="mt-3">
                        <Form.Check
                          inline
                          label="Yes"
                          name="musculoskeletal-history8"
                          type={type}
                          id={`inline-${type}-19`}
                        />
                        <Form.Check
                          inline
                          label="No"
                          name="musculoskeletal-history8"
                          type={type}
                          id={`inline-${type}-20`}
                        />
                      </div>
                    ))}
                  </Col>

                  <Col lg={6} sm={6} xs={12}>
                    <Form.Group className="mb-3">
                      <Form.Control placeholder="Enter you comments here" className="bg-light" as="textarea" rows="2" />
                    </Form.Group>
                  </Col>
                </Row>

                <Row>
                  <Col lg={6} sm={6} xs={12}>
                    <p>Injured your abdomen?</p>
                    {["radio"].map((type) => (
                      <div key={`inline-${type}`} className="mt-3">
                        <Form.Check
                          inline
                          label="Yes"
                          name="musculoskeletal-history9"
                          type={type}
                          id={`inline-${type}-21`}
                        />
                        <Form.Check
                          inline
                          label="No"
                          name="musculoskeletal-history9"
                          type={type}
                          id={`inline-${type}-22`}
                        />
                      </div>
                    ))}
                  </Col>

                  <Col lg={6} sm={6} xs={12}>
                    <Form.Group className="mb-3">
                      <Form.Control placeholder="Enter you comments here" className="bg-light" as="textarea" rows="2" />
                    </Form.Group>
                  </Col>
                </Row>

                <Row>
                  <Col lg={6} sm={6} xs={12}>
                    <p>Injured your chest? </p>
                    {["radio"].map((type) => (
                      <div key={`inline-${type}`} className="mt-3">
                        <Form.Check
                          inline
                          label="Yes"
                          name="musculoskeletal-history10"
                          type={type}
                          id={`inline-${type}-23`}
                        />
                        <Form.Check
                          inline
                          label="No"
                          name="musculoskeletal-history10"
                          type={type}
                          id={`inline-${type}-24`}
                        />
                      </div>
                    ))}
                  </Col>

                  <Col lg={6} sm={6} xs={12}>
                    <Form.Group className="mb-3">
                      <Form.Control placeholder="Enter you comments here" className="bg-light" as="textarea" rows="2" />
                    </Form.Group>
                  </Col>
                </Row>

                <Row>
                  <Col lg={6} sm={6} xs={12}>
                    <p>Injured your ribs? </p>
                    {["radio"].map((type) => (
                      <div key={`inline-${type}`} className="mt-3">
                        <Form.Check
                          inline
                          label="Yes"
                          name="musculoskeletal-history11"
                          type={type}
                          id={`inline-${type}-25`}
                        />
                        <Form.Check
                          inline
                          label="No"
                          name="musculoskeletal-history11"
                          type={type}
                          id={`inline-${type}-26`}
                        />
                      </div>
                    ))}
                  </Col>

                  <Col lg={6} sm={6} xs={12}>
                    <Form.Group className="mb-3">
                      <Form.Control placeholder="Enter you comments here" className="bg-light" as="textarea" rows="2" />
                    </Form.Group>
                  </Col>
                </Row>

                <Row>
                  <Col lg={6} sm={6} xs={12}>
                    <p>Injured your back?</p>
                    {["radio"].map((type) => (
                      <div key={`inline-${type}`} className="mt-3">
                        <Form.Check
                          inline
                          label="Yes"
                          name="musculoskeletal-history12"
                          type={type}
                          id={`inline-${type}-27`}
                        />
                        <Form.Check
                          inline
                          label="No"
                          name="musculoskeletal-history12"
                          type={type}
                          id={`inline-${type}-28`}
                        />
                      </div>
                    ))}
                  </Col>

                  <Col lg={6} sm={6} xs={12}>
                    <Form.Group className="mb-3">
                      <Form.Control placeholder="Enter you comments here" className="bg-light" as="textarea" rows="2" />
                    </Form.Group>
                  </Col>
                </Row>

                <Row>
                  <Col lg={6} sm={6} xs={12}>
                    <p>Injured your pelvis?</p>
                    {["radio"].map((type) => (
                      <div key={`inline-${type}`} className="mt-3">
                        <Form.Check
                          inline
                          label="Yes"
                          name="musculoskeletal-history13"
                          type={type}
                          id={`inline-${type}-29`}
                        />
                        <Form.Check
                          inline
                          label="No"
                          name="musculoskeletal-history13"
                          type={type}
                          id={`inline-${type}-30`}
                        />
                      </div>
                    ))}
                  </Col>

                  <Col lg={6} sm={6} xs={12}>
                    <Form.Group className="mb-3">
                      <Form.Control placeholder="Enter you comments here" className="bg-light" as="textarea" rows="2" />
                    </Form.Group>
                  </Col>
                </Row>

                <Row>
                  <Col lg={6} sm={6} xs={12}>
                    <p>Injured a hip?</p>
                    {["radio"].map((type) => (
                      <div key={`inline-${type}`} className="mt-3">
                        <Form.Check
                          inline
                          label="Yes"
                          name="musculoskeletal-history14"
                          type={type}
                          id={`inline-${type}-31`}
                        />
                        <Form.Check
                          inline
                          label="No"
                          name="musculoskeletal-history14"
                          type={type}
                          id={`inline-${type}-32`}
                        />
                      </div>
                    ))}
                  </Col>

                  <Col lg={6} sm={6} xs={12}>
                    <Form.Group className="mb-3">
                      <Form.Control placeholder="Enter you comments here" className="bg-light" as="textarea" rows="2" />
                    </Form.Group>
                  </Col>
                </Row>

                <Row>
                  <Col lg={6} sm={6} xs={12}>
                    <p>Injured a thigh?</p>
                    {["radio"].map((type) => (
                      <div key={`inline-${type}`} className="mt-3">
                        <Form.Check
                          inline
                          label="Yes"
                          name="musculoskeletal-history15"
                          type={type}
                          id={`inline-${type}-33`}
                        />
                        <Form.Check
                          inline
                          label="No"
                          name="musculoskeletal-history15"
                          type={type}
                          id={`inline-${type}-34`}
                        />
                      </div>
                    ))}
                  </Col>

                  <Col lg={6} sm={6} xs={12}>
                    <Form.Group className="mb-3">
                      <Form.Control placeholder="Enter you comments here" className="bg-light" as="textarea" rows="2" />
                    </Form.Group>
                  </Col>
                </Row>

                <Row>
                  <Col lg={6} sm={6} xs={12}>
                    <p>Injured a hamstring?</p>
                    {["radio"].map((type) => (
                      <div key={`inline-${type}`} className="mt-3">
                        <Form.Check
                          inline
                          label="Yes"
                          name="musculoskeletal-history16"
                          type={type}
                          id={`inline-${type}-35`}
                        />
                        <Form.Check
                          inline
                          label="No"
                          name="musculoskeletal-history16"
                          type={type}
                          id={`inline-${type}-36`}
                        />
                      </div>
                    ))}
                  </Col>

                  <Col lg={6} sm={6} xs={12}>
                    <Form.Group className="mb-3">
                      <Form.Control placeholder="Enter you comments here" className="bg-light" as="textarea" rows="2" />
                    </Form.Group>
                  </Col>
                </Row>

                <Row>
                  <Col lg={6} sm={6} xs={12}>
                    <p>Injured a knee?</p>
                    {["radio"].map((type) => (
                      <div key={`inline-${type}`} className="mt-3">
                        <Form.Check
                          inline
                          label="Yes"
                          name="musculoskeletal-history17"
                          type={type}
                          id={`inline-${type}-37`}
                        />
                        <Form.Check
                          inline
                          label="No"
                          name="musculoskeletal-history17"
                          type={type}
                          id={`inline-${type}-38`}
                        />
                      </div>
                    ))}
                  </Col>

                  <Col lg={6} sm={6} xs={12}>
                    <Form.Group className="mb-3">
                      <Form.Control placeholder="Enter you comments here" className="bg-light" as="textarea" rows="2" />
                    </Form.Group>
                  </Col>
                </Row>

                <Row>
                  <Col lg={6} sm={6} xs={12}>
                    <p>Injured a lower leg?</p>
                    {["radio"].map((type) => (
                      <div key={`inline-${type}`} className="mt-3">
                        <Form.Check
                          inline
                          label="Yes"
                          name="musculoskeletal-history18"
                          type={type}
                          id={`inline-${type}-39`}
                        />
                        <Form.Check
                          inline
                          label="No"
                          name="musculoskeletal-history18"
                          type={type}
                          id={`inline-${type}-40`}
                        />
                      </div>
                    ))}
                  </Col>

                  <Col lg={6} sm={6} xs={12}>
                    <Form.Group className="mb-3">
                      <Form.Control placeholder="Enter you comments here" className="bg-light" as="textarea" rows="2" />
                    </Form.Group>
                  </Col>
                </Row>

                <Row>
                  <Col lg={6} sm={6} xs={12}>
                    <p>Injured an ankle?</p>
                    {["radio"].map((type) => (
                      <div key={`inline-${type}`} className="mt-3">
                        <Form.Check
                          inline
                          label="Yes"
                          name="musculoskeletal-history19"
                          type={type}
                          id={`inline-${type}-41`}
                        />
                        <Form.Check
                          inline
                          label="No"
                          name="musculoskeletal-history19"
                          type={type}
                          id={`inline-${type}-42`}
                        />
                      </div>
                    ))}
                  </Col>

                  <Col lg={6} sm={6} xs={12}>
                    <Form.Group className="mb-3">
                      <Form.Control placeholder="Enter you comments here" className="bg-light" as="textarea" rows="2" />
                    </Form.Group>
                  </Col>
                </Row>

                <Row>
                  <Col lg={6} sm={6} xs={12}>
                    <p>Injured a foot?</p>
                    {["radio"].map((type) => (
                      <div key={`inline-${type}`} className="mt-3">
                        <Form.Check
                          inline
                          label="Yes"
                          name="musculoskeletal-history20"
                          type={type}
                          id={`inline-${type}-43`}
                        />
                        <Form.Check
                          inline
                          label="No"
                          name="musculoskeletal-history20"
                          type={type}
                          id={`inline-${type}-44`}
                        />
                      </div>
                    ))}
                  </Col>

                  <Col lg={6} sm={6} xs={12}>
                    <Form.Group className="mb-3">
                      <Form.Control placeholder="Enter you comments here" className="bg-light" as="textarea" rows="2" />
                    </Form.Group>
                  </Col>
                </Row>

                <Row>
                  <Col lg={6} sm={6} xs={12}>
                    <p>Injured a toe?</p>
                    {["radio"].map((type) => (
                      <div key={`inline-${type}`} className="mt-3">
                        <Form.Check
                          inline
                          label="Yes"
                          name="musculoskeletal-history21"
                          type={type}
                          id={`inline-${type}-45`}
                        />
                        <Form.Check
                          inline
                          label="No"
                          name="musculoskeletal-history21"
                          type={type}
                          id={`inline-${type}-46`}
                        />
                      </div>
                    ))}
                  </Col>

                  <Col lg={6} sm={6} xs={12}>
                    <Form.Group className="mb-3">
                      <Form.Control placeholder="Enter you comments here" className="bg-light" as="textarea" rows="2" />
                    </Form.Group>
                  </Col>
                </Row>

                <Row>
                  <Col lg={6} sm={6} xs={12}>
                    <p>Injured another part not listed above?</p>
                    {["radio"].map((type) => (
                      <div key={`inline-${type}`} className="mt-3">
                        <Form.Check
                          inline
                          label="Yes"
                          name="musculoskeletal-history22"
                          type={type}
                          id={`inline-${type}-47`}
                        />
                        <Form.Check
                          inline
                          label="No"
                          name="musculoskeletal-history22"
                          type={type}
                          id={`inline-${type}-48`}
                        />
                      </div>
                    ))}
                  </Col>

                  <Col lg={6} sm={6} xs={12}>
                    <Form.Group className="mb-3">
                      <Form.Control placeholder="Enter you comments here" className="bg-light" as="textarea" rows="2" />
                    </Form.Group>
                  </Col>
                </Row>

                <Row>
                  <Col lg={6} sm={6} xs={12}>
                    <p>Had special test such as an MRI, Bone 
Scan, CT Scan, etc.</p>
                    {["radio"].map((type) => (
                      <div key={`inline-${type}`} className="mt-3">
                        <Form.Check
                          inline
                          label="Yes"
                          name="musculoskeletal-history23"
                          type={type}
                          id={`inline-${type}-49`}
                        />
                        <Form.Check
                          inline
                          label="No"
                          name="musculoskeletal-history23"
                          type={type}
                          id={`inline-${type}-50`}
                        />
                      </div>
                    ))}
                  </Col>

                  <Col lg={6} sm={6} xs={12}>
                    <Form.Group className="mb-3">
                      <Form.Control placeholder="Enter you comments here" className="bg-light" as="textarea" rows="2" />
                    </Form.Group>
                  </Col>
                </Row>

                <Row>
                  <Col lg={6} sm={6} xs={12}>
                    <p>Been advised to have surgery, but which
has not yet been done?</p>
                    {["radio"].map((type) => (
                      <div key={`inline-${type}`} className="mt-3">
                        <Form.Check
                          inline
                          label="Yes"
                          name="musculoskeletal-history24"
                          type={type}
                          id={`inline-${type}-51`}
                        />
                        <Form.Check
                          inline
                          label="No"
                          name="musculoskeletal-history24"
                          type={type}
                          id={`inline-${type}-52`}
                        />
                      </div>
                    ))}
                  </Col>

                  <Col lg={6} sm={6} xs={12}>
                    <Form.Group className="mb-3">
                      <Form.Control placeholder="Enter you comments here" className="bg-light" as="textarea" rows="2" />
                    </Form.Group>
                  </Col>
                </Row>

                <Row>
                  <Col lg={6} sm={6} xs={12}>
                    <p>Been advised to not have surgery? </p>
                    {["radio"].map((type) => (
                      <div key={`inline-${type}`} className="mt-3">
                        <Form.Check
                          inline
                          label="Yes"
                          name="musculoskeletal-history25"
                          type={type}
                          id={`inline-${type}-53`}
                        />
                        <Form.Check
                          inline
                          label="No"
                          name="musculoskeletal-history25"
                          type={type}
                          id={`inline-${type}-54`}
                        />
                      </div>
                    ))}
                  </Col>

                  <Col lg={6} sm={6} xs={12}>
                    <Form.Group className="mb-3">
                      <Form.Control placeholder="Enter you comments here" className="bg-light" as="textarea" rows="2" />
                    </Form.Group>
                  </Col>
                </Row>

                <Row>
                  <Col lg={6} sm={6} xs={12}>
                    <p>Had any plates, screws or</p>
                    {["radio"].map((type) => (
                      <div key={`inline-${type}`} className="mt-3">
                        <Form.Check
                          inline
                          label="Yes"
                          name="musculoskeletal-history26"
                          type={type}
                          id={`inline-${type}-55`}
                        />
                        <Form.Check
                          inline
                          label="No"
                          name="musculoskeletal-history26"
                          type={type}
                          id={`inline-${type}-56`}
                        />
                      </div>
                    ))}
                  </Col>

                  <Col lg={6} sm={6} xs={12}>
                    <Form.Group className="mb-3">
                      <Form.Control placeholder="Enter you comments here" className="bg-light" as="textarea" rows="2" />
                    </Form.Group>
                  </Col>
                </Row>

                <Row>
                  <Col lg={6} sm={6} xs={12}>
                    <p>Pins in your body?</p>
                    {["radio"].map((type) => (
                      <div key={`inline-${type}`} className="mt-3">
                        <Form.Check
                          inline
                          label="Yes"
                          name="musculoskeletal-history27"
                          type={type}
                          id={`inline-${type}-57`}
                        />
                        <Form.Check
                          inline
                          label="No"
                          name="musculoskeletal-history27"
                          type={type}
                          id={`inline-${type}-58`}
                        />
                      </div>
                    ))}
                  </Col>

                  <Col lg={6} sm={6} xs={12}>
                    <Form.Group className="mb-3">
                      <Form.Control placeholder="Enter you comments here" className="bg-light" as="textarea" rows="2" />
                    </Form.Group>
                  </Col>
                </Row>

                <Row>
                  <Col lg={6} sm={6} xs={12}>
                    <p>Other musculoskeletal</p>
                    {["radio"].map((type) => (
                      <div key={`inline-${type}`} className="mt-3">
                        <Form.Check
                          inline
                          label="Yes"
                          name="musculoskeletal-history28"
                          type={type}
                          id={`inline-${type}-59`}
                        />
                        <Form.Check
                          inline
                          label="No"
                          name="musculoskeletal-history28"
                          type={type}
                          id={`inline-${type}-60`}
                        />
                      </div>
                    ))}
                  </Col>

                  <Col lg={6} sm={6} xs={12}>
                    <Form.Group className="mb-3">
                      <Form.Control placeholder="Enter you comments here" className="bg-light" as="textarea" rows="2" />
                    </Form.Group>
                  </Col>
                </Row>

                <Row>
                  <Col lg={6} sm={6} xs={12}>
                    <p>History not listed above?</p>
                    {["radio"].map((type) => (
                      <div key={`inline-${type}`} className="mt-3">
                        <Form.Check
                          inline
                          label="Yes"
                          name="musculoskeletal-history29"
                          type={type}
                          id={`inline-${type}-61`}
                        />
                        <Form.Check
                          inline
                          label="No"
                          name="musculoskeletal-history29"
                          type={type}
                          id={`inline-${type}-62`}
                        />
                      </div>
                    ))}
                  </Col>

                  <Col lg={6} sm={6} xs={12}>
                    <Form.Group className="mb-3">
                      <Form.Control placeholder="Enter you comments here" className="bg-light" as="textarea" rows="2" />
                    </Form.Group>
                  </Col>
                </Row>

                

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
    </div>
  );
};

export default MusculoskeletalHistory;
