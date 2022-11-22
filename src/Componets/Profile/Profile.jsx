import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getCasesAction, getPeritos, peritosByName } from '../../Store/Actions';
import SuperAdmin from './SuperAdmin/SuperAdmin';
import { getAuth, signOut } from "firebase/auth";
import firebaseApp from '../../Credentials/Index'
import Admin from './Admin/Admin';
import Perito from './Perito/Perito';

const auth = getAuth(firebaseApp);
function Profile() {

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