import React from "react";
import { Container, Row, Col, Table } from "react-bootstrap";
import Sidebar from "../../sidenav/Sidebar";

const FileTransferToList = () => {
  return (
    <div className="clients">
      <Sidebar />
      <Container fluid>
        <Row>
          <Col lg={12} sm={12} xs={12}>
            <div className="appointment-card">
              <h5 className="mb-3">
                <a href="#/file-transfer-to" className="theme-color mr-2">
                  <i className="fas fa-chevron-left"></i>
                </a>
                Transfer File to
              </h5>
              <hr />

              <Table responsive>
                <thead>
                  <tr>
                    <th colSpan="2" className="text-left">
                      Files
                    </th>
                    <th colSpan="2" className="text-left">
                      Date
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="text-left">
                      <input type="checkbox" />
                    </td>
                    <td className="text-left">Surgery Record</td>
                    <td className="text-left">06-02-2022</td>
                    <td className="text-left">
                      <a href="#/" className="theme-color">
                        View Details
                      </a>
                    </td>
                  </tr>

                  <tr>
                    <td className="text-left">
                      <input type="checkbox" />
                    </td>
                    <td className="text-left">Surgery Record</td>
                    <td className="text-left">06-02-2022</td>
                    <td className="text-left">
                      <a href="#/" className="theme-color">
                        View Details
                      </a>
                    </td>
                  </tr>

                  <tr>
                    <td className="text-left">
                      <input type="checkbox" />
                    </td>
                    <td className="text-left">Surgery Record</td>
                    <td className="text-left">06-02-2022</td>
                    <td className="text-left">
                      <a href="#/" className="theme-color">
                        View Details
                      </a>
                    </td>
                  </tr>

                  <tr>
                    <td className="text-left">
                      <input type="checkbox" />
                    </td>
                    <td className="text-left">Surgery Record</td>
                    <td className="text-left">06-02-2022</td>
                    <td className="text-left">
                      <a href="#/" className="theme-color">
                        View Details
                      </a>
                    </td>
                  </tr>

                  <tr>
                    <td className="text-left">
                      <input type="checkbox" />
                    </td>
                    <td className="text-left">Surgery Record</td>
                    <td className="text-left">06-02-2022</td>
                    <td className="text-left">
                      <a href="#/" className="theme-color">
                        View Details
                      </a>
                    </td>
                  </tr>

                  <tr>
                    <td className="text-left">
                      <input type="checkbox" />
                    </td>
                    <td className="text-left">Surgery Record</td>
                    <td className="text-left">06-02-2022</td>
                    <td className="text-left">
                      <a href="#/" className="theme-color">
                        View Details
                      </a>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default FileTransferToList;
