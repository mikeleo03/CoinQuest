import React from "react";

import { Button } from "@/components/ui/button";
import Link from "next/link";

interface CourseProps {
  course: dataItem;
}

interface dataItem {
  id: number;
  title: string;
  desc: string;
}

const CoursePage = () => {
  return (
    <main className="flex flex-col justify-start items-start overflow-hidden h-screen">
      {/* Background */}
      <img
        src="/assets/background.png"
        alt="background image"
        className="fixed top-0 left-0 w-screen h-screen"
        draggable='false'
      />

      <div className="w-screen flex flex-row justify-between items-center px-8 pt-8 pb-5 h-1/6">
        <h1 className="z-10 text-4xl text-white font-riffic tracking-wide">
          Ini Judul Course
        </h1>
        <Link
          href="/courses"
          className="z-10 text-lg text-white font-poppins tracking-wide underline hover:opacity-80"
        >
          Kembali ke daftar courses
        </Link>
      </div>

      <div className="flex flex-row w-screen h-5/6 z-10">
        <div className="w-1/4 bg-gray-400 backdrop-filter backdrop-blur-none bg-opacity-30 z-10 overflow-y-auto">
          <ul>
            <li>
              <h1 className="text-white text-lg font-poppins  pl-8 py-4 pr-6 hover:bg-gray-500 hover:backdrop-blur-none hover:backdropfilter hover:bg-opacity-30 cursor-pointer">
                Judul Subcourse 1
              </h1>
            </li>
            <li>
              <h1 className="text-white text-lg font-poppins  pl-8 py-4 pr-6 hover:bg-gray-500 hover:backdrop-blur-none hover:backdropfilter hover:bg-opacity-30 cursor-pointer">
                Judul Subcourse 2
              </h1>
            </li>
            <li>
              <h1 className="text-white text-lg font-poppins  pl-8 py-4 pr-6 hover:bg-gray-500 hover:backdrop-blur-none hover:backdropfilter hover:bg-opacity-30 cursor-pointer">
                Judul Subcourse 3
              </h1>
            </li>
            <li>
              <h1 className="text-white text-lg font-poppins  pl-8 py-4 pr-6 hover:bg-gray-500 hover:backdrop-blur-none hover:backdropfilter hover:bg-opacity-30 cursor-pointer">
                Judul Subcourse 4
              </h1>
            </li>
            <li>
              <h1 className="text-white text-lg font-poppins  pl-8 py-4 pr-6 hover:bg-gray-500 hover:backdrop-blur-none hover:backdropfilter hover:bg-opacity-30 cursor-pointer">
                Judul Subcourse 5
              </h1>
            </li>
            <li>
              <h1 className="text-white text-lg font-poppins  pl-8 py-4 pr-6 hover:bg-gray-500 hover:backdrop-blur-none hover:backdropfilter hover:bg-opacity-30 cursor-pointer">
                Judul Subcourse 6
              </h1>
            </li>
            <li>
              <h1 className="text-white text-lg font-poppins  pl-8 py-4 pr-6 hover:bg-gray-500 hover:backdrop-blur-none hover:backdropfilter hover:bg-opacity-30 cursor-pointer">
                Judul Subcourse 7
              </h1>
            </li>
            <li>
              <h1 className="text-white text-lg font-poppins  pl-8 py-4 pr-6 hover:bg-gray-500 hover:backdrop-blur-none hover:backdropfilter hover:bg-opacity-30 cursor-pointer">
                Judul Subcourse 8
              </h1>
            </li>
            <li>
              <h1 className="text-white text-lg font-poppins  pl-8 py-4 pr-6 hover:bg-gray-500 hover:backdrop-blur-none hover:backdropfilter hover:bg-opacity-30 cursor-pointer">
                Judul Subcourse 9
              </h1>
            </li>
            <li>
              <h1 className="text-white text-lg font-poppins  pl-8 py-4 pr-6 hover:bg-gray-500 hover:backdrop-blur-none hover:backdropfilter hover:bg-opacity-30 cursor-pointer">
                Judul Subcourse 10
              </h1>
            </li>
          </ul>
        </div>
        <div className="w-3/4 bg-white backdrop-filter backdrop-blur-none bg-opacity-60 z-10 overflow-y-auto py-5 px-8">
          <h1 className="text-3xl font-riffic tracking-wide pb-6">
            Ini Judul Subcourse 1
          </h1>
          <iframe
            className=" w-11/12 h-5/6 pb-6"
            src="https://www.youtube.com/embed/tgbNymZ7vqY"
          ></iframe>
          <p className="font-bold font-poppins text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam eius
            quaerat nihil nostrum quas. Neque asperiores beatae a facere iure
            vero autem architecto, totam itaque voluptas fugiat? Unde, placeat
            ipsam! Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Veniam eius quaerat nihil nostrum quas. Neque asperiores beatae a
            facere iure vero autem architecto, totam itaque voluptas fugiat?
            Unde, placeat ipsam! Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Veniam eius quaerat nihil nostrum quas. Neque
            asperiores beatae a facere iure vero autem architecto, totam itaque
            voluptas fugiat? Unde, placeat ipsam! Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Veniam eius quaerat nihil nostrum
            quas. Neque asperiores beatae a facere iure vero autem architecto,
            totam itaque voluptas fugiat? Unde, placeat ipsam! Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Veniam eius quaerat nihil
            nostrum quas. Neque asperiores beatae a facere iure vero autem
            architecto, totam itaque voluptas fugiat? Unde, placeat ipsam!
          </p>
          <div className="flex justify-end py-6 pt-4">
            <Button className="bg-[#FEAE33] text-black text-lg font-bold rounded-full px-14 py-6 hover:bg-[#E19323] transition-transform duration-200 transform hover:scale-105">
              Lanjut!
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
};

// export const getData = () => {
//   const dataArray: dataItem[] = [
//     { id: 1, title: "Item 1", desc: "Description for Item 1" },
//     { id: 2, title: "Item 2", desc: "Description for Item 2" },
//     { id: 3, title: "Item 3", desc: "Description for Item 3" },
//   ];
//   return (
//     <div>
//       {dataArray.map((item, index) => (
//         <CoursePage key={index} course={item} />
//       ))}
//       console.log(dataArray)
//     </div>
//   );
// };

export default CoursePage;
