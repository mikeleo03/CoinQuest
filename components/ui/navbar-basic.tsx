import React from "react";
import Link from 'next/link';

const navbar = () => {
    return (
        <div>
            <nav className="bg-title fixed z-50 bg-clip-padding backdrop-filter backdrop-blur-md" style={{width: "100vw"}}>
                <div className="w-full mx-auto px-12">
                    <div className="flex items-center justify-between h-24">
                        <div className="flex-shrink-0">
                            <a href="/">
                                <img className="h-12 w-auto" src="/assets/logo.png" alt="logo" draggable='false' />
                            </a>
                        </div>
                        <div className="items-center">
                            <div className="ml-10 flex items-center space-x-7">
                                <Link
                                    href="/login"
                                    className=" hover:scale-110 text-white border-white border-2 px-5 py-2 rounded-3xl text-[20px] font-medium font-poppins items-center transition-transform duration-300"
                                >
                                    Log In
                                </Link>
                                <Link
                                    href="/signup"
                                    className=" hover:scale-110 bg-black text-white px-5 py-2 rounded-3xl text-[20px] font-medium font-poppins items-center transition-transform duration-300"
                                >
                                    Sign Up
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default navbar;