import React from "react";
import {
  Container,
  Row,
  Col,
  Table,
  Pagination,
  ButtonGroup,
  ButtonToolbar,
  InputGroup,
  Form,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import Sidebar from "../../../PageLayout/SidebarNav/Sidebar";
import ClientLeftMenu from "../ClientLeftMenu";

const InsuranceProvider = () => {
  return (
    <div className="clients">
      <Sidebar />
      <Container fluid>
        <Row>
          <Col lg={2} sm={4} xs={12}>
            <ClientLeftMenu />
          </Col>
          <Col lg={10} sm={8} xs={12}>
            <div className="appointment-card">
              <h5 className="mb-3">
                Insurance Provider
                <span className="float-right">
                  <Link to="/client/add-insurance" className="btn btn-theme mt-0">
                    Add Insurance
                  </Link>
                </span>
              </h5>
              <hr />
              <ButtonToolbar
                className="justify-content-between mb-3"
                aria-label="Toolbar with Button groups"
              >
                <p className="m-0">Payment Preference</p>

                <ButtonGroup className="rounded ml-2">
                  <InputGroup>
                    <Form.Select>
                      <option>Primary Insurance</option>
                    </Form.Select>
                  </InputGroup>
                </ButtonGroup>
              </ButtonToolbar>
              <Table responsive>
                <thead>
                  <tr>
                    <th className="text-left">Order of Benefits</th>
                    <th className="text-left">Insurance Payer</th>
                    <th className="text-left">Payer Address</th>
                    <th className="text-left" colSpan="2">
                      Payer Phone
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="text-left">Primary</td>
                    <td className="text-left">Anthem Blue Cross</td>
                    <td className="text-left">
                      395 N Service Road Melveille, NY, 11747
                    </td>
                    <td className="text-left">514-668-2421</td>
                    <td className="text-left">
                      <Link to="/client/insurance-provider-details">View Details</Link>
                    </td>
                  </tr>

                  <tr>
                    <td className="text-left">Primary</td>
                    <td className="text-left">Anthem Blue Cross</td>
                    <td className="text-left">
                      395 N Service Road Melveille, NY, 11747
                    </td>
                    <td className="text-left">514-668-2421</td>
                    <td className="text-left">
                       <Link to="/client/insurance-provider-details">View Details</Link>
                    </td>
                  </tr>
                  <tr>
                    <td className="text-left">Primary</td>
                    <td className="text-left">Anthem Blue Cross</td>
                    <td className="text-left">
                      395 N Service Road Melveille, NY, 11747
                    </td>
                    <td className="text-left">514-668-2421</td>
                    <td className="text-left">
                       <Link to="/client/insurance-provider-details">View Details</Link>
                    </td>
                  </tr>
                  <tr>
                    <td className="text-left">Primary</td>
                    <td className="text-left">Anthem Blue Cross</td>
                    <td className="text-left">
                      395 N Service Road Melveille, NY, 11747
                    </td>
                    <td className="text-left">514-668-2421</td>
                    <td className="text-left">
                       <Link to="/client/insurance-provider-details">View Details</Link>
                    </td>
                  </tr>
                  <tr>
                    <td className="text-left">Primary</td>
                    <td className="text-left">Anthem Blue Cross</td>
                    <td className="text-left">
                      395 N Service Road Melveille, NY, 11747
                    </td>
                    <td className="text-left">514-668-2421</td>
                    <td className="text-left">
                       <Link to="/client/insurance-provider-details">View Details</Link>
                    </td>
                  </tr>

                  <tr>
                    <td className="text-left">Primary</td>
                    <td className="text-left">Anthem Blue Cross</td>
                    <td className="text-left">
                      395 N Service Road Melveille, NY, 11747
                    </td>
                    <td className="text-left">514-668-2421</td>
                    <td className="text-left">
                       <Link to="/client/insurance-provider-details">View Details</Link>
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

export default InsuranceProvider;
