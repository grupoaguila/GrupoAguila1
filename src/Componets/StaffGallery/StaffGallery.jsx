import React from "react";
import "./StaffGallery.css";

import enriquellanos from "../../assets/grupoaguilateam/enriquellanos.jpg";
import estefania from "../../assets/grupoaguilateam/EstefaniaSzodoadminJr.jpg";
import gonzaloFigueroa from "../../assets/grupoaguilateam/GonzaloFigueroaSocio.jpg";
import javierMeunier from "../../assets/grupoaguilateam/JavierMeunier.jpg";
import JavierSpinelli from "../../assets/grupoaguilateam/JavierSpinelli.jpg";
import MatiasPenico from "../../assets/grupoaguilateam/MatiasPenico-AdmJr.jpg";
import PedroQuiroga from "../../assets/grupoaguilateam/PedroQuiroga.jpg";
import RodolfoEstrella from "../../assets/grupoaguilateam/RodolfoEstrella-socio.jpg";
import VeronicaPenico from "../../assets/grupoaguilateam/VeronicaPenico-adm-General.jpg";

function StaffGallery() {
  return (
    <>
    
    <div className="staffMainContainer">
    
      {/* Inicio del contenedor */}
      <h2 className="tituloSegunRol">Fundadores y Socios gerentes</h2>

      <div className="staffRolContainer">
        <div className="cardContainer">
          <div className="fotoContainer">
            <img
              className="ImagenStaff"
              src={gonzaloFigueroa}
              alt="Gonzalo Figueroa Foto"
            />
          </div>
          <div className="NombreStaff">Gonzalo Figueroa</div>
        </div>

        <div className="cardContainer">
          <div className="fotoContainer">
            <img
              className="ImagenStaff"
              src={RodolfoEstrella}
              alt="Rodolfo Estrella Foto"
            />
          </div>
          <div className="NombreStaff">Rodolfo Estrella</div>
        </div>
      </div>

      {/* fin del contenedor */}

      <h2 className="tituloSegunRol">Administrativa General</h2>
      {/* Inicio del contenedor */}
      <div className="staffRolContainer">
        <div className="cardContainer">
          <div className="fotoContainer">
            <img
              className="ImagenStaff"
              src={VeronicaPenico}
              alt="Veronica Penico"
            />
          </div>
          <div className="NombreStaff">Veronica Penico</div>
        </div>
      </div>
      {/* fin del contenedor */}

      <h2 className="tituloSegunRol">Peritos/Técnicos Oficiales</h2>
      {/* Inicio del contenedor */}
      <div className="staffRolContainer">
        <div className="cardContainer">
          <div className="fotoContainer">
            <img
              className="ImagenStaff"
              src={estefania}
              alt="Estefania Szodo Foto"
            />
          </div>
          <div className="NombreStaff">Estefania Szodo</div>
        </div>
        <div className="cardContainer">
          <div className="fotoContainer">
            <img
              className="ImagenStaff"
              src={MatiasPenico}
              alt="Matias Penico foto"
            />
          </div>
          <div className="NombreStaff">Matias Penico</div>
        </div>
      </div>
      {/* fin del contenedor */}


      <h2 className="tituloSegunRol">Peritos/Técnicos Juniors</h2>
       {/* Inicio del contenedor */} 
      <div className="staffPeritosJuniorContainer">
        <div className="cardContainer">
          <div className="fotoContainer">
            <img
              className="ImagenStaff"
              src={enriquellanos}
              alt="Enrique Llanos Foto"
            />
          </div>
          <div className="NombreStaff">Enrique Llanos</div>
        </div>

        <div className="cardContainer">
          <div className="fotoContainer">
            <img className="ImagenStaff" src={javierMeunier} alt="" />
          </div>
          <div className="NombreStaff">Javier Meunier</div>
        </div>

        <div className="cardContainer">
          <div className="fotoContainer">
            <img className="ImagenStaff" src={JavierSpinelli} alt="" />
          </div>
          <div className="NombreStaff">Javier Spinelli</div>
        </div>

        <div className="cardContainer">
          <div className="fotoContainer">
            <img className="ImagenStaff" src={PedroQuiroga} alt="" />
          </div>
          <div className="NombreStaff">Pedro Quiroga</div>
        </div>
      </div>
       {/* fin del contenedor */}
    </div>
    </>
  );
}

export default StaffGallery;
