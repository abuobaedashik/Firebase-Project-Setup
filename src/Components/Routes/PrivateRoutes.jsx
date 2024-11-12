import React, { useContext } from 'react';
import { AuthContex } from '../AuthProvider/AuthProvider';
import { Navigate } from 'react-router-dom';

const PrivateRoutes = ({children}) => {
   const {user,loading}=useContext(AuthContex)
   if (loading) {
    return <span className="loading loading-spinner text-primary text-center ml-80"></span>

   }
   if (user) {
     return children
   }
    return (
        <Navigate to='/login'>
            
        </Navigate>
    );
};

export default PrivateRoutes;