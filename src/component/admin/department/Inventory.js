import React from "react";
import {
  Container,
  Row,
  Col,
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
} from "react-bootstrap";
import Sidebar from "../../sidenav/Sidebar";
import AdminLeftMenu from "../AdminLeftMenu";



const Inventory = () => {
  return (
    <div className="clients">
      <Sidebar />
      <Container fluid className="mt-5">
        <Row>
          <Col lg={2} sm={4} xs={12}>
            <AdminLeftMenu />
          </Col>
          <Col lg={10} sm={8} xs={12}>
            
            <div className="appointment-card mt-3">
              <ButtonToolbar
                className="justify-content-between mb-3"
                aria-label="Toolbar with Button groups"
              >
                <h4>Inventory</h4>

                <ButtonGroup className="rounded">
                  <InputGroup>
                    <FormControl
                      className="rounded mr-2"
                      type="text"
                      placeholder="Search for products...."
                    />
                  </InputGroup>
                  <Button className="btn btn-theme-white">All</Button>
                  <DropdownButton className=" p-0 rounded-0" title="">
                    <Dropdown.Item eventKey="1">Level 1</Dropdown.Item>
                    <Dropdown.Item eventKey="2">Level 2</Dropdown.Item>
                    <Dropdown.Item eventKey="2">Level 3</Dropdown.Item>
                    <Dropdown.Item eventKey="2">Level 4</Dropdown.Item>
                  </DropdownButton>

                  <a href="#/add-inventory"
                className="btn btn-theme ml-2"
              >
                + Add New
              </a>
                </ButtonGroup>
              </ButtonToolbar>
              <Table responsive>
                <thead>
                  <tr>
                    <th className="text-left">Product</th>
                    <th className="text-left">Quantity</th>
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
                    stanozolol
                    </td>
                    <td className="text-left">50</td>

                    <td className="text-left">100.00$</td>

                    <td className="text-left">18.00%</td>

                    <td className="text-left">118.00$</td>
                    <td className="text-left">
                      <Badge pill className="p-2" bg="success">
                        Active
                      </Badge>
                    </td>
                    <td className="text-left">
                      <DropdownButton className="p-0 rounded-0" title="Select Action">
                        <Dropdown.Item eventKey="1">Edit</Dropdown.Item>
                        <Dropdown.Item eventKey="2">Archive</Dropdown.Item>
                      </DropdownButton>
                    </td>
                  </tr>

                  <tr>
                    <td className="text-left">
                    stanozolol
                    </td>
                    <td className="text-left">50</td>

                    <td className="text-left">100.00$</td>

                    <td className="text-left">18.00%</td>

                    <td className="text-left">118.00$</td>
                    <td className="text-left">
                      <Badge pill className="p-2" bg="primary">
                        Archived
                      </Badge>
                    </td>
                    <td className="text-left">
                      <DropdownButton className="p-0 rounded-0" title="Select Action">
                        <Dropdown.Item eventKey="1">Edit</Dropdown.Item>
                        <Dropdown.Item eventKey="2">Archive</Dropdown.Item>
                      </DropdownButton>
                    </td>
                  </tr>

                  <tr>
                    <td className="text-left">
                    stanozolol
                    </td>
                    <td className="text-left">50</td>

                    <td className="text-left">100.00$</td>

                    <td className="text-left">18.00%</td>

                    <td className="text-left">118.00$</td>
                    <td className="text-left">
                      <Badge pill className="p-2" bg="danger">
                        Inactive
                      </Badge>
                    </td>
                    <td className="text-left">
                      <DropdownButton className="p-0 rounded-0" title="Select Action">
                        <Dropdown.Item eventKey="1">Edit</Dropdown.Item>
                        <Dropdown.Item eventKey="2">Archive</Dropdown.Item>
                      </DropdownButton>
                    </td>
                  </tr>

                  <tr>
                    <td className="text-left">
                    stanozolol
                    </td>
                    <td className="text-left">50</td>

                    <td className="text-left">100.00$</td>

                    <td className="text-left">18.00%</td>

                    <td className="text-left">118.00$</td>
                    <td className="text-left">
                      <Badge pill className="p-2" bg="success">
                        Active
                      </Badge>
                    </td>
                    <td className="text-left">
                      <DropdownButton className="p-0 rounded-0" title="Select Action">
                        <Dropdown.Item eventKey="1">Edit</Dropdown.Item>
                        <Dropdown.Item eventKey="2">Archive</Dropdown.Item>
                      </DropdownButton>
                    </td>
                  </tr>

                  <tr>
                    <td className="text-left">
                    stanozolol
                    </td>
                    <td className="text-left">50</td>

                    <td className="text-left">100.00$</td>

                    <td className="text-left">18.00%</td>

                    <td className="text-left">118.00$</td>
                    <td className="text-left">
                      <Badge pill className="p-2" bg="primary">
                        Archived
                      </Badge>
                    </td>
                    <td className="text-left">
                      <DropdownButton className="p-0 rounded-0" title="Select Action">
                        <Dropdown.Item eventKey="1">Edit</Dropdown.Item>
                        <Dropdown.Item eventKey="2">Archive</Dropdown.Item>
                      </DropdownButton>
                    </td>
                  </tr>

                  <tr>
                    <td className="text-left">
                    stanozolol
                    </td>
                    <td className="text-left">50</td>

                    <td className="text-left">100.00$</td>

                    <td className="text-left">18.00%</td>

                    <td className="text-left">118.00$</td>
                    <td className="text-left">
                      <Badge pill className="p-2" bg="danger">
                        Inactive
                      </Badge>
                    </td>
                    <td className="text-left">
                      <DropdownButton className="p-0 rounded-0" title="Select Action">
                        <Dropdown.Item eventKey="1">Edit</Dropdown.Item>
                        <Dropdown.Item eventKey="2">Archive</Dropdown.Item>
                      </DropdownButton>
                    </td>
                  </tr>

                  <tr>
                    <td className="text-left">
                    stanozolol
                    </td>
                    <td className="text-left">50</td>

                    <td className="text-left">100.00$</td>

                    <td className="text-left">18.00%</td>

                    <td className="text-left">118.00$</td>
                    <td className="text-left">
                      <Badge pill className="p-2" bg="success">
                        Active
                      </Badge>
                    </td>
                    <td className="text-left">
                      <DropdownButton className="p-0 rounded-0" title="Select Action">
                        <Dropdown.Item eventKey="1">Edit</Dropdown.Item>
                        <Dropdown.Item eventKey="2">Archive</Dropdown.Item>
                      </DropdownButton>
                    </td>
                  </tr>

                  <tr>
                    <td className="text-left">
                    stanozolol
                    </td>
                    <td className="text-left">50</td>

                    <td className="text-left">100.00$</td>

                    <td className="text-left">18.00%</td>

                    <td className="text-left">118.00$</td>
                    <td className="text-left">
                      <Badge pill className="p-2" bg="primary">
                        Archived
                      </Badge>
                    </td>
                    <td className="text-left">
                      <DropdownButton className="p-0 rounded-0" title="Select Action">
                        <Dropdown.Item eventKey="1">Edit</Dropdown.Item>
                        <Dropdown.Item eventKey="2">Archive</Dropdown.Item>
                      </DropdownButton>
                    </td>
                  </tr>

                  <tr>
                    <td className="text-left">
                    stanozolol
                    </td>
                    <td className="text-left">50</td>

                    <td className="text-left">100.00$</td>

                    <td className="text-left">18.00%</td>

                    <td className="text-left">118.00$</td>
                    <td className="text-left">
                      <Badge pill className="p-2" bg="danger">
                        Inactive
                      </Badge>
                    </td>
                    <td className="text-left">
                      <DropdownButton className="p-0 rounded-0" title="Select Action">
                        <Dropdown.Item eventKey="1">Edit</Dropdown.Item>
                        <Dropdown.Item eventKey="2">Archive</Dropdown.Item>
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

     
    </div>
  );
};

export default Inventory;
