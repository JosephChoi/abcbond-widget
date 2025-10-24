// API 호출 로직

const API_BASE_URL = 'https://abcbond-api.sixman-joseph.workers.dev';

/**
 * Get auth token from localStorage or state
 */
function getAuthToken() {
  try {
    // localStorage에서 토큰 가져오기
    const stateStr = localStorage.getItem('widget-state');
    if (stateStr) {
      const parsedState = JSON.parse(stateStr);
      return parsedState.token || null;
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

    // 토큰이 있으면 Authorization 헤더 추가
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
 * @returns {Promise<Array>} Investment list
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
 * Get investment detail
 * @param {number} investmentId - Investment ID
 * @returns {Promise<object|null>} Investment detail
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
 * Login with username and password
 * @param {string} username 
 * @param {string} password 
 * @returns {Promise<{token: string, user: object}|null>} Login response
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
 * Get my profile
 * @returns {Promise<object|null>} User profile
 */
export async function getMyProfile() {
  try {
    const response = await fetchAPI('/users/profile');
    return response.success ? response.data : null;
  } catch (error) {
    console.error('Failed to fetch profile:', error);
    throw error;
  }
}

/**
 * Get my investment statistics
 * @returns {Promise<object|null>} Investment statistics
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
