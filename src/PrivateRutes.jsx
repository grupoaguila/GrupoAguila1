import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";

export const PrivateRoute = ({ children }) => {

 

    const [component, setComponent] = useState([]);

    const emailUser = JSON.parse(localStorage.getItem("emailUser"));
    
    useEffect(() => {
        
            if( emailUser ){
                
                setComponent( children );
            }
            else{
               setComponent( <Navigate to="/login" /> )
            }
        ;
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [children]);

    return component;    
}