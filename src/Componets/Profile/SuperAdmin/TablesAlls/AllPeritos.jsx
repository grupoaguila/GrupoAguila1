import React from 'react';
import { useSelector } from 'react-redux';
import PeritosTableResponsive from '../../../tableTest/PeritosTableTest';
import {columnsPeritos, peritosEditRol} from '../peritosColumns'


function AllPeritos({rol}) {
    console.log('TODOS LOS PERITOS')
    const cases = useSelector(state=>state.cases)
  const peritosByName = useSelector(state=>state.peritosByName)
  const peritos1 = useSelector(state=>state.peritos)
  const peritos=peritosEditRol(peritos1)

  return (
    <div>
        <PeritosTableResponsive cases={peritos} peritos1={peritos1} peritos={peritosByName} title={'TODOS LOS PERITOS'} columns={columnsPeritos}/>
    </div>
  )
}

export default AllPeritos