# MiN – MUND & NG GmbH Website

A modern, professional, and fully responsive company website built with React, TypeScript, Vite, and Tailwind CSS.

## 🚀 Features

- **Modern UI/UX**: Clean, professional design with smooth animations
- **Fully Responsive**: Mobile-first approach, works perfectly on all devices
- **Fast Performance**: Optimized with Vite and lazy loading
- **TypeScript**: Type-safe codebase
- **React Router**: Multi-page navigation
- **Tailwind CSS**: Utility-first CSS framework

## 📁 Project Structure

```
Website/
├── public/
│   ├── gallery/          # Gallery images (add your images here)
│   └── vite.svg
├── src/
│   ├── components/       # Reusable components
│   │   ├── Navbar.tsx
│   │   ├── MobileMenu.tsx
│   │   ├── Footer.tsx
│   │   ├── GalleryGrid.tsx
│   │   └── ServiceCard.tsx
│   ├── layout/
│   │   └── Layout.tsx
│   ├── pages/            # Page components
│   │   ├── Home.tsx
│   │   ├── About.tsx
│   │   ├── Services.tsx
│   │   ├── Gallery.tsx
│   │   ├── Contact.tsx
│   │   ├── Impressum.tsx
│   │   └── Privacy.tsx
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.ts
├── tailwind.config.js
└── tsconfig.json
```

## 🛠️ Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm run dev
   ```

3. **Build for production:**
   ```bash
   npm run build
   ```

4. **Preview production build:**
   ```bash
   npm run preview
   ```

## 📝 Customization

### Adding Gallery Images

1. Add your images to `public/gallery/`
2. Name them sequentially: `image-1.jpg`, `image-2.jpg`, etc.
3. Update `src/pages/Gallery.tsx` to use local images instead of placeholders

### Updating Company Information

- **Contact details**: Update in `src/components/Footer.tsx` and `src/pages/Contact.tsx`
- **Company name**: Search and replace "MUND & NG GmbH" throughout the codebase
- **Services**: Update in `src/pages/Services.tsx` and `src/pages/Home.tsx`

### Styling

- Tailwind configuration: `tailwind.config.js`
- Global styles: `src/index.css`
- Component styles: Inline Tailwind classes in components

## 🎨 Design Features

- **Color Scheme**: Blue gradient theme (customizable in Tailwind config)
- **Typography**: Inter font family
- **Animations**: Smooth fade-in and slide-up animations
- **Responsive Breakpoints**: Mobile, tablet, desktop optimized

## 📄 Pages

- **Home**: Hero section, company intro, service preview
- **About**: Company information, mission, why choose us
- **Services**: Detailed service offerings
- **Gallery**: Image gallery with modal view
- **Contact**: Contact form and company details
- **Impressum**: Legal information (required for German websites)
- **Privacy**: Privacy policy (Datenschutzerklärung)

## 🔧 Tech Stack

- **React 18**: UI library
- **TypeScript**: Type safety
- **Vite**: Build tool and dev server
- **Tailwind CSS**: Styling
- **React Router**: Navigation

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

MIT License - see LICENSE file for details

## 🤝 Support

For questions or support, please contact: info@mundng.de

