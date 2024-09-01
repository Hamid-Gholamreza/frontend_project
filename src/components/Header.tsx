import React from "react";
import { Link } from "react-router-dom";


function Header():JSX.Element {

    return (
        <header className="fixed">
            <div className="w-full h-full flex justify-start items-center gap-8 pt-5">
                <div className="ml-3 hover:border-b-2 border-black">
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