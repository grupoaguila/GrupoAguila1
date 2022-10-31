import React from 'react'
import { useLocation } from "react-router-dom";
import { CDBFooter, CDBBtn, CDBIcon,CDBBox} from 'cdbreact';
import LogoEagle from '../../assets/BN.png';


function Footer() {

    const { pathname } = useLocation();
    // console.log('esto es pathname en FOOTER',pathname);
    if (pathname === "/user") return null;
    return (
        // <div className='footerMainContainer'>Footer</div>
        <CDBFooter className="shadow">
            <CDBBox
                display="flex"
                justifyContent="between"
                alignItems="center"
                className="mx-auto py-4 flex-wrap"
                style={{ width: '80%' }}
            >
                <CDBBox display="flex" alignItems="center">
                    <div href="/" className="d-flex align-items-center p-0 text-dark">
                        <img
                            alt="logo"
                            src={LogoEagle}
                            width="30px"
                        />
                        <span className="ml-4 h5 mb-0 font-weight-bold">Aguila</span>
                    </div>
                    <small className="ml-2">&copy; Aguila, 2022. All rights reserved.</small>
                </CDBBox>
                <CDBBox display="flex">
                    <CDBBtn flat color="dark" className="p-2">
                        <CDBIcon fab icon="facebook-f" />
                    </CDBBtn>
                    <CDBBtn flat color="dark" className="mx-3 p-2">
                        <CDBIcon fab icon="twitter" />
                    </CDBBtn>
                    <CDBBtn flat color="dark" className="p-2">
                        <CDBIcon fab icon="instagram" />
                    </CDBBtn>
                </CDBBox>
            </CDBBox>
        </CDBFooter>
    );


}

export default Footer

