# Deployment Guide - Quiz App

## Quick Deploy to Vercel (Recommended - Fast & Free)

### Option 1: Deploy via Vercel Website (Easiest)

1. **Push your code to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin YOUR_GITHUB_REPO_URL
   git push -u origin main
   ```

2. **Deploy on Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Sign up/Login with GitHub
   - Click "Add New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Vite settings
   - Click "Deploy"
   - Your app will be live in ~2 minutes!

3. **Share the link:**
   - Vercel provides a URL like: `your-app-name.vercel.app`
   - You can share this link with specific people
   - For password protection, upgrade to Vercel Pro (optional)

### Option 2: Deploy via Vercel CLI

1. **Install Vercel CLI:**
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel:**
   ```bash
   vercel login
   ```

3. **Deploy:**
   ```bash
   vercel
   ```
   - Follow the prompts
   - Your app will be deployed instantly!

4. **For production deployment:**
   ```bash
   vercel --prod
   ```

### Option 3: Deploy to Netlify (Alternative)

1. **Install Netlify CLI:**
   ```bash
   npm install -g netlify-cli
   ```

2. **Build and deploy:**
   ```bash
   npm run build
   netlify deploy --prod --dir=dist
   ```

## Performance Optimizations

The app is already optimized with:
- ✅ Vite for fast builds
- ✅ Code splitting
- ✅ Optimized React components
- ✅ CDN delivery (via Vercel/Netlify)

## Privacy & Access Control

### Free Options:
- Share the link only with people you trust
- The link is public but not discoverable (unless someone has the exact URL)

### Paid Options (Vercel Pro):
- Password protection
- Team access controls
- Custom domains

## Testing Before Deployment

1. **Test build locally:**
   ```bash
   npm run build
   npm run preview
   ```

2. **Check the build output:**
   - Should create a `dist` folder
   - All files should be optimized

## Troubleshooting

### Build fails:
- Check that all dependencies are in `package.json`
- Run `npm install` before building
- Check for any import errors

### Routing issues:
- The `vercel.json` includes rewrites for React Router
- All routes should work correctly

### Performance:
- Vercel uses edge networks for fast global delivery
- First load might be slower, subsequent loads are cached

## Custom Domain (Optional)

1. In Vercel dashboard, go to your project
2. Settings → Domains
3. Add your custom domain
4. Follow DNS configuration instructions

