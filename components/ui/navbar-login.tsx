import React from "react";
import { LogOut } from "lucide-react";

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
              <a href="/">
                <img
                  className="h-12 w-auto"
                  src="/assets/logo.png"
                  alt="logo"
                  draggable='false'
                />
              </a>
            </div>
            <div className="items-center">
              <div className="ml-10 flex items-center space-x-7">
                <a
                  href="/goals"
                  className=" hover:scale-110 text-white px-5 py-2 rounded-md text-[24px] font-medium font-poppins items-center transition-transform duration-300"
                >
                  Goals
                </a>
                <a
                  href="/courses"
                  className=" hover:scale-110 text-white px-5 py-2 rounded-md text-[24px] font-medium font-poppins items-center transition-transform duration-300"
                >
                  Course
                </a>
                <a
                  href="/profile"
                  className="text-white hover:scale-110 hover:text-white px-5 py-2 rounded-md font-medium font-poppins w-full transition-transform duration-300"
                >
                  <div className="flex flex-row space-x-3">
                    <div className="">
                      <img
                        className="h-12 w-auto"
                        src="/assets/default_profpic.png"
                        draggable='false'
                      />
                    </div>
                    <div className="">
                      <div className="text-[20px] font-riffic text-white">
                        Michael
                      </div>
                      <div className="text-[16px] font-poppins text-white">
                        Level : 3
                      </div>
                    </div>
                  </div>
                </a>
                <a className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-red-500 hover:bg-red-600 transition-transform duration-300 transform hover:scale-110">
                  <LogOut size={30} className="text-white" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default navbar;
