import React from "react";
import { NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

const ClientLeftMenu = () => {
  return (
    <div className="page-left-sub-nav">
      <h3>Scott Elizabeth</h3>
      <p className="theme-color m-0">
        <b>Active</b>
      </p>
      <p>45465453</p>
      <ul className="p-0">
        <li>
          <Link to="client-details">
            <i class="far fa-circle mr-2"></i>Client Profile
          </Link>
        </li>

        <NavDropdown
          title={
            <span>
              <i className="far fa-circle mr-2"></i>Chart Notes
            </span>
          }
          menuVariant="light"
        >
          <Link to="/medical-record-listing">Medical Recordes</Link>
        </NavDropdown>

        <li>
          <Link to="document-list">
            <i class="far fa-circle mr-2"></i>Documents
          </Link>
        </li>

        <li>
          <Link to="insurance-provider">
            <i class="far fa-circle mr-2"></i>Insurance
          </Link>
        </li>

        <li>
          <Link to="appointment">
            <i class="far fa-circle mr-2"></i>Appointment
          </Link>
        </li>

        <li>
          <Link to="/billing-list">
            <i class="far fa-circle mr-2"></i>Billing
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default ClientLeftMenu;
