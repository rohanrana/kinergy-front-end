import React from "react";
import {
  Container,
  Row,
  Col,
  Table,
  Pagination,

} from "react-bootstrap";
import { Link } from "react-router-dom";
import Sidebar from "../../../PageLayout/SidebarNav/Sidebar";

const MedicalActivityLog = () => {
  return (
    <div className="clients">
      <Sidebar />
      <Container fluid>
        <Row>
          <Col lg={12} sm={12} xs={12}>
            <h4 className="mt-4">Scott Elizabeth</h4>

            <div className="appointment-card">
              <h5 className="mb-3"><Link to="/client/medical-record-main-page" className="theme-color"><i className="fas fa-chevron-left mr-2"></i></Link>Activity Log</h5>
              <Table responsive>
                <thead>
                  <tr>
                    <th className="text-left">Action</th>
                    <th>Staff</th>
                    <th>Date and Time Stamp</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="text-left">Created Injury Main Page </td>
                    <td>Terill Lobo</td>
                    <td>31 Dec, 2021  |  10:30 AM</td>
                  </tr>

                  <tr>
                    <td className="text-left">Created Injury Main Page </td>
                    <td>Terill Lobo</td>
                    <td>31 Dec, 2021  |  10:30 AM</td>
                  </tr>

                  <tr>
                    <td className="text-left">Created Injury Main Page </td>
                    <td>Terill Lobo</td>
                    <td>31 Dec, 2021  |  10:30 AM</td>
                  </tr>

                  <tr>
                    <td className="text-left">Created Injury Main Page </td>
                    <td>Terill Lobo</td>
                    <td>31 Dec, 2021  |  10:30 AM</td>
                  </tr>

                  <tr>
                    <td className="text-left">Created Injury Main Page </td>
                    <td>Terill Lobo</td>
                    <td>31 Dec, 2021  |  10:30 AM</td>
                  </tr>

                  <tr>
                    <td className="text-left">Created Injury Main Page </td>
                    <td>Terill Lobo</td>
                    <td>31 Dec, 2021  |  10:30 AM</td>
                  </tr>

                  <tr>
                    <td className="text-left">Created Injury Main Page </td>
                    <td>Terill Lobo</td>
                    <td>31 Dec, 2021  |  10:30 AM</td>
                  </tr>

                  <tr>
                    <td className="text-left">Created Injury Main Page </td>
                    <td>Terill Lobo</td>
                    <td>31 Dec, 2021  |  10:30 AM</td>
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
    </div>
  );
};

export default MedicalActivityLog;
