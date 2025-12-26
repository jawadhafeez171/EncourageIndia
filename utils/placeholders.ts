/**
 * Placeholder image utilities
 * Replace these with actual images in production
 */

// Generate a simple placeholder image data URI
const generatePlaceholder = (width: number, height: number, text: string = ''): string => {
  // Using a simple SVG data URI as placeholder
  const svg = `
    <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#f3f4f6"/>
      <text x="50%" y="50%" font-family="Arial, sans-serif" font-size="16" fill="#9ca3af" text-anchor="middle" dy=".3em">
        ${text || `${width}x${height}`}
      </text>
    </svg>
  `.trim();
  return `data:image/svg+xml;base64,${btoa(svg)}`;
};

// Placeholder images - Replace with actual images
export const placeholderImages = {
  // Hero carousel images
  hero: {
    kpcl: generatePlaceholder(1920, 1080, 'KPCL Course'),
    kea: generatePlaceholder(1920, 1080, 'KEA Courses'),
    agriculture: generatePlaceholder(1920, 1080, 'Agriculture Officer'),
    kmf: generatePlaceholder(1920, 1080, 'KMF SHIMUL'),
    police: generatePlaceholder(1920, 1080, 'PSI & PC'),
    upsc: generatePlaceholder(1920, 1080, 'UPSC CSE'),
  },
  // Testimonial images
  testimonials: {
    priya: generatePlaceholder(100, 100, 'Student'),
    arjun: generatePlaceholder(100, 100, 'Student'),
    sneha: generatePlaceholder(100, 100, 'Student'),
  },
  // Achiever images
  achievers: {
    amit: generatePlaceholder(400, 400, 'Achiever'),
    sunita: generatePlaceholder(400, 400, 'Achiever'),
    ravi: generatePlaceholder(400, 400, 'Achiever'),
    deepa: generatePlaceholder(400, 400, 'Achiever'),
    kiran: generatePlaceholder(400, 400, 'Achiever'),
    megha: generatePlaceholder(400, 400, 'Achiever'),
  },
  // Mentor images
  mentors: {
    mentor1: generatePlaceholder(200, 200, 'Mentor'),
    mentor2: generatePlaceholder(200, 200, 'Mentor'),
  },
  // Other images
  mission: generatePlaceholder(600, 400, 'Our Mission'),
  magazine: generatePlaceholder(400, 500, 'Magazine'),
  map: generatePlaceholder(800, 400, 'Location Map'),
};

// Helper function to get placeholder image
export const getPlaceholder = (category: keyof typeof placeholderImages, key?: string): string => {
  if (key && typeof placeholderImages[category] === 'object' && key in (placeholderImages[category] as object)) {
    return (placeholderImages[category] as Record<string, string>)[key];
  }
  if (typeof placeholderImages[category] === 'string') {
    return placeholderImages[category] as string;
  }
  return generatePlaceholder(400, 300, 'Image');
};

