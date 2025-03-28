"use client";

import { createContext, useContext, useState } from "react";
import axios from "axios";

// Define types
interface CodeContextProps {
  code: string;
  setCode: (code: string) => void;
  input: string;
  setInput: (input: string) => void;
  output: string;
  selectedLanguage: string;
  setSelectedLanguage: (language: string) => void;
  executeCode: () => void;
}

// Create context
const CodeContext = createContext<CodeContextProps | undefined>(undefined);

// Provider component
export function CodeProvider({ children }: { children: React.ReactNode }) {
  const [code, setCode] = useState("// Write your code here...");
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState("c"); // Default to C

  // Function to execute code
  const executeCode = async () => {
    try {
      const response = await axios.post("/api/compile", {
        code,
        language: selectedLanguage.toLowerCase(),
        input,
      });

      setOutput(response.data.stdout || response.data.stderr);
    } catch (error) {
      console.error("Execution failed", error);
      setOutput("Error executing code");
    }
  };

  return (
    <CodeContext.Provider value={{ code, setCode, input, setInput, output, selectedLanguage, setSelectedLanguage, executeCode }}>
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