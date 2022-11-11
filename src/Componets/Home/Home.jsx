import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getCasesAction, getPeritos, peritosByName } from "../../Store/Actions";
import SearchBar from "../SearchBar/SearchBar";
import EditModal from "../Modals/EditModal";
import Logo from '../../assets/grupoAguilaCanvaLogo.png';
import CarouselComponent from "../Carousel/CarouselComponent";
import './Home.css'

function Home() {
  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPeritos());
    dispatch(getCasesAction());
  }, []);

  useEffect(() => {
    setTimeout(() => {
      dispatch(peritosByName());
    }, 2500);
  }, []);


  return (
    <div className="homeContainer">

      <div className="welcomeTitle">
        <img src={Logo} alt="logo Aguila" />
        {/* <h1 className="bienvenido">Grupo Águila</h1>
        <h2 className="sloganPhrase">"Siempre es mejor el ojo de un experto"</h2> */}
      </div>

      <div className="carouselAndSearch">

        <div className="homeSecondContainer">
          <p className="homeTitle">Consulta el Estado de tu caso</p>
          <SearchBar />
          {/* <EditModal /> */}
        </div>

        <div className="carouselContainer">
        <CarouselComponent />
        </div>
      </div>

    </div>
  );
}

export default Home;
