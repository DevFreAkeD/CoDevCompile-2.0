"use client";

import { useState } from "react";
import Editor from "@monaco-editor/react";
import { useTheme } from "next-themes";

export default function CodeEditor() {
  const [code, setCode] = useState("// Write your code here...");
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const { theme } = useTheme();

  // Determine Monaco Editor Theme
  const monacoTheme = theme === "dark" || theme === "system" ? "vs-dark" : "light";

  return (
    <div className="flex flex-col h-[calc(100vh-4rem)] w-full text-foreground">
      {/* Code Editor */}
      <div className="flex-1 border border-border overflow-hidden">
        <h2 className="text-sm py-1 px-2 bg-zinc-100 dark:bg-zinc-900">Code</h2>
        <Editor
          height="100%"
          defaultLanguage="c"
          value={code}
          theme={monacoTheme}
          onChange={(value) => setCode(value || "")}
          options={{
            fontSize: 14,
            minimap: { enabled: false },
          }}
        />
      </div>

      {/* Input & Output Editors */}
      <div className="grid grid-cols-2 h-48">
        {/* Input Editor */}
        <div className="border border-border  overflow-hidden">
          <h2 className="text-sm py-1 px-2 bg-zinc-100 dark:bg-zinc-900">Input</h2>
          <Editor
            height="calc(100% - 1.5rem)"
            defaultLanguage="plaintext"
            value={input}
            theme={monacoTheme}
            onChange={(value) => setInput(value || "")}
            options={{
              fontSize: 14,
              minimap: { enabled: false },
            }}
          />
        </div>

        {/* Output Editor (Read-Only) */}
        <div className="border border-border overflow-hidden">
          <h2 className="text-sm py-1 px-2 bg-zinc-100 dark:bg-zinc-900">Output</h2>
          <Editor
            height="calc(100% - 1.5rem)"
            defaultLanguage="plaintext"
            value={output}
            theme={monacoTheme}
            options={{
              readOnly: true,
              fontSize: 14,
              minimap: { enabled: false },
            }}
          />
        </div>
      </div>
    </div>
  );
}