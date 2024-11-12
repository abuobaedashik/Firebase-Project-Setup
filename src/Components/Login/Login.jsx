import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContex } from "../AuthProvider/AuthProvider";


const Login = () => {
    const navigate =useNavigate();
  const {signInUser,signInWithGoogle }=useContext(AuthContex)
  const handleLogin =(event)=>{
    event.preventDefault()
    const email =event.target.email.value
    const password =event.target.password.value
    console.log(email,password);
    signInUser(email,password)
    .then(result=>{
        console.log(result.user);
        event.target.reset();
        navigate('/private')
    })
    .catch(error=>{
        console.log('Error',error.message);
    })
  }
  const handleGoogleLogIn=()=>{
    signInWithGoogle()
    .then((result)=>{
      console.log(result.user);
      navigate('/')
    })
    .catch(error=>{
      console.log('Error',error.message);
    })
  }
  
    return (
    <div className="card  w-full shrink-0 shadow-md mx-auto max-w-md">
      <form onSubmit={handleLogin} className="card-body pb-0">
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
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">
              Forgot password?
            </a>
          </label>
        </div>
        <div className="form-control mt-5">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
      <p className="ml-8 mt-2 mb-5">If you use Login First time ! Please <Link className="underline text-blue-500 font-medium" to="/register">Register</Link></p>
      <div onClick={handleGoogleLogIn} className="mt-3 ml-8 font-bold btn-md">Google</div>
    </div>
  );
};

export default Login;
