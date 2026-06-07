# Samkit Kothari Portfolio

Samkit Kothari's main portfolio presented as a 3D commerce command center for frontend engineering, ecommerce storefronts, personalization, AI content workflows, and performance engineering.

## Stack

- React + Vite + TypeScript
- React Three Fiber + Drei + Three.js
- Tailwind CSS
- Framer Motion
- Lucide React icons
- Vercel deployment

## Highlights

- 3D command center mapped to real projects and resume impact.
- Project showroom with problem, solution, technology, and measurable outcome.
- Experience timeline covering THG, Coditas, and education.
- Contact section with email, LinkedIn, GitHub, and resume download.
- Light/dark mode, responsive layout, reduced-motion support, and loading state.

## Structure

- `src/data/` stores resume-backed content.
- `src/types/` stores shared portfolio types.
- `src/components/layout/` stores page chrome.
- `src/components/sections/` stores page sections.
- `src/components/scene/` stores 3D scene primitives and composition.
- `src/components/ui/` stores reusable presentational components.

## Local Development

```bash
npm install
npm run dev
```

The local machine may block npm registry access. In that case, deploy to Vercel from the repository; Vercel will install dependencies during the build.

## Deployment

1. Push this repository to GitHub.
2. Import it into Vercel.
3. Keep the default Vite settings:
   - Build command: `npm run build`
   - Output directory: `dist`
4. Open the deployed URL and verify the 3D command center, resume download, project cards, and contact links.
