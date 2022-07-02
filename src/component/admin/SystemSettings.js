import React, { useState } from "react";
import { Container, Row, Col, Button, Form, Modal } from "react-bootstrap";
import Sidebar from "../../PageLayout/SidebarNav/Sidebar";
import AdminLeftMenu from "./AdminLeftMenu";

const SystemSettings = () => {
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
              <h5>
                Message Board{" "}
                <span className="float-right">
                  <Button
                    className="btn btn-theme-white btn-sm white-3"
                    onClick={handleShow}
                  >
                    History
                  </Button>
                </span>
              </h5>
              <p>
                Send the latest news, updates and software upgrades to the team.
                Last 5 messages are visible.
              </p>

              <hr />

              <h6>
                Default Message{" "}
                <span className="float-right">
                  <Form.Check checked type="switch" id="custom-switch" />
                </span>
              </h6>
              <p>
                Please enter the new message to be shown and the number of days
                for which it will be displayed.
              </p>
              <Form.Group>
                <Form.Control
                  as="textarea"
                  rows="4"
                  placeholder="Welcome to kinergy"
                />
              </Form.Group>

              <h6 className="mt-3">
                New Message{" "}
                <span className="float-right">
                  <Form.Check checked type="switch" id="custom-switch2" />
                </span>
              </h6>

              <Row>
                <Col lg={9} sm={8} xs={12}>
                  <p>
                    Please enter the new message to be shown and the number of
                    days for which it will be displayed.
                  </p>
                </Col>
                <Col lg={3} sm={4} xs={12}>
                  <Form.Group className="mb-3">
                    <Form.Select>
                      <option>Select Days</option>
                    </Form.Select>
                  </Form.Group>
                </Col>
              </Row>

              <Form.Group>
                <Form.Control
                  as="textarea"
                  rows="4"
                  placeholder="Welcome to kinergy"
                />
              </Form.Group>
              <div className="text-center form-action-btn mt-3">
                <Button className="btn btn-theme-white pl-2 pr-2">
                  Cancel
                </Button>
                <Button className="btn btn-theme pl-2 pr-2 ml-2">Save</Button>
              </div>
            </div>

            <div className="appointment-card mb-5">
              <h5>Other Settings</h5>
              <hr />
              <Row>
                <Col lg={9} sm={8} xs={12}>
                  <h6>System Auto Lock</h6>
                  <p>
                    The length of time before the system auto-saves the work
                    that has been done, and locks the system if there's been a
                    certain length of inactivity.
                  </p>
                </Col>
                <Col lg={3} sm={4} xs={12}>
                  <Form.Group className="mb-3">
                    <Form.Select>
                      <option>Select time</option>
                    </Form.Select>
                  </Form.Group>
                </Col>
              </Row>

              <Row>
                <Col lg={9} sm={8} xs={12}>
                  <h6>Files Uneditable after</h6>
                  <p>Makes file uneditable after XX days.</p>
                </Col>
                <Col lg={3} sm={4} xs={12}>
                  <Form.Group className="mb-3">
                    <Form.Select>
                      <option>Select days</option>
                    </Form.Select>
                  </Form.Group>
                </Col>
              </Row>

              <hr />

              <Row>
                <Col lg={9} sm={8} xs={12}>
                  <h6>Time Zone</h6>
                  <p>Select default time zone for this system.</p>
                </Col>
                <Col lg={3} sm={4} xs={12}>
                  <Form.Group className="mb-3">
                    <Form.Select>
                      <option>PDT</option>
                    </Form.Select>
                  </Form.Group>
                </Col>
              </Row>

              <hr />

              <Row>
                <Col lg={9} sm={8} xs={12}>
                  <h6>Language</h6>
                  <p>Select default language for this system.</p>
                </Col>
                <Col lg={3} sm={4} xs={12}>
                  <Form.Group className="mb-3">
                    <Form.Select>
                      <option>English (US)</option>
                    </Form.Select>
                  </Form.Group>
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
      >
        <Modal.Header className="border-0 pb-0" closeButton></Modal.Header>
        <Modal.Body>
          <h5>Message Board</h5>
          <div className="message-all">
            <p className="text-center">
              <small>11:59 PM, 22-mar-2022</small>
            </p>
            <div className="meesage-box">
              <p className="message-type">Welcome Role Jackson to kinergy</p>
              <p>
                <a href="#/">
                  <i className="far fa-copy"></i>
                </a>
              </p>
            </div>
            <p className="text-center">
              <small>11:59 PM, 22-mar-2022</small>
            </p>
            <div className="meesage-box">
              <p className="message-type">
                Welcome Role Jackson, kate Williamson, Daniel ross, Angelina Cox
                to kinergy
              </p>
              <p>
                <a href="#/">
                  <i className="far fa-copy"></i>
                </a>
              </p>
            </div>
            <p className="text-center">
              <small>11:59 PM, 22-mar-2022</small>
            </p>
            <div className="meesage-box">
              <p className="message-type">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <p>
                <a href="#/">
                  <i className="far fa-copy"></i>
                </a>
              </p>
            </div>
            <p className="text-center">
              <small>11:59 PM, 22-mar-2022</small>
            </p>
            <div className="meesage-box">
              <p className="message-type">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem
                ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <p>
                <a href="#/">
                  <i className="far fa-copy"></i>
                </a>
              </p>
            </div>
            <p className="text-center">
              <small>11:59 PM, 22-mar-2022</small>
            </p>
            <div className="meesage-box">
              <p className="message-type">
                New update rolled out for 2022 fall{" "}
              </p>
              <p>
                <a href="#/">
                  <i className="far fa-copy"></i>
                </a>
              </p>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default SystemSettings;
