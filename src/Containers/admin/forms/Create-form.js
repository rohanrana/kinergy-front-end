import React, {useState} from 'react';

import AdminLeftMenu from "../AdminLeftMenu";
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import FontsPicker from './Font-picker';
import IncDcr from './Inrease-descrease';
import Sidebar from '../../../PageLayout/SidebarNav/Sidebar';

const Createform = () => {
  return (
    <div className="clients">
     <Sidebar />
        <Container fluid>
            <Row>
                <Col lg={3} sm={4} xs={12}>
                    <AdminLeftMenu />
                </Col>
                <Col lg={9} sm={8} xs={12}>
                    <div class="d-flex justify-content-between align-item-center">
                        <h5><i class="fa-solid fa-chevron-left mr-3"></i> Create New Form</h5>
                        <span className="black-text"><i class="fa-solid fa-trash mr-3"></i> Delete Form</span>
                    </div>
                    <Form className="dpl">
                        <div className="appointment-card">
                            <Form.Group className="mb-4 mt-4 form-type">
                                <Form.Control type="text" placeholder="Add Form Title" />
                            </Form.Group>
                            <Form.Group className="mb-4 form-type" id="textAr">
                                <Form.Control className="apply-font mb-3" as="textarea" rows="4" placeholder='Form Description' />
                                <hr id="myHr" />
                                <FontsPicker /> <IncDcr />
                                <Button className="bold_btn">B</Button>
                                <Button className="bold_btn"><i>I</i></Button>
                                <Button className="bold_btn undrline">U</Button>
                            </Form.Group>
                        </div>
                        <div className='text-center mt-5 posAbbot'>
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

export default Createform;