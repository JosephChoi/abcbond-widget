# ABC Bond - 부동산 투자 플랫폼 위젯

부동산 담보 투자 상품을 관리하고 조회할 수 있는 임베디드 위젯 플랫폼입니다.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Built with Vanilla JS](https://img.shields.io/badge/Built%20with-Vanilla%20JS-yellow)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

## 🌟 주요 기능

### 💼 투자 상품 관리
- **사용자별 투자 목록**: 로그인한 사용자가 투자한 아파트 상품만 표시
- **상세 정보 조회**: 이미지 갤러리, 투자 금액, 예상 수익률, LTV 비율 등
- **월별 이자 지급 내역**: 투자 수익 현황을 월별로 확인

### 📋 등기부등본 뷰어
- **표제부**: 물건의 기본 정보 (소재지, 구조, 면적 등)
- **갑구**: 소유권 정보 및 권리사항
- **을구**: 제한사항 (근저당권 등) 명확한 시각화

### 🔐 사용자 인증
- **로그인/로그아웃**: 간편한 사용자 인증
- **세션 관리**: LocalStorage를 활용한 자동 로그인 유지
- **보안**: 투자자별 데이터 분리

### 📱 반응형 디자인
- 모바일, 태블릿, 데스크탑 완벽 지원
- 터치 친화적 UI/UX

## 🚀 빠른 시작

### 1. 저장소 Clone

```bash
git clone https://github.com/JosephChoi/abcbond-widget.git
cd abcbond-widget
npm install
```

### 2. 개발 서버 실행

```bash
# Live Server 또는 다른 정적 서버로 index.html 실행
# VS Code Live Server 추천
```

브라우저에서 `http://localhost:5500` (또는 해당 포트)로 접속하면 바로 확인 가능합니다.

### 3. 프로덕션 빌드

```bash
npm run build
```

빌드된 파일은 `dist/` 폴더에 생성됩니다:
- `pages-template.esm.js` - ES6 모듈 버전
- `pages-template.min.js` - 압축된 버전 (프로덕션용)
- 각각의 Source Map 파일

## 📚 테스트 계정

개발 및 테스트를 위해 다음 계정을 사용할 수 있습니다:

| 사용자명 | 비밀번호 | 투자 상품 수 |
|---------|---------|-------------|
| `investor1` | `pass1234` | 3개 |
| `investor2` | `pass1234` | 2개 |
| `investor3` | `pass1234` | 1개 |

## 🏗️ 프로젝트 구조

```
abcbond-widget/
├── src/
│   ├── core/              # 핵심 로직
│   │   ├── api.js         # API 호출 (Mock)
│   │   ├── router.js      # 클라이언트 사이드 라우팅
│   │   ├── state.js       # 전역 상태 관리
│   │   └── widget.js      # 위젯 초기화 및 라이프사이클
│   ├── pages/             # 페이지 컴포넌트
│   │   ├── login.js       # 로그인 페이지
│   │   ├── index.js       # 투자 목록 페이지
│   │   └── investment.js  # 투자 상세 페이지
│   ├── components/        # 재사용 컴포넌트
│   │   └── Modal.js       # 모달 컴포넌트
│   ├── styles/            # 스타일
│   │   └── main.css.js    # CSS-in-JS
│   ├── utils/             # 유틸리티
│   │   ├── dom.js         # DOM 헬퍼
│   │   └── helpers.js     # 공통 헬퍼
│   └── index.js           # 엔트리 포인트
├── mock-api/              # Mock 데이터
│   ├── investments.json   # 투자 상품 목록
│   ├── investment-detail.json  # 투자 상품 상세 (등기부등본 포함)
│   ├── users.json         # 사용자 데이터
│   └── user.json          # 사용자 정보
├── dist/                  # 빌드 결과물
├── index.html             # 메인 HTML
├── build.js               # 빌드 스크립트
└── package.json           # 의존성
```

## 💡 사용 예시

### 개발 모드 (ES6 Modules)

```html
<div id="widget-root"></div>
<script type="module">
  import { Widget } from './src/index.js';

  const widget = new Widget('#widget-root', {
    persistState: true,  // LocalStorage 사용
    apiBaseUrl: '/mock-api'
  });
</script>
```

### 프로덕션 배포 (고객 웹사이트 임베드)

```html
<div id="abcbond-widget"></div>
<script src="https://cdn.abcbond.com/widget.min.js"></script>
<script>
  const widget = new PagesTemplate.Widget('#abcbond-widget', {
    apiKey: 'your-api-key',
    apiBaseUrl: 'https://api.abcbond.com'
  });
</script>
```

## 🎨 주요 화면

### 1. 로그인 페이지
- 간편한 사용자 인증
- 테스트 계정 정보 표시

### 2. 투자 목록
- 사용자가 투자한 아파트 상품 카드
- 각 카드: 썸네일, 상품명, 위치, 투자금액, 예상수익률, 상태

### 3. 투자 상세 페이지

**상단 섹션** (50:50 분할)
- **좌측**: 이미지 갤러리 (썸네일 클릭으로 전환)
- **우측**: 
  - 기본 정보 (아파트명, 주소)
  - 투자 정보 (투자금액, 예상수익률, 기간)
  - 재무 요약 (KB시세, 담보가, 선순위대출)
  - LTV 비율 시각화

**하단 섹션** (탭 인터페이스)
1. **상세정보 / 물건정보**
   - 상세 설명
   - 물건 정보 테이블 (건물유형, 세대수, 준공연도 등)

2. **월별 이자 지급 내역**
   - 지급월, 지급액 테이블
   - 총 지급액 합계

3. **등기부등본** 🆕
   - 표제부: 물건의 기본 정보
   - 갑구: 소유권 및 권리사항
   - 을구: 근저당권 등 제한사항

## 🛠️ 기술 스택

- **프론트엔드**: Vanilla JavaScript (ES6+)
- **빌드 도구**: esbuild (빠른 번들링)
- **스타일링**: CSS-in-JS (런타임 주입)
- **라우팅**: Hash-based Router with Path Parameters
- **상태 관리**: Singleton State Pattern (Pub/Sub)
- **API**: Mock API (Static JSON Files)

## 🔧 개발 가이드

### API 구조

```javascript
// 투자 상품 목록 가져오기
const investments = await getInvestments();

// 투자 상품 상세 정보 가져오기
const detail = await getInvestmentDetail(investmentId);

// 사용자 목록 가져오기
const users = await getUsers();

// 로그인
const user = await login(username, password);
```

### 라우팅

```javascript
// 라우트 정의
{
  '/': () => this.showInvestmentList(),
  '/investment/:id': (params) => this.showInvestmentDetail(params),
  '*': () => this.showInvestmentList() // 404 처리
}

// 네비게이션
router.navigate('/investment/1');
```

### 상태 관리

```javascript
// 사용자 설정
state.setUser(user);

// 사용자 가져오기
const user = state.getUser();

// 인증 확인
const isAuth = state.isAuthenticated();

// 로그아웃
state.logout();

// 상태 변경 구독
state.subscribe('user', (newUser, oldUser) => {
  console.log('User changed:', newUser);
});
```

### 새로운 페이지 추가

1. `src/pages/` 에 새 파일 생성
2. `src/core/widget.js` 에 라우트 추가
3. `src/index.js` 에서 export

자세한 내용은 **[CONTRIBUTING.md](./CONTRIBUTING.md)** 참조

## 🤖 AI 에이전트 사용 시 필독

> **⚠️ IMPORTANT**
>
> AI 에이전트(Claude, ChatGPT, Cursor 등)를 사용하는 경우, 작업 시작 전에 다음과 같이 지시하세요:
>
> ```
> 먼저 CONTRIBUTING.md 파일을 읽고 프로젝트 구조와 규칙을 이해한 후 작업해줘.
> ```
>
> **[CONTRIBUTING.md](./CONTRIBUTING.md)** 파일에는 다음이 포함되어 있습니다:
> - 프로젝트 구조 및 네이밍 규칙
> - 라우팅 및 상태 관리 방법
> - 새로운 페이지/기능 추가 방법
> - 코딩 스타일 가이드
> - 금지사항 및 베스트 프랙티스

## 📈 향후 개발 계획

- [ ] 실제 백엔드 API 연동
- [ ] JWT 기반 인증
- [ ] 투자 계약서 다운로드 기능
- [ ] 알림 기능 (이자 지급, 계약 만료 등)
- [ ] 대시보드 차트 및 통계
- [ ] PDF로 등기부등본 내보내기
- [ ] 다국어 지원 (i18n)

## 🧪 테스트

```bash
# 유닛 테스트 (추후 추가 예정)
npm test

# 빌드 테스트
npm run build
```

## 🚀 배포

### Cloudflare Pages

```bash
# 빌드
npm run build

# Cloudflare Pages에 배포
# 빌드 명령: npm run build
# 빌드 출력 디렉토리: dist
```

### 일반 정적 호스팅

`dist/` 폴더의 내용을 CDN 또는 정적 호스팅 서비스에 업로드하면 됩니다.

## 📝 라이센스

MIT License

Copyright (c) 2024 ABC Bond

자세한 내용은 [LICENSE](LICENSE) 파일을 참조하세요.

## 👥 기여

기여는 언제나 환영합니다! 

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

자세한 기여 가이드는 [CONTRIBUTING.md](./CONTRIBUTING.md)를 참조하세요.

## 📞 문의

프로젝트 관련 문의사항이 있으시면 이슈를 생성해주세요.

- GitHub: [@JosephChoi](https://github.com/JosephChoi)
- Repository: [https://github.com/JosephChoi/abcbond-widget](https://github.com/JosephChoi/abcbond-widget)

## 🙏 감사의 말

이 프로젝트는 [pages-template](https://github.com/hopegiver/pages-template)을 기반으로 제작되었습니다.

---

**Built with ❤️ for Real Estate Investors**
