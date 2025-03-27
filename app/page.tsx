"use client";

import CodeEditor from "@/components/CodeEditor";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <Header />

      {/* Main Content with Sidebar*/}
      <div className="flex flex-1 mt-16">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <main className="flex-1 flex items-center justify-center">
          <CodeEditor />
        </main>
      </div>
    </div>
  );
}