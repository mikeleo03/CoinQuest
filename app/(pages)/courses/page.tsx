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
import Link from "next/link";
import { Skeleton } from "@/components/ui/skeleton"

interface dataCourse {
  id: number;
  title: string;
  desc: string;
  image: string;
  coin: number;
}

const CoursesPage = () => {
  const [listCourse, setListCourse] = useState<dataCourse[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Get the value from local storage
    const userId = localStorage.getItem("session");

    // Check if the value exists
    if (userId !== null) {
      setLoading(true);
      console.log("Value from local storage:", userId);
      fetch("/api/all-course", {
        method: "GET",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          "user-id": userId,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          // Update state
          setListCourse(data.data);
        });
    } else {
      console.log("Value not found in local storage");
      // ini redirect ke login
    }

    setLoading(false);
  }, []);

  return (
    <main className="flex w-full min-h-screen">
      <div className="flex flex-col py-20 w-full">
        <h1 className="z-10 text-6xl text-white text-center font-riffic tracking-wide p-6">
          Courses
        </h1>

        <div className="flex flex-wrap justify-center">
          {loading ? (
            [1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <Skeleton key={i} className="w-[288px] h-[396px] z-10 border-none bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-none bg-opacity-30 border border-gray-100 text-white rounded-3l m-2">
              </Skeleton>
            ))
          ) : (
            listCourse ? (
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
                      <Button className="bg-[#FEAE33] text-black font-bold rounded-full px-16 hover:bg-[#E19323] transition-transform duration-200 transform hover:scale-105">
                        Explore
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              ))
            ) : (
              [1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                <Skeleton key={i} className="w-[288px] h-[396px] z-10 border-none bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-none bg-opacity-30 border border-gray-100 text-white rounded-3l m-2">
                </Skeleton>
              ))
            )
          )}
        </div>
      </div>
    </main>
  );
};

export default CoursesPage;
