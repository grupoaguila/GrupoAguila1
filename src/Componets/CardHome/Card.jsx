import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import car from '../../assets/car.gif'
import './CardHome.css'

function Card({consult}) {
  const[loader, setLoader]= useState(false)
  const dispatch = useDispatch()

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
          ): 
          <div className='cardHomeContainer'> 
          <div className="parrafosContainer">

              <p className='parrafosCardHome'><span>Asegurado:</span> <strong>{consult[0].Nombre}</strong>
              </p>
              <p className='parrafosCardHome'><span>Patente:</span>  {consult[0].Patente}</p>

              <p className='parrafosCardHome'><span>Estado del caso: </span>
                {consult[0].estado === 'Pericia finalizada' ? <span className='ended'>{consult[0].estado}</span> : consult[0].estado}
              </p>
              
              <p className='parrafosCardHome'><span>El Perito encargado es: </span>{consult[0].perito}</p>
          </div>
          </div>
        }

      </>
  )
}

export default Card