import { NextRequest, NextResponse } from "next/server";
import supabase from "@/utils/supabase";

export async function PATCH(req: NextRequest, res: NextResponse) {
  const urlArr = req.url.split("/")
  const userId = urlArr[urlArr.length - 1];
  console.log(userId);

  try {
    const { data: user, error: getUserError } = await supabase
      .from('Users')
      .select('*')
      .eq('id', userId)
      .single(); // Mengambil satu baris kursus berdasarkan ID

      if (getUserError) {
        console.error(getUserError);
        return NextResponse.json({ error: "An error occurred while fetching user data" }, { status: 500 });
      }

      if (!user) {
        return NextResponse.json({ error: "User not found" }, { status: 404 });
      }

      console.log(user);

      // Ambil data pembaruan dari permintaan
      const requestBody = await req.json();
      const { name, birthdate, email, password, parent_email, parent_photo } = requestBody;
      console.log(requestBody);

      // Lakukan pembaruan data pengguna
      const { data: updatedUser, error: updateError } = await supabase
        .from('Users')
        .update({ name, birthdate, email, password, parent_email, parent_photo })
        .eq('id', userId)
        .single();

      if (updateError) {
        console.error(updateError);
        return NextResponse.json({ error: "An error occurred while updating user data" }, { status: 500 });
      }

      console.log("updatedUser:", updatedUser);
      return NextResponse.json({ data: updatedUser }, { status: 200 });

  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "An error occurred" }, { status: 500 });
  }
}
