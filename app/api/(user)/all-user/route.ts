import { NextRequest, NextResponse } from "next/server";
import supabase from "@/utils/supabase";

export async function GET(req: NextRequest) {

  const { data, error } = await supabase
    .from('Users')
    .select('*');

    if (error) {
      console.error(error); // Log the error for debugging purposes
      return NextResponse.json({ error: "An error occurred" }, { status: 500 });
    }

  NextResponse.json({ data }, { status: 400 });
}
