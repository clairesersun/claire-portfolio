<!--
  Claire Sersun Portfolio Website
  Single-source documentation: setup, content, accessibility, deployment, and best practices.
  Last updated: December 2025
-->

# Claire Sersun Portfolio Website

Accessibility-first portfolio built with Next.js, TypeScript, and Vanilla CSS. This README is your single source for setup, content management, accessibility, deployment, and best practices.

---

## 1. Project Overview & Philosophy

- **Accessibility-first**: WCAG AAA compliance is non-negotiable.
- **Performance**: Minimal JS, optimized images, fast loading.
- **Maintainability**: Clean, well-commented code. All content in one place.
- **Delightful, professional, and bold**: Accessible ≠ boring. Delight ≠ inaccessible.

---

## 2. Quick Start

**Prerequisites:** Node.js 20+ (see `.nvmrc`)

```bash
npm install
npm run dev
# Visit http://localhost:3000
```

**Troubleshooting:**
- If you see hydration errors, try an incognito window (browser extensions often inject attributes).
- See the "FAQ & Troubleshooting" section below for more.

---

## 3. Content Management

All content is centralized in `content.ts`:
- Case studies (`caseStudies` array)
- About page (`aboutContent` object)
- Contact info (`contactInfo` object)
- Resume (`resumeData` object)

### Editing Content

**Case Studies:**
```typescript
{
  id: "unique-id",
  slug: "url-slug",
  title: "Case Study Title",
  subtitle: "Brief description",
  tags: ["Tag1", "Tag2"],
  year: "2024",
  overview: "Overview paragraph...",
  challenges: ["Challenge 1", "Challenge 2"],
  research: "Research paragraph...",
  approachTitle: "Key Innovation",
  approach: "Approach paragraph...",
  process: ["Step 1", "Step 2"],
  resultsImpact: ["Impact 1", "Impact 2"],
  resultsTools: ["Tool 1", "Tool 2"]
}
```
**Preserve exact text.**

**About:**
```typescript
export const aboutContent = {
  intro: "First paragraph...",
  body: "Second paragraph..."
};
```

**Contact:**
```typescript
export const contactInfo = {
  email: "your.email@example.com",
  linkedin: "https://linkedin.com/in/yourprofile",
  linkedinDisplay: "linkedin.com/in/yourprofile",
  portfolio: "https://yourportfolio.com",
  github: "https://github.com/yourusername"
};
```

**Resume:**
Edit the `resumeData` object for experience, skills, education, and summary.

**Best Practices:**
- Be concise and use active voice
- Proofread for typos
- Use double quotes and keep lines under 80 chars in arrays
- Test changes: `npm run dev` and check the site

---

## 4. Design System

**Colors:**
- Defined as CSS custom properties in `app/globals.css`
- WCAG AAA contrast: 15:1 (light), 16:1 (dark)
- Accent: `--color-accent` (`#0047ab` light, `#5c9eff` dark)

**Typography:**
- System font stack for performance
- Sizes via CSS custom properties (`--font-size-*`)

**Spacing:**
- 8px-based scale (`--space-xs` to `--space-5xl`)

**Responsive:**
- Mobile-first, breakpoints at 480px, 600px, 768px

---

## 5. Accessibility (WCAG AAA)

**Features:**
- Keyboard navigation (Tab, Enter, Escape)
- Visible focus indicators (3px outline, offset)
- Screen reader support (semantic HTML, ARIA where needed)
- Reduced motion: all animations removed with `prefers-reduced-motion`
- Skip-to-content link
- Touch targets ≥ 44x44px
- Color contrast: AAA (7:1+)

**Testing:**
- Automated: axe DevTools, Lighthouse, WAVE
- Manual: keyboard, screen reader (VoiceOver/NVDA), color contrast, motion, text sizing

**Accessibility Checklist:**
- [ ] All interactive elements keyboard accessible
- [ ] Focus indicators visible and high-contrast
- [ ] Heading hierarchy correct (h1 → h2 → h3)
- [ ] Proper use of nav, main, header, footer
- [ ] All images have alt text
- [ ] No keyboard traps
- [ ] ARIA only where needed
- [ ] External links open in new tab with indication
- [ ] All links/buttons have clear, descriptive text
- [ ] All animations removed with reduce motion
- [ ] Test skip-to-content link
- [ ] Test at 200% zoom, no horizontal scroll

**Testing Schedule:**
- Before each commit: run axe DevTools
- Before release: full keyboard and screen reader test
- Monthly: full accessibility audit

---

## 6. Deployment

**Vercel (Recommended):**
1. Push to GitHub
2. Import repo at https://vercel.com
3. Deploy (auto-detects Next.js)
4. Add custom domain in Vercel dashboard

**Netlify:**
1. Build: `npm run build`
2. Deploy `.next` folder or connect repo

**Custom Server:**
1. Build: `npm run build`
2. Start: `npm start`
3. (Optional) Use PM2 for process management
4. (Optional) Configure Nginx reverse proxy and SSL

**Post-Deployment:**
- Update domain in `app/sitemap.ts` and `app/robots.ts`
- Test all pages, check `/sitemap.xml` and `/robots.txt`
- Run Lighthouse audit
- Enable analytics if desired

**Continuous Deployment:**
- Push to GitHub → auto-deploys on Vercel/Netlify

**Backup & Version Control:**
- Use git for all changes
- Regularly backup `content.ts`

---

## 7. Pre-Launch & QA Checklist

- [ ] All content reviewed and accurate
- [ ] All images have alt text
- [ ] Favicon and OG image added
- [ ] Domain updated in sitemap/robots
- [ ] Meta descriptions and Open Graph tags set
- [ ] Archive page set to noindex
- [ ] Accessibility: 0 axe violations, keyboard navigation, focus states, screen reader, color contrast, reduced motion, skip link
- [ ] Responsive: tested on mobile, tablet, desktop, all browsers
- [ ] Performance: Lighthouse 95+, FCP < 1.5s, TTI < 3.5s, CLS 0
- [ ] All navigation and links work
- [ ] Theme toggle and persistence
- [ ] 404 page displays
- [ ] Remove TODO comments
- [ ] Update package.json version
- [ ] Create git repo and initial commit
- [ ] Deploy and test production
- [ ] Set up custom domain and SSL
- [ ] Monitor analytics, check for broken links, review feedback

---

## 8. FAQ & Troubleshooting

**Hydration errors?**
- Try incognito (extensions may inject attributes)
- Check for client-only code or unstable values

**Build fails?**
- Check Node.js version (20+)
- Run `npm install` again
- Check for syntax errors

**404 on routes?**
- Check file/folder naming and dynamic route format

**Slow performance?**
- Optimize images (WebP), review bundle size, check Lighthouse

**Images not loading?**
- Ensure images are in `/public`, use `/image.jpg` paths

**Continuous deployment?**
- Push to GitHub, auto-deploys on Vercel/Netlify

**Backup?**
- Use git, regularly backup `content.ts`

---

## 9. Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Vanilla CSS (CSS Modules)
- **Content**: JSON/TS config
- **Hosting**: Vercel (recommended)

---

## 10. Contributing & Maintenance

- All code should be well-commented, especially for accessibility and design decisions.
- See `content.ts` for content structure and update examples.
- Use this README as your single source of truth.

---

## 11. Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [WCAG Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [WebAIM](https://webaim.org/)
- [A11y Project](https://www.a11yproject.com/)
- [Deque University](https://deque.university/)

---

© 2025 Claire Sersun. All rights reserved.
- Check Next.js documentation: https://nextjs.org/docs
