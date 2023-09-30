import React, { useState } from "react";
import { Button } from "./button";
import Image from "next/image";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Card } from "./card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "./label";
import { Input } from "./input";
import { SendHorizontal } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@radix-ui/react-popover";

interface ChatbotProps {}

const Chatbot: React.FC<ChatbotProps> = () => {
  const [questions, setQuestions] = useState<string[]>([]);

  const addQuestion = (question: string) => {
    setQuestions([...questions, question]);
  };

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>
          <div className="relative">
            <Popover>
              <PopoverTrigger asChild>
                <Button className="bg-transparent rounded-full hover:bg-transparent transition-transform duration-300 transform hover:scale-110">
                  <Image src="/assets/chat.png" width={80} height={80} alt="" />
                </Button>
              </PopoverTrigger>
              <PopoverContent
                className="w-[30rem] h-full bg-white rounded-xl mb-24"
                side="left"
              >
                <div className="grid gap-4">
                  <div className="space-y-1 py-2">
                    <h1 className="text-xl font-riffic leading-none text-black">
                      AI Chatbot
                    </h1>
                    <p className="text-sm text-gray-500">
                      Apa yang kamu ingin tanyakan hari ini?
                    </p>
                  </div>
                  <div className="bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-none bg-opacity-30 border border-gray-100 grid overflow-y-auto max-h-[20rem]">
                    {questions.map((question, index) => (
                      <div key={index}>
                        <Label
                          htmlFor={`chatbox-${index}`}
                          className={`${
                            index % 2 === 0
                              ? "text-right float-right pr-5 flex"
                              : "text-left float-left pl-5 flex"
                          } font-bold`}
                        >
                          {index % 2 === 0 ? "User" : "AI"}
                        </Label>
                        <div
                          className={`${
                            index % 2 === 0
                              ? "float-right clear-right text-right px-5"
                              : "float-left clear-left text-left px-5"
                          } py-2 mx-3 bg-[#FEAE33] rounded-lg border-solid border-2 max-w-4/5 my-2 `}
                          style={{ clear: index % 2 === 0 ? "right" : "left" }}
                        >
                          {question}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="">
                    <div className="flex space-x-2 p-4">
                      <Input
                        id="width"
                        className="border-2 py-5 border-black focus:border-white  "
                        placeholder="Masukkan pertanyaanmu.."
                        onKeyPress={(e) => {
                          if (e.key === "Enter") {
                            addQuestion(e.currentTarget.value);
                            e.currentTarget.value = "";
                          }
                        }}
                      />
                      <Button
                        type="button"
                        className=""
                        onClick={() => {
                          const input = document.getElementById(
                            "width"
                          ) as HTMLInputElement;
                          addQuestion(input.value);
                          input.value = "";
                        }}
                      >
                        <SendHorizontal />
                      </Button>
                    </div>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          </div>
        </TooltipTrigger>
        <TooltipContent>
          <p>Chatbot AI</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default Chatbot;
