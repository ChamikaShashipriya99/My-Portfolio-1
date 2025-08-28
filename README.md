# 🚀 Chamika Shashipriya - Portfolio Website

A modern, responsive portfolio website showcasing my journey as a Full Stack Developer & UI/UX Designer. Built with React, TypeScript, and Tailwind CSS, featuring dynamic GitHub integration, smooth animations, and a beautiful user interface.

## 🌟 Live Demo

**🔗 [View Live Portfolio](https://chamikashashipriya.vercel.app/)**

## ✨ Features

### 🎨 **Modern Design**
- **Responsive Design**: Mobile-first approach with seamless experience across all devices
- **Dark/Light Mode**: Toggle between themes with smooth transitions
- **Interactive Animations**: Smooth scrolling, hover effects, and dynamic elements
- **Gradient Backgrounds**: Beautiful gradient designs with particle effects
- **Matrix-style Effects**: Digital rain and floating code elements for a tech aesthetic

### 🛠️ **Technical Features**
- **GitHub Integration**: Dynamic project showcase with real-time repository data
- **TypeScript**: Full type safety and better development experience
- **Component Architecture**: Modular, reusable React components
- **Performance Optimized**: Fast loading with Vite build tool
- **SEO Friendly**: Proper meta tags and semantic HTML structure

### 📱 **Sections**
- **Hero Section**: Animated typing effect with call-to-action buttons
- **About**: Personal introduction with values and principles
- **Skills**: Comprehensive technology stack with categorized skills
- **Projects**: Dynamic GitHub repository showcase with filtering
- **Experience**: Professional background and achievements
- **Contact**: Multiple contact methods and social links
- **Footer**: Additional links and information

## 🛠️ Tech Stack

### **Frontend**
- **React 18** - Modern React with hooks and functional components
- **TypeScript** - Type-safe JavaScript development
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Beautiful, customizable icons
- **Vite** - Fast build tool and development server

### **Development Tools**
- **ESLint** - Code linting and quality assurance
- **PostCSS** - CSS processing and optimization
- **Autoprefixer** - Automatic vendor prefixing

### **Deployment**
- **Vercel** - Modern deployment platform
- **GitHub Actions** - Automated CI/CD pipeline

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/ChamikaShashipriya99/My-Portfolio.git
   cd My-Portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the application

### Build for Production

```bash
npm run build
# or
yarn build
```

The built files will be in the `dist` directory, ready for deployment.

## 📁 Project Structure

```
src/
├── components/           # React components
│   ├── About.tsx        # About section
│   ├── Contact.tsx      # Contact form and info
│   ├── Experience.tsx   # Professional experience
│   ├── Footer.tsx       # Footer component
│   ├── Header.tsx       # Navigation header
│   ├── Hero.tsx         # Hero section with animations
│   ├── Projects.tsx     # GitHub projects showcase
│   └── Skills.tsx       # Skills and technologies
├── App.tsx              # Main application component
├── main.tsx             # Application entry point
├── index.css            # Global styles and animations
└── vite-env.d.ts        # Vite type definitions
```

## 🎯 Key Components

### **Hero Component**
- Animated typing effect for name and title
- Smooth scroll navigation
- Download CV functionality
- Interactive background elements

### **Projects Component**
- **GitHub API Integration**: Fetches repositories dynamically
- **Language Filtering**: Filter projects by programming language
- **README Integration**: Displays project descriptions from README files
- **Repository Stats**: Shows stars, forks, and contribution data
- **Live Preview**: Links to deployed projects when available

### **Skills Component**
- **Categorized Skills**: Organized by technology type
- **Interactive Cards**: Hover effects and animations
- **Technology Icons**: Visual representation of each skill
- **Expertise Overview**: Summary of technical capabilities

## 🎨 Customization

### **Personal Information**
Update the following files to customize for your own portfolio:

1. **Hero.tsx** - Update name, title, and description
2. **About.tsx** - Modify personal information and values
3. **Skills.tsx** - Update skills and technologies
4. **Contact.tsx** - Update contact information and social links

### **GitHub Integration**
To use your own GitHub repositories:

1. Update the GitHub username in `Projects.tsx`:
   ```typescript
   const response = await fetch('https://api.github.com/users/YOUR_USERNAME/repos?sort=updated&per_page=100');
   ```

2. Update custom homepage mappings for your deployed projects:
   ```typescript
   const customHomepages: { [key: string]: string } = {
     'your-repo-name': 'https://your-deployed-app.vercel.app/',
   };
   ```

### **Styling**
- **Colors**: Modify Tailwind CSS classes for different color schemes
- **Animations**: Update CSS animations in `index.css`
- **Layout**: Adjust grid layouts and spacing in component files

## 🚀 Deployment

### **Vercel (Recommended)**
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy with zero configuration

## 📱 Responsive Design

The portfolio is fully responsive and optimized for:
- **Mobile**: 320px and up
- **Tablet**: 768px and up
- **Desktop**: 1024px and up
- **Large Desktop**: 1280px and up

## 🎭 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📞 Contact

**Chamika Shashipriya**
- **Portfolio**: [chamikashashipriya.vercel.app](https://chamikashashipriya.vercel.app/)
- **GitHub**: [@ChamikaShashipriya99](https://github.com/ChamikaShashipriya99)

## 🙏 Acknowledgments

- **Lucide React** for beautiful icons
- **Tailwind CSS** for the utility-first CSS framework
- **Vite** for the fast build tool
- **GitHub API** for dynamic project integration
- **Vercel** for seamless deployment

---

⭐ **Star this repository if you found it helpful!**

*Built with ❤️ by Chamika Shashipriya*
