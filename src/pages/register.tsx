import React from "react";
import RegistrationForm from "../components/auth/RegistrationForm";
import registerImage from '../images/register-background.jpg';

function register():JSX.Element {

    return(
        <div className="w-full h-[100vh] flex justify-between items-center">
            <div className="h-full flex justify-center items-center w-full">
                <img src={registerImage} alt="" className="w-2/3 h-2/3 ml-0 rounded-xl" />
            </div>
            <div className="mr-[80px]">
                <RegistrationForm />
            </div>
        </div>
    )
}

export default register;