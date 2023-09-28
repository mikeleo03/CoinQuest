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

        // Get the value from local storage
        const userId = localStorage.getItem('session');

        // Check if the value exists
        if (userId !== null) {
            console.log('Value from local storage:', userId);
            fetch("/api/all-goal", {
                method: "GET",
                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                    'user-id': userId
                }
            })
                .then((res) => res.json())
                .then((data) => {
                    // Update state
                    console.log(data.data);
                    setListGoals(data.data);
                });
        } else {
            console.log('Value not found in local storage');
            // ini redirect ke login
        }

    }, []);

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
                    <Slider options={{ align: "center" }}>
                        {listGoals ? (listGoals.map((goal, i) => (
                            <div key={i} className="flex-[0_0_90%] md:flex-[0_0_50%]">
                                <GoalCard id={goal.id} title={goal.title} desc={goal.desc} price={goal.price} is_done={goal.is_done} />
                            </div>
                        ))) : (
                            <h1>Tidak ada goals saat ini.</h1>
                        )}
                    </Slider>
                </div>
            </div>
        </main>
    );
};

export default goalPage;