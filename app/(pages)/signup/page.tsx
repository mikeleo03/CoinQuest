"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
/* import { ToastContainer } from 'react-toastify';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; */
import { Toaster } from "@/components/ui/toaster"
import { useToast } from "@/components/ui/use-toast"

const singupPage = () => {
  const [name, setName] = useState("");
  const [birthdate, setBirthdate] = useState(new Date());
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [parentEmail, setParentEmail] = useState("");
  const [parentPhoto, setParentPhoto] = useState("");
  const { toast } = useToast();

  const handleNameChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setName(event.target.value);
  };

  const handleBirthdateChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const selectedDate = event.target.valueAsDate;
    if (selectedDate) {
      setBirthdate(selectedDate);
    }
  };

  const handleEmailChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setPassword(event.target.value);
  };
  const handleParentEmailChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setParentEmail(event.target.value);
  };

  const handleParentPhotoChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setParentPhoto(event.target.value);
  };

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/user/addnew", {
        method: "POST", // or 'GET' depending on your API
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name,
          birthdate: birthdate,
          email: email,
          password: password,
          parent_email: parentEmail,
          parent_photo: parentPhoto,
        }),
      });

      if (response.ok) {
        // Handle a successful response here
        const data = await response.json();

        // Now, you can work with the JSON data and the saved ID
        console.log("API call successful. Response data:", data);
        // Extract the ID from the response data
        const userId = data.data[0].id;
        console.log(userId);

        // Save the ID to local storage
        localStorage.setItem("session", userId);
        console.log("User ID saved to local storage:", userId);
      } else {
        // Handle error response here
        /* toast.error('Registrasi tidak berhasil :( periksa kembali data masukan kamu', {
          position: toast.POSITION.TOP_RIGHT
        }); */
        toast({
          title: "Registrasi tidak berhasil :(",
          description: "Periksa kembali data masukan kamu ya!",
        })
      }
    } catch (error) {
      // Handle network or other errors here
      console.error("Network error", error);
    }
  };

  return (
    <main className="flex justify-center items-center min-h-screen">
      {/* Background */}
      <img
        src="/assets/background.png"
        alt="background image"
        className="fixed top-0 left-0 w-screen h-screen"
      />

      {/* Signup */}
      {/* <ToastContainer /> */}
      <Toaster />
      <Card className="w-fit z-10 p-11 border-none bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-none bg-opacity-30 border border-gray-100 text-white rounded-3xl">
        <CardHeader>
          <CardTitle className="text-4xl font-riffic">Sign Up</CardTitle>
          <CardDescription className="text-white text-base font-poppins">
            Yuk buat akun untuk segera memulai perjalananmu!
          </CardDescription>
        </CardHeader>
        <CardContent className="py-6">
          <form>
            <div className="space-y-8">
              <div className="flex w-full items-center gap-8">
                <div className="flex flex-col space-y-3 w-full">
                  <Label htmlFor="name" className="font-poppins">
                    Namamu siapa?
                  </Label>
                  <Input
                    id="name"
                    type="name"
                    className="bg-transparent"
                    onChange={handleNameChange}
                    autoFocus
                  />
                </div>
                <div className="flex flex-col space-y-3 w-full">
                  <Label htmlFor="email" className="font-poppins">
                    Emailnya apa?
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    className="bg-transparent"
                    value={email}
                    onChange={handleEmailChange}
                  />
                </div>
              </div>
              <div className="flex items-center gap-8">
                <div className="flex flex-col space-y-3 w-full">
                  <Label htmlFor="date" className="font-poppins">
                    Tanggal lahirnya berapa?
                  </Label>
                  <Input
                    id="date"
                    type="date"
                    onChange={handleBirthdateChange}
                    value={birthdate.toISOString().split("T")[0]}
                    className="bg-transparent text-white"
                  />
                </div>
                <div className="flex flex-col space-y-3 w-full">
                  <Label htmlFor="password" className="font-poppins">
                    Buat password
                  </Label>
                  <Input
                    id="password"
                    type="password"
                    className="bg-transparent"
                    value={password}
                    onChange={handlePasswordChange}
                  />
                </div>
              </div>
              <div className="flex items-center gap-8">
                <div className="flex flex-col space-y-3">
                  <Label htmlFor="email" className="font-poppins">
                    Email orangtuanya apa?
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    onChange={handleParentEmailChange}
                    className="bg-transparent text-white "
                  />
                </div>
                <div className="flex flex-col space-y-3">
                  <Label htmlFor="parent-photo" className="font-poppins">
                    Foto orangtua (untuk verifikasi)
                  </Label>
                  <Input
                    id="parent-photo"
                    type="file"
                    accept=".png,.jpg,.jpeg"
                    onChange={handleParentPhotoChange}
                    className="bg-transparent text-white "
                  />
                </div>
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="pt-3">
          <Button
            className="bg-[#FEAE33] text-black font-bold rounded-full px-10 hover:bg-[#E19323] transition-transform duration-300 transform hover:scale-110"
            onClick={handleSubmit}
          >
            Masuk
          </Button>
          <p className="ml-5 text-sm font-poppins">Sudah punya akun?</p>
          <Link
            href="/login"
            className="font-bold text-sm cursor-pointer font-poppins"
          >
            &nbsp; Log In
          </Link>
        </CardFooter>
      </Card>
      <div className="flex  z-20 ">
        <Image
          src="/assets/boys/boy11.png"
          alt=""
          width="350"
          height="350"
          draggable="false"
        />
      </div>
    </main>
  );
};

export default singupPage;
