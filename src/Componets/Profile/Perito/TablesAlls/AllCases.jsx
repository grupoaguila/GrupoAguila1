import React from 'react';
import { useSelector } from 'react-redux';
import TableResponsive from '../../../tableTest/TableTest';
import {columns} from '../colums2'


function AllCases({rol, cases}) {
  const peritosByName = useSelector(state=>state.peritosByName)
  return (
    <div>
        <TableResponsive cases={cases} peritos={peritosByName} title={'TODAS LAS PERICIAS'} columns={columns} rol={rol}/>
    </div>
  )
}

export default AllCases