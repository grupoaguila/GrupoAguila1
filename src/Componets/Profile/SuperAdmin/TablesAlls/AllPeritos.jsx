import React from 'react';
import { useSelector } from 'react-redux';
import PeritosTableResponsive from '../../../tableTest/PeritosTableTest';
import {columnsPeritos} from '../peritosColumns'


function AllPeritos({rol}) {
    console.log('TODOS LOS PERITOS')
    const cases = useSelector(state=>state.cases)
  const peritosByName = useSelector(state=>state.peritosByName)
  const peritos = useSelector(state=>state.peritos)
  return (
    <div>
        <PeritosTableResponsive cases={peritos} peritos={peritosByName} title={'TODOS LOS PERITOS'} columns={columnsPeritos}/>
    </div>
  )
}

export default AllPeritos