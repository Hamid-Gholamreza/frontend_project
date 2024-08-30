import React from "react";
import LoginForm from "../components/auth/LoginForm";


function login(): JSX.Element {

    return (
        <div className="w-full h-[100vh] flex justify-center items-center">
            <LoginForm />
        </div>
    );
}

export default login;