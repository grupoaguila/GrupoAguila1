import React, { Component} from "react";
import car from "../../../assets/car.gif";
import BootstrapTable from "react-bootstrap-table-next";
import filterFactory, { textFilter } from "react-bootstrap-table2-filter";
import paginationFactory from "react-bootstrap-table2-paginator";
import {columns, options} from './colums2'
// import { Menu, Item, Separator, Submenu, MenuProvider } from "react-contexify";
// import "../node_modules/react-contexify/dist/ReactContexify.min.css";
// import Popup from "reactjs-popup";
// import DatePicker from "react-datepicker";
// import { FaArrowAltCircleRight, FaMap, FaPlusCircle } from "react-icons/fa";
// import "react-datepicker/dist/react-datepicker.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";


const selectOptions = {
  0: "Dispatched",
  1: "Finished"
};
const defaultSorted = [
  {
    dataField: "name",
    order: "desc"
  }
];

const data = [
  {
    name: "13:30 Vardiyası",
    vehicle: "Fenertepe",
    time: "13:12",
    driver: "Tanır Nalbant",
    helper: "-",
    performance: "66 / 103",
    status: selectOptions[0]
  },
  {
    name: "13:30 Vardiyası",
    vehicle: "Boğazköy",
    time: "13:11",
    driver: "Selçuk Yurt",
    helper: "-",
    performance: "58 / 85",
    status: selectOptions[1]
  },
  {
    name: "07:30 Vardiyası",
    vehicle: "Başakşehir",
    time: "07:30",
    driver: "Emri Akça",
    helper: "-",
    performance: "108 / 148",
    status: selectOptions[1]
  },
  {
    name: "07:30 Vardiyası",
    vehicle: "4. 5. Etap",
    time: "07:30",
    driver: "Yaşar Demir",
    helper: "-",
    performance: "121 / 138",
    status: selectOptions[1]
  },
  {
    name: "07:30 Vardiyası",
    vehicle: "Kayaşehir",
    time: "07:30",
    driver: "Ömer Osman Ekiz",
    helper: "-",
    performance: "97 / 146",
    status: selectOptions[1]
  },
  {
    name: "07:30 Vardiyası",
    vehicle: "Bahçeşehir",
    time: "07:30",
    driver: "Murat Uçanoğlu",
    helper: "-",
    performance: "55 / 107",
    status: selectOptions[1]
  },
  {
    name: "07:30 Vardiyası",
    
    time: "07:30",
    driver: "Mahmut Mercan",
    helper: "-",
    performance: "52 / 98",
    status: selectOptions[1]
  }
];
// const columns = [
//   {
//     dataField: "name",
//     text: "Name",
//     sort: true,
//     filter: textFilter({
//       placeholder: "Search"
//     }),
//     classes: "cellWeight600"
//   },
//   {
//     dataField: "vehicle",
//     text: "Vehicle",
//     sort: true,
//     filter: textFilter({
//       placeholder: "Search"
//     }),
//     classes: "pointer",
//     events: {
//       onClick: (e, column, columnIndex, row, rowIndex) => {
//         console.log(e);
//       }
//     }
//   },
//   {
//     dataField: "time",
//     text: "Time",
//     sort: true,
//     filter: textFilter({
//       placeholder: "Search"
//     })
//   },
//   {
//     dataField: "driver",
//     text: "Driver",
//     sort: true,
//     filter: textFilter({
//       placeholder: "Search"
//     })
//   },
//   {
//     dataField: "helper",
//     text: "Helper",
//     sort: true,
//     filter: textFilter({
//       placeholder: "Search"
//     })
//   },
//   {
//     dataField: "performance",
//     text: "Performance",
//     sort: true,
//     filter: textFilter({
//       placeholder: "Search"
//     })
//   },
//   {
//     dataField: "status",
//     text: "Status",
//     sort: true,
//     filter: textFilter({
//       placeholder: "Search"
//     }),
//     classes: function callback(cell) {
//       return cell;
//     }
//   }
// ];

// const handlesClick = function(name) {
//   console.log(name);
// };

class TableAddCase extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: new Date(),
      
    };
    
  }
  

//   handleChange(date) {
//     this.setState({
//       startDate: date
//     });
//   }

//   handleClick() {
//     this.setState(state => ({
//       //set the state for icons
//     }));
//     console.log(this.state);
//   }

  render() {
   

  // useEffect(() => {
  //   setLoader(true);
  //   setTimeout(() => {
  //     setLoader(false);
  //   }, 3000);
  // }, []);
    return (
      <React.Fragment>
      
        <div className="App">
          
          <BootstrapTable
            classes="customBootStrapClasses"
            bordered={false}
            bootstrap4={true}
            hover={true}
            keyField="driver"
            data={this.props.cases}
            columns={columns}
            defaultSorted={defaultSorted}
            filter={filterFactory()}
          />
        </div>
     
      </React.Fragment>
    );
  }
}

export default TableAddCase;
