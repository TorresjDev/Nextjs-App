# 🌐 Nextjs-App

A modern full-stack developer hub built with Next.js.  
This is the **central application** for hosting personal projects, documentation, walkthrough guides, and AI-powered tools — all in one place.

---

## ✨ Features

This app serves as a **comprehensive developer resource** with:

### 🛠️ Interactive Walkthrough Guides System

- **📚 Main Guides Landing Page** - Beautiful overview of all available guides
- **🔄 Version Control Guides** - Git, GitHub workflows, and collaboration best practices
- **⚡ Next.js Guides** - React framework mastery and modern development patterns
- **🔄 SDLC Guides** - Software Development Life Cycle methodologies and project management
- **🗄️ Database Guides** - Database design, ERD modeling, SQL/NoSQL, and optimization

### 🎯 Smart Navigation System

- **Category Landing Pages** - Organized guide discovery with learning paths
- **Breadcrumb Navigation** - Easy navigation between guide levels
- **Responsive Design** - Mobile-friendly interface with Tailwind CSS
- **Server-Side Rendering** - Fast loading with Next.js App Router

### 🔮 Planned Features

- 🧠 AI Resume & Cover Letter Tools
- 📚 Blog Posts & Learning Logs
- 🎧 Podcast or Media Section
- 📊 Developer Analytics Dashboard

---

## 🚀 Live Site

👉 [Visit the Live App](https://nextjs-app-plum-one.vercel.app)

---

## ⚙️ Tech Stack

- **Framework:** [Next.js 15](https://nextjs.org/) with App Router
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) + [NextUI](https://nextui.org/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Markdown Processing:** [Remark](https://remark.js.org/) + [Gray Matter](https://github.com/jonschlinkert/gray-matter)
- **UI Components:** [Radix UI](https://www.radix-ui.com/) + [Shadcn/UI](https://ui.shadcn.com/)
- **Deployment:** [Vercel](https://vercel.com/)

---

## 📁 Enhanced Project Structure

```bash
🔺 src/
   ├── app/
   │   ├── globals.css           # Global styles
   │   ├── layout.tsx           # Root layout
   │   ├── page.tsx             # Home page
   │   ├── about/               # About page
   │   ├── guides/              # 📚 GUIDES SYSTEM
   │   └── posts/               # Blog system (planned)
   ├── components/
   │   ├── Navigation.tsx       # Main navigation
   │   ├── Footer.tsx          # Site footer
   │   └── ui/                 # Reusable UI components
   ├── lib/
   │   ├── utils.ts            # Utility functions
   │   └── sidebar-config.ts   # Navigation configuration
   └── hooks/                  # Custom React hooks
public/                       # Static assets
```

---

## 🔄 Guide Categories

| Category               | Focus                     | Example Guides             |
| ---------------------- | ------------------------- | -------------------------- |
| **🔄 Version Control** | Git, GitHub workflows     | Commands, Repository setup |
| **⚡ Next.js**         | React framework mastery   | Components, Routing, API   |
| **🔄 SDLC**            | Development methodologies | Overview, Planning phases  |
| **🗄️ Database**        | Data modeling & SQL       | ERD design, Optimization   |

---

## �🧪 Getting Started

```bash
# Clone the repository
git clone https://github.com/TorresjDev/Nextjs-App.git

# Navigate into the folder
cd Nextjs-App

# Install dependencies
npm install

# Start local dev server
npm run dev
```

### 📋 Prerequisites

- **Node.js** 18+
- **npm** or **yarn**
- **Git** for version control

### 🚀 Development Commands

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint checks
```

---

## 🌍 Deployment

This project is deployed via **Vercel** with automatic GitHub integration:

- **Production:** [nextjs-app-plum-one.vercel.app](https://nextjs-app-plum-one.vercel.app)
- **Auto-Deploy:** Every push to `main` branch triggers a live redeploy
- **Preview Deploys:** Pull requests get automatic preview deployments
- **Environment:** Optimized for Edge Runtime with ISR support

---

## 📊 Recent Updates

### v2.0.0 - Markdown Refactor (Latest)

- ✅ **Converted from MDX to Markdown** - Simplified content processing
- ✅ **Added Category Landing Pages** - Enhanced guide discovery
- ✅ **Implemented Three-Tier Navigation** - Better user experience
- ✅ **Server-Side Rendering** - Improved performance
- ✅ **Responsive Design Updates** - Mobile-first approach

### v1.x - Foundation

- ✅ **Initial Next.js Setup** - App Router implementation
- ✅ **Tailwind Integration** - Modern styling framework
- ✅ **Basic Guide Structure** - File-based routing
- ✅ **UI Components** - Shadcn/UI integration

---

## 📞 Support

- **Issues:** [GitHub Issues](https://github.com/TorresjDev/Nextjs-App/issues)
- **Discussions:** [GitHub Discussions](https://github.com/TorresjDev/Nextjs-App/discussions)
- **Live Site:** [View Demo](https://nextjs-app-plum-one.vercel.app)

Built with ❤️ by [TorresjDev](https://github.com/TorresjDev)
