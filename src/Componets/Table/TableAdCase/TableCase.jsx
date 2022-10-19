import React, { useEffect, useState } from "react";
import BootstrapTable from "react-bootstrap-table-next";
import filterFactory, { textFilter } from "react-bootstrap-table2-filter";
import { columns, defaultSorted, options } from "./colums2";
import car from "../../../assets/car.gif";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";

function TableCase({ cases, title }) {
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    setLoader(true);
    setTimeout(() => {
      setLoader(false);
    }, 3000);
  }, []);

  return (
    <div className="App">
      {loader ? (
        <img src={car} alt="Cargando" width="400px" />
      ) : (
        <div>
          <h1>{title}</h1>
          <BootstrapTable
            classes="customBootStrapClasses"
            bordered={false}
            bootstrap4={true}
            hover={true}
            keyField="driver"
            data={cases}
            columns={columns}
            defaultSorted={defaultSorted}
            filter={filterFactory()}
            // pagination={paginationFactory()}
          />
        </div>
      )}
    </div>
  );
}

export default TableCase;
