import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContex } from "../AuthProvider/AuthProvider";

const Register = () => {
  const navigate =useNavigate()
  const {createUser}=useContext(AuthContex)
  const handleRegister =(event)=>{
    event.preventDefault()
    const name =event.target.name.value
    const email =event.target.email.value
    const password =event.target.password.value
    console.log(name,email,password);
    createUser(email,password)
    .then(result=>{
      console.log(result.user);
      event.target.reset();
      navigate('/')
    })
    .catch(error=>{
      console.log("Error",error.message);
    })
  }
  

    return (
      <div className="card  w-full shrink-0 shadow-md mx-auto max-w-md">
      <form onSubmit={handleRegister} className="card-body pb-0">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            type="text"
            placeholder="name"
            name="name"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            placeholder="email"
            name="email"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            type="password"
            placeholder="password"
            name="password"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control mt-5">
          <button className="btn btn-secondary">Register</button>
        </div>
      </form>
      <p className="ml-8 mt-2 mb-5">If you have an account! Please <Link className="underline text-blue-500 font-medium" to="/login">Login</Link></p>
    </div>
  );
};

export default Register;
