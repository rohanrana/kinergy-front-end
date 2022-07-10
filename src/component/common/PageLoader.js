import React, { Fragment } from "react";
import LoaderCSS from "./Loader.module.css";

const PageLoader = () => {
  return (
    <Fragment>
      <div className={LoaderCSS.loader_wrapper}>
        <svg
          className={LoaderCSS.loading_spinner}
          width="60"
          height="60"
          viewBox="0 0 60 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            className={LoaderCSS.loading_circle}
            cx="30"
            cy="30"
            r="27"
            stroke="#16A4FA"
            stroke-width="6"
          />
        </svg>
      </div>
    </Fragment>
  );
};

export default PageLoader;
