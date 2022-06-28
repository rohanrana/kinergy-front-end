import React, { useState } from "react";
import { Container, Row, Col, Button, Modal, Form, Table } from "react-bootstrap";
// import { Link } from "react-router-dom";
import Sidebar from "../../sidenav/Sidebar";
import AdminLeftMenu from "../AdminLeftMenu";
import Dummyimage from "../../../image/dummy.jpg";


const Servicedetails = () => {
    const [checked, setChecked] = useState(false);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <div className="clients">
      <Sidebar />
      <Container fluid>
        <Row>
            <Col lg={3} sm={4} xs={12}>
                <AdminLeftMenu />
            </Col>
            <Col lg={9} sm={8} xs={12}>
                <div className="text-right">
                    <Button className="btn btn-theme pl-2 pr-2" id="formBtn" onClick={handleShow}>Edit</Button>
                </div>
                <div className="appointment-card">
                    <div className="d-flex justify-content-between align-item-center">
                        <h5><i class="fa-solid fa-chevron-left mr-3"></i> Service Category</h5>
                        <p className="d-flex m-0">
                                  <b>Status : {checked ? 'Active' : 'Inactive'}</b>
                                  <Form>
                            <Form.Check 
                            type="switch"
                            id="custom-switch"
                            className="ml-2"
                            onChange={() => setChecked(!checked)}
                                      />
                                      </Form>
                        </p>
                          </div>
                          <div className="details-sec mt-5 mb-5">
                              <Row>
                                  <Col md={2} sm={4} xs={12}>
                                      <img src={Dummyimage} alt={Dummyimage} className="dmImg" />
                                  </Col>
                                  <Col md={10} sm={8} xs={12}>
                                      <h3 className="det_head">Therapy Services </h3>
                                      <p className="dt-dsc">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore 
                                        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
                                        consequat.
                                      </p>
                                  </Col>
                            </Row>
                          </div>      
                      </div>
                      <div className="appointment-card">
                          <h3 className="det_head">Services</h3>
                          <Table responsive="lg" className="table_s mt-5 mb-5">
                              <thead>
                                  <tr>
                                      <th>Service Name</th>
                                      <th>Status</th>
                                  </tr>
                              </thead>
                              <tbody>
                                  <tr>
                                      <td>Service Name 1</td>
                                      <td>Active</td>
                                  </tr>
                              </tbody>
                          </Table>
                          <div className="text-center">
                            <Button className="btn btn-theme pl-2 pr-2 ml-3 mb-5" id="formBtn">+ Add Service</Button>
                          </div>
                        </div>
            </Col>
        </Row>
          </Container>
          <Modal
        className="right"
        show={show}
        onHide={handleClose}
        animation={false}
        id="mm"
      >
        <Modal.Header className="border-0 pb-0" closeButton></Modal.Header>
        <Modal.Body>
          <div className="mod_sec">
            <h3 className="md_txt">Edit Service Category</h3>
            <Form>
              <Form.Group className="mb-4 form-type pos-rel">
                <Form.Label className="floatLabel">Service Category*</Form.Label>
                <Form.Control value="Therapy Services" />
              </Form.Group>
              <Form.Group className="mb-4 form-type pos-rel">
                <Form.Label className="floatLabel">Service Description*</Form.Label>
                <Form.Control as="textarea" rows={6} value="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua .Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
              </Form.Group>
              <Form.Group className="mb-4 form-type">
                <div className="d-flex align-items-center justify-bw">
                  <div className="ddTxt">Upload Image for Service Category*</div>
                  <div className="fileInput">
                    <input  className="d-opacity form-control" type="file" />
                    <button className="btn btn-outline-primary">
                    <i class="fa-solid fa-cloud-arrow-up"></i> Upload
                    </button>
                  </div>
                </div>
              </Form.Group>
              <Form.Group>
                <div className="text-center" id="fxd">
                  <Button className="btn btn-theme-white pl-2 pr-2 mr-3" id="formBtnCnc">
                    Back
                  </Button>
                  <Button className="btn btn-theme pl-2 pr-2 ml-3" id="formBtn">
                    Save
                    </Button>
                  </div>
              </Form.Group>
            </Form>   
          </div>  
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Servicedetails;
