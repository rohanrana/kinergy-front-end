import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ValidateAddServiceCategory } from "./ValidateAddServicesForm";
import { Container, Row, Col, Button, Modal, Form } from "react-bootstrap";
import {
  addServiceCategory,
  editServiceCategory,
} from "../../../Services/serviceCategories";
import { actions as serviceCategoryActions } from "../../../Reducers/serviceCategories";
import {
  errorToast,
  getErrorObject,
  successToast,
  verifyObject,
} from "../../../utilities/utils";
import UploadPreviewAdd from "./UploadPreviewAdd";
export default function AddServieCategory({
  show,
  handleClose,
  servicesDetails,
  getServiceCategoryDetail,
}) {
  let intialState = {
    title: "",
    description: "",
    addBy: "",
    phone: "",
    image: null,
    errors: null,
    loadingSubmit: false,
    edit_id: null,
    servicesDetails: servicesDetails,
  };

  //   const [show, setShow] = useState(true);

  //   const handleClose = () => setShow(false);

  const localStore = useSelector((state) => state.localStore);

  const [state, setState] = useState(intialState);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("servicesDetails", servicesDetails);
    if (servicesDetails) {
      setState({
        ...state,
        edit_id: servicesDetails._id,
        title: servicesDetails.title,
        description: servicesDetails.description,
        image: servicesDetails.image,
      });
    }
  }, [servicesDetails]);
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
      title: state.title,
      description: state.description,
      addBy: verifyObject(localStore, "user._id", null),
      image: state.image,
    };
    const errors = ValidateAddServiceCategory(data);

    if (!errors.isValid) {
      setState({ ...state, errors: errors.errors, submitting: false });
    } else {
      try {
        await setState({ ...state, loadingSubmit: true });
        let formData = new FormData();
        formData.append("title", data.title);
        formData.append("description", data.description);
        formData.append("addBy", data.addBy);
        formData.append("image", data.image);
        formData.append("token", verifyObject(localStore, "token", null));
        if (state.edit_id) {
          formData.append("_id", state.edit_id);
        }
        console.log("data.image", data.image);
        let response = null;
        if (state.edit_id) {
          response = await editServiceCategory(formData);
        } else {
          response = await addServiceCategory(formData);
        }

        console.log("respinse", response);
        if (response.data.response_message) {
          successToast({ content: response.data.response_message });
          await setState({ ...state, loadingSubmit: false });
          setState(intialState);
          if (servicesDetails) {
            getServiceCategoryDetail();
          } else {
            dispatch(serviceCategoryActions.onRequest({}));
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

  let { title, description } = state;
  return (
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
          <h3 className="md_txt">
            {servicesDetails ? "Edit" : "Add New"} Service Category
          </h3>
          <Form>
            <Form.Group className="mb-4 form-type">
              <Form.Control
                name="title"
                value={title}
                onChange={handleChange}
                placeholder="Service Category*"
              />
              {state.errors && (
                <span className="text-danger">{state.errors.title}</span>
              )}
            </Form.Group>
            <Form.Group className="mb-4 form-type">
              <Form.Control
                as="textarea"
                rows={6}
                name="description"
                value={description}
                onChange={handleChange}
                placeholder="Service Category Description*"
              />
              {state.errors && (
                <span className="text-danger">{state.errors.description}</span>
              )}
            </Form.Group>
            <Form.Group className="mb-4 form-type">
              <UploadPreviewAdd handleFile={handleFile} />
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
                  className="btn btn-theme pl-2 pr-2 ml-3"
                  id="formBtn"
                  disabled={state.loadingSubmit}
                  loading={state.loadingSubmit}
                >
                  {state.loadingSubmit ? "Saving..." : "Save"}
                </Button>
              </div>
            </Form.Group>
          </Form>
        </div>
      </Modal.Body>
    </Modal>
  );
}
