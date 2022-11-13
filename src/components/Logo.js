import React from "react";
import logoPrincipal from '../img/logo.png';
import '../css/Logo.css';

function Logo(){
    return(
        <div className="logoPrincipal">
            <img src={logoPrincipal} className="logo" alt="Logo principal" />
        </div>
    );
}

export default Logo;