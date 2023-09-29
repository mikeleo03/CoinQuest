import { NextRequest, NextResponse } from "next/server";
import supabase from "@/utils/supabase";

interface Courses {
    id: number;
    title: string;
    desc: string;
    image: string;
    coin: number;
}

interface Quizzes {
    id: number,
    id_course: number,
    question: string,
    answer: boolean
}

export async function GET(req: NextRequest) {
    const urlArr = req.url.split("/")
    const courseId = urlArr[urlArr.length - 1];
    console.log(courseId);

    try {
        if (!courseId) {
            return NextResponse.json({ error: "Course ID is missing" }, { status: 400 })
        }

        const { data: courses, error: coursesError } = await supabase
                .from('Quests')
                .select('*')
                .eq('id', courseId) as { data: Courses[], error: any };

        if (coursesError) {
            console.log(coursesError);
            return NextResponse.json({ error: "An error occurred while fetching courses" }, { status: 500 })
        }

        const { data: quizzes, error: quizzesError } = await supabase
                .from('Quizzes')
                .select('*') as { data: Quizzes[], error: any };

        if (quizzesError) {
            console.log(quizzesError);
            return NextResponse.json({ error: "An error occurred while fetching quizzes" }, { status: 500 })
        }

        const combinedData = courses.map((course) => {
        const courseQuiz = quizzes.filter((quiz) => quiz.id_course === course.id);
            return {
                ...course,
                quizzes: courseQuiz,
            };
        });

        return NextResponse.json({ data: combinedData }, { status: 200 });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: "An error occurred" }, { status: 500 })
    }
}
