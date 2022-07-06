/* eslint-disable react-hooks/exhaustive-deps */
import React, { Fragment, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import AdminLeftMenu from "./AdminLeftMenu";
import StaffMember from "../../image/staff.png";
import { Link, useParams } from "react-router-dom";
import { errorToast, getErrorObject, successToast, verifyObject } from "../../utilities/utils";
import { useEffect } from "react";
import { getFacilitiesByID } from "../../Services/facilities";
import { isArray } from "lodash";
import TableLoader from "../../component/common/TableLoader";
const FacilityDetail = () => {

  const [facilityDetails, setfacilityDetails] = useState(null)
  const [isLoading, setLoading] = useState(false)
  const routeParams = useParams()

  console.log("routeParams", routeParams)



  useEffect(() => {
    getFacilityDetail()
  }, [])

  const getFacilityDetail = async (id) => {
    try {
      let { facility_id } = routeParams;
      await setLoading(true)
      let response = await getFacilitiesByID({ _id: facility_id });
      setfacilityDetails(verifyObject(response, "data.result[0]", null))
      await setLoading(false)
      if (response.data.message) {
        successToast({ content: response.data.message });
      }
    } catch (error) {
      const { message } = getErrorObject(error);
      errorToast({ content: message });
      await setLoading(false)

    }
  }



  return (
    <div className="clients">

      <Container fluid>
        <Row>
          <Col lg={3} sm={4} xs={12}>
            <AdminLeftMenu />
          </Col>
          <Col lg={9} sm={8} xs={12}>
            <p className="text-right mt-3">
              <Link to="/admin/edit-facility" className="btn btn-theme">
                <i className="fas fa-pencil mr-2"></i>Edit Details
              </Link>
            </p>
            <div style={{ textAlign: "center" }} >
              {
                isLoading && <TableLoader />
              }
            </div>


            {facilityDetails && <Fragment>
              <div className="facility-detail-top">

                <p className="text-right absolute">
                  <i className="fas fa-circle"></i> {facilityDetails.status}
                </p>
                <div className="staff-img-detail">
                  <img src={StaffMember} alt={StaffMember} />
                </div>
                <h5 className="m-0">{facilityDetails.facilityName}</h5>
              </div>
              <div className="appointment-card mt-0">
                <h6 className="mb-3">Facility Information</h6>

                <Row>
                  <Col lg={6} sm={6} xs={12}>
                    <p className="m-0">Facility Name</p>
                    <p>{facilityDetails.facilityName}</p>
                  </Col>
                  <Col lg={6} sm={6} xs={12}>
                    <p className="m-0">Opening Hours</p>
                    <p>{facilityDetails.openHours}</p>
                  </Col>
                  <Col lg={6} sm={6} xs={12}>
                    <p className="m-0">Faclity Location</p>
                    <p>{facilityDetails.location}</p>
                  </Col>
                </Row>
                <hr />

                <Row>
                  <Col lg={12}>
                    <h6 className="mb-3">Contact Information</h6>
                  </Col>{
                    facilityDetails.contact && isArray(facilityDetails.contact) && facilityDetails.contact.map((c) => {
                      return <Fragment>
                        <Col lg={6} sm={6} xs={12}>
                          <p className="m-0">Phone Type</p>
                          {c.phone && c.phone.map((k, index
                          ) => {
                            return <span>{k.phoneType}{index + 1 !== c.phone.length && ","}</span>

                          })}
                        </Col>
                        <Col lg={6} sm={6} xs={12}>
                          <p className="m-0">Phone Number</p>
                          {c.phone && c.phone.map((k, index) => {
                            return <span>{k.phone}{index + 1 !== c.phone.length && ","}</span>
                          })}
                        </Col>
                        <Col lg={6} sm={6} xs={12}>
                          <p className="m-0">Email</p>
                          <p>{c.email}</p>
                        </Col>
                      </Fragment>


                      // return c.phone.map((k) => {
                      //   return <Fragment>
                      //     <Col lg={6} sm={6} xs={12}>
                      //       <p className="m-0">Phone Type</p>

                      //     </Col>
                      //     <Col lg={6} sm={6} xs={12}>
                      //       <p className="m-0">Phone Number</p>
                      //       <p>{k.phone}</p>
                      //     </Col>


                      //   </Fragment>
                      // })


                    })
                  }


                  <Col lg={6} sm={6} xs={12}>
                    <p className="m-0">Address</p>
                    {facilityDetails.address && isArray(facilityDetails.address) && facilityDetails.address.map((ad) => {
                      return <p>{`${ad.address},${ad.city && ad.city.name},${ad.pincode},${ad.state && ad.state.name}`}</p>
                    })}

                  </Col>
                </Row>
              </div>
            </Fragment>}

          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default FacilityDetail;
