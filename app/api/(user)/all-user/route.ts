
import { NextRequest, NextResponse } from "next/server";
import supabase from "@/utils/supabase";

export async function GET(req: NextRequest) {
  try {
    const { data, error } = await supabase
      .from('Users')
      .select('*');

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

export async function POST(req: NextRequest, res: NextResponse) {
  try {
    // Simulate authentication logic (replace with your actual authentication mechanism)
    const requestBody = await req.json();
    const { email, password } = requestBody;

    const { data: user, error } = await supabase
          .from('Users')
          .select('*')
          .eq('email', email)
          .eq('password', password)
          .single(); // Mengambil satu baris kursus berdasarkan ID


    if (error) {
      console.error(error); // Log the error for debugging purposes
      return NextResponse.json({ error: "An error occurred" }, { status: 500 });
    }
      
    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }
      
  return NextResponse.json({ data: user }, { status: 200 });

  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "An error occurred" }, { status: 500 });
  }
}