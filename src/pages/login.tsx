import React from "react";
import LoginForm from "../components/auth/LoginForm";
import backgroundImage from '../images/login-background.png';


function login(): JSX.Element {

    return (
        <div className="w-full h-[100vh] flex justify-between items-center">
            <div className="h-full flex justify-center items-center w-full">
                <img src={backgroundImage} alt="" className="w-2/3 h-2/3 ml-0 rounded-xl" />
            </div>
            <div className="mr-[80px]">
                <LoginForm />
            </div>
        </div>
    );
}

export default login;