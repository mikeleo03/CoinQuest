import { NextRequest, NextResponse } from "next/server";
import supabase from "@/utils/supabase";

interface Quest {
    id: number,
    id_goals: number
}

interface Goals {
    id: number,
    id_user: number,
    title: string,
    desc: string,
    price: number,
    is_done: boolean
}

export async function GET(req: NextRequest) {
    const urlArr = req.url.split("/")
    const goalId = urlArr[urlArr.length - 1];
    console.log(goalId);

    if (!goalId) {
        return NextResponse.json({ error: "Quest ID is missing" }, { status: 400 })
    }

    try {
        // Fetch all quests
        const { data: goals, error: goalError } = await supabase
            .from('Goals')
            .select('*')
            .eq('id', goalId) as { data: Quest[], error: any };

        if (goalError) {
        console.error(goalError);
        return NextResponse.json({ error: "An error occurred while fetching quests" }, { status: 500 });
        }

        // Fetch all tasks
        const { data: quests, error: questError } = await supabase
            .from('Quests')
            .select('*') as { data: Quest[], error: any };

        if (questError) {
        console.error(questError);
        return NextResponse.json({ error: "An error occurred while fetching tasks" }, { status: 500 });
        }

        // Combine the quests and tasks data based on id_quest
        const combinedData = goals.map((goal) => {
        const goalQuest = quests.filter((quest) => quest.id_goals === goal.id);
            return {
                ...goal,
                quests: goalQuest,
            };
        });

        return NextResponse.json({ data: combinedData }, { status: 200 });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: "An error occurred" }, { status: 500 });
    }
}
