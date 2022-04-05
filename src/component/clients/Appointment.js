import React from "react";
import {
  Container,
  Row,
  Col,
  Table,
  Pagination,
  ButtonGroup,
  ButtonToolbar,
  FormControl,
  InputGroup,
  Badge

} from "react-bootstrap";
import Sidebar from "../sidenav/Sidebar";
import ClientLeftMenu from "./ClientLeftMenu";


const Appointment = () => {

  return (
    <div className="clients">
      <Sidebar />
      <Container fluid className="mt-5">
        <Row>
          <Col lg={2} sm={4} xs={12}>
            <ClientLeftMenu />
          </Col>
          <Col lg={10} sm={8} xs={12}>
            <div className="appointment-card mt-3">
              <ButtonToolbar
                className="justify-content-between mb-3"
                aria-label="Toolbar with Button groups"
              >
                <h5>Appointments</h5>
             

                <ButtonGroup className="rounded">
             
                  <InputGroup>
                  <FormControl
                    className="rounded"
                    type="date"
                  />
                </InputGroup>
          
              </ButtonGroup>
              </ButtonToolbar>

              <Table responsive>
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>Time</th>
                    <th>Service Type</th>
                    <th>Time Spent</th>
                    <th>Staff</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>15-Jan-2022</td>
                    <td>8:30AM-9:30AM</td>
                    <td>Therapy / Rehabilitation</td>
                    <td>--</td>
                    <td>Lobo, Terril</td>
                    <td>
                      <Badge bg="warning">Upcoming</Badge>
                    </td>
                  </tr>

                  <tr>
                    <td>15-Jan-2022</td>
                    <td>8:30AM-9:30AM</td>
                    <td>Therapy / Rehabilitation</td>
                    <td>53 min</td>
                    <td>Lobo, Terril</td>
                    <td>
                      <Badge bg="success">Complete</Badge>
                    </td>
                  </tr>

                  <tr>
                    <td>15-Jan-2022</td>
                    <td>8:30AM-9:30AM</td>
                    <td>Therapy / Rehabilitation</td>
                    <td>--</td>
                    <td>Lobo, Terril</td>
                    <td>
                      <Badge bg="warning">Upcoming</Badge>
                    </td>
                  </tr>

                  <tr>
                    <td>15-Jan-2022</td>
                    <td>8:30AM-9:30AM</td>
                    <td>Therapy / Rehabilitation</td>
                    <td>53 min</td>
                    <td>Lobo, Terril</td>
                    <td>
                      <Badge bg="success">Complete</Badge>
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

export default Appointment;
