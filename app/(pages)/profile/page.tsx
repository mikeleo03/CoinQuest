"use client";

import React, { useState, useEffect } from "react";
import { Pencil } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Toaster } from "@/components/ui/toaster";
import { useToast } from "@/components/ui/use-toast";
import Chatbot from "@/components/ui/chatbot";

interface userData {
  birthDate: Date;
  coin: number;
  email: string;
  id: number;
  name: string;
  parent_email: string;
  parent_photo: string;
  password: string;
  profpic: string;
}

const page = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [inputUsername, setInputUsername] = useState("");
  const [inputEmail, setInputEmail] = useState("");
  const [inputParentEmail, setInputParentEmail] = useState("");
  const [inputDate, setInputDate] = useState("");
  const [originalUsername, setOriginalUsername] = useState("");
  const [originalEmail, setOriginalEmail] = useState("");
  const [originalParentEmail, setOriginalParentEmail] = useState("");
  const [originalDate, setOriginalDate] = useState("");
  const [coin, setCoin] = useState(0);
  const [currentId, setCurrentId] = useState(0);
  const [userData, setUserData] = useState<userData>();
  const { toast } = useToast();

  useEffect(() => {
    // Get the value from local storage
    const userId = localStorage.getItem("session");

    // Check if the value exists
    if (userId !== null) {
      console.log("Value from local storage:", userId);
      setCurrentId(parseInt(userId));
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
          setUserData(data.data);
          setInputUsername(data.data.name);
          setInputEmail(data.data.email);
          setInputParentEmail(data.data.parent_email);
          setInputDate(data.data.birthdate.toString());
          setCoin(data.data.coin);
        });
    } else {
      console.log("Value not found in local storage");
      // ini redirect ke login
    }
  }, []);

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

  const handleSave = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    // Backend
    let userId = currentId.toString();
    try {
      const response = await fetch(`/api/user/edit/${userId}`, {
        method: "PATCH",
        body: JSON.stringify({
          name: inputUsername,
          birthdate: inputDate,
          email: inputEmail,
          parent_email: inputParentEmail,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });

      if (response.ok) {
        const data = await response.json();
        toast({
          title: "Berhasil!",
          description: "Datamu sudah diperbaharui",
        });
      } else {
        toast({
          title: "Edit tidak berhasil :(",
          description: "Periksa kembali format masukanmu ya!",
        });
      }
    } catch (error) {
      // Handle network or other errors here
      toast({
        title: "Edit tidak berhasil :(",
        description: "Periksa kembali format masukanmu ya!",
      });
    }

    setIsEditing(!isEditing);
  };

  return (
    <main className="flex min-h-screen w-full">
      <Toaster />
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

            <h1 className="font-poppins text-lg text-white">Coin : {coin}</h1>
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
              <div className="flex space-x-5">
                <h1 className="font-riffic text-2xl">Misi Selesai : </h1>
                <h1 className="font-poppins text-lg">10 misi </h1>
              </div>
              <div className="flex space-x-5">
                <h1 className="font-riffic text-2xl">Hadiah : </h1>
                <h1 className="font-poppins text-lg">3 hadiah </h1>
              </div>
              <div className="flex space-x-5">
                <h1 className="font-riffic text-2xl">Tabungan : </h1>
                <h1 className="font-poppins text-lg">Rp500.000,00 </h1>
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
          <div className="absolute z-20 right-0 bottom-0 p-10">
            <Chatbot />
          </div>
        </div>
      </div>
    </main>
  );
};

export default page;
