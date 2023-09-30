"use client";

import React, { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import Link from 'next/link';

interface CardProps {
  id_goal: number;
  title: string;
  desc: string;
  price: number;
  is_done: boolean;
  onClick: (id: number) => void;
  listQuest: number[];
}

interface dataTask {
  id: number;
  id_quest: number;
  desc: string;
  link: string;
  is_done: boolean;
}

const GoalCard: React.FC<CardProps> = ({ id_goal, title, desc, price, is_done, onClick, listQuest }) => {
  const [taskData, setTaskData] = useState<dataTask[]>([]);
  const [currentPlanet, setCurrentPlanet] = useState(0);

  const handlePlanetClick = (id : number) => {
      setCurrentPlanet(id);
      setTaskData([]);
      fetch(`/api/get-tasks/${id_goal}/${id}`, {
          method: "GET",
          headers: {
              "Content-type": "application/json; charset=UTF-8",
          }
      })
          .then((res) => res.json())
          .then((data) => {
            // Update state
            console.log(data.data);
            setTaskData(data.data ? data.data[0]?.tasks : data.data);
      });
  };

  return (
    <Dialog>
      <div className="z-10 bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-none bg-opacity-30 border text-white rounded-xl m-2 justify-center items-center">
        <div className="flex justify-center items-center h-20">
          <img
            src="/assets/trophy.png"
            alt="image"
            className="h-24"
            draggable='false'
          />
        </div>
        <div className="pt-6 pb-0 px-10">
          <h2 className="text-4xl font-semibold font-poppins">{title}</h2>
          <p className="mt-2 text-xl font-poppins">{is_done ? "Sudah diselesaikan" : "Belum diselesaikan"}</p>
          <p className="mt-2 font-poppins">{price}</p>
        </div>
        <div className="flex py-8 pt-6 justify-center items-center">
          <DialogTrigger className="bg-[#FEAE33] text-black font-bold rounded-full px-14 py-2 hover:bg-[#E19323] transition-transform duration-200 transform hover:scale-105" onClick={() => onClick(id_goal)}>
            Kerjakan
          </DialogTrigger>
        </div>
      </div>
      <DialogContent className="max-w-[1025px] h-[700px]">
        <DialogHeader>
          <DialogTitle>Kerjakan Questmu</DialogTitle>
          <DialogDescription>
            Pilih planet untuk menyelesaikan quest
          </DialogDescription>
        </DialogHeader>
        <img
          src="/assets/main_envi.png"
          alt="background image"
          draggable='false'
          className="rotate-90 fixed left-56 top-8 justify-center items-center w-[500px] h-[700px] pb-20 pr-8"
        />
        <div className="justify-center items-center">
          <img
              src="/assets/background.png"
              alt="background image"
              className="rotate-270 w-[1000px] h-[550px] rounded-xl"
              draggable='false'
          />
        </div>
        <Dialog>
          <DialogTrigger>
            <button className="transition-transform duration-200 transform hover:scale-125 fixed right-72 top-[7.5rem] justify-center items-center" id="1" onClick={() => handlePlanetClick(1)}>
              <img
                src="/assets/planets/planet-fix-1.png"
                alt="background image"
                className="w-[80px] h-[80px]"
                draggable='false'
              />
            </button>
          </DialogTrigger>
          <DialogContent className="w-80">
            <div className="grid gap-4">
              <h4 className="font-medium leading-none">Quest 1</h4>
              <p className="text-sm text-muted-foreground mb-2">
                Berikut adalah beberapa task yang perlu diselesaikan :
              </p>
            </div>
            <div>
              {((currentPlanet === 1) && (taskData)) ? (taskData.map((task, i) => (
                  <div key={i} className="flex flex-row justify-center items-center mb-2">
                    <div className="w-4/5">{task.desc}</div>
                    <div className="w-1/5">
                      <Link href={task.link}>
                        <button className="bg-[#FEAE33] text-black font-bold rounded-full px-3 py-1 hover:bg-[#E19323] transition-transform duration-200 transform hover:scale-105">
                          Let's Go
                        </button>
                      </Link>
                    </div>
                  </div>
              ))) : (<h3 className="justify-center text-center">Tidak ada.</h3>)}
            </div>
          </DialogContent>
        </Dialog>
        <Dialog>
          <DialogTrigger>
            <button className="transition-transform duration-200 transform hover:scale-125 fixed right-[12rem] bottom-[18rem] justify-center items-center" id="2" onClick={() => handlePlanetClick(2)}>
              <img
                src="/assets/planets/planet-fix-2.png"
                alt="background image"
                className="w-[80px] h-[80px]"
                draggable='false'
              />
            </button>
          </DialogTrigger>
          <DialogContent className="w-80">
            <div className="grid gap-4">
              <h4 className="font-medium leading-none">Quest 2</h4>
              <p className="text-sm text-muted-foreground mb-2">
                Berikut adalah beberapa task yang perlu diselesaikan :
              </p>
            </div>
            <div>
              {((currentPlanet === 2) && (taskData)) ? (taskData.map((task, i) => (
                  <div key={i} className="flex flex-row justify-center items-center mb-2">
                    <div className="w-4/5">{task.desc}</div>
                    <div className="w-1/5">
                      <Link href={task.link}>
                        <button className="bg-[#FEAE33] text-black font-bold rounded-full px-3 py-1 hover:bg-[#E19323] transition-transform duration-200 transform hover:scale-105">
                          Let's Go
                        </button>
                      </Link>
                    </div>
                  </div>
              ))) : (<h3 className="justify-center text-center">Tidak ada.</h3>)}
            </div>
          </DialogContent>
        </Dialog>
        <Dialog>
          <DialogTrigger>
            <button className="transition-transform duration-200 transform hover:scale-125 fixed right-[22rem] bottom-[6rem] justify-center items-center" id="3" onClick={() => handlePlanetClick(3)}>
              <img
                src="/assets/planets/planet-fix-3.png"
                alt="background image"
                className="w-[80px] h-[80px]"
                draggable='false'
              />
            </button>
          </DialogTrigger>
          <DialogContent className="w-80">
            <div className="grid gap-4">
              <h4 className="font-medium leading-none">Quest 3</h4>
              <p className="text-sm text-muted-foreground mb-2">
                Berikut adalah beberapa task yang perlu diselesaikan :
              </p>
            </div>
            <div>
              {((currentPlanet === 3) && (taskData)) ? (taskData.map((task, i) => (
                  <div key={i} className="flex flex-row justify-center items-center mb-2">
                    <div className="w-4/5">{task.desc}</div>
                    <div className="w-1/5">
                      <Link href={task.link}>
                        <button className="bg-[#FEAE33] text-black font-bold rounded-full px-3 py-1 hover:bg-[#E19323] transition-transform duration-200 transform hover:scale-105">
                          Let's Go
                        </button>
                      </Link>
                    </div>
                  </div>
              ))) : (<h3 className="justify-center text-center">Tidak ada.</h3>)}
            </div>
          </DialogContent>
        </Dialog>
        <Dialog>
          <DialogTrigger>
            <button className="transition-transform duration-200 transform hover:scale-125 fixed left-[26.2rem] bottom-[13rem] justify-center items-center" id="4" onClick={() => handlePlanetClick(4)}>
              <img
                src="/assets/planets/planet-fix-4.png"
                alt="background image"
                className="w-[80px] h-[80px]"
                draggable='false'
              />
            </button>
          </DialogTrigger>
          <DialogContent className="w-80">
            <div className="grid gap-4">
              <h4 className="font-medium leading-none">Quest 4</h4>
              <p className="text-sm text-muted-foreground mb-2">
                Berikut adalah beberapa task yang perlu diselesaikan :
              </p>
            </div>
            <div>
              {((currentPlanet === 4) && (taskData)) ? (taskData.map((task, i) => (
                  <div key={i} className="flex flex-row justify-center items-center mb-2">
                    <div className="w-4/5">{task.desc}</div>
                    <div className="w-1/5">
                      <Link href={task.link}>
                        <button className="bg-[#FEAE33] text-black font-bold rounded-full px-3 py-1 hover:bg-[#E19323] transition-transform duration-200 transform hover:scale-105">
                          Let's Go
                        </button>
                      </Link>
                    </div>
                  </div>
              ))) : (<h3 className="justify-center text-center">Tidak ada.</h3>)}
            </div>
          </DialogContent>
        </Dialog>
        <Dialog>
          <DialogTrigger>
            <button className="transition-transform duration-200 transform hover:scale-125 fixed right-[27rem] top-[15.5rem] justify-center items-center" id="5" onClick={() => handlePlanetClick(5)}>
              <img
                src="/assets/planets/planet-fix-5.png"
                alt="background image"
                className="w-[80px] h-[80px]"
                draggable='false'
              />
            </button>
          </DialogTrigger>
          <DialogContent className="w-80">
            <div className="grid gap-4">
              <h4 className="font-medium leading-none">Quest 5</h4>
              <p className="text-sm text-muted-foreground mb-2">
                Berikut adalah beberapa task yang perlu diselesaikan :
              </p>
            </div>
            <div>
              {((currentPlanet === 5) && (taskData)) ? (taskData.map((task, i) => (
                  <div key={i} className="flex flex-row justify-center items-center mb-2">
                    <div className="w-4/5">{task.desc}</div>
                    <div className="w-1/5">
                      <Link href={task.link}>
                        <button className="bg-[#FEAE33] text-black font-bold rounded-full px-3 py-1 hover:bg-[#E19323] transition-transform duration-200 transform hover:scale-105">
                          Let's Go
                        </button>
                      </Link>
                    </div>
                  </div>
              ))) : (<h3 className="justify-center text-center">Tidak ada.</h3>)}
            </div>
          </DialogContent>
        </Dialog>
        <Dialog>
          <DialogTrigger>
            <button className="transition-transform duration-200 transform hover:scale-125 fixed left-[17.6rem] top-[10.4rem] justify-center items-center" id="6" onClick={() => handlePlanetClick(6)}>
              <img
                src="/assets/planets/planet-fix-6.png"
                alt="background image"
                className="w-[80px] h-[80px]"
                draggable='false'
              />
            </button>
          </DialogTrigger>
          <DialogContent className="w-80">
            <div className="grid gap-4">
              <h4 className="font-medium leading-none">Quest 6</h4>
              <p className="text-sm text-muted-foreground mb-2">
                Berikut adalah beberapa task yang perlu diselesaikan :
              </p>
            </div>
            <div>
              {((currentPlanet === 6) && (taskData)) ? (taskData.map((task, i) => (
                  <div key={i} className="flex flex-row justify-center items-center mb-2">
                    <div className="w-4/5">{task.desc}</div>
                    <div className="w-1/5">
                      <Link href={task.link}>
                        <button className="bg-[#FEAE33] text-black font-bold rounded-full px-3 py-1 hover:bg-[#E19323] transition-transform duration-200 transform hover:scale-105">
                          Let's Go
                        </button>
                      </Link>
                    </div>
                  </div>
              ))) : (<h3 className="justify-center text-center">Tidak ada.</h3>)}
            </div>
          </DialogContent>
        </Dialog>
        <Dialog>
          <DialogTrigger>
            <button className="transition-transform duration-200 transform hover:scale-125 fixed left-[12.7rem] bottom-[15.5rem] justify-center items-center" id="7" onClick={() => handlePlanetClick(7)}>
              <img
                src="/assets/planets/planet-fix-7.png"
                alt="background image"
                className="w-[80px] h-[80px]"
                draggable='false'
              />
            </button>
          </DialogTrigger>
          <DialogContent className="w-80">
            <div className="grid gap-4">
              <h4 className="font-medium leading-none">Quest 7</h4>
              <p className="text-sm text-muted-foreground mb-2">
                Berikut adalah beberapa task yang perlu diselesaikan :
              </p>
            </div>
            <div>
              {((currentPlanet === 7) && (taskData)) ? (taskData.map((task, i) => (
                  <div key={i} className="flex flex-row justify-center items-center mb-2">
                    <div className="w-4/5">{task.desc}</div>
                    <div className="w-1/5">
                      <Link href={task.link}>
                        <button className="bg-[#FEAE33] text-black font-bold rounded-full px-3 py-1 hover:bg-[#E19323] transition-transform duration-200 transform hover:scale-105">
                          Let's Go
                        </button>
                      </Link>
                    </div>
                  </div>
              ))) : (<h3 className="justify-center text-center">Tidak ada.</h3>)}
            </div>
          </DialogContent>
        </Dialog>
        <Dialog>
          <DialogTrigger>
            <button className="transition-transform duration-200 transform hover:scale-125 fixed left-[17.8rem] bottom-[7rem] justify-center items-center" id="8" onClick={() => handlePlanetClick(8)}>
              <img
                src="/assets/planets/planet-fix-8.png"
                alt="background image"
                className="w-[80px] h-[80px]"
                draggable='false'
              />
            </button>
          </DialogTrigger>
          <DialogContent className="w-80">
            <div className="grid gap-4">
              <h4 className="font-medium leading-none">Quest 8</h4>
              <p className="text-sm text-muted-foreground mb-2">
                Berikut adalah beberapa task yang perlu diselesaikan :
              </p>
            </div>
            <div>
              {((currentPlanet === 8) && (taskData)) ? (taskData.map((task, i) => (
                  <div key={i} className="flex flex-row justify-center items-center mb-2">
                    <div className="w-4/5">{task.desc}</div>
                    <div className="w-1/5">
                      <Link href={task.link}>
                        <button className="bg-[#FEAE33] text-black font-bold rounded-full px-3 py-1 hover:bg-[#E19323] transition-transform duration-200 transform hover:scale-105">
                          Let's Go
                        </button>
                      </Link>
                    </div>
                  </div>
              ))) : (<h3 className="justify-center text-center">Tidak ada.</h3>)}
            </div>
          </DialogContent>
        </Dialog>
      </DialogContent>
    </Dialog>
  );
};

export default GoalCard;
