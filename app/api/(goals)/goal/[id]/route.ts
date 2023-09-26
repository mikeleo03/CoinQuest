import { NextRequest, NextResponse } from "next/server";
import supabase from "@/utils/supabase";

export async function GET(req: NextRequest) {
  const urlArr = req.url.split("/")
  const goalId = urlArr[urlArr.length - 1];
  console.log(goalId);

  try {
    const { data: course, error } = await supabase
      .from('Goals')
      .select('*')
      .eq('id', goalId)
      .single(); // Mengambil satu baris kursus berdasarkan ID

    if (error) {
      console.error(error); // Log the error for debugging purposes
      return NextResponse.json({ error: "An error occurred" }, { status: 500 });
    }

    if (!course) {
      return NextResponse.json({ error: "Goal not found" }, { status: 404 });
    }

    return NextResponse.json({ data: course }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "An error occurred" }, { status: 500 });
  }
}
