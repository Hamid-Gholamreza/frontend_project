import React, { EventHandler, FormEvent, useState } from "react";
import { Link } from "react-router-dom";


function LoginForm(): JSX.Element {

    const [formData, setFormData] = useState({
        username: '',
        password: '',
    });



    return (
            <div className="w-[400px] h-[550px] rounded-[10px] shadow-md shadow-gray-400">
                <form className="w-full h-full flex flex-col justify-center items-center gap-5 relative">
                <div className="flex justify-center items-center bg-blue-700 w-full h-10 absolute top-0
                        rounded-t-[10px]">
                    <Link to={'/login'} className="block w-1/2 h-full text-center text-white hover:rounded-tl-[10px] pt-2">ورود</Link>
                    <Link to={'/register'} className="block w-1/2 h-full text-center text-white bg-blue-500
                    hover:bg-blue-600 rounded-tr-[10px] pt-2">ثبت نام</Link>
                </div>
                    <h1 className="pb-8 font-semibold">ورود به حساب کاربری</h1>
                    <div className="">
                        <label htmlFor="" className="block w-full rtl mb-3 text-right text-sm">نام کاربری</label>
                        <input type="text" 
                        className="pr-4 rounded-[50px] w-[270px] h-8 border-[2px] border-blue-500 text-right text-sm box-border
                        focus:outline-none focus:ring-blue-500 focus:ring-[2px] focus:border-none" 
                        placeholder="نام کاربری" 
                        name="username"/>
                    </div>
                    <div className="">
                        <label htmlFor="" className="block w-full rtl mb-3 text-right text-sm">کلمه عبور</label>
                        <input type="password" 
                        className="pr-4 rounded-[50px] w-[270px] h-8 border-[2px] border-blue-500 text-right text-sm box-border
                        focus:outline-none focus:ring-blue-400 focus:ring-[2px] focus:border-none" 
                        placeholder="کلمه عبور"
                        name="password" />
                    </div>
                    <div className="inline-flex flex-col gap-3">
                        <div>
                        <button type="submit" className="w-[270px] h-9 transition bg-blue-500 rounded-[50px] py-1 mt-2 text-white hover:bg-green-00
                        hover:text-white hover:font-bold hover:bg-blue-600 duration-300 ease-in-out">ورود</button>
                        </div>
                    </div>
                </form>
            </div>
        );
}

export default LoginForm;


