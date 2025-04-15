"use client";

import { createContext, useContext, useState } from "react";
import axios from "axios";
import { HELLO_WORLD_CODES } from "@/lib/constants";

// Define types
interface CodeContextProps {
  code: string;
  setCode: (code: string) => void;
  input: string;
  setInput: (input: string) => void;
  output: string;
  setOutput: (output: string) => void;
  selectedLanguage: string;
  setSelectedLanguage: (language: string) => void;
  executeCode: () => void;
  loading: boolean;
  fileName: string;
}

// Create context
const CodeContext = createContext<CodeContextProps | undefined>(undefined);

// Provider component
export function CodeProvider({ children }: { children: React.ReactNode }) {
  const [selectedLanguage, setSelectedLanguage] = useState("cpp"); // Default to C
  const [code, setCode] = useState(HELLO_WORLD_CODES["cpp"].code); // Fix: Only use code
  const [fileName, setFileName] = useState(HELLO_WORLD_CODES["cpp"].title); // Fix: Initialize properly
  const [input, setInput] = useState(HELLO_WORLD_CODES["cpp"].input);
  const [output, setOutput] = useState("");
  const [loading, setLoading] = useState(false);

  // Function to execute code
  const executeCode = async () => {
    setLoading(true);
    setOutput("Executing...");

    try {
      const response = await axios.post("/api/compile", {
        code,
        language: selectedLanguage.toLowerCase(),
        input,
      });

      setOutput(response.data.stdout || response.data.stderr || "No output");
    } catch (error) {
      console.error("Execution failed", error);
      setOutput("Error executing code");
    } finally {
      setLoading(false);
    }
  };

  // Update code & fileName when language changes
  const handleLanguageChange = (language: string) => {
    setSelectedLanguage(language);
    setCode(HELLO_WORLD_CODES[language]?.code || "// Write your code here...");
    setFileName(HELLO_WORLD_CODES[language]?.title || "main.txt"); // Update file name
    setInput(HELLO_WORLD_CODES[language]?.input || "");
  };

  return (
    <CodeContext.Provider value={{ code, setCode, input, setInput, output, setOutput, selectedLanguage, setSelectedLanguage: handleLanguageChange, executeCode, loading, fileName }} >
      {children}
    </CodeContext.Provider>
  );
}

// Hook to use context
export function useCode() {
  const context = useContext(CodeContext);
  if (!context) {
    throw new Error("useCode must be used within a CodeProvider");
  }
  return context;
}
