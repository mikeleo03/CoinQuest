import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/ui/navbar-basic";

const homePage = () => {
  return (
    <main className="flex min-h-screen w-full">
        {/* Background */}
        <img
            src="/assets/background.png"
            alt="background image"
            className="fixed top-0 left-0 w-screen h-screen"
        />

        {/* Navbar */}
        <Navbar />

        {/* Main */}
        <div className="flex flex-row w-full px-20 py-32">
            {/* Text */}
            <div className="flex flex-col w-2/3 z-20 py-16">
                <div className="text-[64px] font-riffic text-white">Jelajahi Dunia <br /> Keuangan yang Ajaib!</div>
                <div className="text-[24px] font-poppins text-white py-[26px] pr-12">Temukan petualangan seru tentang tabungan, <br /> mengatur uang, dan fakta menarik lainnya sambil <br /> menjelajahi dunia baru yang penuh kejutan</div>
                <Button className="bg-[#FEAE33] text-black font-semibold text-[24px] font-poppins rounded-full px-[40px] py-[30px] w-[380px] hover:bg-[#E19323] transition-transform duration-300 transform hover:scale-110">
                    Mulai petualanganmu!
                </Button>
            </div>

            {/* Side image */}
            <div className="flex w-1/3 z-20 h-[480px]">
                <Image
                    src="/assets/boys/boy_landing.png"
                    alt=""
                    width="451"
                    height="505"
                    draggable="false"
                />
            </div>
        </div>
    </main>
  );
};

export default homePage;
