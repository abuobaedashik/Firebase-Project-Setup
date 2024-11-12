import React, { useContext } from 'react';
import { AuthContex } from '../AuthProvider/AuthProvider';

const Home = () => {
   const {name,get} =useContext(AuthContex)
   console.log(name);
    return (
        <div>
            Home
           <span> {name} </span> 
            {get}
        </div>
    );
};

export default Home;