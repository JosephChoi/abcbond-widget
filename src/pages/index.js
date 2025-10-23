// 홈 페이지 (투자 상품 목록 - 아파트)

import { getMyInvestments } from '../core/api.js';
import { createElement } from '../utils/dom.js';

export class IndexPage {
  constructor(props = {}) {
    this.props = props;
    this.investments = [];
    this.onInvestmentClick = props.onInvestmentClick || (() => {});
    this.state = props.state; // State 인스턴스 (선택적)
  }

  async loadInvestments() {
    try {
      // API에서 내 투자 내역 가져오기
      const myInvestments = await getMyInvestments();
      
      // API 응답을 UI에 맞게 변환
      this.investments = myInvestments.map(inv => ({
        id: inv.investment_id,
        name: inv.name,
        location: inv.location,
        investedAmount: inv.invested_amount,
        expectedReturn: inv.expected_return,
        status: inv.status,
        image: inv.image || 'https://via.placeholder.com/400x300?text=No+Image',
        userInvestmentId: inv.id // user_investments 테이블의 ID
      }));
      
      return this.investments;
    } catch (error) {
      console.error('Failed to load investments:', error);
      throw error;
    }
  }

  render() {
    const container = createElement('div', { className: 'investment-list-container' });

    // Load and render investments
    this.loadInvestments()
      .then(() => {
        container.innerHTML = '';
        const investmentList = this.renderInvestmentList();
        container.appendChild(investmentList);
      })
      .catch(error => {
        container.innerHTML = '';
        const errorEl = createElement('div', {
          className: 'widget-error',
          innerHTML: `투자 상품을 불러오는데 실패했습니다: ${error.message}`
        });
        container.appendChild(errorEl);
      });

    return container;
  }

  renderInvestmentList() {
    const wrapper = createElement('div', { className: 'investment-wrapper' });
    
    // 헤더 (타이틀 + 사용자 정보)
    const header = createElement('div', { className: 'investment-list-header' });
    
    const title = createElement('h2', { 
      className: 'investment-list-title',
      innerHTML: '내 투자 현황'
    });
    header.appendChild(title);

    // 사용자 정보 및 로그아웃 버튼
    if (this.state && this.state.getUser()) {
      const user = this.state.getUser();
      const userInfo = createElement('div', { className: 'user-info' });
      userInfo.innerHTML = `
        <span class="user-name">${user.name}님</span>
        <button class="logout-button">로그아웃</button>
      `;
      
      const logoutButton = userInfo.querySelector('.logout-button');
      logoutButton.addEventListener('click', () => {
        if (confirm('로그아웃 하시겠습니까?')) {
          this.state.logout();
        }
      });
      
      header.appendChild(userInfo);
    }

    wrapper.appendChild(header);

    // 투자 그리드
    const list = createElement('div', { className: 'investment-list' });

    this.investments.forEach(investment => {
      const card = this.renderInvestmentCard(investment);
      list.appendChild(card);
    });

    wrapper.appendChild(list);
    return wrapper;
  }

  renderInvestmentCard(investment) {
    const card = createElement('div', { className: 'investment-card' });

    card.innerHTML = `
      <div class="investment-image">
        <img src="${investment.image}" alt="${investment.name}">
        <span class="investment-status ${investment.status}">${investment.status === 'active' ? '투자 중' : '종료'}</span>
      </div>
      <div class="investment-info">
        <h3 class="investment-name">${investment.name}</h3>
        <p class="investment-location">${investment.location}</p>
        <div class="investment-amount">
          <span class="label">투자 금액</span>
          <span class="value">${investment.investedAmount.toLocaleString('ko-KR')}원</span>
        </div>
        <div class="investment-return">
          <span class="label">예상 수익률</span>
          <span class="value return-rate">${investment.expectedReturn}%</span>
        </div>
      </div>
    `;

    card.addEventListener('click', () => {
      this.onInvestmentClick(investment);
    });

    return card;
  }
}
