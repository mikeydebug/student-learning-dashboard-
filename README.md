# Next-Gen Student Learning Dashboard

[Live Demo](https://your-vercel-deployment-link.vercel.app)

## Tech Stack
- **Framework:** Next.js 14+ (App Router) - For optimal performance, Server Components (RSC), and nested routing.
- **Database/Backend:** Supabase with `@supabase/ssr` - Provides a scalable PostgreSQL database with a simple setup for SSR authentication and data fetching.
- **Styling:** Tailwind CSS - For rapid, utility-first styling consistent with our dark mode, deep space aesthetic.
- **Animations:** Framer Motion - Ensures complex, performant animations (spring physics, layout transitions, staggered loads) with zero layout shifts.
- **Icons:** Lucide React - Clean, consistent iconography that can be dynamically rendered.

## Architecture

### Server vs. Client Components
- **Server Components:** `app/layout.tsx`, `app/dashboard/page.tsx`, and `app/error.tsx`. We fetch our Supabase data directly on the server in `dashboard/page.tsx` to minimize client-side JavaScript, enhance SEO, and improve initial load times.
- **Client Components:** All interactive UI tiles (`HeroTile`, `CourseTile`, `Sidebar`, etc.) and animation wrappers. They use `"use client"` since they require Framer Motion and React hooks (`useState`, `useEffect`).

### Suspense & Data Fetching
- The `app/dashboard/loading.tsx` file acts as the primary Suspense boundary fallback for the dashboard route. While Supabase fetches the `courses` data, Next.js immediately serves the client the Animated Skeleton Grid (using Framer Motion pulse animations) to provide an engaging loading experience.
- `lib/supabase/server.ts` uses `@supabase/ssr` `createServerClient` to securely access the database on the server. We strictly use `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY`. The Service Role key is intentionally excluded.

### Framer Motion Strategy
- **Staggered Load:** We pass an `index` prop down to each `motion.article` tile. The delay is calculated as `delay: index * 0.08`, creating a smooth, cascading entrance.
- **Layout Animations:** The sidebar uses `<motion.div layoutId="nav-active-indicator" />`. When the active state changes, Framer Motion automatically morphs and slides the indicator between items seamlessly.
- **Spring Physics:** Hover states on tiles use `type: 'spring', stiffness: 300, damping: 20` to ensure animations feel tactile and premium rather than linear.
- **Zero Layout Shifts:** All animations exclusively use `transform` (scale, translate) and `opacity`.

## Running Locally

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd "animated education platform"
   ```

2. **Setup Environment Variables**
   Rename `.env.example` to `.env.local` and add your Supabase credentials.
   ```bash
   cp .env.example .env.local
   ```

3. **Install Dependencies**
   ```bash
   npm install
   ```

4. **Run the Development Server**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000)

## Supabase Setup

1. Create a new project on [Supabase](https://supabase.com).
2. Go to the SQL Editor and run the following script to create the table and insert mock data:

```sql
CREATE TABLE courses (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  progress integer NOT NULL CHECK (progress >= 0 AND progress <= 100),
  icon_name text NOT NULL,
  created_at timestamptz DEFAULT now()
);

INSERT INTO courses (title, progress, icon_name) VALUES
  ('Advanced React Patterns', 75, 'Code2'),
  ('System Design Fundamentals', 45, 'Database'),
  ('TypeScript Deep Dive', 90, 'FileCode2'),
  ('Machine Learning Basics', 20, 'Cpu');
```

3. Go to Project Settings -> API to find your URL and anon key.

## Challenges & Solutions
- **Zero Layout Shift Animations:** Ensuring that hover and entrance animations didn't trigger repaints required strictly using `transform` properties.
- **Framer Motion Staggering across Grid Areas:** Passing the `index` prop explicitly to each tile allowed for deterministic staggering even when using complex CSS grid areas.
- **Dynamic Icons:** Instead of evaluating strings or importing all icons randomly, I created a safe `iconMap` record in the `CourseTile` component to securely look up and render Lucide icons.
