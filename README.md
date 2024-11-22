# Next.js Portfolio Website

A modern, responsive portfolio website built with Next.js 14, TypeScript, Tailwind CSS, and PostCSS.

## Tech Stack
- Next.js 14
- TypeScript
- Tailwind CSS
- PostCSS

## Features
- Responsive Design
- Dark/Light Mode
- Modern UI/UX
- Optimized Performance

## Project Sections
- Navbar
- Hero Section
- About
- Skills
- Projects
- Contact
- Footer

## Quick Start
```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

## Project Structure
```
src/
├── app/
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── Hero/
│   ├── Navbar/
│   ├── Skills/
│   ├── Projects/
│   ├── Contact/
│   └── Footer/
├── styles/
└── assets/
```

## Configuration

```typescript
// tailwind.config.ts
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      // Your custom configurations
    },
  },
}
```

## Scripts
```json
{
  "dev": "next dev",
  "build": "next build",
  "start": "next start",
  "lint": "next lint"
}
```

## License
MIT License

