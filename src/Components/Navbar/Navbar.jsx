import React from 'react';
import "./Navbar.css";
import { BsFillPencilFill } from 'react-icons/bs';
import { AiOutlineSearch } from 'react-icons/ai';
import { HiShoppingCart } from 'react-icons/hi';
import {CgProfile} from 'react-icons/cg';
import logo from "../../assets/logo.png";

const Navbar = () => {
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
                        {/* Menu Starts from here */}

                        <div className='header-item item-center'>
                            <nav className='menu'>
                                <ul className='menu-main'>
                                    <li>
                                        <a href="#">WOMEN</a>
                                    </li>
                                    <li>
                                        <a href="#">MEN</a>
                                    </li>
                                    <li>
                                        <a href="#">HOME</a>
                                    </li>
                                    <li>
                                        <a href="#">KIDS</a>
                                    </li>
                                    <li>
                                        <a style={{ color: "red", fontWeight: "700" }} href="#">OFFERS</a>
                                    </li>
                                </ul>
                            </nav>
                        </div>

                        {/* Menu ends here */}

                        <div className='header-item item-right'>
                                <div className='icon-box'>
                                   <span className='icon-div'>
                                   <BsFillPencilFill className='header-icon' />
                                    <p className='icon-name'>SCRAPBOOKS</p>
                                   </span>
                                    
                                    <span className='icon-div'>
                                    <AiOutlineSearch className='header-icon' />
                                    <p className='icon-name'>SEARCH</p>
                                    </span>
                                    
                                    <span className='icon-div'>
                                    <HiShoppingCart className='header-icon'/>
                                    <p className='icon-name'>CART</p>
                                    </span>
                                    
                                    <span className='icon-div'>
                                    <CgProfile className='header-icon'/>
                                    <p className='icon-name'>PROFILE</p>
                                    </span>
                                    
                                </div>
                
                        </div>
                    </div>
                </div>
            </header>

            {/* Banner Start */}

            <section className='banner-section'>

            </section>

        </>
    )
}

export default Navbar
