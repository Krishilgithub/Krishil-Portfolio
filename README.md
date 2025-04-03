# ML Portfolio Website

A cutting-edge, interactive portfolio website showcasing Machine Learning projects and expertise with advanced UI/UX features and 3D elements.

## 🌟 Features

- 🎨 Professional dark mode design with neon accents
- ✨ Advanced 3D animations and interactions
- 🖼️ Glassmorphism effects and modern UI elements
- 🎭 Interactive project showcases
- 📊 Dynamic skill visualizations
- 🤖 AI-themed elements and animations
- 📱 Fully responsive design

## 🛠️ Tech Stack

### Frontend
- Next.js 14 (React framework)
- Tailwind CSS
- Framer Motion
- GSAP (GreenSock Animation Platform)
- Locomotive Scroll
- React Three Fiber
- Three.js

### Backend
- Express.js
- Firebase (for contact form and data storage)

### Deployment
- Vercel

## 🚀 Quick Start

### Option 1: Using the Setup Script

For the easiest setup experience, use the provided script:

```bash
# Make sure the script is executable
chmod +x install-and-run.sh

# Run the setup script
./install-and-run.sh
```

This script will:
1. Install all dependencies
2. Set up environment variables
3. Start both frontend and backend servers

### Option 2: Manual Setup

Follow the detailed instructions in [HOW_TO_RUN.md](HOW_TO_RUN.md).

## 🔧 Troubleshooting Common Errors

### TypeScript Errors

If you encounter TypeScript errors related to:

- `framer-motion`
- `@react-three/fiber`
- `@react-three/drei`
- `three.js`

Run the following commands:

```bash
# Install missing type definitions
npm install --save-dev @types/three

# Use legacy peer dependencies to resolve compatibility issues
npm install --legacy-peer-deps
```

### WebGL Errors

The 3D components require WebGL support in your browser. The application includes a fallback for browsers without WebGL support.

To test if your browser supports WebGL, visit: [WebGL Report](https://webglreport.com/)

### Process.env Errors

If you see errors related to `process.env`, ensure:

1. Your `.env.local` file exists with the required variables
2. The TypeScript declaration file for environment variables is properly set up
3. You've restarted the development server after making changes

## 📋 Project Structure

```
ml-portfolio/
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx
│   │   │   ├── Footer.tsx
│   │   │   └── Layout.tsx
│   │   ├── sections/
│   │   │   ├── Hero.tsx
│   │   │   ├── About.tsx
│   │   │   ├── Projects.tsx
│   │   │   ├── Experience.tsx
│   │   │   ├── Achievements.tsx
│   │   │   ├── Testimonials.tsx
│   │   │   ├── TechStack.tsx
│   │   │   └── Contact.tsx
│   │   ├── 3d/
│   │   │   └── ModelComponents.tsx
│   │   └── shared/
│   │       ├── Button.tsx
│   │       ├── Card.tsx
│   │       └── AnimatedText.tsx
│   ├── styles/
│   │   └── globals.css
│   ├── lib/
│   │   ├── animations.ts
│   │   ├── api.ts
│   │   ├── firebase.ts
│   │   ├── models.ts
│   │   └── utils.ts
│   ├── types/
│   │   ├── env.d.ts
│   │   └── three-fiber.d.ts
│   └── app/
│       ├── layout.tsx
│       └── page.tsx
├── public/
│   ├── images/
│   └── models/
├── server.js
├── package.json
├── tsconfig.json
├── next.config.js
└── tailwind.config.ts
```

## 🚀 Development Process

1. **Project Setup**
   - Initialize Next.js project with TypeScript
   - Configure Tailwind CSS
   - Set up project structure and dependencies

2. **Core Components Development**
   - Create layout components (Header, Footer)
   - Implement shared components (Button, Card)
   - Set up global styles and theme

3. **Section Development**
   - Hero section with 3D elements
   - About section with skill visualizations
   - Projects showcase with interactive cards
   - Experience timeline
   - Achievements section
   - Testimonials carousel
   - Tech stack showcase
   - Contact form

4. **Animation & Interaction Implementation**
   - Set up GSAP animations
   - Implement Locomotive Scroll
   - Add 3D elements with React Three Fiber
   - Create hover effects and transitions

5. **Backend Integration**
   - Set up Express.js server
   - Implement Firebase configuration
   - Create API endpoints for contact form

6. **Testing & Optimization**
   - Cross-browser testing
   - Performance optimization
   - Mobile responsiveness testing
   - SEO optimization

7. **Deployment**
   - Configure Vercel deployment
   - Set up environment variables
   - Deploy and test live site

## 🎨 Design Guidelines

### Colors
- Primary: Deep blue (#0A192F)
- Secondary: Neon purple (#7B61FF)
- Accent: Cyberpunk pink (#FF61D8)
- Background: Dark gradient (#0A192F to #112240)
- Text: Light gray (#CCD6F6)

### Typography
- Primary Font: Inter
- Secondary Font: Poppins
- Code Font: Fira Code

### Animations
- Smooth page transitions (500ms)
- Hover effects (200ms)
- Scroll-triggered animations
- 3D model rotations

## 📦 Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/ml-portfolio.git
```

2. Install dependencies
```bash
cd ml-portfolio
npm install
```

3. Run development server
```bash
npm run dev
```

4. Build for production
```bash
npm run build
```

## 🔧 Environment Variables

Create a `.env.local` file with the following variables:
```
NEXT_PUBLIC_FIREBASE_API_KEY=
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=
NEXT_PUBLIC_FIREBASE_PROJECT_ID=
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=
NEXT_PUBLIC_FIREBASE_APP_ID=
```

## 📝 License

MIT License - feel free to use this project for your own portfolio! 