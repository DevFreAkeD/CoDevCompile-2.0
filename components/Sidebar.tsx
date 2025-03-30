"use client";

import Image from "next/image";
import { useCode } from "@/context/CodeContext";

const languages = [
  { name: "C", image: "/c.svg", value: "c" },
  { name: "C++", image: "/cpp.svg", value: "cpp" },
  { name: "Python", image: "/python.svg", value: "python" },
  { name: "Java", image: "/java.svg", value: "java" },
];

export default function Sidebar() {
  const { selectedLanguage, setSelectedLanguage } = useCode();

  return (
    <aside className="w-14 md:w-16 lg:w-20 h-[calc(100vh-4rem)] bg-background/80 backdrop-blur-sm border-r border-border flex flex-col items-center p-4 transition-all">
      {/* Language Icons */}
      <div className="flex flex-col items-center gap-6 mt-4">
        {languages.map((lang) => (
          <div
            key={lang.value}
            onClick={() => setSelectedLanguage(lang.value)}
            className={`cursor-pointer p-2.5 rounded-md transition ${
              selectedLanguage === lang.value ? "bg-zinc-200 dark:bg-primary/20" : "hover:bg-muted/20"
            }`}
          >
            <Image
              src={lang.image}
              alt={lang.name}
              height={28}
              width={28}
              className="transition-all"
            />
          </div>
        ))}
      </div>
    </aside>
  );
}