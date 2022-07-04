import React from "react";
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
} from "react-bootstrap";
import { Link } from "react-router-dom";

import AdminLeftMenu from "./AdminLeftMenu";

const FacilityManagement = () => {
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
                <h5>Facility Management</h5>

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
                  <Link to="/admin/adding-facility" className="btn btn-theme ml-2">
                    + Add Facility
                  </Link>
                </ButtonGroup>
              </ButtonToolbar>
              <Table responsive>
                <thead>
                  <tr>
                    <th className="text-left">Facility</th>
                    <th>Facility Location</th>
                    <th>Phone Number</th>
                    <th colSpan="2" className="text-left">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="text-left">
                      Kinergy Sports Medicine and Performance
                    </td>
                    <td>Amsterdam</td>
                    <td>000-000-0000</td>
                    <td className="text-left">Active</td>
                    <td className="text-left">
                      <Link to="/admin/facility-detail" className="text-dark">
                        <u>View Details</u>
                      </Link>
                    </td>
                  </tr>

                  <tr>
                    <td className="text-left">
                      Kinergy Sports Medicine and Performance
                    </td>
                    <td>Amsterdam</td>
                    <td>000-000-0000</td>
                    <td className="text-left">Active</td>
                    <td className="text-left">
                   <Link to="/admin/facility-detail" className="text-dark">
                        <u>View Details</u>
                      </Link>
                    </td>
                  </tr>

                  <tr>
                    <td className="text-left">
                      Kinergy Sports Medicine and Performance
                    </td>
                    <td>Amsterdam</td>
                    <td>000-000-0000</td>
                    <td className="text-left">Active</td>
                    <td className="text-left">
                   <Link to="/admin/facility-detail" className="text-dark">
                        <u>View Details</u>
                      </Link>
                    </td>
                  </tr>

                  <tr>
                    <td className="text-left">
                      Kinergy Sports Medicine and Performance
                    </td>
                    <td>Amsterdam</td>
                    <td>000-000-0000</td>
                    <td className="text-left">Active</td>
                    <td className="text-left">
                   <Link to="/admin/facility-detail" className="text-dark">
                        <u>View Details</u>
                      </Link>
                    </td>
                  </tr>

                  <tr>
                    <td className="text-left">
                      Kinergy Sports Medicine and Performance
                    </td>
                    <td>Amsterdam</td>
                    <td>000-000-0000</td>
                    <td className="text-left">Active</td>
                    <td className="text-left">
                   <Link to="/admin/facility-detail" className="text-dark">
                        <u>View Details</u>
                      </Link>
                    </td>
                  </tr>

                  <tr>
                    <td className="text-left">
                      Kinergy Sports Medicine and Performance
                    </td>
                    <td>Amsterdam</td>
                    <td>000-000-0000</td>
                    <td className="text-left">Active</td>
                    <td className="text-left">
                   <Link to="/admin/facility-detail" className="text-dark">
                        <u>View Details</u>
                      </Link>
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

export default FacilityManagement;
