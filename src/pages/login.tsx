import React from "react";
import LoginForm from "../components/LoginForm";


function login(): JSX.Element {

    return (
        <div className="w-full h-[100vh] flex justify-center">
            <LoginForm />
        </div>
    );
}

export default login;