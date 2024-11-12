import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContex } from "../AuthProvider/AuthProvider";

const Navbar = () => {
 const {user,signOutUser}=useContext(AuthContex)
 const  link = <>
     <NavLink className={({ isActive }) => (isActive ? 'bg-red-500 text-white px-3 py-1 text-center rounded-lg' : '')} to="/">Home</NavLink>
     <NavLink className={({ isActive }) => (isActive ? 'bg-red-500 text-white px-3 py-1 text-center rounded-lg' : '')} to="/menu">Menu</NavLink>
     <NavLink className={({ isActive }) => (isActive ? 'bg-red-500 text-white px-3 py-1 text-center rounded-lg' : '')} to="/login">Login</NavLink>
     <NavLink className={({ isActive }) => (isActive ? 'bg-red-500 text-white px-3 py-1 text-center rounded-lg' : '')} to="/register">Register</NavLink>
      {
       user && <>
              <NavLink className={({ isActive }) => (isActive ? 'bg-red-500 text-white px-3 py-1 text-center rounded-lg' : '')} to="/private">Private</NavLink>
              <NavLink className={({ isActive }) => (isActive ? 'bg-red-500 text-white px-3 py-1 text-center rounded-lg' : '')} to="/profile">Profile</NavLink>
       </> 
      }
    </>
    const handleSignOut=()=>{
          signOutUser()
          .then(()=>{
            console.log("User SinOut successful");
            alert("User Sinout successful");
          })
          .catch((error)=>{
             console.log("Error",error.message);
          })
    }
    return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu gap-4 flex menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
             {link}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">Firebase</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal gap-4 flex px-1">
            {link}
          </ul>
        </div>
        <div className="navbar-end ml-4">
          {
           user ?
           <>
           <span>{user?.email}</span>
            <a className="btn mx-2" onClick={handleSignOut}>SignOut</a>
           </>
           :<Link to="/login">Login</Link>
          }
        </div>
      </div>
    </div>
  );
};

export default Navbar;
