import React from 'react';
import logo from "../../assets/Fashion-logo.png";
import "./Navbar_logo.css";


const Navbar_logo = () => {
  return (
    <>
    <header className='header'>
        <div className='container'>
            <div className='row v-center'>
                <div className='header-item item-left'>
                    <div className='logo'>
                        <img src={logo} alt="" />
                    </div>
                </div>
            </div>
        </div>
    </header>
</>
  )
}

export default Navbar_logo
