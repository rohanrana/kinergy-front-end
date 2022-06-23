import React from "react";
import { Form, Col, Row, Button } from "react-bootstrap";

const Addcoupon = () => {
    return (
        <>
            <h5>Add New Coupon</h5>
            <Form>
            <Form.Group className="mb-3 form-type">
              <Form.Label>Title</Form.Label>
              <Form.Control value="Father's Day" />
            </Form.Group>

            <Form.Group className="mb-3 form-type">
              <Form.Label>Coupon Code</Form.Label>
              <Form.Control value="FATHERSDAY20" />
            </Form.Group>

            <Form.Group className="mb-3 form-type">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows="3"
                value="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              />
            </Form.Group>

            <Row>
              <Col lg={6} sm={6} xs={12}>
                <Form.Group className="mb-3 form-type">
                  <Form.Label>Start Date*</Form.Label>
                  <Form.Control type="date" />
                </Form.Group>
              </Col>

              <Col lg={6} sm={6} xs={12}>
                <Form.Group className="mb-3 form-type">
                  <Form.Label>End Date*</Form.Label>
                  <Form.Control type="date" />
                </Form.Group>
              </Col>
            </Row>

            <h6>Usage Limit per User</h6>
            <p>Number of times coupon can be used by a single user</p>

            <Form.Group className="mb-3">
              <Form.Control value="02" />
            </Form.Group>

            <h6>Discount Type*</h6>
            <p>Select the type of discount you want to offer</p>

            {["radio"].map((type) => (
              <div key={`inline-${type}`} className="mb-3">
                <Form.Check
                  inline
                  checked
                  label="Percentage"
                  name="discount_type"
                  type={type}
                  id={`inline-${type}-1`}
                />
                <Form.Check
                  inline
                  label="Amount"
                  name="discount_type"
                  type={type}
                  id={`inline-${type}-2`}
                />
              </div>
            ))}

            <Form.Group className="mb-3">
              <Row>
                <Col lg="2" sm="4" xs="4">
                  <Form.Control value="%" className="text-center" disabled />
                </Col>

                <Col lg="8" sm="8" xs="8">
                  <Form.Control value="20 " />
                </Col>
              </Row>
            </Form.Group>

            {/* <Row>
              <Col Col lg={12} sm={12} xs={12}>
                <div className="text-center form-action-btn mt-3">
                  <Button className="btn btn-theme-white pl-2 pr-2">
                    Cancel
                  </Button>
                  <Button className="btn btn-theme pl-2 pr-2 ml-2">Next</Button>
                </div>
              </Col>
            </Row> */}
          </Form>
        </>
    )
}

export default Addcoupon;