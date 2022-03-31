import React, { useState, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Modal,
  Table,
  Pagination,
  ButtonGroup,
  Button,
  ButtonToolbar,
  Dropdown,
  DropdownButton,
  FormControl,
  InputGroup,
  Form,
  Spinner
} from "react-bootstrap";
import Sidebar from "../sidenav/Sidebar";
import AdminLeftMenu from "./AdminLeftMenu";
import { connect } from "react-redux";
import { withRouter, Redirect } from "react-router-dom";
import { userListing } from "../../store/staffAuth/actions";


function MyVerticallyCenteredModal(props) {


  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body className="p-5">
        <a className="close-modal-btn" onClick={props.onHide}>
          <i className="fas fa-times"></i>
        </a>
        <h4>Edit Staff Member</h4>
        <p className="mb-3">Courtney Brittney</p>
        <Form>
          <Form.Group className="mb-3">
            <Form.Select aria-label="Default select example">
              <option>Staff Level</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Select aria-label="Default select example">
              <option>Designation</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Select>
          </Form.Group>
          <Row>
            <Col lg={8} sm={8} xs={8}>
              <p>Lock Staff member</p>
            </Col>
            <Col lg={4} sm={4} xs={4} className="text-right">
              <Form.Check type="switch" id="custom-switch" />
            </Col>
          </Row>

          <Row>
            <Col lg={8} sm={8} xs={8}>
              <p>Archive Staff Member</p>
            </Col>
            <Col lg={4} sm={4} xs={4} className="text-right">
              <Form.Check type="switch" id="custom-switch" />
            </Col>
          </Row>
          <Row>
            <Col Col lg={12} sm={12} xs={12}>
              <div className="text-center form-action-btn mt-3">
                <Button className="btn btn-theme-white pl-2 pr-2">
                  Cancel
                </Button>
                <Button className="btn btn-theme pl-2 pr-2 ml-2">Save</Button>
              </div>
            </Col>
          </Row>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

const StaffListing = (props) => {
  const [modalShow, setModalShow] = React.useState(false);
  const [list, setList] = useState(null);
  const [item, setItem] = useState([])

  useEffect(() => {
    console.log(' list', list)
    if (!list) {
      console.log('No list')
      props.userListing()
    }

  }, [list])

  useEffect(() => {
    if (props.userListingData) {
      console.log(props.userListingData)
      let active = 1;
      let arr = [];
      for (let number = 1; number <= props.userListingData.result.length; number++) {
        arr.push(
          <Pagination.Item key={number} active={number === active}>
            {number}
          </Pagination.Item>,
        );
      }
      setItem(arr)
      setList(props.userListingData.result)
    }

  }, [props.userListingData])

  const data = props.userListingData ? props.userListingData.result ? props.userListingData.result.length > 0 ? props.userListingData.result.map((x, index) => {
    return <tr key={index}>
      <td>{x._id}</td>
      <td>{`${x.firstName}  ${x.lastName}`}</td>
      <td>{x.type}</td>
      <td>Level 3</td>
      <td>
        <a href="#/" onClick={() => setModalShow(true)}>
          Edit
        </a>
      </td>
    </tr>
  }) : <tr>
    <td>1</td></tr> : <tr>
    <td>12</td></tr> : <tr>
    <td>13</td></tr>

  return (
    <div className="clients">
      <Sidebar />
      {props.isLoading ?
        <Spinner animation="grow" /> : <Container fluid className="mt-5">
          <Row>
            <Col lg={2} sm={4} xs={12}>
              <AdminLeftMenu />
            </Col>
            <Col lg={10} sm={8} xs={12}>
              <div className="appointment-card mt-3">
                <ButtonToolbar
                  className="justify-content-between mb-3"
                  aria-label="Toolbar with Button groups"
                >
                  <InputGroup>
                    <FormControl
                      className="rounded"
                      type="text"
                      placeholder="Search Staffs..."
                    />
                  </InputGroup>

                  <ButtonGroup className="rounded">
                    <Button className="btn btn-theme-white">All Levels</Button>
                    <DropdownButton className=" p-0 rounded-0" title="">
                      <Dropdown.Item eventKey="1">Level 1</Dropdown.Item>
                      <Dropdown.Item eventKey="2">Level 2</Dropdown.Item>
                      <Dropdown.Item eventKey="2">Level 3</Dropdown.Item>
                      <Dropdown.Item eventKey="2">Level 4</Dropdown.Item>
                    </DropdownButton>
                    <a href="/add-staff" className="btn btn-theme rounded ml-2">
                      + Add Staff
                    </a>
                  </ButtonGroup>
                </ButtonToolbar>
                <Table responsive>
                  <thead>
                    <tr>
                      <th>Staff ID</th>
                      <th>Name</th>
                      <th>Designation</th>
                      <th>Access Level</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data}

                  </tbody>
                </Table>
                <Pagination>{item}</Pagination>
                {/* <Pagination size="sm">
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
              </Pagination> */}
                {props.userListingErr ? props.userListingErr.response_message ? <p className="error">{props.userListingErr.response_message}</p> : null : null}
              </div>
            </Col>
          </Row>
        </Container>}

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </div>
  );
};

const mapStateToProps = state => ({
  isLoading: state.loading.isLoading,
  userListingData: state.staffAuth.userListingData,
  userListingErr: state.staffAuth.userListingErr,
});

const mapDispatchToProps = dispatch => ({
  userListing: () => dispatch(userListing())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(StaffListing));

