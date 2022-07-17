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
const ServiceDetails = () => {
  const servicesByCateID = useSelector((state) => state.servicesByCateID);
//   const [servicesDetails, setServicesDetails] = useState(null);
  const serviecesData = verifyObject(servicesByCateID, "data", []);
  const isLoading = verifyObject(servicesByCateID, "isLoading", []);
  const pagination = verifyObject(servicesByCateID, "pagination", []);
  const routeParams = useParams();
  const dispatch = useDispatch();
  const { _id, category_name } = routeParams;
  console.log("routeParams", routeParams);

  useEffect(() => {
    // getServiceCategoryDetail();
    getServicesByCategoryID();
  }, []);

  const getServicesByCategoryID = () => {
    dispatch(servicesByCateIDActions.onRequest({ _id: _id }));
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
  const onPageChange = (data) => {
    // const { customerId: patient_id } = this.props.localStore;
    console.log("PAGE CHANGE", data);
    const { page } = data;
    dispatch(
      facilitiesActions.onPageChange({
        page: page,
        _id: _id,
      })
    );
  };
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
                  <img src={InfoIcon} alt={InfoIcon} className="info-icons" />
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
                {serviecesData &&
                  serviecesData.ServiceResult &&
                  isArray(serviecesData.ServiceResult) &&
                  serviecesData.ServiceResult.length === 0 && (
                    <NotFoundLable
                      message={"No services found in this category"}
                    />
                  )}
                {serviecesData &&
                  serviecesData.ServiceResult &&
                  isArray(serviecesData.ServiceResult) &&
                  serviecesData.ServiceResult.map((d) => {
                    return (
                      <a href="/lets-started">
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
                      </a>
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
    </div>
  );
};

export default ServiceDetails;
