import React from "react";
import { Link } from "react-router-dom";

const AdminLeftMenu = () => {
  return (
    <div className="page-left-sub-nav">
      <h3>Admin</h3>

      <ul className="p-0">
        <li>
          <Link to="/admin/facility-management">
            <i className="far fa-circle mr-2"></i>Facility Management
          </Link>
        </li>

        <li>
          <Link to="/admin/system-settings">
            <i className="far fa-circle mr-2"></i>System Settings
          </Link>
        </li>

        <li>
          <Link to="/services">
            <i className="far fa-circle mr-2"></i>Services
          </Link>
        </li>

        {/* <NavDropdown
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
        </NavDropdown> */}

        <li>
          <Link to="/forms">
            <i className="far fa-circle mr-2"></i>Forms
          </Link>
        </li>

        {/* <NavDropdown
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
          
        </NavDropdown> */}

        <li>
          <Link to="/admin/admin-appointment">
            <i className="far fa-circle mr-2"></i>Appointments
          </Link>
        </li>

        <li>
          <Link to="/admin/discount">
            <i className="far fa-circle mr-2"></i>Discount
          </Link>
        </li>

        <li>
          <Link to="/admin/user-management">
            <i className="far fa-circle mr-2"></i>User Management
          </Link>
        </li>

        <li>
          <Link to="/admin/access-management">
            <i className="far fa-circle mr-2"></i>Access Management
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default AdminLeftMenu;
