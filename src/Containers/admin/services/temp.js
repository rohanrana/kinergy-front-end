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
                <Form.Control value="Athletic Therapy/Physiotherapy" />
              </Form.Group>
              <Form.Group className="mb-4 form-type pos-rel">
                <Form.Label className="floatLabel">
                  Service Description*
                </Form.Label>
                <Form.Control
                  as="textarea"
                  rows={6}
                  value="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua .Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                />
              </Form.Group>
              <h3 className="md_txt">Initial Consultation Details</h3>
              <Form.Group className="mb-4 form-type pos-rel">
                <Form.Label className="floatLabel">Title</Form.Label>
                <Form.Control value="Athletic Therapy/Physiotherapy" />
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
                  <Form.Control value="$50" />
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
                <Form.Control value="Athletic Therapy/Physiotherapy" />
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
                  <Form.Control value="$50" />
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
      <Modal
        className="right"
        show={show2}
        onHide={handleClose2}
        animation={false}
        id="mm"
      >
        <Modal.Header className="border-0 pb-0" closeButton></Modal.Header>
        <Modal.Body>
          <div className="mod_sec">
            <h3 className="md_txt">Add Providers</h3>
            <Form>
              <Form.Group className="mb-4 form-type pos-rel">
                <MultiSelect
                  options={options}
                  value={selected}
                  onChange={setSelected}
                  labelledBy="Providers*"
                />
              </Form.Group>

              <Form.Group className="df" id="fxd">
                <div className="text-center">
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

            <h3 class="f18">Added Providers:</h3>
            <Table responsive="lg" className="table_s mb-5">
              <tbody>
                <tr>
                  <td>Terill Lobo</td>
                  <td>
                    <Button
                      onClick={() => setModalShow(true)}
                      className="myBtn_d"
                    >
                      <i class="fa-solid fa-trash"></i>
                    </Button>
                  </td>
                </tr>
                <tr>
                  <td>Mitchelle Jackson</td>
                  <td>
                    <Button
                      onClick={() => setModalShow(true)}
                      className="myBtn_d"
                    >
                      <i class="fa-solid fa-trash"></i>
                    </Button>
                  </td>
                </tr>
                <tr>
                  <td>Mikey Lawson</td>
                  <td>
                    <Button
                      onClick={() => setModalShow(true)}
                      className="myBtn_d"
                    >
                      <i class="fa-solid fa-trash"></i>
                    </Button>
                  </td>
                </tr>
                <tr>
                  <td>Jennifer Cortell</td>
                  <td>
                    <Button
                      onClick={() => setModalShow(true)}
                      className="myBtn_d"
                    >
                      <i class="fa-solid fa-trash"></i>
                    </Button>
                  </td>
                </tr>
              </tbody>
            </Table>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}
