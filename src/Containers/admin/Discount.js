import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Button,
  ButtonGroup,
  ButtonToolbar,
  DropdownButton,
  Table,
  Dropdown,
  InputGroup,
  FormControl,
  Pagination,
  Modal,
  Form,
} from "react-bootstrap";
import AdminLeftMenu from "./AdminLeftMenu";

const Discount = () => {
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
            <div className="appointment-card">
              <ButtonToolbar
                className="justify-content-between mb-3"
                aria-label="Toolbar with Button groups"
              >
                <InputGroup>
                  <FormControl
                    className="rounded mr-2"
                    type="text"
                    placeholder="Search Users..."
                  />
                </InputGroup>

                <ButtonGroup className="rounded">
                  <Button className="btn btn-theme-white rounded-left">
                    Status
                  </Button>
                  <DropdownButton className=" p-0 rounded-0 mr-2" title="">
                    <Dropdown.Item eventKey="1">1</Dropdown.Item>
                    <Dropdown.Item eventKey="2">2</Dropdown.Item>
                    <Dropdown.Item eventKey="2">3</Dropdown.Item>
                    <Dropdown.Item eventKey="2">4</Dropdown.Item>
                  </DropdownButton>

                  <Button className="btn btn-theme ml-2" onClick={handleShow}>
                    + Add Coupon
                  </Button>
                </ButtonGroup>
              </ButtonToolbar>
              <Table responsive>
                <thead>
                  <tr>
                    <th className="text-left">Title</th>
                    <th>Coupon Code</th>
                    <th>Start Date</th>
                    <th>End Date</th>
                    <th colSpan="2" className="text-left">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="text-left">Father's Day</td>
                    <td>KINERGY12</td>
                    <td>14-May-2022</td>
                    <td>22-May-2022</td>
                    <td className="text-left">Active</td>
                    <td className="text-left">
                      <a href="#/discount-detail" className="text-dark">
                        <u>View Details</u>
                      </a>
                    </td>
                  </tr>

                  <tr>
                    <td className="text-left">Welcome Card</td>
                    <td>KINERGY12</td>
                    <td>14-May-2022</td>
                    <td>22-May-2022</td>
                    <td className="text-left">Active</td>
                    <td className="text-left">
                      <a href="#/discount-detail" className="text-dark">
                        <u>View Details</u>
                      </a>
                    </td>
                  </tr>

                  <tr>
                    <td className="text-left">Theraphy Day</td>
                    <td>KINERGY12</td>
                    <td>14-May-2022</td>
                    <td>22-May-2022</td>
                    <td className="text-left">Inactive</td>
                    <td className="text-left">
                      <a href="#/discount-detail" className="text-dark">
                        <u>View Details</u>
                      </a>
                    </td>
                  </tr>

                  <tr>
                    <td className="text-left">Stay Healthy</td>
                    <td>KINERGY12</td>
                    <td>14-May-2022</td>
                    <td>22-May-2022</td>
                    <td className="text-left">Active</td>
                    <td className="text-left">
                      <a href="#/discount-detail" className="text-dark">
                        <u>View Details</u>
                      </a>
                    </td>
                  </tr>

                  <tr>
                    <td className="text-left">Save your Money</td>
                    <td>KINERGY12</td>
                    <td>14-May-2022</td>
                    <td>22-May-2022</td>
                    <td className="text-left">Inactive</td>
                    <td className="text-left">
                      <a href="#/discount-detail" className="text-dark">
                        <u>View Details</u>
                      </a>
                    </td>
                  </tr>

                  <tr>
                    <td className="text-left">Special Session</td>
                    <td>KINERGY12</td>
                    <td>14-May-2022</td>
                    <td>22-May-2022</td>
                    <td className="text-left">Inactive</td>
                    <td className="text-left">
                      <a href="#/discount-detail" className="text-dark">
                        <u>View Details</u>
                      </a>
                    </td>
                  </tr>

                  <tr>
                    <td className="text-left">Thank you Card</td>
                    <td>KINERGY12</td>
                    <td>14-May-2022</td>
                    <td>22-May-2022</td>
                    <td className="text-left">Inactive</td>
                    <td className="text-left">
                      <a href="#/discount-detail" className="text-dark">
                        <u>View Details</u>
                      </a>
                    </td>
                  </tr>

                  <tr>
                    <td className="text-left">Stay Fit & Fine</td>
                    <td>KINERGY12</td>
                    <td>14-May-2022</td>
                    <td>22-May-2022</td>
                    <td className="text-left">Inactive</td>
                    <td className="text-left">
                      <a href="#/discount-detail" className="text-dark">
                        <u>View Details</u>
                      </a>
                    </td>
                  </tr>
                </tbody>
              </Table>
              <Pagination size="sm">
                <Pagination.First />
                <Pagination.Prev />
                <Pagination.Item>{1}</Pagination.Item>
                <Pagination.Ellipsis />

                <Pagination.Item>{10}</Pagination.Item>
                <Pagination.Item active>{12}</Pagination.Item>
                <Pagination.Item>{13}</Pagination.Item>

                <Pagination.Ellipsis />
                <Pagination.Item>{20}</Pagination.Item>
                <Pagination.Next />
                <Pagination.Last />
              </Pagination>
            </div>
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

            <Row>
              <Col Col lg={12} sm={12} xs={12}>
                <div className="text-center form-action-btn mt-3">
                  <Button className="btn btn-theme-white pl-2 pr-2">
                    Cancel
                  </Button>
                  <Button className="btn btn-theme pl-2 pr-2 ml-2">Next</Button>
                </div>
              </Col>
            </Row>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Discount;
