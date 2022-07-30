import React, { Fragment, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { ValidateAddServiceCategory } from "./ValidateAddServicesForm";
import { Button, Modal, Form } from "react-bootstrap";
import { addService, editService } from "../../../Services/serviceCategories";
import {
  errorToast,
  getErrorObject,
  successToast,
  verifyObject,
} from "../../../utilities/utils";
import UploadPreviewAdd from "./UploadPreviewAdd";
import { isArray, uniqueId } from "lodash";
import { baseURL } from "../../../Services";

export default function AddSubServices({
  show,
  handleClose,
  categoryTitle,
  categoryID,
  getServicesByCategoryID,
  servicesDetails,
  isEdit,
  getSubServiceCategoryDetail,
}) {
  let intialState = {
    title: "",
    description: "",
    email: "",
    addBy: "",
    image: null,
    haveSubService: "",
    insuranceApplicable: "",
    serviceType: "",
    status: "",
    service_name: "",
    phones: [],
    initialConsultationTitle: "",
    followUpAppointmentTitle: "",
    consultationElemntArray: [
      {
        _id: uniqueId("consultation_"),
        initialConsultationPrice: "",
        initialConsultationDuration: "",
        error: null,
      },
    ],
    followUpElemntArray: [
      {
        _id: uniqueId("followup_"),
        followUpAppointmentPrice: "",
        followUpAppointmentDuration: "",
        error: null,
      },
    ],
  };
  if (isEdit) {
    intialState = {
      title: "",
      description: "",
      email: "",
      addBy: "",
      image: null,
      haveSubService: "",
      insuranceApplicable: "",
      serviceType: "",
      status: "",
      service_name: "",
      phones: [],
      initialConsultationTitle: "",
      followUpAppointmentTitle: "",
      consultationElemntArray: [],
      followUpElemntArray: [],
    };
  }
  const [state, setState] = useState(intialState);
  const [imageUrl, setImageState] = useState(null);
  const localStore = useSelector((state) => state.localStore);

  useEffect(() => {
    console.log("servicesDetails", servicesDetails);
    // let initialConsultation = [];
    if (servicesDetails) {
      setImageState(servicesDetails.imageUrl);
      setState((prevState) => {
        return {
          ...prevState,
          edit_id: servicesDetails._id,
          service_name: servicesDetails.title,
          description: servicesDetails.description,
          image: servicesDetails.imageUrl,
        };
      });

      if (
        servicesDetails &&
        servicesDetails.followUpAppointment &&
        servicesDetails.followUpAppointment.priceDetails &&
        isArray(servicesDetails.followUpAppointment.priceDetails)
      ) {
        console.log(
          "servicesDetails.followUpAppointment.priceDetails",
          servicesDetails.followUpAppointment.priceDetails
        );
        if (servicesDetails.followUpAppointment.priceDetails.length == 0) {
          setState((prevState) => {
            return {
              ...prevState,
              followUpElemntArray: [
                {
                  _id: uniqueId("followup_"),
                  followUpAppointmentPrice: null,
                  followUpAppointmentDuration: null,
                },
              ],
            };
          });
        }

        servicesDetails.followUpAppointment.priceDetails.map((k) => {
          setState((prevState) => {
            return {
              ...prevState,
              followUpAppointmentTitle:
                servicesDetails.followUpAppointment.title,
              followUpElemntArray: [
                ...prevState.followUpElemntArray,
                {
                  _id: k._id,
                  followUpAppointmentPrice: k.price,
                  followUpAppointmentDuration: k.duration,
                },
              ],
            };
          });
          return null;
        });
      }
    }
    if (
      servicesDetails &&
      servicesDetails.initialConsultation &&
      servicesDetails.initialConsultation.priceDetails &&
      isArray(servicesDetails.initialConsultation.priceDetails)
    ) {
      console.log(
        "servicesDetails.initialConsultation.priceDetails",
        servicesDetails.initialConsultation.priceDetails
      );
      if (servicesDetails.initialConsultation.priceDetails.length === 0) {
        setState((prevState) => {
          return {
            ...prevState,
            consultationElemntArray: [
              {
                _id: uniqueId("consultation_"),
                initialConsultationPrice: null,
                initialConsultationDuration: null,
              },
            ],
          };
        });
      }
      servicesDetails.initialConsultation.priceDetails.map((k) => {
        console.log("k", k);
        setState((prevState) => {
          return {
            ...prevState,
            initialConsultationTitle: servicesDetails.initialConsultation.title,
            consultationElemntArray: [
              ...prevState.consultationElemntArray,
              {
                _id: k._id,
                initialConsultationPrice: k.price,
                initialConsultationDuration: k.duration,
              },
            ],
          };
        });
        return null;
      });
    }
  }, [servicesDetails]);

  const handleConsultationInputChange = (e, index) => {
    let { consultationElemntArray } = state;
    const { name, value } = e.target;
    const list = [...consultationElemntArray];

    list[index][name] = value;
    setState({ ...state, consultationElemntArray: list });
  };

  const handlefollowUpInputChange = (e, index) => {
    let { followUpElemntArray } = state;
    const { name, value } = e.target;
    const list = [...followUpElemntArray];

    list[index][name] = value;
    setState({ ...state, followUpElemntArray: list });
  };

  const addNewConsultationElement = () => {
    setState({
      ...state,
      consultationElemntArray: [
        ...state.consultationElemntArray,
        {
          _id: uniqueId("consultation_"),
          initialConsultationTitle: "",
          initialConsultationPrice: "",
          initialConsultationDuration: "",
          error: null,
        },
      ],
    });
  };

  const removeConsultationElement = (_id) => {
    setState({
      ...state,
      consultationElemntArray: state.consultationElemntArray.filter(
        (d) => d._id !== _id
      ),
    });
  };
  const addNewFollowUpElement = () => {
    setState({
      ...state,
      followUpElemntArray: [
        ...state.followUpElemntArray,
        {
          _id: uniqueId("followup_"),
          followUpAppointmentTitle: "",
          followUpAppointmentPrice: "",
          followUpAppointmentDurationhwqo: "",
          error: null,
        },
      ],
    });
  };

  const removeFollowUpElement = (_id) => {
    setState({
      ...state,
      followUpElemntArray: state.followUpElemntArray.filter(
        (d) => d._id !== _id
      ),
    });
  };

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
      errors: {
        [e.target.name]: null,
      },
    });
  };

  const handleFile = (file) => {
    console.log("eeee", file);
    setState({
      ...state,
      image: file,
      errors: {
        image: null,
      },
    });
  };

  const validateAndSubmit = async (e) => {
    e.preventDefault();
    let data = {
      service_name: state.service_name,
      description: state.description,
      addBy: verifyObject(localStore, "user._id", null),
      consultationElemntArray: state.consultationElemntArray,
      initialConsultationTitle: state.initialConsultationTitle,
      followUpElemntArray: state.followUpElemntArray,
      followUpAppointmentTitle: state.followUpAppointmentTitle,
      image: state.image,
    };
    const errors = ValidateAddServiceCategory(data);

    if (!errors.isValid) {
      setState({ ...state, errors: errors.errors, submitting: false });
    } else {
      try {
        await setState({ ...state, loadingSubmit: true, errors: null });
        let formData = new FormData();
        if (isEdit) {
          formData.append("category", servicesDetails.category);
        } else {
          formData.append("category", categoryID);
        }

        formData.append("title", data.service_name);
        formData.append("addBy", data.addBy);
        formData.append("description", data.description);
        formData.append("serviceType", "service");
        formData.append(
          `initialConsultationTitle`,
          data.initialConsultationTitle
        );
        data.consultationElemntArray.map((d, i) => {
          formData.append(
            `initialConsultationPrice[${i}]`,
            d.initialConsultationPrice
          );
          formData.append(
            `initialConsultationDuration[${i}]`,
            d.initialConsultationDuration
          );
        });
        formData.append(
          `followUpAppointmentTitle`,
          data.followUpAppointmentTitle
        );
        data.followUpElemntArray.map((d, i) => {
          formData.append(
            `followUpAppointmentPrice[${i}]`,
            d.followUpAppointmentPrice
          );
          formData.append(
            `followUpAppointmentDuration[${i}]`,
            d.followUpAppointmentDuration
          );
        });

        formData.append("image", data.image);
        formData.append("token", verifyObject(localStore, "token", null));
        if (state.edit_id) {
          formData.append("_id", state.edit_id);
        }

        let response = null;
        if (state.edit_id) {
          response = await editService(formData);
        } else {
          response = await addService(formData);
        }
        console.log("respinse", response);
        if (response.data.response_message) {
          successToast({ content: response.data.response_message });
          await setState({ ...state, loadingSubmit: false });
          setState(intialState);
          if (isEdit) {
            getSubServiceCategoryDetail();
          } else {
            getServicesByCategoryID();
          }

          handleClose();
        }
      } catch (error) {
        const { message } = getErrorObject(error);
        errorToast({ content: message });
        setState({ ...state, loadingSubmit: false });
      }
    }
  };
  let {
    service_name,
    description,
    initialConsultationTitle,
    followUpAppointmentTitle,
  } = state;
  return (
    <Fragment>
      <Modal
        className="right"
        show={show}
        onHide={handleClose}
        animation={false}
        id="mm"
      >
        <Modal.Header className="border-0 pb-0" closeButton></Modal.Header>
        <Modal.Body>
          <div className="mod_sec">
            <h3 className="md_txt">{isEdit ? `Edit` : `Add`} Service</h3>
            <Form>
              <Form.Group className="mb-4 form-type pos-rel">
                <Form.Label className="floatLabel">
                  Service Category*
                </Form.Label>
                <Form.Control disabled value={categoryTitle} />
              </Form.Group>
              <Form.Group className="mb-4 form-type pos-rel">
                <Form.Label className="floatLabel"> Service Name</Form.Label>
                <Form.Control
                  name="service_name"
                  value={service_name}
                  onChange={handleChange}
                  placeholder="Service Name*"
                />
                {state.errors && (
                  <span className="text-danger">
                    {state.errors.service_name}
                  </span>
                )}
              </Form.Group>
              <Form.Group className="mb-4 form-type pos-rel">
                <Form.Label className="floatLabel">
                  Service Description*
                </Form.Label>
                <Form.Control
                  as="textarea"
                  rows={6}
                  name="description"
                  value={description}
                  onChange={handleChange}
                  placeholder="Service Description*"
                />
                {state.errors && (
                  <span className="text-danger">
                    {state.errors.description}
                  </span>
                )}
              </Form.Group>
              <h3 className="md_txt">Initial Consultation Details</h3>
              <Form.Group className="mb-4 form-type pos-rel">
                <Form.Label className="floatLabel">Title</Form.Label>
                <Form.Control
                  onChange={(e) => handleChange(e)}
                  name="initialConsultationTitle"
                  value={initialConsultationTitle}
                  placeholder="Title"
                />
                {state.errors && (
                  <span className="text-danger">
                    {state.errors.initialConsultationTitle}
                  </span>
                )}
              </Form.Group>
              {/* <div> */}
              {state.consultationElemntArray.map((el, i) => {
                return (
                  <div className="d-flex align-itmes-center justify-content-between">
                    {/* <div> */}
                    <Form.Group className="mb-4 form-type pos-rel">
                      <Form.Label className="floatLabel">
                        Select Duration*
                      </Form.Label>
                      <Form.Select
                        onChange={(e) => handleConsultationInputChange(e, i)}
                        name="initialConsultationDuration"
                        value={el.initialConsultationDuration}
                      >
                        <option disabled value={""} selected>
                          Select Duration*
                        </option>
                        <option value={15}>15mins</option>
                        <option value={30}>30mins</option>
                        <option value={45}>45mins</option>
                        <option value={60}>60mins</option>
                        <option value={120}>120mins</option>
                        <option value={"other"}>Other</option>
                      </Form.Select>
                    </Form.Group>
                    <Form.Group className="mb-4 form-type pos-rel">
                      <Form.Label className="floatLabel">Price*</Form.Label>
                      <Form.Control
                        onChange={(e) => handleConsultationInputChange(e, i)}
                        name="initialConsultationPrice"
                        value={el.initialConsultationPrice}
                        placeholder="Price*"
                      />
                    </Form.Group>
                    {i == 0 && (
                      <Form.Group className="mb-4 form-type pos-rel mt-15">
                        <a onClick={addNewConsultationElement} className="addm">
                          <i className="fa fa-plus"></i>
                        </a>
                      </Form.Group>
                    )}
                    {i != 0 && (
                      <Form.Group className="mb-4 form-type pos-rel mt-15">
                        <a
                          onClick={() => removeConsultationElement(el._id)}
                          className="addm"
                        >
                          <i className="fa fa-minus"></i>
                        </a>
                      </Form.Group>
                    )}
                    {/* </div> */}

                    {/* </div> */}
                    {state.errors &&
                      state.errors[`initialConsultationPrice${el._id}`] && (
                        <span className="text-danger">
                          {state.errors[`initialConsultationPrice${el._id}`]}
                        </span>
                      )}
                    {state.errors &&
                      state.errors[`initialConsultationDuration${el._id}`] && (
                        <span className="text-danger">
                          {state.errors[`initialConsultationDuration${el._id}`]}
                        </span>
                      )}
                  </div>
                );
              })}
              {/* </div> */}
              <h3 className="md_txt">Follow-up Appointment Details</h3>
              <Form.Group className="mb-4 form-type pos-rel">
                <Form.Label className="floatLabel">Title</Form.Label>
                <Form.Control
                  onChange={(e) => handleChange(e)}
                  name="followUpAppointmentTitle"
                  value={followUpAppointmentTitle}
                  placeholder="Title"
                />
                {state.errors && (
                  <span className="text-danger">
                    {state.errors.followUpAppointmentTitle}
                  </span>
                )}
              </Form.Group>
              {/* <div> */}
              {state.followUpElemntArray.map((el, i) => {
                return (
                  <div className="d-flex align-itmes-center justify-content-between">
                    <Form.Group className="mb-4 form-type pos-rel">
                      <Form.Label className="floatLabel">Duration</Form.Label>
                      <Form.Select
                        onChange={(e) => handlefollowUpInputChange(e, i)}
                        name="followUpAppointmentDuration"
                        value={el.followUpAppointmentDuration}
                      >
                        <option disabled value={""} selected>
                          Select Duration*
                        </option>
                        <option value={15}>15mins</option>
                        <option value={30}>30mins</option>
                        <option value={45}>45mins</option>
                        <option value={60}>60mins</option>
                        <option value={120}>120mins</option>
                        <option value={"other"}>Other</option>
                      </Form.Select>
                    </Form.Group>
                    <Form.Group className="mb-4 form-type pos-rel">
                      <Form.Label className="floatLabel">Price*</Form.Label>
                      <Form.Control
                        onChange={(e) => handlefollowUpInputChange(e, i)}
                        name="followUpAppointmentPrice"
                        value={el.followUpAppointmentPrice}
                        placeholder="Price*"
                      />
                    </Form.Group>
                    {i === 0 && (
                      <Form.Group
                        style={{ display: i === 4 ? "none" : "block" }}
                        className="mb-4 form-type pos-rel  mt-15"
                      >
                        <a
                          onClick={addNewFollowUpElement}
                          to="/"
                          className="addm"
                        >
                          <i className="fa fa-plus"></i>
                        </a>
                      </Form.Group>
                    )}
                    {i != 0 && (
                      <Form.Group className="mb-4 form-type pos-rel mt-15">
                        <a
                          onClick={() => removeFollowUpElement(el._id)}
                          className="addm"
                        >
                          <i className="fa fa-minus"></i>
                        </a>
                      </Form.Group>
                    )}

                    {state.errors &&
                      state.errors[`followUpAppointmentDuration${el._id}`] && (
                        <span className="text-danger">
                          {state.errors[`followUpAppointmentDuration${el._id}`]}
                        </span>
                      )}
                    {state.errors &&
                      state.errors[`followUpAppointmentPrice${el._id}`] && (
                        <span className="text-danger">
                          {state.errors[`followUpAppointmentPrice${el._id}`]}
                        </span>
                      )}
                  </div>
                );
              })}
              {/* </div> */}
              <Form.Group className="mb-4 form-type">
                {servicesDetails && (
                  <UploadPreviewAdd
                    showFile={`${baseURL}/${servicesDetails.imageUrl}`}
                    handleFile={handleFile}
                  />
                )}
                {state.errors && (
                  <span className="text-danger">{state.errors.image}</span>
                )}
              </Form.Group>
              <Form.Group className="df">
                <div className="text-center" id="fxd">
                  <Button
                    className="btn btn-theme-white pl-2 pr-2 mr-3"
                    id="formBtnCnc"
                    onClick={handleClose}
                  >
                    Back
                  </Button>
                  <Button
                    onClick={validateAndSubmit}
                    id="formBtn"
                    disabled={state.loadingSubmit}
                    loading={state.loadingSubmit}
                    className="btn btn-theme pl-2 pr-2 ml-3"
                  >
                    {state.loadingSubmit ? "Saving..." : "Save"}
                  </Button>
                </div>
              </Form.Group>
            </Form>
          </div>
        </Modal.Body>
      </Modal>
    </Fragment>
  );
}
