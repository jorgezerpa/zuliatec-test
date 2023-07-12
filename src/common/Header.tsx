import { useState } from "react";

import {
  CNavbar,
  CContainer,
  CNavbarBrand,
  CRow,
  CCol,
  CNavbarToggler,
  CCollapse,
  CNavbarNav,
  CNavItem,
} from "@coreui/react";


export const Header = () => {
  const [showNavigation, setShowNavigation] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  const toggleNavigation = () => {
    setShowNavigation(!showNavigation);
  };

  const toggleProfileMenu = () => {
    setShowProfileMenu(!showProfileMenu);
  };

  return (
    <CNavbar className="navbar navbar-light bg-white shadow-sm py-4 position-absolute w-100" style={{ zIndex:100 }}>
      <CContainer fluid>
        <CRow className="w-100">
          {/* Column 1*/}
          <CCol xs={3} md={3} lg={3} xl={3} xxl={3}>
            <CNavbarBrand href="#">LOGO</CNavbarBrand>
          </CCol>

          {/* Column 2 */}
          <CCol xs={6} md={6} lg={6} xl={6} xxl={6}>
            <CNavbarToggler onClick={toggleNavigation} className="border-0" />

            <CCollapse visible={showNavigation} className="bg-danger">
              <CNavbarNav className="navbar-nav">
                <CNavItem >
                  <CNavItem href="#">Home</CNavItem>
                </CNavItem>
                <CNavItem>
                  <CNavItem href="#">About</CNavItem>
                </CNavItem>
                <CNavItem>
                  <CNavItem href="#">Services</CNavItem>
                </CNavItem>
                <CNavItem>
                  <CNavItem href="#">Contact</CNavItem>
                </CNavItem>
              </CNavbarNav>
            </CCollapse>
          </CCol>

          {/* Column 3*/}
          <CCol xs={3} md={3} lg={3} xl={3} xxl={3} className="text-right">
            <div className="dropdown">
            <button className="btn dropdown-toggle align-items-center" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false" onClick={toggleProfileMenu}>
                <span className="icon-container mr-1" style={{backgroundColor: "#eee"}}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="none" viewBox="0 0 26 26">
                    <circle cx="13" cy="13" r="13" fill="#8D8C8C"/>
                    <path fill="#fff" d="M13 5a4 4 0 1 1 0 8 4 4 0 0 1 0-8Zm0 10c4.42 0 8 1.79 8 4v2H5v-2c0-2.21 3.58-4 8-4Z"/>
                  </svg>
                </span>
                Lisbelia Morales <i className="bi bi-caret-down-fill"></i>
              </button>
              <ul className={`dropdown-menu dropdown-menu-lg-right ${showProfileMenu ? "show" : ""}`} aria-labelledby="dropdownMenuButton">
                <li><a className="dropdown-item" href="#">Perfil</a></li>
                <li><a className="dropdown-item" href="#">Configuración</a></li>
                <li><a className="dropdown-item" href="#">Ayuda</a></li>
              </ul>
            </div>
          </CCol>
        </CRow>
      </CContainer>
    </CNavbar>
  );
};