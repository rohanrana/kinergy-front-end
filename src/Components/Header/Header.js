import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { verifyObject } from "../../utilities/utils";
// import { logOut } from "../../Reducers/session";
import "./Header.css";
import { useNavigate } from "react-router";
import { actionTypes } from "../../Reducers/localStore";
import { appRoutesConst } from "../../App/navigation";
import { Container, Navbar, NavDropdown, Nav, Button } from "react-bootstrap";
import Logo from "../../images/logo.png";
import ProfileIcon from "../../images/profile-icon.svg";
import DownArrow from "../../images/down-arrow.svg";
import LogOut from "../../images/logout.svg";
// import { Link } from "react-router-dom";

export function Header(props) {
  const dispatch = useDispatch();
  const localStore = useSelector((state) => state.localStore);
  const token = verifyObject(localStore, "token", null);
  const userName = `${verifyObject(
    localStore,
    "user.firstName",
    ""
  )} ${verifyObject(localStore, "user.lastName", "")}`;

  const _id = verifyObject(localStore, "user._id", null);
  const navigate = useNavigate();
  //   const isLoading = verifyObject(state, "session.isLoading", null);
  const onLogout = () => {
    console.log("logouteed");
    console.log("_id", _id);
    console.log("token", token);
    dispatch({
      type: actionTypes.CLEAR_LOCAL_STATE,
    });
    navigate(appRoutesConst.index);
    // dispatch(logOut({ _id, token },navigate));
  };
  if (token) {
    return (
      <div>
        <Navbar fluid collapseOnSelect expand="lg">
          <Container fluid>
            <Navbar.Brand to={"/"}>
              <img src={Logo} alt={Logo} />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="ml-auto">
                <NavDropdown
                  title={
                    <div className="profile-row">
                      <div className="rofile-col-1">
                        <img src={ProfileIcon} alt={ProfileIcon} />
                      </div>
                      <div className="rofile-col-2">
                        <p className="profile-name">{userName}</p>
                        <p className="profile-id">#654561</p>
                      </div>
                      <div className="rofile-col-3">
                        <img src={DownArrow} alt={DownArrow} />
                      </div>
                    </div>
                  }
                  id="collasible-nav-dropdown"
                >
                  <NavDropdown.Item href="#action/3.1">
                    Profile
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link to={"/"}>
                  <Button onClick={onLogout} className="btn btn-logout">
                    {"Logout"}{" "}
                    <img src={LogOut} alt={LogOut} className="ml-2" />
                  </Button>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    );
  } else {
    return (
      <Navbar collapseOnSelect expand="lg">
        <Container>
          <Navbar.Brand to={"/"}>
            <img src={Logo} alt={Logo} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link to={"/"}>Home</Nav.Link>
              <Nav.Link to={"/"}>About Us</Nav.Link>
              <Nav.Link to={"/"}>Contact</Nav.Link>
              <Nav.Link to={"/"}>
                <Button className="btn btn-theme">Login</Button>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default Header;
