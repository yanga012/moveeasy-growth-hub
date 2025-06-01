
// Website diagnostics utility
export const runDiagnostics = () => {
  const diagnostics = {
    performance: checkPerformance(),
    accessibility: checkAccessibility(),
    seo: checkSEO(),
    responsiveness: checkResponsiveness(),
    console: checkConsoleErrors()
  };

  console.log('🔍 Website Diagnostics Report:', diagnostics);
  return diagnostics;
};

const checkPerformance = () => {
  const issues = [];
  
  // Check for large images
  const images = document.querySelectorAll('img');
  images.forEach((img, index) => {
    if (img.naturalWidth > 2000 || img.naturalHeight > 2000) {
      issues.push(`Large image detected: ${img.src || `Image ${index}`}`);
    }
  });

  // Check for excessive DOM nodes
  const domNodes = document.querySelectorAll('*').length;
  if (domNodes > 1500) {
    issues.push(`High DOM node count: ${domNodes} nodes`);
  }

  return {
    status: issues.length === 0 ? 'good' : 'needs-attention',
    issues,
    domNodes,
    imageCount: images.length
  };
};

const checkAccessibility = () => {
  const issues = [];
  
  // Check for missing alt text
  const imagesWithoutAlt = document.querySelectorAll('img:not([alt])');
  if (imagesWithoutAlt.length > 0) {
    issues.push(`${imagesWithoutAlt.length} images missing alt text`);
  }

  // Check for missing form labels
  const inputsWithoutLabels = document.querySelectorAll('input:not([aria-label]):not([aria-labelledby])');
  inputsWithoutLabels.forEach(input => {
    const hasLabel = input.closest('label') || document.querySelector(`label[for="${input.id}"]`);
    if (!hasLabel) {
      const inputElement = input as HTMLInputElement;
      const inputType = inputElement.type || 'unknown type';
      issues.push(`Input element missing label: ${inputType}`);
    }
  });

  // Check for heading hierarchy
  const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
  let previousLevel = 0;
  headings.forEach(heading => {
    const level = parseInt(heading.tagName.charAt(1));
    if (level > previousLevel + 1) {
      issues.push(`Heading hierarchy skip: ${heading.tagName} after h${previousLevel}`);
    }
    previousLevel = level;
  });

  return {
    status: issues.length === 0 ? 'good' : 'needs-attention',
    issues
  };
};

const checkSEO = () => {
  const issues = [];
  
  // Check for title tag
  const title = document.querySelector('title');
  if (!title || title.textContent.length < 10) {
    issues.push('Missing or too short title tag');
  }

  // Check for meta description
  const metaDescription = document.querySelector('meta[name="description"]');
  if (!metaDescription || metaDescription.getAttribute('content').length < 50) {
    issues.push('Missing or too short meta description');
  }

  // Check for heading structure
  const h1Count = document.querySelectorAll('h1').length;
  if (h1Count === 0) {
    issues.push('Missing H1 tag');
  } else if (h1Count > 1) {
    issues.push('Multiple H1 tags found');
  }

  return {
    status: issues.length === 0 ? 'good' : 'needs-attention',
    issues
  };
};

const checkResponsiveness = () => {
  const issues = [];
  
  // Check viewport meta tag
  const viewport = document.querySelector('meta[name="viewport"]');
  if (!viewport) {
    issues.push('Missing viewport meta tag');
  }

  // Check for fixed widths that might break responsiveness
  const elementsWithFixedWidth = document.querySelectorAll('[style*="width:"][style*="px"]');
  if (elementsWithFixedWidth.length > 0) {
    issues.push(`${elementsWithFixedWidth.length} elements with fixed pixel widths`);
  }

  return {
    status: issues.length === 0 ? 'good' : 'needs-attention',
    issues
  };
};

const checkConsoleErrors = () => {
  // This would need to be implemented with error tracking
  // For now, we'll just return a placeholder
  return {
    status: 'good',
    issues: []
  };
};
