# SSH Deploy Key Setup for SmarterASP.NET

## 🔑 Generated SSH Deploy Key

Your SSH deploy key has been generated successfully!

### Key Location:
- **Private Key:** `C:\Users\harsh\.ssh\tiara_deploy_key`
- **Public Key:** `C:\Users\harsh\.ssh\tiara_deploy_key.pub`

### Your Public Key (Copy This):
```
ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIDJ5H7aB6bxTmjSpIho2470dlSx2WVbdiHz8MZPeLFBy tiara-sports-club-deploy
```

---

## 📋 Step-by-Step Setup Guide

### Step 1: Add Deploy Key to GitHub Repository

1. Go to your GitHub repository: https://github.com/Harshil0265/tiara-sports-club
2. Click on **Settings** (top right)
3. In the left sidebar, click **Deploy keys**
4. Click **Add deploy key** button
5. Fill in the details:
   - **Title:** `SmarterASP.NET Deploy Key`
   - **Key:** Paste the public key shown above
   - **Allow write access:** ❌ Leave unchecked (read-only is safer)
6. Click **Add key**

### Step 2: Configure SmarterASP.NET

#### Option A: Using SmarterASP.NET Control Panel

1. Log in to your SmarterASP.NET control panel
2. Go to **Git Deployment** or **Deployment** section
3. Select **Deploy from Git Repository**
4. Enter repository details:
   - **Repository URL:** `git@github.com:Harshil0265/tiara-sports-club.git`
   - **Branch:** `main`
5. Add SSH Key:
   - Paste the **PRIVATE KEY** content (see below)
6. Configure deployment path (usually `/wwwroot` or `/site/wwwroot`)
7. Click **Deploy** or **Save**

#### Option B: Using SSH to Server (If you have SSH access)

If SmarterASP.NET provides SSH access to the server:

```bash
# 1. SSH into your server
ssh your-username@your-server.smarterasp.net

# 2. Create .ssh directory
mkdir -p ~/.ssh
chmod 700 ~/.ssh

# 3. Add the private key
nano ~/.ssh/tiara_deploy_key
# Paste the private key content (from Step 3 below)
chmod 600 ~/.ssh/tiara_deploy_key

# 4. Configure SSH
nano ~/.ssh/config
# Add this content:
Host github.com
    HostName github.com
    User git
    IdentityFile ~/.ssh/tiara_deploy_key
    StrictHostKeyChecking no

# 5. Test the connection
ssh -T git@github.com

# 6. Clone the repository
cd /path/to/your/wwwroot
git clone git@github.com:Harshil0265/tiara-sports-club.git .

# 7. Install dependencies and build
bun install
bun run build
```

### Step 3: Get Your Private Key (For SmarterASP.NET Upload)

To view your private key (needed for SmarterASP.NET):

**Windows PowerShell:**
```powershell
Get-Content C:\Users\harsh\.ssh\tiara_deploy_key
```

**Or open in Notepad:**
```powershell
notepad C:\Users\harsh\.ssh\tiara_deploy_key
```

⚠️ **IMPORTANT:** Keep the private key secure! Never share it publicly or commit it to Git.

---

## 🚀 Deployment Workflow

### Initial Deployment:
1. SmarterASP.NET pulls code from GitHub using the SSH key
2. Install dependencies: `bun install` or `npm install`
3. Build the project: `bun run build` or `npm run build`
4. The `dist` folder contains your production files
5. Point your domain to the `dist` folder

### Continuous Deployment:
Whenever you push to GitHub:
```bash
git add .
git commit -m "Your changes"
git push origin main
```

Then on SmarterASP.NET:
- Manually trigger deployment, OR
- Set up automatic deployment webhook (if supported)

---

## 🔧 Environment Variables on SmarterASP.NET

Don't forget to set these environment variables in your hosting:

```env
NODE_ENV=production
SMTP_HOST=smtp.zoho.com
SMTP_PORT=465
SMTP_USER=web@uniqtechsolutions.com
SMTP_PASS=Web@281989#
ADMIN_EMAIL=mikir@uniqtechsolutions.com
```

⚠️ **Security Note:** The SMTP credentials are currently hardcoded in `server.ts`. Consider moving them to environment variables for better security!

---

## 📝 Alternative: Using HTTPS Instead of SSH

If SSH doesn't work, you can use HTTPS with a Personal Access Token:

1. Go to GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic)
2. Generate new token with `repo` permissions
3. Use this URL format in SmarterASP.NET:
   ```
   https://YOUR_TOKEN@github.com/Harshil0265/tiara-sports-club.git
   ```

---

## ✅ Testing Your Deployment

After deployment, test:
1. Visit your domain: http://your-domain.com
2. Test the booking form submission
3. Verify email delivery works
4. Check all images load correctly
5. Test all navigation links

---

## 🆘 Troubleshooting

### Issue: "Permission denied (publickey)"
- Ensure the public key is added to GitHub Deploy Keys
- Verify the private key is correctly uploaded to SmarterASP.NET
- Check that the key files have correct permissions

### Issue: "Host key verification failed"
- Add `StrictHostKeyChecking no` to SSH config
- Or manually accept GitHub's host key

### Issue: Build fails
- Ensure Node.js is installed on the server
- Check that Bun or npm is available
- Verify all dependencies are installed

### Issue: Email not sending
- Verify SMTP credentials in environment variables
- Check firewall rules allow outbound SMTP
- Test SMTP ports (465 for SSL, 587 for TLS)

---

## 📞 Support

- **GitHub Repo:** https://github.com/Harshil0265/tiara-sports-club
- **SmarterASP.NET Support:** https://www.smarterasp.net/support

---

Generated on: 2026-10-09
