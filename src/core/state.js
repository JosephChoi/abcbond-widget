// 전역 상태 관리

export class State {
  constructor() {
    this.state = {
      user: null,         // 사용자 정보
      token: null,        // JWT 토큰
      currentView: null   // 현재 뷰
    };
    this.listeners = new Map(); // key: eventName, value: [callbacks]
  }

  /**
   * 상태 가져오기
   */
  getState(key) {
    if (key) {
      return this.state[key];
    }
    return { ...this.state };
  }

  /**
   * 상태 업데이트
   */
  setState(updates) {
    const oldState = { ...this.state };
    this.state = { ...this.state, ...updates };

    // 변경된 키에 대한 리스너들 호출
    Object.keys(updates).forEach(key => {
      this.notify(key, this.state[key], oldState[key]);
    });

    // 전체 상태 변경 리스너 호출
    this.notify('*', this.state, oldState);
  }

  /**
   * 이벤트 구독
   */
  subscribe(event, callback) {
    if (!this.listeners.has(event)) {
      this.listeners.set(event, []);
    }
    this.listeners.get(event).push(callback);

    // 구독 해제 함수 반환
    return () => {
      const callbacks = this.listeners.get(event);
      const index = callbacks.indexOf(callback);
      if (index > -1) {
        callbacks.splice(index, 1);
      }
    };
  }

  /**
   * 리스너들에게 알림
   */
  notify(event, newValue, oldValue) {
    const callbacks = this.listeners.get(event) || [];
    callbacks.forEach(callback => {
      callback(newValue, oldValue);
    });
  }


  /**
   * 사용자 설정
   */
  setUser(user) {
    this.setState({ user });
  }

  /**
   * 사용자 가져오기
   */
  getUser() {
    return this.state.user;
  }

  /**
   * 로그인 여부 확인
   */
  isAuthenticated() {
    return this.state.user !== null;
  }

  /**
   * 로그아웃
   */
  logout() {
    this.setState({ user: null, token: null });
    // LocalStorage에서도 제거
    try {
      localStorage.removeItem('widget-state');
    } catch (error) {
      console.warn('Failed to remove state from localStorage:', error);
    }
    this.notify('auth:logout');
  }

  /**
   * 현재 뷰 설정
   */
  setCurrentView(view) {
    this.setState({ currentView: view });
  }

  /**
   * 상태 초기화
   */
  reset() {
    this.state = {
      user: null,
      token: null,
      currentView: null
    };
    this.notify('*', this.state, {});
  }

  /**
   * LocalStorage에 저장 (선택적)
   */
  saveToStorage() {
    try {
      localStorage.setItem('widget-state', JSON.stringify({
        user: this.state.user,
        token: this.state.token
      }));
    } catch (error) {
      console.warn('Failed to save state to localStorage:', error);
    }
  }

  /**
   * LocalStorage에서 복원 (선택적)
   */
  loadFromStorage() {
    try {
      const saved = localStorage.getItem('widget-state');
      if (saved) {
        const data = JSON.parse(saved);
        this.setState({
          user: data.user || null,
          token: data.token || null
        });
      }
    } catch (error) {
      console.warn('Failed to load state from localStorage:', error);
    }
  }
}

// 싱글톤 인스턴스
let stateInstance = null;

export function getState() {
  if (!stateInstance) {
    stateInstance = new State();
  }
  return stateInstance;
}
