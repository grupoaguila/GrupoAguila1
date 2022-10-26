import React from 'react';
import { useSelector } from 'react-redux';
import TableResponsive from '../../../tableTest/TableTest';
import {columns} from '../colums2'

function CompletedCases({rol}) {
    const cases1 = useSelector(state=>state.cases)
    const peritosByName = useSelector(state=>state.peritosByName)
    const cases= cases1.filter(el=>el.estado==='Pericia finalizada')
    /* console.log('casesCompleted', cases);
    console.log('cases', cases1); */
    return (
      <div>
          <TableResponsive cases={cases} peritos={peritosByName} title={'PERICIAS FINALIZADAS'} columns={columns} rol={rol} />
      </div>
  )
}

export default CompletedCases