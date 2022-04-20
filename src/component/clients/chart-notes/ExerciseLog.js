import React from "react";
import { Container, Row, Col, Form, Button, Table } from "react-bootstrap";
import Sidebar from "../../sidenav/Sidebar";
import Sign from '../../../image/sign.png'


const ExerciseLog = () => {
  return (
    <div className="clients">
      <Sidebar />
      <Container fluid>
        <Row>
          <Col lg={12} sm={12} xs={12}>
              <h4 className="mt-3 text-white">Scott Elizabeth <span className="float-right"><small>45465453 <span className="ml-2"><i className="fas fa-circle mr-2"></i>Active</span></small></span></h4>
            
            <div className="appointment-card">
              <h5 className="mb-3">
                <a href="#/medical-record-listing" className="theme-color mr-2">
                  <i className="fas fa-chevron-left"></i>
                </a>
                Exercise Log
                <span className="float-right">
                  <Button className="btn btn-theme-white btn-sm"><i className="fas fa-pencil"></i></Button>
                  <Button className="btn btn-theme-white btn-sm ml-2"><i className="fas fa-print"></i></Button>
                </span>
              </h5>
              <p>Last Updated On : 31 Nov, 2021  |  10:30 AM PDT - LOBO TERILL(ID : 651651655151)</p>
              <hr />
              <Form>
                
                <Row>
                <Col lg="6" sm={6} xs={12}>
                    <p>Date Of Intervention : <span className="float-right"><b>09-12-2021</b></span></p>
                  </Col>
                  <Col lg="6" sm={6} xs={12}>
                    <p>Staff : <span className="float-right"><b>Terill Lobo</b></span></p>
                  </Col>
                  <Col lg="6" sm={6} xs={12}>
                    <p>Intervention Linked to : <span className="float-right"><b>Elbow (R) - 12-12-2021</b></span></p>
                  </Col>
                  <Col lg="6" sm={6} xs={12}>
                    <p>Case Status : <span className="float-right"><b>Open - Under Treatment</b></span></p>
                  </Col>
                </Row>
                <hr />
                <p><b>Attachment</b><span className="float-right"><a href="#/">+ Add Exercise Log</a></span></p>
                <Row>
                  <Col lg={4} ssm={4} xs={12}>
                    <p className="p-2 rounded bg-light"><i className="fas fa-file mr-2"></i>lefthand.pdf</p>
                  </Col>

                  <Col lg={4} ssm={4} xs={12}>
                    <p className="p-2 rounded bg-light"><i className="fas fa-file mr-2"></i>lefthand.pdf</p>
                  </Col>
                </Row>  
                <hr />

                <Table responsive>
                <thead className="bg-white">
                  <tr>
                    <th><span className="rounded p-2 w-100 d-block bg-light">Exercise</span></th>
                    <th><span className="rounded p-2 w-100 d-block bg-theme">Exercise Name</span></th>
                    <th><span className="rounded p-2 w-100 d-block bg-theme">SET</span></th>
                    <th><span className="rounded p-2 w-100 d-block bg-theme">REP</span></th>
                    <th><span className="rounded p-2 w-100 d-block bg-theme">TIME</span></th>
                    <th><span className="rounded p-2 w-100 d-block bg-theme">RESISTANCE</span></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><span className="rounded p-2 w-100 d-block bg-light">Warm Up</span></td>
                    <td><span className="rounded p-2 w-100 d-block bg-light">UBE 10mins</span></td>
                    <td><span className="rounded p-2 w-100 d-block bg-light">1 X 5</span></td>
                    <td><span className="rounded p-2 w-100 d-block bg-light">Hold</span></td>
                    <td><span className="rounded p-2 w-100 d-block bg-light">5 sec</span></td>
                    <td><span className="rounded p-2 w-100 d-block bg-light">N/A</span></td>
                  </tr>

                  <tr>
                    <td><span className="rounded p-2 w-100 d-block bg-light">Ex 1</span></td>
                    <td><span className="rounded p-2 w-100 d-block bg-light">Elbow ISOM</span></td>
                    <td><span className="rounded p-2 w-100 d-block bg-light">1 X 5</span></td>
                    <td><span className="rounded p-2 w-100 d-block bg-light">Hold</span></td>
                    <td><span className="rounded p-2 w-100 d-block bg-light">5 sec</span></td>
                    <td><span className="rounded p-2 w-100 d-block bg-light">N/A</span></td>
                  </tr>

                  <tr>
                    <td><span className="rounded p-2 w-100 d-block bg-light">Ex 2</span></td>
                    <td><span className="rounded p-2 w-100 d-block bg-light">Elbow ISOM</span></td>
                    <td><span className="rounded p-2 w-100 d-block bg-light">1 X 5</span></td>
                    <td><span className="rounded p-2 w-100 d-block bg-light">Hold</span></td>
                    <td><span className="rounded p-2 w-100 d-block bg-light">5 sec</span></td>
                    <td><span className="rounded p-2 w-100 d-block bg-light">N/A</span></td>
                  </tr>

                  <tr>
                    <td><span className="rounded p-2 w-100 d-block bg-light">Ex 3</span></td>
                    <td><span className="rounded p-2 w-100 d-block bg-light">Elbow ISOM</span></td>
                    <td><span className="rounded p-2 w-100 d-block bg-light">1 X 5</span></td>
                    <td><span className="rounded p-2 w-100 d-block bg-light">Hold</span></td>
                    <td><span className="rounded p-2 w-100 d-block bg-light">5 sec</span></td>
                    <td><span className="rounded p-2 w-100 d-block bg-light">N/A</span></td>
                  </tr>

                  <tr>
                    <td><span className="rounded p-2 w-100 d-block bg-light">Ex 4</span></td>
                    <td><span className="rounded p-2 w-100 d-block bg-light">Elbow ISOM</span></td>
                    <td><span className="rounded p-2 w-100 d-block bg-light">1 X 5</span></td>
                    <td><span className="rounded p-2 w-100 d-block bg-light">Hold</span></td>
                    <td><span className="rounded p-2 w-100 d-block bg-light">5 sec</span></td>
                    <td><span className="rounded p-2 w-100 d-block bg-light">N/A</span></td>
                  </tr>

                  <tr>
                    <td><span className="rounded p-2 w-100 d-block bg-light">Ex 5</span></td>
                    <td><span className="rounded p-2 w-100 d-block bg-light">Elbow ISOM</span></td>
                    <td><span className="rounded p-2 w-100 d-block bg-light">1 X 5</span></td>
                    <td><span className="rounded p-2 w-100 d-block bg-light">Hold</span></td>
                    <td><span className="rounded p-2 w-100 d-block bg-light">5 sec</span></td>
                    <td><span className="rounded p-2 w-100 d-block bg-light">N/A</span></td>
                  </tr>

                  <tr>
                    <td><span className="rounded p-2 w-100 d-block bg-light">Ex 6</span></td>
                    <td><span className="rounded p-2 w-100 d-block bg-light">Elbow ISOM</span></td>
                    <td><span className="rounded p-2 w-100 d-block bg-light">1 X 5</span></td>
                    <td><span className="rounded p-2 w-100 d-block bg-light">Hold</span></td>
                    <td><span className="rounded p-2 w-100 d-block bg-light">5 sec</span></td>
                    <td><span className="rounded p-2 w-100 d-block bg-light">N/A</span></td>
                  </tr>

                  <tr>
                    <td><span className="rounded p-2 w-100 d-block bg-light">Ex 7</span></td>
                    <td><span className="rounded p-2 w-100 d-block bg-light">Elbow ISOM</span></td>
                    <td><span className="rounded p-2 w-100 d-block bg-light">1 X 5</span></td>
                    <td><span className="rounded p-2 w-100 d-block bg-light">Hold</span></td>
                    <td><span className="rounded p-2 w-100 d-block bg-light">5 sec</span></td>
                    <td><span className="rounded p-2 w-100 d-block bg-light">N/A</span></td>
                  </tr>

                  <tr>
                    <td><span className="rounded p-2 w-100 d-block bg-light">Ex 8</span></td>
                    <td><span className="rounded p-2 w-100 d-block bg-light">Elbow ISOM</span></td>
                    <td><span className="rounded p-2 w-100 d-block bg-light">1 X 5</span></td>
                    <td><span className="rounded p-2 w-100 d-block bg-light">Hold</span></td>
                    <td><span className="rounded p-2 w-100 d-block bg-light">5 sec</span></td>
                    <td><span className="rounded p-2 w-100 d-block bg-light">N/A</span></td>
                  </tr>

                  <tr>
                    <td><span className="rounded p-2 w-100 d-block bg-light">Ex 9</span></td>
                    <td><span className="rounded p-2 w-100 d-block bg-light">Elbow ISOM</span></td>
                    <td><span className="rounded p-2 w-100 d-block bg-light">1 X 5</span></td>
                    <td><span className="rounded p-2 w-100 d-block bg-light">Hold</span></td>
                    <td><span className="rounded p-2 w-100 d-block bg-light">5 sec</span></td>
                    <td><span className="rounded p-2 w-100 d-block bg-light">N/A</span></td>
                  </tr>

                </tbody>
              </Table>

              <Row>
                <Col lg={4} sm={5} xs={12} className="mx-auto">
                  <div className="border p-2 rounded bg-white text-center">
                  <img src={Sign} alt="signature" />
                  </div>
                  <p className="text-center">Electronically Signed On : 31-12-2021  |  9:43 PM</p>
                </Col>
              </Row>

                <Row>
                  <Col Col lg={12} sm={12} xs={12}>
                    <div className="text-center form-action-btn mt-3">
                      <Button className="btn btn-theme-white pl-2 pr-2 ml-0">
                        Cancel
                      </Button>

                      <Button className="btn btn-theme pl-2 pr-2 ml-2">
                        Save
                      </Button>
                    </div>
                  </Col>
                </Row>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ExerciseLog;
