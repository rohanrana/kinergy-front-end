import React, { useEffect } from "react";
import { Container, Row, Col, Form, Button, Modal } from "react-bootstrap";
import Service1 from "../../images/service1.jpg";
import ArrowRight from "../../images/arrow-right-circle.png";
import Clock from "../../images/clock.png";
import { OTPModal } from "./OTPModal";
import { Link, useNavigate } from "react-router-dom";
import { appRoutesConst } from "../../App/navigation";
import BackButton from "../../Components/common/BackButton";
import { useSelector } from "react-redux";
import { errorToast, verifyObject } from "../../utilities/utils";

export default function SignInWithEmail() {
  const [modalShow, setModalShow] = React.useState(false);
  const localStore = useSelector((state) => state.localStore);
  const serviceCategory = verifyObject(localStore, "serviceCategory", null);
  const selectedService = verifyObject(localStore, "selectedService", null);
  let token = verifyObject(localStore, "token", null);

  const navigateTo = useNavigate();

  useEffect(() => {
    if (!serviceCategory && !token) {
      navigateTo(appRoutesConst.index);
      errorToast({
        content: "You are not allowed to access this pages",
      });
    }
  }, []);

  return (
    <div className="therapy-services">
      <Container>
        <Row>
          <Col lg={12}>
            <div className="appointment-details-row">
              <div className="appointment-detail-col-1">
                <h5>
                  Appointment Details{" "}
                  <span className="appointmrnt-time">
                    <img src={Clock} alt={Clock} /> 30 min
                  </span>
                </h5>
                <div className="appointment-service-row appointment-service-row22">
                  <div className="appointment-service-col-1">
                    <img src={Service1} alt={Service1} />
                  </div>
                  <div className="appointment-service-col-22 pl-2">
                    <p>{serviceCategory.title}</p>
                    <h6>{selectedService.title}</h6>
                    <p>{selectedService.description}</p>
                  </div>
                </div>
              </div>
              <div className="appointment-detail-col-2">
                <p>
                  <BackButton />
                </p>
                <h5 className="text-center">Your Email Address</h5>

                <Form className="mt-5">
                  <Form.Group>
                    <Form.Label>Enter Your Email Address</Form.Label>
                    <Form.Control placeholder="xyz@company.com" />
                    <p className="text-right mt-2 mb-0 link-color-form">
                      <a href="lets-started"></a>
                      <Link to={appRoutesConst.loginwithphone}>
                        Enter using Cell Phone Number?
                      </Link>
                    </p>
                  </Form.Group>

                  <Button
                    className="btn btn-form w-100 mt-5"
                    onClick={() => setModalShow(true)}
                  >
                    Next <i class="far fa-arrow-alt-circle-right"></i>
                  </Button>
                </Form>
              </div>
            </div>
          </Col>
        </Row>
      </Container>

      <OTPModal show={modalShow} onHide={() => setModalShow(false)} />
    </div>
  );
}
