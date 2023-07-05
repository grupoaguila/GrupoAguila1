import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getCasesAction, getPeritos, peritosByName } from '../../Store/Actions';
import SuperAdmin from './SuperAdmin/SuperAdmin';
import { getAuth, signOut } from "firebase/auth";
import firebaseApp from '../../Credentials/Index'
import Admin from './Admin/Admin';
import Perito from './Perito/Perito';
import Loading from '../../assets/car.gif'
const auth = getAuth(firebaseApp);
function Profile() {
  const peritos=useSelector(state=>state.peritos)
  const cases1=useSelector(state=>state.cases)
  const peritosByName1=useSelector(state=>state.peritosByName)
  let dispatch= useDispatch()
  useEffect(()=>{
    dispatch(getPeritos())
    dispatch(getCasesAction())
    setTimeout(()=>{ 
      dispatch(peritosByName())
    },2500)
  },[dispatch])
  const emailUser = JSON.parse(localStorage.getItem("emailUser"));
  const peritosAll=useSelector(state=>state.peritos)
   let  peritoUser=peritosAll?.find(e=>e.email===emailUser)
    // console.log('peritoUSer', peritoUser)

  return (
    <>
     {
      !peritos.length || !cases1.length || !peritosByName1.length &&(
        <div>
          <img src={Loading} width="50%"
            height="70%"/>
        </div>
      )
    }
    {
      peritoUser?.rol==='Administrador General' &&
            <SuperAdmin />
    }
     
    { 
      peritoUser?.rol==='Administrador junior' &&
            <Admin />
    }
    {
      peritoUser?.rol==='Tecnico' &&
            <Perito emailUser={emailUser}/>
    }
    </>
    
  )
}

export default React.memo(Profile) 