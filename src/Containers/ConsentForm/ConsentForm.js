/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef, useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { DatePicker } from "react-rainbow-components";
import { useSelector } from "react-redux";
import SignaturePad from "react-signature-canvas";
import { verifyObject } from "../../utilities/utils";
import DatePickerImage from "../../images/Vector.png";
import { ValidateConsentForm } from "./ConsentFormValidations";

export default function ConsentForm() {
  const [state, setState] = useState({
    authPersonName: "",
    clientName: "",
    date: null,
    checkbox1: false,
    checkbox2: false,
    checkbox3: false,
    errors: null,
  });
  const sigCanvas = useRef({});
  //   const localStore = useSelector((state) => state.localStore);

  //   const clientName = `${verifyObject(
  //     localStore,
  //     "clientDetails.firstName",
  //     null
  //   )} ${verifyObject(localStore, "clientDetails.lastName", null)}`;

  //   const providerName = `${verifyObject(
  //     localStore,
  //     "selectedProviders.facilityName",
  //     null
  //   )}`;
  //   const appointmentDate = `${verifyObject(
  //     localStore,
  //     "appointmentBookingDetails.appointmentDate",
  //     null
  //   )}`;

  //   useEffect(() => {
  //     setState({
  //       ...state,
  //       clientName: clientName,
  //       authPersonName: providerName,
  //       //   date: new Date(appointmentDate),
  //     });
  //   }, []);

  const [imageURL, setImageURL] = useState(null);
  const [enable, enableSaveButton] = useState(false);

  const handleChange = async (e) => {
    let errors = null;
    // let name = e.target.name
    // let value = e.target.value
    if (state.errors) {
      errors = Object.assign("", state.errors);
      delete errors[e.target.name];
    }
    await setState({
      ...state,
      [e.target.name]: e.target.value,
      errors: { ...state.errors, [e.target.name]: null },
    });
  };

  const _handleCheckbox = async (e) => {
    let errors = null;
    // let name = e.target.name
    // let value = e.target.value
    if (state.errors) {
      errors = Object.assign("", state.errors);
      delete errors[e.target.name];
    }
    await setState({
      ...state,
      [e.target.name]: e.target.checked,
      errors: { ...state.errors, [e.target.name]: null },
    });
  };

  const _handleSubmit = async (e) => {
    e.preventDefault();
    let data = {
      authPersonName: state.authPersonName,
      clientName: state.clientName,
      date: state.date,
      signImage: imageURL,
      checkbox1: state.checkbox1,
      checkbox2: state.checkbox2,
      checkbox3: state.checkbox3,
    };
    const errors = ValidateConsentForm(data);

    console.log("errors", errors);
    if (!errors.isValid) {
      setState({ ...state, errors: errors.errors });
    } else {
      //   let payload = {
      //     firstName: data.firstName,
      //     lastName: data.lastName,
      //     email: data.email,
      //     phone: data.contact,
      //     dob: data.dob,
      //     gender: verifyObject(state, "gender.name", null),
      //   };
      //   try {
      //     // let phone = JSON.parse(localStorage.getItem("otp-phone"));
      //     await setState({ ...state, loading: true });
      //     let response = await registerNewCustomer(payload);
      //     let user = verifyObject(response, "data.result", null);
      //     console.log("respoinse", response);
      //     console.log("user", user);
      //     if (user) {
      //       dispatch({
      //         type: sessionTypes.LOGIN_SUCCESS,
      //         payload: { token: user.jwtToken, user: user },
      //       });
      //       navigate(`${appRoutesConst.appointmentFor}`);
      //     }
      //     await setState({ ...state, signingUpResponse: response });
      //   } catch (error) {
      //     if (error.data && error.data.errors && isArray(error.data.errors)) {
      //       console.log("errrr", error.data.errors);
      //       setState({
      //         ...state,
      //         loading: false,
      //         serverErrors: error.data.errors,
      //       });
      //     }
      //   }
    }
  };
  const clear = () => {
    // sigCanvas.current.clear();
    setImageURL(null);
    enableSaveButton(false);
  };

  /* a function that uses the canvas ref to trim the canvas 
  from white spaces via a method given by react-signature-canvas
  then saves it in our state */
  const save = async () => {
    setImageURL(sigCanvas.current.getTrimmedCanvas().toDataURL("image/png"));
    await setState({
      ...state,
      errors: { ...state.errors, signImage: null },
    });
  };

  //   const isDisabled =
  //     state.authPersonName === "" ||
  //     state.clientName === "" ||
  //     state.date === null ||
  //     imageURL === null;

  return (
    <div className="therapy-services">
      <Container>
        <Row>
          <Col lg={12}>
            <div className="consent-form-container">
              <div className="appointment-detail-col-2 consent-form">
                <h5>Waiver and Release of Liability</h5>
                <p>
                  Rehabilitation therapy and physical exercise can be strenuous
                  and subject you to serious injury. As such, Kinergy Sports
                  Medicine and Performance (herein referred to as “KINERGY”),
                  and its staff and instructors strongly recommend you obtain a
                  physical examination and clearance from a doctor before using
                  any exercise equipment or participating in any exercise
                  activity.
                </p>
                <p>
                  You agree that by participating in any activity with KINERGY,
                  you do so entirely at your own risk. This includes, without
                  limitation, (a) your use of all amenities and equipment in the
                  facility and at any off-site location (including your private
                  residence), (b) your participation in any activity, class,
                  program, personal and performance training, or instruction,
                  (c) the sudden and unforeseen malfunctioning of any equipment,
                  and (d) our instruction, training, supervision, or dietary
                  recommendations. You agree that you are voluntarily
                  participating in these activities and the use of these
                  facilities and premises, and you assume all inherent risks,
                  including accidents, injury, illness, or even death. You also
                  assume responsibility for any loss or damage of your personal
                  property.
                </p>
                <p>
                  You hereby acknowledge your responsibility in communicating
                  any physical and psychological concerns that might conflict
                  with your participation in any activities at KINERGY. You
                  acknowledge that you are physically fit and mentally capable
                  of performing the physical activities that you choose to
                  participate in.
                </p>
                <p>
                  You expressly agree to release and discharge KINERGY from any
                  and all claims or causes of action, and you agree to hold
                  harmless, waive and release any right that you, or anyone
                  entitled to act on your behalf, may otherwise have to bring a
                  legal action against KINERGY for negligence, any personal
                  injury, property damage or loss action.
                </p>
                <p>
                  If any portion of this waiver and release from liability shall
                  be deemed by a court of competent jurisdiction to be invalid,
                  then the remainder of this waiver and release from liability
                  shall remain in full force and effect, and the offending
                  provision or provisions severed here from.
                </p>
                <p>
                  By signing this release, I acknowledge that I have carefully
                  read this Waiver and Release of Liability. I acknowledge that
                  I understand its content and that this release cannot be
                  modified orally.
                </p>
                <p>
                  <span className="float-left display-flex">
                    <input
                      onChange={_handleCheckbox}
                      value={state.checkbox1}
                      type="checkbox"
                      name="checkbox1"
                    />
                    <span className="checkbox-text">
                      I am an Authorized Representative for the client (ie.
                      Parent, Legal Guardian, Agent, Manager, etc.){" "}
                      {state.errors && state.errors.checkbox1 && (
                        <span className="text-danger">
                          ({state.errors.checkbox1})
                        </span>
                      )}
                    </span>
                  </span>
                </p>

                <p>
                  <span className="float-left display-flex">
                    <input
                      onChange={_handleCheckbox}
                      value={state.checkbox2}
                      type="checkbox"
                      name="checkbox2"
                    />
                    <span className="checkbox-text">
                      I also understand that this Waiver and Release of
                      Liability form will remain valid for one (1) year from the
                      effective date.{" "}
                      {state.errors && state.errors.checkbox2 && (
                        <span className="text-danger">
                          ( {state.errors.checkbox2})
                        </span>
                      )}
                    </span>
                  </span>
                </p>

                <p>
                  <span className="float-left display-flex">
                    <input
                      onChange={_handleCheckbox}
                      value={state.checkbox3}
                      type="checkbox"
                      name="checkbox3"
                    />
                    <span className="checkbox-text">
                      I understand that I will need to sign a new Waiver and
                      Release of Liability form upon the expiration of this
                      form.{" "}
                      {state.errors && state.errors.checkbox3 && (
                        <span className="text-danger">
                          ( {state.errors.checkbox3})
                        </span>
                      )}
                    </span>
                  </span>
                </p>

                <Row>
                  <Col>
                    <Col lg={12} sm={12} xs={12}>
                      <Form.Group className="mb-3">
                        <Form.Label>Authorized Representative Name*</Form.Label>
                        <Form.Control
                          onChange={handleChange}
                          name={"authPersonName"}
                          value={state.authPersonName}
                          placeholder="Enter Representative Name"
                        />
                        {state.errors && (
                          <span className="text-danger">
                            {state.errors.authPersonName}
                          </span>
                        )}
                      </Form.Group>
                    </Col>
                    <Col lg={12} sm={12} xs={12}>
                      <Form.Group className="mb-3">
                        <Form.Label>Client Name*</Form.Label>
                        <Form.Control
                          onChange={handleChange}
                          name={"clientName"}
                          value={state.clientName}
                          placeholder="Enter Client Name"
                        />
                        {state.errors && (
                          <span className="text-danger">
                            {state.errors.clientName}
                          </span>
                        )}
                      </Form.Group>
                    </Col>
                    <Col lg={12} sm={12} xs={12}>
                      <Form.Group className="mb-3">
                        <Form.Label>Date*</Form.Label>
                        <DatePicker
                          formatStyle="medium"
                          placeholder="DD/MM/YYYY"
                          value={state.date}
                          onChange={(value) => {
                            setState({
                              ...state,
                              date: value,
                              errors: {
                                ...state.errors,
                                date: null,
                              },
                            });
                          }}
                          icon={
                            <img src={DatePickerImage} alt={DatePickerImage} />
                          }
                          minDate={new Date()}
                          //   maxDate={new Date("01-01-2010")}
                        />
                        {state.errors && (
                          <span className="text-danger">
                            {state.errors.date}
                          </span>
                        )}
                      </Form.Group>
                    </Col>
                  </Col>
                  <Col>
                    <div className="signature-container">
                      <div className="signature-pad">
                        {imageURL ? (
                          <div className="signatureCanvas">
                            <img src={imageURL} alt={imageURL} />
                          </div>
                        ) : (
                          <SignaturePad
                            onEnd={(e) => {
                              console.log("INNN", e);
                              enableSaveButton(
                                sigCanvas.current
                                  .getTrimmedCanvas()
                                  .toDataURL("image/png")
                              );
                            }}
                            ref={sigCanvas}
                            canvasProps={{
                              width: 400,
                              height: 150,
                              border: `1px solid`,
                              className: `signatureCanvas`,
                            }}
                          />
                        )}
                      </div>

                      {state.errors && (
                        <span className="text-danger">
                          {state.errors.signImage}
                        </span>
                      )}
                      <div className="signature-control">
                        {!imageURL && (
                          <Button
                            disabled={!enable}
                            className="btn btn-form btn-sm w-50"
                            onClick={save}
                          >
                            Save
                          </Button>
                        )}
                        {imageURL && (
                          <Button
                            style={{ marginLeft: 10 }}
                            className="btn btn-form btn-sm w-50"
                            onClick={clear}
                          >
                            Clear
                          </Button>
                        )}
                      </div>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col Col lg={12} sm={12} xs={12}>
                    <div className="text-center mt-3">
                      <Button
                        // disabled={isDisabled}
                        className="btn btn-form btn-sm w-100"
                        onClick={_handleSubmit}
                      >
                        <span>
                          Proceed <i class="far fa-arrow-alt-circle-right"></i>
                        </span>
                      </Button>
                    </div>
                  </Col>
                </Row>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
