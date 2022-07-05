import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Sidebar from "../../../PageLayout/SidebarNav/Sidebar";

const SocialHabits = () => {
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
                Social Habits
              </h5>
              <p className="m-0">Have you ever or do it completely</p>
              <hr />
              <Form>
                <Row>
                  <Col lg={8} sm={8} xs={12}>
                    <Form.Group className="mb-3">
                      <Form.Label>Smoke / Chew Tobacco?</Form.Label>
                      <br />
                      <input type="text" className="bg-light border" />
                    </Form.Group>
                  </Col>

                  <Col lg={4} sm={4} xs={12}>
                    {["radio"].map((type) => (
                      <div key={`inline-${type}`} className="mt-3">
                        <Form.Check
                          inline
                          checked
                          label="Yes"
                          name="smoke"
                          type={type}
                          id={`inline-${type}-1`}
                        />
                        <Form.Check
                          inline
                          label="No"
                          name="smoke"
                          type={type}
                          id={`inline-${type}-2`}
                        />
                      </div>
                    ))}
                  </Col>
                </Row>

                <Row>
                  <Col lg={8} sm={8} xs={12}>
                    <Form.Group className="mb-3">
                      <Form.Label>Drink Alcohol?</Form.Label>
                      <br />
                      <input type="text" className="bg-light border" />
                    </Form.Group>
                  </Col>

                  <Col lg={4} sm={4} xs={12}>
                    {["radio"].map((type) => (
                      <div key={`inline-${type}`} className="mt-3">
                        <Form.Check
                          inline
                          checked
                          label="Yes"
                          name="drink"
                          type={type}
                          id={`inline-${type}-1`}
                        />
                        <Form.Check
                          inline
                          label="No"
                          name="drink"
                          type={type}
                          id={`inline-${type}-2`}
                        />
                      </div>
                    ))}
                  </Col>
                </Row>

                <Row>
                  <Col lg={8} sm={8} xs={12}>
                    <Form.Group className="mb-3">
                      <Form.Label>Drink Coffee?</Form.Label>
                      <br />
                      <input type="text" className="bg-light border" />
                    </Form.Group>
                  </Col>

                  <Col lg={4} sm={4} xs={12}>
                    {["radio"].map((type) => (
                      <div key={`inline-${type}`} className="mt-3">
                        <Form.Check
                          inline
                          checked
                          label="Yes"
                          name="drink-coffee"
                          type={type}
                          id={`inline-${type}-1`}
                        />
                        <Form.Check
                          inline
                          label="No"
                          name="drink-coffee"
                          type={type}
                          id={`inline-${type}-2`}
                        />
                      </div>
                    ))}
                  </Col>
                </Row>

                <Row>
                  <Col lg={8} sm={8} xs={12}>
                    <Form.Group className="mb-3">
                      <Form.Label>Drink Soda/Pop?</Form.Label>
                      <br />
                      <input type="text" className="bg-light border" />
                    </Form.Group>
                  </Col>

                  <Col lg={4} sm={4} xs={12}>
                    {["radio"].map((type) => (
                      <div key={`inline-${type}`} className="mt-3">
                        <Form.Check
                          inline
                          checked
                          label="Yes"
                          name="drink-soda"
                          type={type}
                          id={`inline-${type}-1`}
                        />
                        <Form.Check
                          inline
                          label="No"
                          name="drink-soda"
                          type={type}
                          id={`inline-${type}-2`}
                        />
                      </div>
                    ))}
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

export default SocialHabits;
