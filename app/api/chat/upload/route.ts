import { NextResponse } from 'next/server';
import { writeFile } from 'fs/promises';
import path from 'path';

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const file = formData.get('file') as File;
    
    if (!file) {
      return NextResponse.json({ error: 'No file uploaded' }, { status: 400 });
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Create unique filename
    const ext = path.extname(file.name);
    const uniqueId = Date.now() + '-' + Math.round(Math.random() * 1e9);
    const filename = `${uniqueId}${ext}`;
    const uploadPath = path.join(process.cwd(), 'public', 'uploads', filename);

    await writeFile(uploadPath, buffer);

    // Simulated CRM log (Lead generation)
    console.log(`HOT LEAD! File uploaded: ${filename} (Name: ${file.name})`);

    const fileUrl = `/uploads/${filename}`;
    return NextResponse.json({ success: true, url: fileUrl, originalName: file.name });
  } catch (e) {
    console.error('Upload Error:', e);
    return NextResponse.json({ error: 'Upload failed' }, { status: 500 });
  }
}
