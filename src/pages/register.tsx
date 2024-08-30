import React from "react";
import RegistrationForm from "../components/auth/RegistrationForm";

function register():JSX.Element {

    return(
        <div className="w-full h-[100vh] flex justify-center items-center">
            <RegistrationForm />
        </div>
    )
}

export default register;