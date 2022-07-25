import React, {useState} from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
// import Sidebar from '../../../PageLayout/SidebarNav/Sidebar';

const Formpreview = () => {

    const [isShown, setIsShown] = useState(false);

    const handleClick = event => {
        // 👇️ toggle shown state
        setIsShown(current => !current);
    
        // 👇️ or simply set it to true
        // setIsShown(true);
    };
    
  return (
    <div className="clients">
     {/* <Sidebar /> */}
        <Container fluid>
            <Row>
                {/* <Col lg={3} sm={4} xs={12}>
                    <AdminLeftMenu />
                </Col> */}
                <Col lg={12} sm={12} xs={12}>
                    <div class="d-flex justify-content-between align-item-center">
                        <h5><i class="fa-solid fa-chevron-left mr-3"></i> Preview Form</h5>
                        <div>
                            <span className="black-text me-3"><i className="fa-solid fa-edit"></i> Edit Form</span>
                            <span className="black-text"><i className="fa-solid fa-trash"></i> Delete Form</span>
                        </div>
                    </div>
                    <Form className="dpl">
                        <div className="appointment-card">
                            <Form.Group className="mb-4 mt-4 form-type">
                                <Form.Control type="text" value="Medications/Supplements" id="form_title" readonly />
                            </Form.Group>
                            <hr/>
                            <span className="list_span">Please list all prescription medications you are currently taking:</span>
                          </div>
                        <div class="">
                            <div className="appointment-card">
                                <Form.Group className="mb-4 mt-4 form-type">
                                    <Form.Control type="text" placeholder="Add Section Title*"  />
                                </Form.Group>
                                <Form.Group className="mb-4 mt-4 form-type">
                                    <Form.Control as="textarea" rows="4" placeholder='Add Section Description' />
                                </Form.Group>
                            </div>
                        </div>
                        <div className='text-center mt-5'>
                            <Button className="btn btn-theme-white btn-primary ps-5 pe-5 me-3 round10 mb-3">Cancel</Button>
                            <Link to="/#" className='btn btn-theme ps-5 pe-5 btn-primary mb-3'>Next</Link>
                        </div>
                    </Form>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Formpreview;