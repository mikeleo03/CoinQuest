"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Navbar from "@/components/ui/navbar";
import Link from "next/link";

interface dataCourse {
  id: number;
  title: string;
  desc: string;
  image: string;
  coin: number;
}

const CoursesPage = () => {
  const [listCourse, setListCourse] = useState<dataCourse[]>([]);

  useEffect(() => {
    fetch("/api/all-course", {
      method: "GET",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        // Update state
        setListCourse(data.data);
      });
  }, [listCourse]);

  return (
    <main className="flex w-full min-h-screen">
      {/* Background */}
      <img
        src="/assets/background.png"
        alt="background image"
        className="fixed top-0 left-0 w-screen h-screen"
        draggable="false"
      />

      {/* Navbar */}
      <Navbar />

      <div className="flex flex-col px-20 py-20 w-full">
        <h1 className="z-10 text-6xl text-white text-center font-riffic tracking-wide p-6">
          Courses
        </h1>

        <div className="flex flex-wrap justify-center space-x-10">
          {listCourse ? (
            listCourse.map((course, i) => (
              <Card
                key={i}
                className="w-72 z-10 border-none bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-none bg-opacity-30 border border-gray-100 text-white rounded-3l m-2"
              >
                <CardHeader>
                  {course.image ? (
                    <img
                      src={course.image}
                      alt="image"
                      className="rounded-lg h-40 object-cover"
                      draggable="false"
                    />
                  ) : (
                    <img
                      src="/assets/dummy.jpg"
                      alt="image"
                      className="rounded-lg h-40 object-cover"
                      draggable="false"
                    />
                  )}
                </CardHeader>
                <CardContent className="p-4 space-y-3">
                  <CardTitle className="text-3xl font-poppins font-bold pb-1">
                    {course.title}
                  </CardTitle>
                  <CardDescription className="text-white text-sm font-poppins">
                    {course.desc}
                  </CardDescription>
                </CardContent>
                <CardFooter className="px-4 pb-4 flex items-end justify-center self-end">
                  <Link href={`/course/${course.id}`}>
                    <Button className="bg-[#FEAE33] text-black font-bold rounded-full px-10 hover:bg-[#E19323] transition-transform duration-200 transform hover:scale-105">
                      Explore
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            ))
          ) : (
            <h1>Tidak ada course saat ini.</h1>
          )}
        </div>
      </div>
    </main>
  );
};

export default CoursesPage;
