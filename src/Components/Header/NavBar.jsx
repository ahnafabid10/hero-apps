import React from 'react';
import logo from '../../../src/assets/logo.png'
import { NavLink } from 'react-router';
import { FaGithub } from "react-icons/fa";

const NavBar = () => {
    const links = <>
    <NavLink to={"/"}><li className='m-2 lg:m-5'>Home</li></NavLink>
    <NavLink to={"/apps"}><li className='m-2 lg:m-5'>Apps</li></NavLink>
    <NavLink to={"/installation"}><li className='m-2 lg:m-5'>Installation</li></NavLink>
    </>
    return (
        <div className='bg-base-100'>
            <div className="navbar max-w-[1440px] mx-auto shadow-sm ">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        {links}
      </ul>
    </div>
    <img className='w-[40px] h-[40px]' src={logo} alt="" />
    <h1 className='text-[#632EE3] font-bold ml-3 cursor-pointer'>HERO.IO</h1>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {links}
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn" href="https://github.com/ahnafabid10"><FaGithub />Contribute</a>
  </div>
</div>
        </div>
    );
};

export default NavBar;