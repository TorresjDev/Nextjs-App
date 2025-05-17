# 🚀 Git Workflow Guide for Collaborative Projects

A step-by-step professional guide to help you manage your Git workflow when you're assigned to an existing project. This document covers creating new branches, keeping your work updated with the main branch, and pushing your finished work for deployment or production.

---

## 🌱 Creating a New Branch for Your Task

When you're ready to start work on a new feature or task:

1. **Clone the repository (if needed):**

   ```bash
   git clone <repo-url>
   cd <project-folder>
   ```

2. **Ensure you're up to date with the `main` branch:**

   ```bash
   git checkout main
   git pull origin main
   ```

3. **Create and switch into a new branch for your task:**

   ```bash
   git checkout -b your-branch-name
   ```

   Example:

   ```bash
   git checkout -b feature/login-auth
   ```

---

## 🔄 Keeping Your Branch Synced with `main`

Stay updated with changes from the `main` branch to avoid conflicts:

1. **Switch to `main` and pull the latest updates:**

   ```bash
   git checkout main
   git pull origin main
   ```

2. **Switch back to your branch:**

   ```bash
   git checkout your-branch-name
   ```

3. **Merge `main` into your branch:**

   ```bash
   git merge main
   ```

4. **Resolve any merge conflicts if they appear:**

   ```bash
   git add .
   git commit -m "Resolved merge conflicts with main"
   ```

---

## 📤 Pushing Your Work to the Repository

Once your work is complete:

1. **Push your branch to GitHub:**

   ```bash
   git push origin your-branch-name
   ```

2. **Open a Pull Request (PR):**

   - Navigate to your GitHub repository.
   - Click on `Compare & pull request`.
   - Ensure `main` is the base and your branch is the compare branch.
   - Add a descriptive title and explanation.
   - Submit the PR.

3. **Once reviewed and approved, merge the PR into `main`.**

4. **Pull the latest `main` locally to stay synced:**

   ```bash
   git checkout main
   git pull origin main
   ```

---

## 📌 Best Practices

- 🧠 Always start by updating `main` before creating a branch.
- 🪢 Keep branches focused on one task or feature.
- 📥 Regularly merge `main` into your branch to minimize conflicts.
- 💬 Write clear commit messages and PR descriptions.
- 🚦 Push your code early and often.

---

Keep this guide bookmarked as your go-to reference for efficient Git collaboration. Happy coding! 💻
