import React from 'react'
import Upwork from "../../assets/logo.png";
import Fiverr from "../../assets/logo.png";
import Amazon from "../../assets/logo.png";
import Shopify from "../../assets/logo.png";
import Facebook from "../../assets/logo.png";
import { motion } from "framer-motion";
import './Services.css'

function Services() {
  return (
    <div className="works" id="works">
      {/* left side */}
      <div className="w-left">
        <div className="awesome">
          {/* dark Mode */}
          <span >
            Servicios
          </span>
          <span>Ofrecidos</span>
          <spane style = {{color:"black"}}>
          Nuestro trabajo es brindar servicios de peritajes en nuestro centro de inspección, 
            <br />
            capacitación, investigación de métodos de reparación de daños materiales, 
            <br />
            liquidaciones de siniestros, auditorías externas e internas de daños materiales, 
            <br />
            desarrollos de tecnologías aplicadas a peritaciones en modo real, convenio de 
            <br />
            precios con talleres homologados y repuesteras locales. 
          </spane>
          
          <div
            className="blur s-blur1"
            style={{ background: "blue" }}
          ></div>
        </div>

        {/* right side */}
      </div>
      <div className="w-right">
      <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 3.5, type: "spring" }}
          className="w-mainCircle"
        >
          <div className="w-secCircle">
            <span>INSPECCIONES</span>
           {/*  <img src={Upwork} alt="" /> */}
          </div>
          <div className="w-secCircle">
          <span>INVESTIGACIONES</span>
       {/*      <img src={Fiverr} alt="" /> */}
          </div>
          <div className="w-secCircle">
          <span>CAPACITACIONES</span>
            {/* <img src={Amazon} alt="" /> */}
          </div>{" "}
          <div className="w-secCircle">
          <span>CONSULTORÍA</span>
          {/*   <img src={Shopify} alt="" /> */}
          </div>
          <div className="w-secCircle">
          <span>POSICIONAMIENTO</span>
            {/* <img src={Facebook} alt="" /> */}
          </div>
          </motion.div>
        {/* background Circles */}
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  )
}

export default Services