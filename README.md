# Samkit Kothari Portfolio

A detailed, personality-led portfolio for Samkit Kothari, Senior Frontend Engineer for Ecommerce and MarTech.

The site is built around a “commerce control room” idea: complex systems are represented as understandable signals, journeys, and decisions. It combines an impact-led homepage with four dedicated case studies, engineering field notes, a personal operating system, recommendations, career history, and contact pathways.

## Experience

- Purposeful commerce-signal map in the hero.
- Four original project visualizations that protect client confidentiality.
- Dedicated case-study routes for Personify, the multi-tenant commerce platform, VibeLabs, and Hydrafacial.
- Decision logs, simplified system models, constraints, outcomes, and learnings.
- Personal About, working principles, field notes, recommendations, career journey, and toolkit.
- Light and dark themes, responsive layouts, reduced-motion behavior, and keyboard-accessible interactions.
- Custom social preview artwork and accurate structured metadata.

## Stack

- React 18
- TypeScript
- Vite
- CSS
- Lucide React
- Vercel and OpenAI Sites-compatible static delivery

## Local development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
```

The Vercel configuration and the Sites worker both route case-study URLs back through the single-page application so direct visits to `/work/:project` resolve correctly.
