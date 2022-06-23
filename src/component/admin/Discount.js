import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Button,
  ButtonGroup,
  ButtonToolbar,
  DropdownButton,
  Table,
  Dropdown,
  InputGroup,
  FormControl,
  Pagination,
  Modal,
} from "react-bootstrap";
import Sidebar from "../sidenav/Sidebar";
import AdminLeftMenu from "./AdminLeftMenu";
import MultiStep from './Multistepjs';
import StepOne from "./AddCoupon";
import StepTwo from "./Nextstepcoupon";

const steps = [
  { component: <StepOne /> },
  { component: <StepTwo /> }
]
const prevStyle = { background: '#33c3f0' }
const nextStyle = { background: '#33c3f0' }

const Discount = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="clients">
      <Sidebar />
      <Container fluid>
        <Row>
          <Col lg={3} sm={4} xs={12}>
            <AdminLeftMenu />
          </Col>
          <Col lg={9} sm={8} xs={12}>
            <div className="appointment-card">
              <ButtonToolbar
                className="justify-content-between mb-3"
                aria-label="Toolbar with Button groups"
              >
                <InputGroup>
                  <FormControl
                    className="rounded mr-2"
                    type="text"
                    placeholder="Search Users..."
                  />
                </InputGroup>

                <ButtonGroup className="rounded">
                  <Button className="btn btn-theme-white rounded-left">
                    Status
                  </Button>
                  <DropdownButton className=" p-0 rounded-0 mr-2" title="">
                    <Dropdown.Item eventKey="1">1</Dropdown.Item>
                    <Dropdown.Item eventKey="2">2</Dropdown.Item>
                    <Dropdown.Item eventKey="2">3</Dropdown.Item>
                    <Dropdown.Item eventKey="2">4</Dropdown.Item>
                  </DropdownButton>

                  <Button className="btn btn-theme ml-2" onClick={handleShow}>
                    + Add Coupon
                  </Button>
                </ButtonGroup>
              </ButtonToolbar>
              <Table responsive>
                <thead>
                  <tr>
                    <th className="text-left">Title</th>
                    <th>Coupon Code</th>
                    <th>Start Date</th>
                    <th>End Date</th>
                    <th colSpan="2" className="text-left">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="text-left">Father's Day</td>
                    <td>KINERGY12</td>
                    <td>14-May-2022</td>
                    <td>22-May-2022</td>
                    <td className="text-left">Active</td>
                    <td className="text-left">
                      <a href="#/discount-detail" className="text-dark">
                        <u>View Details</u>
                      </a>
                    </td>
                  </tr>

                  <tr>
                    <td className="text-left">Welcome Card</td>
                    <td>KINERGY12</td>
                    <td>14-May-2022</td>
                    <td>22-May-2022</td>
                    <td className="text-left">Active</td>
                    <td className="text-left">
                      <a href="#/discount-detail" className="text-dark">
                        <u>View Details</u>
                      </a>
                    </td>
                  </tr>

                  <tr>
                    <td className="text-left">Theraphy Day</td>
                    <td>KINERGY12</td>
                    <td>14-May-2022</td>
                    <td>22-May-2022</td>
                    <td className="text-left">Inactive</td>
                    <td className="text-left">
                      <a href="#/discount-detail" className="text-dark">
                        <u>View Details</u>
                      </a>
                    </td>
                  </tr>

                  <tr>
                    <td className="text-left">Stay Healthy</td>
                    <td>KINERGY12</td>
                    <td>14-May-2022</td>
                    <td>22-May-2022</td>
                    <td className="text-left">Active</td>
                    <td className="text-left">
                      <a href="#/discount-detail" className="text-dark">
                        <u>View Details</u>
                      </a>
                    </td>
                  </tr>

                  <tr>
                    <td className="text-left">Save your Money</td>
                    <td>KINERGY12</td>
                    <td>14-May-2022</td>
                    <td>22-May-2022</td>
                    <td className="text-left">Inactive</td>
                    <td className="text-left">
                      <a href="#/discount-detail" className="text-dark">
                        <u>View Details</u>
                      </a>
                    </td>
                  </tr>

                  <tr>
                    <td className="text-left">Special Session</td>
                    <td>KINERGY12</td>
                    <td>14-May-2022</td>
                    <td>22-May-2022</td>
                    <td className="text-left">Inactive</td>
                    <td className="text-left">
                      <a href="#/discount-detail" className="text-dark">
                        <u>View Details</u>
                      </a>
                    </td>
                  </tr>

                  <tr>
                    <td className="text-left">Thank you Card</td>
                    <td>KINERGY12</td>
                    <td>14-May-2022</td>
                    <td>22-May-2022</td>
                    <td className="text-left">Inactive</td>
                    <td className="text-left">
                      <a href="#/discount-detail" className="text-dark">
                        <u>View Details</u>
                      </a>
                    </td>
                  </tr>

                  <tr>
                    <td className="text-left">Stay Fit & Fine</td>
                    <td>KINERGY12</td>
                    <td>14-May-2022</td>
                    <td>22-May-2022</td>
                    <td className="text-left">Inactive</td>
                    <td className="text-left">
                      <a href="#/discount-detail" className="text-dark">
                        <u>View Details</u>
                      </a>
                    </td>
                  </tr>
                </tbody>
              </Table>
              <Pagination size="sm">
                <Pagination.First />
                <Pagination.Prev />
                <Pagination.Item>{1}</Pagination.Item>
                <Pagination.Ellipsis />

                <Pagination.Item>{10}</Pagination.Item>
                <Pagination.Item active>{12}</Pagination.Item>
                <Pagination.Item>{13}</Pagination.Item>

                <Pagination.Ellipsis />
                <Pagination.Item>{20}</Pagination.Item>
                <Pagination.Next />
                <Pagination.Last />
              </Pagination>
            </div>
          </Col>
        </Row>
      </Container>

      <Modal
        className="right"
        show={show}
        onHide={handleClose}
        animation={false}
      >
        <Modal.Header className="border-0 pb-0" closeButton></Modal.Header>
        <Modal.Body>
          
          <MultiStep activeStep={0} steps={steps} prevStyle={prevStyle} nextStyle={nextStyle} />
        </Modal.Body>
      </Modal>

      
    </div>
  );
};

export default Discount;
