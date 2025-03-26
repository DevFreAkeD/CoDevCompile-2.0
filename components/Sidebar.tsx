"use client";

import { useState } from "react";
import Image from "next/image";

const languages = [
  { name: "C", image: "/c.svg" },
  { name: "C++", image: "/cpp.svg" },
];

export default function Sidebar() {
  const [selected, setSelected] = useState("C");

  return (
    <aside className="w-14 md:w-16 lg:w-20 h-[calc(100vh-4rem)] bg-background/80 backdrop-blur-sm border-r border-border flex flex-col items-center p-4 transition-all">
      {/* Language Icons */}
      <div className="flex flex-col items-center gap-6 mt-4">
        {languages.map((lang) => (
          <div
            key={lang.name}
            onClick={() => setSelected(lang.name)}
            className={`cursor-pointer p-2.5 rounded-md transition ${
              selected === lang.name ? "bg-primary/20" : "hover:bg-muted/20"
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