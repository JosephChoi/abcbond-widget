// API 호출 로직 - ABC Bond API 연동

const API_BASE_URL = 'https://abcbond-api.sixman-joseph.workers.dev';

/**
 * Get stored JWT token
 * @returns {string|null} JWT token or null
 */
function getAuthToken() {
  try {
    const state = localStorage.getItem('widget-state');
    if (state) {
      const parsed = JSON.parse(state);
      return parsed.token || null;
    }
  } catch (error) {
    console.warn('Failed to get auth token:', error);
  }
  return null;
}

/**
 * Fetch wrapper for API calls
 * @param {string} endpoint - API endpoint path
 * @param {object} options - Fetch options
 * @returns {Promise<any>} API response data
 */
export async function fetchAPI(endpoint, options = {}) {
  try {
    const token = getAuthToken();
    const headers = {
      'Content-Type': 'application/json',
      ...options.headers,
    };

    // Add Authorization header if token exists
    if (token) {
      headers['Authorization'] = `Bearer ${token}`;
    }

    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      ...options,
      headers,
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.message || `HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('API call failed:', error);
    throw error;
  }
}

/**
 * Get my investment list (내 투자 내역)
 * @returns {Promise<array>} Investment list
 */
export async function getMyInvestments() {
  try {
    const response = await fetchAPI('/user-investments/my');
    return response.success ? response.data : [];
  } catch (error) {
    console.error('Failed to fetch my investments:', error);
    throw error;
  }
}

/**
 * Get all investments (전체 투자 상품 목록)
 * @param {object} filters - Filter options (status, type)
 * @returns {Promise<array>} Investment list
 */
export async function getInvestments(filters = {}) {
  try {
    const params = new URLSearchParams();
    if (filters.status) params.append('status', filters.status);
    if (filters.type) params.append('type', filters.type);
    
    const queryString = params.toString();
    const endpoint = queryString ? `/investments?${queryString}` : '/investments';
    
    const response = await fetchAPI(endpoint);
    return response.success ? response.data : [];
  } catch (error) {
    console.error('Failed to fetch investments:', error);
    throw error;
  }
}

/**
 * Get investment detail
 * @param {number} investmentId - Investment ID
 * @returns {Promise<object>} Investment detail
 */
export async function getInvestmentDetail(investmentId) {
  try {
    const response = await fetchAPI(`/investments/${investmentId}`);
    return response.success ? response.data : null;
  } catch (error) {
    console.error('Failed to fetch investment detail:', error);
    throw error;
  }
}

/**
 * Get my investment stats (내 투자 통계)
 * @returns {Promise<object>} Investment statistics
 */
export async function getMyInvestmentStats() {
  try {
    const response = await fetchAPI('/user-investments/my/stats');
    return response.success ? response.data : null;
  } catch (error) {
    console.error('Failed to fetch investment stats:', error);
    throw error;
  }
}

/**
 * Login with username and password
 * @param {string} username 
 * @param {string} password 
 * @returns {Promise<object>} { token, user }
 */
export async function login(username, password) {
  try {
    const response = await fetchAPI('/auth/login', {
      method: 'POST',
      body: JSON.stringify({ username, password }),
    });

    if (response.success) {
      return {
        token: response.token,
        user: response.user,
      };
    }
    
    return null;
  } catch (error) {
    console.error('Login failed:', error);
    throw error;
  }
}

/**
 * Get user profile (내 프로필)
 * @returns {Promise<object>} User profile
 */
export async function getUserProfile() {
  try {
    const response = await fetchAPI('/users/profile');
    return response.success ? response.data : null;
  } catch (error) {
    console.error('Failed to fetch user profile:', error);
    throw error;
  }
}
