import React from "react";
import {
  Container,
  Row,
  Col,
  Table,
  Pagination,
} from "react-bootstrap";
import Sidebar from "../../../PageLayout/SidebarNav/Sidebar";
import ClientLeftMenu from "../ClientLeftMenu";

const Documents = () => {
  return (
    <div className="clients">
      <Sidebar />
      <Container fluid className="mt-5">
        <Row>
          <Col lg={2} sm={4} xs={12}>
            <ClientLeftMenu />
          </Col>
          <Col lg={10} sm={8} xs={12}>

              <div className="text-right">
              <a href="#/add-document" className="btn btn-theme">Add Decument</a>
              </div>
            <div className="appointment-card mt-3">

              <h5>General Documents</h5>

              <Table responsive>
                <thead>
                  <tr>
                    <th className="text-left">Date of Documents</th>
                    <th className="text-left">Doucment Linked To</th>
                    <th className="text-left">
                    Doucment Type
                    </th>

                    <th colSpan="2" className="text-left">
                    Attached By
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="text-left">15-08-2021</td>
                    <td className="text-left">Client Profile</td>
                    <td className="text-left">Medical Questionnaire</td>
                    <td className="text-left">Portal Upload</td>
                    
                    <td className="text-left">
                      <u>
                        <a href="#/document-detail">View Details</a>
                      </u>
                    </td>
                  </tr>

                  <tr>
                    <td className="text-left">15-08-2021</td>
                    <td className="text-left">Client Profile</td>
                    <td className="text-left">Medical Questionnaire</td>
                    <td className="text-left">Portal Upload</td>
                    
                    <td className="text-left">
                      <u>
                        <a href="#/document-detail">View Details</a>
                      </u>
                    </td>
                  </tr>

                  <tr>
                    <td className="text-left">15-08-2021</td>
                    <td className="text-left">Client Profile</td>
                    <td className="text-left">Medical Questionnaire</td>
                    <td className="text-left">Portal Upload</td>
                    
                    <td className="text-left">
                      <u>
                        <a href="#/document-detail">View Details</a>
                      </u>
                    </td>
                  </tr>

                  <tr>
                    <td className="text-left">15-08-2021</td>
                    <td className="text-left">Client Profile</td>
                    <td className="text-left">Medical Questionnaire</td>
                    <td className="text-left">Portal Upload</td>
                    
                    <td className="text-left">
                      <u>
                        <a href="#/document-detail">View Details</a>
                      </u>
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

export default Documents;
