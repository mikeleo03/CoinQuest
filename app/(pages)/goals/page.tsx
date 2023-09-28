"use client"

import React, { useState, useEffect } from "react";
import Navbar from "@/components/ui/navbar-login";
import Slider from "@/components/ui/slider";
import GoalCard from "@/components/ui/goal-cards";

interface dataGoals {
    id: number;
    title: string;
    desc: string;
    price: number;
    is_done: boolean;
}

const goalPage = () => {
    const [listGoals, setListGoals] = useState<dataGoals[]>([]);

    useEffect(() => {
        fetch("/api/all-goal", {
            method: "GET",
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
            .then((res) => res.json())
            .then((data) => {
                // Update state
                console.log(data.data);
                setListGoals(data.data);
            });
    }, [listGoals]);

    return (
        <main className="flex min-h-screen w-full">
            {/* Background */}
            <img
                src="/assets/background.png"
                alt="background image"
                className="fixed top-0 left-0 w-screen h-screen"
            />

            <img
                src="/assets/sky/stars.png"
                alt="background stars"
                className="fixed top-0 rotate-90 left-0 bg-repeat-x w-screen"
            />

            {/* Navbar */}
            <Navbar />

            {/* Main */}
            <div className="flex flex-col px-20 py-32 w-full">
                <h1 className="z-10 text-6xl text-white font-riffic pt-4 pb-14 text-center">
                    Goals
                </h1>

                <div className="flex flex-row w-full justify-center items-center text-center">
                    {listGoals ? (
                        <Slider options={{ align: "center" }}>
                            {listGoals.map((goal, i) => (
                                <div key={i} className="flex-[0_0_90%] md:flex-[0_0_50%]">
                                    <GoalCard id={goal.id} title={goal.title} desc={goal.desc} price={goal.price} is_done={goal.is_done} />
                                </div>))
                            }
                        </Slider>
                    ) : (
                        <div className="z-10 text-4xl">Tidak ada goals saat ini.</div>
                    )}
                </div>
            </div>
        </main>
    );
};

export default goalPage;