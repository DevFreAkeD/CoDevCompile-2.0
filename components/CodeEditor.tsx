"use client";

import { useCode } from "@/context/CodeContext";
import Editor from "@monaco-editor/react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function CodeEditor() {
  const { code, setCode, input, setInput, output, fileName  } = useCode();
  const { theme, resolvedTheme } = useTheme();
  const [monacoTheme, setMonacoTheme] = useState("light");

  useEffect(() => {
    const newTheme =
      theme === "dark" || (theme === "system" && resolvedTheme === "dark")
        ? "vs-dark"
        : "light";
    setMonacoTheme(newTheme);
  }, [theme, resolvedTheme]);

  return (
    <div className="flex flex-col h-[calc(100vh-4rem)] w-full text-foreground">
      {/* Code Editor */}
      <div className="flex-1 border border-border overflow-hidden">
        <h2 className="text-sm py-1 px-2 bg-zinc-100 dark:bg-zinc-900">{fileName}</h2>
        <Editor
          height="100%"
          defaultLanguage="c"
          value={code}
          theme={monacoTheme} // Dynamically change theme
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