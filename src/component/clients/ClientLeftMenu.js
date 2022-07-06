import React from "react";
import { NavDropdown } from "react-bootstrap";

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
          <a href="#/client-details">
            <i className="far fa-circle mr-2"></i>Client Profile
          </a>
        </li>

        <NavDropdown
          title={
            <span>
              <i className="far fa-circle mr-2"></i>Chart Notes
            </span>
          }
          menuVariant="light"
        >
          <NavDropdown.Item href="#/medical-record-listing">Medical Recordes</NavDropdown.Item>
        </NavDropdown>

        <li>
          <a href="#/document-list">
            <i className="far fa-circle mr-2"></i>Documents
          </a>
        </li>

        <li>
          <a href="#/insurance-provider">
            <i className="far fa-circle mr-2"></i>Insurance
          </a>
        </li>

        <li>
          <a href="#/appointment">
            <i className="far fa-circle mr-2"></i>Appointment
          </a>
        </li>

        <li>
          <a href="#/billing-list">
            <i className="far fa-circle mr-2"></i>Billing
          </a>
        </li>
      </ul>
    </div>
  );
};

export default ClientLeftMenu;
