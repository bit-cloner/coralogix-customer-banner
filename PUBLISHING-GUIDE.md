# Chrome Web Store Publishing Guide

## Step-by-Step Instructions to Publish Your Extension

### Prerequisites
1. **Google Account** - You'll need a Google account
2. **Developer Fee** - $5 one-time registration fee for Chrome Web Store Developer account
3. **Extension Files** - All files in this directory

### Step 1: Prepare Your Extension

#### A. Update manifest.json
- [ ] Replace `"author": "Your Name"` with your actual name
- [ ] Replace `"homepage_url"` with your actual website or GitHub repo URL
- [ ] Verify version number is correct (currently 1.0.0)

#### B. Create Extension Icons
You need to create 3 icon files in the `icons/` directory:
- `icon16.png` (16x16 pixels) - For extension menu
- `icon48.png` (48x48 pixels) - For extension management page  
- `icon128.png` (128x128 pixels) - For Chrome Web Store

**Icon Design Tips:**
- Use a simple, recognizable design
- Consider using Coralogix colors or a banner/warning symbol
- Ensure icons are clear at small sizes
- Use PNG format with transparency

#### C. Create Store Assets
You'll need these images for the Chrome Web Store listing:

**Screenshots (1280x800 or 640x400 pixels):**
1. Extension banner shown on a Coralogix page (using generic example)
2. Before/after comparison showing the customer identification
3. Extension working on different environments

**Promotional Images:**
- Small tile: 440x280 pixels
- Large tile: 920x680 pixels
- Marquee tile: 1400x560 pixels (optional but recommended)

### Step 2: Create Chrome Web Store Developer Account

1. Go to [Chrome Web Store Developer Dashboard](https://chrome.google.com/webstore/devconsole/)
2. Sign in with your Google account
3. Pay the $5 registration fee
4. Accept the developer agreement

### Step 3: Package Your Extension

1. **Create a ZIP file** containing:
   ```
   chrome-extension-team-name/
   ├── manifest.json
   ├── content.js
   ├── icons/
   │   ├── icon16.png
   │   ├── icon48.png
   │   └── icon128.png
   └── privacy-policy.md (optional, for reference)
   ```

2. **Important**: Do NOT include:
   - README.md
   - PUBLISHING-GUIDE.md
   - store-listing.md
   - Any development or documentation files

### Step 4: Upload to Chrome Web Store

1. Go to [Chrome Web Store Developer Dashboard](https://chrome.google.com/webstore/devconsole/)
2. Click **"New Item"**
3. Upload your ZIP file
4. Fill out the store listing:

#### Store Listing Details:
- **Name**: Coralogix Customer Banner
- **Summary**: Shows a prominent banner with the Coralogix customer name to help users identify which environment they're working with.
- **Category**: Developer Tools
- **Language**: English (or your preferred language)

#### Description:
Use the detailed description from `store-listing.md`

#### Graphics:
- Upload your screenshots
- Upload promotional images
- Upload extension icons (if not automatically detected)

#### Privacy:
- **Permissions**: Explain that "activeTab" is used only to read the URL and inject the banner
- **Data Usage**: Select "Does not collect user data"
- **Privacy Policy**: Upload the privacy-policy.md content to your website and link to it

#### Pricing & Distribution:
- **Price**: Free
- **Regions**: Select all regions or specific ones where Coralogix is used
- **Visibility**: Public

### Step 5: Submit for Review

1. **Review everything** carefully
2. **Save as draft** first to double-check
3. **Submit for review** when ready

#### Review Process:
- **Timeline**: Usually 1-3 business days for new extensions
- **Possible outcomes**: 
  - ✅ Approved and published
  - ⚠️ Needs changes (you'll get specific feedback)
  - ❌ Rejected (can appeal or fix issues and resubmit)

### Step 6: Post-Publication

Once approved:
1. **Test** the published extension by installing from the store
2. **Monitor** for user feedback and reviews
3. **Update** as needed (new versions go through review too)

### Common Rejection Reasons to Avoid:

- **Missing or low-quality icons**
- **Insufficient or misleading description**
- **Privacy policy issues**
- **Requesting unnecessary permissions**
- **Not working as described**

### Tips for Success:

1. **Test thoroughly** before submitting
2. **Write clear descriptions** of what the extension does
3. **Use high-quality screenshots** showing the extension in action
4. **Be specific** about the target audience (Coralogix users)
5. **Follow all Chrome Web Store policies**

### After Publication:

Your extension will be available at:
`https://chrome.google.com/webstore/detail/[extension-id]`

Users can then install it directly from the Chrome Web Store!

### Support:

If you encounter issues:
- [Chrome Web Store Help Center](https://support.google.com/chrome_webstore/)
- [Chrome Extension Developer Documentation](https://developer.chrome.com/docs/extensions/)

Good luck with your extension publication! 🚀