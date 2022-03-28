import React,{useState,useEffect} from "react";
import { Form, Container, Row, Col, Button, Spinner } from "react-bootstrap";
import { propTypes } from "react-bootstrap/esm/Image";
import { connect } from "react-redux";
import { withRouter, Redirect } from "react-router-dom";
import Logo from "../../image/logo.png";
import { staffLogin } from "../../store/staffAuth/actions";

const StaffLogin = (props) => {
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const [error,setError]=useState('');

  const emailHandler=(text)=>{
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (reg.test(text) === false){
        setError('Enter valid User ID.');
        setEmail(text);
    } else {
        setEmail(text);
        setError('');
    }
  }

  const passwordHandler=(val)=>{
    if(!val){
      setError('Enter password.')
      setPassword(val)
    }
    else{
      setPassword(val);
      setError('')
    }
  }

  const loginHandler=()=>{
    props.staffLogin(email, password,"SUPERADMIN")
  }
  
  useEffect(()=>{
    if(props.staffLoginData){
      if(props.staffLoginData.response_code)
      props.history.push("/dashboard")
    }
  },[props.staffLoginData])

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
          <Spinner animation="grow" />:<div className="login-form">
        <h4>Welcome Back </h4>
        <p className="mb-5">Please login to continue</p>
        <Form>
          <Form.Group className="mb-3">
            <Form.Control placeholder="User ID" value={email} onChange={(e)=>emailHandler(e.target.value)}/>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Control placeholder="Password" type="password" value={password} onChange={(e)=>passwordHandler(e.target.value)}/>
          </Form.Group>
          {error!=''?<p className="error">{error}</p>:null}
          {console.log(props.staffLoginErr)}
          {props.staffLoginErr?props.staffLoginErr.response_message?<p className="error">{props.staffLoginErr.response_message}</p>:null:null}
          <Button className="btn btn-theme btn-block w-100 ml-0 mt-5" onClick={()=>loginHandler()}>
            LOGIN
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
  staffLoginData: state.staffAuth.staffLoginData,
  staffLoginErr: state.staffAuth.staffLoginErr,
  status: state.staffAuth.status
});

const mapDispatchToProps = dispatch => ({
  staffLogin: (email, password,type) => dispatch(staffLogin(email, password,type))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(StaffLogin));

//export default StaffLogin;
