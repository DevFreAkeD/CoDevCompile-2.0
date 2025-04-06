import { NextResponse } from "next/server";
import axios from "axios";

// Handle POST requests
export async function POST(req: Request) {
  try {
    const { code, language, input } = await req.json();

    // Language mapping
    const languageMap: Record<string, { language: string; version: string }> = {
      c: { language: "c", version: "10.2.0" },
      cpp: { language: "c++", version: "10.2.0" },
      python: { language: "python", version: "3.10.0" },
      java: { language: "java", version: "15.0.2" },
      csharp: { language: "csharp", version: "6.12.0" },
      javascript: { language: "javascript", version: "18.15.0" },
      typescript: { language: "typescript", version: "5.0.3" },
      php: { language: "php", version: "8.2.3" },
    };

    if (!languageMap[language]) {
      return NextResponse.json({ error: "Unsupported language" }, { status: 400 });
    }

    // Piston API request payload
    const payload = {
      language: languageMap[language].language,
      version: languageMap[language].version,
      files: [{ name: "main", content: code }],
      stdin: input,
    };

    // Call the Piston API to execute code
    const { data } = await axios.post("https://emkc.org/api/v2/piston/execute", payload, {
      headers: { "Content-Type": "application/json" },
    });

    return NextResponse.json(data.run); // Return only execution result
  } catch (error) {
    console.error("Compilation error:", error);
    return NextResponse.json({ error: "Failed to execute code" }, { status: 500 });
  }
}