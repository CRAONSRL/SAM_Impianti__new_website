# GitHub Copilot Instructions for SAM Impianti (ShipFast TypeScript SaaS)

## Project Overview
This is a Next.js 15+ TypeScript SaaS application based on the ShipFast boilerplate, customized for SAM Impianti (electrical and mechanical systems company). It features Stripe payments, NextAuth v5 authentication, MongoDB storage, and modern UI with TailwindCSS 4.1+ and DaisyUI 5.0+.

## Architecture & Tech Stack

### Core Technologies
- **Framework**: Next.js 15+ App Router with React 19+, TypeScript 5.9+
- **Database**: MongoDB with Mongoose ODM (dual connection pattern)
- **Authentication**: NextAuth v5 (beta) with Google OAuth and email providers
- **Payments**: Stripe with webhook-driven user access control
- **Styling**: TailwindCSS 4.1+ with CSS-first configuration, DaisyUI 5.0+ components
- **UI Libraries**: Headless UI, React Hot Toast, React Tooltip, Embla Carousel
- **Email**: Resend for transactional emails and magic links

### Critical Configuration Patterns

#### Centralized Configuration (`/config.ts`)
All app settings reference the single `config.ts` file using the `ConfigProps` interface. Never hardcode values—always use `import config from "@/config"`.

#### TailwindCSS 4.1+ Setup
- **CSS-first configuration** in `app/globals.css` with `@theme` directive
- Use `@import "tailwindcss"` instead of `@tailwind` directives
- No `tailwind.config.js` file—all customization in CSS
- Custom animations and utilities defined in `@theme` block

#### Dual MongoDB Connection Strategy
- **NextAuth**: Uses raw MongoDB client (`/libs/mongo.ts`) for adapter
- **API Routes**: Uses Mongoose (`/libs/mongoose.ts`) for models and operations
- Always call `connectMongo()` before database operations in API routes

## Development Patterns

### Component Architecture
- **Server Components by default** - Use `"use client"` only when necessary
- **Props interfaces required** - Define TypeScript interfaces for all components
- **DaisyUI classes preferred** - Use `btn`, `card`, `modal`, `dropdown` etc.
- **Responsive design** - Implement with Tailwind breakpoints (`lg:`, `md:`, etc.)

### Authentication Flow
```typescript
// Check auth in API routes
const session = await auth();
if (!session?.user) {
  return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
}

// Get user with database connection
await connectMongo();
const user = await User.findById(session.user.id);
```

### API Route Patterns
```typescript
// Standard API route structure
import connectMongo from "@/libs/mongoose";
import { NextResponse, NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  try {
    await connectMongo();
    const body = await req.json();
    
    // Validate inputs
    if (!body.requiredField) {
      return NextResponse.json({ error: "Field required" }, { status: 400 });
    }
    
    // Database operations
    // Return response
    return NextResponse.json({ success: true });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: e?.message }, { status: 500 });
  }
}
```

### Stripe Integration Patterns
- **Webhook signature verification required** in `/app/api/webhook/stripe/route.ts`
- **User access control** via `hasAccess` boolean in User model
- **Customer linking** through `customerId` field stores Stripe customer ID
- **Subscription tracking** via `priceId` field matches config.ts plans

### Frontend Data Fetching
Use the custom `apiClient` from `/libs/api.ts` for internal API calls:
```typescript
import apiClient from "@/libs/api";

// Automatic error handling with toast notifications
const result = await apiClient.post("/endpoint", data);
```

## Key Files and Their Purposes

### Core Configuration
- `/config.ts` - Central app configuration (required for all features)
- `/app/globals.css` - TailwindCSS 4.1+ configuration and custom styles
- `/types/config.ts` - TypeScript interfaces for configuration

### Authentication & Database
- `/libs/next-auth.ts` - NextAuth v5 configuration with providers
- `/libs/mongoose.ts` - Mongoose connection for API routes
- `/libs/mongo.ts` - Raw MongoDB client for NextAuth adapter
- `/models/User.ts` - User schema with Stripe fields (`customerId`, `priceId`, `hasAccess`)

### Payment System
- `/libs/stripe.ts` - Stripe checkout and portal creation functions
- `/app/api/stripe/create-checkout/route.ts` - Checkout session creation
- `/app/api/webhook/stripe/route.ts` - Webhook processing for user access

### UI Components
- `/components/LayoutClient.tsx` - Client-side providers wrapper
- `/components/ButtonCheckout.tsx` - Stripe payment button pattern
- `/components/Header.tsx` - Responsive navigation with mobile menu

## Business Logic Patterns

### User Access Control
The app uses a simple boolean `hasAccess` field controlled by Stripe webhooks:
- Checkout completion sets `hasAccess: true`
- Subscription cancellation sets `hasAccess: false`
- Invoice payment restores `hasAccess: true`

### Email Integration
Magic link authentication uses Resend with SMTP configuration in NextAuth. Email templates reference `config.resend.fromNoReply`.

### Image Optimization
Next.js Image component configured for external domains in `next.config.js`. Whitelist includes Google avatars, Unsplash, and other CDNs.

## Development Commands
- `npm run dev` - Development server
- `npm run build` - Production build
- `npm run postbuild` - Generates sitemap
- `npm run lint` - ESLint checking

## Security Considerations
- **Webhook verification** - Always verify Stripe webhook signatures
- **Input validation** - Validate all request bodies in API routes
- **Session handling** - Use NextAuth session for protected routes
- **Environment variables** - Store secrets in `.env.local` (never commit)

## Common Mistakes to Avoid
- Don't bypass the centralized config pattern
- Don't forget to connect to MongoDB in API routes
- Don't use `any` TypeScript types
- Don't hardcode Stripe webhook URLs or secrets
- Don't skip error handling in async operations
- Don't create components without TypeScript interfaces
- Don't mix TailwindCSS 3.x patterns with 4.1+ CSS-first approach