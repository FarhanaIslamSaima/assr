import prisma from "@/Utils/connect";
import { NextResponse } from "next/server";

export const GET = async (req, { params }) => {
    const { slug, event } = params;

  try {
    const events = await prisma.event.findMany({
        where: {
            year: slug,
            category: event
        },
    })

    return new NextResponse(JSON.stringify(events));
    
  } catch (err) {
    console.log(err);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }, { status: 500 })
    );
  }
};