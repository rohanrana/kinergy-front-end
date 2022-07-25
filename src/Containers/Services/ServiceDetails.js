import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Service1 from "../../images/service1.jpg";
import InfoIcon from "../../images/Info.png";

import Service2 from "../../images/service2.png";
import Service3 from "../../images/service3.png";
import Service4 from "../../images/service4.png";
import Service5 from "../../images/service5.png";
import Service6 from "../../images/service6.png";
import { Link } from "react-router-dom";
import { actions as servicesByCateIDActions } from "../../Reducers/servicesByCateID";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { isArray } from "lodash";
import Pagination from "../../Components/common/Pagination";
import Loader from "../../Components/Loader/Loader";
import BackButton from "../../Components/common/BackButton";
import NotFoundLable from "../../Components/common/NotFoundLable";
import { verifyObject } from "../../utilities/utils";
import { ServiceCategoryDetailModal } from "./ServiceCategoryDetailModal";
import { appRoutesConst } from "../../App/navigation";
import { actionTypes } from "../../Reducers/localStore";
const ServiceDetails = () => {
  const [modalShow, setModalShow] = React.useState(false);
  const servicesByCateID = useSelector((state) => state.servicesByCateID);
  const localStore = useSelector((state) => state.localStore);
  let serviceCategory = verifyObject(localStore, "serviceCategory", null);

  //   const [servicesDetails, setServicesDetails] = useState(null);
  const serviecesData = verifyObject(servicesByCateID, "data", []);
  const isLoading = verifyObject(servicesByCateID, "isLoading", []);
  const pagination = verifyObject(servicesByCateID, "pagination", []);
  const error = verifyObject(servicesByCateID, "error", []);

  const routeParams = useParams();
  const dispatch = useDispatch();
  const { _id, category_name } = routeParams;
  console.log("routeParams", servicesByCateID);

  useEffect(() => {
    // getServiceCategoryDetail();
    getServicesByCategoryID();
    setServiceDetail(null);
  }, []);

  const getServicesByCategoryID = () => {
    dispatch(servicesByCateIDActions.onRequest({ category: _id }));
  };

  const getServiceCategoryDetail = async () => {
    try {
      await setLoading(true);
      let response = await getServiceCategoryByID({ _id: service_cat_id });
      setServicesDetails(verifyObject(response, "data.result", null));
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
  const onPageChange = (data) => {
    // const { customerId: patient_id } = this.props.localStore;
    console.log("PAGE CHANGE", data);
    const { page } = data;
    dispatch(
      servicesByCateIDActions.onPageChange({
        page: page,
        category: _id,
      })
    );
  };
  const handleModal = () => {
    setModalShow(true);
  };
  const setServiceDetail = (service) => {
    dispatch({
      type: actionTypes.SET_SERVICE,
      payload: service,
    });
  };

  console.log("service", serviecesData);
  return (
    <div className="therapy-services">
      <Container>
        <Row>
          <Col lg={12}>
            <div className="appointment-details-row">
              <div className="appointment-detail-col-1">
                <h5>Appointment Details</h5>
                <div className="appointment-service-row">
                  <div className="appointment-service-col-1">
                    <img src={Service1} alt={Service1} />
                  </div>
                  <div className="appointment-service-col-2">
                    <p>{category_name}</p>
                  </div>
                  <img
                    onClick={handleModal}
                    src={InfoIcon}
                    alt={InfoIcon}
                    className="info-icons"
                  />
                </div>
              </div>
              <div className="appointment-detail-col-2">
                <BackButton />
                <h5 className="text-center">Select a service</h5>
                <p className="text-center">
                  Please select any service from the below list to proceed
                  further
                </p>
                {isLoading && <Loader />}
                {error && <NotFoundLable message={error} />}
                {serviecesData &&
                  serviecesData &&
                  isArray(serviecesData) &&
                  serviecesData.map((d) => {
                    return (
                      <span
                        onClick={() => {
                          // console.log("dddd", d);
                          setServiceDetail(d);
                        }}
                      >
                        <Link to={appRoutesConst.appointmentTypes}>
                          <div className="appointment-service-row">
                            <div className="appointment-service-col-1">
                              <img src={Service2} alt={Service2} />
                            </div>
                            <div className="appointment-service-col-2">
                              <p> {d.title}</p>
                            </div>
                            <img
                              src={InfoIcon}
                              alt={InfoIcon}
                              className="info-icons"
                            />
                          </div>
                        </Link>
                      </span>
                    );
                  })}
                {!isLoading && (
                  <Pagination
                    data={{ pagination: pagination }}
                    onPageChange={onPageChange}
                  />
                )}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <ServiceCategoryDetailModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        serviceCategory={serviceCategory}
      />
    </div>
  );
};

export default ServiceDetails;
