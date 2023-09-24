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
import Link from "next/link";

const CoursesPage = () => {
  return (
    <main className="flex flex-col justify-center items-center min-h-screen p-2">
      {/* Background */}
      <img
        src="/assets/background.png"
        alt="background image"
        className="fixed top-0 left-0 w-screen h-screen"
      />

      <h1 className="z-10 text-6xl text-white font-riffic tracking-wide p-4">
        Courses
      </h1>

      <div className="flex flex-wrap justify-center">
        <Card className="w-72 z-10 border-none bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-none bg-opacity-30 border border-gray-100 text-white rounded-3l m-2">
          <CardHeader>
            <img
              src="/assets/dummy.jpg"
              alt="image"
              className="rounded-lg h-40 object-cover"
            />
          </CardHeader>
          <CardContent className="p-4">
            <CardTitle className="text-3xl font-poppins font-bold pb-1">
              Ini Judul Course
            </CardTitle>
            <CardDescription className="text-white text-sm font-poppins">
              Ini ceritanya deskripsi, kalo belajar ini dijamin jadi lebih
              pinter deh
            </CardDescription>
          </CardContent>
          <CardFooter className="px-4 pb-4 flex justify-end">
            <Link href="/">
              <Button className="bg-[#FEAE33] text-black font-bold rounded-full px-10 hover:bg-[#E19323] transition-transform duration-200 transform hover:scale-105">
                Explore
              </Button>
            </Link>
          </CardFooter>
        </Card>
        <Card className="w-72 z-10 border-none bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-none bg-opacity-30 border border-gray-100 text-white rounded-3l m-2">
          <CardHeader>
            <img
              src="/assets/dummy.jpg"
              alt="image"
              className="rounded-lg h-40 object-cover"
            />
          </CardHeader>
          <CardContent className="p-4">
            <CardTitle className="text-3xl font-poppins font-bold pb-1">
              Ini Judul Course
            </CardTitle>
            <CardDescription className="text-white text-sm font-poppins">
              Ini ceritanya deskripsi, kalo belajar ini dijamin jadi lebih
              pinter deh
            </CardDescription>
          </CardContent>
          <CardFooter className="px-4 pb-4 flex justify-end">
            <Link href="/">
              <Button className="bg-[#FEAE33] text-black font-bold rounded-full px-10 hover:bg-[#E19323] transition-transform duration-200 transform hover:scale-105">
                Explore
              </Button>
            </Link>
          </CardFooter>
        </Card>
        <Card className="w-72 z-10 border-none bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-none bg-opacity-30 border border-gray-100 text-white rounded-3l m-2">
          <CardHeader>
            <img
              src="/assets/dummy.jpg"
              alt="image"
              className="rounded-lg h-40 object-cover"
            />
          </CardHeader>
          <CardContent className="p-4">
            <CardTitle className="text-3xl font-poppins font-bold pb-1">
              Ini Judul Course
            </CardTitle>
            <CardDescription className="text-white text-sm font-poppins">
              Ini ceritanya deskripsi, kalo belajar ini dijamin jadi lebih
              pinter deh
            </CardDescription>
          </CardContent>
          <CardFooter className="px-4 pb-4 flex justify-end">
            <Link href="/">
              <Button className="bg-[#FEAE33] text-black font-bold rounded-full px-10 hover:bg-[#E19323] transition-transform duration-200 transform hover:scale-105">
                Explore
              </Button>
            </Link>
          </CardFooter>
        </Card>
        <Card className="w-72 z-10 border-none bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-none bg-opacity-30 border border-gray-100 text-white rounded-3l m-2">
          <CardHeader>
            <img
              src="/assets/dummy.jpg"
              alt="image"
              className="rounded-lg h-40 object-cover"
            />
          </CardHeader>
          <CardContent className="p-4">
            <CardTitle className="text-3xl font-poppins font-bold pb-1">
              Ini Judul Course
            </CardTitle>
            <CardDescription className="text-white text-sm font-poppins">
              Ini ceritanya deskripsi, kalo belajar ini dijamin jadi lebih
              pinter deh
            </CardDescription>
          </CardContent>
          <CardFooter className="px-4 pb-4 flex justify-end">
            <Link href="/">
              <Button className="bg-[#FEAE33] text-black font-bold rounded-full px-10 hover:bg-[#E19323] transition-transform duration-200 transform hover:scale-105">
                Explore
              </Button>
            </Link>
          </CardFooter>
        </Card>
        <Card className="w-72 z-10 border-none bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-none bg-opacity-30 border border-gray-100 text-white rounded-3l m-2">
          <CardHeader>
            <img
              src="/assets/dummy.jpg"
              alt="image"
              className="rounded-lg h-40 object-cover"
            />
          </CardHeader>
          <CardContent className="p-4">
            <CardTitle className="text-3xl font-poppins font-bold pb-1">
              Ini Judul Course
            </CardTitle>
            <CardDescription className="text-white text-sm font-poppins">
              Ini ceritanya deskripsi, kalo belajar ini dijamin jadi lebih
              pinter deh
            </CardDescription>
          </CardContent>
          <CardFooter className="px-4 pb-4 flex justify-end">
            <Link href="/">
              <Button className="bg-[#FEAE33] text-black font-bold rounded-full px-10 hover:bg-[#E19323] transition-transform duration-200 transform hover:scale-105">
                Explore
              </Button>
            </Link>
          </CardFooter>
        </Card>
        <Card className="w-72 z-10 border-none bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-none bg-opacity-30 border border-gray-100 text-white rounded-3l m-2">
          <CardHeader>
            <img
              src="/assets/dummy.jpg"
              alt="image"
              className="rounded-lg h-40 object-cover"
            />
          </CardHeader>
          <CardContent className="p-4">
            <CardTitle className="text-3xl font-poppins font-bold pb-1">
              Ini Judul Course
            </CardTitle>
            <CardDescription className="text-white text-sm font-poppins">
              Ini ceritanya deskripsi, kalo belajar ini dijamin jadi lebih
              pinter deh
            </CardDescription>
          </CardContent>
          <CardFooter className="px-4 pb-4 flex justify-end">
            <Link href="/">
              <Button className="bg-[#FEAE33] text-black font-bold rounded-full px-10 hover:bg-[#E19323] transition-transform duration-200 transform hover:scale-105">
                Explore
              </Button>
            </Link>
          </CardFooter>
        </Card>
        <Card className="w-72 z-10 border-none bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-none bg-opacity-30 border border-gray-100 text-white rounded-3l m-2">
          <CardHeader>
            <img
              src="/assets/dummy.jpg"
              alt="image"
              className="rounded-lg h-40 object-cover"
            />
          </CardHeader>
          <CardContent className="p-4">
            <CardTitle className="text-3xl font-poppins font-bold pb-1">
              Ini Judul Course
            </CardTitle>
            <CardDescription className="text-white text-sm font-poppins">
              Ini ceritanya deskripsi, kalo belajar ini dijamin jadi lebih
              pinter deh
            </CardDescription>
          </CardContent>
          <CardFooter className="px-4 pb-4 flex justify-end">
            <Link href="/">
              <Button className="bg-[#FEAE33] text-black font-bold rounded-full px-10 hover:bg-[#E19323] transition-transform duration-200 transform hover:scale-105">
                Explore
              </Button>
            </Link>
          </CardFooter>
        </Card>
        <Card className="w-72 z-10 border-none bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-none bg-opacity-30 border border-gray-100 text-white rounded-3l m-2">
          <CardHeader>
            <img
              src="/assets/dummy.jpg"
              alt="image"
              className="rounded-lg h-40 object-cover"
            />
          </CardHeader>
          <CardContent className="p-4">
            <CardTitle className="text-3xl font-poppins font-bold pb-1">
              Ini Judul Course
            </CardTitle>
            <CardDescription className="text-white text-sm font-poppins">
              Ini ceritanya deskripsi, kalo belajar ini dijamin jadi lebih
              pinter deh
            </CardDescription>
          </CardContent>
          <CardFooter className="px-4 pb-4 flex justify-end">
            <Link href="/">
              <Button className="bg-[#FEAE33] text-black font-bold rounded-full px-10 hover:bg-[#E19323] transition-transform duration-200 transform hover:scale-105">
                Explore
              </Button>
            </Link>
          </CardFooter>
        </Card>
      </div>
    </main>
  );
};

export default CoursesPage;
