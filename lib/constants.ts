export const HELLO_WORLD_CODES: Record<string, { title: string; code: string }> = {
    c: {
        title: "Main.c",
        code: `#include <stdio.h>  // Required for standard input and output functions (printf, scanf)

int main() {
    printf("Hello, World!\\n");
    return 0;
}`
    },
    cpp: {
        title: "Main.cpp",
        code: `#include <iostream>  // Required for input and output operations (std::cout, std::cin)

int main() {
    std::cout << "Hello, World!" << std::endl;
    return 0;
}`
    },
    python: {
        title: "Main.py",
        code: `# Python has built-in print function, so no imports are required
print("Hello, World!")`,
    },
    java: { 
        title: "Main.java",
        code: `// The java.lang package is automatically imported, so System.out.println() works without an explicit import.

public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    },
    csharp: {
        title: "Program.cs",
        code: `using System;
    
class Program {
    static void Main() {
        Console.WriteLine("Hello, World!");
    }
}`
    },
    javascript: {
        title: "main.js",
        code: `console.log("Hello, World!");`
    },
    typescript: {
        title: "main.ts",
        code: `const message: string = "Hello, World!";
console.log(message);`
    },
    php: {
        title: "main.php",
        code: `<?php
    echo "Hello, World!";
?>`
    },
};