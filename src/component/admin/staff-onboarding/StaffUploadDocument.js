import React, { useState, useCallback } from "react";
import { Container, Row, Col, Button, Modal, Form } from "react-bootstrap";
import Sidebar from "../../sidenav/Sidebar";
import AdminLeftMenu from "../AdminLeftMenu";
import Dropzone from "react-dropzone-uploader";
import ShowImage from "./ShowImage";

import { connect } from "react-redux";
import { withRouter, Redirect } from "react-router-dom";
import {
  staffUpdateDocumentOnboarding,
  clearStaffOnboarding,
} from "../../../store/staffOnboarding/actions";

import StaffLogin from "../../logins/StaffLogin";
import useToken from "../../useToken";


// console.log(localStorage.getItem('staffOnBoardingData'));
// localStorage.removeItem('staffOnBoardingData')

const StaffUploadDocument = (props) => {
  if (!localStorage.getItem("staffOnBoardingDataId")) {
    props.history.push("/add-staff-onboarding");
  }

  const [modalShow, setModalShow] = React.useState(false);
  const [validFiles, setValidFiles] = useState([]);
  const [selectedFiles, setSelectedFiles] = useState([]);
  const body = new FormData();

  const handleStaffOnboardingForm = () => {
    body.append("_id", localStorage.getItem("staffOnBoardingDataId"));
    props.staffUpdateDocumentOnboarding(body);
  };

  const getWorkPermitUploadParams = ({ file, meta }) => {
    body.append("workPermit", file);
    return { url: "https://httpbin.org/post" };
  };
  const getDriversLicenseUploadParams = ({ file, meta }) => {
    body.append("driverLicense", file);
    return { url: "https://httpbin.org/post" };
  };
  const getSsnUploadParams = ({ file, meta }) => {
    body.append("ssnDocument", file);
    console.log(body);
    return { url: "https://httpbin.org/post" };
  };

  const toast = (innerHTML) => {
    const el = document.getElementById("toast");
    el.innerHTML = innerHTML;
    el.className = "show";
    setTimeout(() => {
      el.className = el.className.replace("show", "");
    }, 3000);
  };

  function MyVerticallyCenteredModal(props) {
    // const MyUploader = () => {
    //   const getUploadParams = ({ meta }) => {
    //     console.log('meta',meta);
    //     return { url: "asdas.png" };
    //   };

    // const handleChangeStatus = ({ meta, file }, status) => {
    //   console.log('status',status);
    //   console.log( 'meta', meta);
    //   console.log('file', file);
    // };

    //   return (
    //     <Dropzone
    //       getUploadParams={getUploadParams}
    //       onChangeStatus={handleChangeStatus}
    //       accept="image/*,audio/*,video/*"
    //     />
    //   );
    // };

    const { token, setToken } = useToken();
    if (!token) {
      return <StaffLogin />;
    }
    
    return (
      <Modal
        {...props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body className="p-5">
          <a className="close-modal-btn" onClick={props.onHide}>
            <i className="fas fa-times"></i>
          </a>
          <h5 className="mb-3">Upload document</h5>
          <Row>
            <Col lg={12} sm={12} xs={12}></Col>
          </Row>
          <Row>
            <Col Col lg={12} sm={12} xs={12}>
              <div className="text-center form-action-btn mt-3">
                <Button className="btn btn-theme-white pl-2 pr-2">
                  Cancel
                </Button>
                <Button className="btn btn-theme pl-2 pr-2 ml-2">Save</Button>
              </div>
            </Col>
          </Row>
        </Modal.Body>
      </Modal>
    );
  }

  // const onDrop = useCallback((acceptedFile) => {
  //   console.log('onDrop',acceptedFile);

  //     const reader = new FileReader();
  //     reader.onload = function (e) {
  //       setImages((prevState) => [
  //         ...prevState,
  //         { id: 1, src: e.target.result },
  //       ]);
  //     };
  //     console.log('images',images);
  //     reader.readAsDataURL(acceptedFile);
  //     return acceptedFile;

  // }, []);

  const removeFile = (name) => {
    // find the index of the item
    // remove the item from array

    const validFileIndex = validFiles.findIndex((e) => e.name === name);
    validFiles.splice(validFileIndex, 1);
    // update validFiles array
    setValidFiles([...validFiles]);
    const selectedFileIndex = selectedFiles.findIndex((e) => e.name === name);
    selectedFiles.splice(selectedFileIndex, 1);
    // update selectedFiles array
    setSelectedFiles([...selectedFiles]);
  };

  const Preview = ({ meta, file }) => {
    const { name, percent, status } = meta;
    return (
      // <span style={{ alignSelf: 'flex-start', margin: '10px 3%', fontFamily: 'Helvetica' }}>
      //   {name}, {Math.round(percent)}%, {status}
      // </span>
      <div className="text-center">
        <Button className="btn btn-theme-white ml-0">
          <i className="fas fa-eye"></i>
        </Button>
        <Button className="btn btn-theme-white ml-2">
          <i className="fas fa-cloud-download"></i>
        </Button>
        <Button
          className="btn btn-theme-white ml-2"
          onClick={() => removeFile(name)}
        >
          <i className="fas fa-trash"></i>
        </Button>
        <p className="main-h text-left mb-0 mt-3">
          <i className="fas fa-file mr-2"></i>
          {name}
        </p>
      </div>
    );
  };

  const HandleChangeStatus = ({ meta, file }, status) => {
    if (status === "headers_received") {
      toast(`${meta.name} uploaded!`);
    } else if (status === "aborted") {
      toast(`${meta.name}, upload failed...`);
    } else if (status === "done") {
    }
  };

  const WorkPermitUpload = () => {
    return (
      <React.Fragment>
        <Dropzone
          getUploadParams={getWorkPermitUploadParams}
          onChangeStatus={HandleChangeStatus}
          PreviewComponent={Preview}
          acceptedFiles={["image/jpeg", "image/png", "image/jpg"]}
          maxFiles={1}
          multiple={false}
          canCancel={true}
          inputContent={
            <span className="btn btn-theme ml-0 w-100 btn-sm mt-3">Upload</span>
          }
        />
      </React.Fragment>
    );
  };

  const DriversLicenseUpload = () => {
    return (
      <React.Fragment>
        <Dropzone
          getUploadParams={getDriversLicenseUploadParams}
          onChangeStatus={HandleChangeStatus}
          acceptedFiles={["image/jpeg", "image/png", "image/jpg"]}
          PreviewComponent={Preview}
          maxFiles={1}
          multiple={false}
          canCancel={true}
          inputContent={
            <span className="btn btn-theme ml-0 w-100 btn-sm mt-3">Upload</span>
          }
        />
      </React.Fragment>
    );
  };

  const SsnUpload = () => {
    return (
      <React.Fragment>
        <Dropzone
          getUploadParams={getSsnUploadParams}
          onChangeStatus={HandleChangeStatus}
          acceptedFiles={["image/jpeg", "image/png", "image/jpg"]}
          PreviewComponent={Preview}
          maxFiles={1}
          multiple={false}
          canCancel={true}
          inputContent={
            <span className="btn btn-theme ml-0 w-100 btn-sm mt-3">Upload</span>
          }
        />
      </React.Fragment>
    );
  };

  return (
    <div className="clients">
      <Sidebar />
      <Container fluid>
        <Row>
          <Col lg={2} sm={4} xs={12}>
            <AdminLeftMenu />
          </Col>
          <Col lg={10} sm={8} xs={12}>
            <div className="appointment-card form-type">
              <h5 className="mb-3">
                <a href="#/add-staff-onboarding" className="theme-color mr-2">
                  <i className="fas fa-chevron-left"></i>
                </a>
                Employee Onboarding
              </h5>
              <div id="toast"></div>
              {props.staffOnboardingDocumentErr?props.staffOnboardingDocumentErr.response_code === 501?<p className="error">{props.staffOnboardingDocumentErr.response_message}</p>:1:2}
              {props.staffOnboardingDocumentErr?props.staffOnboardingDocumentErr.response_code === 422?<p className="error">{props.staffOnboardingDocumentErr.errors.response_message}</p>:1:2}
              <hr />

              <h6>Upload Document</h6>
              <Row>
                <Col lg={4} sm={4} xs={12}>
                 
                  <div className="upload-document-colum text-center">
                    
                    <h6>SSN</h6>
                    {/* <Button className="btn btn-theme-white ml-0">
                      <i className="fas fa-eye"></i>
                    </Button>
                    <Button className="btn btn-theme-white ml-2">
                      <i className="fas fa-cloud-download"></i>
                    </Button>
                    <Button className="btn btn-theme-white ml-2">
                      <i className="fas fa-trash"></i>
                    </Button>
                    <p className="main-h text-left mb-0 mt-3">
                      <i className="fas fa-file mr-2"></i>SSN.pdf
                    </p> */}
                    <SsnUpload />
                  </div>
                </Col>

                <Col lg={4} sm={4} xs={12}>
                  <div className="upload-document-colum text-center">
                    <h6>Drivers License</h6>
                    <DriversLicenseUpload />
                  </div>
                </Col>

                <Col lg={4} sm={4} xs={12}>
                  <div className="upload-document-colum text-center">
                    <h6>Work Permit</h6>
                    {/* <Button
                      className="btn btn-theme ml-0 w-100 btn-sm mt-3"
                      onClick={() => setModalShow(true)}
                    >
                      Upload
                    </Button> */}
                    <WorkPermitUpload />
                  </div>
                </Col>
              </Row>

              <Row>
                <Col Col lg={12} sm={12} xs={12}>
                  <div className="text-center form-action-btn mt-3">
                    <Button
                      className="btn btn-theme pl-2 pr-2 ml-0"
                      onClick={handleStaffOnboardingForm}
                    >
                      Save
                    </Button>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </div>
  );
};

// export default StaffUploadDocument;

const mapStateToProps = (state) => ({
  isLoading: state.loading.isLoading,
  staffOnboardingDocumentData:  state.staffOnboarding.staffOnboardingDocumentData,
  staffOnboardingDocumentErr: state.staffOnboarding.staffOnboardingDocumentErr,
  status: state.staffOnboarding.status,
});

const mapDispatchToProps = (dispatch) => ({
  staffUpdateDocumentOnboarding: (body) =>
    dispatch(staffUpdateDocumentOnboarding(body)),
  // clearStaffLogin : ()=>dispatch(clearStaffLogin())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(StaffUploadDocument));
