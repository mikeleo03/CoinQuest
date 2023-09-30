import React, { useEffect, useState } from "react";
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
  const [questions, setQuestions] = useState<{ user: string; ai: string }[]>(
    []
  );
  const [user, setUser] = useState("");
  const addQuestion = (question: string) => {
    const aiResponse = generateAIResponse(question); // Fungsi untuk menghasilkan respons AI
    setQuestions([...questions, { user: question, ai: aiResponse }]);
  };

  useEffect(() => {
    const userId = localStorage.getItem("session");
    if (userId !== null) {
      fetch(`/api/user/${userId}`, {
        method: "GET",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          "user-id": userId,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          setUser(data.data.name);
        });
    } else {
      setUser("User");
    }
  }, []);

  const generateAIResponse = (userQuestion: string): string => {
    if (userQuestion.includes("Apa itu uang?")) {
      return "Uang adalah alat tukar yang digunakan untuk membeli barang dan jasa.";
    } else if (userQuestion.includes("Bagaimana cara menabung?")) {
      return "Menabung adalah cara menyimpan uang secara teratur. Anda dapat memulai dengan menyisihkan sebagian uang Anda setiap bulan.";
    } else if (userQuestion.includes("Kenapa penting menabung?")) {
      return "Menabung penting karena dapat membantu Anda merencanakan masa depan Anda dan memiliki uang cadangan untuk kebutuhan mendesak.";
    } else if (userQuestion.includes("Apa bedanya menabung dan investasi?")) {
      return "Menabung adalah menyimpan uang Anda di bank atau tempat lain yang aman. Investasi adalah cara untuk mengalokasikan uang Anda untuk memperoleh keuntungan lebih besar dalam jangka panjang.";
    } else if (userQuestion.includes("Apa itu bunga?")) {
      return "Bunga adalah uang ekstra yang Anda dapatkan saat Anda menabung di bank atau meminjam uang. Ini adalah imbalan atas penggunaan uang Anda oleh orang lain.";
    } else if (userQuestion.includes("Bagaimana cara mendapatkan uang?")) {
      return "Anda dapat mendapatkan uang dengan bekerja, menjual barang atau jasa, atau melalui investasi. Penting untuk belajar cara mengelola uang dengan bijak.";
    } else {
      return "Maaf, saya tidak mengerti pertanyaan Anda. Silakan tanyakan pertanyaan lain seputar finansial.";
    }
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
                    {questions.map((qna, index) => (
                      <div key={index}>
                        <Label
                          htmlFor={`chatbox-${index}`}
                          className={`right float-right pr-5 flex font-bold pt-2`}
                        >
                          {user}
                        </Label>
                        <div
                          className={`py-2 mx-3 bg-[#FEAE33] rounded-lg border-solid border-2 max-w-4/5 my-2 float-right text-right px-5`}
                          style={{ clear: index % 2 === 0 ? "right" : "right" }}
                        >
                          {qna.user}
                        </div>
                        <div
                          className={`py-2 mx-3 bg-[#33B2FE] rounded-lg border-solid border-2 my-2 float-left text-left max-w-[20rem] px-5 `}
                          style={{ clear: index % 2 === 0 ? "right" : "right" }}
                        >
                          {qna.ai}
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
