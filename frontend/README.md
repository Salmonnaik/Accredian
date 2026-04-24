# SaaS Frontend - Next.js Landing Page

A production-ready SaaS landing page built with Next.js 14, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Modern Tech Stack**: Next.js 14 with App Router, TypeScript, Tailwind CSS
- **Component-Driven Architecture**: Reusable UI components with clean separation
- **Responsive Design**: Mobile-first approach with smooth animations
- **Form Handling**: Integrated lead capture with validation
- **API Integration**: Connected to Express backend with error handling
- **SEO Optimized**: Proper meta tags and semantic HTML
- **Production Ready**: Clean code structure and best practices

## 📁 Project Structure

```
frontend/
├── app/
│   ├── components/
│   │   ├── ui/           # Reusable UI components
│   │   ├── layout/       # Layout components (Navbar, Footer)
│   │   ├── shared/       # Shared components (Card, Badge, Logo)
│   │   ├── forms/        # Form components
│   │   └── sections/     # Landing page sections
│   ├── services/         # API services
│   ├── hooks/           # Custom React hooks
│   ├── utils/           # Utility functions
│   ├── types/           # TypeScript type definitions
│   ├── globals.css      # Global styles
│   ├── layout.tsx       # Root layout
│   └── page.tsx         # Home page
├── public/              # Static assets
├── .env.local          # Environment variables
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── README.md
```

## 🛠️ Installation

1. Install dependencies:
```bash
npm install
```

2. Set up environment variables:
```bash
cp .env.example .env.local
```

3. Configure your API URL in `.env.local`:
```
NEXT_PUBLIC_API_URL=http://localhost:5000
```

## 🏃‍♂️ Running the Application

### Development Mode
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build
```bash
npm run build
npm start
```

## 🎨 Components Overview

### UI Components (`/components/ui`)
- **Button**: Multiple variants (primary, secondary, outline, loading)
- **Input**: Form inputs with validation states
- **Container**: Responsive container with size variants
- **Section**: Reusable section component with background options

### Layout Components (`/components/layout`)
- **Navbar**: Sticky navigation with mobile menu
- **Footer**: Comprehensive footer with links and social

### Shared Components (`/components/shared`)
- **Card**: Flexible card component with header, body, footer
- **Badge**: Status badges with color variants
- **Logo**: Reusable logo component

### Form Components (`/components/forms`)
- **LeadForm**: Lead capture form with validation and API integration

### Sections (`/components/sections`)
- **HeroSection**: Main hero with form integration
- **TrustSection**: Customer logos and statistics
- **FeaturesSection**: Feature grid with highlights
- **HowItWorksSection**: Step-by-step process
- **TestimonialsSection**: Customer testimonials
- **EnterpriseSection**: Enterprise features and pricing
- **CTASection**: Final call-to-action with form

## 🔌 API Integration

The frontend connects to the Express backend through the API service:

```typescript
import { submitLead } from '@/services/api'

const handleSubmit = async (data) => {
  try {
    const result = await submitLead(data)
    console.log('Success:', result)
  } catch (error) {
    console.error('Error:', error)
  }
}
```

## 🎯 Key Features

### Form Handling
- Client-side validation
- Loading states
- Error handling
- Success feedback
- Auto-reset after submission

### Responsive Design
- Mobile-first approach
- Breakpoint-specific layouts
- Touch-friendly interactions
- Optimized images and assets

### Performance
- Component lazy loading
- Optimized bundle size
- Efficient re-renders
- SEO-friendly

## 🛠️ Development Guidelines

### Component Structure
- Keep components under 150 lines
- Use TypeScript interfaces for props
- Follow consistent naming conventions
- Export components individually

### Styling
- Use Tailwind utility classes
- Create reusable component variants
- Maintain consistent spacing and colors
- Add hover and transition effects

### Code Quality
- Use ESLint and Prettier
- Follow React best practices
- Implement proper error boundaries
- Add loading and error states

## 🚀 Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Docker
```bash
docker build -t saas-frontend .
docker run -p 3000:3000 saas-frontend
```

### Static Export
```bash
npm run build
npm run export
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

For support, please contact [support@example.com](mailto:support@example.com) or open an issue on GitHub.
