import React, { useState } from "react";
import { Container, Row, Col, Button, Modal, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import Sidebar from "../../../PageLayout/SidebarNav/Sidebar";
import AdminLeftMenu from "../AdminLeftMenu";
import UploadPreviewAdd from "./UploadPreviewAdd";


const Services = () => {
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
                <div className="appointment-card">
                    <div className="d-flex justify-content-between align-item-center">
                        <h5>Service Category</h5>
                        <Button className="btn btn-theme rounded" varient="primary" onClick={handleShow}>+ Add Services Category</Button>
              </div>
              
            <Row id="service_id">
              <Col xs={12} sm={4} md={3}>
                <div className="serviceCard">
                  <div className="text-right">
                    <span className="active_span"><span className="dot_span"></span> Active</span>
                  </div>
                  <div className="sevice_c">
                    <h3>Therapy <br/>Services </h3>
                    <span>8 Services</span>
                  </div>
                  <div className="text-right">
                    <Link to="/service-details" className="view_d">View Details <i class="fa-solid fa-arrow-right"></i></Link>
                  </div>
                </div>
              </Col>
              <Col xs={12} sm={4} md={3}>
                <div className="serviceCard">
                  <div className="text-right">
                    <span className="active_span"><span className="dot_span"></span> Active</span>
                  </div>
                  <div className="sevice_c">
                    <h3>Performance <br/>Training </h3>
                    <span>8 Services</span>
                  </div>
                  <div className="text-right">
                    <Link to="/service-details" className="view_d">View Details <i class="fa-solid fa-arrow-right"></i></Link>
                  </div>
                </div>
              </Col>
              <Col xs={12} sm={4} md={3}>
                <div className="serviceCard">
                  <div className="text-right">
                    <span className="active_span"><span className="dot_span"></span> Active</span>
                  </div>
                  <div className="sevice_c">
                    <h3>Concussion <br/> Management </h3>
                    <span>8 Services</span>
                  </div>
                  <div className="text-right">
                    <Link to="/service-details" className="view_d">View Details <i class="fa-solid fa-arrow-right"></i></Link>
                  </div>
                </div>
              </Col>
              <Col xs={12} sm={4} md={3}>
                <div className="serviceCard">
                  <div className="text-right">
                    <span className="active_span"><span className="dot_span"></span> Active</span>
                  </div>
                  <div className="sevice_c">
                    <h3>Massage <br/> Therapy </h3>
                    <span>8 Services</span>
                  </div>
                  <div className="text-right">
                    <Link to="/service-details" className="view_d">View Details <i class="fa-solid fa-arrow-right"></i></Link>
                  </div>
                </div>
              </Col>
              <Col xs={12} sm={4} md={3}>
                <div className="serviceCard">
                  <div className="text-right">
                    <span className="active_span"><span className="dot_span"></span> Active</span>
                  </div>
                  <div className="sevice_c">
                    <h3>Welness <br/> Services</h3>
                    <span>8 Services</span>
                  </div>
                  <div className="text-right">
                    <Link to="/service-details" className="view_d">View Details <i class="fa-solid fa-arrow-right"></i></Link>
                  </div>
                </div>
              </Col>
              <Col xs={12} sm={4} md={3}>
                <div className="serviceCard">
                  <div className="text-right">
                    <span className="active_span"><span className="dot_span"></span> Active</span>
                  </div>
                  <div className="sevice_c">
                    <h3>Speciality <br/>  Classes</h3>
                    <span>8 Services</span>
                  </div>
                  <div className="text-right">
                    <Link to="/service-details" className="view_d">View Details <i class="fa-solid fa-arrow-right"></i></Link>
                  </div>
                </div>
              </Col>
              <Col xs={12} sm={4} md={3}>
                <div className="serviceCard">
                  <div className="text-right">
                    <span className="active_span"><span className="dot_span"></span> Active</span>
                  </div>
                  <div className="sevice_c">
                    <h3>Physician <br/> Services </h3>
                    <span>8 Services</span>
                  </div>
                  <div className="text-right">
                    <Link to="/service-details" className="view_d">View Details <i class="fa-solid fa-arrow-right"></i></Link>
                  </div>
                </div>
              </Col>
              <Col xs={12} sm={4} md={3}>
                <div className="serviceCard">
                  <div className="text-right">
                    <span className="active_span"><span className="dot_span"></span> Active</span>
                  </div>
                  <div className="sevice_c">
                    <h3>Custom <br/> Service</h3>
                    <span>8 Services</span>
                  </div>
                  <div className="text-right">
                    <Link to="/service-details" className="view_d">View Details <i class="fa-solid fa-arrow-right"></i></Link>
                  </div>
                </div>
              </Col>
            </Row>
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
            <h3 className="md_txt">Add New Service Category</h3>
            <Form>
              <Form.Group className="mb-4 form-type">
                <Form.Control placeholder="Service Category*" />
              </Form.Group>
              <Form.Group className="mb-4 form-type">
                <Form.Control as="textarea" rows={6} placeholder="Service Category Description*" />
              </Form.Group>
              <Form.Group className="mb-4 form-type">
                <UploadPreviewAdd />
              </Form.Group>
              <Form.Group className="df">
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

export default Services;
