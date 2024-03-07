import prisma from "@/Utils/connect";
import { NextResponse } from "next/server";

export const GET = async (req,) => {
 
  
  try {
    const events = await prisma.event.findMany({
      where:{
           category:event
      }
    });
    console.log(events)
    return new NextResponse(JSON.stringify(events.category));
    
  } catch (err) {
    console.log(err);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }, { status: 500 })
    );
  }
};