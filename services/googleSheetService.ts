
export const submitToGoogleSheet = async (data: Record<string, string>) => {
  // Get Google Script URL from environment variable
  // Fallback to default if not set (for development)
  const GOOGLE_SCRIPT_URL: string = import.meta.env.VITE_GOOGLE_SCRIPT_URL || 
    'https://script.google.com/macros/s/AKfycbyLMwE5ligHUeusL8mVIF9rWFjnPvRbLiN9AC9D-geMS2dyN-3GSjhDGPj4H1ZNuiAl4Q/exec';
  
  if (!GOOGLE_SCRIPT_URL || GOOGLE_SCRIPT_URL === 'INSERT_YOUR_GOOGLE_SCRIPT_URL_HERE') {
      console.warn("Google Script URL is not configured. Data:", data);
      // Simulate network delay
      return new Promise((resolve) => setTimeout(resolve, 1500));
  }

  const formData = new FormData();
  for (const key in data) {
    formData.append(key, data[key]);
  }
  
  // Append timestamp
  formData.append('SubmissionDate', new Date().toLocaleString());

  // Using no-cors mode because Google Apps Script redirects often cause CORS issues in browsers
  // This means we won't get a readable response, but the request will go through.
  return fetch(GOOGLE_SCRIPT_URL, {
    method: 'POST',
    body: formData,
    mode: 'no-cors'
  });
};
