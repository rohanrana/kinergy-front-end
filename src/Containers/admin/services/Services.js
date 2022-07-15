import React, { useState, useCallback, useEffect } from "react";
import { Container, Row, Col, Button, Modal, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import AdminLeftMenu from "../AdminLeftMenu";
import UploadPreviewAdd from "./UploadPreviewAdd";
import { useSelector, useDispatch } from "react-redux";
// import { Link } from "react-router-dom";
import NotFoundLable from "../../../component/common/NotFoundLable";
import Pagination from "../../../component/common/Pagination";
import TableLoader from "../../../component/common/TableLoader";
import { actions as serviceCategoryActions } from "../../../Reducers/serviceCategories";
import { debounce, isArray } from "lodash";
import AddServieCategory from "./AddServieCategory";

const Services = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    // setSearch(e.target.value)
    dispatch(
      serviceCategoryActions.onSearch({
        search: e.target.value,
      })
    );
  };
  // const searchFacilitiesData = useCallback(debounce(handleSearch, 1000), []);

  const {
    data: serviceCategoriesData,
    isLoading,
    pagination,
  } = useSelector((state) => state.serviceCategories);

  // useEffect(() => {
  //   console.log("isLoading", isLoading);
  // }, [isLoading]);

  useEffect(() => {
    dispatch(serviceCategoryActions.onRequest({}));
  }, []);

  // console.log("serviceCategories", serviceCategories);
  return (
    <div className="clients">
      <Container fluid>
        <Row>
          <Col lg={3} sm={4} xs={12}>
            <AdminLeftMenu />
          </Col>
          <Col lg={9} sm={8} xs={12}>
            <div className="appointment-card">
              <div className="d-flex justify-content-between align-item-center">
                <h5>Service Category</h5>
                <Button
                  className="btn btn-theme rounded"
                  varient="primary"
                  onClick={handleShow}
                >
                  + Add Services Category
                </Button>
              </div>
              {isLoading ? (
                <div style={{ textAlign: "center" }} xs={12} sm={4} md={3}>
                  {isLoading && <TableLoader />}
                </div>
              ) : null}
              {!isLoading &&
                serviceCategoriesData &&
                serviceCategoriesData.length === 0 && (
                  <div style={{ textAlign: "center" }}>
                    <NotFoundLable message="No Services found" />
                  </div>
                )}

              <Row id="service_id">
                {serviceCategoriesData &&
                  isArray(serviceCategoriesData) &&
                  serviceCategoriesData.map((d) => {
                    return (
                      <Col xs={12} sm={4} md={3}>
                        <div className="serviceCard">
                          <div className="text-right">
                            <span className="active_span">
                              <span className="dot_span"></span> {d.status}
                            </span>
                          </div>
                          <div className="sevice_c">
                            <h3>{d.title}</h3>
                            <span>8 Services</span>
                          </div>
                          <div className="text-right">
                            <Link
                              to={`/service-details/${d._id}`}
                              className="view_d"
                            >
                              View Details{" "}
                              <i class="fa-solid fa-arrow-right"></i>
                            </Link>
                          </div>
                        </div>
                      </Col>
                    );
                  })}
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
      {<AddServieCategory show={show} handleClose={handleClose} />}
    </div>
  );
};

export default Services;
