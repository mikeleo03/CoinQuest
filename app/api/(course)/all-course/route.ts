import { URLSearchParams } from 'next/dist/compiled/@edge-runtime/primitives/url';
import { NextRequest, NextResponse } from "next/server";
import supabase from "@/utils/supabase";

export async function GET(req: NextRequest) {
  // const { searchParams } = new URL(req.url);
  // const title = searchParams.get('title');

  const { data, error } = await supabase
    .from('Courses')
    .select('*');

    if (error) {
      console.error(error); // Log the error for debugging purposes
      return NextResponse.json({ error: "An error occurred" }, { status: 500 });
    }

  NextResponse.json({ data }, { status: 400 });
}
