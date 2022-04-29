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
  Badge,
  Form,

} from "react-bootstrap";
import Sidebar from "../../sidenav/Sidebar";
import AdminLeftMenu from "../AdminLeftMenu";


import StaffLogin from "../../logins/StaffLogin";
import useToken from "../../useToken";

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
        <h5 className="mb-3">Add Billable Item</h5>
        <Form>
          <Row>
            <Col Col lg={12} sm={12} xs={12}>
              <Form.Group className="mb-3">
                <Form.Select aria-label="Default select example">
                  <option>Item Type</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col Col lg={12} sm={12} xs={12}>
              <Form.Group className="mb-3">
                <Form.Control placeholder="Billable Item Code" />
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col Col lg={12} sm={12} xs={12}>
              <Form.Group className="mb-3">
                <Form.Control placeholder="Billable Item Name" />
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col Col lg={8} sm={8} xs={12}>
              <Form.Group className="mb-3">
                <Form.Control placeholder="Rate" />
              </Form.Group>
            </Col>

            <Col Col lg={4} sm={4} xs={12}>
              <Form.Group className="mb-3">
                <Form.Select aria-label="Default select example">
                  <option>Tax</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col Col lg={12} sm={12} xs={12}>
              <Form.Group className="mb-3">
                <Form.Control placeholder="Total Amount" />
              </Form.Group>
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

const BilledItem = () => {
  const [modalShow, setModalShow] = React.useState(false);
    //============ Check AUTH-TOKEN===================
    const { token, setToken } = useToken();
    if (!token) {
      return <StaffLogin />;
    }
  
  return (
    <div className="clients">
      <Sidebar />
      <Container fluid>
        <Row>
          <Col lg={12} sm={12} xs={12}>
          <div className="text-right bg-white mt-3 p-2 rounded">
              <Button
                className="btn btn-theme"
                onClick={() => setModalShow(true)}
              >
                + Add New
              </Button>
            </div></Col>
        </Row>
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
                <h4>Billable items</h4>

                <ButtonGroup className="rounded">
                  <InputGroup>
                    <FormControl
                      className="rounded mr-2"
                      type="text"
                      placeholder="Search for Billable item.."
                    />
                  </InputGroup>
                  <Button className="btn btn-theme-white">Item Type</Button>
                  <DropdownButton className=" p-0 rounded-0" title="">
                    <Dropdown.Item eventKey="1">Level 1</Dropdown.Item>
                    <Dropdown.Item eventKey="2">Level 2</Dropdown.Item>
                    <Dropdown.Item eventKey="2">Level 3</Dropdown.Item>
                    <Dropdown.Item eventKey="2">Level 4</Dropdown.Item>
                  </DropdownButton>

                  <Button className="btn btn-theme-white ml-2">Status</Button>
                  <DropdownButton className=" p-0 rounded-0" title="">
                    <Dropdown.Item eventKey="1">Active</Dropdown.Item>
                    <Dropdown.Item eventKey="2">Inactive</Dropdown.Item>
                  </DropdownButton>
                </ButtonGroup>
              </ButtonToolbar>
              <Table responsive>
                <thead>
                  <tr>
                    <th className="text-left">Billable Item</th>
                    <th className="text-left">Item Type</th>
                    <th className="text-left">Rate</th>
                    <th className="text-left">Tax</th>
                    <th className="text-left">Total Amount</th>
                    <th colSpan={2} className="text-left">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="text-left">
                      56465 - Athletic Training Eval...
                    </td>
                    <td className="text-left">Service</td>

                    <td className="text-left">100.00$</td>

                    <td className="text-left">18.00%</td>

                    <td className="text-left">118.00$</td>
                    <td className="text-left">
                      <Badge pill className="p-2" bg="success" >
                        Active
                      </Badge>
                    </td>
                    <td className="text-left">
                      <DropdownButton className="p-0 rounded-0" title="Actions">
                        <Dropdown.Item eventKey="1">Edit</Dropdown.Item>
                        <Dropdown.Item eventKey="2">Inactive</Dropdown.Item>
                      </DropdownButton>
                    </td>
                  </tr>

                  <tr>
                    <td className="text-left">
                      56465 - Athletic Training Eval...
                    </td>
                    <td className="text-left">Service</td>

                    <td className="text-left">100.00$</td>

                    <td className="text-left">18.00%</td>

                    <td className="text-left">118.00$</td>
                    <td className="text-left">
                      <Badge pill className="p-2" bg="primary">
                        Inactive
                      </Badge>
                    </td>
                    <td className="text-left">
                      <DropdownButton className="p-0 rounded-0" title="Actions">
                        <Dropdown.Item eventKey="1">Edit</Dropdown.Item>
                        <Dropdown.Item eventKey="2">Inactive</Dropdown.Item>
                      </DropdownButton>
                    </td>
                  </tr>

                  <tr>
                    <td className="text-left">
                      56465 - Athletic Training Eval...
                    </td>
                    <td className="text-left">Service</td>

                    <td className="text-left">100.00$</td>

                    <td className="text-left">18.00%</td>

                    <td className="text-left">118.00$</td>
                    <td className="text-left">
                      <Badge pill className="p-2" bg="danger">
                        Inactive
                      </Badge>
                    </td>
                    <td className="text-left">
                      <DropdownButton className="p-0 rounded-0" title="Actions">
                        <Dropdown.Item eventKey="1">Edit</Dropdown.Item>
                        <Dropdown.Item eventKey="2">Inactive</Dropdown.Item>
                      </DropdownButton>
                    </td>
                  </tr>

                  <tr>
                    <td className="text-left">
                      56465 - Athletic Training Eval...
                    </td>
                    <td className="text-left">Service</td>

                    <td className="text-left">100.00$</td>

                    <td className="text-left">18.00%</td>

                    <td className="text-left">118.00$</td>
                    <td className="text-left">
                      <Badge pill className="p-2" bg="success">
                        Active
                      </Badge>
                    </td>
                    <td className="text-left">
                      <DropdownButton className="p-0 rounded-0" title="Actions">
                        <Dropdown.Item eventKey="1">Edit</Dropdown.Item>
                        <Dropdown.Item eventKey="2">Inactive</Dropdown.Item>
                      </DropdownButton>
                    </td>
                  </tr>

                  <tr>
                    <td className="text-left">
                      56465 - Athletic Training Eval...
                    </td>
                    <td className="text-left">Service</td>

                    <td className="text-left">100.00$</td>

                    <td className="text-left">18.00%</td>

                    <td className="text-left">118.00$</td>
                    <td className="text-left">
                      <Badge pill className="p-2" bg="primary">
                        Inactive
                      </Badge>
                    </td>
                    <td className="text-left">
                      <DropdownButton className="p-0 rounded-0" title="Actions">
                        <Dropdown.Item eventKey="1">Edit</Dropdown.Item>
                        <Dropdown.Item eventKey="2">Inactive</Dropdown.Item>
                      </DropdownButton>
                    </td>
                  </tr>

                  <tr>
                    <td className="text-left">
                      56465 - Athletic Training Eval...
                    </td>
                    <td className="text-left">Service</td>

                    <td className="text-left">100.00$</td>

                    <td className="text-left">18.00%</td>

                    <td className="text-left">118.00$</td>
                    <td className="text-left">
                      <Badge pill className="p-2" bg="danger">
                        Inactive
                      </Badge>
                    </td>
                    <td className="text-left">
                      <DropdownButton className="p-0 rounded-0" title="Actions">
                        <Dropdown.Item eventKey="1">Edit</Dropdown.Item>
                        <Dropdown.Item eventKey="2">Inactive</Dropdown.Item>
                      </DropdownButton>
                    </td>
                  </tr>

                  <tr>
                    <td className="text-left">
                      56465 - Athletic Training Eval...
                    </td>
                    <td className="text-left">Service</td>

                    <td className="text-left">100.00$</td>

                    <td className="text-left">18.00%</td>

                    <td className="text-left">118.00$</td>
                    <td className="text-left">
                      <Badge pill className="p-2" bg="success">
                        Active
                      </Badge>
                    </td>
                    <td className="text-left">
                      <DropdownButton className="p-0 rounded-0" title="Actions">
                        <Dropdown.Item eventKey="1">Edit</Dropdown.Item>
                        <Dropdown.Item eventKey="2">Inactive</Dropdown.Item>
                      </DropdownButton>
                    </td>
                  </tr>

                  <tr>
                    <td className="text-left">
                      56465 - Athletic Training Eval...
                    </td>
                    <td className="text-left">Service</td>

                    <td className="text-left">100.00$</td>

                    <td className="text-left">18.00%</td>

                    <td className="text-left">118.00$</td>
                    <td className="text-left">
                      <Badge pill className="p-2" bg="primary">
                        Inactive
                      </Badge>
                    </td>
                    <td className="text-left">
                      <DropdownButton className="p-0 rounded-0" title="Actions">
                        <Dropdown.Item eventKey="1">Edit</Dropdown.Item>
                        <Dropdown.Item eventKey="2">Inactive</Dropdown.Item>
                      </DropdownButton>
                    </td>
                  </tr>

                  <tr>
                    <td className="text-left">
                      56465 - Athletic Training Eval...
                    </td>
                    <td className="text-left">Service</td>

                    <td className="text-left">100.00$</td>

                    <td className="text-left">18.00%</td>

                    <td className="text-left">118.00$</td>
                    <td className="text-left">
                      <Badge pill className="p-2" bg="danger">
                        Inactive
                      </Badge>
                    </td>
                    <td className="text-left">
                      <DropdownButton className="p-0 rounded-0" title="Actions">
                        <Dropdown.Item eventKey="1">Edit</Dropdown.Item>
                        <Dropdown.Item eventKey="2">Inactive</Dropdown.Item>
                      </DropdownButton>
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

export default BilledItem;
