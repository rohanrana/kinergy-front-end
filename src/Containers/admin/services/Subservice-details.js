import React, { useState, useEffect, useCallback } from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Modal,
  Form,
  Table,
} from "react-bootstrap";
// import { Link } from "react-router-dom";
// import Sidebar from "../../../PageLayout/SidebarNav/Sidebar";
import AdminLeftMenu from "../AdminLeftMenu";
import Dummyimage from "../../../image/dummy.jpg";
import UploadPreviewEdit from "./UploadPreviewEdit";
import { Link, useParams } from "react-router-dom";
import { MultiSelect } from "react-multi-select-component";
import {
  errorToast,
  getErrorObject,
  successToast,
  verifyObject,
} from "../../../utilities/utils";
import { useDispatch, useSelector } from "react-redux";
import {
  changeSubServiceCategoryStatus,
  getSubServiceByCategoryID,
} from "../../../Services/subServices";
import TableLoader from "../../../component/common/TableLoader";
import AddSubServices from "./AddSubServices";
import { floor, isArray } from "lodash";
import AddProviders from "./AddProviders";

const options = [
  { label: "Terill Lobo", value: "Terill Lobo" },
  { label: "Mitchelle Jackson", value: "Mitchelle Jackson" },
  { label: "Mikey Lawson", value: "Mikey Lawson" },
  { label: "Jennifer Cortell", value: "Jennifer Cortell" },
];

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body className="p-5 text-center">
        <Button className="close-modal-btn" onClick={props.onHide}>
          <i className="fas fa-times"></i>
        </Button>
        <h5 class="f20 mb-3">
          Do you want to remove<b>“Terill Lobo”</b> as a provider for{" "}
          <b> “Athletic Therapy/Physiotherapy”</b> ?
        </h5>
        <Button
          className="btn btn-theme-white white-3 pl-5 pr-5"
          onClick={props.onHide}
        >
          No
        </Button>
        <Button className="btn btn-theme ml-2 pl-5 pr-5">Yes</Button>
      </Modal.Body>
    </Modal>
  );
}
function MyVerticallyCenteredModal1(props) {
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body className="p-5 text-center">
        <Button className="close-modal-btn" onClick={props.onHide}>
          <i className="fas fa-times"></i>
        </Button>
        <h5 className="mb-3">
          Do you want to remove <b>“Medical History Questionnaire”</b> form from{" "}
          <b>“Athletic Therapy/Physiotherapy” ?</b>
        </h5>
        <Button
          className="btn btn-theme-white white-3 pl-5 pr-5"
          onClick={props.onHide}
        >
          No
        </Button>
        <Button className="btn btn-theme ml-2 pl-5 pr-5">Yes</Button>
      </Modal.Body>
    </Modal>
  );
}

const Subservicedetails = () => {
  const [checked, setChecked] = useState(false);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // Modal for Add Sub Services
  const [show1, setShow1] = useState(false);
  const handleClose1 = () => setShow1(false);
  // const handleShow1 = () => setShow1(true);

  // Add Providers
  const [show2, setShow2] = useState(false);
  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);

  const [modalShow, setModalShow] = useState(false);
  const [modalShow1, setModalShow1] = useState(false);

  const [selected, setSelected] = useState([]);

  const dispatch = useDispatch();

  // const searchFacilitiesData = useCallback(debounce(handleSearch, 1000), []);

  const {
    data: serviecesData,
    isLoading: loading,
    pagination,
  } = useSelector((state) => state.servicesByCateID);
  const [servicesDetails, setServicesDetails] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const routeParams = useParams();

  console.log("routeParams", routeParams);

  useEffect(() => {
    let { service_cat_id } = routeParams;
    getSubServiceCategoryDetail();
    //  dispatch(servicesByCateIDActions.onRequest({ _id: service_cat_id }));
  }, []);

  const getSubServiceCategoryDetail = async () => {
    try {
      let { service_id } = routeParams;
      await setLoading(true);
      let response = await getSubServiceByCategoryID({ _id: service_id });
      setServicesDetails(
        verifyObject(response, "data.result.service[0]", null)
      );
      await setLoading(false);
      if (response.data.message) {
        successToast({ content: response.data.message });
      }
    } catch (error) {
      const { message } = getErrorObject(error);
      errorToast({ content: message });
      await setLoading(false);
    }
  };

  useEffect(() => {
    if (servicesDetails) {
      if (servicesDetails.status === "ACTIVE") {
        setChecked(true);
      }
      if (servicesDetails.status === "INACTIVE") {
        setChecked(false);
      }
    }
  }, [servicesDetails]);

  const changetServiceSubCategoryDetailStatus = async (v) => {
    console.log("value", v.target.checked);
    setChecked(v.target.checked);
    let status = v.target.checked ? "ACTIVE" : "INACTIVE";
    console.log("status", status);
    try {
      let { service_id } = routeParams;
      await setLoading(true);
      let response = await changeSubServiceCategoryStatus({
        _id: service_id,
        status: v.target.checked ? "ACTIVE" : "INACTIVE",
      });
      getSubServiceCategoryDetail();
      await setLoading(false);
      if (response.data.response_message) {
        successToast({ content: response.data.response_message });
      }
    } catch (error) {
      const { message } = getErrorObject(error);
      errorToast({ content: message });
      await setLoading(false);
    }
  };
  console.log("servicesDetails", servicesDetails);
  return (
    <div className="clients mb-5">
      {/* <Sidebar /> */}
      <Container fluid>
        <Row>
          <Col lg={3} sm={4} xs={12}>
            <AdminLeftMenu />
          </Col>
          <Col lg={9} sm={8} xs={12}>
            <div className="text-right">
              <Button
                className="btn btn-theme pl-2 pr-2"
                id="formBtn"
                onClick={handleShow}
              >
                Edit
              </Button>
            </div>
            <div style={{ textAlign: "center" }}>
              {isLoading && <TableLoader />}
            </div>
            <div className="appointment-card">
              {servicesDetails && (
                <div className="d-flex justify-content-between align-item-center">
                  <h5>
                    <i class="fa-solid fa-chevron-left mr-3"></i>Sub Service
                    Detail
                  </h5>
                  <p className="d-flex m-0">
                    <b>
                      Status :{" "}
                      {servicesDetails.status === "ACTIVE"
                        ? "Active"
                        : "Inactive"}
                    </b>
                    <Form>
                      <Form.Check
                        type="switch"
                        id="custom-switch"
                        checked={checked}
                        className="ml-2"
                        onChange={(v) =>
                          changetServiceSubCategoryDetailStatus(v)
                        }
                      />
                    </Form>
                  </p>
                </div>
              )}
              {servicesDetails && (
                <div className="details-sec mt-5 mb-5">
                  <Row>
                    <Col md={2} sm={4} xs={12}>
                      <img
                        src={Dummyimage}
                        alt={Dummyimage}
                        className="dmImg"
                      />
                    </Col>
                    <Col md={10} sm={8} xs={12}>
                      <h3 className="det_head">{servicesDetails.title} </h3>
                      <p className="dt-dsc">{servicesDetails.description} </p>
                    </Col>
                  </Row>
                </div>
              )}
              {servicesDetails && (
                <div className="mt-4 mb-4">
                  <Row>
                    <Col md={6} xs={12}>
                      <h3 className="f18">
                        {verifyObject(
                          servicesDetails,
                          "initialConsultation.title",
                          ""
                        )}
                      </h3>
                      <Table responsive="lg" className="table_s mb-5">
                        <thead>
                          <tr>
                            <th>Duration</th>
                            <th>Price</th>
                          </tr>
                        </thead>
                        <tbody>
                          {servicesDetails.initialConsultation &&
                            servicesDetails.initialConsultation.priceDetails &&
                            isArray(
                              servicesDetails.initialConsultation.priceDetails
                            ) &&
                            servicesDetails.initialConsultation.priceDetails.map(
                              (d) => {
                                return (
                                  <tr key={d._id}>
                                    <td>${d.duration} Min</td>
                                    <td>${floor(d.price, 2)}</td>
                                  </tr>
                                );
                              }
                            )}
                        </tbody>
                      </Table>
                    </Col>
                    <Col md={6} xs={12}>
                      <h3 className="f18">
                        {" "}
                        {verifyObject(
                          servicesDetails,
                          "followUpAppointment.title",
                          ""
                        )}
                      </h3>
                      <Table responsive="lg" className="table_s mb-5">
                        <thead>
                          <tr>
                            <th>Duration</th>
                            <th>Price</th>
                          </tr>
                        </thead>
                        <tbody>
                          {servicesDetails.followUpAppointment &&
                            servicesDetails.followUpAppointment.priceDetails &&
                            isArray(
                              servicesDetails.followUpAppointment.priceDetails
                            ) &&
                            servicesDetails.followUpAppointment.priceDetails.map(
                              (d) => {
                                return (
                                  <tr key={d._id}>
                                    <td>${d.duration} Min</td>
                                    <td>${floor(d.price, 2)}</td>
                                  </tr>
                                );
                              }
                            )}
                        </tbody>
                      </Table>
                    </Col>
                  </Row>
                </div>
              )}
              <div className="mt-4 mb-2">
                <Row>
                  <Col md={12}>
                    <div className="d-flex align-items-center justify-content-between mb-3">
                      <h3 className="f18">Providers</h3>
                      <Button
                        className="btn btn-theme pl-2 pr-2"
                        id="formBtn"
                        onClick={handleShow2}
                      >
                        Add
                      </Button>
                    </div>
                    <Table responsive="lg" className="table_s mb-5">
                      <thead>
                        <tr>
                          <th>Provider Name</th>
                          <th></th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <img
                              src={Dummyimage}
                              alt={Dummyimage}
                              className="table_img"
                            />
                            Terill Lobo
                          </td>
                          <td>
                            <Button
                              onClick={() => setModalShow(true)}
                              className="myBtn_d"
                            >
                              <i class="fa-solid fa-trash"></i>
                            </Button>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <img
                              src={Dummyimage}
                              alt={Dummyimage}
                              className="table_img"
                            />
                            Mitchelle Jackson
                          </td>
                          <td>
                            <Button
                              onClick={() => setModalShow(true)}
                              className="myBtn_d"
                            >
                              <i class="fa-solid fa-trash"></i>
                            </Button>
                          </td>
                        </tr>
                      </tbody>
                    </Table>
                  </Col>
                </Row>
              </div>
              <div className="mt-4 mb-2">
                <Row>
                  <Col md={12}>
                    <div className="d-flex align-items-center justify-content-between mb-3">
                      <h3 className="f18">Forms</h3>
                      <Button className="btn btn-theme pl-2 pr-2" id="formBtn">
                        Add
                      </Button>
                    </div>
                    <Table responsive="lg" className="table_s mb-5">
                      <thead>
                        <tr>
                          <th>Form Name</th>
                          <th></th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Medical History Questionaire</td>
                          <td>
                            <Button
                              onClick={() => setModalShow1(true)}
                              className="myBtn_d"
                            >
                              <i class="fa-solid fa-trash"></i>
                            </Button>
                          </td>
                        </tr>
                        <tr>
                          <td>Certification and concent</td>
                          <td>
                            <Button
                              onClick={() => setModalShow1(true)}
                              className="myBtn_d"
                            >
                              <i class="fa-solid fa-trash"></i>
                            </Button>
                          </td>
                        </tr>
                        <tr>
                          <td>Client Intake Form</td>
                          <td>
                            <Button
                              onClick={() => setModalShow1(true)}
                              className="myBtn_d"
                            >
                              <i class="fa-solid fa-trash"></i>
                            </Button>
                          </td>
                        </tr>
                        <tr>
                          <td>Authorization to Release Medical Information</td>
                          <td>
                            <Button
                              onClick={() => setModalShow1(true)}
                              className="myBtn_d"
                            >
                              <i class="fa-solid fa-trash"></i>
                            </Button>
                          </td>
                        </tr>
                        <tr>
                          <td>Notice of Privacy Practices</td>
                          <td>
                            <Button
                              onClick={() => setModalShow1(true)}
                              className="myBtn_d"
                            >
                              <i class="fa-solid fa-trash"></i>
                            </Button>
                          </td>
                        </tr>
                        <tr>
                          <td>Insurance Policy</td>
                          <td>
                            <Button
                              onClick={() => setModalShow1(true)}
                              className="myBtn_d"
                            >
                              <i class="fa-solid fa-trash"></i>
                            </Button>
                          </td>
                        </tr>
                        <tr>
                          <td>Privacy Policy</td>
                          <td>
                            <Button
                              onClick={() => setModalShow1(true)}
                              className="myBtn_d"
                            >
                              <i class="fa-solid fa-trash"></i>
                            </Button>
                          </td>
                        </tr>
                      </tbody>
                    </Table>
                  </Col>
                </Row>
              </div>
            </div>
          </Col>
        </Row>
      </Container>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
      <MyVerticallyCenteredModal1
        show={modalShow1}
        onHide={() => setModalShow1(false)}
      />

      {show && (
        <AddSubServices
          servicesDetails={servicesDetails}
          categoryTitle={verifyObject(servicesDetails, "title", null)}
          categoryID={verifyObject(servicesDetails, "_id", null)}
          show={show}
          handleClose={handleClose}
          isEdit={true}
          getSubServiceCategoryDetail={getSubServiceCategoryDetail}
        />
      )}

      {show2 && <AddProviders show={show2} handleClose={handleClose2} />}
    </div>
  );
};
export default Subservicedetails;
