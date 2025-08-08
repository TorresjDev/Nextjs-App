# 🎁 Donations Jar

Welcome to **Donations Jar**! This is an open-source donation web app built using **Next.js, TypeScript, Tailwind CSS, and TSX components**. It allows users to accept **credit/debit card payments via Stripe** and **cryptocurrency donations via Coinbase Commerce** to support open-source projects.

🚀 **Live Demo**: [Donations Jar](https://your-live-demo-url.com)

---

## ✨ Features

- 💳 **Stripe Integration** – Accept credit and debit card donations securely.
- 🪙 **Crypto Donations** – Accept Bitcoin and other cryptocurrencies via Coinbase Commerce.
- 🌎 **Open-Source & Customizable** – Easily adapt this project for your own use.
- 🎨 **Sleek UI with Tailwind CSS** – Clean and responsive design.
- 🛠️ **Built with Next.js** – Fast, scalable, and server-rendered.

---

## 🏗️ Tech Stack

- **Frontend**: Next.js, TypeScript, Tailwind CSS, React
- **Payments**: Stripe API, Coinbase Commerce API
- **State Management**: React Hooks
- **Deployment**: Vercel/GitHub Pages

---

## 📂 Project Structure

```bash
📦 donations-jar
 ┣ 📂 src
 ┃ ┣ 📂 app
 ┃ ┃ ┣ 📂 api
 ┃ ┃ ┃ ┣ 📂 crypto-charge
 ┃ ┃ ┃ ┃ ┃ ┣ 📜 route.ts
 ┃ ┃ ┃ ┣ 📂 crypto-donation
 ┃ ┃ ┃ ┃ ┃ ┣ 📜 route.ts
 ┃ ┃ ┃ ┣ 📂 stripe-payment
 ┃ ┃ ┃ ┃ ┣ 📂 donate-checkout
 ┃ ┃ ┃ ┃ ┃ ┣ 📜 route.ts
 ┃ ┃ ┃ ┃ ┣ 📂 thank-you
 ┃ ┃ ┃ ┃ ┃ ┣ 📜 route.ts
 ┃ ┃ ┣ 📂 components
 ┃ ┃ ┃ ┣ 📂 ui
 ┃ ┃ ┃ ┃ ┣ 📜 CryptoDonation.tsx
 ┃ ┃ ┃ ┃ ┣ 📜 DonationJar.tsx
 ┃ ┃ ┃ ┃ ┣ 📜 Footer.tsx
 ┃ ┃ ┃ ┃ ┣ 📜 Navbar.tsx
 ┃ ┃ ┃ ┃ ┣ 📜 StripeDonation.tsx
 ┃ ┃ ┣ 📂 thank-you
 ┃ ┃ ┣ 🎨 globals.css
 ┃ ┃ ┣ 📜 layout.tsx
 ┃ ┃ ┣ 📜 not-found.tsx
 ┃ ┃ ┣ 📜 page.tsx
 ┃ ┣ 📂 lib
 ┃ ┃ ┣ 📜 stripe.ts
 ┃ ┃ ┣ 📜 utils.ts
 ┣ 📜🔐 .env.local
 ┣ 📜⚙️ next.config.js
 ┣ 📜⚙️ package.json
 ┣ 📜 README.md
 ┣ 📜⚙️ tailwind.config.js
 ┣ 📜⚙️ tsconfig.json
```

---

## 🛠️ Installation & Setup

### 1️⃣ Clone the repository

```bash
git clone https://github.com/yourusername/donations-jar.git
cd donations-jar
```

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Set up environment variables

Create a `.env.local` file and add your **Stripe** and **Coinbase API keys**:

```env
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
NEXT_PUBLIC_COINBASE_API_KEY=your_coinbase_api_key
```

### 4️⃣ Run the development server

```bash
npm run dev
```

Visit `http://localhost:3000` to see it in action!

---

## 🚀 Deployment

### **Vercel Deployment**

1. Install Vercel CLI

```bash
npm install -g vercel
```

2. Deploy

```bash
vercel
```

### **Manual Deployment**

Build the project:

```bash
npm run build
npm start
```

---

## 📌 Usage

### **Accepting Donations**

- **Credit/Debit Card** donations are handled via Stripe (`/api/stripe-payment/donate-checkout`)
- **Crypto** donations are processed via Coinbase Commerce (`/api/crypto-donation`)

### **Modifying Payment Options**

To add more payment options, modify:

- `StripeDonation.tsx` for Stripe settings.
- `CryptoDonation.tsx` for Coinbase settings.

---

## 💡 Want to Create Your Own Donation Page?

Fork this repository, customize the branding, and deploy your own version! Perfect for **open-source maintainers**, **content creators**, and **personal fundraising**.

---

## 📜 License

MIT License – Free to use and modify!

---

## 👏 Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request.

---

## 📬 Contact

💻 Created by **Jesus Torres**  
📧 Email: [j.torres3.dev@gmail.com](mailto:j.torres3.dev@gmail.com)  
🔗 GitHub: [torresjdev](https://github.com/torresjdev)  
🔗 LinkedIn: [Jesus Torres](https://linkedin.com/in/jesus-torres)
