import React from 'react';
import { useSelector } from 'react-redux';
import TableResponsive from '../../../tableTest/TableTest';
import {columns} from '../colums2'

function PendingCases() {
    const cases1 = useSelector(state=>state.cases)
    const peritosByName = useSelector(state=>state.peritosByName)
    const cases= cases1.filter(el=>el.estado!=='Pericia finalizada')
    return (
      <>
          <TableResponsive cases={cases} peritos={peritosByName} title={'PERICIAS PENDIENTES'} columns={columns}/>
      </>
    )
}

export default PendingCases