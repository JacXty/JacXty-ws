const BASE_URL = import.meta.env.VITE_API_URL;
const API_TOKEN = import.meta.env.VITE_API_TOKEN;

/**
 * Performs a request to the Payload CMS REST API
 * @param {string} endpoint - Example: '/projects' or '/pages/home'
 * @param {object} [options] - Optional fetch configuration
 */
export async function fetchFromPayload(endpoint: string, options: RequestInit = {}) {
  try {
    const response = await fetch(`${BASE_URL}${endpoint}`, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': API_TOKEN,
      },
      ...options,
    });

    if (!response.ok) {
      throw new Error(`Request failed: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    return data?.docs || data;
  } catch (error) {
    console.error('Error fetching from Payload:', error);
    return null;
  }
}
