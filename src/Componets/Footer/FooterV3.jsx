import React from "react";
import { CDBFooter, CDBBtn, CDBIcon, CDBBox } from "cdbreact";
import { Link } from "react-router-dom";
import LogoEagle from "../../assets/BN.png";
import "./FooterStyles.css";

function FooterV3() {
  return (
    <div className="footerMainContainer">
      {/* logo */}
      <div className="logo">
        <img alt="logo" src={LogoEagle} width="40px" />
        <span className="ml-3 h5 font-weight-bold">Grupo Aguila S.R.L</span>
      </div>

      {/* social Media */}
      <div className="mediaContainer">
        <div className="face">
          <Link to='/servicios'><CDBIcon fab icon="facebook-f" size="2x"/></Link>
        </div>
        <div className="insta">
          <Link to='/servicios'><CDBIcon fab icon="instagram" size="2x" /></Link>
        </div>
        <div className="linkedIn ">
          <Link to='/servicios'><CDBIcon fab icon="linkedin" size="2x"/></Link>
        </div>
      </div>

      <div className="allRightsReserved">
        <small className="text-center mt-5">
          &copy; Grupo Aguila s.r.l, 2022. <span>All rights reserved.</span> 
        </small>
      </div>

    </div>
  );
}

export default FooterV3;
