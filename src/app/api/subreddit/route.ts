import { getAuthSession } from "@/lib/auth";
import { db } from "@/lib/db";
import { SubredditValidator } from "@/lib/valudators/subreddit";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

export async function POST(req: NextRequest) {
  try {
    const session = await getAuthSession();

    if (!session?.user) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const body = await req.json();

    const { name } = SubredditValidator.parse(body);

    const subredditExists = await db.subreddit.findFirst({ where: { name } });
    if (subredditExists) {
      return new NextResponse("Subreddit already exists", { status: 409 });
    }

    const subreddit = await db.subreddit.create({
      data: {
        name,
        creatorId: session.user.id,
      },
    });

    await db.subscription.create({
      data: {
        userId: session.user.id,
        subredditId: subreddit.id,
      },
    });

    return new Response(subreddit.name);
  } catch (err) {
    if (err instanceof z.ZodError) {
      return new Response(err.message, { status: 422 });
    }

    return new NextResponse("Could not create subreddit", { status: 500 });
  }
}
