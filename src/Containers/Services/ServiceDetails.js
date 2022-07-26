import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Department1 from "../../images/department1.png";
import InfoIcon from "../../images/Info.png";
import Arrowicon from "../../images/arrow-2.svg";
import Service2 from "../../images/service2.png";

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
      facilitiesActions.onPageChange({
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
            <div className="select-service">
            <BackButton />
            <div className="service-top-about-row">
              <div className="service-top-about-left">
                <img src={Department1} alt={Department1} className="rounded" />
              </div>
              <div className="service-top-about-right">
                <h5>Therapy Services </h5>
                <p>Whether you're a weekend warrior, homemaker, professional athlete or farmer, our Athletic Therapists will help you reach your physical potential. Using manual therapies, modalities, exercise prescription</p>
                <Link to="#/" onClick={handleModal}>Read more <i class="fas fa-arrow-circle-right"></i></Link>
              </div>
            </div>
            <div className="all-services">
            {isLoading && <Loader />}
                {error && <NotFoundLable message={error} />}
                {serviecesData &&
                  serviecesData &&
                  isArray(serviecesData) &&
                  serviecesData.map((d) => {
                    return (
                      <div className="all-block-services-col">
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
                            <img src={Arrowicon} alt={Arrowicon} className="info-icons" />
                          </div>
                        </Link>
                      </span>
                      </div>
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
