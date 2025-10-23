// 로그인 페이지

import { login } from '../core/api.js';
import { createElement } from '../utils/dom.js';

export class LoginPage {
  constructor(props = {}) {
    this.props = props;
    this.onLoginSuccess = props.onLoginSuccess || (() => {});
    this.state = props.state;
    this.error = null;
    this.isLoading = false;
  }

  render() {
    const container = createElement('div', { className: 'login-container' });

    // 로그인 폼
    const loginBox = createElement('div', { className: 'login-box' });

    // 로고 및 타이틀
    const header = createElement('div', { className: 'login-header' });
    header.innerHTML = `
      <div class="login-logo">🏢</div>
      <h1 class="login-title">ABC Bond</h1>
      <p class="login-subtitle">투자 관리 시스템</p>
    `;
    loginBox.appendChild(header);

    // 로그인 폼
    const form = this.renderLoginForm();
    loginBox.appendChild(form);

    container.appendChild(loginBox);

    return container;
  }

  renderLoginForm() {
    const form = createElement('form', { className: 'login-form' });
    
    // 에러 메시지 영역
    const errorBox = createElement('div', { 
      className: 'login-error',
      style: 'display: none;'
    });
    form.appendChild(errorBox);

    // 아이디 입력
    const usernameGroup = createElement('div', { className: 'form-group' });
    usernameGroup.innerHTML = `
      <label for="username">아이디</label>
      <input 
        type="text" 
        id="username" 
        name="username" 
        placeholder="아이디를 입력하세요"
        autocomplete="username"
        required
      >
    `;
    form.appendChild(usernameGroup);

    // 비밀번호 입력
    const passwordGroup = createElement('div', { className: 'form-group' });
    passwordGroup.innerHTML = `
      <label for="password">비밀번호</label>
      <input 
        type="password" 
        id="password" 
        name="password" 
        placeholder="비밀번호를 입력하세요"
        autocomplete="current-password"
        required
      >
    `;
    form.appendChild(passwordGroup);

    // 로그인 버튼
    const submitButton = createElement('button', {
      type: 'submit',
      className: 'login-button'
    });
    submitButton.innerHTML = '로그인';
    form.appendChild(submitButton);

    // 테스트 계정 안내
    const testAccountInfo = createElement('div', { className: 'test-account-info' });
    testAccountInfo.innerHTML = `
      <p class="info-title">테스트 계정</p>
      <div class="test-accounts">
        <div class="test-account">
          <strong>user1</strong> / 1234 (투자 3건)
        </div>
        <div class="test-account">
          <strong>user2</strong> / 1234 (투자 2건)
        </div>
        <div class="test-account">
          <strong>admin</strong> / admin (전체 투자)
        </div>
      </div>
    `;
    form.appendChild(testAccountInfo);

    // 폼 제출 이벤트
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      await this.handleLogin(form, errorBox, submitButton);
    });

    return form;
  }

  async handleLogin(form, errorBox, submitButton) {
    if (this.isLoading) return;

    const formData = new FormData(form);
    const username = formData.get('username');
    const password = formData.get('password');

    // 입력값 검증
    if (!username || !password) {
      this.showError(errorBox, '아이디와 비밀번호를 입력해주세요.');
      return;
    }

    // 로딩 상태
    this.isLoading = true;
    submitButton.disabled = true;
    submitButton.innerHTML = '로그인 중...';
    errorBox.style.display = 'none';

    try {
      // 로그인 시도 - API에서 { token, user } 반환
      const response = await login(username, password);

      if (response && response.token && response.user) {
        // 로그인 성공 - token과 user를 함께 전달
        this.onLoginSuccess(response);
      } else {
        // 로그인 실패
        this.showError(errorBox, '아이디 또는 비밀번호가 올바르지 않습니다.');
      }
    } catch (error) {
      console.error('Login error:', error);
      this.showError(errorBox, '로그인 중 오류가 발생했습니다. 다시 시도해주세요.');
    } finally {
      // 로딩 상태 해제
      this.isLoading = false;
      submitButton.disabled = false;
      submitButton.innerHTML = '로그인';
    }
  }

  showError(errorBox, message) {
    errorBox.innerHTML = `⚠️ ${message}`;
    errorBox.style.display = 'block';
    
    // 입력 필드 shake 애니메이션
    const form = errorBox.parentElement;
    form.classList.add('shake');
    setTimeout(() => {
      form.classList.remove('shake');
    }, 500);
  }
}

