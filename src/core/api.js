// API 호출 로직

const API_BASE_URL = './mock-api';

/**
 * Fetch wrapper for API calls
 * @param {string} endpoint - API endpoint path
 * @returns {Promise<any>} API response data
 */
export async function fetchAPI(endpoint) {
  try {
    const response = await fetch(`${API_BASE_URL}/${endpoint}`);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('API call failed:', error);
    throw error;
  }
}

/**
 * Get investment list (아파트 투자 상품)
 */
export async function getInvestments() {
  return fetchAPI('investments.json');
}

/**
 * Get investment detail
 */
export async function getInvestmentDetail(investmentId) {
  return fetchAPI('investment-detail.json').then(data => 
    data[investmentId.toString()]
  );
}

/**
 * Get users list
 */
export async function getUsers() {
  return fetchAPI('users.json');
}

/**
 * Login with username and password
 * @param {string} username 
 * @param {string} password 
 * @returns {Promise<object|null>} User object or null if login failed
 */
export async function login(username, password) {
  try {
    const users = await getUsers();
    const user = users.find(u => u.username === username && u.password === password);
    
    if (user) {
      // 비밀번호는 제외하고 반환
      const { password: _, ...userWithoutPassword } = user;
      return userWithoutPassword;
    }
    
    return null;
  } catch (error) {
    console.error('Login failed:', error);
    throw error;
  }
}
