import React from "react";
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
  Badge,
} from "react-bootstrap";
import Sidebar from "../../PageLayout/SidebarNav/Sidebar";
import AdminLeftMenu from "./AdminLeftMenu";



function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body className="p-5 text-center">
        <a className="close-modal-btn" onClick={props.onHide}>
          <i className="fas fa-times"></i>
        </a>
        <h6>
          Do you want to archive / lock <br />
          scott elizabeth as client ?
        </h6>
        <p className="mb-3">
          The locked / archived client will appear <br />
          in the search
        </p>
        <Row>
          <Col Col lg={12} sm={12} xs={12}>
            <div className="text-center form-action-btn mt-3">
              <Button className="btn btn-theme-white pl-2 pr-2">Cancel</Button>
              <Button className="btn btn-theme pl-2 pr-2 ml-2">Save</Button>
            </div>
          </Col>
        </Row>
      </Modal.Body>
    </Modal>
  );
}

const ClientAuthorization = () => {
 
 
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <div className="clients">
      <Sidebar />
      <Container fluid>
        <Row>
          <Col lg={2} sm={4} xs={12}>
            <AdminLeftMenu />
          </Col>
          <Col lg={10} sm={8} xs={12}>
            <div className="appointment-card">
              <ButtonToolbar
                className="justify-content-between mb-3"
                aria-label="Toolbar with Button groups"
              >
                <h4>Client Authorization</h4>

                <ButtonGroup className="rounded">
                  <Button className="btn btn-theme-white">All</Button>
                  <DropdownButton className=" p-0 rounded-0" title="">
                    <Dropdown.Item eventKey="1">Level 1</Dropdown.Item>
                    <Dropdown.Item eventKey="2">Level 2</Dropdown.Item>
                    <Dropdown.Item eventKey="2">Level 3</Dropdown.Item>
                    <Dropdown.Item eventKey="2">Level 4</Dropdown.Item>
                  </DropdownButton>
                  <InputGroup>
                    <FormControl
                      className="rounded ml-2"
                      type="text"
                      placeholder="Search for Staff"
                    />
                  </InputGroup>
                </ButtonGroup>
              </ButtonToolbar>
              <Table responsive>
                <thead>
                  <tr>
                    <th className="text-left">Client Name</th>
                    <th className="text-left">Staff</th>
                    <th colSpan={3} className="text-left">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="text-left">Scott Elizabeth</td>
                    <td className="text-left">Terill Lobo</td>
                    <td className="text-left">
                      <Badge pill className="p-2" bg="success">
                        Active
                      </Badge>
                    </td>
                    <td className="text-left">
                      <a href="#/">View Details</a>
                    </td>
                    <td className="text-left">
                      <i className="fas fa-envelope icon-color-nav mr-2"></i>
                      <a href onClick={() => setModalShow(true)}>
                        <i className="fas fa-lock icon-color-nav ml-2"></i>
                      </a>
                    </td>
                  </tr>

                  <tr>
                    <td className="text-left">Scott Elizabeth</td>
                    <td className="text-left">Terill Lobo</td>
                    <td className="text-left">
                      <Badge pill className="p-2" bg="success">
                        Active
                      </Badge>
                    </td>
                    <td className="text-left">
                      <a href="#/">View Details</a>
                    </td>
                    <td className="text-left">
                      <i className="fas fa-envelope icon-color-nav mr-2"></i>
                      <a  onClick={() => setModalShow(true)}>
                        <i className="fas fa-lock icon-color-nav ml-2"></i>
                      </a>
                    </td>
                  </tr>

                  <tr>
                    <td className="text-left">Scott Elizabeth</td>
                    <td className="text-left">Terill Lobo</td>
                    <td className="text-left">
                      <Badge pill className="p-2" bg="danger">
                        Inactive
                      </Badge>
                    </td>
                    <td className="text-left">
                      <a href="#/">View Details</a>
                    </td>
                    <td className="text-left">
                      <i className="fas fa-envelope icon-color-nav mr-2"></i>
                      <a href onClick={() => setModalShow(true)}>
                        <i className="fas fa-lock icon-color-nav ml-2"></i>
                      </a>
                    </td>
                  </tr>

                  <tr>
                    <td className="text-left">Scott Elizabeth</td>
                    <td className="text-left">Terill Lobo</td>
                    <td className="text-left">
                      <Badge pill className="p-2" bg="success">
                        Active
                      </Badge>
                    </td>
                    <td className="text-left">
                      <a href="#/">View Details</a>
                    </td>
                    <td className="text-left">
                      <i className="fas fa-envelope icon-color-nav mr-2"></i>
                      <a href onClick={() => setModalShow(true)}>
                        <i className="fas fa-lock icon-color-nav ml-2"></i>
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

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />

    </div>
  );
};

export default ClientAuthorization;
