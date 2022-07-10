/* eslint-disable react-hooks/exhaustive-deps */
import { debounce, isArray, map } from "lodash";
import React, { useCallback } from "react";
import { useEffect } from "react";
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



} from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import NotFoundLable from "../../component/common/NotFoundLable";
import Pagination from "../../component/common/Pagination";
import TableLoader from "../../component/common/TableLoader";
import { actions as facilitiesActions } from "../../Reducers/facilities"

import AdminLeftMenu from "./AdminLeftMenu";

const FacilityManagement = () => {
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    // setSearch(e.target.value)
    dispatch(facilitiesActions.onSearch({
      search: e.target.value,
    }))

  }
  const searchFacilitiesData = useCallback(debounce(handleSearch, 1000), []);

  const { data: facilitiesData, isLoading, pagination } = useSelector((state) => state.facilities)

  useEffect(() => {
    console.log("isLoading", isLoading)
  }, [isLoading])

  useEffect(() => {
    dispatch(facilitiesActions.onRequest({
      search: "",
      status: "ACTIVE",
    }))
  }, [])



  const onPageChange = (data) => {
    // const { customerId: patient_id } = this.props.localStore;
    console.log("PAGE CHANGE", data)
    const { page, } = data;
    dispatch(facilitiesActions.onPageChange({
      page,
    }))
  };



  return (
    <div className="clients">

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
                <h5>Facility Management</h5>

                <ButtonGroup className="rounded">
                  <InputGroup>
                    <FormControl
                      className="rounded mr-2"
                      type="text"
                      placeholder=""

                      onChange={searchFacilitiesData}
                    />
                  </InputGroup>
                  <Button className="btn btn-theme-white">All</Button>
                  <DropdownButton className=" p-0 rounded-0" title="">
                    <Dropdown.Item eventKey="1">Level 1</Dropdown.Item>
                    <Dropdown.Item eventKey="2">Level 2</Dropdown.Item>
                    <Dropdown.Item eventKey="2">Level 3</Dropdown.Item>
                    <Dropdown.Item eventKey="2">Level 4</Dropdown.Item>
                  </DropdownButton>
                  <Link to="/admin/adding-facility" className="btn btn-theme ml-2">
                    + Add Facility
                  </Link>
                </ButtonGroup>
              </ButtonToolbar>
              <Table responsive>
                <thead>
                  <tr>
                    <th className="text-left">Facility</th>
                    <th>Facility Location</th>
                    <th>Phone Number</th>
                    <th colSpan="2" className="text-left">
                      Status
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {isLoading ? (
                    <tr style={{ textAlign: "center" }}>
                      <td colSpan="8">
                        {isLoading && <TableLoader />}
                      </td>
                    </tr>
                  ) : null}
                  {!isLoading && facilitiesData && facilitiesData.length === 0 && (
                    <tr>
                      <td colSpan="8">
                        <NotFoundLable message="No Facilities found" />
                      </td>
                    </tr>
                  )}
                  {!isLoading && facilitiesData && isArray(facilitiesData) && facilitiesData.map((f) => {

                    return <tr key={f._id} >
                      <td className="text-left">
                        {f.facilityName}
                      </td>
                      <td> {f.location}</td>
                      <td>
                        {f.contact && isArray(f.contact) && f.contact.map((c) => {

                          if (c.phone && c.phone[0] && c.phone[0].phone) {
                            let phones = map(c.phone, (p) => {
                              if (p.phone !== null) {
                                return p.phone
                              } else {
                                return ""
                              }
                            });
                            return <span>{phones.toString()}</span>
                          } else {
                            return <span>-</span>
                          }

                        })}
                      </td>
                      <td className="text-left">
                        {f.status}
                      </td>
                      <td className="text-left">
                        <Link to={`/admin/facility-detail/${f._id}`} className="text-dark">
                          <u>View Details</u>
                        </Link>
                      </td>
                    </tr>
                  })}
                </tbody>
              </Table>

              {!isLoading && (
                <Pagination
                  data={{ pagination: pagination }}
                  onPageChange={onPageChange}
                />
              )}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default FacilityManagement;
