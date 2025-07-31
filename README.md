# Violetis Cloud Landing Page

A modern, responsive landing page built with **Angular** to showcase the features and capabilities of **Violetis Cloud**, an AI infrastructure platform.  
This project serves as a technical assessment demonstrating proficiency in modern web development practices.

---

## 🚀 Project Overview

The landing page provides a comprehensive overview of the platform's offerings, including:

- AI infrastructure at a glance  
- AI APIs  
- Compute & storage management  
- Developer control  
- Flexible pricing plans  
- Clear call to action  

---

## ✨ Key Features

- **Responsive Design** – Optimized for desktop, tablet, and mobile.  
- **Interactive Hero Section** – Dynamic visuals with parallax effects.  
- **Feature Highlights** – Dedicated sections for AI-ready compute, pricing, and scaling.  
- **AI API Interaction** – Simulated prompt-response interface for API integration.  
- **Developer Dashboard** – Interactive grid showcasing usage metrics.  
- **Dynamic Content** – Data-driven sections (e.g., pricing, dashboard metrics).  
- **Scroll-Reveal Animations** – Smooth staggered animations on scroll.  
- **Theme Toggling** – Light/Dark mode switch.  
- **Modular Component Architecture** – Clean, reusable Angular components and services.  

---

## 🛠️ Technologies Used

- **Framework:** Angular (v20.1.3)  
- **Language:** TypeScript  
- **Styling:** SCSS (BEM conventions + CSS Variables)  
- **UI Components:** Angular Material  
- **HTTP Client:** Angular HttpClient with Interceptors  
- **State Management:** Angular Signals  
- **Animation:** Custom `ScrollRevealDirective` (IntersectionObserver)  
- **Bundler:** Webpack (via Angular CLI)  
- **Version Control:** Git & GitHub  

---

## 📂 Project Structure & Modularity
src/app/
│
├── core/ # Core features (navbar, theme service)
├── directives/ # Custom directives (e.g., scroll-reveal.ts)
├── features/ # Landing page sections (hero, highlights, ai-api, pricing)
├── shared/ # Reusable models, services, utilities
├── components/ # Generic reusable UI components

yaml
Copy
Edit

- **SCSS Organization** – Component-scoped styles using SCSS nesting and `:host`.  
- **Global Styles** – Managed in `app.scss` (variables, themes, overrides).  

---

## 🧹 Code Quality & Readability

- ✅ Consistent Angular & TypeScript style guides  
- ✅ Descriptive naming conventions  
- ✅ Modular design for scalability  
- ✅ Minimal, professional comments explaining complex logic  
- ✅ Strong TypeScript typing with interfaces  

---

## ⚙️ Setup and Installation

Clone the repository:

```bash
git clone https://github.com/arshadshaik0000/violetis-cloud-landing-page.git
cd violetis-cloud-landing-page
npm install
💻 Development Server
Run the dev server:

bash
Copy
Edit
ng serve
Navigate to: http://localhost:4200/
The app will auto-reload when files are changed.

📦 Building for Production
bash
Copy
Edit
ng build --configuration production
Build artifacts will be stored in:
dist/violetis-cloud-landing-page/browser/

🌍 Deployment
Deployed via Netlify for continuous deployment.

GitHub Repo: Violetis Cloud Landing Page

Live URL: https://prismatic-brioche-e3c06c.netlify.app/

🔮 Future Enhancements
🔗 Backend Integration – Replace mock data with real APIs

🎨 Animations Refinement – Explore GSAP for richer interactions

♿ Accessibility – Add ARIA attributes & keyboard navigation

⚡ Performance – Optimize images, lazy loading, critical CSS

🧪 Unit & E2E Tests – Comprehensive test coverage

📝 Content Management – Integrate headless CMS

📜 License
This project is for technical assessment and demonstration purposes.
