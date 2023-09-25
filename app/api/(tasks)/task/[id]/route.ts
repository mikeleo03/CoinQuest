import { NextRequest, NextResponse } from "next/server";
import supabase from "@/utils/supabase";

export async function GET(req: NextRequest) {
    const queryParams = new URLSearchParams(req.url.split("?")[1]);
    const courseId = queryParams.get("id");

  try {
    const { data: course, error } = await supabase
      .from('Tasks')
      .select('*')
      .eq('id', courseId)
      .single(); // Mengambil satu baris kursus berdasarkan ID

    if (error) {
      console.error(error); // Log the error for debugging purposes
      return NextResponse.json({ error: "An error occurred" }, { status: 500 });
    }

    if (!course) {
      return NextResponse.json({ error: "Task not found" }, { status: 404 });
    }

    return NextResponse.json({ data: course }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "An error occurred" }, { status: 500 });
  }
}
