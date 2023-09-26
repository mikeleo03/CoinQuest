import { NextRequest, NextResponse } from "next/server";
import supabase from "@/utils/supabase";
import { useSearchParams } from 'next/navigation'

export async function GET(req: NextRequest) {
  const urlArr = req.url.split("/")
  const courseId = urlArr[urlArr.length - 1];
  console.log(courseId);

  if (!courseId) {
    // Handle the case where courseId is null (or not provided)
    return NextResponse.json({ error: "Course ID is missing" }, { status: 400 });
  }

  try {
    const { data: course, error } = await supabase
      .from('Courses')
      .select('*')
      .eq('id', courseId)
      .single(); // Mengambil satu baris kursus berdasarkan ID

    if (error) {
      console.error(error); // Log the error for debugging purposes
      return NextResponse.json({ error: "An error occurred" }, { status: 500 });
    }

    if (!course) {
      return NextResponse.json({ error: "Course not found" }, { status: 404 });
    }

    return NextResponse.json({ data: course }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "An error occurred" }, { status: 500 });
  }
}
