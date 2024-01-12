import prisma from "@/Utils/connect";
import { NextResponse } from "next/server";

export const GET = async (req, { params }) => {
    const { slug } = params;
    let len = slug.length;

  try {
    if(len == 4){
      const events = await prisma.event.findMany({
        where: {year: slug},
      })
      return new NextResponse(JSON.stringify(events));
    }
    else{
      const events = await prisma.event.findUnique({
          where: {id : slug},
      })
      return new NextResponse(JSON.stringify(events));
    }
    
  } catch (err) {
    console.log(err);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }, { status: 500 })
    );
  }
};