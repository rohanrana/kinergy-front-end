import React, {useState} from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
// import Sidebar from '../../../PageLayout/SidebarNav/Sidebar';

const Createformnext = () => {
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
                    <div class="d-flex justify-content-between align-item-center" id="max984">
                        <h5><i class="fa-solid fa-chevron-left mr-3"></i> Create New Form</h5>
                        <span className="black-text"><i className="fa-solid fa-trash mr-3"></i> Delete Form</span>
                    </div>
                    <Form className="dpl">
                        <div className="appointment-card" id="max984">
                            <div className="text-right">
                                <span className='edit'><i className="fa-solid fa-pen"></i> Edit</span>
                            </div>
                            <Form.Group className="mb-4 mt-4 form-type">
                                <Form.Control type="text" value="Medications/Supplements" id="form_title" readonly />
                            </Form.Group>
                            <hr/>
                            <span className="list_span">Please list all prescription medications you are currently taking:</span>
                          </div>
                        <div class="d-flex">
                            <div className="appointment-card" id="max984">
                                <Form.Group className="mb-4 mt-4 form-type">
                                    <Form.Control type="text" placeholder="Add Section Title*"  />
                                </Form.Group>
                                <Form.Group className="mb-4 mt-4 form-type">
                                    <Form.Control as="textarea" rows="4" placeholder='Add Section Description' />
                                </Form.Group>
                            </div>
                            <div className='actionBtn ml-3'>
                                <span className="black-text d-block"><i className="fa-solid fa-trash mr-2"></i> Delete Section</span>
                                <span className="black-text d-block"><i className="fa-solid fa-copy mr-2"></i> Duplicate</span>
                            </div>
                        </div>
                        {isShown && (
                        <div className="appointment-card" id="max984">
                            <Row>
                                <Col md={8} xs={12}>
                                    <Form.Group className="mb-4 mt-4 form-type">
                                        <Form.Control type="text" placeholder="Add question*" />
                                    </Form.Group>
                                </Col>
                                <Col md={4} xs={12}>
                                    <Form.Group className="mb-4 mt-4 form-type">
                                        <Form.Control as="select" placeholder="Add question*">
                                            <option selected disabled>Answer Type</option>
                                            <option value="Check Boxes"><i class="fa-solid fa-check-to-slot mr-1"></i> Check Boxes</option>
                                            <option value="Single Selection"><i class="fa-solid fa-circle-dot mr-1"></i> Single Selection</option>
                                            <option value="Dropdown"><i class="fa-solid fa-circle-chevron-down mr-1"></i> Dropdown</option>
                                            <option value="Paragraph"><i class="fa-solid fa-align-left mr-1"></i> Paragraph</option>
                                            <option value="Short Answer"><i class="fa-solid fa-bars-sort mr-1"></i> Short Answer</option>
                                            <option value="File upload"><i class="fa-solid fa-cloud-arrow-up mr-1"></i> File upload</option>
                                            <option value="Date"><i class="fa-solid fa-calendar mr-1"></i> Date</option>
                                            <option value="Time"><i class="fa-solid fa-clock mr-1"></i> Time</option>
                                            <option value="Add Signature box"><i class="fa-solid fa-signature mr-1"></i> Add Signature box</option>
                                            <option value="Linear Scale"><i class="fa-solid fa-ruler-horizontal mr-1"></i> Linear Scale</option>
                                        </Form.Control>
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Form.Group className="mb-4 mt-4 form-type">
                                <Form.Control as="textarea" rows="4" placeholder='Add Section Description' />
                            </Form.Group>
                        </div>
                        )}
                        <div className="text-center" id="max984">
                            {isShown && (
                                 <Button className='addMor'>
                                    <i className="fa-solid fa-bars-progress mr-2"></i> Add new Section
                                </Button> 
                                )}
                            <Button className='addMor' onClick={handleClick}>
                                <i className="fa-solid fa-plus mr-2"></i> Add new question
                            </Button>
                        </div>
                        <div className='text-center mt-5'>
                            <Button className="btn btn-theme-white btn-primary ps-5 pe-5 me-3 round10">Cancel</Button>
                            <Link to="/#" className='btn btn-theme ps-5 pe-5 btn-primary'>Next</Link>
                        </div>
                    </Form>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Createformnext;