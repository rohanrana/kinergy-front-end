import React, { useState } from "react";
import { Container, Row, Col, Button, Modal, Form, Table } from "react-bootstrap";
// import { Link } from "react-router-dom";
// import Sidebar from "../../../PageLayout/SidebarNav/Sidebar";
import AdminLeftMenu from "../AdminLeftMenu";
import Dummyimage from "../../../image/dummy.jpg";
import UploadPreviewEdit from './UploadPreviewEdit';
import { Link } from "react-router-dom";
import { MultiSelect } from 'react-multi-select-component';

const options = [
   { label: "Terill Lobo", value: "Terill Lobo" },
   { label: "Mitchelle Jackson", value: "Mitchelle Jackson" },
   { label: "Mikey Lawson", value: "Mikey Lawson" },
   { label: "Jennifer Cortell", value: "Jennifer Cortell" },
 ];

function MyVerticallyCenteredModal(props) {
   return (
     <Modal
       {...props}
       size="md"
       aria-labelledby="contained-modal-title-vcenter"
       centered
     >
       <Modal.Body className="p-5 text-center">
         <Button className="close-modal-btn" onClick={props.onHide}>
           <i className="fas fa-times"></i>
         </Button>
         <h5 class="f20 mb-3">
         Do you want to remove<b>“Terill Lobo”</b> as a provider for <b> “Athletic Therapy/Physiotherapy”</b> ?
         </h5>
         <Button className="btn btn-theme-white white-3 pl-5 pr-5"  onClick={props.onHide}>No</Button>
         <Button className="btn btn-theme ml-2 pl-5 pr-5">Yes</Button>
       </Modal.Body>
     </Modal>
   );
 }
 function MyVerticallyCenteredModal1(props) {
   return (
     <Modal
       {...props}
       size="md"
       aria-labelledby="contained-modal-title-vcenter"
       centered
     >
       <Modal.Body className="p-5 text-center">
         <Button className="close-modal-btn" onClick={props.onHide}>
           <i className="fas fa-times"></i>
         </Button>
         <h5 className="mb-3">
         Do you want to remove <b>“Medical History Questionnaire”</b> form from <b>“Athletic Therapy/Physiotherapy” ?</b>
         </h5>
         <Button className="btn btn-theme-white white-3 pl-5 pr-5" onClick={props.onHide}>No</Button>
         <Button className="btn btn-theme ml-2 pl-5 pr-5">Yes</Button>
       </Modal.Body>
     </Modal>
   );
 }

const Subservicedetails = () => {
const [checked, setChecked] = useState(false);

const [show, setShow] = useState(false);
const handleClose = () => setShow(false);
const handleShow = () => setShow(true);

// Modal for Add Sub Services
const [show1, setShow1] = useState(false);
const handleClose1 = () => setShow1(false);
// const handleShow1 = () => setShow1(true);

// Add Providers
const [show2, setShow2] = useState(false);
const handleClose2 = () => setShow2(false);
const handleShow2 = () => setShow2(true);

const [modalShow, setModalShow] = useState(false);
const [modalShow1, setModalShow1] = useState(false);

const [selected, setSelected] = useState([]);

   
   
return (
<div className="clients mb-5">
   {/* <Sidebar /> */}
   <Container fluid>
      <Row>
         <Col lg={3} sm={4} xs={12}>
         <AdminLeftMenu />
         </Col>
         <Col lg={9} sm={8} xs={12}>
         <div className="text-right">
            <Button className="btn btn-theme pl-2 pr-2" id="formBtn" onClick={handleShow}>Edit</Button>
         </div>
         <div className="appointment-card">
            <div className="d-flex justify-content-between align-item-center">
               <h5><i class="fa-solid fa-chevron-left mr-3"></i> Service Category</h5>
               <p className="d-flex m-0">
                  <b>Status : {checked ? 'Active' : 'Inactive'}</b>
               <Form>
                  <Form.Check 
                     type="switch"
                     id="custom-switch"
                     className="ml-2"
                     onChange={() =>
                  setChecked(!checked)}
                  />
               </Form>
               </p>
            </div>
            <div className="details-sec mt-5 mb-5">
               <Row>
                  <Col md={2} sm={4} xs={12}>
                  <img src={Dummyimage} alt={Dummyimage} className="dmImg" />
                  </Col>
                  <Col md={10} sm={8} xs={12}>
                  <h3 className="det_head">Therapy Services </h3>
                  <p className="dt-dsc">
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore 
                     magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
                     consequat.
                  </p>
                  </Col>
               </Row>
            </div>
            <div className="mt-4 mb-4">
               <Row>
                  <Col md={6} xs={12}>
                  <h3 className="f18">Initial Consultation</h3>
                  <Table responsive="lg" className="table_s mb-5">
                     <thead>
                        <tr>
                           <th>Duration</th>
                           <th>Price</th>
                        </tr>
                     </thead>
                     <tbody>
                        <tr>
                           <td>45 Min</td>
                           <td>$85.00</td>
                        </tr>
                        <tr>
                           <td>60 Min</td>
                           <td>$120.00</td>
                        </tr>
                     </tbody>
                  </Table>
                  </Col>
                  <Col md={6} xs={12}>
                  <h3 className="f18">Follow-up Appointment</h3>
                  <Table responsive="lg" className="table_s mb-5">
                     <thead>
                        <tr>
                           <th>Duration</th>
                           <th>Price</th>
                        </tr>
                     </thead>
                     <tbody>
                        <tr>
                           <td>45 Min</td>
                           <td>$85.00</td>
                        </tr>
                        <tr>
                           <td>60 Min</td>
                           <td>$120.00</td>
                        </tr>
                     </tbody>
                  </Table>
                  </Col>
               </Row>
            </div>
            <div className="mt-4 mb-2">
               <Row>
                  <Col md={12}>
                  <div className="d-flex align-items-center justify-content-between mb-3">
                     <h3 className="f18">Providers</h3>
                     <Button className="btn btn-theme pl-2 pr-2" id="formBtn" onClick={handleShow2}>Add</Button>
                  </div>
                  <Table responsive="lg" className="table_s mb-5">
                     <thead>
                        <tr>
                           <th>Provider Name</th>
                           <th></th>
                        </tr>
                     </thead>
                     <tbody>
                        <tr>
                           <td><img src={Dummyimage} alt={Dummyimage} className="table_img" />Terill Lobo</td>
                           <td>
                              <Button onClick={() => setModalShow(true)} className="myBtn_d">
                                 <i class="fa-solid fa-trash"></i>
                              </Button>
                           </td>
                        </tr>
                        <tr>
                           <td><img src={Dummyimage} alt={Dummyimage} className="table_img" />Mitchelle Jackson</td>
                           <td>
                              <Button onClick={() => setModalShow(true)} className="myBtn_d">
                                 <i class="fa-solid fa-trash"></i>
                              </Button>
                           </td>
                        </tr>
                     </tbody>
                  </Table>
                  </Col>
               </Row>
            </div>
            <div className="mt-4 mb-2">
               <Row>
                  <Col md={12}>
                  <div className="d-flex align-items-center justify-content-between mb-3">
                     <h3 className="f18">Forms</h3>
                     <Button className="btn btn-theme pl-2 pr-2" id="formBtn">Add</Button>
                  </div>
                  <Table responsive="lg" className="table_s mb-5">
                     <thead>
                        <tr>
                           <th>Form Name</th>
                           <th></th>
                        </tr>
                     </thead>
                     <tbody>
                        <tr>
                           <td>Medical History Questionaire</td>
                           <td>
                              <Button onClick={() => setModalShow1(true)} className="myBtn_d">
                                 <i class="fa-solid fa-trash"></i>
                              </Button>
                           </td>
                        </tr>
                        <tr>
                           <td>Certification and concent</td>
                           <td>
                              <Button onClick={() => setModalShow1(true)} className="myBtn_d">
                                 <i class="fa-solid fa-trash"></i>
                              </Button>
                           </td>
                        </tr>
                        <tr>
                           <td>Client Intake Form</td>
                           <td>
                              <Button onClick={() => setModalShow1(true)} className="myBtn_d">
                                 <i class="fa-solid fa-trash"></i>
                              </Button>
                           </td>
                        </tr>
                        <tr>
                           <td>Authorization to Release Medical Information</td>
                           <td>
                              <Button onClick={() => setModalShow1(true)} className="myBtn_d">
                                 <i class="fa-solid fa-trash"></i>
                              </Button>
                           </td>
                        </tr>
                        <tr>
                           <td>Notice of Privacy Practices</td>
                           <td>
                              <Button onClick={() => setModalShow1(true)} className="myBtn_d">
                                 <i class="fa-solid fa-trash"></i>
                              </Button>
                           </td>
                        </tr>
                        <tr>
                           <td>Insurance Policy</td>
                           <td>
                              <Button onClick={() => setModalShow1(true)} className="myBtn_d">
                                 <i class="fa-solid fa-trash"></i>
                              </Button>
                           </td>
                        </tr>
                        <tr>
                           <td>Privacy Policy</td>
                           <td>
                              <Button onClick={() => setModalShow1(true)} className="myBtn_d">
                                 <i class="fa-solid fa-trash"></i>
                              </Button>
                           </td>
                        </tr>
                     </tbody>
                  </Table>
                  </Col>
               </Row>
            </div>
         </div>
         </Col>
      </Row>
   </Container>
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
                <Form.Label className="floatLabel">Service Category*</Form.Label>
                <Form.Control value="Therapy Services" />
              </Form.Group>
              <Form.Group className="mb-4 form-type pos-rel">
                <Form.Label className="floatLabel">Service Name *</Form.Label>
                <Form.Control value="Athletic Therapy/Physiotherapy"/>
              </Form.Group>
              <Form.Group className="mb-4 form-type pos-rel">
                <Form.Label className="floatLabel">Service Description*</Form.Label>
                <Form.Control as="textarea" rows={6} value="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua .Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
              </Form.Group>
              <h3 className="md_txt">Initial Consultation Details</h3>
              <Form.Group className="mb-4 form-type pos-rel">
                  <Form.Label className="floatLabel">Title</Form.Label>
                  <Form.Control value="Athletic Therapy/Physiotherapy" />
              </Form.Group>
              <div className="d-flex align-itmes-center justify-content-between">
                <Form.Group className="mb-4 form-type pos-rel">
                <Form.Label className="floatLabel">Select Duration*</Form.Label>
                <Form.Select >
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
                  <Link to="#/" className="addm"><i className="fa fa-plus"></i></Link>
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
                <Form.Select >
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
                  <Link to="#/" className="addmr"><i className="fa fa-plus"></i></Link>
                </Form.Group>
              </div>  
              <Form.Group className="mb-4 form-type">
                <UploadPreviewEdit />                
              </Form.Group>
              <Form.Group className="df">
                <div className="text-center" id="fxd">
                  <Button className="btn btn-theme-white pl-2 pr-2 mr-3" id="formBtnCnc">
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
                <Form.Label className="floatLabel">Service Category*</Form.Label>
                <Form.Control value="Therapy Services" />
              </Form.Group>
              <Form.Group className="mb-4 form-type pos-rel">
                <Form.Label className="floatLabel">Service Name *</Form.Label>
                <Form.Control value="" placeholder="Service Name*"/>
              </Form.Group>
              <Form.Group className="mb-4 form-type pos-rel">
                <Form.Label className="floatLabel">Service Description*</Form.Label>
                <Form.Control as="textarea" rows={6} value="" placeholder="Service Description*" Value="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua .Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
              </Form.Group>
              <h3 className="md_txt">Initial Consultation Details</h3>
              <Form.Group className="mb-4 form-type pos-rel">
                  <Form.Label className="floatLabel">Title</Form.Label>
                  <Form.Control placeholder="Title" value="Athletic Therapy/Physiotherapy" />
              </Form.Group>
              <div className="d-flex align-itmes-center justify-content-between">
                <Form.Group className="mb-4 form-type pos-rel">
                <Form.Label className="floatLabel">Select Duration*</Form.Label>
                <Form.Select >
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
                  <Link to="#/" className="addm"><i className="fa fa-plus"></i></Link>
                </Form.Group>
              </div>  
              <h3 className="md_txt">Follow-up Appointment Details</h3>
              <Form.Group className="mb-4 form-type pos-rel">
                  <Form.Label className="floatLabel">Title</Form.Label>
                  <Form.Control placeholder="Title" value="Athletic Therapy/Physiotherapy" />
              </Form.Group>
              <div className="d-flex align-itmes-center justify-content-between">
                <Form.Group className="mb-4 form-type pos-rel">
                <Form.Label className="floatLabel">Duration*</Form.Label>
                <Form.Select >
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
                  <Link to="#/" className="addmr"><i className="fa fa-plus"></i></Link>
                </Form.Group>
              </div>  
              <Form.Group className="mb-4 form-type">
                <UploadPreviewEdit />                
              </Form.Group>
              <Form.Group className="df">
                <div className="text-center" id="fxd">
                  <Button className="btn btn-theme-white pl-2 pr-2 mr-3" id="formBtnCnc">
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
                  <Button className="btn btn-theme-white pl-2 pr-2 mr-3" id="formBtnCnc">
                    Back
                  </Button>
                  <Button className="btn btn-theme pl-2 pr-2 ml-3" id="formBtn">
                    Save
                    </Button>
                  </div>
              </Form.Group>
               </Form> 
            
               <h3 class="f18">Added Providers:</h3>
               <Table  responsive="lg" className="table_s mb-5">
                  <tbody>
                     <tr>
                        <td>Terill Lobo</td>
                        <td>
                           <Button onClick={() => setModalShow(true)} className="myBtn_d">
                              <i class="fa-solid fa-trash"></i>
                           </Button>
                        </td>
                     </tr>
                     <tr>
                        <td>Mitchelle Jackson</td>
                        <td>
                           <Button onClick={() => setModalShow(true)} className="myBtn_d">
                              <i class="fa-solid fa-trash"></i>
                           </Button>
                        </td>
                     </tr>
                     <tr>
                        <td>Mikey Lawson</td>
                        <td>
                           <Button onClick={() => setModalShow(true)} className="myBtn_d">
                              <i class="fa-solid fa-trash"></i>
                           </Button>
                        </td>
                     </tr>
                     <tr>
                        <td>Jennifer Cortell</td>
                        <td>
                           <Button onClick={() => setModalShow(true)} className="myBtn_d">
                              <i class="fa-solid fa-trash"></i>
                           </Button>
                        </td>
                     </tr>
                  </tbody>
               </Table>   
          </div> 
      </Modal.Body>
   </Modal>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
      <MyVerticallyCenteredModal1
        show={modalShow1}
        onHide={() => setModalShow1(false)}
      />
</div>
);
};
export default Subservicedetails;