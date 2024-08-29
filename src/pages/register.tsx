import React from "react";
import RegisterationForm from "../components/RegistrationForm";

function register():JSX.Element {

    return(
        <div className="w-full h-[100vh] flex justify-center items-center">
            <RegisterationForm />
        </div>
    )
}

export default register;