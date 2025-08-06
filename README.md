# Coralogix Customer Banner Chrome Extension

A Chrome extension that displays a prominent banner showing the Coralogix customer domain to help users clearly identify which customer environment they're working with.

[![Chrome Web Store](https://img.shields.io/badge/Chrome%20Web%20Store-Coming%20Soon-blue?style=flat-square&logo=google-chrome)](https://chrome.google.com/webstore)
[![GitHub](https://img.shields.io/github/license/bit-cloner/coralogix-customer-banner?style=flat-square)](LICENSE)
[![GitHub stars](https://img.shields.io/github/stars/bit-cloner/coralogix-customer-banner?style=flat-square)](https://github.com/bit-cloner/coralogix-customer-banner/stargazers)

## Features

- 🚨 **High-visibility banner** - Red banner at the top of Coralogix app pages
- 🎯 **Smart domain detection** - Only activates on `*.app.*.coralogix.com` domains
- 🔍 **Domain extraction** - Extracts and displays the subdomain (e.g., "customer-name" from `customer-name.app.eu2.coralogix.com`)
- 📱 **Responsive design** - Banner stays fixed at the top and adjusts page content
- ⚡ **SPA support** - Works with single-page applications and dynamic navigation

## Example

For the URL: `https://customer-name.app.eu2.coralogix.com/#/query-new/archive-logs`

The extension will display: **Customer: CUSTOMER-NAME** in a red banner at the top of the page.

## Installation

1. **Download or clone** this repository
2. **Open Chrome** and navigate to `chrome://extensions/`
3. **Enable Developer mode** (toggle in the top right)
4. **Click "Load unpacked"** and select the extension folder
5. **Navigate to any Coralogix app URL** to see the banner in action

## How it works

The extension:
1. Checks if the current page is on a Coralogix domain containing "app"
2. Uses regex pattern `/^([^.]+)\.app\./` to extract the subdomain
3. Creates a fixed banner with high z-index for visibility
4. Adjusts page margin to prevent content overlap
5. Monitors for navigation changes in single-page applications

## Domain Pattern

The extension matches URLs with the pattern:
```
[subdomain].app.[region].coralogix.com
```

Examples:
- ✅ `customer-name.app.eu2.coralogix.com` → Shows "Customer: CUSTOMER-NAME"
- ✅ `production.app.us1.coralogix.com` → Shows "Customer: PRODUCTION"
- ✅ `staging.app.eu1.coralogix.com` → Shows "Customer: STAGING"
- ❌ `www.coralogix.com` → No banner (not an app domain)

## Customization

You can modify the banner appearance by editing the styling in `content.js`:

- **Color**: Change `backgroundColor` and `borderBottom` colors
- **Size**: Adjust `height` and `fontSize`
- **Position**: Modify `position` and positioning properties
- **Text**: Customize the banner text format

## Files

- `manifest.json` - Extension configuration and permissions
- `content.js` - Main content script that injects the banner
- `README.md` - This documentation file

## Browser Compatibility

- Chrome (Manifest V3)
- Edge (Chromium-based)
- Other Chromium-based browsers

## License

MIT License - feel free to modify and distribute as needed.