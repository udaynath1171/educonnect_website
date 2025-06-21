# EduConnect Website

A modern, responsive website for EduConnect - an educational communication platform that helps teachers keep parents informed through automated WhatsApp and SMS alerts.

## 🚀 Features

- **Modern React Architecture**: Built with React 18 and Vite for optimal performance
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Component-Based**: Modular, reusable components for easy maintenance
- **Form Validation**: Client-side validation with error handling
- **Accessibility**: WCAG compliant with proper semantic HTML
- **SEO Optimized**: Meta tags, structured data, and performance optimized

## 🛠️ Tech Stack

- **Frontend**: React 18, Vite
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Package Manager**: npm

## 📁 Project Structure

```
educonnect-website/
├── src/
│   ├── components/
│   │   ├── Hero.jsx
│   │   ├── ProblemSection.jsx
│   │   ├── FeaturesSection.jsx
│   │   ├── HowItWorksSection.jsx
│   │   └── EarlyAccessForm.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── public/
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd educonnect-website
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:3000`

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## 🎨 Components

### Hero Section
- Eye-catching headline and value proposition
- Interactive demo card showing WhatsApp messages
- Call-to-action button for early access

### Problem Section
- Highlights communication challenges in education
- Three main problems with solutions
- Blue solution section with key benefits

### Features Section
- Three core features with detailed descriptions
- Color-coded cards with hover effects
- Benefit lists for each feature

### How It Works Section
- Three-step process explanation
- Visual timeline with icons
- Call-to-action for demo scheduling

### Early Access Form
- Multi-step form with validation
- Success state handling
- Benefits sidebar
- Responsive design

## 🎯 Key Features

### Form Validation
- Real-time validation feedback
- Email format validation
- Phone number validation (optional)
- Required field validation
- Error state management

### Responsive Design
- Mobile-first approach
- Breakpoints for tablet and desktop
- Flexible grid layouts
- Optimized typography scaling

### Performance
- Code splitting with Vite
- Optimized bundle size
- Lazy loading of components
- Efficient CSS with Tailwind

## 🔧 Customization

### Colors
Colors can be customized in `tailwind.config.js`:

```javascript
colors: {
  blue: {
    50: '#eff6ff',
    // ... other shades
  }
}
```

### Components
Each component is self-contained and can be easily modified:
- Update content in component files
- Modify styles using Tailwind classes
- Add new sections by creating new components

### Styling
Custom styles can be added in `src/index.css`:

```css
@layer components {
  .btn-primary {
    @apply bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg;
  }
}
```

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 📞 Support

For support, email support@educonnect.com or create an issue in the repository.

---

Built with ❤️ for better parent-teacher communication 