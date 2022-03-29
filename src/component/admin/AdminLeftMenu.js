import React from "react";
import { NavDropdown } from "react-bootstrap";

const AdminLeftMenu = () => {
  return (
    <div className="page-left-sub-nav">
      <h3>Admin</h3>
      
      <ul className="p-0">
        <li>
          <a href="#/admin">
            <i class="far fa-circle mr-2"></i>General
          </a>
        </li>

        <li>
          <a href="#/staff-listing">
            <i class="far fa-circle mr-2"></i>Staff
          </a>
        </li>

        <li>
          <a href="#/client-authorization">
            <i class="far fa-circle mr-2"></i>Client Authorization
          </a>
        </li>

        <NavDropdown
          title={
            <span>
              <i className="far fa-circle mr-2"></i>Departments
            </span>
          }
          menuVariant="light"
        >
          <NavDropdown.Item href="#/department-general">General</NavDropdown.Item>
          <NavDropdown.Item href="#/department-medical">Medical</NavDropdown.Item>
          <NavDropdown.Item href="#/department-performance-services">Performance Services</NavDropdown.Item>
        </NavDropdown>

        <li>
          <a href="#/communications">
            <i class="far fa-circle mr-2"></i>Communication
          </a>
        </li>

        <NavDropdown
          title={
            <span>
              <i className="far fa-circle mr-2"></i>Finances
            </span>
          }
          menuVariant="light"
        >
          <NavDropdown
          title={
            <span>
              <i className="far fa-circle mr-2"></i>Billable Items
            </span>
          }
          menuVariant="light"
        >
          <NavDropdown.Item href="#/billed-item">Services</NavDropdown.Item>
          <NavDropdown.Item href="/">Products</NavDropdown.Item>
        </NavDropdown>
          <NavDropdown.Item href="#/inventory">Inventory</NavDropdown.Item>
          
        </NavDropdown>

      </ul>
    </div>
  );
};

export default AdminLeftMenu;
