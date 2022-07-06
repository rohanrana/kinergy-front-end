import React, { Fragment } from "react";
import Paginate from "../common/Paginate";
import { Row, Col } from "reactstrap";

const Pagination = props => {
    const { data, onPageChange } = props;
    const { pagination } = data;

    // console.log("PAGINAION---->", pagination)
    return (
        <Fragment>
            <Row>
                <Col xs="12" className="d-flex justify-content-center">
                    {pagination.pages ? (
                        <Paginate
                            pageCount={pagination.pages}
                            onPageChange={onPageChange}
                            page={pagination.page}
                        />
                    ) : null}
                </Col>
                {/* <Col className="d-flex justify-content-center">
          {isLoading ? <Spinner className="" /> : null}
        </Col> */}
            </Row>
        </Fragment>
    );
};

export default Pagination;
