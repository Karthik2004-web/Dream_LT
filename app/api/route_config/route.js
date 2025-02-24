import { NextResponse } from 'next/server';
import { connectDB, DataConfig } from '@/lib/mongoose';

export async function GET() {
  try {
    await connectDB();
    
    const configs = await DataConfig.find({})
      .sort({ createdAt: -1 })
      .limit(100);
    
    return NextResponse.json({ 
      success: true, 
      data: configs
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 }
    );
  }
}