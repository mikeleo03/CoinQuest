"use client";

import React, { useState, useEffect } from "react";
import Slider from "@/components/ui/slider";
import GoalCard from "@/components/ui/goal-cards";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import Image from "next/image";
import Chatbot from "@/components/ui/chatbot";

interface dataGoals {
  id: number;
  title: string;
  desc: string;
  price: number;
  is_done: boolean;
}

const goalPage = () => {
  const [listGoals, setListGoals] = useState<dataGoals[]>([]);
  const [listQuest, setListQuest] = useState<number[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Get the value from local storage
    const userId = localStorage.getItem("session");

    // Check if the value exists
    if (userId !== null) {
      setLoading(true);
      console.log("Value from local storage:", userId);
      fetch("/api/all-goal", {
        method: "GET",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          "user-id": userId,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          // Update state
          console.log(data.data);
          setListGoals(data.data);
        });
    } else {
      console.log("Value not found in local storage");
      // ini redirect ke login
    }
    setLoading(false);
  }, []);

  const handleCardClick = (id: number) => {
    console.log(id);
    fetch(`/api/get-quests/${id}`, {
      method: "GET",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        // Update state
        console.log(
          data.data[0].quests
            .map((item: { id: number; id_goals: number }) => item.id)
            .sort((a: number, b: number) => a - b)
        );
        setListQuest(
          data.data[0].quests
            .map((item: { id: number; id_goals: number }) => item.id)
            .sort((a: number, b: number) => a - b)
        );
      });
  };

  return (
    <main className="flex min-h-screen w-full">
      <img
        src="/assets/sky/stars.png"
        alt="background stars"
        className="fixed top-0 rotate-90 left-0 bg-repeat-x w-screen"
        draggable="false"
      />

      {/* Main */}
      <div className="flex flex-col px-20 py-32 w-full">
        <div className="grid grid-cols-3 items-center z-10">
          <div className="col-span-1"></div>
          <h1 className="text-6xl text-white font-riffic pt-4 pb-14 text-center col-span-1">
            Goals
          </h1>
          <div className="col-span-1 flex justify-end">
            <Button className="bg-transparent hover:bg-transparent transition-transform duration-300 transform hover:scale-110">
              <Image src="/assets/add.png" width={50} height={50} alt="" />
            </Button>
          </div>
        </div>

        <div className="flex flex-row w-full justify-center items-center text-center">
          {loading ? (
            <div className="flex flex-row overflow-hidden">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex-[0_0_90%] md:flex-[0_0_50%] mr-4">
                  <Skeleton className="z-10 h-[310px] w-[606px] bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-none bg-opacity-30 border text-white rounded-xl m-2 justify-center items-center"></Skeleton>
                </div>
              ))}
            </div>
          ) : (
            <Slider options={{ align: "center" }}>
              {listGoals
                ? listGoals.map((goal, i) => (
                    <div key={i} className="flex-[0_0_90%] md:flex-[0_0_50%]">
                      <GoalCard
                        id_goal={goal.id}
                        title={goal.title}
                        desc={goal.desc}
                        price={goal.price}
                        is_done={goal.is_done}
                        onClick={handleCardClick}
                        listQuest={listQuest}
                      />
                    </div>
                  ))
                : [1, 2, 3].map((i) => (
                    <div key={i} className="flex-[0_0_90%] md:flex-[0_0_50%]">
                      <Skeleton className="z-10 h-[310px] w-[606px] bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-none bg-opacity-30 border text-white rounded-xl m-2 justify-center items-center"></Skeleton>
                    </div>
                  ))}
            </Slider>
          )}
          <div className="absolute z-20 right-0 bottom-0 p-10">
            <Chatbot />
          </div>
        </div>
      </div>
    </main>
  );
};

export default goalPage;
