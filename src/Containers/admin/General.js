import React from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import Sidebar from "../../PageLayout/SidebarNav/Sidebar";
import AdminLeftMenu from "./AdminLeftMenu";

const General = () => {
  return (
    <div className="clients">
      <Sidebar />
      <Container fluid>
        <Row>
          <Col lg={2} sm={4} xs={12}>
            <AdminLeftMenu />
          </Col>
          <Col lg={10} sm={8} xs={12}>
            <div className="appointment-card">
              <h5 className="pb-2">
                Message Board
                <span className="float-right">
                  <a href="#/" className="btn btn-theme m-0 btn-sm pl-2 pr-2">
                    + Add New
                  </a>
                </span>
              </h5>
              <p>
                Send the latest news, updates and software upgrades <br />
                to the team
              </p>

              <hr />

              <Form>
                <div className="top-form">
                  <div className="top-form-col-1">
                    {["checkbox"].map((type) => (
                      <div key={`default-${type}`} className="mb-3">
                        <Form.Check
                          checked
                          type={type}
                          id={`default-${type}`}
                          // label={'Board Refresh'}
                        />
                      </div>
                    ))}
                  </div>

                  <div className="top-form-col-2">
                    <label className="theme-color">
                      <b>Board Refresh</b>
                    </label>
                    <p>Auto refresh the board in loop after..</p>
                    {["radio"].map((type) => (
                      <div key={`inline-${type}`} className="mb-3">
                        <Form.Check
                          inline
                          type={type}
                          name="board-refresh"
                          id={`inline-${type}-1`}
                          label={`10 Hrs`}
                        />

                        <Form.Check
                          inline
                          type={type}
                          name="board-refresh"
                          id={`inline-${type}-2`}
                          label={`20 Hrs`}
                        />

                        <Form.Check
                          inline
                          type={type}
                          name="board-refresh"
                          id={`inline-${type}-3`}
                          label={`24 Hrs`}
                        />

                        <Form.Check
                          inline
                          type={type}
                          name="board-refresh"
                          id={`inline-${type}-4`}
                          label={`48 Hrs`}
                        />

                        <Form.Check
                          inline
                          type={type}
                          name="board-refresh"
                          id={`inline-${type}-5`}
                          label={`72 Hrs`}
                        />

                        <Form.Check
                          inline
                          type={type}
                          name="board-refresh"
                          id={`inline-${type}-6`}
                          label={`96 Hrs`}
                        />

                        <Form.Check
                          inline
                          type={type}
                          name="board-refresh"
                          id={`inline-${type}-7`}
                          label={`Others`}
                        />
                      </div>
                    ))}
                  </div>
                </div>

                <hr />

                <div className="top-form">
                  <div className="top-form-col-1">
                    {["checkbox"].map((type) => (
                      <div key={`default-${type}`} className="mb-3">
                        <Form.Check
                          checked
                          type={type}
                          id={`default-${type}`}
                          // label={'Board Refresh'}
                        />
                      </div>
                    ))}
                  </div>

                  <div className="top-form-col-2">
                    <label className="theme-color">
                      <b>Empty Board Display</b>
                    </label>
                    {["radio"].map((type) => (
                      <div key={`inline-${type}`} className="mt-3">
                        <Form.Check
                          inline
                          type={type}
                          name="empty-board"
                          id={`inline-${type}-8`}
                          label={`No new messages`}
                        />

                        <Form.Check
                          inline
                          type={type}
                          name="empty-board"
                          id={`inline-${type}-9`}
                          label={`No new messages for now`}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </Form>
            </div>
            <div className="appointment-card">
              <h5 className="pb-2">
                Facility Information
                <span className="float-right">
                  <a href="#/adding-facility" className="btn btn-theme m-0 btn-sm pl-2 pr-2">
                    Edit
                  </a>
                </span>
              </h5>

              <hr />

              <Row>
                <Col lg={6} sm={6} xs={12}>
                  <h6>Facility Name</h6>
                  <p>Kinergy Sports Medicine and Performance</p>
                </Col>

                <Col lg={6} sm={6} xs={12}>
                  <h6>Address</h6>
                  <p>38173, Crescent Road, Las Vegas, NV, 89612</p>
                </Col>

                <hr />

                <Col lg={6} sm={6} xs={12}>
                  <h6>Timezone</h6>
                  <p>UTC 09:00 Pacific Time (US/Canada)</p>
                </Col>

                <Col lg={6} sm={6} xs={12}>
                  <h6>Language</h6>
                  <p>English</p>
                </Col>
              </Row>
            </div>

            <div className="appointment-card mb-5">
              <h5 className="pb-2">Other Settings</h5>
              <hr />
              <Form>
                <div className="top-form">
                  <div className="top-form-col-1">
                    {["checkbox"].map((type) => (
                      <div key={`default-${type}`} className="mb-3">
                        <Form.Check
                          checked
                          type={type}
                          id={`default-${type}`}
                          // label={'Board Refresh'}
                        />
                      </div>
                    ))}
                  </div>

                  <div className="top-form-col-2">
                    <label className="theme-color">
                      <b>System Auto Lock</b>
                    </label>
                    <p>Auto locks the whole system after..</p>
                    {["radio"].map((type) => (
                      <div key={`inline-${type}`} className="mb-3">
                        <Form.Check
                          inline
                          type={type}
                          name="system-auto"
                          id={`inline-${type}-10`}
                          label={`10 Min`}
                        />

                        <Form.Check
                          inline
                          type={type}
                          name="system-auto"
                          id={`inline-${type}-11`}
                          label={`20 Min`}
                        />

                        <Form.Check
                          inline
                          type={type}
                          name="system-auto"
                          id={`inline-${type}-12`}
                          label={`24 Min`}
                        />

                        <Form.Check
                          inline
                          type={type}
                          name="system-auto"
                          id={`inline-${type}-13`}
                          label={`48 Min`}
                        />

                        <Form.Check
                          inline
                          type={type}
                          name="system-auto"
                          id={`inline-${type}-14`}
                          label={`72 Min`}
                        />

                        <Form.Check
                          inline
                          type={type}
                          name="system-auto"
                          id={`inline-${type}-15`}
                          label={`96 Min`}
                        />

                        <Form.Check
                          inline
                          type={type}
                          name="system-auto"
                          id={`inline-${type}-16`}
                          label={`Others`}
                        />
                      </div>
                    ))}
                  </div>
                </div>

                <hr />

                <div className="top-form">
                  <div className="top-form-col-1">
                    {["checkbox"].map((type) => (
                      <div key={`default-${type}`} className="mb-3">
                        <Form.Check
                          checked
                          type={type}
                          id={`default-${type}`}
                          // label={'Board Refresh'}
                        />
                      </div>
                    ))}
                  </div>

                  <div className="top-form-col-2">
                    <label className="theme-color">
                      <b>Files Lock</b>
                    </label>
                    <p>Auto locks the files after no activity</p>
                    {["radio"].map((type) => (
                      <div key={`inline-${type}`} className="mt-3">
                        <Form.Check
                          inline
                          type={type}
                          name="files-lock"
                          id={`inline-${type}-17`}
                          label={`7 Days`}
                        />

                        <Form.Check
                          inline
                          type={type}
                          name="files-lock"
                          id={`inline-${type}-18`}
                          label={`30 Days`}
                        />

                        <Form.Check
                          inline
                          type={type}
                          name="files-lock"
                          id={`inline-${type}-19`}
                          label={`40 Days`}
                        />
                      </div>
                    ))}
                  </div>
                </div>

                <hr />
                <div className="top-form">
                  <div className="top-form-col-1">
                    {["checkbox"].map((type) => (
                      <div key={`default-${type}`} className="mb-3">
                        <Form.Check
                          checked
                          type={type}
                          id={`default-${type}`}
                          // label={'Board Refresh'}
                        />
                      </div>
                    ))}
                  </div>

                  <div className="top-form-col-2">
                    <label className="theme-color">
                      <b>Appointment Length</b>
                    </label>
                    <p>Set the length of appointment</p>
                    {["radio"].map((type) => (
                      <div key={`inline-${type}`} className="mb-3">
                        <Form.Check
                          inline
                          type={type}
                          name="appointment-lenght"
                          id={`inline-${type}-20`}
                          label={`10 Min`}
                        />

                        <Form.Check
                          inline
                          type={type}
                          name="appointment-lenght"
                          id={`inline-${type}-21`}
                          label={`20 Min`}
                        />

                        <Form.Check
                          inline
                          type={type}
                          name="appointment-lenght"
                          id={`inline-${type}-22`}
                          label={`24 Min`}
                        />

                        <Form.Check
                          inline
                          type={type}
                          name="appointment-lenght"
                          id={`inline-${type}-23`}
                          label={`48 Min`}
                        />

                        <Form.Check
                          inline
                          type={type}
                          name="appointment-lenght"
                          id={`inline-${type}-24`}
                          label={`72 Min`}
                        />

                        <Form.Check
                          inline
                          type={type}
                          name="appointment-lenght"
                          id={`inline-${type}-25`}
                          label={`96 Min`}
                        />

                        <Form.Check
                          inline
                          type={type}
                          name="appointment-lenght"
                          id={`inline-${type}-26`}
                          label={`Others`}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default General;
