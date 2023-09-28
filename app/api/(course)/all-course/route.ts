import { NextRequest, NextResponse } from "next/server";
import supabase from "@/utils/supabase";

interface Course {
  // Define the properties of a course
  id: number;
  title: string;
  desc: string;
  image: string;
  coin: number;
  // Add other properties as needed
}

// Define an interface for UserCourse
interface UserCourse {
  id_course: number;
  is_open: boolean;
  is_done: boolean;
  // Add other properties as needed
}

export async function GET(req: NextRequest) {

  const userId = req.headers.get('user-id');
  console.log(userId);

  try {
    // Fetch all courses
    const { data: courses, error: coursesError } = await supabase
      .from('Courses')
      .select('*') as { data: Course[], error: any };

    if (coursesError) {
      console.error(coursesError); // Log the error for debugging purposes
      return NextResponse.json({ error: "An error occurred while fetching courses" }, { status: 500 });
    }

    // Fetch User_Course data for user 2
    const { data: userCourses, error: userCoursesError } = await supabase
      .from('User_Course')
      .select('id_course, is_open, is_done')
      .eq('id_user', userId) as { data: UserCourse[], error: any };

    if (userCoursesError) {
      console.error(userCoursesError); // Log the error for debugging purposes
      return NextResponse.json({ error: "An error occurred while fetching user courses" }, { status: 500 });
    }

    // Combine the courses and userCourses data based on id_course
    const combinedData = courses.map((course) => {
      const userCourse = userCourses.find((uc) => uc.id_course === course.id);
      return {
        ...course,
        is_open: userCourse?.is_open || false,
        is_done: userCourse?.is_done || false,
      };
    });

    return NextResponse.json({ data: combinedData }, { status: 200 });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "An error occurred" }, { status: 500 });
  }
}





// import { NextRequest, NextResponse } from "next/server";
// import supabase from "@/utils/supabase";

// export async function GET(req: NextRequest) {
//   try {
//     // Create a subquery to fetch courses associated with user 2 from User_Course
//     const { data: userCourses, error: userCoursesError } = await supabase
//       .from('User_Course')
//       .select('id_course')
//       .eq('id_user', 2);

//     if (userCoursesError) {
//       console.error(userCoursesError); // Log the error for debugging purposes
//       return NextResponse.json({ error: "An error occurred while fetching user courses" }, { status: 500 });
//     }

//     // Extract the course IDs from the subquery result
//     const courseIds = userCourses?.map((row) => row.id_course) || [];

//     if (courseIds.length === 0) {
//       // Handle the case where no courses were found for the user
//       return NextResponse.json({ data: [] }, { status: 200 });
//     }

//     // Fetch the courses based on the extracted course IDs
//     const { data, error } = await supabase
//       .from('Courses')
//       .select('*')
//       .in('id', courseIds);

//     if (error) {
//       console.error(error); // Log the error for debugging purposes
//       return NextResponse.json({ error: "An error occurred while fetching courses" }, { status: 500 });
//     }

//     return NextResponse.json({ data }, { status: 200 }); // Return a 200 status on success
//   } catch (err) {
//     console.error(err);
//     return NextResponse.json({ error: "An error occurred" }, { status: 500 });
//   }
// }
