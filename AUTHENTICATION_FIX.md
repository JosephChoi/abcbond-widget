# 🔧 인증 에러 해결 가이드 (401 Error Fix)

## 📋 문제 상황

배포된 위젯(`https://abcbond-widget.pages.dev/`)에서 다음과 같은 에러 발생:

```
❌ Failed to load resource: 401 ()
❌ API call failed: Error: Missing or invalid authorization header
❌ Failed to fetch my investments: Error: Missing or invalid authorization header
❌ Failed to load investments: Error: Missing or invalid authorization header
```

## 🔍 원인 분석

### 1. **초기 로딩 시퀀스 문제**

```javascript
// widget.js - init() 메서드
init() {
  // 1. 상태 복원
  this.state.loadFromStorage();
  
  // 2. 라우터 훅 설정
  this.router.setBeforeNavigate(async (path, params) => {
    await this.preloadPage(path, params);  // ❌ 여기서 API 호출
  });
  
  // 3. 인증 체크
  if (!this.state.isAuthenticated()) {
    this.showLogin();  // ✅ 로그인 페이지 표시
    return;
  }
  
  // 4. 라우터 초기화
  this.router.init();  // ❌ 이미 훅이 설정되어 있어 API 호출 발생
}
```

**문제점:**
- `router.init()`이 호출되면 현재 URL(`/`)에 맞는 뷰를 렌더링
- `beforeNavigate` 훅이 실행되어 `preloadPage()` 호출
- `preloadPage()`에서 `getMyInvestments()` API 호출
- **하지만 아직 로그인하지 않아 토큰이 없음** → 401 에러

### 2. **토큰 저장 누락**

```javascript
// 이전 코드 - LoginPage
onLoginSuccess: (user) => {
  this.state.setUser(user);  // ❌ user만 저장, token은 저장 안 함
}
```

로그인 API는 `{token, user}` 형태로 응답하지만, **토큰을 State에 저장하지 않음**.

### 3. **API 인증 헤더**

```javascript
// api.js
function getAuthToken() {
  const state = localStorage.getItem('widget-state');
  return JSON.parse(state).token;  // ❌ token이 저장되어 있지 않음
}
```

## 🛠️ 해결 방법

### ✅ 1. 라우터 초기화 시점 조정

**Before:**
```javascript
init() {
  // ... 설정 ...
  if (!this.state.isAuthenticated()) {
    this.showLogin();
    return;
  }
  this.router.init();  // ❌ 인증 체크 후 바로 초기화
}
```

**After:**
```javascript
init() {
  // ... 설정 ...
  
  // 페이지 프리로딩 훅 설정 (항상 설정, 내부에서 인증 체크)
  this.router.setBeforeNavigate(async (path, params) => {
    if (!this.state.isAuthenticated()) {
      this.showLogin();
      return;  // ✅ API 호출하지 않고 리턴
    }
    await this.preloadPage(path, params);
  });

  // 인증 체크
  if (!this.state.isAuthenticated()) {
    this.showLogin();  // ✅ 로그인 페이지만 표시
    return;            // ✅ router.init() 호출하지 않음
  }

  // ✅ 인증된 경우에만 라우터 초기화
  this.router.init();
}
```

### ✅ 2. 로그인 성공 시 라우터 초기화

**Before:**
```javascript
onLoginSuccess: (user) => {
  this.state.setUser(user);
  this.router.navigate('/');  // ❌ 라우터가 초기화되지 않은 상태
}
```

**After:**
```javascript
onLoginSuccess: (loginResponse) => {
  // ✅ 토큰과 사용자 정보 모두 저장
  this.state.setState({
    user: loginResponse.user,
    token: loginResponse.token
  });
  
  this.state.saveToStorage();  // ✅ localStorage에 저장
  
  // ✅ 로그인 후에 라우터 초기화
  if (!this.router.currentRoute) {
    this.router.init();  // 첫 로그인: 라우터 초기화
  } else {
    this.router.navigate('/');  // 재로그인: 투자 목록으로 이동
  }
}
```

### ✅ 3. State에 토큰 필드 추가

**state.js:**
```javascript
constructor() {
  this.state = {
    user: null,
    token: null,      // ✅ 토큰 필드 추가
    currentView: null
  };
}

saveToStorage() {
  localStorage.setItem('widget-state', JSON.stringify({
    user: this.state.user,
    token: this.state.token  // ✅ 토큰도 함께 저장
  }));
}

loadFromStorage() {
  const data = JSON.parse(saved);
  this.setState({
    user: data.user || null,
    token: data.token || null  // ✅ 토큰도 함께 복원
  });
}

logout() {
  this.setState({ 
    user: null, 
    token: null  // ✅ 로그아웃 시 토큰도 삭제
  });
}
```

### ✅ 4. API 토큰 인증

**api.js:**
```javascript
function getAuthToken() {
  const stateStr = localStorage.getItem('widget-state');
  if (stateStr) {
    const parsedState = JSON.parse(stateStr);
    return parsedState.token || null;  // ✅ localStorage에서 토큰 가져오기
  }
  return null;
}

export async function fetchAPI(endpoint, options = {}) {
  const token = getAuthToken();
  const headers = {
    'Content-Type': 'application/json',
    ...options.headers,
  };

  if (token) {
    headers['Authorization'] = `Bearer ${token}`;  // ✅ 토큰 추가
  }

  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    ...options,
    headers,
  });
  
  // ...
}
```

## 📊 수정 후 플로우

### 🔄 초기 로딩 (로그인 전)

```
1. Widget.init()
2. state.loadFromStorage()
   → user: null, token: null
3. isAuthenticated() → false
4. showLogin()
   → 로그인 페이지 표시
5. router.init() 호출 안 함
   → ✅ API 호출 없음, 401 에러 없음
```

### 🔐 로그인 프로세스

```
1. 사용자가 아이디/비밀번호 입력
2. login API 호출
   → POST /auth/login
3. 응답: { token: "...", user: {...} }
4. onLoginSuccess 실행
5. state.setState({ user, token })
6. state.saveToStorage()
   → localStorage에 토큰 저장
7. router.init()
   → 이제 라우터 시작
8. beforeNavigate 훅 실행
   → isAuthenticated() → true
   → preloadPage() 실행
9. getMyInvestments() 호출
   → Authorization: Bearer <token>
   → ✅ 200 OK
```

### 🔄 페이지 새로고침 (로그인 유지)

```
1. Widget.init()
2. state.loadFromStorage()
   → user: {...}, token: "..."
3. isAuthenticated() → true
4. router.init()
5. beforeNavigate 훅 실행
   → isAuthenticated() → true
6. preloadPage() 실행
7. getMyInvestments() 호출
   → Authorization: Bearer <token> (localStorage에서 가져옴)
   → ✅ 200 OK
```

## 🧪 테스트 방법

### 1. **개발 환경 테스트**

```bash
# 브라우저에서 열기
open index.html
```

#### 테스트 체크리스트:
- [ ] 초기 로딩 시 로그인 페이지 표시 (401 에러 없음)
- [ ] 로그인 성공 후 투자 목록 표시
- [ ] 투자 상품 클릭 시 상세 페이지 표시
- [ ] 페이지 새로고침 시 로그인 유지
- [ ] 로그아웃 후 다시 로그인 페이지 표시

### 2. **배포 환경 테스트**

```bash
# 1. 빌드
npm run build

# 2. 배포 (Cloudflare Pages에 자동 배포)
git push

# 3. 배포된 사이트에서 테스트
# https://abcbond-widget.pages.dev/
```

### 3. **개발자 도구 확인**

#### Console 확인:
```javascript
// 로그인 전
Widget initialized with config: {persistState: true}
// ✅ 401 에러 없음

// 로그인 후
Widget initialized with config: {persistState: true}
// ✅ 투자 목록 로드 성공
```

#### Network 탭 확인:
```
POST /auth/login
→ 200 OK
→ Response: {success: true, token: "...", user: {...}}

GET /user-investments/my
→ 200 OK
→ Request Headers: Authorization: Bearer ...
→ Response: {success: true, data: [...]}
```

#### Application → Local Storage 확인:
```json
{
  "user": {
    "id": 1,
    "username": "user1",
    "name": "김투자",
    "email": "user1@example.com"
  },
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

## 📦 관련 파일

### 수정된 파일:
- ✅ `src/core/widget.js` - 라우터 초기화 시점 조정
- ✅ `src/core/state.js` - 토큰 필드 추가
- ✅ `src/core/api.js` - 토큰 인증 헤더
- ✅ `dist/*.js` - 빌드 파일 업데이트

### 테스트 파일:
- 📄 `api-test.html` - API 엔드포인트 테스트
- 📄 `index.html` - 개발용 (소스 파일)
- 📄 `demo.html` - 프로덕션용 (빌드 파일)

## 🚀 배포 확인

배포 후 다음 URL에서 확인:
- 🌐 **프로덕션**: https://abcbond-widget.pages.dev/
- 📚 **GitHub**: https://github.com/JosephChoi/abcbond-widget

### 테스트 계정:
```
아이디: user1
비밀번호: 1234
```

## ✅ 해결 완료!

이제 다음 사항들이 정상 작동합니다:

1. ✅ **초기 로딩**: 로그인 페이지 표시, 401 에러 없음
2. ✅ **로그인**: 토큰 저장 및 투자 목록 표시
3. ✅ **인증 유지**: 페이지 새로고침 후에도 로그인 유지
4. ✅ **API 호출**: 모든 API 호출에 토큰 자동 추가
5. ✅ **로그아웃**: 토큰 삭제 및 로그인 페이지로 이동

---

**작성일**: 2025-01-24  
**커밋**: 87f3e32 - "fix: Resolve 401 authentication errors on initial load"

