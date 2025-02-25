import connectionToDatabase from "@/lib/mongoose";
import SyntheticData from "@/models/SyntheticData";
import { NextResponse } from "next/server";
import axios from "axios";
export async function POST(request) {
  try {
    // Connect to the database
    const headers = new Headers();
    headers.append("Access-Control-Allow-Origin", "*");
    headers.append("Access-Control-Allow-Methods", "POST, OPTIONS");
    headers.append("Access-Control-Allow-Headers", "Content-Type");

    // Handle preflight (CORS) requests
    if (request.method === "OPTIONS") {
      return new Response(null, { headers, status: 204 });
    }
    await connectionToDatabase();

    // Parse request body
    const data = await request.json();
    if (!data) {
      return NextResponse.json({ error: "Invalid data" }, { status: 400 });
    }

    // Save to the database
    const syntheticData = new SyntheticData(data);
    await syntheticData.save();

    const ngrokResponse = await axios.post(
      "https://3227-34-28-93-222.ngrok-free.app/generate",
      data,
      {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      }
    );
    const csvData = ngrokResponse.data
    console.log("Data sent to ngrok successfully✅✅");

    return NextResponse.json({syntheticFile:csvData}, { status: 201 });
  } catch (err) {
    console.error("Error saving data:", err);
    return NextResponse.json(
      { error: "Error creating synthetic data" },
      { status: 500 }
    );
  }
}
