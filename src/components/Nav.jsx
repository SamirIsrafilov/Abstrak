
import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Logo from '../img/project/logo.svg';
import { HiMenuAlt3 } from 'react-icons/hi';
import { FiChevronDown } from 'react-icons/fi';
import { GrSearch } from 'react-icons/gr';
import { FaPhone } from 'react-icons/fa';
import { GiRotaryPhone } from 'react-icons/gi';
import { FaFacebookF } from 'react-icons/fa';
import { BsTwitter } from 'react-icons/bs';
import { FaLinkedinIn } from 'react-icons/fa';
import { FaBehance } from 'react-icons/fa';





const Nav = () => {
  const [navSize, setnavSize] = useState("10rem");
  const [navColor, setnavColor] = useState("transparent");
  const listenScrollEvent = () => {
    window.scrollY > 10 ? setnavColor("#fff") : setnavColor("transparent");
    window.scrollY > 10 ? setnavSize("6rem") : setnavSize("10rem");
  };
  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, []);
  return (

    <div className='container-fluid d-flex  align-items-center py-4 nav_menu' style={{
     
      backgroundColor: navColor,
      height: navSize,
      transition: "all 1s"
    }} >
      <nav className="navbar navbar-expand-lg " >
        <div className="container">
          <Link className="navbar-brand m-0" to="/"><img src={Logo} alt="Logo" id="logo" /></Link>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav  mb-2 mb-lg-0 me-5">
              <li className="nav-item">
                <NavLink className="nav-link mx-3 page_title" aria-current="page" to="/">Digital Agency <FiChevronDown /></NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link mx-3 page_title" to="/">Services <FiChevronDown /></NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link mx-3 page_title" to="/">Portfolio <FiChevronDown /></NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link mx-3 page_title" to="/">Pages <FiChevronDown /></NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link mx-3 page_title" to="/">Blog <FiChevronDown /></NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link mx-3 page_title text-muted" to="/">Contact</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className='canva'>
        <button className="btn btn-light rounded-circle fs-4 d-flex justify-content-center align-items-center" id="canva_btn" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"><HiMenuAlt3 /></button>
        <div className="offcanvas offcanvas-end" style={{ width: "900px" }} tabIndex={-1} id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
          <div className="offcanvas-header" id="canva_header">
            <button type="button" className="btn-close me-auto mt-3 ms-3 fs-4" data-bs-dismiss="offcanvas" aria-label="Close" />
          </div>
          <div className="offcanvas-body" id='canva_body' >
            <div className="input-group mb-3 canva_input" >
              <input type="text" className="form-control fs-1" placeholder="Search..." aria-label="Username" aria-describedby="basic-addon1" />
              <span className="input-group-text " ><GrSearch /></span>
            </div>

            <div className="container text-center mt-5 ms-3 canva_menu" id='canva_menu' >
              <div className="row">
                <div className="col">
                  <ul className='list-unstyled text-start'>
                    <li><a href="#">Digital Agency</a></li>
                    <li><a href="#">Creative Agency</a></li>
                    <li><a href="#">Personal Portfolio</a></li>
                    <li><a href="#">Home Startup</a></li>
                    <li><a href="#">Corporate Agency</a></li>
                  </ul>
                </div>
                <div className="col text-start">
                  <h5 className='mt-5 mb-3 '>Contact Information</h5>
                  <p >Theodore Lowe, Ap #867-859<br />
                    Sit Rd, Azusa New York</p>

                  <h5 className='mt-4'>We're Available 24/7. Call Now.</h5>
                  <span className='text-muted my-5'><FaPhone /> (888) 456-2790</span><br />
                  <span className='text-muted'><GiRotaryPhone /> (121) 255-53333</span>
                  <h5 className='mt-4'>Find us here</h5>
                  <ul className='d-flex list-unstyled socials m-0'>
                    <li className='mx-2 d-flex justify-content-center align-items-center'><a href="#"><FaFacebookF /></a></li>
                    <li className='mx-2 d-flex justify-content-center align-items-center'><a href="#"><BsTwitter /></a></li>
                    <li className='mx-2 d-flex justify-content-center align-items-center'><a href="#"><FaBehance /></a></li>
                    <li className='mx-2 d-flex justify-content-center align-items-center'><a href="#"><FaLinkedinIn /></a></li>

                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>

  )
}

export default Nav