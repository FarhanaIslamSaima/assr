import prisma from "@/Utils/connect";
import { NextResponse } from "next/server";

export const GET = async (req) => {
  try {
    const achievements = await prisma.achievement.findMany();

    return new NextResponse(JSON.stringify(achievements));
    
  } catch (err) {
    console.log(err);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }, { status: 500 })
    );
  }
};






