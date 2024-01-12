import prisma from "@/Utils/connect";
import { NextResponse } from "next/server";

export const GET = async (req) => {
  try {
    const panels = await prisma.panel.findMany();

    return new NextResponse(JSON.stringify(panels));
    
  } catch (err) {
    console.log(err);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }, { status: 500 })
    );
  }
};






