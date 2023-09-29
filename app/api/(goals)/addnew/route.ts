import { NextRequest, NextResponse } from "next/server";
import supabase from "@/utils/supabase";

export async function POST(req: NextRequest, res: NextResponse) {
  try {
    // Simulate authentication logic (replace with your actual authentication mechanism)
    const requestBody = await req.json();
    const { id_user, title, desc, price } = requestBody;

    // Insert the new goal into the Goals table
    const { data: newGoal, error: insertError } = await supabase
      .from('Goals')
      .insert([{ id_user, title, desc, price }])
      .select();

    if (insertError) {
      console.error(insertError); // Log the error for debugging purposes
      return NextResponse.json({ error: "An error occurred while saving the goal" }, { status: 500 });
    }

    console.log("newGoal:", newGoal);
    return NextResponse.json({ data: newGoal }, { status: 200 }); // Return 200 status for successful creation

  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "An error occurred" }, { status: 500 });
  }
}
