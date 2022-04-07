import React, {useEffect,useState} from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Sidebar from "../sidenav/Sidebar";
import ClientLeftMenu from "./ClientLeftMenu";
import { connect } from "react-redux";
import { withRouter, Redirect } from "react-router-dom";
import { getUserProfile,clearGetUserProfile } from "../../store/userProfile/actions";
import Loader from "../../cmmon_module/Loader";

const EditDetails = (props) => {
const [profile,setProfile]=useState(null);
const [firstName,setFirstName]=useState(null);
const [lastName,setLastName]=useState(null);
const [phone,setPhone]=useState(null);
const [email,setEmail]=useState(null);
const [address,setAddress]=useState(null);
const [city,setCity]=useState(null);
const [state,setState]=useState(null);
const [pin,setPin]=useState(null);


useEffect(()=>{
  console.log("Profile=====",profile)
  if(!profile){
    props.getUserProfile()
  }
},[profile])

useEffect(()=>{
  if(props.getUserProfileData){
    console.log('props.getUserProfileData---',props.getUserProfileData)
    if(props.getUserProfileData.result){
      setProfile(props.getUserProfileData.result)
      setFirstName(props.getUserProfileData.result.firstName)
      setLastName(props.getUserProfileData.result.lastName)
      setEmail(props.getUserProfileData.result.email)
      setAddress(props.getUserProfileData.result.address)
      setPhone(props.getUserProfileData.result.contact)
      setAddress(props.getUserProfileData.result.address)
      setState(props.getUserProfileData.result.state)
      setCity(props.getUserProfileData.result.city)
      setPin(props.getUserProfileData.result.pin)
    }
  }
},[props.getUserProfileData])

  return (
    <div className="clients">
      <Sidebar />
      <Container fluid>
      {props.isLoading?
          <Loader/>:<Row>
          <Col lg={2} sm={4} xs={12}>
            <ClientLeftMenu />
          </Col>
          <Col lg={10} sm={8} xs={12}>
            <div className="appointment-card form-type">
              <h5 className="pb-2">
                <Link to="/client-details" className="theme-color">
                  <i className="fas fa-chevron-left mr-2"></i>
                </Link>
                 Details 
              </h5>
              <Form>
                <Row>
                  <Col lg={4} sm={4} xs={12}>
                    <Form.Group className="mb-3">
                      <Form.Label>First name</Form.Label>
                      <Form.Control value={firstName} onChange={(e)=>setFirstName(e.target.value)}/>
                    </Form.Group>
                  </Col>

                  <Col lg={4} sm={4} xs={12}>
                    <Form.Group className="mb-3">
                      <Form.Label>Last Name</Form.Label>
                      <Form.Control value={lastName} onChange={(e)=>setLastName(e.target.value)} />
                    </Form.Group>
                  </Col>

                  <Col lg={4} sm={4} xs={12}>
                    {/* <Form.Group className="mb-3">
                      <Form.Label>Nick name / Preferred name</Form.Label>
                      <Form.Control value="Scott" />
                    </Form.Group> */}
                  </Col>

                  <Col lg={4} sm={4} xs={12}>
                    <Form.Group className="mb-3">
                      <Form.Label>D.O.B</Form.Label>
                      <Form.Control value="06/08/1999" />
                    </Form.Group>
                  </Col>

                  <Col lg={4} sm={4} xs={12}>
                    <Form.Group className="mb-3">
                      <Form.Label>Gender</Form.Label>
                      <Form.Control value="Female" />
                    </Form.Group>
                  </Col>

                  <Col lg={4} sm={4} xs={12}>
                    <Form.Group className="mb-3">
                      <Form.Label>SSN</Form.Label>
                      <Form.Control value="SSN5164685154" />
                    </Form.Group>
                  </Col>

                </Row>
                <hr />

                <h5>Contact Information</h5>
                <Row>
                <Col lg={4} sm={4} xs={12}>
                    <Form.Group className="mb-3">
                      <Form.Label>Phone 1</Form.Label>
                      <Form.Control value={phone} onChange={(e)=>setPhone(e.target.value)}/>
                    </Form.Group>
                  </Col>

                  <Col lg={4} sm={4} xs={12}>
                    <Form.Group className="mb-3">
                      <Form.Label>Phone 2</Form.Label>
                      <Form.Control value="(123)-465-6544" />
                    </Form.Group>
                  </Col>

                  <Col lg={4} sm={4} xs={12}>
                    <Form.Group className="mb-3">
                      <Form.Label>Email</Form.Label>
                      <Form.Control value={email} readOnly />
                    </Form.Group>
                  </Col>
                </Row>
                <hr />
                <h5>Address</h5>

                <Row>
                  <Col lg={12} sm={12} xs={12}>
                    <Form.Group className="mb-3">
                      <Form.Label>Address Line</Form.Label>
                      <Form.Control value={address} onChange={(e)=>setAddress(e.target.value)} />
                    </Form.Group>
                  </Col>
                </Row>

                <Row>
                  <Col lg={4} sm={4} xs={12}>
                    <Form.Group className="mb-3">
                    <Form.Label>City</Form.Label>
                    <Form.Control value={city} onChange={(e)=>setCity(e.target.value)} />
                      {/* <Form.Select defaultValue="1">
                        <option value="1">Nevada</option>
                        <option value="2">Option</option>
                        <option value="3">Option</option>
                      </Form.Select> */}
                    </Form.Group>
                  </Col>

                  <Col lg={4} sm={4} xs={12}>
                    <Form.Group className="mb-3">
                      <Form.Label>State</Form.Label>
                      <Form.Control value={state} onChange={(e)=>setState(e.target.value)} />
                      {/* <Form.Select defaultValue="1">
                        <option value="1">Las Vegas</option>
                        <option value="2">Option</option>
                        <option value="3">Option</option>
                      </Form.Select> */}
                    </Form.Group>
                  </Col>

                  <Col lg={4} sm={4} xs={12}>
                    <Form.Group className="mb-3">
                      <Form.Label>Pincode</Form.Label>
                      <Form.Control value={pin} onChange={(e)=>setPin(e.target.value)} />
                    </Form.Group>
                  </Col>
                </Row>

                <hr />
                <h5>Communication Preferences</h5>
                <Row>
                  <Col lg={4} sm={4} xs={12}>
                    <Form.Group className="mb-3">
                      <Form.Label>Automated Reminder</Form.Label>
                      <Form.Select defaultValue="1">
                        <option value="1">SMS / Email</option>
                        <option value="2">Option</option>
                        <option value="3">Option</option>
                      </Form.Select>
                    </Form.Group>
                  </Col>

                  <Col lg={4} sm={4} xs={12}>
                    <Form.Group className="mb-3">
                      <Form.Label>Appointment Confirmation</Form.Label>
                      <Form.Select defaultValue="1">
                        <option value="1">Email</option>
                        <option value="2">Option</option>
                        <option value="3">Option</option>
                      </Form.Select>
                    </Form.Group>
                  </Col>
                </Row>

                <hr />
                <h5>Work Information</h5>
                <Row>
                  <Col lg={4} sm={4} xs={12}>
                    <Form.Group className="mb-3">
                      <Form.Label>Occupation</Form.Label>
                      <Form.Control value="Technical Engineer" />
                    </Form.Group>
                  </Col>

                  <Col lg={4} sm={4} xs={12}>
                    <Form.Group className="mb-3">
                      <Form.Label>Employment Status</Form.Label>
                      <Form.Select defaultValue="1">
                        <option value="1">Fulltime</option>
                        <option value="2">Option</option>
                        <option value="3">Option</option>
                      </Form.Select>
                    </Form.Group>
                  </Col>
                </Row>

                <Row>
                  <Col Col lg={12} sm={12} xs={12}>
                    <div className="text-center form-action-btn mt-3">
                      <Button className="btn btn-theme-white pl-2 pr-2">
                        Cancel
                      </Button>
                      <Button className="btn btn-theme pl-2 pr-2 ml-2">
                        Save
                      </Button>
                    </div>
                  </Col>
                </Row>
              </Form>
            </div>
          </Col>
        </Row>}
      </Container>
    </div>
  );
};

const mapStateToProps = state => ({
  isLoading: state.loading.isLoading,
  getUserProfileData: state.user.getUserProfileData,
  getUserProfileErr: state.user.getUserProfileErr,
});

const mapDispatchToProps = dispatch => ({
  getUserProfile: () => dispatch(getUserProfile()),
  clearGetUserProfile: () => dispatch(clearGetUserProfile())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(EditDetails));

