import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Sidebar from "../../../PageLayout/SidebarNav/Sidebar";
import Dropzone from "react-dropzone-uploader";

const MyUploader = () => {
  const getUploadParams = ({ meta }) => {
    return { url: "" };
  };

  const handleChangeStatus = ({ meta, file }, status) => {
    console.log(status, meta, file);
  };

  return (
    <Dropzone
      getUploadParams={getUploadParams}
      onChangeStatus={handleChangeStatus}
      accept="image/*,audio/*,video/*"
    />
  );
};

const UploadDocument = () => {
  return (
    <div className="clients">
      <Sidebar />
      <Container fluid>
        <Row>
          <Col lg={12} sm={12} xs={12}>
            <div className="appointment-card">
              <h5 className="mb-3">
                <a href="#/add-treatment-intervention" className="theme-color mr-2">
                  <i className="fas fa-chevron-left"></i>
                </a>
                Upload Document
              </h5>
              <hr />
              <Form>

                  <Row>
                  <Col lg={12} sm={12} xs={12}>
                  <MyUploader />
                  </Col>
                  <Col lg={4} sm={6} xs={12}>
                    <p className="bg-light p-2 mt-3">
                      <i className="fas fa-file mr-2"></i>lefthand.pdf
                      <span className="float-right">
                        <i className="fas fa-times"></i>
                      </span>
                    </p>
                  </Col>
                  </Row>
                <Row>
                  

                  <Col lg={6} sm={6} xs={12}>
                    <Form.Group className="mb-3">
                      <Form.Control placeholder="Intervention Linked To" />
                    </Form.Group>
                  </Col>

                  <Col lg={6} sm={6} xs={12}>
                    <Form.Group className="mb-3">
                      <Form.Control placeholder="Date Of Document*" />
                    </Form.Group>
                  </Col>

                  <Col lg={6} sm={6} xs={12}>
                    <Form.Group className="mb-3">
                      <Form.Select>
                        <option>Document Type*</option>
                      </Form.Select>
                    </Form.Group>
                  </Col>

                  <Col lg={6} sm={6} xs={12}>
                    <Form.Group className="mb-3">
                      <Form.Select>
                        <option>Attached By*</option>
                      </Form.Select>
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col lg={12} sm={12} xs={12}>
                    <Form.Group className="mb-3">
                      <Form.Control as="textarea" rows="3" placeholder="Comments" />
                    </Form.Group>
                  </Col>

                </Row>

                <Row>
                  <Col Col lg={12} sm={12} xs={12}>
                    <div className="text-center form-action-btn mt-3">
                      <Button className="btn btn-theme-white pl-2 pr-2 ml-0">
                        Back
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

export default UploadDocument;
