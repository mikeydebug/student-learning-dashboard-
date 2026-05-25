<div align="center">
  <img src="https://raw.githubusercontent.com/lucide-icons/lucide/main/icons/book-open.svg" width="60" alt="Logo" />
  <h1 align="center">Next-Gen Student Learning Dashboard</h1>
  <p align="center">
    A futuristic, highly animated, and deeply integrated education platform built for the modern web.
  </p>
  
  <p align="center">
    <strong><a href="https://student-learning-dashboard-8d8e.vercel.app/dashboard">🚀 View Live Demo on Vercel</a></strong>
  </p>

  <p align="center">
    <img src="https://img.shields.io/badge/Next.js_14-000000?style=for-the-badge&logo=next.js&logoColor=white" alt="Next.js" />
    <img src="https://img.shields.io/badge/Supabase-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white" alt="Supabase" />
    <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
    <img src="https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white" alt="Framer Motion" />
    <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  </p>
</div>

---

## 🌌 The Vision
This isn't just another dashboard—it's an experience. We set out to build a "Next-Gen" frontend challenge that proves web applications can feel just as premium, responsive, and hardware-accelerated as native desktop applications (like Linear or high-end game HUDs).

### Key Highlights:
- **Deep Space Aesthetics:** An exclusive dark-mode theme utilizing near-blacks (`#09090b`), rich indigos, and subtle SVG noise textures to give depth and premium tactility.
- **Bento Grid Architecture:** A fully responsive, asymmetric CSS grid layout that gracefully reflows into a mobile-first scrolling column on smaller devices.
- **Zero Layout Shifts (CLS = 0):** Hover states, scaling, and entrance animations strictly utilize GPU-accelerated `transform` and `opacity` properties to prevent expensive browser repaints.
- **Dynamic Database Integration:** Course progress and statistics aren't hardcoded; they are fetched server-side from a Supabase PostgreSQL instance in real-time.

---

## 🏗 Architecture & Engineering

### 1. Server Components vs. Client Components (RSC)
We heavily leveraged the **Next.js App Router** to strictly divide server and client responsibilities:
* **The Server (`app/dashboard/page.tsx`):** Acts as our data layer. It securely connects to Supabase using `@supabase/ssr`, fetches the `courses` table, and passes the serialized data down. No sensitive database keys or heavy fetching logic is ever shipped to the browser.
* **The Client (`components/tiles/*`):** Components requiring interactivity (like Framer Motion hover states, `useEffect` mount animations, and `layoutId` morphing) are marked with `"use client"`. This perfect separation guarantees a lightning-fast initial HTML payload.

### 2. Intelligent Loading & Suspense
Why stare at a blank screen while the server queries the database? We wrap the entire data-fetching component in a `<Suspense>` boundary. Next.js instantly streams our `app/dashboard/loading.tsx` file—a highly polished, pulsing Framer Motion skeleton that perfectly mirrors the Bento Grid.

### 3. Advanced Framer Motion Strategies
- **Orchestrated Staggering:** We map over the Supabase data and pass an `index` prop to each `motion.article`. The mathematical delay (`delay: index * 0.08`) creates a stunning waterfall entrance effect.
- **Spring Physics:** Linear animations feel robotic. All hover elevations (`whileHover={{ scale: 1.015 }}`) are powered by spring physics (`stiffness: 300, damping: 20`) for a natural, snappy response.
- **Morphing Navigation:** The sidebar utilizes `<motion.div layoutId="nav-active-indicator" />`. As you click different tabs, the background highlight intelligently calculates the bounding box and glides between items seamlessly.

---

## 🚀 Getting Started Locally

Want to run this masterpiece on your own machine? Follow these steps:

### 1. Clone the repository
```bash
git clone https://github.com/your-username/student-learning-dashboard.git
cd student-learning-dashboard
```

### 2. Database Setup (Supabase)
1. Create a free project on [Supabase](https://supabase.com).
2. Navigate to the **SQL Editor** and execute the following schema:
```sql
CREATE TABLE courses (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  progress integer NOT NULL CHECK (progress >= 0 AND progress <= 100),
  icon_name text NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Seed your database
INSERT INTO courses (title, progress, icon_name) VALUES
  ('Advanced React Patterns', 75, 'Code2'),
  ('System Design Fundamentals', 45, 'Database'),
  ('TypeScript Deep Dive', 90, 'FileCode2'),
  ('Machine Learning Basics', 20, 'Cpu');
```

### 3. Environment Variables
Rename the included `.env.example` file to `.env.local`:
```bash
cp .env.example .env.local
```
Add your Supabase URL and Anon Key (found in Project Settings -> API).

### 4. Install & Run
```bash
npm install
npm run dev
```
Navigate to `http://localhost:3000` to see the magic.

---

## 🚧 Challenges & Solutions

**1. Hydration Mismatches with Dynamic Layouts**
* **The Problem:** We wanted to build a mock "Contribution Graph" (like GitHub's activity grid) that rendered random activity blocks. Using `Math.random()` caused React to throw hydration mismatch errors because the server-rendered HTML didn't match the client's output.
* **The Solution:** We replaced `Math.random()` with a deterministic, pseudo-random mathematical formula using the grid indices (`Math.abs(Math.sin(weekIdx * 12.9898 + dayIdx * 78.233))`). This guaranteed identical patterns on both the server and client, instantly resolving the hydration error.

**2. Tailwind CSS v4 & Framer Motion Color Conflicts**
* **The Problem:** Tailwind v4 drastically changed its engine to utilize the new `oklab()` color spaces for modifiers like `border-white/5`. Framer Motion crashed attempting to interpolate `oklab` to `rgba` on hover.
* **The Solution:** We explicitly passed standard `rgba()` baseline values into Framer Motion's `initial` state, bypassing Tailwind's default compilation for that specific animated property while maintaining the deep space aesthetic.

---
<div align="center">
  <p><i>Built with precision for the Frontend Intern Challenge.</i></p>
</div>
