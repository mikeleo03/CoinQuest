import { NextRequest, NextResponse } from "next/server";
import supabase from "@/utils/supabase";

export async function POST(req: NextRequest, res: NextResponse) {
    try {
      // Simulate authentication logic (replace with your actual authentication mechanism)
      const requestBody = await req.json();
      const { name, birthdate, email, password, parent_email, parent_photo } = requestBody;
  
      // Check if the email already exists in the Users table
      const { data: existingUser, error: emailCheckError } = await supabase
        .from('Users')
        .select('email')
        .eq('email', email)
        .single();
  
      if (emailCheckError && emailCheckError.message !== 'JSON object requested, multiple (or no) rows returned') {
        console.error("Email check error:", emailCheckError); // Log the specific email check error
        return NextResponse.json({ error: "An error occurred while checking email uniqueness" }, { status: 500 });
      }
  
      if (existingUser) {
        console.error(existingUser);
        return NextResponse.json({ error: "Email already exists" }, { status: 400 });
      }
  
      // If the email is unique, insert the new user into the table
      const { data: newUser, error: insertError } = await supabase
        .from('Users')
        .insert([{ name, birthdate, email, password, parent_email, parent_photo }])
        .select()
  
      if (insertError) {
        console.error(insertError); // Log the error for debugging purposes
        return NextResponse.json({ error: "An error occurred while saving the user" }, { status: 500 });
      }
  
      console.log("newUser:", newUser);
      return NextResponse.json({ data: newUser }, { status: 200 }); // Return 200 status for successful creation
  
    } catch (error) {
      console.error(error);
      return NextResponse.json({ error: "An error occurred" }, { status: 500 });
    }
  }