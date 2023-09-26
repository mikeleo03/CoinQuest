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
import supabase from "../../../utils/supabase";
import { useRouter } from "next/navigation";

const loginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

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

  const handleSignIn = async () => {
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        console.error("Error signing in:", error.message);
        return;
      }

      console.log("User signed in:", data);
      router.push("/"); // Redirect to dashboard or another page upon successful sign-in
    } catch (error) {
      console.error("Error signing in:", error);
    }
  };

  // const handleSubmit = async (event: { preventDefault: () => void }) => {
  // //   event.preventDefault();

  //   // sends a sign up request to supabase email provider
  //   await supabase.auth.signInWithPassword({
  //     email,
  //     password,
  //   });
  //   console.log("Submitted:", { email, password });
  // };

  return (
    <main className="flex justify-center items-center min-h-screen">
      {/* Background */}
      <img
        src="/assets/background.png"
        alt="background image"
        className="fixed top-0 left-0 w-screen h-screen"
      />

      {/* Login */}
      <Card className="w-fit z-10 p-11 border-none bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-none bg-opacity-30 border border-gray-100 text-white rounded-3xl">
        <CardHeader>
          <CardTitle className="text-4xl font-riffic">Log In</CardTitle>
          <CardDescription className="text-white text-base font-poppins">
            Selamat datang kembali, ayo lanjutkan perjalananmu disini!
          </CardDescription>
        </CardHeader>
        <CardContent className="py-3">
          <form>
            <div className="flex w-full items-center gap-8">
              <div className="flex flex-col space-y-3">
                <Label htmlFor="email" className="font-poppins">
                  Emailnya apa?
                </Label>
                <Input
                  id="email"
                  type="email"
                  className="bg-transparent"
                  value={email}
                  onChange={handleEmailChange}
                  autoFocus
                />
              </div>
              <div className="pt-5 flex flex-col space-y-3">
                <Label htmlFor="password" className="font-poppins">
                  Masukkan password
                </Label>
                <div className="flex flex-col items-end">
                  <Input
                    id="password"
                    type="password"
                    value={password}
                    onChange={handlePasswordChange}
                    className="bg-transparent"
                  />
                  <span className="text-sm text-white cursor-pointer font-poppins">
                    Lupa password?
                  </span>
                </div>
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="pt-3">
          <Button
            type="submit"
            onClick={handleSignIn}
            className="bg-[#FEAE33] text-black font-bold rounded-full px-10 hover:bg-[#E19323] transition-transform duration-300 transform hover:scale-110"
          >
            Masuk
          </Button>
          <p className="ml-5 text-sm">Belum punya akun?</p>
          <Link
            href="/signup"
            className="font-bold text-sm cursor-pointer font-poppins"
          >
            &nbsp; Sign Up
          </Link>
        </CardFooter>
      </Card>
      <div className="flex z-20 ">
        <Image
          src="/assets/boys/boy4.png"
          alt=""
          width="350"
          height="350"
          draggable="false"
        />
      </div>
    </main>
  );
};

export default loginPage;
