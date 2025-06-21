# EduConnect Website

A modern, responsive static website for EduConnect - an educational communication platform that helps teachers keep parents informed through automated WhatsApp and SMS alerts.

## 🚀 Features

- **Static HTML/CSS**: No build process required, works perfectly on Cloudflare Pages
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Form Validation**: Client-side validation with error handling
- **Accessibility**: WCAG compliant with proper semantic HTML
- **SEO Optimized**: Meta tags, structured data, and performance optimized
- **Fast Loading**: CDN-hosted Tailwind CSS for optimal performance

## 🛠️ Tech Stack

- **Frontend**: Static HTML5, CSS3
- **Styling**: Tailwind CSS (CDN)
- **Icons**: SVG icons (no external dependencies)
- **Hosting**: Cloudflare Pages ready
- **No Build Process**: Direct deployment

## 📁 Project Structure

```
educonnect-website/
├── index.html          # Main website file
├── README.md           # Project documentation
└── .gitignore          # Git ignore file
```

## 🚀 Getting Started

### Prerequisites

- No build tools required!
- Just a web browser and a text editor

### Local Development

1. Clone the repository:
```bash
git clone <repository-url>
cd educonnect-website
```

2. Open `index.html` in your browser or use a local server:
```bash
# Using Python
python -m http.server 8000

# Using Node.js
npx serve .

# Using PHP
php -S localhost:8000
```

3. Open your browser and navigate to `http://localhost:8000`

### Deployment to Cloudflare Pages

1. Push your code to GitHub
2. Connect your repository to Cloudflare Pages
3. Set build settings:
   - **Build command**: Leave empty (no build required)
   - **Build output directory**: Leave empty (root directory)
   - **Root directory**: Leave empty
4. Deploy!

## 🎨 Website Sections

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
- No JavaScript framework overhead
- CDN-hosted Tailwind CSS
- Optimized SVG icons
- Minimal external dependencies

## 🔧 Customization

### Colors
Colors can be customized in the Tailwind config section of `index.html`:

```javascript
colors: {
  blue: {
    50: '#eff6ff',
    // ... other shades
  }
}
```

### Content
Update content directly in the HTML file:
- Modify text content in the appropriate sections
- Update form fields as needed
- Change contact information

### Styling
Custom styles can be added in the `<style>` section:

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
- Mobile browsers

## 🌐 Hosting Options

This static website works perfectly with:

- **Cloudflare Pages** (recommended)
- **Netlify**
- **Vercel**
- **GitHub Pages**
- **Any static hosting service**

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes directly in `index.html`
4. Commit your changes (`git commit -m 'Add some amazing feature'`)
5. Push to the branch (`git push origin feature/amazing-feature`)
6. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 📞 Support

For support, email support@educonnect.com or create an issue in the repository.

---

Built with ❤️ for better parent-teacher communication 