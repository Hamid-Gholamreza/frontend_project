import React from "react";
import { Link } from "react-router-dom";


function RegistrationForm(): JSX.Element {
    return (
        <div className="w-[400px] h-[550px] rounded-[10px] shadow-md shadow-gray-400">
            
            <form className="w-full h-full flex flex-col justify-center items-center gap-3 relative">
                <div className="flex justify-center items-center bg-blue-500 w-full h-10 absolute top-0
                        rounded-t-[10px]">
                    <Link to={'/login'} className="block w-1/2 h-full text-center text-white text-center hover:bg-blue-600
                        hover:rounded-tl-[10px] pt-2">ورود</Link>
                    <Link to={'/register'} className="block w-1/2 h-full text-center text-white text-center bg-blue-700
                    rounded-tr-[10px] pt-2">ثبت نام</Link>
                </div>
                <h1 className="py-5 font-semibold">ثبت نام</h1>
                <div className="">
                    <label htmlFor="" className="block w-full rtl mb-3 text-right text-sm">نام کاربری</label>
                    <input type="text" className="pr-4 rounded-[50px] w-[270px] h-8 border-[2px] border-blue-500 text-right text-sm
                    focus:outline-none focus:ring-[2px] focus:ring-blue-600 focus:border-none" placeholder="نام کاربری" />
                </div>
                <div className="">
                    <label htmlFor="" className="block w-full rtl mb-3 text-right text-sm">ایمیل</label>
                    <input type="email" className="pr-4 rounded-[50px] w-[270px] h-8 border-[2px] border-blue-500 text-right text-sm
                    focus:outline-none focus:ring-[2px] focus:ring-blue-600 focus:border-none" placeholder="ایمیل" />
                </div>
                <div className="">
                    <label htmlFor="" className="block w-full rtl mb-3 text-right text-sm">شماره همراه</label>
                    <input type="phone" className="pr-4 rounded-[50px] w-[270px] h-8 border-[2px] border-blue-500 text-right text-sm
                    focus:outline-none focus:ring-[2px] focus:ring-blue-600 focus:border-none" placeholder="شماره همراه" />
                </div>
                <div className="">
                    <label htmlFor="" className="block w-full rtl mb-3 text-right text-sm">کلمه عبور</label>
                    <input type="password" className="pr-4 rounded-[50px] w-[270px] h-8 border-[2px] border-blue-500 text-right text-sm
                    focus:outline-none focus:ring-[2px] focus:ring-blue-600 focus:border-none" placeholder="کلمه عبور" />
                </div>
                <div className="inline-flex flex-col gap-3 py-3">
                    <div>
                        <button type="submit" className="w-[270px] h-9 transition bg-blue-500 rounded-[50px] py-1 mt-2 text-white hover:bg-green-00
                            hover:text-white hover:font-bold hover:bg-blue-700 duration-300 ease-in-out">ثبت نام</button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default RegistrationForm;