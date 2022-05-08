import React, { useState } from "react";
import { Navbar, Container, Nav, Form } from "react-bootstrap";
import Logo from "../../image/logo.png";
import ProfileIcon from "../../image/profile-icon.png";
import styled from "styled-components";
import { SidebarData } from "./SidebarData";
import SubMenu from "./SubMenu";
import { IconContext } from "react-icons/lib";

// const Navbar = styled.div`
// background: #ffffff;
// height: 50px;
// display: flex;
// justify-content: flex-start;
// align-items: center;
// `;

// const NavIcon = styled(Link)`
//   margin-left: 2rem;
//   font-size: 2rem;
//   display: flex;
//   justify-content: flex-start;
//   align-items: center;
// `;

const SidebarNav = styled.nav`
  background: #ffffff;
  // box-shadow: 0px 4px 10px 4px rgba(0, 0, 0, 0.1);
  width: 200px;
  height: 100vh;
  // display: flex;
  // justify-content: center;
  // position: relative;
  float:left;

  margin-left: ${({ sidebar }) => (sidebar ? "0" : "-100%!important")};
  transition: 350ms;
  // z-index: 10;
`;

const SidebarWrap = styled.div`
  width: 100%;
`;

const Sidebar = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <Navbar bg="white" expand="sm">
        <Container fluid>
          <Navbar.Brand href="/">
            <img src={Logo} alt={Logo} height="60" />
          </Navbar.Brand>

          <Nav className="open-sidenav">
            <Nav.Link>
              <i className="fas fa-chevron-left" onClick={showSidebar} ></i>
            </Nav.Link>

            <Nav>
              <Form.Control  placeholder="Quick search for clients, staff.." />
            </Nav>
          </Nav>

          <Nav className="main-navbar">
            <Nav.Link href="#/staff-login">
              <i class="fas fa-lock icon-color-nav"></i>
            </Nav.Link>

            <Nav.Link href="#/">
              <i class="fas fa-bell icon-color-nav"></i>
            </Nav.Link>
            <Nav.Link href="#/">
              <div className="profile-droupdown-with-icon">
                <img
                  className="thumbnail-image"
                  src={ProfileIcon}
                  alt="user pic"
                />

                <p className="m-0">
                  John Richardson <br /> <span>#654561</span>
                </p>
              </div>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <IconContext.Provider value={{ color: "#ffffff" }}>
        <SidebarNav className="hkugCt" sidebar={sidebar}>
          <SidebarWrap>
            {/* <span className="close-icon-navbar">
              <AiIcons.AiOutlineClose onClick={showSidebar} />
            </span>
            <Navbar.Brand href="/" className="text-center d-block mb-5 mt-3">
              <img src={Logo} alt={Logo} height="60" />
            </Navbar.Brand> */}
            {SidebarData.map((item, index) => {
              return <SubMenu item={item} key={index} />;
            })}
          </SidebarWrap>
        </SidebarNav>
      </IconContext.Provider>
    </>
  );
};

export default Sidebar;
