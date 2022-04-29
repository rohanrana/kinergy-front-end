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
  Badge
} from "react-bootstrap";
import Sidebar from "../../sidenav/Sidebar";
import AdminLeftMenu from "../AdminLeftMenu";

import StaffLogin from "../../logins/StaffLogin";
import useToken from "../../useToken";


const StaffOnboarding = () => {
  const { token, setToken } = useToken();
  if (!token) {
    return <StaffLogin />;
  }

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
                <h5>Staff List</h5>

                <ButtonGroup className="rounded">
                <InputGroup>
                  <FormControl
                    className="rounded mr-2"
                    type="text"
                    placeholder="Search for Staffs..."
                  />
                </InputGroup>
                  <Button className="btn btn-theme-white">All</Button>
                  <DropdownButton className=" p-0 rounded-0" title="">
                    <Dropdown.Item eventKey="1">Level 1</Dropdown.Item>
                    <Dropdown.Item eventKey="2">Level 2</Dropdown.Item>
                    <Dropdown.Item eventKey="2">Level 3</Dropdown.Item>
                    <Dropdown.Item eventKey="2">Level 4</Dropdown.Item>
                  </DropdownButton>
                  <a href="#/add-staff-onboarding" className="btn btn-theme rounded ml-2">
                    + Add New
                  </a>
                </ButtonGroup>
              </ButtonToolbar>
              <Table responsive>
                <thead>
                  <tr>
                    <th className="text-left">Staff Name</th>
                    <th className="text-left">Department</th>
                    <th className="text-left">Status</th>
                    <th className="text-left">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="text-left">Sebastian Williamson</td>
                    <td className="text-left">Massage Therapy</td>
                    <td className="text-left"><Badge bg="success" className="p-2">Active</Badge></td>
                    <td className="text-left">
                    <DropdownButton
                        className="p-0 rounded-0"
                        title="Select Action"
                      >
                        <Dropdown.Item href="#/edit-StaffOnboarding">Edit</Dropdown.Item>
                        <Dropdown.Item eventKey="2">Inactive</Dropdown.Item>
                      </DropdownButton>
                    </td>
                 
                  </tr>

                  <tr>
                    <td className="text-left">Sebastian Williamson</td>
                    <td className="text-left">Massage Therapy</td>
                    <td className="text-left"><Badge bg="success" className="p-2">Active</Badge></td>
                    <td className="text-left">
                    <DropdownButton
                        className="p-0 rounded-0"
                        title="Select Action"
                      >
                        <Dropdown.Item href="#/edit-StaffOnboarding">Edit</Dropdown.Item>
                        <Dropdown.Item eventKey="2">Inactive</Dropdown.Item>
                      </DropdownButton>
                    </td>
                 
                  </tr>

                  <tr>
                    <td className="text-left">Sebastian Williamson</td>
                    <td className="text-left">Massage Therapy</td>
                    <td className="text-left"><Badge bg="success" className="p-2">Active</Badge></td>
                    <td className="text-left">
                    <DropdownButton
                        className="p-0 rounded-0"
                        title="Select Action"
                      >
                        <Dropdown.Item href="#/edit-StaffOnboarding">Edit</Dropdown.Item>
                        <Dropdown.Item eventKey="2">Inactive</Dropdown.Item>
                      </DropdownButton>
                    </td>
                 
                  </tr>

                  <tr>
                    <td className="text-left">Sebastian Williamson</td>
                    <td className="text-left">Massage Therapy</td>
                    <td className="text-left"><Badge bg="success" className="p-2">Active</Badge></td>
                    <td className="text-left">
                    <DropdownButton
                        className="p-0 rounded-0"
                        title="Select Action"
                      >
                        <Dropdown.Item href="#/edit-StaffOnboarding">Edit</Dropdown.Item>
                        <Dropdown.Item eventKey="2">Inactive</Dropdown.Item>
                      </DropdownButton>
                    </td>
                 
                  </tr>

                  <tr>
                    <td className="text-left">Sebastian Williamson</td>
                    <td className="text-left">Massage Therapy</td>
                    <td className="text-left"><Badge bg="success" className="p-2">Active</Badge></td>
                    <td className="text-left">
                    <DropdownButton
                        className="p-0 rounded-0"
                        title="Select Action"
                      >
                        <Dropdown.Item href="#/edit-StaffOnboarding">Edit</Dropdown.Item>
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

     
    </div>
  );
};

export default StaffOnboarding;
