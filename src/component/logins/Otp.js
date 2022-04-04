import React,{useState,useEffect} from "react";
import { Form, Container, Row, Col, Button, Spinner } from "react-bootstrap";
import { propTypes } from "react-bootstrap/esm/Image";
import { connect } from "react-redux";
import { withRouter, Redirect } from "react-router-dom";
import Logo from "../../image/logo.png";
import { otpVerify } from "../../store/staffAuth/actions";

const Otp = (props) => {
  const [otp,setOtp]=useState('');
  const [error,setError]=useState('');
  const [showOtp,setShowOtp]=useState(null)

  const otpHandler=(text)=>{
   setOtp(text)
  }

  useEffect(()=>{
      if(!showOtp){
          const text=localStorage.getItem('otp')
          console.log(text)
          setShowOtp(text)
      }

  },[showOtp])

  const verifyHandler=()=>{
    props.otpVerify(otp)
  }
  
  useEffect(()=>{
    if(props.otpData){
        console.log("otp------",props.otpData)
      if(props.otpData.response_code==200)
     props.history.push("/dashboard")
    }
  },[props.otpData])

  return (
    <div className="staff-login">
      <Container>
        <Row>
          <Col lg={12}>
            <div className="login-logo pt-2">
              <img src={Logo} alt={Logo} />
            </div>
          </Col>
        </Row>
      </Container>
      {props.isLoading?
          <Spinner animation="grow"/>:<div className="login-form">
        <h4>OTP Verification</h4>
        <p className="mb-5">Please Enter the OTP:{showOtp}</p>
        <Form>
          <Form.Group className="mb-3">
            <Form.Control placeholder="Enter OTP" value={otp} onChange={(e)=>otpHandler(e.target.value)}/>
          </Form.Group>
          {error!=''?<p className="error">{error}</p>:null}
          {props.otpErr?props.otpErr.response_message?<p className="error">{props.otpErr.response_message}</p>:null:null}
          <Button className="btn btn-theme btn-block w-100 ml-0 mt-5" onClick={()=>verifyHandler()}>
            Verify
          </Button>
          {/* <a href="/dashboard" className="btn btn-theme btn-block w-100 ml-0 mt-5">
            LOGIN
          </a> */}
        </Form>
      </div>}
    </div>
  );
};

const mapStateToProps = state => ({
  isLoading: state.loading.isLoading,
  otpData: state.staffAuth.otpData,
  otpErr: state.staffAuth.otpErr,
});

const mapDispatchToProps = dispatch => ({
  otpVerify: (otp) => dispatch(otpVerify(otp))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Otp));

//export default StaffLogin;
