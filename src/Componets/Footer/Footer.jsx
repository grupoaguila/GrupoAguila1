import React from 'react'
import { useLocation } from "react-router-dom";
import './Footer.css'

function Footer() {

    const { pathname } = useLocation();
    // console.log('esto es pathname en FOOTER',pathname);
    if (pathname === "/user") return null;
    return (
        <div className='footerMainContainer'>Footer</div>
    )

}

export default Footer


// const { pathname } = useLocation();
//   console.log(pathname);
//   // you can check a more conditions here
//   if (pathname === "/thanks") return null;

//   return <div className="footer">Footer</div>;
// };
// export { Footer };