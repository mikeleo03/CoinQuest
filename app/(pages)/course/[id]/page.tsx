"use client";

import React, { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Undo2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useUrl } from "nextjs-current-url";
import Subcourse from "@/components/ui/subcourse";

interface CourseProps {
  course: dataItem;
}

interface dataItem {
  id: number;
  title: string;
  desc: string;
}

interface dataSubcourse {
  id: number;
  title: string;
  video_link: string;
  article: string;
}

const CoursePage = () => {
  const { pathname } = useUrl() ?? {};
  const router = useRouter();
  const redirectToCoursesPage = () => {
    router.push("/courses");
  };

  const [listSubcourse, setListSubcourse] = useState<dataSubcourse[]>([]);
  const [titleCourse, setTitleCourse] = useState([]);
  const [id, setId] = useState<number>();
  const [title, setTitle] = useState<string>();
  const [videoLink, setVideoLink] = useState<string>();
  const [article, setArticle] = useState<string>();

  useEffect(() => {
    // Get the value from local storage
    const userId = localStorage.getItem("session");
    const param = pathname ? pathname.split("/") : [];

    // Check if the value exists
    if (userId !== null) {
      const courseId = param[param.length - 1];
      console.log("courseid " + courseId);
      console.log("Value from local storage:", userId);
      fetch(`/api/all-subcourse/${courseId}`, {
        method: "GET",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          "user-id": userId,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          // Update state
          try {
            console.log(data.data);
            setListSubcourse(data.data);
            const firstData = data.data[0];
            setId(firstData.subcourseId);
            setTitle(firstData.title);
            setVideoLink(firstData.videoLink);
            setArticle(firstData.article);
          } catch {
            console.log("data empty");
          }
        });

      fetch(`/api/course/${courseId}`, {
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
          try {
            setTitleCourse(data.data.title);
          } catch {
            console.log("title is null");
          }
        });
    } else {
      console.log("Value not found in local storage");
      // ini redirect ke login
    }
  }, [pathname]);

  function handleOpenSubcourse(
    subcourseId: number,
    title: string,
    videoLink: string,
    article: string
  ): void {
    setId(subcourseId);
    setTitle(title);
    setVideoLink(videoLink);
    setArticle(article);
  }

  return (
    <main className="flex flex-col justify-start items-start overflow-hidden h-screen px-5 py-5">
      {/* Background */}
      <img
        src="/assets/background.png"
        alt="background image"
        className="fixed top-0 left-0 w-screen h-screen"
        draggable="false"
      />

      <div className="w-screen flex flex-row justify-between items-center px-8 pt-8 pb-5 h-1/6 z-10">
        <h1 className="text-4xl text-white font-riffic tracking-wide">
          {titleCourse}
        </h1>
        <Button
          className="flex bg-[#FEAE33] text-black font-bold rounded-full hover:bg-[#E19323] transition-transform duration-300 transform hover:scale-11 mr-3"
          onClick={redirectToCoursesPage}
        >
          <Undo2 className="mr-3" />
          Daftar Courses
        </Button>
      </div>

      {/* <Separator className="py-4" /> */}

      <div className="flex w-fit h-screen z-10">
        <div className="w-1/5 backdrop-filter space-y-4 backdrop-blur-none bg-opacity-30 z-10 overflow-y-auto">
          <ul>
            {listSubcourse &&
              listSubcourse.map((subcourse, i) => (
                <li
                  key={subcourse.id}
                  onClick={() =>
                    handleOpenSubcourse(
                      subcourse.id,
                      subcourse.title,
                      subcourse.video_link,
                      subcourse.article
                    )
                  }
                >
                  <h1 className="text-white text-md font-poppins py-4 hover:bg-gray-500 hover:backdrop-blur-none hover:backdropfilter hover:bg-opacity-30 hover:rounded-3xl cursor-pointer p-3">
                    {subcourse.title}
                  </h1>
                </li>
              ))}
          </ul>
        </div>

        <Separator orientation="vertical" className="mx-5" />

        <Subcourse
          id={id}
          title={title}
          videoLink={videoLink}
          article={article}
        />
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
