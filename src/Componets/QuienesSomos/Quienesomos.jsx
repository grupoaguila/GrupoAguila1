import React from "react";
import StaffGallery from "../StaffGallery/StaffGallery";
import "./quienesSomos.css";

function Quienesomos() {
  return (
    <>
    <div className="mainQuienesSOmos">

      <div className="usMainTitle">
        <span>Somos</span>
        <span>Grupo Águila</span>
      </div>
      <div className="mainAboustUs">
        <div className="aboutUsContainer first">
          <h5 className="usTitle">Visión</h5>
          <p className="usBody">
            Ser la Empresa con mayor reconocimiento en servicios de
            Peritaciones, Capacitación y Consultoría para Compañías de Seguros,
            por su dedicación, calidad y experiencia tanto en nuestros productos
            como en la atención y servicio hacia nuestros clientes y
            colaboradores.
          </p>
        </div>
        <div className="aboutUsContainer second">
          <h5 className="usTitle">Misión</h5>
          <p className="usBody">
            Comercializar nuestro servicio innovador en peritajes con la mejor
            relación precio- calidad, creciendo constantemente para lograr mayor
            presencia en el país, desarrollando e integrando los recursos
            humanos al proceso de peritaje y auditoría de de daños materiales,
            mediante la entrega de conocimientos, tecnología, desarrollo de
            habilidades e investigación.
          </p>
        </div>
        <div className="aboutUsContainer third">
          <h5 className="usTitle">Objetivos</h5>
          <p className="usBody">
            <ul>
              <li>
                Brindar servicios de peritajes acorde a las necesidades de
                nuestros clientes
              </li>
              <li>Mejorar los costos y deficiencias de las resoluciones</li>
              <li>
                Abrir distintos centros de inspección, en el territorio de
                Mendoza
              </li>
              <li>
                Controlar, seguir y auditar en tiempo real cada siniestro
                ingresado
              </li>
              <li>Formar equipo de peritos homologados, especializándose</li>
            </ul>
          </p>
        </div>

        <div className="aboutUsContainer fourth">
          <h5 className="usTitle">Fortalezas</h5>
          <p className="usBody">
            <ul>
              <li>Conocimiento técnico</li>
              <li>Experiencia en el rubro</li>
              <li>Personas con ganas de participar del proyecto</li>
              <li>Bajo costo inicial</li>
              <li>Relación con talleres, proveedores y repuesteras.</li>
            </ul>
          </p>
        </div>
        <div className="aboutUsContainer fifth">
          <h5 className="usTitle">Nuestro Análisis</h5>
          <p className="usBody">
            Actualmente las Compañías de Seguros establecidas en Mendoza de
            mayor renombre, tercerizan el servicio de peritajes y la
            capacitación de su personal. Las pericias son derivadas a peritos
            independientes o estudios privados, que no priorizan el trabajo
            solicitado. Nosotros venimos a{" "}
            <strong>
              <i>solucionar</i>
            </strong>{" "}
            ese problema.
          </p>
        </div>
        <div className="aboutUsContainer sixth">
          <h5 className="usTitle">¿Qué hacemos?</h5>
          <p className="usBody">
            Nuestro trabajo es brindar servicios de peritajes en nuestro centro
            de inspección, capacitación, investigación de métodos de reparación
            de daños materiales, liquidaciones de sin iestros, auditorías
            externas e internas de daños materiales, desarrollos de tecnologías
            aplicadas a peritaciones en modo real, convenio de precios con
            talleres homologados y repuesteras locales.
          </p>
        </div>
      </div>
    </div>
   
    <StaffGallery/>
    </>
  );
}

export default Quienesomos;
