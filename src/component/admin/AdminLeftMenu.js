import React from "react";

const AdminLeftMenu = () => {
  return (
    <div className="page-left-sub-nav">
      <h3>Admin</h3>

      <ul className="p-0">
        <li>
          <a href="#/facility-management">
            <i class="far fa-circle mr-2"></i>Facility Management
          </a>
        </li>

        <li>
          <a href="#/system-settings">
            <i class="far fa-circle mr-2"></i>System Settings
          </a>
        </li>

        <li>
          <a href="#/services">
            <i class="far fa-circle mr-2"></i>Services
          </a>
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
          <a href="#/">
            <i class="far fa-circle mr-2"></i>Forms
          </a>
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
          <a href="#/admin-appointment">
            <i class="far fa-circle mr-2"></i>Appointments
          </a>
        </li>

        <li>
          <a href="#/discount">
            <i class="far fa-circle mr-2"></i>Discount
          </a>
        </li>

        <li>
          <a href="#/user-management">
            <i class="far fa-circle mr-2"></i>User Management
          </a>
        </li>

        <li>
          <a href="#/access-management">
            <i class="far fa-circle mr-2"></i>Access Management
          </a>
        </li>
      </ul>
    </div>
  );
};

export default AdminLeftMenu;
