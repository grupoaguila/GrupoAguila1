import React from 'react';
import { useSelector } from 'react-redux';
import PeritosTableResponsive from '../../../tableTest/PeritosTableTest';
import {columnsPeritos, peritosEditRol} from '../peritosColumns'


function AllPeritos({rol}) {
    // console.log('TODOS LOS PERITOS')
    const cases = useSelector(state=>state.cases)
  const peritosByName = useSelector(state=>state.peritosByName)
  const peritos1 = useSelector(state=>state.peritos)
 
 
 

  return (
    <div>
        <PeritosTableResponsive cases={peritos1} peritos={peritosByName} title={'TODOS LOS PERITOS'} columns={columnsPeritos}/>
    </div>
  )
}

export default AllPeritos