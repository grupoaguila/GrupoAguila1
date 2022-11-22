import React from "react";

import EditModal from "../../Modals/EditModal";
// import './Paginas.css'
export const defaultSorted = [{
    dataField: 'Vencimiento',
    order: 'desc',
   
  }];

export const columnsPeritos=[
    {
        dataField: 'nombre',// es el identificador de la columna, asi que cada atributo debe coincidir con el dataField
        text:'Apellido y Nombre',
        // sortable:true, //permite que se ordene por este elemento
        // grow:1.5
          
        sort:true,
    },
    {
        dataField:'email',
        text:'Email',
        sortable:'false',
        // grow:1.5
    },
    {
        dataField:'celular',
        text:'N° de contacto',
        sort:true,
       
    },
    {
        dataField: 'rol',
        text:'Rol',
        // sort:true,
        // grow:1.5,
        // highlightOnHover:true,
        
    },
  ]
 
  export  const sizePerPageRenderer = ({
    options,
    currSizePerPage,
    onSizePerPageChange
  }) => (
    <div className="btn-group" role="group">
      {
        options.map((option) => {
          const isSelect = currSizePerPage === `${option.page}`;
          return (
            <button
              key={ option.text }
              type="button"
              onClick={ () => onSizePerPageChange(option.page) }
              className={ `btn ${isSelect ? 'btn-secondary' : 'btn-warning'}` }
            >
              { option.text }
            </button>
          );
        })
      }
    </div>
  );
  
 export  const options = {
    sizePerPageRenderer
  };
  


