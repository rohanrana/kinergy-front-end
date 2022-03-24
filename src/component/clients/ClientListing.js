import React from "react";
import {
  Container,
  Row,
  Col,
  Badge,
  Table,
  Pagination,
  ButtonToolbar,
  InputGroup,
  Button,
  FormControl,
  ButtonGroup,
  DropdownButton,
  Dropdown,
  Form,
} from "react-bootstrap";
import Sidebar from "../sidenav/Sidebar";
const ClientListing = () => {
  return (
    <div className="clients">
      <Sidebar />
      <Container fluid>
        <Row>
          <Col lg={12} sm={12} xs={12}>
            <h4 className="mt-4">Clients</h4>

            <div className="appointment-card">
              <ButtonToolbar
                className="justify-content-between mb-3"
                aria-label="Toolbar with Button groups"
              >
                <InputGroup>
                  <FormControl
                    className="rounded"
                    type="text"
                    placeholder="Search for Clients"
                  />
                  <Form.Select className="ml-2 rounded">
                    <option>Row per page 10</option>
                    <option>Row per page 20</option>
                    <option>Row per page 30</option>
                    <option>Row per page 40</option>
                  </Form.Select>
                </InputGroup>

                <ButtonGroup className="rounded">
                  <Button className="btn btn-theme-white">Status</Button>
                  <DropdownButton className=" p-0 rounded-0" title="">
                    <Dropdown.Item eventKey="1">Active</Dropdown.Item>
                    <Dropdown.Item eventKey="2">Inactive</Dropdown.Item>
                  </DropdownButton>
                </ButtonGroup>
              </ButtonToolbar>
              <Table responsive>
                <thead>
                  <tr>
                    <th>Client Name</th>
                    <th>Phone</th>
                    <th>Last Appointment</th>
                    <th>Upcoming Appointment</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Scott Elizabeth</td>
                    <td>(123)-541-1154</td>
                    <td>02-02-2022</td>
                    <td>02-03-2022</td>
                    <td>
                      <Badge pill className="p-2" bg="success">
                        Active
                      </Badge>
                    </td>
                    <td>
                      <a href="/client-details" className="theme-color">
                        <b>View Details</b>
                      </a>
                    </td>
                  </tr>

                  <tr>
                    <td>Scott Elizabeth</td>
                    <td>(123)-541-1154</td>
                    <td>02-02-2022</td>
                    <td>02-03-2022</td>
                    <td>
                      <Badge pill className="p-2" bg="danger">
                        Inactive
                      </Badge>
                    </td>
                    <td>
                      <a href="/client-details" className="theme-color">
                        <b>View Details</b>
                      </a>
                    </td>
                  </tr>

                  <tr>
                    <td>Scott Elizabeth</td>
                    <td>(123)-541-1154</td>
                    <td>02-02-2022</td>
                    <td>02-03-2022</td>
                    <td>
                      <Badge pill className="p-2" bg="success">
                        Active
                      </Badge>
                    </td>
                    <td>
                      <a href="/client-details" className="theme-color">
                        <b>View Details</b>
                      </a>
                    </td>
                  </tr>

                  <tr>
                    <td>Scott Elizabeth</td>
                    <td>(123)-541-1154</td>
                    <td>02-02-2022</td>
                    <td>02-03-2022</td>
                    <td>
                      <Badge pill className="p-2" bg="danger">
                        Inactive
                      </Badge>
                    </td>
                    <td>
                      <a href="/client-details" className="theme-color">
                        <b>View Details</b>
                      </a>
                    </td>
                  </tr>

                  <tr>
                    <td>Scott Elizabeth</td>
                    <td>(123)-541-1154</td>
                    <td>02-02-2022</td>
                    <td>02-03-2022</td>
                    <td>
                      <Badge pill className="p-2" bg="success">
                        Active
                      </Badge>
                    </td>
                    <td>
                      <a href="/client-details" className="theme-color">
                        <b>View Details</b>
                      </a>
                    </td>
                  </tr>

                  <tr>
                    <td>Scott Elizabeth</td>
                    <td>(123)-541-1154</td>
                    <td>02-02-2022</td>
                    <td>02-03-2022</td>
                    <td>
                      <Badge pill className="p-2" bg="danger">
                        Inactive
                      </Badge>
                    </td>
                    <td>
                      <a href="/client-details" className="theme-color">
                        <b>View Details</b>
                      </a>
                    </td>
                  </tr>

                  <tr>
                    <td>Scott Elizabeth</td>
                    <td>(123)-541-1154</td>
                    <td>02-02-2022</td>
                    <td>02-03-2022</td>
                    <td>
                      <Badge pill className="p-2" bg="success">
                        Active
                      </Badge>
                    </td>
                    <td>
                      <a href="/client-details" className="theme-color">
                        <b>View Details</b>
                      </a>
                    </td>
                  </tr>

                  <tr>
                    <td>Scott Elizabeth</td>
                    <td>(123)-541-1154</td>
                    <td>02-02-2022</td>
                    <td>02-03-2022</td>
                    <td>
                      <Badge pill className="p-2" bg="danger">
                        Inactive
                      </Badge>
                    </td>
                    <td>
                      <a href="/client-details" className="theme-color">
                        <b>View Details</b>
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
    </div>
  );
};

export default ClientListing;
