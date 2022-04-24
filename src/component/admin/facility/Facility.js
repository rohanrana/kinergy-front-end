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




const Facility = () => {
  return (
    <div className="clients">
      <Sidebar />
      <Container fluid>
        <Row>
          <Col lg={12} sm={12} xs={12}>
          <div className="text-right bg-white mt-3 p-2 rounded">
              <a href="#/adding-facility" className="btn btn-theme rounded ml-2">
                + Add New
                </a>
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
                <h4>Facility</h4>

                <ButtonGroup className="rounded">
                  <InputGroup>
                    <FormControl
                      className="rounded mr-2"
                      type="text"
                      placeholder="Search for Facility.."
                    />
                  </InputGroup>

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
                    <th className="text-left">Facility Name</th>
                    <th className="text-left">Email</th>    
                    <th className="text-left">Phone</th>    
                    <th className="text-left">Address</th>                 
                    <th colSpan={2} className="text-left">
                      Status
                    </th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                  <th className="text-left">Facility Name</th>
                    <th className="text-left">Email</th>    
                    <th className="text-left">Phone</th>    
                    <th className="text-left">Address</th>              
                    <td className="text-left">
                      <Badge pill className="p-2" bg="success" >
                        Active
                      </Badge>
                    </td>
                    <td className="text-left">
                      <DropdownButton className="p-0 rounded-0" title="Actions">
                        <Dropdown.Item eventKey="1"  href="#/edit-facility" >Edit</Dropdown.Item>
                        <Dropdown.Item eventKey="2">Delete</Dropdown.Item>
                        <Dropdown.Item eventKey="3">Inactive</Dropdown.Item>
                      </DropdownButton>
                    </td>
                  </tr>
                  <tr>
                  <th className="text-left">Facility Name</th>
                    <th className="text-left">Email</th>    
                    <th className="text-left">Phone</th>    
                    <th className="text-left">Address</th>              
                    <td className="text-left">
                      <Badge pill className="p-2" bg="success" >
                        Active
                      </Badge>
                    </td>
                    <td className="text-left">
                      <DropdownButton className="p-0 rounded-0" title="Actions">
                        <Dropdown.Item eventKey="1"  href="#/edit-facility" >Edit</Dropdown.Item>
                        <Dropdown.Item eventKey="2">Delete</Dropdown.Item>
                        <Dropdown.Item eventKey="3">Inactive</Dropdown.Item>
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

export default Facility;
