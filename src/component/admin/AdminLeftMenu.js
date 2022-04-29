import React from "react";
import { NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

const AdminLeftMenu = () => {
  return (
    <div className="page-left-sub-nav">
      <h3> Admin </h3>{" "}
      <ul className="p-0">
        <li>
          <a href="#/staff-onboarding">
            <i class="far fa-circle mr-2"> </i>Staff Onboarding{" "}
          </a>{" "}
        </li>{" "}
        <li>
          <a href="#/admin">
            <i class="far fa-circle mr-2"> </i>General{" "}
          </a>{" "}
        </li>{" "}
        <li>
          <Link to="/staff-listing">
            <i class="far fa-circle mr-2"> </i>Staff{" "}
          </Link>{" "}
        </li>{" "}
        {/* <Link to='/staff-listing'>
                              Go to Jane's profile
                            </Link> */}{" "}
        <li>
          <a href="#/client-authorization">
            <i class="far fa-circle mr-2"> </i>Client Authorization{" "}
          </a>{" "}
        </li>{" "}
        <NavDropdown
          title={
            <span>
              <i className="far fa-circle mr-2"> </i>Departments{" "}
            </span>
          }
          menuVariant="light"
        >
          <NavDropdown.Item href="#/department-general">
            {" "}
            General{" "}
          </NavDropdown.Item>{" "}
          <NavDropdown.Item href="#/department-medical">
            {" "}
            Medical{" "}
          </NavDropdown.Item>{" "}
          <NavDropdown.Item href="#/department-performance-services">
            {" "}
            Performance Services{" "}
          </NavDropdown.Item>{" "}
        </NavDropdown>{" "}
        <li>
          <a href="#/communications">
            <i class="far fa-circle mr-2"> </i>Communication{" "}
          </a>{" "}
        </li>{" "}
        <NavDropdown
          title={
            <span>
              <i className="far fa-circle mr-2"> </i>Finances{" "}
            </span>
          }
          menuVariant="light"
        >
          <NavDropdown
            title={
              <span>
                <i className="far fa-circle mr-2"> </i>Billable Items{" "}
              </span>
            }
            menuVariant="light"
          >
            <NavDropdown.Item href="#/billed-item">
              {" "}
              Billable items{" "}
            </NavDropdown.Item>{" "}
            <NavDropdown.Item href="#/services">
              {" "}
              Services{" "}
            </NavDropdown.Item>{" "}
            <NavDropdown.Item href="/"> Products </NavDropdown.Item>{" "}
          </NavDropdown>{" "}
          <NavDropdown.Item href="#/inventory"> Inventory </NavDropdown.Item>{" "}
        </NavDropdown>{" "}
        <li>
          <a href="#/">
            <i class="far fa-circle mr-2"> </i>Security{" "}
          </a>{" "}
        </li>{" "}
        <li>
          <a href="#/facility">
            <i class="far fa-circle mr-2"> </i>Facility{" "}
          </a>{" "}
        </li>{" "}
        <li>
          <a href="#/adminLogout">
            <i class="far fa-circle mr-2"> </i>LogOut{" "}
          </a>{" "}
        </li>{" "}
      </ul>{" "}
    </div>
  );
};

export default AdminLeftMenu;
