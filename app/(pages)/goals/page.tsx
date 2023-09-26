import React from "react";
import Navbar from "@/components/ui/navbar-login";
import Slider from "@/components/ui/slider";
import GoalCard from "@/components/ui/goal-cards";
import testimonials from "@/data/data.json";

const goalPage = () => {
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
                    {testimonials.map((testimonial, i) => (
                        <div key={i} className="flex-[0_0_90%] md:flex-[0_0_50%]">
                            <GoalCard {...testimonial} />
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    </main>
  );
};

export default goalPage;
