import React from "react";
import Link from "next/link";
import { Button } from "./button";
import Image from "next/image";

const navbar = () => {
  return (
    <div>
      <nav
        className="bg-title fixed z-50 bg-clip-padding backdrop-filter backdrop-blur-md"
        style={{ width: "100vw" }}
      >
        <div className="w-full mx-auto px-12">
          <div className="flex items-center justify-between h-24">
            <div className="flex-shrink-0">
              <Link href="/">
                <Button className="bg-transparent h-fit hover:bg-transparent transition-transform duration-300 transform hover:scale-110">
                  <Image
                    src="/assets/logo1.png"
                    alt="logo"
                    draggable="false"
                    width={150}
                    height={150}
                  />
                </Button>
              </Link>
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
};

export default navbar;
