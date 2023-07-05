import React from 'react';
import { useSelector } from 'react-redux';
import TableResponsive from '../../../tableTest/TableTest';
import {columns} from '../colums2'

function PendingCases({rol, emailUser}) {
  
  const cases = useSelector(state=>state.cases)
  const peritos = useSelector(state=>state.peritos)
  let peritoAsig= peritos.find(el=>el.email===emailUser)
  //  console.log('peritoAsig', peritoAsig)
  
  let cases1=cases.filter(el=>el.perito===peritoAsig.nombre)
  //  console.log('cases1', cases1);
  
  cases1.sort((a,b)=>{ 
    const dayA=a.Vencimiento.split("-")
    const dayB=b.Vencimiento.split("-")
    const VencimientoA= new Date(`${dayA[1]}/${dayA[0]}/${dayA[2]}`)
    const VencimientoB= new Date(`${dayB[1]}/${dayB[0]}/${dayB[2]}`)
    if(VencimientoA<VencimientoB){
      return -1;
    }
    if(VencimientoA>VencimientoB){
      return 1
    }
    return 0;

  })
    const peritosByName = useSelector(state=>state.peritosByName)
    const cases2= cases1.filter(el=>el.estado!=='Pericia finalizada')
    return (
      <div>
          <TableResponsive cases={cases2} peritos={peritosByName} title={'PERICIAS PENDIENTES'} columns={columns} rol={rol}/>
      </div>
    )
}

export default PendingCases