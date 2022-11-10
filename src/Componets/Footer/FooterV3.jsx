import React from "react";
import { CDBFooter, CDBBtn, CDBIcon, CDBBox } from "cdbreact";
import { Link, NavLink } from "react-router-dom";
import LogoEagle from "../../assets/BN.png";
import "./FooterStyles.css";

function FooterV3() {
  <a href="https://google.com" target="_blank" rel="noreferrer">
    Google.com
  </a>;

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
          <a href="https://m.facebook.com/GrupoAguilaSiniestros" target="_blank" rel="noreferrer">
            <CDBIcon fab icon="facebook-f" size="2x" />
          </a>
        </div>
        <div className="insta">
          <a
            href="https://www.instagram.com/grupoaguilasrl/?hl=es-la" 
            target="_blank" 
          >
            <CDBIcon fab icon="instagram" size="2x" />
          </a>
        </div>
        <div className="linkedIn ">
          <a
            href="https://www.linkedin.com/in/grupo-%C3%A1guila-srl-98706a208"
            target="_blank"
          >
            <CDBIcon fab icon="linkedin" size="2x" />
          </a>
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
