/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import AppointmentDetailsSection from "../../Components/common/AppointmentDetailsSection";
import BackButton from "../../Components/common/BackButton";
import { Container, Row, Col } from "react-bootstrap";
import ProviderDetailModal from "./ProviderDetailModal";
import { actions as providersAction } from "../../Reducers/providers";
import { useDispatch, useSelector } from "react-redux";
import { verifyObject } from "../../utilities/utils";
import Pagination from "../../Components/common/Pagination";
import Loader from "../../Components/Loader/Loader";
import NotFoundLable from "../../Components/common/NotFoundLable";
import { Link } from "react-router-dom";
import { appRoutesConst } from "../../App/navigation";
import { actionTypes } from "../../Reducers/localStore";
const Providers = () => {
  const [modalShow, setModalShow] = React.useState(false);
  const [selectedProvider, setProvider] = React.useState(false);

  const dispatch = useDispatch();
  const localStore = useSelector((state) => state.localStore);
  const providers = useSelector((state) => state.providers);
  const providersData = verifyObject(providers, "data[0].providers", []);
  const selectedService = verifyObject(localStore, "selectedService", null);

  useEffect(() => {
    if (selectedService) {
      dispatch(providersAction.onRequest({ service: selectedService._id }));
    }
  }, []);

  const handleModal = (item) => {
    setModalShow(true);
    setProvider(item);
  };

  const onPageChange = (data) => {
    // const { customerId: patient_id } = this.props.localStore;
    console.log("PAGE CHANGE", data);
    const { page } = data;
    dispatch(
      providersAction.onPageChange({
        page: page,
        service: selectedService._id,
      })
    );
  };

  const handleProviderData = (item) => {
    dispatch({
      type: actionTypes.SET_APPOINTMENT_PROVIDER,
      payload: item,
    });
  };
  return (
    <div className="therapy-services">
      <Container>
        <Row>
          <Col lg={12}>
            <div className="appointment-details-row">
              <AppointmentDetailsSection />
              <div className="appointment-detail-col-2">
                <p>
                  <BackButton />
                </p>
                <h5 className="text-center">Select Your Provider</h5>
                {providers && providers.isLoading && <Loader />}
                {providers &&
                  !providers.isLoading &&
                  providersData &&
                  providersData.length === 0 && (
                    <NotFoundLable message={"No Providers Found"} />
                  )}
                {providersData.map((d) => {
                  return (
                    <div className="provider-row">
                      <div className="provider-row-col1">
                        <span>TL</span>
                      </div>
                      <div className="provider-row-col2">
                        <h6>
                          {d.facilityName} <span>Exp. 5y</span>
                        </h6>
                        <p>{verifyObject(selectedService, "title", null)}</p>
                        <p className="m-0">
                          <a href="#/" onClick={() => handleModal(d)}>
                            View Profile
                          </a>
                        </p>
                      </div>
                      <div className="provider-row-col3">
                        <span onClick={() => handleProviderData(d)}>
                          <Link
                            to={appRoutesConst.bookappointment}
                            className="btn btn-book-now"
                          >
                            Book now
                          </Link>
                        </span>
                      </div>
                    </div>
                  );
                })}
                {!providers && providers.isLoading && (
                  <Pagination
                    data={{ pagination: providers.pagination }}
                    onPageChange={onPageChange}
                  />
                )}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <ProviderDetailModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        selectedProvider={selectedProvider}
        serviceTitle={verifyObject(selectedService, "title", null)}
      />
    </div>
  );
};

export default Providers;
