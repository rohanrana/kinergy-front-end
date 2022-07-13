import React, { Fragment, useEffect, useState } from "react";
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
import AdminLeftMenu from "../AdminLeftMenu";
import Dummyimage from "../../../image/dummy.jpg";
import UploadPreviewEdit from "./UploadPreviewEdit";
import { Link, useParams } from "react-router-dom";
import { actions as servicesByCateIDActions } from "../../../Reducers/servicesByCateID";
import {
  errorToast,
  getErrorObject,
  successToast,
  verifyObject,
} from "../../../utilities/utils";
import TableLoader from "../../../component/common/TableLoader";
import { useDispatch, useSelector } from "react-redux";
import {
  changeServiceCategoryStatus,
  getServiceCategoryByID,
} from "../../../Services/serviceCategories";
import { isArray } from "lodash";
import AddServieCategory from "./AddServieCategory";
import AddSubServices from "./AddSubServices";

const Servicedetails = () => {
  const [checked, setChecked] = useState(false);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // Modal for Add Sub Services
  const [show1, setShow1] = useState(false);

  const handleClose1 = () => setShow1(false);
  const handleShow1 = () => setShow1(true);

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
  const { service_cat_id } = routeParams;
  console.log("routeParams", routeParams);

  useEffect(() => {
    getServiceCategoryDetail();
    getServicesByCategoryID();
  }, []);

  const getServicesByCategoryID = () => {
    dispatch(servicesByCateIDActions.onRequest({ _id: service_cat_id }));
  };

  const getServiceCategoryDetail = async () => {
    try {
      await setLoading(true);
      let response = await getServiceCategoryByID({ _id: service_cat_id });
      setServicesDetails(verifyObject(response, "data.result[0]", null));
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

  const changetServiceCategoryDetailStatus = async (v) => {
    console.log("value", v.target.checked);
    setChecked(v.target.checked);
    let status = v.target.checked ? "ACTIVE" : "INACTIVE";
    console.log("status", status);
    try {
      await setLoading(true);
      let response = await changeServiceCategoryStatus({
        _id: service_cat_id,
        status: v.target.checked ? "ACTIVE" : "INACTIVE",
      });

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

  console.log("servicesDetails", serviecesData.ServiceResult);
  return (
    <div className="clients">
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
            {servicesDetails && (
              <div className="appointment-card">
                <div className="d-flex justify-content-between align-item-center">
                  <h5>
                    <i class="fa-solid fa-chevron-left mr-3"></i> Service
                    Category
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
                        onChange={(v) => changetServiceCategoryDetailStatus(v)}
                      />
                    </Form>
                  </p>
                </div>
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
                      <h3 className="det_head"> {servicesDetails.title} </h3>
                      <p className="dt-dsc">{servicesDetails.description}</p>
                    </Col>
                  </Row>
                </div>
              </div>
            )}
            {servicesDetails && (
              <Fragment>
                {serviecesData &&
                  serviecesData.ServiceResult &&
                  isArray(serviecesData.ServiceResult) &&
                  serviecesData.ServiceResult.length === 0 && (
                    <div className="appointment-card">
                      <h3 className="det_head">Services</h3>
                      <Table responsive="lg" className="table_s mt-5 mb-5">
                        <thead>
                          <tr>
                            <th>Service Name</th>
                            <th>Status</th>
                            <th></th>
                          </tr>
                        </thead>
                      </Table>
                      <div className="text-center">
                        <Button
                          className="btn btn-theme pl-2 pr-2 ml-3 mb-5"
                          id="formBtn"
                          onClick={handleShow1}
                        >
                          + Add Service
                        </Button>
                      </div>
                    </div>
                  )}
                {/* When Services already have listed */}
                {serviecesData &&
                  serviecesData.ServiceResult &&
                  isArray(serviecesData.ServiceResult) &&
                  serviecesData.ServiceResult.length > 0 && (
                    <div className="appointment-card">
                      {
                        <div className="d-flex align-items-center justify-content-bewtween">
                          <h3 className="det_head">Services</h3>
                          <Button
                            className="btn btn-theme pl-2 pr-2"
                            id="formBtn"
                            onClick={handleShow1}
                          >
                            + Add Service
                          </Button>
                        </div>
                      }

                      {
                        <Table responsive="lg" className="table_s mt-5 mb-5">
                          <thead>
                            <tr>
                              <th>Service Name</th>
                              <th>Status</th>
                              <th></th>
                            </tr>
                          </thead>
                          <tbody>
                            {serviecesData &&
                              serviecesData.ServiceResult &&
                              isArray(serviecesData.ServiceResult) &&
                              serviecesData.ServiceResult.map((s) => {
                                return (
                                  <tr key={s._id}>
                                    <td>
                                      <img
                                        src={Dummyimage}
                                        alt={Dummyimage}
                                        className="table_img"
                                      />
                                      {s.title}
                                    </td>
                                    <td>{s.status}</td>
                                    <td>
                                      <Link
                                        to={`/subservice-details/${s._id}`}
                                        className="lnk"
                                      >
                                        View Details
                                      </Link>
                                    </td>
                                  </tr>
                                );
                              })}
                          </tbody>
                        </Table>
                      }
                      <div className="text-center"></div>
                    </div>
                  )}
              </Fragment>
            )}
          </Col>
        </Row>
      </Container>
      {
        <AddServieCategory
          servicesDetails={servicesDetails}
          show={show}
          handleClose={handleClose}
          getServiceCategoryDetail={getServiceCategoryDetail}
        />
      }

      {/* Add SubServices Modal */}

      <AddSubServices
        categoryTitle={verifyObject(servicesDetails, "title", null)}
        categoryID={verifyObject(servicesDetails, "_id", null)}
        show={show1}
        handleClose={handleClose1}
        getServicesByCategoryID={getServicesByCategoryID}
      />
    </div>
  );
};

export default Servicedetails;
