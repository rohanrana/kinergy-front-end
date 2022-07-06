
import React, { Component, Fragment } from "react";
import ReactPaginate from "react-paginate";
export type IProps = {
    pageCount: number,
    onPageChange: () => {}
};

class Paginate extends Component {
    onPageChange = data => {
        // data.selected + 1 cause it starts from 0
        this.props.onPageChange({ page: data.selected + 1 });
        window.scroll(0, 0);
    };
    render() {
        const { pageCount, page } = this.props;

        // console.log("PAGE : : : : : ", page)
        let paginate = null;
        if (pageCount > 1) {
            paginate = (
                <Fragment>
                    <ReactPaginate
                        pageCount={pageCount}
                        disableInitialCallback={true}
                        onPageChange={this.onPageChange}
                        marginPagesDisplayed={2}
                        pageRangeDisplayed={5}
                        breakClassName={"page-item"}
                        initialPage={page > 0 ? page - 1 : 0}
                        breakLabel={<a className="page-link">...</a>}
                        previousLabel={"previous"}
                        nextLabel={"next"}
                        containerClassName={"pagination"}
                        subContainerClassName={"pages pagination"}
                        activeClassName={"active"}
                        pageClassName="page-item"
                        previousClassName="page-item"
                        nextClassName="page-item"
                        pageLinkClassName="page-link"
                        previousLinkClassName="page-link"
                        nextLinkClassName="page-link"
                    />
                </Fragment>
            );
        }
        return paginate;
    }
}

export default Paginate;
