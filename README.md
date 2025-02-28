# 🚀 Walkthrough Guide

**A personal and expandable walkthrough guide built with Next.js (App Router), TypeScript, and Tailwind CSS.**  
This project serves as a step-by-step **knowledge base** for setting up various software projects, ensuring quick reference and seamless navigation through categorized guides.

---

## 📌 **Features**

- ✅ **Dynamic Routing**: Each walkthrough is a separate page within `/guides/`
- ✅ **Persistent UI**: Sidebar and Navbar remain fixed while only the guide content changes
- ✅ **Collapsible Sidebar**: Click on a category to reveal related guides
<!-- - ✅ **Dark Mode Support**: Theme toggling via `next-themes` -->
- ✅ **MDX Support**: Guides are written using `.mdx` files for enhanced documentation
<!-- - ✅ **Mobile Responsive**: Fully responsive UI with optimized UX -->

---

## 🏗 **Tech Stack**

| Technology       | Description                                                 |
| ---------------- | ----------------------------------------------------------- |
| **Next.js**      | React-based framework for server-side rendering and routing |
| **TypeScript**   | Type safety and improved code maintainability               |
| **Tailwind CSS** | Utility-first CSS framework for rapid UI development        |
| **MDX**          | Markdown + JSX for writing interactive documentation        |
| **Lucide-React** | Icon library for better UI consistency                      |

---

## 📂 **Project Structure**

```
src/
│── app/
│   ├── layout.tsx        # Global layout (Navbar + Sidebar stays fixed)
│   ├── page.tsx          # Home Page
│   ├── components/       # Reusable UI Components
│   ├── guides/
│   │   ├── github/
│   │   │   ├── create-repo/page.tsx
│   │   │   ├── rules-setup/page.tsx
│   │   ├── nextjs/
│   │   │   ├── walkthrough/page.tsx
│   ├── provider.tsx      # Theme provider setup
│   ├── globals.css       # Global styles
│   ├── lib/              # Utility functions & sidebar data
│   ├── components/
│   │   ├── Navigation.tsx
│   │   ├── Footer.tsx
│   │   ├── app-sidebar.tsx
│   │   ├── sidebar.tsx
│── public/               # Static assets
│── README.md             # Project Documentation
```

---

## 🛠 **Setup & Installation**

1️⃣ **Clone the repository**

```sh
git clone https://github.com/yourusername/walkthrough-guide.git
cd walkthrough-guide
```

2️⃣ **Install dependencies**

```sh
npm install
```

3️⃣ **Run the development server**

```sh
npm run dev
```

📌 The project will be available at: `http://localhost:3000`

---

## 🔄 **How It Works**

### 1️⃣ **Sidebar Navigation**

- Clicking a **category** (e.g., GitHub, Next.js) expands its **sub-menu**.
- Clicking a **sub-item** loads the relevant `page.tsx` without reloading the entire app.

### 2️⃣ **Adding a New Guide**

1. Create a new folder inside `/guides/`  
   Example: `mkdir src/app/guides/react`
2. Inside that folder, create a new `page.tsx`
3. Write the walkthrough content inside:

```tsx
export default function ReactSetupGuide() {
	return (
		<div className="prose dark:prose-invert max-w-4xl mx-auto py-8">
			<h1 className="text-2xl font-bold">React Setup Guide</h1>
			<p>Steps to set up a new React project...</p>
		</div>
	);
}
```

4. The guide will automatically be available at:  
   `http://localhost:3000/guides/react`

---

## 📝 **Customization**

### **📁 Changing Sidebar Items**

The sidebar structure is defined in **`/lib/data.ts`**. To add a new guide:

```ts
export const items = [
	{
		title: "GitHub",
		icon: "/icons/github.svg",
		submenu: [
			{ title: "Create Repository", url: "/guides/github/create-repo" },
			{ title: "Rules Setup", url: "/guides/github/rules-setup" },
		],
	},
	{
		title: "Next.js",
		icon: "/icons/nextjs.svg",
		submenu: [{ title: "Walkthrough", url: "/guides/nextjs/walkthrough" }],
	},
];
```

Adding a new entry here will automatically update the sidebar.

---

## 🎨 **Styling**

This project uses **Tailwind CSS**. You can modify styles in:

- **`/app/globals.css`** → Global Styles
- **`/app/components/sidebar.tsx`** → Sidebar Styles
- **`/app/components/navigation.tsx`** → Navbar Styles

---

## 🐞 **Troubleshooting**

| Issue              | Solution                                                |
| ------------------ | ------------------------------------------------------- |
| Sidebar is missing | Ensure `AppSidebar` is imported in `layout.tsx`         |
| MDX not rendering  | Install MDX dependencies: `npm install @next/mdx`       |
| Route not found    | Ensure `page.tsx` exists in the respective guide folder |

---

## 🌟 **Contributing**

This project is primarily for **personal educational purposes**, but if you find it useful and want to contribute:

1. Fork the repository
2. Create a new branch: `git checkout -b feature/new-guide`
3. Commit changes: `git commit -m "Added new guide"`
4. Push the branch: `git push origin feature/new-guide`
5. Open a pull request!

---

## 📜 **License**

This project is licensed under the **MIT License**.

---

## 📬 **Contact**

For questions or feedback, reach out to:

- GitHub: [@TorresjDev](https://github.com/TorresjDev)
- Email: [j.torres3.dev@gmail.com](mailto:j.torres3.dev@gmail.com)
