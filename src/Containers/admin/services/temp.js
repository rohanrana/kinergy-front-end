import React from "react";

export default function temp() {
  return (
    <div>
      {" "}
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
              {isEdit ? "Edit Service" : "Add Service"}
            </h3>
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
              <div
                style={{ flexDirection: "column" }}
                className="d-flex align-itmes-center justify-content-between"
              >
                {state.consultationElemntArray.map((el, i) => {
                  return (
                    <Fragment>
                      <div style={{ display: "flex" }}>
                        <Form.Group className="mb-4 form-type pos-rel">
                          <Form.Label className="floatLabel">
                            Select Duration*
                          </Form.Label>
                          <Form.Select
                            onChange={(e) =>
                              handleConsultationInputChange(e, i)
                            }
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
                            onChange={(e) =>
                              handleConsultationInputChange(e, i)
                            }
                            name="initialConsultationPrice"
                            value={el.initialConsultationPrice}
                            placeholder="Price*"
                          />
                        </Form.Group>

                        {i == 0 && (
                          <Form.Group className="mb-4 form-type pos-rel">
                            <a
                              onClick={addNewConsultationElement}
                              className="addm"
                            >
                              <i className="fa fa-plus"></i>
                            </a>
                          </Form.Group>
                        )}
                        {i != 0 && (
                          <Form.Group className="mb-4 form-type pos-rel">
                            <a
                              onClick={addNewConsultationElement}
                              className="addm"
                            >
                              <i className="fa fa-minus"></i>
                            </a>
                          </Form.Group>
                        )}
                      </div>
                      {state.errors &&
                        state.errors[`initialConsultationPrice${el._id}`] && (
                          <span className="text-danger">
                            {state.errors[`initialConsultationPrice${el._id}`]}
                          </span>
                        )}
                      {state.errors &&
                        state.errors[
                          `initialConsultationDuration${el._id}`
                        ] && (
                          <span className="text-danger">
                            {
                              state.errors[
                                `initialConsultationDuration${el._id}`
                              ]
                            }
                          </span>
                        )}
                    </Fragment>
                  );
                })}
              </div>
              <h3 className="md_txt">Follow-up Appointment Details</h3>
              <div
                style={{ flexDirection: "column" }}
                className="d-flex align-itmes-center justify-content-between"
              >
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
                {state.followUpElemntArray.map((el, i) => {
                  return (
                    <Fragment>
                      <div style={{ display: "flex" }}>
                        <Form.Group className="mb-4 form-type pos-rel">
                          <Form.Label className="floatLabel">
                            Duration
                          </Form.Label>
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
                            className="mb-4 form-type pos-rel"
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
                      </div>
                      {state.errors &&
                        state.errors[
                          `followUpAppointmentDuration${el._id}`
                        ] && (
                          <span className="text-danger">
                            {
                              state.errors[
                                `followUpAppointmentDuration${el._id}`
                              ]
                            }
                          </span>
                        )}
                      {state.errors &&
                        state.errors[`followUpAppointmentPrice${el._id}`] && (
                          <span className="text-danger">
                            {state.errors[`followUpAppointmentPrice${el._id}`]}
                          </span>
                        )}
                    </Fragment>
                  );
                })}
              </div>
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
      {/* Add SubServices Modal */}
      <Modal
        className="right"
        show={show1}
        onHide={handleClose1}
        animation={false}
        id="mm"
      >
        <Modal.Header className="border-0 pb-0" closeButton></Modal.Header>
        <Modal.Body>
          <div className="mod_sec">
            <h3 className="md_txt">Edit Service</h3>
            <Form>
              <Form.Group className="mb-4 form-type pos-rel">
                <Form.Label className="floatLabel">
                  Service Category*
                </Form.Label>
                <Form.Control value="Therapy Services" />
              </Form.Group>
              <Form.Group className="mb-4 form-type pos-rel">
                <Form.Label className="floatLabel">Service Name *</Form.Label>
                <Form.Control value="" placeholder="Service Name*" />
              </Form.Group>
              <Form.Group className="mb-4 form-type pos-rel">
                <Form.Label className="floatLabel">
                  Service Description*
                </Form.Label>
                <Form.Control
                  as="textarea"
                  rows={6}
                  value=""
                  placeholder="Service Description*"
                  Value="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua .Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                />
              </Form.Group>
              <h3 className="md_txt">Initial Consultation Details</h3>
              <Form.Group className="mb-4 form-type pos-rel">
                <Form.Label className="floatLabel">Title</Form.Label>
                <Form.Control
                  placeholder="Title"
                  value="Athletic Therapy/Physiotherapy"
                />
              </Form.Group>
              <div className="d-flex align-itmes-center justify-content-between">
                <Form.Group className="mb-4 form-type pos-rel">
                  <Form.Label className="floatLabel">
                    Select Duration*
                  </Form.Label>
                  <Form.Select>
                    <option>15mins</option>
                    <option selected>30mins</option>
                    <option>45mins</option>
                    <option>60mins</option>
                    <option>120mins</option>
                    <option>Other</option>
                  </Form.Select>
                </Form.Group>
                <Form.Group className="mb-4 form-type pos-rel">
                  <Form.Label className="floatLabel">Price*</Form.Label>
                  <Form.Control placeholder="Price*" value="$50" />
                </Form.Group>
                <Form.Group className="mb-4 form-type pos-rel">
                  <Link to="#/" className="addm">
                    <i className="fa fa-plus"></i>
                  </Link>
                </Form.Group>
              </div>
              <h3 className="md_txt">Follow-up Appointment Details</h3>
              <Form.Group className="mb-4 form-type pos-rel">
                <Form.Label className="floatLabel">Title</Form.Label>
                <Form.Control
                  placeholder="Title"
                  value="Athletic Therapy/Physiotherapy"
                />
              </Form.Group>
              <div className="d-flex align-itmes-center justify-content-between">
                <Form.Group className="mb-4 form-type pos-rel">
                  <Form.Label className="floatLabel">Duration*</Form.Label>
                  <Form.Select>
                    <option selected>15mins</option>
                    <option>30mins</option>
                    <option>45mins</option>
                    <option>60mins</option>
                    <option>120mins</option>
                    <option>Other</option>
                  </Form.Select>
                </Form.Group>
                <Form.Group className="mb-4 form-type pos-rel">
                  <Form.Label className="floatLabel">Price*</Form.Label>
                  <Form.Control placeholder="Price*" value="$50" />
                </Form.Group>
                <Form.Group className="mb-4 form-type pos-rel">
                  <Link to="#/" className="addmr">
                    <i className="fa fa-plus"></i>
                  </Link>
                </Form.Group>
              </div>
              <Form.Group className="mb-4 form-type">
                <UploadPreviewEdit />
              </Form.Group>
              <Form.Group className="df">
                <div className="text-center" id="fxd">
                  <Button
                    className="btn btn-theme-white pl-2 pr-2 mr-3"
                    id="formBtnCnc"
                  >
                    Back
                  </Button>
                  <Button className="btn btn-theme pl-2 pr-2 ml-3" id="formBtn">
                    Save
                  </Button>
                </div>
              </Form.Group>
            </Form>
          </div>
        </Modal.Body>
      </Modal>
      {/* Add Providers Modal */}
   
    </div>
  );
}
