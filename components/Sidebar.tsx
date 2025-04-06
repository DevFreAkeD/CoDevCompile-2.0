"use client";

import Image from "next/image";
import { useCode } from "@/context/CodeContext";

const languages = [
  { name: "C", image: "/c.svg", value: "c" },
  { name: "C++", image: "/cpp.svg", value: "cpp" },
  { name: "Python", image: "/python.svg", value: "python" },
  { name: "Java", image: "/java.svg", value: "java" },
  { name: "C#", image: "csharp.svg", value: "csharp" },
  { name: "JavaScript", image: "js.svg", value: "javascript" },
  { name: "TypeScript", image: "typescript.svg", value: "typescript" },
  { name: "PHP", image: "php.svg", value: "php" },
];

export default function Sidebar() {
  const { selectedLanguage, setSelectedLanguage } = useCode();

  return (
    <aside className="w-14 md:w-16 lg:w-20 h-[calc(100vh-4rem)] bg-background/80 backdrop-blur-sm border-r border-border flex flex-col items-center p-4 transition-all">
      <div className="flex flex-col items-center gap-4 mt-4">
        {languages.map((lang) => (
          <div
            key={lang.value}
            onClick={() => setSelectedLanguage(lang.value)}
            className={`w-11 h-11 md:w-13 md:h-13 lg:w-15 lg:h-15 flex items-center justify-center rounded-xl cursor-pointer border transition-all ${
              selectedLanguage === lang.value
                ? "bg-primary/10 border-zinc-570"
                : "hover:bg-muted/20 border-transparent"
            }`}
          >
            <Image
              src={lang.image}
              alt={lang.name}
              width={32}
              height={32}
              className="object-contain max-w-full max-h-full"
            />
          </div>
        ))}
      </div>
    </aside>
  );
}