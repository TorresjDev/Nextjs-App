# 🔥 JT Dev Studio

A comprehensive developer studio built with Next.js, featuring interactive walkthrough guides, project showcases, and cutting-edge development tools.

---

## ✨ Features

### 🛠️ Interactive Walkthrough Guides

- **Version Control** - Git, GitHub workflows, and collaboration best practices
- **Next.js Development** - React framework mastery and modern patterns
- **SDLC Methodologies** - Software development lifecycle and project management
- **Database Design** - ERD modeling, SQL/NoSQL, and optimization techniques

### 💖 Support System

- **Secure Donations** - Stripe integration for credit/debit card payments
- **Crypto Payments** - Coinbase Commerce for cryptocurrency donations
- **Thank You Pages** - Acknowledgment and impact information
- **Contribution History** - Full preservation of development timeline

### 🎯 Smart Navigation

- Category-based guide organization with landing pages
- Responsive design optimized for all devices
- Server-side rendering for fast performance

### 🔮 Planned Features

- 🧠 AI Resume & Cover Letter Generator
- 📚 Technical Blog & Learning Logs
- 📊 Developer Analytics Dashboard
- 🎨 Theme Customization System

---

## 🚀 Live Demo

👉 **[Visit JT Dev Studio](https://nextjs-app-plum-one.vercel.app)**

---

## ⚙️ Tech Stack

- **Framework:** Next.js 15 with App Router
- **Styling:** Tailwind CSS + Shadcn/UI
- **Language:** TypeScript
- **Content:** Markdown with Remark processing
- **Payments:** Stripe + Coinbase Commerce
- **Deployment:** Vercel

---

## 🚀 Quick Start

```bash
# Clone and setup
git clone https://github.com/TorresjDev/Nextjs-App.git
cd Nextjs-App
npm install

# Configure environment variables (for donation functionality)
cp .env.local.example .env.local
# Edit .env.local with your API keys

# Run development server
npm run dev
```

**Prerequisites:** Node.js 18+, npm/yarn

---

---

## 📁 Project Structure

```bash
src/
├── app/
│   ├── guides/              # Walkthrough guides system
│   │   ├── version-control/ # Git & GitHub guides
│   │   ├── nextjs/          # Next.js development
│   │   ├── sdlc/            # Development lifecycle
│   │   └── database/        # Database design
│   ├── support/             # Donation & support system
│   │   └── donate/          # Donation pages
│   ├── api/                 # API routes
│   │   ├── stripe-payment/  # Stripe payment processing
│   │   ├── crypto-donation/ # Crypto payment processing
│   │   └── crypto-charge/   # Crypto charge verification
│   ├── about/               # About page
│   └── posts/               # Blog system (planned)
├── components/              # Reusable UI components
│   └── donations/           # Donation system components
└── lib/                     # Utilities and config
```

---

## 🔄 Recent Updates

**v2.1** - Donation System Integration

- ✅ Integrated secure donation system with Stripe & Coinbase Commerce
- ✅ Added support pages with impact information
- ✅ Preserved complete contribution history from standalone donations app
- ✅ Created reusable donation components with TypeScript
- ✅ Enhanced sidebar navigation with support section

**v2.0** - Enhanced Guides System

- ✅ Converted from MDX to Markdown for better performance
- ✅ Added category landing pages with learning paths
- ✅ Implemented three-tier navigation system
- ✅ Server-side rendering optimization

---

## 💖 Support This Project

If you find this project valuable, consider supporting its development:

### 🌟 **[Make a Donation](https://nextjs-app-plum-one.vercel.app/support)**

- **💳 Credit/Debit Cards** - Secure processing through Stripe
- **₿ Cryptocurrency** - Bitcoin, Ethereum, and more via Coinbase Commerce
- **🎯 Direct Impact** - Support goes directly to development and hosting costs

Your support helps maintain this free educational resource and enables the creation of new content for the developer community.

---

## 🔧 Development Setup

### Environment Variables

For full functionality (including donations), you'll need these environment variables in `.env.local`:

```bash
# GitHub Integration
NEXT_PUBLIC_GITHUB_USERNAME=your_github_username
NEXT_PUBLIC_WAKATIME_USERNAME=your_wakatime_username

# Stripe Configuration (for donations)
STRIPE_SECRET_KEY=sk_test_your_stripe_secret_key
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_your_stripe_publishable_key
STRIPE_PRICE_ID=price_your_stripe_price_id

# Coinbase Commerce (for crypto donations)
COINBASE_API_KEY=your_coinbase_commerce_api_key

# Site Configuration
NEXT_PUBLIC_SITE_URL=http://localhost:3000  # or your production URL
```

### Payment Provider Setup

1. **Stripe Setup:**

   - Create account at [stripe.com](https://stripe.com)
   - Get API keys from Dashboard → API Keys
   - Create a product/price for donations
   - Use test keys during development

2. **Coinbase Commerce Setup:**
   - Create account at [commerce.coinbase.com](https://commerce.coinbase.com)
   - Generate API key in Settings → Security
   - Configure webhook URLs for production

---

---

## 🤝 Contributing

Contributions welcome! Please open an issue for major changes.

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

---

## 📞 Contact

- **Studio:** [Visit JT Dev Studio](https://nextjs-app-plum-one.vercel.app)
- **GitHub:** [@TorresjDev](https://github.com/TorresjDev)
- **Issues:** [Report Bug](https://github.com/TorresjDev/Nextjs-App/issues)

---

**Built with ❤️ using Next.js and TypeScript**
