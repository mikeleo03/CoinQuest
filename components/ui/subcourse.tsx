import { ScrollArea } from "@radix-ui/react-scroll-area";
import React from "react";
import { Button } from "./button";

const Subcourse = ({
  id,
  title,
  videoLink,
  article,
}: {
  id: Number | undefined;
  title: string | undefined;
  videoLink: string | undefined;
  article: string | undefined;
}) => {
  return (
    <div className="w-fit h-5/6 ml-3 bg-white rounded-xl backdrop-filter backdrop-blur-none bg-opacity-60 z-10 pt-5 px-8">
      <ScrollArea className="h-full">
        <div className="h-full overflow-y-auto px-1">
          <h1 className="text-4xl font-poppins font-semibold tracking-wide pb-6">
            {title}
          </h1>
          <div className="flex justify-center items-center py-3">
            <iframe
              className="w-2/3 aspect-video"
              src={videoLink}
              title="Video Player"
            ></iframe>
          </div>
          <p className="mt-3 font-md font-poppins text-lg">{article}</p>
          <div className="flex justify-end py-6 pt-4">
            <Button className="bg-[#FEAE33] text-black text-lg font-bold rounded-full px-14 py-6 hover:bg-[#E19323] transition-transform duration-200 transform hover:scale-105">
              Lanjut!
            </Button>
          </div>
        </div>
      </ScrollArea>
    </div>
  );
};

export default Subcourse;
