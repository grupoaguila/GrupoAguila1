import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { getCasesAction, getPeritos, peritosByName } from '../../Store/Actions';
import SuperAdmin from './SuperAdmin/SuperAdmin';

function Profile() {
  let dispatch= useDispatch()
    useEffect(()=>{
     dispatch(getPeritos())
     dispatch(getCasesAction())
    },[])
   
    useEffect(()=>{      
     setTimeout(()=>{
       dispatch(peritosByName())
     },2500)
    
    },[])
  


  return (
    <>
    <SuperAdmin />
    </>
    
  )
}

export default Profile