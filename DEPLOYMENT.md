# Deployment Guide - Premium Property

Complete step-by-step guide to upload your project to GitHub and deploy it on Vercel.

---

## 📋 Prerequisites

Before starting, make sure you have:
- ✅ Node.js 18+ installed
- ✅ Git installed (check with `git --version`)
- ✅ A GitHub account (sign up at [github.com](https://github.com))
- ✅ A Vercel account (sign up at [vercel.com](https://vercel.com) - free tier available)

---

## 🚀 Part 1: Preparing Your Project

### Step 1.1: Create Environment File (if needed)

If you don't have a `.env.example` file, create one:

```bash
# Create .env.example file
echo "VITE_API_BASE_URL=http://localhost:3000" > .env.example
```

**Note**: Your `.env` file (if exists) is already in `.gitignore` and won't be uploaded to GitHub.

### Step 1.2: Verify Build Works

Test that your project builds successfully:

```bash
# Install dependencies (if not already done)
npm install

# Test the build
npm run build
```

If the build succeeds, you'll see a `dist` folder created. This is what Vercel will deploy.

### Step 1.3: Check Project is Ready

Verify:
- ✅ All dependencies are in `package.json`
- ✅ Build script exists (`npm run build` works)
- ✅ No sensitive files will be uploaded (check `.gitignore`)

---

## 📦 Part 2: Setting Up GitHub

### Step 2.1: Initialize Git Repository

Open PowerShell in your project folder and run:

```powershell
# Navigate to your project (if not already there)
cd "E:\Desktop 1\Premium Propertey"

# Initialize git repository
git init

# Add all files to git
git add .

# Create initial commit
git commit -m "Initial commit: Premium Property real estate application"
```

### Step 2.2: Create GitHub Repository

1. Go to [github.com](https://github.com) and sign in
2. Click the **"+" icon** in the top right corner
3. Select **"New repository"**
4. Fill in the repository details:
   - **Repository name**: `premium-property` (or your preferred name)
   - **Description**: "Premium Property Real Estate Application - React + TypeScript"
   - **Visibility**: Choose **Public** (or Private if you prefer)
   - ⚠️ **DO NOT** check "Initialize with README" (you already have files)
5. Click **"Create repository"**

### Step 2.3: Connect Local Repository to GitHub

After creating the repository, GitHub will show you commands. Use these:

```powershell
# Add GitHub as remote (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/premium-property.git

# Rename default branch to main (if needed)
git branch -M main

# Push your code to GitHub
git push -u origin main
```

**If you encounter authentication issues:**

**Option A: Use GitHub Personal Access Token**
1. Go to GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic)
2. Generate new token (classic)
3. Give it `repo` permissions
4. Copy the token
5. When prompted for password, paste the token instead

**Option B: Use GitHub CLI**
```powershell
# Install GitHub CLI if you haven't
# Then authenticate
gh auth login

# Push using GitHub CLI
git push -u origin main
```

**Option C: Use SSH (more secure)**
1. Generate SSH key: `ssh-keygen -t ed25519 -C "your_email@example.com"`
2. Add SSH key to GitHub (Settings → SSH and GPG keys)
3. Use SSH URL instead: `git remote add origin git@github.com:YOUR_USERNAME/premium-property.git`

---

## 🌐 Part 3: Deploying to Vercel

### Step 3.1: Sign Up / Sign In to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Click **"Sign Up"** (or **"Log In"** if you have an account)
3. Choose **"Continue with GitHub"** (recommended - easiest integration)
4. Authorize Vercel to access your GitHub account

### Step 3.2: Import Your Project

1. In Vercel dashboard, click **"Add New..."** → **"Project"**
2. You'll see your GitHub repositories listed
3. Find **"premium-property"** (or your repository name)
4. Click **"Import"**

### Step 3.3: Configure Project Settings

Vercel will auto-detect your Vite project. Verify these settings:

**Framework Preset**: `Vite` (should be auto-detected)

**Root Directory**: `./` (leave as default)

**Build Command**: 
```
npm run build
```
(Should be auto-filled)

**Output Directory**: 
```
dist
```
(Should be auto-filled)

**Install Command**: 
```
npm install
```
(Should be auto-filled)

### Step 3.4: Add Environment Variables (if needed)

If your app uses environment variables (like `VITE_API_BASE_URL`):

1. In the Vercel project settings, scroll to **"Environment Variables"**
2. Click **"Add"**
3. Add your variables:
   - **Name**: `VITE_API_BASE_URL`
   - **Value**: Your production API URL (e.g., `https://api.yourdomain.com`)
   - **Environments**: Select all (Production, Preview, Development)
4. Click **"Save"**

### Step 3.5: Deploy!

1. Click **"Deploy"** button
2. Wait for the build to complete (usually 1-3 minutes)
3. Once complete, you'll see: **"Congratulations! Your project has been deployed."**
4. Your site will be live at a URL like: `https://premium-property-xyz.vercel.app`

### Step 3.6: Configure Custom Domain (Optional)

If you want a custom domain:

1. Go to your project in Vercel dashboard
2. Click **"Settings"** → **"Domains"**
3. Enter your domain name
4. Follow the DNS configuration instructions provided by Vercel

---

## 🔄 Part 4: Continuous Deployment

**Good news!** Once connected, every time you push to GitHub, Vercel will automatically deploy:

1. Make changes to your code
2. Commit changes:
   ```powershell
   git add .
   git commit -m "Your commit message"
   git push
   ```
3. Vercel will automatically detect the push and deploy a new version!

---

## 🐛 Troubleshooting

### Build Fails on Vercel

**Issue**: Build errors in Vercel logs

**Solutions**:
- Check that all dependencies are in `package.json` (not just locally installed)
- Verify build command works locally: `npm run build`
- Check Node.js version - Vercel uses Node 18+ by default (you can specify in `package.json`)
- **Dependency Conflicts**: If you see `ERESOLVE` errors:
  - The project uses `.npmrc` with `legacy-peer-deps=true` to handle peer dependency conflicts
  - `@react-three/drei` has been set to version `^9.114.0` (compatible with React 18)
  - If issues persist, run `npm install` locally first to ensure compatibility

### Environment Variables Not Working

**Issue**: `import.meta.env.VITE_API_BASE_URL` is undefined

**Solutions**:
- Make sure environment variable name starts with `VITE_` (required for Vite)
- Rebuild after adding environment variables (click "Redeploy" in Vercel)
- Check that variables are added to the correct environment (Production/Preview/Development)

### Routing Issues (404 on Refresh)

**Issue**: Routes work but 404 when refreshing the page

**Solution**: Add a `vercel.json` file to handle routing:

```json
{
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

### API CORS Issues

**Issue**: API calls fail with CORS errors

**Solutions**:
- Configure CORS on your backend API to allow your Vercel domain
- Add your Vercel URL to allowed origins on the backend

---

## 📝 Quick Reference Commands

```powershell
# Initialize git (first time only)
git init
git add .
git commit -m "Initial commit"

# Connect to GitHub (first time only)
git remote add origin https://github.com/YOUR_USERNAME/premium-property.git
git branch -M main
git push -u origin main

# Regular workflow (after initial setup)
git add .
git commit -m "Your changes"
git push
```

---

## ✅ Checklist

Before deploying, make sure:

- [ ] Project builds successfully (`npm run build`)
- [ ] `.gitignore` excludes sensitive files (`.env`, `node_modules`, etc.)
- [ ] All dependencies are in `package.json`
- [ ] Git repository initialized and first commit made
- [ ] GitHub repository created
- [ ] Code pushed to GitHub successfully
- [ ] Vercel account created
- [ ] Project imported in Vercel
- [ ] Environment variables configured (if needed)
- [ ] First deployment successful

---

## 🎉 You're Done!

Your project should now be:
- ✅ On GitHub at: `https://github.com/YOUR_USERNAME/premium-property`
- ✅ Live on Vercel at: `https://premium-property-xyz.vercel.app`

Every push to GitHub will automatically deploy to Vercel!

---

## 📚 Additional Resources

- [Vercel Documentation](https://vercel.com/docs)
- [GitHub Documentation](https://docs.github.com)
- [Vite Deployment Guide](https://vitejs.dev/guide/static-deploy.html#vercel)

---

## 🆘 Need Help?

If you encounter issues:
1. Check Vercel build logs for errors
2. Verify your local build works: `npm run build`
3. Check environment variables are set correctly
4. Review this guide's troubleshooting section

