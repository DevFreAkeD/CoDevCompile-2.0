export const HELLO_WORLD_CODES: Record<string, { title: string; code: string }> = {
    c: {
      title: "main.c",
      code: `#include <stdio.h>
      
int main() {
    printf("Hello, World!\\n");
    return 0;
}`
    },
    cpp: {
      title: "main.cpp",
      code: `#include <iostream>
  
int main() {
    std::cout << "Hello, World!" << std::endl;
    return 0;
}`
    },
};  