import { NextRequest, NextResponse } from "next/server";
import supabase from "@/utils/supabase";

interface Quest {
    id: number,
    id_goals: number
}

interface Tasks {
    id: number,
    id_quest: number,
    desc: string,
    link: string,
    is_done: boolean
}

export async function GET(req: NextRequest) {
    const urlArr = req.url.split("/")
    const questId = urlArr[urlArr.length - 1];
    console.log(questId);

    if (!questId) {
        return NextResponse.json({ error: "Quest ID is missing" }, { status: 400 })
    }

    try {
        // Fetch all quests
        const { data: quests, error: questsError } = await supabase
            .from('Quests')
            .select('*')
            .eq('id', questId) as { data: Quest[], error: any };

        if (questsError) {
        console.error(questsError);
        return NextResponse.json({ error: "An error occurred while fetching quests" }, { status: 500 });
        }

        // Fetch all tasks
        const { data: tasks, error: tasksError } = await supabase
            .from('Tasks')
            .select('*') as { data: Tasks[], error: any };

        if (tasksError) {
        console.error(tasksError);
        return NextResponse.json({ error: "An error occurred while fetching tasks" }, { status: 500 });
        }

        // Combine the quests and tasks data based on id_quest
        const combinedData = quests.map((quest) => {
        const questTasks = tasks.filter((task) => task.id_quest === quest.id);
            return {
                ...quest,
                tasks: questTasks,
            };
        });

        return NextResponse.json({ data: combinedData }, { status: 200 });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: "An error occurred" }, { status: 500 });
    }
}
