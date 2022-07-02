import React from "react";
import {
  Container,
  Row,
  Col,
  Modal,
  Table,
  Pagination,
  ButtonGroup,
  Button,
  ButtonToolbar,
  Dropdown,
  DropdownButton,
  FormControl,
  InputGroup,
  Form,
} from "react-bootstrap";
import Sidebar from "../../PageLayout/SidebarNav/Sidebar";
import AdminLeftMenu from "./AdminLeftMenu";

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body className="p-5">
        <a className="close-modal-btn" onClick={props.onHide}>
          <i className="fas fa-times"></i>
        </a>
        <h4>Edit Staff Member</h4>
        <p className="mb-3">Courtney Brittney</p>
        <Form>
          <Form.Group className="mb-3">
            <Form.Select aria-label="Default select example">
              <option>Staff Level</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Select aria-label="Default select example">
              <option>Designation</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Select>
          </Form.Group>
          <Row>
            <Col lg={8} sm={8} xs={8}>
              <p>Lock Staff member</p>
            </Col>
            <Col lg={4} sm={4} xs={4} className="text-right">
              <Form.Check type="switch" id="custom-switch" />
            </Col>
          </Row>

          <Row>
            <Col lg={8} sm={8} xs={8}>
              <p>Archive Staff Member</p>
            </Col>
            <Col lg={4} sm={4} xs={4} className="text-right">
              <Form.Check type="switch" id="custom-switch" />
            </Col>
          </Row>
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
  );
}

const StaffListing = () => {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <div className="clients">
      <Sidebar />
      <Container fluid>
        <Row>
          <Col lg={2} sm={4} xs={12}>
            <AdminLeftMenu />
          </Col>
          <Col lg={10} sm={8} xs={12}>
            <div className="appointment-card">
              <ButtonToolbar
                className="justify-content-between mb-3"
                aria-label="Toolbar with Button groups"
              >
                <InputGroup>
                  <FormControl
                    className="rounded"
                    type="text"
                    placeholder="Search Staffs..."
                  />
                </InputGroup>

                <ButtonGroup className="rounded">
                  <Button className="btn btn-theme-white">All Levels</Button>
                  <DropdownButton className=" p-0 rounded-0" title="">
                    <Dropdown.Item eventKey="1">Level 1</Dropdown.Item>
                    <Dropdown.Item eventKey="2">Level 2</Dropdown.Item>
                    <Dropdown.Item eventKey="2">Level 3</Dropdown.Item>
                    <Dropdown.Item eventKey="2">Level 4</Dropdown.Item>
                  </DropdownButton>
                  <a href="#/add-staff" className="btn btn-theme rounded ml-2">
                    + Add Staff
                  </a>
                </ButtonGroup>
              </ButtonToolbar>
              <Table responsive>
                <thead>
                  <tr>
                    <th>Staff ID</th>
                    <th>Name</th>
                    <th>Designation</th>
                    <th>Access Level</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>4312212</td>
                    <td>Courtney Brittney</td>
                    <td>Receptionist</td>
                    <td>Level 3</td>
                    <td>
                      <a href onClick={() => setModalShow(true)}>
                        Edit
                      </a>
                    </td>
                  </tr>

                  <tr>
                    <td>4312212</td>
                    <td>Courtney Brittney</td>
                    <td>Receptionist</td>
                    <td>Level 3</td>
                    <td>
                      <a href onClick={() => setModalShow(true)}>
                        Edit
                      </a>
                    </td>
                  </tr>

                  <tr>
                    <td>4312212</td>
                    <td>Courtney Brittney</td>
                    <td>Receptionist</td>
                    <td>Level 3</td>
                    <td>
                      <a href onClick={() => setModalShow(true)}>
                        Edit
                      </a>
                    </td>
                  </tr>

                  <tr>
                    <td>4312212</td>
                    <td>Courtney Brittney</td>
                    <td>Receptionist</td>
                    <td>Level 3</td>
                    <td>
                      <a href onClick={() => setModalShow(true)}>
                        Edit
                      </a>
                    </td>
                  </tr>

                  <tr>
                    <td>4312212</td>
                    <td>Courtney Brittney</td>
                    <td>Receptionist</td>
                    <td>Level 3</td>
                    <td>
                      <a href onClick={() => setModalShow(true)}>
                        Edit
                      </a>
                    </td>
                  </tr>

                  <tr>
                    <td>4312212</td>
                    <td>Courtney Brittney</td>
                    <td>Receptionist</td>
                    <td>Level 3</td>
                    <td>
                      <a href onClick={() => setModalShow(true)}>
                        Edit
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

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </div>
  );
};

export default StaffListing;
