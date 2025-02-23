// app/api/submit-config/route.js
import connectionToDatabase from "@/lib/mongoose";
import SyntheticData from "@/models/SyntheticData";
import { NextResponse } from "next/server";
//connectDb();
export async function POST(request) {
  try {
    await connectionToDatabase();
    const data = await request.json();
    const syntheticData = new SyntheticData(data);
    await syntheticData.save();
    return NextResponse.json(syntheticData, { status: 201 });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ error: "Error creating synthetic data" }, { status: 500 });
  }
}