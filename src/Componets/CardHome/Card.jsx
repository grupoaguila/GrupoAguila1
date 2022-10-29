import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import car from '../../assets/car.gif'
import './CardHome.css'

function Card({ consult, clearConsult }) {
  const [loader, setLoader] = useState(false)
  const dispatch = useDispatch()
  const peritos=useSelector(states=>states.peritos)
  const infoPerito= peritos.filter(e=>e.nombre===consult[0].perito)
  console.log(infoPerito)

  useEffect(() => {
    setLoader(true)
    setTimeout(() => {
      setLoader(false)
    }, 2000)
  }, [])



  return (
    <>
      {
        loader ? (
          <img src={car} alt="Cargando" width="350px" />
        ) :
          <div className='cardHomeContainer'>
            <div className="parrafosContainer">
              <p className='parrafosCardHome'><span>Asegurado:</span> <strong>{consult[0].Nombre}</strong>
              </p>

              <button className='cardCloseButton' onClick={() => clearConsult()}>X</button>

              <p className='parrafosCardHome'><span>Patente:</span>  {consult[0].Patente}</p>
              <p className='parrafosCardHome'><span>Aseguradora:</span>  {consult[0].Compañia}</p>

              <p className='parrafosCardHome'><span>Estado del caso: </span>
                {!consult[0].estado && "Sin Completar"}
                {consult[0].estado === 'Pericia finalizada' ? <span className='ended'>{consult[0].estado}</span> : consult[0].estado}
              </p>

              <p className='parrafosCardHome'><span>El Perito encargado es: </span>{consult[0].perito}</p>
              <p className='parrafosCardHome'><span>Telefono:</span>  {infoPerito[0].celular}</p>
              <p className='parrafosCardHome'><span>Notas Extras:</span>  {!consult[0].notas ? "Sin Completar" : consult[0].notas}</p>
              <p className='parrafosCardHome'><span>Repuestos/Taller</span> "Sin Completar" </p>
            </div>
          </div>
      }

    </>
  )
}

export default Card