import prisma from "@/Utils/connect";
import { NextResponse } from "next/server";

export const GET = async (req, { params }) => {
    const { id } = params;

  try {
    const posts = await prisma.post.findUnique({
        where: {id},
        include: {user: true, tag:true, comments: true}
    })

    return new NextResponse(JSON.stringify(posts));
    
  } catch (err) {
    console.log(err);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }, { status: 500 })
    );
  }
};






