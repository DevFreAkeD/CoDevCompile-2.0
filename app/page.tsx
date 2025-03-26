"use client";

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
        <main className="flex-1 flex items-center justify-center p-4">
          <h1 className="text-xl font-bold text-zinc-800 dark:text-zinc-100">
            Welcome to CoDevCompile!
          </h1>
        </main>
      </div>
    </div>
  );
}