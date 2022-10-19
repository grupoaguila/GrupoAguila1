import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import car from '../../assets/car.gif'

function Card({consult}) {
  const[loader, setLoader]= useState(false)
  const dispatch = useDispatch()

  useEffect(() => {
    setLoader(true)
    setTimeout(() => {
        setLoader(false)
    }, 3000)
}, [])


  

  
    return (
    <div>
        {
          loader ? (
            <img src={car} alt="Cargando" width="350px" />
          ): <div> 
            <p>hola {consult[0].Nombre}
            </p>
            <p>El estado de su Patente: {consult[0].Patente}</p>
            <p>Es  {consult[0].estado}</p>
            <p>El Perito que lleva su caso es  {consult[0].perito}</p>
          </div>
        }

      </div>
  )
}

export default Card