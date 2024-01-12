import prisma from "@/Utils/connect";
import { NextResponse } from "next/server";

export const GET = async (req) => {

  try {
    const posts = await prisma.post.findMany({
        include: {
            user: true,
            tag: true
        }
    })

    return new NextResponse(JSON.stringify(posts));
    
  } catch (err) {
    console.log(err);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }, { status: 500 })
    );
  }
};






