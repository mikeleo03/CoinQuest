"use client";

import React, { useState } from "react";
import Navbar from "@/components/ui/navbar-login";
import { Pencil } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Calendar as CalendarIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

const page = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [inputUsername, setInputUsername] = useState("Michael");
  const [inputEmail, setInputEmail] = useState("michael01@example.com");
  const [inputParentEmail, setInputParentEmail] = useState(
    "ferdisusanto@example.com"
  );
  const [inputDate, setInputDate] = useState("20 Maret 2016");

  const [originalUsername, setOriginalUsername] = useState("Michael");
  const [originalEmail, setOriginalEmail] = useState("michael01@example.com");
  const [originalParentEmail, setOriginalParentEmail] = useState(
    "ferdisusanto@example.com"
  );
  const [originalDate, setOriginalDate] = useState("20 Maret 2016");

  const handleEditClick = () => {
    if (isEditing) {
      setInputUsername(originalUsername);
      setInputEmail(originalEmail);
      setInputParentEmail(originalParentEmail);
      setInputDate(originalDate);
    } else {
      setOriginalUsername(inputUsername);
      setOriginalEmail(inputEmail);
      setOriginalParentEmail(inputParentEmail);
      setOriginalDate(inputDate);
    }

    setIsEditing(!isEditing);
  };

  const handleSave = () => {
    // Backend
    setIsEditing(false);
  };

  return (
    <main className="flex min-h-screen w-full">
      {/* Background */}
      <img
        src="/assets/background.png"
        alt="background image"
        className="fixed top-0 left-0 w-screen h-screen"
        draggable="false"
      />

      {/* Navbar */}
      <Navbar />

      {/* Profile Page */}
      <div className="flex w-full px-40 py-32 pb-20 z-20 space-x-52">
        {/* Avatar Info */}
        <div className="flex flex-col items-center justify-center space-y-5">
          <div className="">
            <img
              src="/assets/default_profpic.png"
              alt="profile picture"
              draggable="false"
            />
          </div>
          <div className="">
            {isEditing ? (
              <Input
                type="text"
                className="bg-transparent text-white"
                value={inputUsername}
                placeholder={inputUsername}
                onChange={(e) => setInputUsername(e.target.value)}
              />
            ) : (
              <h1 className="font-riffic text-5xl text-white">
                {inputUsername}
              </h1>
            )}

            <h1 className="font-poppins text-lg text-white">Level : 3</h1>
          </div>
        </div>

        {/* Profile Info & Stats */}
        <div className="space-y-10">
          <div>
            <div className="flex space-x-5">
              <h1 className="font-riffic text-4xl text-white">Profile</h1>
              <Pencil
                className="text-white border-2 cursor-pointer"
                size={32}
                onClick={handleEditClick}
              />
            </div>
            <div className="px-10 py-5 space-y-10 text-white">
              <div className="flex space-x-10 ">
                <div className="space-y-2">
                  <h1 className="font-riffic text-2xl">Email</h1>
                  {isEditing ? (
                    <Input
                      type="email"
                      className="bg-transparent"
                      value={inputEmail}
                      placeholder={inputEmail}
                      onChange={(e) => setInputEmail(e.target.value)}
                    />
                  ) : (
                    <h1 className="font-poppins text-lg">{inputEmail}</h1>
                  )}
                </div>
                <div className="space-y-2">
                  <h1 className="font-riffic text-2xl">Email Orangtua</h1>
                  {isEditing ? (
                    <Input
                      type="email"
                      className="bg-transparent"
                      value={inputParentEmail}
                      placeholder={inputParentEmail}
                      onChange={(e) => setInputParentEmail(e.target.value)}
                    />
                  ) : (
                    <h1 className="font-poppins text-lg">{inputParentEmail}</h1>
                  )}
                </div>
              </div>
              <div className="space-y-2">
                <h1 className="font-riffic text-2xl">Tanggal Lahir</h1>
                {isEditing ? (
                  <Input
                    type="date"
                    className="bg-transparent"
                    value={inputDate}
                    placeholder={inputDate}
                    onChange={(e) => setInputDate(e.target.value)}
                  />
                ) : (
                  <h1 className="font-poppins text-lg">{inputDate}</h1>
                )}
              </div>
            </div>
          </div>

          <div>
            <h1 className="font-riffic text-4xl text-white">Stats</h1>
            <div className="px-10 py-5 space-y-3 text-white">
              <div className="flex space-x-5 items-center">
                <h1 className="font-riffic text-2xl">Poin : </h1>
                <h1 className="font-poppins text-lg ">1555 poin </h1>
              </div>
              <div className="flex space-x-5">
                <h1 className="font-riffic text-2xl">Misi Selesai : </h1>
                <h1 className="font-poppins text-lg">10 misi </h1>
              </div>
              <div className="flex space-x-5">
                <h1 className="font-riffic text-2xl">Hadiah : </h1>
                <h1 className="font-poppins text-lg">3 hadiah </h1>
              </div>
            </div>
          </div>

          {isEditing && (
            <Button
              type="submit"
              onClick={handleSave}
              className="bg-[#FEAE33] text-black font-bold rounded-full px-10 hover:bg-[#E19323] transition-transform duration-300 transform hover:scale-110"
            >
              Save
            </Button>
          )}
        </div>
      </div>
    </main>
  );
};

export default page;
