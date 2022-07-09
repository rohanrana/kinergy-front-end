import React from "react";
import Sidebar from "../../sidenav/Sidebar";
import AdminLeftMenu from "../AdminLeftMenu";
import { Container, Row, Col, Button, Modal, Form, ButtonGroup,
ButtonToolbar,
DropdownButton,
Table,
Dropdown,
InputGroup,
FormControl,
Pagination, } from "react-bootstrap";
import { Link } from "react-router-dom";
const Forms = () => { 
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
            <div className="d-flex justify-content-between align-item-center">
               <h5>Forms</h5>
               <ButtonToolbar
                  className="justify-content-between mb-3"
                  aria-label="Toolbar with Button groups"
                  >
                  <ButtonGroup className="rounded">
                     <InputGroup>
                        <FormControl
                           className="rounded mr-2"
                           type="text"
                           placeholder=""
                           />
                     </InputGroup>
                     <Button className="btn btn-theme-white">All</Button>
                     <DropdownButton className=" p-0 rounded-0" title="">
                        <Dropdown.Item eventKey="1">Level 1</Dropdown.Item>
                        <Dropdown.Item eventKey="2">Level 2</Dropdown.Item>
                        <Dropdown.Item eventKey="2">Level 3</Dropdown.Item>
                        <Dropdown.Item eventKey="2">Level 4</Dropdown.Item>
                     </DropdownButton>
                     <Link to="/create-form" className="btn btn-theme rounded ms-2" varient="primary" >+ Add Forms</Link>
                  </ButtonGroup>
               </ButtonToolbar>
            </div>
            <Table responsive>
               <thead>
                  <tr>
                     <th className="text-left">Forms</th>
                     <th>Created on</th>
                     <th>Last Updated On</th>
                     <th colSpan="2" className="text-left">
                        Status
                     </th>
                  </tr>
               </thead>
               <tbody>
                  <tr>
                     <td className="text-left">
                     Medical History Questionnaire
                     </td>
                     <td>01 Jun 2021</td>
                     <td>01 Jun 2021</td>
                     <td className="text-left">Active</td>
                     <td className="text-left">
                        <DropdownButton className="p-0 rounded-0" id="myDropdown" title="View Details">
                            <Dropdown.Item eventKey="1">
                                <Link to="/#" className="d-flex align-items-center justify-content-between">
                                    <span>Edit</span>
                                    <span><i class="fa-solid fa-pen"></i></span>
                                </Link>
                            </Dropdown.Item>
                            <Dropdown.Item eventKey="2">
                                <Link to="/#" className="d-flex align-items-center justify-content-between">
                                    <span>Delete</span>
                                    <span><i class="fa-solid fa-trash"></i></span>
                                </Link>
                            </Dropdown.Item>
                            <Dropdown.Item eventKey="2">
                                <Link to="/#" className="d-flex align-items-center justify-content-between">
                                    <span>Clone</span>
                                    <span><i class="fa-solid fa-copy"></i></span>
                                </Link></Dropdown.Item>
                        </DropdownButton>
                     </td>
                  </tr>
                  <tr>
                     <td className="text-left">
                     New Injury / Condition Information
                     </td>
                     <td>03 Jun 2021</td>
                     <td>03 Jun 2021</td>
                     <td className="text-left"><b>Draft</b></td>
                     <td className="text-left">
                           <DropdownButton className="p-0 rounded-0" id="myDropdown" title="View Details">
                            <Dropdown.Item eventKey="1">
                                <Link to="/#" className="d-flex align-items-center justify-content-between">
                                    <span>Edit</span>
                                    <span><i class="fa-solid fa-pen"></i></span>
                                </Link>
                            </Dropdown.Item>
                            <Dropdown.Item eventKey="2">
                                <Link to="/#" className="d-flex align-items-center justify-content-between">
                                    <span>Delete</span>
                                    <span><i class="fa-solid fa-trash"></i></span>
                                </Link>
                            </Dropdown.Item>
                            <Dropdown.Item eventKey="2">
                                <Link to="/#" className="d-flex align-items-center justify-content-between">
                                    <span>Clone</span>
                                    <span><i class="fa-solid fa-copy"></i></span>
                                </Link></Dropdown.Item>
                        </DropdownButton>
                     </td>
                  </tr>
                  <tr>
                     <td className="text-left">
                     Phyical Activity Questionnaire
                     </td>
                     <td>04 Jun 2021</td>
                     <td>04 Jun 2021</td>
                     <td className="text-left">Active</td>
                     <td className="text-left">
                           <DropdownButton className="p-0 rounded-0" id="myDropdown" title="View Details">
                            <Dropdown.Item eventKey="1">
                                <Link to="/#" className="d-flex align-items-center justify-content-between">
                                    <span>Edit</span>
                                    <span><i class="fa-solid fa-pen"></i></span>
                                </Link>
                            </Dropdown.Item>
                            <Dropdown.Item eventKey="2">
                                <Link to="/#" className="d-flex align-items-center justify-content-between">
                                    <span>Delete</span>
                                    <span><i class="fa-solid fa-trash"></i></span>
                                </Link>
                            </Dropdown.Item>
                            <Dropdown.Item eventKey="2">
                                <Link to="/#" className="d-flex align-items-center justify-content-between">
                                    <span>Clone</span>
                                    <span><i class="fa-solid fa-copy"></i></span>
                                </Link></Dropdown.Item>
                        </DropdownButton>
                     </td>
                  </tr>
                  <tr>
                     <td className="text-left">
                     Massage Questionnaire
                     </td>
                     <td>04 Aug 2021</td>
                     <td>04 Aug 2021</td>
                     <td className="text-left gray-text">Deleted</td>
                     <td className="text-left">
                           <DropdownButton className="p-0 rounded-0" id="myDropdown" title="View Details">
                            <Dropdown.Item eventKey="1">
                                <Link to="/#" className="d-flex align-items-center justify-content-between">
                                    <span>Edit</span>
                                    <span><i class="fa-solid fa-pen"></i></span>
                                </Link>
                            </Dropdown.Item>
                            <Dropdown.Item eventKey="2">
                                <Link to="/#" className="d-flex align-items-center justify-content-between">
                                    <span>Delete</span>
                                    <span><i class="fa-solid fa-trash"></i></span>
                                </Link>
                            </Dropdown.Item>
                            <Dropdown.Item eventKey="2">
                                <Link to="/#" className="d-flex align-items-center justify-content-between">
                                    <span>Clone</span>
                                    <span><i class="fa-solid fa-copy"></i></span>
                                </Link></Dropdown.Item>
                        </DropdownButton>
                     </td>
                  </tr>
                  <tr>
                     <td className="text-left">
                     Client Intake Form
                     </td>
                     <td>04 Aug 2021</td>
                     <td>04 Aug 2021</td>
                     <td className="text-left">Active</td>
                     <td className="text-left">
                           <DropdownButton className="p-0 rounded-0" id="myDropdown" title="View Details">
                            <Dropdown.Item eventKey="1">
                                <Link to="/#" className="d-flex align-items-center justify-content-between">
                                    <span>Edit</span>
                                    <span><i class="fa-solid fa-pen"></i></span>
                                </Link>
                            </Dropdown.Item>
                            <Dropdown.Item eventKey="2">
                                <Link to="/#" className="d-flex align-items-center justify-content-between">
                                    <span>Delete</span>
                                    <span><i class="fa-solid fa-trash"></i></span>
                                </Link>
                            </Dropdown.Item>
                            <Dropdown.Item eventKey="2">
                                <Link to="/#" className="d-flex align-items-center justify-content-between">
                                    <span>Clone</span>
                                    <span><i class="fa-solid fa-copy"></i></span>
                                </Link></Dropdown.Item>
                        </DropdownButton>
                     </td>
                  </tr>
                  <tr>
                     <td className="text-left">
                     Head Injury Information
                     </td>
                     <td>05 Aug 2021</td>
                     <td>05 Aug 2021</td>
                     <td className="text-left">Inactive</td>
                     <td className="text-left">
                           <DropdownButton className="p-0 rounded-0" id="myDropdown" title="View Details">
                            <Dropdown.Item eventKey="1">
                                <Link to="/#" className="d-flex align-items-center justify-content-between">
                                    <span>Edit</span>
                                    <span><i class="fa-solid fa-pen"></i></span>
                                </Link>
                            </Dropdown.Item>
                            <Dropdown.Item eventKey="2">
                                <Link to="/#" className="d-flex align-items-center justify-content-between">
                                    <span>Delete</span>
                                    <span><i class="fa-solid fa-trash"></i></span>
                                </Link>
                            </Dropdown.Item>
                            <Dropdown.Item eventKey="2">
                                <Link to="/#" className="d-flex align-items-center justify-content-between">
                                    <span>Clone</span>
                                    <span><i class="fa-solid fa-copy"></i></span>
                                </Link></Dropdown.Item>
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
}
export default Forms