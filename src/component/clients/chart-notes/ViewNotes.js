import React from "react";
import {
  Container,
  Row,
  Col,
  Table,
  ButtonGroup,
  Button,
  ButtonToolbar,
  Dropdown,
  DropdownButton,
} from "react-bootstrap";
import Sidebar from "../../sidenav/Sidebar";



const ViewNotes = () => {

  return (
    <div className="clients">
      <Sidebar />
      <Container fluid className="mt-5">
        <Row>
       
          <Col lg={12} sm={12} xs={12}>
            <div className="appointment-card mt-3">
              <ButtonToolbar
                className="justify-content-between mb-3"
                aria-label="Toolbar with Button groups"
              >
                <h5><a href="#/medical-record-listing" className="mr-2 theme-color"><i className="fas fa-chevron-left"></i></a>View S.O.A.P Notes</h5>
             
                <ButtonGroup className="rounded">
                  <Button className="btn btn-theme-white">Select Action</Button>
                  <DropdownButton className=" p-0 rounded-0" title="">
                    <Dropdown.Item eventKey="1">Add Concussion File</Dropdown.Item>
                    <Dropdown.Item eventKey="2">Add Dry Needling File</Dropdown.Item>
                    <Dropdown.Item eventKey="3">Transfer Chart to</Dropdown.Item>
                    <Dropdown.Item eventKey="4">Add Documents</Dropdown.Item>
                    <Dropdown.Item eventKey="5">Add Exercise Log</Dropdown.Item>
                  </DropdownButton>
                </ButtonGroup>
              </ButtonToolbar>
              <p>File Created On : 31 Nov, 2021  |  10:30 AM PDT - LOBO TERILL(ID : 651651655151)</p>
              <p>Last Updated On : 31 Nov, 2021  |  10:30 AM PDT - LOBO TERILL(ID : 651651655151)</p>
              <hr />
              <Row>
                  <Col lg="4" sm="6" xs="12">
                      <p></p>
                  </Col>
                  <Col lg="8" sm="6" xs="12">
                      <p><b></b></p>
                  </Col>
              </Row>

              <Row>
                  <Col lg="4" sm="6" xs="12">
                      <p></p>
                  </Col>
                  <Col lg="8" sm="6" xs="12">
                      <p><b></b></p>
                  </Col>
              </Row>

              <Row>
                  <Col lg="4" sm="6" xs="12">
                      <p></p>
                  </Col>
                  <Col lg="8" sm="6" xs="12">
                      <p><b></b></p>
                  </Col>
              </Row>

              <Row>
                  <Col lg="4" sm="6" xs="12">
                      <p></p>
                  </Col>
                  <Col lg="8" sm="6" xs="12">
                      <p><b></b></p>
                  </Col>
              </Row>
              <Row>
                  <Col lg={4} sm={4} xs={12}>
                      <h6>Date Of Injury</h6>
                      <p>15-12-2021</p>
                  </Col>

                  <Col lg={4} sm={4} xs={12}>
                      <h6>Date Of Surgery</h6>
                      <p>18-12-2021</p>
                  </Col>

                  <Col lg={4} sm={4} xs={12}>
                      <h6>Case Status</h6>
                      <p>Open - Under Treatment</p>
                  </Col>

                  <Col lg={12} sm={12} xs={12}>
                      <h6>Injury Description</h6>
                      <p>Pitcher, throwing fast ball, felt pain on release of ball.</p>
                  </Col>

                  <Col lg={4} sm={4} xs={12}>
                      <h6>Restrictions / Limitations</h6>
                      <p>No throwing, pushing, pulling.</p>
                  </Col>

                  <Col lg={4} sm={4} xs={12}>
                      <h6>Case Physician</h6>
                      <p>Dr. William Rosenberg</p>
                  </Col>

                  <Col lg={4} sm={4} xs={12}>
                      <h6>Next MD Appointment</h6>
                      <p>21-12-2021 (01:50 pm)</p> 
                  </Col>
              </Row>

              <h5 className="mt-3">Attchment</h5>
              <Table responsive>
                <thead>
                  <tr>
                    <th className="text-left">File</th>
                    <th className="text-left">Last Updated</th>
                    <th className="text-left" colSpan="2">Posted By</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="text-left">Surgery Record</td>
                    <td className="text-left">15-12-2021,  10:45AM PDT</td>
                    <td className="text-left">Terill Lobo</td>
                    <td className="text-left">
                      <a href="#/">
                      View
                      </a>
                    </td>
                  </tr>

                  <tr>
                    <td className="text-left">Progress Record</td>
                    <td className="text-left">15-12-2021,  10:45AM PDT</td>
                    <td className="text-left">Terill Lobo</td>
                    <td className="text-left">
                      <a href="#/">
                      View
                      </a>
                    </td>
                  </tr>

                </tbody>
              </Table>

                <div className="text-right mt-5">
                    <Button className="btn btn-theme">Repeat Last Treatment</Button>
                </div>
              <Table responsive className="mt-3">
                <thead>
                  <tr>
                    <th className="text-left">Date of Intervention</th>
                    <th className="text-left">Category</th>
                    <th className="text-left">Last Updated</th>
                    <th className="text-left" colSpan="2">Posted By</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="text-left">15-12-2021</td>
                    <td className="text-left">S.O.A.P Notes</td>
                    <td className="text-left">15-12-2021,  10:45AM PDT</td>
                    <td className="text-left">Terill Lobo</td>
                    <td className="text-left">
                      <a href="#/">
                      View Details
                      </a>
                    </td>
                  </tr>

                  <tr>
                    <td className="text-left">31-12-2021</td>
                    <td className="text-left">S.O.A.P Notes</td>
                    <td className="text-left">15-12-2021,  10:45AM PDT</td>
                    <td className="text-left">Terill Lobo</td>
                    <td className="text-left">
                      <a href="#/">
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

export default ViewNotes;
