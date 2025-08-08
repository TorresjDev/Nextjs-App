# Donation System Components

This document provides comprehensive documentation for the donation system components integrated into the Next.js app.

## 🏗️ Architecture Overview

The donation system consists of:

- **React Components** - UI components for donation interactions
- **API Routes** - Server-side payment processing
- **Hooks** - Custom React hooks for state management
- **Types** - TypeScript definitions for type safety

---

## 📦 Components

### `DonationsJar`

Main donation component that orchestrates the entire donation flow.

**Location:** `src/components/donations/DonationsJar.tsx`

**Props:**

```typescript
interface DonationsJarProps {
	className?: string; // Additional CSS classes
	compact?: boolean; // Render in compact mode
}
```

**Usage:**

```tsx
import { DonationsJar } from "@/components/donations/DonationsJar";

// Full layout
<DonationsJar />

// Compact layout
<DonationsJar compact className="my-4" />
```

**Features:**

- Responsive design with full and compact layouts
- Integrates both Stripe and crypto payment options
- Payment method icons and security information
- Themed with app's design system

---

### `StripeDonation`

Credit/debit card donation component using Stripe.

**Location:** `src/components/donations/components/StripeDonation.tsx`

**Props:**

```typescript
interface StripeDonationProps {
	compact?: boolean; // Render button in compact size
	className?: string; // Additional CSS classes
}
```

**Features:**

- Stripe Checkout integration
- Loading states and error handling
- Redirects to secure Stripe-hosted checkout
- Automatic success/cancel handling

---

### `CryptoDonation`

Cryptocurrency donation component using Coinbase Commerce.

**Location:** `src/components/donations/components/CryptoDonation.tsx`

**Props:**

```typescript
interface CryptoDonationProps {
	amount: number; // Donation amount in USD
	compact?: boolean; // Render button in compact size
	className?: string; // Additional CSS classes
}
```

**Features:**

- Coinbase Commerce integration
- Supports Bitcoin, Ethereum, and other cryptocurrencies
- Amount validation and error handling
- Redirects to Coinbase-hosted payment page

---

## 🔧 Custom Hooks

### `useDonations`

Core donation state management hook.

**Location:** `src/components/donations/hooks/useDonations.ts`

**Returns:**

```typescript
{
  status: DonationStatus;           // Current donation status
  error: DonationError | null;     // Error information
  resetError: () => void;          // Clear error state
  handleDonationStart: () => void; // Start donation process
  handleDonationSuccess: () => void; // Handle success
  handleDonationError: (message: string, code?: string) => void;
  resetStatus: () => void;         // Reset all states
  isLoading: boolean;              // Loading state helper
  isSuccess: boolean;              // Success state helper
  isError: boolean;                // Error state helper
}
```

---

### `usePayment`

Payment processing hook with provider-specific logic.

**Location:** `src/components/donations/hooks/usePayment.ts`

**Returns:**

```typescript
{
  // All useDonations returns plus:
  currentMethod: PaymentMethod | null;    // Current payment method
  processStripePayment: () => Promise<void>; // Process Stripe payment
  processCryptoPayment: (amount: number) => Promise<void>; // Process crypto payment
  resetPayment: () => void;               // Reset payment state
  isStripeLoading: boolean;               // Stripe-specific loading
  isCryptoLoading: boolean;               // Crypto-specific loading
}
```

---

## 🗂️ TypeScript Types

### Core Types

**Location:** `src/components/donations/types/donations.ts`

```typescript
interface DonationAmount {
	value: number;
	currency: "USD" | "EUR" | "GBP";
}

interface DonationError {
	message: string;
	code?: string;
}

type PaymentMethod = "stripe" | "crypto";
type DonationStatus = "idle" | "loading" | "success" | "error";
```

---

## 🛣️ API Routes

### Stripe Payment Routes

#### `POST /api/stripe-payment/donate-checkout`

Creates a Stripe checkout session.

**Request:** Empty POST request
**Response:**

```json
{
	"id": "cs_test_stripe_session_id"
}
```

#### `GET /api/stripe-payment/thank-you`

Handles post-payment thank you page.

**Query Params:** `session_id` - Stripe session ID
**Response:** HTML thank you page

---

### Crypto Payment Routes

#### `POST /api/crypto-donation`

Creates a Coinbase Commerce charge.

**Request:**

```json
{
	"amount": 10
}
```

**Response:**

```json
{
	"hosted_url": "https://commerce.coinbase.com/charges/CHARGE_CODE"
}
```

#### `GET /api/crypto-charge`

Retrieves charge details for verification.

**Query Params:** `code` - Coinbase charge code
**Response:** Charge details from Coinbase Commerce

---

## 🎨 Styling Integration

### Design System

- Uses **Shadcn/UI** components for consistent styling
- Integrates with app's **theme system** (light/dark mode)
- **Responsive design** with mobile-first approach
- **Tailwind CSS** utility classes

### Theme Variables

```css
/* Uses app's CSS custom properties */
--background
--foreground
--card
--primary
--secondary
--muted-foreground
--border
--destructive
```

---

## 🔒 Security Features

### Payment Security

- **PCI Compliance** - No card data stored or processed on servers
- **HTTPS Required** - All payment flows require secure connections
- **API Key Protection** - Server-side API key handling
- **CORS Configuration** - Restricted to allowed origins

### Error Handling

- **Input Validation** - Amount and payment method validation
- **Network Errors** - Graceful handling of API failures
- **User Feedback** - Clear error messages and loading states
- **Fallback UI** - Degraded functionality if services unavailable

---

## 🚀 Deployment Considerations

### Environment Variables

All sensitive configuration in environment variables:

```bash
STRIPE_SECRET_KEY=sk_live_...
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_live_...
COINBASE_API_KEY=...
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

### Production Checklist

- [ ] Switch from test to live API keys
- [ ] Configure webhook URLs for payment confirmations
- [ ] Set up monitoring for payment failures
- [ ] Test payment flows in production environment
- [ ] Configure proper error reporting

### Performance Optimization

- **Dynamic Imports** - Payment libraries loaded on-demand
- **Server-Side Rendering** - Fast initial page loads
- **Edge Functions** - Low latency API responses
- **Caching** - Static assets and API responses cached appropriately

---

## 📈 Analytics & Monitoring

### Tracking Events

- Donation button clicks
- Payment method selection
- Successful transactions
- Error occurrences
- User drop-off points

### Integration Points

- Google Analytics events
- Custom telemetry for payment flows
- Error logging and alerting
- Performance monitoring

---

## 🔄 History Preservation

This donation system was integrated from a standalone repository using **git subtree merge** to preserve complete development history:

- **32 commits** preserved from original donations jar repository
- **Timeline maintained** from January 11, 2025 to August 8, 2025
- **Contribution graph** intact with all green squares
- **Development journey** documented in commit messages

### Integration Details

- **Source Repository:** `TorresjDev/Nextjs-Donations-Jar`
- **Integration Method:** `git subtree add` (without --squash)
- **History Reference:** `git-subtree-split: 0961d6114c98acefa2c39539da6d4abc1386c2ad`
- **Total Commits Added:** 32 commits spanning 7 months of development

---

**Last Updated:** August 8, 2025  
**Component Version:** v1.0.0  
**Integration Status:** Production Ready ✅
