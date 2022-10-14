import React, { useEffect } from 'react'
// import Users from '../Users/Users'
import { useDispatch } from 'react-redux'
import { getCasesAction, getPeritos, peritosByName } from '../../Store/Actions'
import SearchBar from '../SearchBar/SearchBar'
// import AddCases from '../InputsSelects/AddCase/Ad
// import AddModals from '../Modals/AddModals'

function Home() {
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
    <div>
      <h1>Buscar como va su patente</h1>
      <SearchBar />
    </div>
  )
}

export default Home
