import React from "react";
import {
  Navbar,
  NavbarBrand,
} from "reactstrap";

const Header = () => {
  return (
    <div>
      <Navbar color="info" light expand="md" >
        <NavbarBrand>Github Search</NavbarBrand>
      </Navbar>
    </div>
  );
};

export default Header;
