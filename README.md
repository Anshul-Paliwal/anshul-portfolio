# ⚡ Anshul Paliwal — Developer Portfolio

[![Next.js](https://img.shields.io/badge/Next.js-16.4.2-black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.3.0-blue?style=for-the-badge&logo=react&logoColor=white)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Three.js](https://img.shields.io/badge/Three.js-WebGL-black?style=for-the-badge&logo=three.js&logoColor=white)](https://threejs.org/)
[![GSAP](https://img.shields.io/badge/GSAP-3.15-green?style=for-the-badge&logo=greensock&logoColor=white)](https://greensock.com/gsap/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38bdf8?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)

> An interactive, high-performance personal portfolio showcasing full-stack engineering, 3D creative coding, and modern web architecture. Built with **Next.js 16**, **React 19**, **Three.js**, **GSAP**, and **Tailwind CSS**.

---

## ✨ Features

- **🎮 3D Physics Lanyard Card**: An interactive 3D physics-simulated developer badge rendered with Three.js, supporting drag, inertia, and realistic cloth/band physics.
- **🫧 WebGL2 Gooey Navigation**: Custom WebGL2 shader-driven gooey navigation component with smooth liquid deformation and spring physics.
- **🖥️ Cyberpunk Boot Sequence**: Interactive terminal boot loader with authentic audio-visual feedback and scanline aesthetics.
- **📜 GSAP & ScrollTrigger Animations**: Fluid scroll choreography, sliced image parallax, pin triggers, and text reveals.
- **🎨 Dark Editorial Aesthetic**: High-contrast, typography-forward brutalist layout built for impact.
- **📱 Responsive & Accessible**: Seamlessly optimized across desktop, tablet, and mobile devices.
- **🧭 Multi-Page Navigation**:
  - `/` — Interactive landing experience, boot sequence, and core showcases.
  - `/about` — Biography, tech stack proficiency, developer lanyard, and engineering philosophy.
  - `/projects` — Detailed portfolio of production systems (ParkEzy, Enterprise Spring Boot, Mobile Apps).
  - `/experience` — Career timeline, internships, and educational background.
  - `/contact` — Direct channels, booking, and social touchpoints.

---

## 🛠️ Tech Stack

| Layer | Technologies |
| :--- | :--- |
| **Framework** | [Next.js 16 (App Router)](https://nextjs.org), [React 19](https://react.dev) |
| **Language** | [TypeScript](https://www.typescriptlang.org/) |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/), Custom Vanilla CSS & Glassmorphism |
| **3D & Creative Coding** | [Three.js](https://threejs.org/), WebGL2 Shaders |
| **Motion & Animation** | [GSAP](https://greensock.com/gsap/) (ScrollTrigger, Flip) |
| **Tooling & Optimization** | Turbopack, ESLint 9, Sharp |

---

## 📂 Project Structure

```text
portfolio/
├── public/                 # Static assets & textures
├── src/
│   ├── app/
│   │   ├── about/          # /about page with 3D Lanyard
│   │   ├── contact/        # /contact page with direct outreach
│   │   ├── experience/     # /experience career & education history
│   │   ├── projects/       # /projects featured applications
│   │   ├── globals.css     # Global styles & Tailwind entry
│   │   ├── layout.tsx      # Root layout & font definitions
│   │   └── page.tsx        # Landing page with boot sequence & GSAP effects
│   └── components/
│       ├── GooeyNav.jsx    # Custom WebGL2 liquid navigation bar
│       ├── GooeyNav.css    # Gooey nav styling & layout
│       ├── Lanyard.jsx     # Three.js 3D interactive physics badge
│       ├── Lanyard.css     # Lanyard canvas container styles
│       └── Navbar.tsx      # Global responsive navigation wrapper
├── package.json            # Dependencies and npm scripts
├── tsconfig.json           # TypeScript configuration
└── README.md               # Project documentation
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js**: `v18.18+` or `v20+` recommended
- **npm**, **pnpm**, or **yarn**

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Anshul-Paliwal/anshul-portfolio.git
   cd anshul-portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the local development server:**
   ```bash
   npm run dev
   ```

4. **Open in browser:**
   Navigate to [http://localhost:3000](http://localhost:3000) to view the application.

---

## 📦 Build & Production

To generate an optimized production build:

```bash
npm run build
npm run start
```

To run lint checks:

```bash
npm run lint
```

---

## 🌐 Deployment

The easiest way to deploy this portfolio is through the [Vercel Platform](https://vercel.com):

1. Push your repository to GitHub.
2. Import the repository in [Vercel Dashboard](https://vercel.com/new).
3. Vercel will automatically detect Next.js and configure optimal build settings.
4. Click **Deploy**.

---

## 📬 Connect with Me

- **Developer**: Anshul Paliwal
- **Email**: [anshulpaliwal0810@gmail.com](mailto:anshulpaliwal0810@gmail.com)
- **LinkedIn**: [linkedin.com/in/anshulpaliwal](https://linkedin.com/in/anshulpaliwal)
- **GitHub**: [@Anshul-Paliwal](https://github.com/Anshul-Paliwal)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
