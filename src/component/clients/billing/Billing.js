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
import Sidebar from "../../sidenav/Sidebar";
import ClientLeftMenu from "../ClientLeftMenu";


const BillingListing = () => {

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
                <h5>Billing</h5>
             

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
                    <th className="text-left">Invoice #</th>
                    <th className="text-left">Date</th>
                    <th className="text-left">Service Type</th>
                    <th className="text-left">Time Spent</th>
                    <th className="text-left">Amount</th>
                    <th className="text-left">Staff</th>
                    <th colSpan="2" className="text-left">Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="text-left"><u><a href="#/billing-review-print">0023319</a></u></td>
                    <td className="text-left">10/18/2021</td>
                    <td className="text-left">Therapy / Rehabilitation</td>
                    <td className="text-left">50 min</td>
                    <td className="text-left">$100.00</td>
                    <td className="text-left">Lobo, Terril</td>
                    <td className="text-left">
                      <Badge className="p-2" bg="warning">Pending</Badge>
                    </td>
                    <td className="text-left"><u><a href="#/billing-review">View Details</a></u></td>
                  </tr>

                  <tr>
                    <td className="text-left"><u><a href="#/billing-review-print">0023319</a></u></td>
                    <td className="text-left">10/18/2021</td>
                    <td className="text-left">Therapy / Rehabilitation</td>
                    <td className="text-left">50 min</td>
                    <td className="text-left">$100.00</td>
                    <td className="text-left">Lobo, Terril</td>
                    <td className="text-left">
                      <Badge className="p-2" bg="success">Paid</Badge>
                    </td>
                    <td className="text-left"><u><a href="#/billing-review">View Details</a></u></td>
                  </tr>

                  <tr>
                    <td className="text-left"><u><a href="#/billing-review-print">0023319</a></u></td>
                    <td className="text-left">10/18/2021</td>
                    <td className="text-left">Therapy / Rehabilitation</td>
                    <td className="text-left">50 min</td>
                    <td className="text-left">$100.00</td>
                    <td className="text-left">Lobo, Terril</td>
                    <td className="text-left">
                      <Badge className="p-2" bg="warning">Pending</Badge>
                    </td>
                    <td className="text-left"><u><a href="#/billing-review">View Details</a></u></td>
                  </tr>

                  <tr>
                    <td className="text-left"><u><a href="#/billing-review-print">0023319</a></u></td>
                    <td className="text-left">10/18/2021</td>
                    <td className="text-left">Therapy / Rehabilitation</td>
                    <td className="text-left">50 min</td>
                    <td className="text-left">$100.00</td>
                    <td className="text-left">Lobo, Terril</td>
                    <td className="text-left">
                      <Badge className="p-2" bg="success">Paid</Badge>
                    </td>
                    <td className="text-left"><u><a href="#/billing-review">View Details</a></u></td>
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

export default BillingListing;
