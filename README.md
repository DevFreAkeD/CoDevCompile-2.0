# **🖥 CoDevCompile - Online Code Compiler**

A web-based code compiler that supports multiple programming languages, built using **Next.js, TypeScript, ShadCN, and Monaco Editor**.  
***Write, compile, and execute code in multiple languages, all from your browser!***

---

## **✨ Features**
1. **Multi-Language Support** – Compile C, C++, JavaScript, Python, and more!  
2. **Real-time Code Execution** – Execute code instantly with API-powered execution.
3. **Dark/Light Mode** – Theme toggling using ShadCN.
4. **Monaco Editor** – A powerful code editor with syntax highlighting & autocomplete.
5. **Code Templates** – Auto-loads default "Hello, World!" programs for different languages.
6. **Mobile-Friendly** – Fully responsive UI for different screen sizes.  

---

## **⚙️ Tech Stack**
- **Frontend:** Next.js, TypeScript, Tailwind CSS, ShadCN, Monaco Editor  
- **Backend:** Next.js API Routes
- **Deployement:** Vercel
- **Code Execution API:** [Piston API](https://github.com/engineer-man/piston)  

---

## **🚀 Getting Started**
### **1️⃣ Clone the Repository**
```bash
git clone https://github.com/DevFreAkeD/CoDevCompile-2.0.git
cd CoDevCompile-2.0
```

### **2️⃣ Install Dependencies**
```bash
npm install
# or
yarn install
```

### **3️⃣ Run the Development Server**
```bash
npm run dev
# or
yarn dev
```
Now open [http://localhost:3000](http://localhost:3000) in your browser. 🎉  

---

## **🔧 API Endpoints**
### **Compile Code**
```http
POST /api/compile
```
**Request Body (JSON)**
```json
{
  "code": "#include <stdio.h>\nint main() { printf(\"Hello, World!\"); return 0; }",
  "language": "c",
  "input": ""
}
```
**Response**
```json
{
  "stdout": "Hello, World!",
  "stderr": "",
  "code": 0,
  "signal": null,
  "output": "Hello, World!"
}
```

---

## **🎨 UI Components**
- **Header:** Contains the "Execute" button and dark mode toggle.  
- **Sidebar:** Allows selecting different languages.  
- **Code Editor:** Monaco Editor with syntax highlighting.  
- **Input/Output Panels:** Displays input fields and execution results.  

---

## **📝 File Structure**
```
/app
 ├── /api
 │    ├── /compile/route.ts  # API Route for executing code
 ├── /components
 │    ├── CodeEditor.tsx      # Monaco-based code editor
 │    ├── Sidebar.tsx         # Language selection sidebar
 │    ├── Header.tsx          # Navbar with execute button
 ├── /context
 │    ├── CodeContext.tsx     # Manages code execution state
 ├── /lib
 │    ├── constants.ts        # Stores default "Hello World" templates
 ├── /public                  # Language icons
 │    ├── c.svg               
 │    ├── cpp.svg
 ├── package.json
 ├── README.md
```

---

## **🙌 Contributing**
Contributions are welcome! To contribute:  
1. **Fork** this repo.  
2. Create a **feature branch** (`git checkout -b feature-name`).  
3. **Commit** your changes (`git commit -m "Add feature"`).  
4. **Push** the branch (`git push origin feature-name`).  
5. Open a **Pull Request**! 🎉  

---

## **📜 License**
This project is **open-source** and available under the **MIT License**.

## **🖥 Live Link**
Link: https://codevcompile.vercel.app

---

## **❤️ Sponsor**

If you find this project useful, consider [sponsor me](https://github.com/sponsors/DevFreAkeD) to support development.

---

🚀 **Built with ❤️ by [DevFreAkeD](https://github.com/DevFreAkeD)**  
🔗 **Need help?** Feel free to open an [issue](https://github.com/DevFreAkeD/CoDevCompile-2.0/issues)!  
