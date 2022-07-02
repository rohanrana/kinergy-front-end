import React from "react";
import { Container, Row, Col, Table, Pagination, Badge } from "react-bootstrap";


const DashboardUser = () => {
  return (
    <div className="home-page">
     
      <Container fluid>
       
        <Row>
        <Col lg={12} sm={12} xs={12}>
        <Table responsive>
                <thead>
                  <tr>
                    <th>Last Name</th>
                    <th>Frist Name</th>
                    <th>Phone</th>
                    <th>Last Appointment</th>
                    <th>Last Provider</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Elizabeth</td>
                    <td>Scott</td>
                    <td>(123)-541-1154</td>
                    <td>02-02-2022</td>
                    <td>Terill Lobo</td>
                    <td>
                      <Badge pill className="p-2" bg="success">
                        Active
                      </Badge>
                    </td>
                    <td>
                      <a href="#/client-details" className="theme-color">
                        <b>View Details</b>
                      </a>
                    </td>
                  </tr>

                  <tr>
                    <td>Elizabeth</td>
                    <td>Scott</td>
                    <td>(123)-541-1154</td>
                    <td>02-02-2022</td>
                    <td>Terill Lobo</td>
                    <td>
                      <Badge pill className="p-2" bg="danger">
                        Inactive
                      </Badge>
                    </td>
                    <td>
                      <a href="#/client-details" className="theme-color">
                        <b>View Details</b>
                      </a>
                    </td>
                  </tr>

                  <tr>
                    <td>Elizabeth</td>
                    <td>Scott</td>
                    <td>(123)-541-1154</td>
                    <td>02-02-2022</td>
                    <td>Terill Lobo</td>
                    <td>
                      <Badge pill className="p-2" bg="danger">
                        Inactive
                      </Badge>
                    </td>
                    <td>
                      <a href="#/client-details" className="theme-color">
                        <b>View Details</b>
                      </a>
                    </td>
                  </tr>

                  <tr>
                    <td>Elizabeth</td>
                    <td>Scott</td>
                    <td>(123)-541-1154</td>
                    <td>02-02-2022</td>
                    <td>Terill Lobo</td>
                    <td>
                      <Badge pill className="p-2" bg="success">
                        Active
                      </Badge>
                    </td>
                    <td>
                      <a href="#/client-details" className="theme-color">
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
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default DashboardUser;
