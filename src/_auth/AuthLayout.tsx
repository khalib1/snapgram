import React from 'react'
import {Outlet, Navigate} from 'react-router-dom'

const AuthLayout =()=>{
 const isAuthenticated=false

 return(
  <>
  {isAuthenticated ? (
   <Navigate to='/'/>
  ): (
   <>
   <section className="flex flex-1 justify-center items-center flex-col py-5">
   <Outlet />
   </section>

   <img src="./assets/images/logo3.png" alt="logo" className=" x1:block h-screen w-1/2 object-cover bg-no-repeat"/>
   </>
  )}
  </>
  )

}


export default AuthLayout