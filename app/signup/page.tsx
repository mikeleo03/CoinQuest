import React from "react";
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

const singupPage = () => {
  return (
    <main className="flex justify-center items-center min-h-screen">
      {/* Background */}
      <div className="">
        <Image
          src="/assets/background.png"
          alt="background image"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          draggable="false"
          className="z-0"
        />
      </div>

      {/* Login */}
      <Card className="w-fit z-10 p-5 border-none bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-none bg-opacity-30 border border-gray-100 text-white rounded-3xl">
        <CardHeader>
          <CardTitle className="text-4xl ">Sign Up</CardTitle>
          <CardDescription className="text-white text-base ">
            Yuk buat akun untuk segera memulai perjalananmu!
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="space-y-8">
              <div className="flex w-full items-center gap-8">
                <div className="flex flex-col space-y-3 w-full">
                  <Label htmlFor="name">Namamu siapa?</Label>
                  <Input id="name" type="name" className="bg-transparent" />
                </div>
                <div className="flex flex-col space-y-3 w-full">
                  <Label htmlFor="email">Emailnya apa?</Label>
                  <Input id="email" type="email" className="bg-transparent" />
                </div>
              </div>
              <div className="flex items-center gap-8">
                <div className="flex flex-col space-y-3 w-full">
                  <Label htmlFor="date">Tanggal lahirnya berapa?</Label>
                  <Input
                    id="date"
                    type="date"
                    className="bg-transparent text-white"
                  />
                </div>
                <div className="flex flex-col space-y-3 w-full">
                  <Label htmlFor="password">Buat password</Label>
                  <Input
                    id="password"
                    type="password"
                    className="bg-transparent"
                  />
                </div>
              </div>
              <div className="flex items-center gap-8">
                <div className="flex flex-col space-y-3">
                  <Label htmlFor="email">Email orangtuanya apa?</Label>
                  <Input
                    id="email"
                    type="email"
                    className="bg-transparent text-white "
                  />
                </div>
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter>
          <Button className="bg-[#FEAE33] text-black font-bold rounded-full px-10 hover:bg-[#E19323] transition-transform duration-300 transform hover:scale-110">
            Masuk
          </Button>
          <p className="ml-5 text-sm">Sudah punya akun?</p>
          <span className="font-bold text-sm cursor-pointer">&nbsp;Log In</span>
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
