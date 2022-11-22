import React from "react";
import EditModal from "../../Modals/EditModal";
// import './Paginas.css'
export const defaultSorted = [{
    dataField: 'Vencimiento',
    order: 'desc',
   
  }];
export const columns=[
    {
        dataField: 'Vencimiento',// es el identificador de la columna, asi que cada atributo debe coincidir con el dataField
        text:'Vencimiento',
        // sortable:true, //permite que se ordene por este elemento
        // grow:1.5
          
        sort:true,
    },
    {
        dataField:'Numero',
        text:'N° de Denuncia',
        sortable:'false',
        // grow:1.5
    },
    {
        dataField:'Compañia',
        text:'Compañía',
        sort:true,
       
    },
    {
        dataField: 'Nombre',
        text:'Asegurado',
        // sort:true,
        // grow:1.5,
        // highlightOnHover:true,
        
    },
    {
        dataField:'Patente',
        text:'Patente',
        sortable: true,
        // grow:'flex-grow'
    },
    {
        dataField: 'Marca',
        text:'Marca/Modelo',
        sortable:false,
        // grow:'flex-grow'
    },
    {
        dataField:'direccion',
        text:'Dirección',
        sortable:false,
        // grow:'flex-grow'
    },
    {
        dataField:'localidad',
        text:'Localidad',
        // sortable:true,
        // grow:'flex-grow'
    },
    {
        dataField:'celular',
        text:'N° de contacto',
        // sortable:true,
        // grow:'2',
        highlightOnHover:true
    },
  
    {
        dataField: 'estado',
        text:'Estado',
        // sortable: false,
        // grow:'flex-grow',
        
    },
    {
        dataField:'perito',
        text:'Perito',
        //     formatter: cell => selectOptions[cell],
    // filter: selectFilter({
    //   options: selectOptions
    // })
  
        // sortable: true,
        // grow:'flex-grow'
    },
    {
        dataField:'notas',
        text:'Notas Extras',
        // sortable: false,
        // grow:'flex-grow'
    },
    {
      dataField:'taller',
      text:'Repuestos/Taller',
      // sortable: false,
      // grow:'flex-grow'
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
  


