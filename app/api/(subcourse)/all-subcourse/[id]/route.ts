import { NextRequest, NextResponse } from "next/server";
import supabase from "@/utils/supabase";

export async function GET(req: NextRequest) {
  const urlArr = req.url.split("/")
  const courseId = urlArr[urlArr.length - 1];
  console.log(courseId);

  try {
    const { data: subcourses, error } = await supabase
      .from('Subcourses')
      .select('*')
      .eq('id_course', courseId);

    if (error) {
      console.error(error); // Log the error for debugging purposes
      return NextResponse.json({ error: "An error occurred" }, { status: 500 });
    }

    if (!subcourses) {
      return NextResponse.json({ error: "Subcourses not found" }, { status: 404 });
    }

    return NextResponse.json({ data: subcourses }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "An error occurred" }, { status: 500 });
  }
}
