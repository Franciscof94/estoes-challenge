import React from "react";
import { Wrapper } from "./Styles";
import Logo from "../../assets/logo.png";
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <Wrapper>
      <Link to="/">
        <img src={Logo} alt="Logo" />
      </Link>
    </Wrapper>
  );
};

export default Header;
