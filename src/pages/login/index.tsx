import React, { useEffect } from "react";
import { Redirect, useHistory } from "react-router-dom";
import LoginComponent from "../../components/login";
import { isUserLoggedIn } from "../../helpers/consts";

import "./login.css"

const LoginPage = () => {
  const history=useHistory()
  useEffect(()=>{
      const isLoggedIn=localStorage.getItem(isUserLoggedIn)
      if(isLoggedIn){
         history.replace("/")
      }
  },[])
    return (

        <div className="login_page" >
            <LoginComponent />
        </div>

    )
}

export default LoginPage;