import React,{useState,useEffect} from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Sidebar from "../../sidenav/Sidebar";
import AdminLeftMenu from "../AdminLeftMenu";
import { api } from "../../../utils/api";


import StaffLogin from "../../logins/StaffLogin";
import useToken from "../../useToken";
const EditFacility = () => {

  const [stateList, setStateList] = useState(null);
  const [cityList, setCityList] = useState(null); 

  useEffect(() => {
    if (!stateList) {
      try {
          api.post("/Country/getStateByCountry", { _id: 231 }).then(
          (response)=>{
            if(response.data.response_code === 200){
              
             const  data = response ? response.data.result ? response.data.result.length > 0 ? response.data.result.map((x, index) => {
                return <option value={x._id} >{x.name}</option>
              }) :   <option value="">No State Found</option>  :    <option value="">No State Found</option>  :    <option value="">No State Found</option> 
              setStateList(data);
            }else{
              setStateList(<option>Select State</option>);
            }          
              
          }
          )        
    } catch (err) {
      setStateList(<option>Select State</option>);
    }
    }

  }, [stateList])

  const getCityByStateId = (stateId) =>{
    api.post("/Country/getCityByState", { _id: stateId }).then(
      (response)=>{
        if(response.data.response_code === 200){
          
           const data = response ? response.data.result ? response.data.result.length > 0 ? response.data.result.map((x, index) => {
            return <option value={x._id}>{x.name}</option>
          }) :    <option value="">No City Found</option> :    <option value="">No City Found</option>  :    <option value="">No City Found</option>           
          setCityList(data);
        }else{
          setCityList(<option>Select City</option>);
        }
        
          
      }
      )
  }

     //============ Check AUTH-TOKEN===================
     const { token, setToken } = useToken();
     if (!token) {
       return <StaffLogin />;
     }
  return (
    <div className="clients">
      <Sidebar />
      <Container fluid className="mt-5">
        <Row>
          <Col lg={2} sm={4} xs={12}>
            <AdminLeftMenu />
          </Col>
          <Col lg={10} sm={8} xs={12}>
            <div className="appointment-card mt-3">
              <h5 className="pb-2">Edit Facility</h5>
              <Form>
                <Row>
                  <Col lg={12} sm={12} xs={12}>
                    <Form.Group className="mb-3">
                      <Form.Control placeholder="Elizabeth" />
                    </Form.Group>
                  </Col>

                  <h5 className="mt-3 mb-3">Address Details</h5>

                  <Col lg={4} sm={4} xs={12}>
                    <Form.Group className="mb-3" >
                      <Form.Select onChange={(e)=>getCityByStateId(e.target.value)}>
                        <option value="">Select State</option>
                        {stateList}
                      </Form.Select>
                    </Form.Group>
                  </Col>
                  <Col lg={4} sm={4} xs={12}>
                    <Form.Group className="mb-3">
                      <Form.Select>
                        <option value="">Select City</option>                        
                        {cityList}
                      </Form.Select>
                    </Form.Group>
                  </Col>


                  <Col lg={4} sm={4} xs={12}>
                    <Form.Group className="mb-3">
                      <Form.Control placeholder="Pincode" />
                    </Form.Group>
                  </Col>
                  <h5 className="mt-3 mb-3">Contact Details</h5>

                  <Col lg={4} sm={4} xs={12}>
                    <Form.Group className="mb-3">
                      <Form.Control placeholder="Office Phone" />
                    </Form.Group>
                  </Col>

                  <Col lg={4} sm={4} xs={12}>
                    <Form.Group className="mb-3">
                      <Form.Control placeholder="Fax" />
                    </Form.Group>
                  </Col>

                  <Col lg={4} sm={4} xs={12}>
                    <Form.Group className="mb-3">
                      <Form.Control placeholder="Email" />
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
        </Row>
      </Container>
    </div>
  );
};

export default EditFacility;
