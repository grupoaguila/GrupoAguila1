import React from "react";
import { textFilter } from "react-bootstrap-table2-filter";
import EditModal from "../../Modals/EditModal";
// import './Paginas.css'
export const defaultSorted = [{
    dataField: 'Vencimiento',
    order: 'desc',
   
  }];
export const columns=[
    {
        dataField: 'Vencimiento',// es el identificador de la columna, asi que cada atributo debe coincidir con el dataField
        text:'Fecha de Vencimiento',
        // sortable:true, //permite que se ordene por este elemento
        // grow:1.5
          
        sort:true,
    },
    {
        dataField:'Numero',
        text:'Número de Denuncia',
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
        text:'Apellido y Nombre',
        // sort:true,
        // grow:1.5,
        // highlightOnHover:true,
        filter: textFilter(
            { placeholder: 'Buscar Nombre',}
        ),
        classes: function callback(cell) {
            return cell;
          }
    },
    {
        dataField:'Patente',
        text:'Patente',
        sortable: true,
        // grow:'flex-grow'
    },
    {
        dataField: 'Marca',
        text:'Marca Modelo',
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
        filter: textFilter({
          delay: 1000, // default is 500ms
        //   style: {
        //     backgroundColor: 'yellow'
        //   },
        //   className: 'test-classname',
          placeholder: 'Buscar Localidad',
          onClick: e => console.log(e)
        })
        // sortable:true,
        // grow:'flex-grow'
    },
    {
        dataField:'celular',
        text:'Número de contacto',
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
        text:'Perito Designado',
        filter: textFilter(
           { placeholder: 'Buscar Perito',}
        )
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
       // dataField:'Editar',
        text:'Para Editar',
        // sortable: false,
        // grow:'flex-grow'
        cursor:PointerEvent,
        onclick:e=><EditModal/>
        // vehicle:(
        //   <div>
        //   <h1>hola</h1>
        //   <EditModal />
        //   </div>
        // )
       
      
    }
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
  