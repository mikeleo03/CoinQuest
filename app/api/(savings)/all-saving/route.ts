
import { NextRequest, NextResponse } from "next/server";
import supabase from "@/utils/supabase";

export async function GET(req: NextRequest) {
  try {

    const userId = req.headers.get('user-id');

    // Check if userId is null or not
    if (userId === null) {
      return NextResponse.json({ error: "User ID is null" }, { status: 400 });
    }

    const { data, error } = await supabase
      .from('Savings')
      .select('*')
      .eq('id_user', userId);

    if (error) {
      console.error(error); // Log the error for debugging purposes
      return NextResponse.json({ error: "An error occurred" }, { status: 500 });
    }
    
    return NextResponse.json({ data }, { status: 200 }); // Return a 200 status on success
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "An error occurred" }, { status: 500 });
  }
}

