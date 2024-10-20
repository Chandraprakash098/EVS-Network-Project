const getApiUrl = () => {
    if (process.env.NODE_ENV === 'production') {
      // In production, the API will be on the same domain
      return '';
    }
    // In development, use localhost:5000
    return 'http://localhost:5000';
  };
  
  export const API_URL = getApiUrl();