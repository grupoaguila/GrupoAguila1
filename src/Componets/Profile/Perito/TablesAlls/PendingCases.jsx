import React from 'react';
import { useSelector } from 'react-redux';
import TableResponsive from '../../../tableTest/TableTest';
import {columns} from '../colums2'

function PendingCases({rol, cases}) {
    const peritosByName = useSelector(state=>state.peritosByName)
    const cases1= cases.filter(el=>el.estado!=='Pericia finalizada')
    return (
      <div>
          <TableResponsive cases={cases1} peritos={peritosByName} title={'PERICIAS PENDIENTES'} columns={columns} rol={rol}/>
      </div>
    )
}

export default PendingCases