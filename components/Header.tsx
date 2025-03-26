"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Play, HelpCircle, AlertTriangle, Github, Menu } from "lucide-react";
import DarkModeToggle from "./DarkModeToggle";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between gap-4">
          
          {/* Left Side (Logo) */}
          <div className="flex items-center gap-4 flex-1">
            <Link href="/" prefetch={false} className="flex items-center space-x-2 hover:opacity-90 transition-opacity">
              <Image src="/Logo.png" alt="CoDevCompile Logo" width={32} height={32} />
              <span className="lg:text-xl md:text-md font-bold bg-gradient-to-r from-primary/90 to-primary bg-clip-text text-transparent dark:text-zinc-100 hidden md:block">
                CoDevCompile
              </span>
            </Link>
          </div>

          {/* Center: Execute Button */}
          <div className="flex justify-center flex-1">
            <Button variant="default" className="flex items-center gap-2 px-5">
              <Play size={16} /> Execute
            </Button>
          </div>

          {/* Right Side (Dark Mode + Menu) */}
          <div className="flex items-center gap-4 justify-end flex-1">
            {/* Desktop Dark Mode Toggle */}
            <div className="hidden md:flex">
              <DarkModeToggle />
            </div>

            {/* Mobile Menu (3-dot) */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="p-2">
                  <Menu size={24} /> {/* 3-dot menu icon */}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => alert("Help Section Opened")}>
                  <HelpCircle size={16} color="green"/> Help
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <a href="https://github.com/DevFreAkeD/CoDevCompile-2.0/issues" target="_blank" rel="noopener noreferrer">
                    <AlertTriangle size={16} color="red" /> Report Issue
                  </a>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <a href="https://github.com/DevFreAkeD" target="_blank" rel="noopener noreferrer">
                    <Github size={16} color="lightblue" /> Contact Author
                  </a>
                </DropdownMenuItem>

                {/* Dark Mode Toggle in Mobile Menu */}
                <div className="md:hidden">
                  <DropdownMenuItem>
                    <DarkModeToggle />
                  </DropdownMenuItem>
                </div>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </header>
  );
}