import { NextRequest, NextResponse } from "next/server";
import supabase from "@/utils/supabase";

export async function POST(req: NextRequest, res: NextResponse) {
    try {

      const userId = req.headers.get('user-id');

      // Check if userId is null or not
      if (userId === null) {
        return NextResponse.json({ error: "User ID is null" }, { status: 400 });
      }

      const requestBody = await req.json();
      const { amount } = requestBody;
  
      // Check if the email already exists in the Users table
      const { data: updatedCoinUser, error: updateError } = await supabase
      .from('Users')
      .update({ coin: amount })
      .eq('id', userId)
      .single();

      if (updateError) {
        console.error(updateError); // Log the error for debugging purposes
        return NextResponse.json({ error: "An error occurred while update coin user" }, { status: 500 });
      }
  
      // If the email is unique, insert the new user into the table
      const { data: newSaving, error: insertError } = await supabase
        .from('Savings')
        .insert([{ id_user: userId, amount }])
        .select()
  
      if (insertError) {
        console.error(insertError); // Log the error for debugging purposes
        return NextResponse.json({ error: "An error occurred while insert saving" }, { status: 500 });
      }
  
      return NextResponse.json({ data: newSaving }, { status: 200 }); // Return 200 status for successful creation
  
    } catch (error) {
      console.error(error);
      return NextResponse.json({ error: "An error occurred" }, { status: 500 });
    }
  }