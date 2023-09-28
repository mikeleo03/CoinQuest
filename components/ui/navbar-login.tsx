"use client";

import React, { useState, useEffect } from "react";
import { LogOut } from "lucide-react";
import Link from "next/link";

const navbar = () => {
  const [user, setUser] = useState("");
  const [coin, setCoin] = useState(0);
  const [profpic, setProfpic] = useState("");

  useEffect(() => {
    // Get the value from local storage
    const userId = localStorage.getItem("session");

    // Check if the value exists
    if (userId !== null) {
      console.log("Value from local storage:", userId);
      fetch(`/api/user/${userId}`, {
        method: "GET",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          "user-id": userId,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          // Update state
          console.log(data);
          setUser(data.data.name);
          setCoin(data.data.coin);
          setProfpic(data.data.profpic);
        });
    } else {
      console.log("Value not found in local storage");
      // ini redirect ke login
    }
  }, []);

  const handleLogout = async (e: { preventDefault: () => void }) => {
    localStorage.clear();
  };

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
                  draggable="false"
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
                      {profpic ? (
                        <img
                          className="h-12 w-auto"
                          src={profpic}
                          draggable="false"
                        />
                      ) : (
                        <img
                          className="h-12 w-auto"
                          src="/assets/default_profpic.png"
                          draggable="false"
                        />
                      )}
                    </div>
                    <div className="">
                      <div className="text-[20px] font-riffic text-white">
                        {user}
                      </div>
                      <div className="text-[16px] font-poppins text-white">
                        Coin : {coin}
                      </div>
                    </div>
                  </div>
                </a>
                <Link
                  className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-red-500 hover:bg-red-600 transition-transform duration-300 transform hover:scale-110"
                  href="/"
                  onClick={handleLogout}
                >
                  <LogOut size={30} className="text-white" />
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
