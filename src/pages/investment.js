// 투자 상품 상세 페이지

import { getInvestmentDetail } from '../core/api.js';
import { createElement } from '../utils/dom.js';

export class InvestmentPage {
  constructor(props = {}) {
    this.investmentId = props.investmentId;
    this.investment = null;
    this.state = props.state;
    this.onBack = props.onBack || (() => {});
    this.currentImageIndex = 0;
    this.currentTab = 'detail'; // 'detail', 'interest', or 'registration'
  }

  async loadInvestment() {
    try {
      this.investment = await getInvestmentDetail(this.investmentId);
      return this.investment;
    } catch (error) {
      console.error('Failed to load investment:', error);
      throw error;
    }
  }

  render() {
    const container = createElement('div', { className: 'investment-detail-container' });

    // 비동기 데이터 로딩
    this.loadInvestment()
      .then(() => {
        container.innerHTML = '';
        container.appendChild(this.renderContent());
      })
      .catch(error => {
        container.innerHTML = '';
        const errorEl = createElement('div', {
          className: 'widget-error',
          innerHTML: `투자 상품 정보를 불러오는데 실패했습니다: ${error.message}`
        });
        container.appendChild(errorEl);
      });

    return container;
  }

  renderContent() {
    const content = createElement('div', { className: 'investment-detail' });

    // 뒤로가기 버튼
    const backButton = createElement('button', {
      className: 'back-button',
      innerHTML: '← 목록으로'
    });
    backButton.addEventListener('click', () => this.onBack());
    content.appendChild(backButton);

    // 상단 섹션 (좌우 분할)
    content.appendChild(this.renderTopSection());

    // 하단 탭 섹션
    content.appendChild(this.renderTabSection());

    return content;
  }

  renderTopSection() {
    const topSection = createElement('div', { className: 'investment-top-section' });

    // 왼쪽: 이미지 갤러리
    const leftSection = createElement('div', { className: 'top-left' });
    leftSection.appendChild(this.renderImageGallery());
    topSection.appendChild(leftSection);

    // 오른쪽: 아파트 정보 + 투자 정보
    const rightSection = createElement('div', { className: 'top-right' });
    rightSection.appendChild(this.renderBasicInfo());
    rightSection.appendChild(this.renderInvestmentInfo());
    rightSection.appendChild(this.renderFinancialSummary());
    topSection.appendChild(rightSection);

    return topSection;
  }

  renderBasicInfo() {
    const section = createElement('div', { className: 'basic-info' });

    const title = createElement('h1', {
      className: 'investment-title',
      innerHTML: this.investment.name
    });
    section.appendChild(title);

    const address = createElement('p', {
      className: 'investment-address',
      innerHTML: `📍 ${this.investment.address}`
    });
    section.appendChild(address);

    return section;
  }

  renderInvestmentInfo() {
    const section = createElement('div', { className: 'investment-info-cards' });

    const cards = [
      { 
        label: '내 투자금', 
        value: `${this.investment.investedAmount.toLocaleString('ko-KR')}원`,
        className: 'investment-amount'
      },
      { 
        label: '예상 수익률', 
        value: `${this.investment.expectedReturn}%`,
        className: 'expected-return'
      }
    ];

    cards.forEach(card => {
      const cardEl = createElement('div', { className: `info-card ${card.className}` });
      cardEl.innerHTML = `
        <div class="card-label">${card.label}</div>
        <div class="card-value">${card.value}</div>
      `;
      section.appendChild(cardEl);
    });

    return section;
  }

  renderFinancialSummary() {
    const section = createElement('div', { className: 'financial-summary' });

    // KB 시세
    const kbValue = createElement('div', { className: 'summary-item' });
    kbValue.innerHTML = `
      <span class="label">KB 시세</span>
      <span class="value">${this.investment.kbValuation.toLocaleString('ko-KR')}원</span>
    `;
    section.appendChild(kbValue);

    // 선순위 대출금
    const seniorLoan = createElement('div', { className: 'summary-item' });
    seniorLoan.innerHTML = `
      <span class="label">선순위 대출금</span>
      <span class="value">${this.investment.seniorLoan.toLocaleString('ko-KR')}원</span>
    `;
    section.appendChild(seniorLoan);

    // LTV 비율
    const ltvSection = createElement('div', { className: 'ltv-compact' });
    ltvSection.innerHTML = `
      <div class="ltv-header">
        <span class="label">LTV 비율</span>
        <span class="value">${this.investment.ltv}%</span>
      </div>
      <div class="ltv-bar-container">
        <div class="ltv-bar-fill" style="width: ${this.investment.ltv}%">
          <span class="ltv-label">${this.investment.ltv}%</span>
        </div>
      </div>
    `;
    section.appendChild(ltvSection);

    return section;
  }

  renderTabSection() {
    const tabSection = createElement('div', { className: 'investment-tab-section' });

    // 탭 버튼들
    const tabButtons = createElement('div', { className: 'tab-buttons' });
    
    const detailBtn = createElement('button', {
      className: `tab-btn ${this.currentTab === 'detail' ? 'active' : ''}`,
      innerHTML: '상세정보 / 물건정보'
    });
    detailBtn.addEventListener('click', () => this.switchTab('detail', tabSection));
    
    const interestBtn = createElement('button', {
      className: `tab-btn ${this.currentTab === 'interest' ? 'active' : ''}`,
      innerHTML: '월별 이자 지급 내역'
    });
    interestBtn.addEventListener('click', () => this.switchTab('interest', tabSection));

    const registrationBtn = createElement('button', {
      className: `tab-btn ${this.currentTab === 'registration' ? 'active' : ''}`,
      innerHTML: '등기부등본'
    });
    registrationBtn.addEventListener('click', () => this.switchTab('registration', tabSection));

    tabButtons.appendChild(detailBtn);
    tabButtons.appendChild(interestBtn);
    tabButtons.appendChild(registrationBtn);
    tabSection.appendChild(tabButtons);

    // 탭 컨텐츠
    const tabContent = createElement('div', { className: 'tab-content' });
    tabContent.appendChild(this.renderTabContent());
    tabSection.appendChild(tabContent);

    return tabSection;
  }

  switchTab(tab, tabSection) {
    this.currentTab = tab;
    
    // 버튼 활성화 상태 변경
    const buttons = tabSection.querySelectorAll('.tab-btn');
    buttons.forEach(btn => btn.classList.remove('active'));
    const activeIndex = tab === 'detail' ? 0 : (tab === 'interest' ? 1 : 2);
    buttons[activeIndex].classList.add('active');

    // 컨텐츠 변경
    const tabContent = tabSection.querySelector('.tab-content');
    tabContent.innerHTML = '';
    tabContent.appendChild(this.renderTabContent());
  }

  renderTabContent() {
    const container = createElement('div', { className: 'tab-content-container' });

    if (this.currentTab === 'detail') {
      // 상세 정보 + 물건 정보
      container.appendChild(this.renderDescription());
      container.appendChild(this.renderPropertyInfo());
    } else if (this.currentTab === 'interest') {
      // 월별 이자 지급 내역
      container.appendChild(this.renderMonthlyInterest());
    } else if (this.currentTab === 'registration') {
      // 등기부등본
      container.appendChild(this.renderRegistrationDocument());
    }

    return container;
  }

  renderImageGallery() {
    const gallery = createElement('div', { className: 'investment-gallery' });

    // 메인 이미지
    const mainImage = createElement('div', { className: 'gallery-main' });
    const img = createElement('img', {
      src: this.investment.images[this.currentImageIndex],
      alt: this.investment.name
    });
    mainImage.appendChild(img);
    gallery.appendChild(mainImage);

    // 썸네일 이미지들
    const thumbnails = createElement('div', { className: 'gallery-thumbnails' });
    this.investment.images.forEach((imageSrc, index) => {
      const thumb = createElement('img', {
        src: imageSrc,
        alt: `${this.investment.name} ${index + 1}`,
        className: index === this.currentImageIndex ? 'active' : ''
      });
      thumb.addEventListener('click', () => {
        this.currentImageIndex = index;
        img.src = imageSrc;
        thumbnails.querySelectorAll('img').forEach(t => t.classList.remove('active'));
        thumb.classList.add('active');
      });
      thumbnails.appendChild(thumb);
    });
    gallery.appendChild(thumbnails);

    return gallery;
  }


  renderDescription() {
    const section = createElement('div', { className: 'investment-section' });
    
    const title = createElement('h2', {
      className: 'section-title',
      innerHTML: '상세 설명'
    });
    section.appendChild(title);

    const description = createElement('p', {
      className: 'investment-description',
      innerHTML: this.investment.description
    });
    section.appendChild(description);

    return section;
  }


  renderMonthlyInterest() {
    const section = createElement('div', { className: 'investment-section' });
    
    const title = createElement('h2', {
      className: 'section-title',
      innerHTML: '월별 이자 지급 내역'
    });
    section.appendChild(title);

    // 총 지급액 계산
    const totalInterest = this.investment.monthlyInterest.reduce((sum, item) => sum + item.amount, 0);

    const summary = createElement('div', { className: 'interest-summary' });
    summary.innerHTML = `
      <div class="summary-item">
        <span class="label">총 수령 이자</span>
        <span class="value">${totalInterest.toLocaleString('ko-KR')}원</span>
      </div>
      <div class="summary-item">
        <span class="label">지급 횟수</span>
        <span class="value">${this.investment.monthlyInterest.length}회</span>
      </div>
    `;
    section.appendChild(summary);

    // 테이블
    const table = createElement('table', { className: 'interest-table' });
    table.innerHTML = `
      <thead>
        <tr>
          <th>지급월</th>
          <th>지급액</th>
          <th>누적액</th>
        </tr>
      </thead>
      <tbody>
      </tbody>
    `;

    const tbody = table.querySelector('tbody');
    let cumulative = 0;

    this.investment.monthlyInterest.forEach(item => {
      cumulative += item.amount;
      const row = createElement('tr');
      row.innerHTML = `
        <td>${item.month}</td>
        <td class="amount">${item.amount.toLocaleString('ko-KR')}원</td>
        <td class="cumulative">${cumulative.toLocaleString('ko-KR')}원</td>
      `;
      tbody.appendChild(row);
    });

    section.appendChild(table);

    return section;
  }

  renderPropertyInfo() {
    const section = createElement('div', { className: 'investment-section' });
    
    const title = createElement('h2', {
      className: 'section-title',
      innerHTML: '물건 정보'
    });
    section.appendChild(title);

    const table = createElement('table', { className: 'property-info-table' });
    
    const details = this.investment.details;
    const rows = [
      ['건물 유형', details.buildingType],
      ['전체 세대수', details.totalUnits + '세대'],
      ['준공연도', details.buildYear + '년'],
      ['전용면적', details.area],
      ['층수', details.floor],
      ['방향', details.direction],
      ['주차', details.parking],
      ['난방', details.heating]
    ];

    const tbody = createElement('tbody');
    rows.forEach(([label, value]) => {
      const row = createElement('tr');
      row.innerHTML = `
        <th>${label}</th>
        <td>${value}</td>
      `;
      tbody.appendChild(row);
    });

    table.appendChild(tbody);
    section.appendChild(table);

    return section;
  }

  renderRegistrationDocument() {
    const section = createElement('div', { className: 'registration-document-section' });
    
    const title = createElement('h2', {
      className: 'section-title',
      innerHTML: '등기부등본'
    });
    section.appendChild(title);

    const reg = this.investment.registrationDocument;

    // 발급일자
    const issueDate = createElement('div', { className: 'reg-issue-date' });
    issueDate.innerHTML = `<strong>발급일자:</strong> ${reg.issueDate}`;
    section.appendChild(issueDate);

    // 표제부 (물건 정보)
    const propertySection = createElement('div', { className: 'reg-section' });
    const propertyTitle = createElement('h3', {
      className: 'reg-section-title',
      innerHTML: '표제부 (물건 정보)'
    });
    propertySection.appendChild(propertyTitle);

    const propertyTable = createElement('table', { className: 'reg-table' });
    const propertyRows = [
      ['소재지', reg.propertyInfo.address],
      ['건물명', reg.propertyInfo.buildingName],
      ['건물 유형', reg.propertyInfo.buildingType],
      ['구조', reg.propertyInfo.structure],
      ['층수', reg.propertyInfo.floors],
      ['전체 면적', reg.propertyInfo.totalArea],
      ['준공일', reg.propertyInfo.buildDate]
    ];

    const propertyTbody = createElement('tbody');
    propertyRows.forEach(([label, value]) => {
      const row = createElement('tr');
      row.innerHTML = `
        <th>${label}</th>
        <td>${value}</td>
      `;
      propertyTbody.appendChild(row);
    });
    propertyTable.appendChild(propertyTbody);
    propertySection.appendChild(propertyTable);
    section.appendChild(propertySection);

    // 갑구 (소유권 정보)
    const ownershipSection = createElement('div', { className: 'reg-section' });
    const ownershipTitle = createElement('h3', {
      className: 'reg-section-title',
      innerHTML: '갑구 (소유권 정보)'
    });
    ownershipSection.appendChild(ownershipTitle);

    const ownershipTable = createElement('table', { className: 'reg-table' });
    const ownershipRows = [
      ['소유자', reg.ownershipInfo.owner],
      ['등기일자', reg.ownershipInfo.registrationDate],
      ['등기원인', reg.ownershipInfo.registrationCause],
      ['지분', reg.ownershipInfo.shareRatio]
    ];

    const ownershipTbody = createElement('tbody');
    ownershipRows.forEach(([label, value]) => {
      const row = createElement('tr');
      row.innerHTML = `
        <th>${label}</th>
        <td>${value}</td>
      `;
      ownershipTbody.appendChild(row);
    });
    ownershipTable.appendChild(ownershipTbody);
    ownershipSection.appendChild(ownershipTable);
    section.appendChild(ownershipSection);

    // 권리사항 (갑구 상세)
    if (reg.rightsInfo && reg.rightsInfo.length > 0) {
      const rightsSection = createElement('div', { className: 'reg-section' });
      const rightsTitle = createElement('h3', {
        className: 'reg-section-title',
        innerHTML: '권리사항 (갑구)'
      });
      rightsSection.appendChild(rightsTitle);

      reg.rightsInfo.forEach((right, index) => {
        const rightBox = createElement('div', { className: 'reg-right-box' });
        rightBox.innerHTML = `
          <div class="reg-right-item"><strong>순위번호:</strong> ${index + 1}</div>
          <div class="reg-right-item"><strong>권리종류:</strong> ${right.type}</div>
          <div class="reg-right-item"><strong>권리자:</strong> ${right.holder}</div>
          <div class="reg-right-item"><strong>등기일자:</strong> ${right.registrationDate}</div>
          <div class="reg-right-item"><strong>등기목적:</strong> ${right.purpose}</div>
        `;
        rightsSection.appendChild(rightBox);
      });
      section.appendChild(rightsSection);
    }

    // 을구 (제한사항 - 근저당권 등)
    if (reg.restrictionsInfo && reg.restrictionsInfo.length > 0) {
      const restrictionsSection = createElement('div', { className: 'reg-section' });
      const restrictionsTitle = createElement('h3', {
        className: 'reg-section-title',
        innerHTML: '을구 (제한사항)'
      });
      restrictionsSection.appendChild(restrictionsTitle);

      reg.restrictionsInfo.forEach((restriction, index) => {
        const restrictionBox = createElement('div', { className: 'reg-restriction-box' });
        restrictionBox.innerHTML = `
          <div class="reg-restriction-item"><strong>순위번호:</strong> ${index + 1}</div>
          <div class="reg-restriction-item"><strong>권리종류:</strong> ${restriction.type}</div>
          <div class="reg-restriction-item"><strong>권리자:</strong> ${restriction.holder}</div>
          <div class="reg-restriction-item"><strong>채권최고액:</strong> ${restriction.amount.toLocaleString()}원</div>
          <div class="reg-restriction-item"><strong>등기일자:</strong> ${restriction.registrationDate}</div>
          <div class="reg-restriction-item"><strong>등기목적:</strong> ${restriction.purpose}</div>
        `;
        restrictionsSection.appendChild(restrictionBox);
      });
      section.appendChild(restrictionsSection);
    }

    return section;
  }
}

