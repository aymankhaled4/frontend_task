# Mina Space — Product Listing & Details

A Product Listing & Details app built with Next.js (SSG), TypeScript, Material UI, and Redux Toolkit, consuming the [DummyJSON Products API](https://dummyjson.com/docs/products).

## Tech Stack

- **Next.js** (App Router, SSG)
- **TypeScript**
- **Material UI (MUI v9)**
- **Redux Toolkit** + `createAsyncThunk`
- **Axios**

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Create a `.env.local` file in the root:
   ```
   NEXT_PUBLIC_API_BASE_URL=https://dummyjson.com/products
   ```

3. Run the dev server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000)

## Features

- **Home page** — Featured Products section (8 items) fetched via SSG
- **Product Listing Page** (`/products`) — paginated product grid (10 per page), initial page rendered via SSG and hydrated into Redux; subsequent pages fetched client-side via `createAsyncThunk`, with already-fetched pages cached in Redux to avoid refetching
- **Product Details Page** (`/products/[id]`) — statically generated via `generateStaticParams`, hydrated into Redux on load
- **State management** — Redux Toolkit slices for the products list (pagination, loading, error, cache by page) and product details
- **Error handling** — global error boundary (`error.tsx`), custom 404 page for invalid product IDs, retry UI for failed pagination requests
- **SEO** — dynamic `generateMetadata` (title, description, Open Graph) for product details pages
- **UX** — loading skeletons during pagination fetches, smooth scroll-to-top on page change

## Project Structure

```
src/
├── app/
│   ├── layout.tsx               # Root layout (TopBar, Navbar, Footer)
│   ├── page.tsx                 # Home page
│   ├── error.tsx                 # Global error boundary
│   ├── not-found.tsx            # 404 page
│   └── products/
│       ├── page.tsx              # Product listing (SSG + pagination)
│       ├── ProductsView.tsx      # Client component (Redux, pagination UI)
│       └── [id]/
│           ├── page.tsx          # Product details (SSG + generateStaticParams)
│           └── ProductDetailsView.tsx
├── components/
│   ├── layout/                   # TopBar, Navbar, Footer
│   ├── home/                     # Home page sections (HeroSection, ValueProps, CategoryGrid, FeaturedProducts, TShirtStepsSection, FeaturesSection, CTA, TrustedCompaniesSection, PricingSection, TestimonialsSection)
│   └── shared/                   # ProductCard, CategoryCard, MobileMenu, StepCircle
├── redux/
│   ├── store.ts
│   ├── StoreProvider.tsx
│   ├── hooks.ts
│   └── slices/                   # productsSlice, productDetailsSlice
├── services/
│   └── products.ts               # API calls (axios)
├── constants/                    # Static content (companyLogos, features, footerLinks, menuItems, pricingPlans, steps, testimonials, values)
├── theme/                        # MUI theme, colors, ThemeRegistry
└── types/
    ├── product.ts
    └── Category.ts
```
