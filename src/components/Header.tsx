import React from "react";
import { Link } from "react-router-dom";


function Header():JSX.Element {

    return (
        <header className="fixed bg-blue-500 w-full h-[50px] z-1 flex justify-start items-center">
            <div className="w-full h-full flex justify-start items-center gap-8">
                <div className="ml-6 hover:border-b-2 border-black">
                    <Link to={'/register'}>ثبت نام</Link>
                </div>
                <div className="hover:border-b-2 border-black">
                    <Link to={'/login'}>ورود</Link>
                </div>
            </div>
        </header>
    )
}

export default Header;