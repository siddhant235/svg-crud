import React, { useState,useReducer } from "react";
import { Redirect, useHistory } from "react-router-dom";
import { isUserLoggedIn } from "../../helpers/consts";
import { ActionTypes } from "../../helpers/enums";
import { loginReducer } from "../../reducers/login/login";
import Button from "../../shared/ui/button/button";
import Card from "../../shared/ui/card/card";

import Input from "../../shared/ui/input/input";
import "./login.css"

const LoginComponent = () => {
    const [username, setUsername] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const history=useHistory()
    const [state , dispatch]=useReducer<any>(loginReducer,[])

    const handleSubmit=()=>{
        const loginData:{username:string,password:string}={

            username:username,
            password:password
        }
       //@ts-ignore
        dispatch({type:ActionTypes.LOGIN,data:loginData})

        if(localStorage.getItem(isUserLoggedIn)){
           history.push("/")
        }

        
    }
    return (
        <div className="login_container">
            <Card>
                <div className="login_card_content">
                    <h3>Login</h3>
                    <div className="login_username">
                        <label>Username</label>
                        <Input onChange={(e: React.ChangeEvent<HTMLInputElement>) => { setUsername(e.target.value) }} value={username} />
                    </div>

                    <div className="login_password">
                        <label>Password</label>
                        <Input onChange={(e: React.ChangeEvent<HTMLInputElement>) => { setPassword(e.target.value) }} value={password} />
                    </div>
                </div>
                <Button title="Submit" style={{ backgroundColor: "lightblue", height: "40px", fontWeight: "bold", fontSize: "18px" }} onClick={handleSubmit} />
            </Card>
        </div>

    )
}

export default LoginComponent