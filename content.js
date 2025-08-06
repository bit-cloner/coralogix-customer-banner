(function() {
  'use strict';

  // Check if we're on a Coralogix domain with 'app' in the URL
  const hostname = window.location.hostname;
  
  // Verify this is a Coralogix app domain
  if (!hostname.includes('coralogix') || !hostname.includes('app')) {
    return;
  }

  // Extract the subdomain before '.app.'
  // Pattern: subdomain.app.region.coralogix.com
  const match = hostname.match(/^([^.]+)\.app\./);
  
  if (!match) {
    return;
  }

  const domainPrefix = match[1];
  
  // Create the banner element
  const banner = document.createElement('div');
  banner.id = 'coralogix-domain-banner';
  banner.textContent = `Customer: ${domainPrefix.toUpperCase()}`;
  
  // Apply styling for high visibility
  Object.assign(banner.style, {
    position: 'fixed',
    top: '0',
    left: '0',
    width: '100%',
    height: '50px',
    backgroundColor: '#ff4444',
    color: 'white',
    fontSize: '16px',
    fontWeight: 'bold',
    fontFamily: 'Arial, sans-serif',
    textAlign: 'center',
    lineHeight: '50px',
    zIndex: '999999',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.3)',
    borderBottom: '2px solid #cc0000',
    userSelect: 'none',
    cursor: 'default'
  });

  // Function to inject the banner
  function injectBanner() {
    // Remove any existing banner
    const existingBanner = document.getElementById('coralogix-domain-banner');
    if (existingBanner) {
      existingBanner.remove();
    }

    // Add banner to the page
    document.documentElement.appendChild(banner);
    
    // Adjust page content to avoid overlap
    adjustPageMargin();
  }

  // Function to adjust page margin to account for banner
  function adjustPageMargin() {
    const body = document.body;
    if (body) {
      const currentMarginTop = parseInt(window.getComputedStyle(body).marginTop, 10) || 0;
      body.style.marginTop = Math.max(currentMarginTop, 50) + 'px';
      body.style.paddingTop = '0px'; // Reset any existing padding
    }
  }

  // Wait for DOM to be ready and inject banner
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', injectBanner);
  } else {
    injectBanner();
  }

  // Handle dynamic content changes (for SPAs)
  let lastUrl = location.href;
  new MutationObserver(() => {
    const url = location.href;
    if (url !== lastUrl) {
      lastUrl = url;
      // Re-check if we're still on a valid Coralogix app domain
      const newHostname = window.location.hostname;
      if (newHostname.includes('coralogix') && newHostname.includes('app')) {
        const newMatch = newHostname.match(/^([^.]+)\.app\./);
        if (newMatch) {
          const newPrefix = newMatch[1];
          banner.textContent = `Customer: ${newPrefix.toUpperCase()}`;
          injectBanner();
        }
      }
    }
  }).observe(document, { subtree: true, childList: true });

})();