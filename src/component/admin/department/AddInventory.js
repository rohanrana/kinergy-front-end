import React from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import Sidebar from "../../sidenav/Sidebar";
import AdminLeftMenu from "../AdminLeftMenu";
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

const AddInventory = () => {
  return (
    <div className="clients">
      <Sidebar />
      <Container fluid >
        <Row>
          <Col lg={2} sm={4} xs={12}>
            <AdminLeftMenu />
          </Col>
          <Col lg={10} sm={8} xs={12}>
            <div className="appointment-card mb-5">
              <h5 className="mb-3">
                Adding a New Product
                <span className="float-right">
                  <Form>
                    <Form.Check
                      type="switch"
                      id="custom-switch"
                      label={<small>In Stock</small>}
                    />
                  </Form>
                </span>
              </h5>
              <Form>
                <Row>
                  <Col lg={12} sm={12} xs={12}>
                    <Form.Group className="mb-3">
                      <Form.Control placeholder="Product Name" />
                    </Form.Group>
                  </Col>

                  <Col lg={12} sm={12} xs={12}>
                    <Form.Group className="mb-3">
                      <Form.Control
                        as="textarea"
                        placeholder="Description"
                        rows="3"
                      />
                    </Form.Group>
                  </Col>

                  <Col lg={12}>
                    <h6>Other Details</h6>
                  </Col>

                  <Col lg={6} sm={6} xs={12}>
                    <Form.Group className="mb-3">
                      <Form.Control placeholder="Product Code" />
                    </Form.Group>
                  </Col>

                  <Col lg={6} sm={6} xs={12}>
                    <Form.Group className="mb-3">
                      <Form.Control placeholder="Quantity" />
                    </Form.Group>
                  </Col>

                  <Col lg={12}>
                    <h6>Price Details</h6>
                  </Col>

                  <Col lg="4" sm={4} xs={4}>
                    <Form.Group className="mb-3">
                      <Form.Control placeholder="Price" />
                    </Form.Group>
                  </Col>

                  <Col lg="4" sm={4} xs={4}>
                    <Form.Group className="mb-3">
                      <Form.Control placeholder="Tax" />
                    </Form.Group>
                  </Col>

                  <Col lg="4" sm={4} xs={4}>
                    <Form.Group className="mb-3">
                      <Form.Control placeholder="Total Amount" />
                    </Form.Group>
                  </Col>

                  <Col lg={12}>
                    <h6>Upload Images</h6>
                  </Col>

                  <Col lg={12} sm={12} xs={12}>
                    <MyUploader />
                  </Col>
                </Row>

                <Row>
                  <Col Col lg={12} sm={12} xs={12}>
                    <div className="text-center form-action-btn mt-5">
                      <Button className="btn btn-theme-white pl-2 pr-2">
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

export default AddInventory;
