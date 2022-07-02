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
import Sidebar from "../../PageLayout/SidebarNav/Sidebar";
import AdminLeftMenu from "./AdminLeftMenu";

const UserManagement = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="clients">
      <Sidebar />
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

                  <Button className="btn btn-theme-white">All Lebels</Button>
                  <DropdownButton className=" p-0 rounded-0" title="">
                    <Dropdown.Item eventKey="1">Level 1</Dropdown.Item>
                    <Dropdown.Item eventKey="2">Level 2</Dropdown.Item>
                    <Dropdown.Item eventKey="2">Level 3</Dropdown.Item>
                    <Dropdown.Item eventKey="2">Level 4</Dropdown.Item>
                  </DropdownButton>
                  <Button onClick={handleShow} className="btn btn-theme ml-2">
                    + Add User
                  </Button>
                </ButtonGroup>
              </ButtonToolbar>
              <Table responsive>
                <thead>
                  <tr>
                    <th className="text-left">Name</th>
                    <th>Phone</th>
                    <th>Role</th>
                    <th>Access Level</th>
                    <th colSpan="2" className="text-left">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="text-left">Courtney Brittney</td>
                    <td>(517)-234-6546</td>
                    <td>Receptionist</td>
                    <td>Level 3</td>
                    <td className="text-left">Active</td>
                    <td className="text-left">
                      <a href="#/user-detail" className="text-dark">
                        <u>View Details</u>
                      </a>
                    </td>
                  </tr>

                  <tr>
                    <td className="text-left">Courtney Brittney</td>
                    <td>(517)-234-6546</td>
                    <td>Receptionist</td>
                    <td>Level 3</td>
                    <td className="text-left">Active</td>
                    <td className="text-left">
                      <a href="#/user-detail" className="text-dark">
                        <u>View Details</u>
                      </a>
                    </td>
                  </tr>

                  <tr>
                    <td className="text-left">Courtney Brittney</td>
                    <td>(517)-234-6546</td>
                    <td>Receptionist</td>
                    <td>Level 3</td>
                    <td className="text-left">Active</td>
                    <td className="text-left">
                      <a href="#/user-detail" className="text-dark">
                        <u>View Details</u>
                      </a>
                    </td>
                  </tr>

                  <tr>
                    <td className="text-left">Courtney Brittney</td>
                    <td>(517)-234-6546</td>
                    <td>Receptionist</td>
                    <td>Level 3</td>
                    <td className="text-left">Active</td>
                    <td className="text-left">
                      <a href="#/user-detail" className="text-dark">
                        <u>View Details</u>
                      </a>
                    </td>
                  </tr>

                  <tr>
                    <td className="text-left">Courtney Brittney</td>
                    <td>(517)-234-6546</td>
                    <td>Receptionist</td>
                    <td>Level 3</td>
                    <td className="text-left">Active</td>
                    <td className="text-left">
                      <a href="#/user-detail" className="text-dark">
                        <u>View Details</u>
                      </a>
                    </td>
                  </tr>

                  <tr>
                    <td className="text-left">Courtney Brittney</td>
                    <td>(517)-234-6546</td>
                    <td>Receptionist</td>
                    <td>Level 3</td>
                    <td className="text-left">Active</td>
                    <td className="text-left">
                      <a href="#/user-detail" className="text-dark">
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
          <h5>Add New User</h5>
          <Form>
            <Form.Group className="mb-3">
              <Form.Control placeholder="First Name" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control placeholder="Last Name" />
            </Form.Group>
            <Row>
              <Col lg={5} sm={12} xs={12}>
                <Form.Group className="mb-3">
                  <Form.Select>
                    <option>Phone Type</option>
                    <option value="1">Mobile</option>
                    <option value="2">Home</option>
                    <option value="3">Work</option>
                    <option value="4">Fax</option>
                    <option value="5">Other</option>
                  </Form.Select>
                </Form.Group>
              </Col>

              <Col lg={5} sm={9} xs={8}>
                <Form.Group className="mb-3">
                  <Form.Control placeholder="Phone Number" />
                </Form.Group>
              </Col>

              <Col lg={2} sm={3} xs={12}>
                <h5 className="mb-0 mt-2">
                  <a href="#/" className="text-dark">
                    <i class="fas fa-plus-circle"></i>
                  </a>
                </h5>
              </Col>
            </Row>

            <Row>
              <Col lg={10} sm={9} xs={8}>
                <Form.Group className="mb-3">
                  <Form.Control placeholder="Email ID" />
                </Form.Group>
              </Col>

              <Col lg={2} sm={3} xs={4}>
                <h5 className="mb-0 mt-3">
                  <a href="#/" className="text-dark">
                    <i class="fas fa-plus-circle"></i>
                  </a>
                </h5>
              </Col>
            </Row>

            <Form.Group className="mb-3">
              <Form.Select>
                <option>Gender</option>
                <option value="1">Male</option>
                <option value="2">Female</option>
                <option value="3">Other</option>
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Select>
                <option>Access Levael</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Select>
                <option>Role</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
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

export default UserManagement;
