import React from "react";
import { Container, Row, Col, Table, Form, Button } from "react-bootstrap";
import Sidebar from "../../../PageLayout/SidebarNav/Sidebar";
import Logo from "../../../image/logo.png";

const BillingReview = () => {
  return (
    <div className="clients">
      <Sidebar />
      <Container className="mt-5">
        <Row>
          <Col lg={12} sm={12} xs={12}>
            <h5>
              Billing Review{" "}
              <span className="float-right">
                <small>Status: Pending</small>
              </span>
            </h5>
          </Col>
          <Col lg={12} sm={12} xs={12}>
            <div className="appointment-card mt-3 mb-5">
              <Row>
                <Col lg={4} sm={4} xs={12}>
                  <img src={Logo} alt={Logo} height="60" />
                </Col>

                <Col lg={8} sm={8} xs={12}>
                  <div className="text-right">
                    <h6>Invoice No</h6>
                    <p>#45451654181</p>
                    <p>12-31-2021 | 14:50 PM</p>
                  </div>
                </Col>
              </Row>

              <div className="bg-light p-3">
                <Row>
                  <Col lg={6} sm={6} xs={12}>
                    <div className="text-left">
                      <h6>Billing From</h6>
                      <p>Kinergy Sports Medicine and Performance</p>
                      <p>
                        #101,9623-18A Avenue <br />
                        Las Vegas, NV 89123 <br />
                        (547)-354-6514
                      </p>
                    </div>
                  </Col>

                  <Col lg={6} sm={6} xs={12}>
                    <div className="text-right">
                      <h6>Billing To</h6>
                      <p>Scott Elizabeth</p>
                      <p>
                        #101,9623-18A Avenue <br />
                        Las Vegas, NV 89123 <br />
                        (547)-354-6514
                      </p>
                    </div>
                  </Col>
                </Row>
              </div>

              <div className="border rounded p-2 mt-3">
                <h6 className="main-h">Client Details</h6>
                <Row>
                  <Col lg={3} sm={6} xs={12}>
                    <h6>Last Name</h6>
                    <p>Elizabeth</p>
                  </Col>

                  <Col lg={3} sm={6} xs={12}>
                    <h6>First Name</h6>
                    <p>Scott</p>
                  </Col>

                  <Col lg={3} sm={6} xs={12}>
                    <h6>Phone Number</h6>
                    <p>702-544-2132</p>
                  </Col>

                  <Col lg={3} sm={6} xs={12}>
                    <h6>Email</h6>
                    <p>Scott@gmail.com</p>
                  </Col>
                </Row>
              </div>

              <Table responsive className="mt-3">
                <thead>
                  <tr>
                    <th className="text-left">Items</th>
                    <th className="text-right">Units</th>
                    <th className="text-right">Rate</th>
                    <th colSpan="2" className="text-right">
                      Amount
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="text-left">Billable Item 1</td>
                    <td className="text-right">1</td>
                    <td className="text-right">$ 65.23</td>
                    <td className="text-right">$ 65.23</td>
                    <td className="text-right">
                      <a href="#/">
                        <i className="fas fa-times billing-trash"></i>
                      </a>
                    </td>
                  </tr>

                  <tr>
                    <td className="text-left">Billable Item 2</td>
                    <td className="text-right">1</td>
                    <td className="text-right">$ 65.23</td>
                    <td className="text-right">$ 65.23</td>
                    <td className="text-right">
                      <a href="#/">
                        <i className="fas fa-times billing-trash"></i>
                      </a>
                    </td>
                  </tr>

                  <tr>
                    <td className="text-left">Billable Item 3</td>
                    <td className="text-right">1</td>
                    <td className="text-right">$ 65.23</td>
                    <td className="text-right">$ 65.23</td>
                    <td className="text-right">
                      <a href="#/">
                        <i className="fas fa-times billing-trash"></i>
                      </a>
                    </td>
                  </tr>

                  <tr>
                    <td className="text-right">
                      <Form.Control />
                    </td>
                    <td className="text-right">
                      <Form.Control className="w-50" />
                    </td>
                    <td className="text-right">
                      <Form.Control className="w-50" />
                    </td>
                    <td className="text-right">
                      <Form.Control className="w-50" />
                    </td>
                    <td className="text-right">
                      <a href="#/">
                        <i className="fas fa-times billing-trash"></i>
                      </a>
                    </td>
                  </tr>

                  <tr>
                    <td colSpan="5" className="text-right">
                      <u>
                        <a href="#/">+ Add more</a>
                      </u>
                    </td>
                  </tr>
                </tbody>
              </Table>

              <h6 className="main-h mt-3">
                Insurance
                <span className="float-right">
                  <Form.Check
                    checked
                    type="switch"
                    label=""
                    id="disabled-custom-switch"
                  />
                </span>
              </h6>
              <Row>
                <Col lg={3} sm={6} xs={12}>
                  <h6>Insurance Provider Name</h6>
                  <p>Elizabeth</p>
                </Col>

                <Col lg={3} sm={6} xs={12}>
                  <h6>Plan / type</h6>
                  <p>Other Aetna</p>
                </Col>

                <Col lg={3} sm={6} xs={12}>
                  <h6>Member ID</h6>
                  <p>534154551</p>
                </Col>

                <Col lg={3} sm={6} xs={12}>
                  <h6>Address</h6>
                  <p>151 farming ave, vegas, LA 523645</p>
                </Col>
              </Row>

              <hr />

              <h6 className="main-h mt-3">ICD 10 Description(s) and Code(s)</h6>
              <p>
                Intervertibral disc disorders with radiculopathy, lumbar region
                (ICT-10-M15.6){" "}
                <span className="float-right">
                  <i className="fas fa-times billing-trash"></i>
                </span>
              </p>
              <hr />

              <Table responsive className="mt-3">
                <thead>
                  <tr>
                    <th className="text-left">Treatments</th>
                    <th className="text-right">Time</th>
                    <th className="text-right">Rate</th>
                    <th colSpan="2" className="text-right">
                      Amount
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="text-left">
                      56465 - Athletic Training Evaluation, Low Complexity
                    </td>
                    <td className="text-right">10</td>
                    <td className="text-right">$ 65.23</td>
                    <td className="text-right">$ 65.23</td>
                    <td className="text-right">
                      <a href="#/">
                        <i className="fas fa-times billing-trash"></i>
                      </a>
                    </td>
                  </tr>

                  <tr>
                    <td className="text-left">68465 - Manual Therapy</td>
                    <td className="text-right">30</td>
                    <td className="text-right">$ 65.23</td>
                    <td className="text-right">$ 65.23</td>
                    <td className="text-right">
                      <a href="#/">
                        <i className="fas fa-times billing-trash"></i>
                      </a>
                    </td>
                  </tr>

                  <tr>
                    <td className="text-left">89456 - Therapeutic Exercise</td>
                    <td className="text-right">15</td>
                    <td className="text-right">$ 65.23</td>
                    <td className="text-right">$ 65.23</td>
                    <td className="text-right">
                      <a href="#/">
                        <i className="fas fa-times billing-trash"></i>
                      </a>
                    </td>
                  </tr>

                  <tr>
                    <td className="text-right">
                      <Form.Control />
                    </td>
                    <td className="text-right">
                      <Form.Control className="w-50" />
                    </td>
                    <td className="text-right">
                      <Form.Control className="w-50" />
                    </td>
                    <td className="text-right">
                      <Form.Control className="w-50" />
                    </td>
                    <td className="text-right">
                      <a href="#/">
                        <i className="fas fa-times billing-trash"></i>
                      </a>
                    </td>
                  </tr>

                  <tr>
                    <td colSpan="5" className="text-right">
                      <u>
                        <a href="#/">+ Add more</a>
                      </u>
                    </td>
                  </tr>
                </tbody>
              </Table>

              <Row>
                <Col lg={6} sm={6} xs={12}>
                  <Form.Control
                    as="textarea"
                    rows="3"
                    placeholder="Please add your comments here"
                  />
                </Col>

                <Col lg={2} sm={2} xs={12}></Col>

                <Col lg={4} sm={4} xs={12}>
                  <p>
                    Subtotal{" "}
                    <span className="float-right">
                      <b>$ 195.59</b>
                    </span>
                  </p>
                  <p>
                    Grand Total{" "}
                    <span className="float-right">
                      <b>$ 195.59</b>
                    </span>
                  </p>
                </Col>
              </Row>

              <div className="text-center form-action-btn mt-3">
                <Button className="btn btn-theme pl-2 pr-2 ml-0 mt-3">
                  Save Changes
                </Button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default BillingReview;
