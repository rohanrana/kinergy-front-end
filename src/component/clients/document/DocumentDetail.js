import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Sidebar from "../../../PageLayout/SidebarNav/Sidebar";

const DocumentDetails = () => {
  return (
    <div className="clients">
      <Sidebar />
      <Container fluid>
        <Row>
          <Col lg={8} sm={10} xs={12} className="mx-auto">
            
            <div className="appointment-card form-type-pdf">
              <h4 className="mb-3">
              HIPPA Waiver and Release Form
                <span className="float-right">
                <a href="#/document-list" className="btn btn-theme-white mt-0">
                <i className="fas fa-cloud-download"></i>
                </a>

                <a href="#/document-list" className="btn btn-theme-white mt-0 ml-2">
                  <i className="fas fa-trash"></i>
                </a>
                </span>
              </h4>
              

              <div className="format-detail border p-5 mt-5">
                    <h5 className="text-center">Sample HIPPA Right of access From Your Family Member/Friend</h5>
                    <p>I, <input type="text" value="Test" />, direct my helth care and medical services providers and payers to disclose and release my protected helth information described below to:</p>
                    <Row>
                        <Col lg={6} sm={6} xs={12} className="mb-3">
                            <label>Name</label>
                            <input type="text" className="w-100" value="Test" />
                        </Col>

                        <Col lg={6} sm={6} xs={12} className="mb-3">
                            <label>Relationship</label>
                            <input type="text" className="w-100" value="Test" />
                        </Col>

                        <Col xs={12}>
                            <label>Contact information</label>
                            <input type="text" value="Test" />
                        </Col>

                        <Col xs={12}>
                            <input type="text" className="w-100" value="Test" />
                        </Col>
                    </Row>

                    <p className="m-0 mt-3"><b>Helth information to be disclosed</b> upon the request of the person named above --</p>
                    <p>(Check either A or B);</p>
                    <ul>
                        <li>A. <b>Disclosed</b> my computer health record (including but not limited to diagnoses, lab tests, prognosis, treatment, and billing, for all conditions) <b>OR</b></li>
                        <li>B. <b>Disclosed</b> my health record, as above, <b>But do not disclose</b> the following (Check as appropriate):
                            <ul>
                                <li>Mental health record</li>
                                <li>Communicable diseases (including HIV and AIDS)</li>
                                <li>Alcohol/drug abuse treatment</li>
                                <li className="mb-2">Other (please specify):</li>
                                <p><input type="text"  /></p>
                                <p><input type="text"  /></p>
                            </ul>
                        </li>
                    </ul>
                    <p>Form of Disclosure (unless another format is mutually agreed upon between my provider and designee):</p>
                    <ul>
                        <li>An electronic record or access through an online portal</li>
                        <li>Online</li>
                    </ul>
                    <p>This authorization shall be effective until (Check one):</p>
                    <ul>
                        <li>All past, present, and future periods, OR</li>
                        <li>Date of revent: <input type="text" value="Test" /> unless i revoke it. (NOTE: You may revoke this authorization in writing at any time by notifying your health care providers, preferably in writing.)</li>
                    </ul>

                    <Row>
                    <Col lg={6} sm={6} xs={12} className="mb-3">
                            <input type="text" className="w-100" value="Test" />
                            <label>Name of the individual giving this Authorization</label>
                        </Col>

                        <Col lg={6} sm={6} xs={12} className="mb-3">
                            <input type="text" className="w-100" value="Test" />
                            <label>Date of Birth</label>
                        </Col>

                        <Col lg={6} sm={6} xs={12} className="mb-3">
                            <input type="text" className="w-100" value="Test" />
                            <label>Signature of the individual giving this Authorization</label>
                        </Col>

                        <Col lg={6} sm={6} xs={12} className="mb-3">
                            <input type="text" className="w-100" value="Test" />
                            <label>Date</label>
                        </Col>
                    </Row>

                    <p className="text-center">Note: Hippa Authority for Right of Access: 45 C.F.R. & 1464.524</p>
              </div>
              
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default DocumentDetails;
