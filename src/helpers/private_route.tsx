import React, { ReactNode } from "react";
import { Redirect, Route } from "react-router-dom";
import { isUserLoggedIn } from "./consts";

interface PrivateRouteProps{
    children:ReactNode;
    path:string
}

export const PrivateRoute=(props:PrivateRouteProps)=>{
    const {children,path}=props
    const isAuthenticated = localStorage.getItem(isUserLoggedIn);
    
    if (isAuthenticated ) {
      return (
          <Route path={path}>
              {children} 
          </Route>
      );
    }
      
    return <Redirect to="/login" />
}