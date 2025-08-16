# Personal Website - React Version

A modern, responsive personal website built with React.js, TypeScript, and Bootstrap. This project is a complete conversion of the original HTML/CSS/JavaScript personal website to a modular React application.

## 🚀 Features

- **Modern React Architecture**: Built with React 18, TypeScript, and functional components
- **Responsive Design**: Mobile-first approach with Bootstrap 5
- **Component-Based**: Highly modular and reusable components
- **Smooth Animations**: AOS (Animate On Scroll) integration
- **Type Safety**: Full TypeScript implementation
- **Modern Routing**: React Router v6 for seamless navigation
- **Performance Optimized**: Lazy loading and efficient rendering

## 🛠️ Tech Stack

- **Frontend Framework**: React 18 with TypeScript
- **Routing**: React Router DOM
- **Styling**: Bootstrap 5 + Custom CSS
- **Icons**: Bootstrap Icons + Font Awesome
- **Animations**: AOS (Animate On Scroll)
- **Typing Animation**: Typed.js
- **Build Tool**: Create React App

## 📁 Project Structure

```
├── src/
│   ├── components/
│   │   ├── common/           # Reusable components
│   │   │   ├── Preloader.tsx
│   │   │   └── ScrollToTop.tsx
│   │   ├── layout/           # Layout components
│   │   │   ├── Header.tsx
│   │   │   └── Footer.tsx
│   │   └── sections/         # Page sections
│   │       ├── Hero.tsx
│   │       ├── About.tsx
│   │       ├── Skills.tsx
│   │       ├── Resume.tsx
│   │       ├── Interests.tsx
│   │       └── PageTitle.tsx
│   ├── pages/                # Page components
│   │   ├── Home.tsx
│   │   ├── About.tsx
│   │   ├── Resume.tsx
│   │   ├── Research.tsx
│   │   ├── Projects.tsx
│   │   └── Contact.tsx
│   ├── hooks/                # Custom hooks
│   │   └── useScrollToTop.ts
│   ├── utils/                # Utility functions
│   │   └── constants.ts
│   ├── types/                # TypeScript types
│   ├── App.tsx               # Main app component
│   ├── App.css               # Global styles
│   └── index.tsx             # Entry point
├── public/                   # Static assets
│   ├── assets/               # Images and other assets
│   └── index.html            # HTML template
├── package.json              # Dependencies and scripts
├── tsconfig.json             # TypeScript configuration
└── README.md                 # Project documentation
```

## 🎯 Key Components

### Layout Components
- **Header**: Responsive navigation with mobile menu
- **Footer**: Social links and copyright information
- **ScrollToTop**: Smooth scroll to top functionality
- **Preloader**: Loading animation

### Section Components
- **Hero**: Animated hero section with typed text
- **About**: Personal information and bio
- **Skills**: Animated progress bars
- **Resume**: Education and experience timeline
- **Interests**: Feature grid with icons
- **PageTitle**: Reusable page headers

### Page Components
- **Home**: Landing page with hero section
- **About**: Personal information and skills
- **Resume**: Education and work experience
- **Research**: Research projects and publications
- **Projects**: Portfolio with filtering
- **Contact**: Contact form and information

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd personal_website_rezuwan
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Build for Production

```bash
npm run build
```

## 🎨 Customization

### Colors and Styling
The color scheme is defined in CSS variables in `src/App.css`:

```css
:root {
  --accent-color: #1cb5ea;
  --background-color: #000000;
  --default-color: #fafafa;
  --heading-color: #ffffff;
}
```

### Content Updates
- Update personal information in `src/utils/constants.ts`
- Modify page content in respective component files
- Add new sections by creating new components

### Adding New Pages
1. Create a new component in `src/pages/`
2. Add the route in `src/App.tsx`
3. Add navigation link in `src/components/layout/Header.tsx`

## 📱 Responsive Design

The website is fully responsive with:
- Mobile-first approach
- Bootstrap grid system
- Custom media queries
- Touch-friendly navigation

## ⚡ Performance Features

- Lazy loading of components
- Optimized images
- Efficient state management
- Minimal bundle size
- Smooth animations

## 🔧 Development

### Available Scripts

- `npm start`: Runs the app in development mode
- `npm test`: Launches the test runner
- `npm run build`: Builds the app for production
- `npm run eject`: Ejects from Create React App

### Code Style

- TypeScript for type safety
- Functional components with hooks
- Consistent naming conventions
- Modular component structure

## 📄 License

This project is licensed under the MIT License.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📞 Contact

For questions or support, please contact:
- Email: rezwanhasan262@gmail.com
- LinkedIn: [Md. Rezuwan Hassan](https://www.linkedin.com/in/md-rezuwan-hassan/)

---

**Note**: This is a React conversion of the original personal website. All original assets and styling have been preserved while modernizing the architecture for better maintainability and developer experience.
