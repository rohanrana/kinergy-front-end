import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Sidebar from "../../../PageLayout/SidebarNav/Sidebar";
import Dropzone from "react-dropzone-uploader";
import { Link } from "react-router-dom";

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

const AddDocuments = () => {
  return (
    <div className="clients">
      <Sidebar />
      <Container fluid>
        <Row>
          <Col lg={12} sm={12} xs={12}>

            <div className="appointment-card form-type">
              <h5 className="mb-3">
                <Link to="/document-list" className="theme-color mr-2">
                  <i className="fas fa-chevron-left"></i>
                </Link>
                Add Document
              </h5>
              <hr />
              <Form>


                <Row>
                  <Col lg={12} sm={12} xs={12}>
                    <p>Upload Document</p>
                    <MyUploader className="mb-3" />
                  </Col>
                  <Col lg={6} sm={6} xs={12}>
                    <Form.Group className="mb-3 mt-3">
                      <Form.Label>Intervention Linked To</Form.Label>
                      <Form.Select>
                        <option>Full Body - Core / Legs / Shoulders- 11-Aug-2020</option>
                      </Form.Select>
                    </Form.Group>
                  </Col>

                  <Col lg={6} sm={6} xs={12}>
                    <Form.Group className="mb-3 mt-3">
                      <Form.Label>Document Type</Form.Label>
                      <Form.Select >
                        <option>Document Type*</option>
                      </Form.Select>
                    </Form.Group>
                  </Col>

                  <Col lg={6} sm={6} xs={12}>
                    <Form.Group className="mb-3">
                      <Form.Select className="m-0">
                        <option>Attached By*</option>
                      </Form.Select>
                    </Form.Group>
                  </Col>
                  <Col lg={6} sm={6} xs={12}>
                    <Form.Group className="mb-3">
                      <Form.Control
                        className="mt-0"
                        type="text"
                        placeholder="Date Of Document*"
                      />
                    </Form.Group>
                  </Col>



                  <Col Col lg={12} sm={12} xs={12}>
                    <div className="text-center form-action-btn mt-3">
                      <a href="#/document-list" className="btn btn-theme-white pl-2 pr-2">
                        Back
                      </a>
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

export default AddDocuments;
