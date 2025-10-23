// 위젯 스타일 정의

export const styles = `
  /* Widget Container */
  .widget-wrapper {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
    font-size: 14px;
    line-height: 1.5;
    color: #333;
    box-sizing: border-box;
  }

  .widget-wrapper *,
  .widget-wrapper *::before,
  .widget-wrapper *::after {
    box-sizing: border-box;
  }

  .widget-content {
    padding: 20px;
    background: #f8f9fa;
    border-radius: 8px;
    border: 1px solid #dee2e6;
  }

  /* Investment List (투자 상품 목록) */
  .investment-list-container {
    padding: 20px;
    background: #f8f9fa;
    min-height: 100vh;
  }

  .investment-wrapper {
    max-width: 1200px;
    margin: 0 auto;
  }

  .investment-list-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 24px;
    padding-bottom: 16px;
    border-bottom: 2px solid #dee2e6;
    flex-wrap: wrap;
    gap: 16px;
  }

  .investment-list-title {
    font-size: 28px;
    font-weight: 700;
    color: #212529;
    margin: 0;
  }

  .user-info {
    display: flex;
    align-items: center;
    gap: 16px;
  }

  .user-name {
    font-size: 16px;
    font-weight: 600;
    color: #495057;
  }

  .logout-button {
    background: #6c757d;
    color: white;
    border: none;
    padding: 8px 16px;
    border-radius: 6px;
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s;
  }

  .logout-button:hover {
    background: #5a6268;
    transform: translateY(-1px);
  }

  .logout-button:active {
    transform: translateY(0);
  }

  .investment-list {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
    gap: 24px;
  }

  .investment-card {
    background: white;
    border: 1px solid #e0e0e0;
    border-radius: 12px;
    overflow: hidden;
    transition: all 0.3s ease;
    cursor: pointer;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
  }

  .investment-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
  }

  .investment-image {
    position: relative;
    width: 100%;
    height: 220px;
    overflow: hidden;
  }

  .investment-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }

  .investment-card:hover .investment-image img {
    transform: scale(1.05);
  }

  .investment-status {
    position: absolute;
    top: 12px;
    right: 12px;
    background: rgba(0, 123, 255, 0.95);
    color: white;
    padding: 6px 12px;
    border-radius: 20px;
    font-size: 12px;
    font-weight: 600;
    backdrop-filter: blur(4px);
  }

  .investment-info {
    padding: 20px;
  }

  .investment-name {
    font-size: 18px;
    font-weight: 700;
    color: #212529;
    margin: 0 0 8px 0;
    line-height: 1.4;
  }

  .investment-location {
    font-size: 14px;
    color: #6c757d;
    margin: 0 0 16px 0;
    display: flex;
    align-items: center;
    gap: 4px;
  }

  .investment-location::before {
    content: "📍";
    font-size: 13px;
  }

  .investment-amount,
  .investment-return {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px 0;
    border-top: 1px solid #f0f0f0;
  }

  .investment-amount .label,
  .investment-return .label {
    font-size: 13px;
    color: #6c757d;
    font-weight: 500;
  }

  .investment-amount .value {
    font-size: 18px;
    font-weight: 700;
    color: #007bff;
  }

  .investment-return .value {
    font-size: 16px;
    font-weight: 700;
    color: #28a745;
  }

  .investment-return .return-rate {
    background: #d4edda;
    padding: 4px 12px;
    border-radius: 16px;
  }

  /* Product List (기존 상품) */
  .product-list {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 20px;
    padding: 20px;
  }

  .product-card {
    background: white;
    border: 1px solid #e0e0e0;
    border-radius: 8px;
    padding: 16px;
    transition: box-shadow 0.2s;
    cursor: pointer;
  }

  .product-card:hover {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }

  .product-card img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: 4px;
  }

  .product-title {
    font-size: 16px;
    font-weight: 600;
    margin: 12px 0 8px;
    color: #212529;
  }

  .product-price {
    font-size: 18px;
    font-weight: 700;
    color: #007bff;
  }

  /* Button */
  .widget-button {
    background: #007bff;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 4px;
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
    transition: background 0.2s;
  }

  .widget-button:hover {
    background: #0056b3;
  }

  .widget-button:disabled {
    background: #6c757d;
    cursor: not-allowed;
  }

  /* Modal */
  .widget-modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 10000;
  }

  .widget-modal {
    background: white;
    border-radius: 8px;
    padding: 24px;
    max-width: 600px;
    width: 90%;
    max-height: 80vh;
    overflow-y: auto;
    position: relative;
  }

  .widget-modal-close {
    position: absolute;
    top: 12px;
    right: 12px;
    background: transparent;
    border: none;
    font-size: 24px;
    cursor: pointer;
    color: #6c757d;
  }

  .widget-modal-close:hover {
    color: #212529;
  }

  /* Cart */
  .cart-container {
    padding: 20px;
  }

  .cart-item {
    display: flex;
    gap: 16px;
    padding: 16px;
    border-bottom: 1px solid #e0e0e0;
  }

  .cart-item img {
    width: 80px;
    height: 80px;
    object-fit: cover;
    border-radius: 4px;
  }

  .cart-item-info {
    flex: 1;
  }

  .cart-total {
    font-size: 20px;
    font-weight: 700;
    text-align: right;
    padding: 20px;
    border-top: 2px solid #212529;
  }

  /* Loading */
  .widget-loading {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 40px;
    color: #6c757d;
  }

  /* Router Loading Indicator */
  .router-loading-indicator {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 9999;
    background: rgba(255, 255, 255, 0.95);
    padding: 24px;
    border-radius: 12px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }

  .router-loading-indicator .spinner {
    width: 40px;
    height: 40px;
    border: 4px solid #f3f3f3;
    border-top: 4px solid #007bff;
    border-radius: 50%;
    animation: router-spin 1s linear infinite;
  }

  @keyframes router-spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }

  /* Error */
  .widget-error {
    padding: 20px;
    background: #f8d7da;
    color: #721c24;
    border: 1px solid #f5c6cb;
    border-radius: 4px;
    margin: 20px;
  }

  /* Product Detail */
  .product-detail {
    padding: 20px;
  }

  .back-button {
    background: #f8f9fa;
    border: 1px solid #dee2e6;
    color: #495057;
    padding: 8px 16px;
    border-radius: 4px;
    cursor: pointer;
    font-size: 14px;
    margin-bottom: 20px;
  }

  .back-button:hover {
    background: #e9ecef;
  }

  .product-top {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 40px;
    margin-bottom: 40px;
  }

  /* 상품 이미지 */
  .product-images {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  .main-image img {
    width: 100%;
    border-radius: 8px;
    border: 1px solid #e0e0e0;
  }

  .thumbnail-images {
    display: flex;
    gap: 8px;
  }

  .thumbnail {
    width: 80px;
    height: 80px;
    object-fit: cover;
    border-radius: 4px;
    border: 2px solid transparent;
    cursor: pointer;
    transition: border-color 0.2s;
  }

  .thumbnail:hover {
    border-color: #007bff;
  }

  .thumbnail.active {
    border-color: #007bff;
  }

  /* 상품 정보 */
  .product-info {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  .product-category {
    color: #6c757d;
    font-size: 13px;
  }

  .product-name {
    font-size: 24px;
    font-weight: 700;
    margin: 0;
    color: #212529;
  }

  .product-rating {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .product-rating .stars {
    color: #ffc107;
    font-size: 16px;
  }

  .product-rating .rating-text {
    color: #6c757d;
    font-size: 14px;
  }

  .product-price-section {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 16px 0;
    border-top: 1px solid #e0e0e0;
    border-bottom: 1px solid #e0e0e0;
  }

  .original-price {
    color: #6c757d;
    text-decoration: line-through;
    font-size: 16px;
  }

  .discount-badge {
    background: #dc3545;
    color: white;
    padding: 4px 8px;
    border-radius: 4px;
    font-size: 14px;
    font-weight: 700;
  }

  .current-price {
    font-size: 28px;
    font-weight: 700;
    color: #212529;
  }

  .product-delivery {
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding: 16px;
    background: #f8f9fa;
    border-radius: 4px;
  }

  .delivery-item {
    display: flex;
    justify-content: space-between;
    font-size: 14px;
  }

  .delivery-item .label {
    color: #6c757d;
    font-weight: 500;
  }

  .delivery-item .value {
    color: #212529;
  }

  .delivery-item .in-stock {
    color: #28a745;
    font-weight: 600;
  }

  .delivery-item .out-stock {
    color: #dc3545;
    font-weight: 600;
  }

  .product-quantity {
    display: flex;
    align-items: center;
    gap: 12px;
  }

  .product-quantity label {
    font-weight: 500;
    color: #495057;
  }

  .quantity-control {
    display: flex;
    align-items: center;
    border: 1px solid #dee2e6;
    border-radius: 4px;
    overflow: hidden;
  }

  .qty-btn {
    width: 36px;
    height: 36px;
    border: none;
    background: #f8f9fa;
    cursor: pointer;
    font-size: 18px;
    color: #495057;
  }

  .qty-btn:hover {
    background: #e9ecef;
  }

  .qty-input {
    width: 60px;
    height: 36px;
    border: none;
    text-align: center;
    font-size: 14px;
    border-left: 1px solid #dee2e6;
    border-right: 1px solid #dee2e6;
  }

  .qty-input:focus {
    outline: none;
  }

  .product-total {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px;
    background: #f8f9fa;
    border-radius: 4px;
  }

  .product-total .label {
    font-size: 16px;
    font-weight: 500;
    color: #495057;
  }

  .product-total .total-price {
    font-size: 24px;
    font-weight: 700;
    color: #dc3545;
  }

  .product-actions {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 12px;
  }

  .btn-cart,
  .btn-buy {
    padding: 14px;
    border: none;
    border-radius: 4px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s;
  }

  .btn-cart {
    background: white;
    color: #007bff;
    border: 2px solid #007bff;
  }

  .btn-cart:hover {
    background: #007bff;
    color: white;
  }

  .btn-buy {
    background: #007bff;
    color: white;
  }

  .btn-buy:hover {
    background: #0056b3;
  }

  /* 탭 메뉴 */
  .product-tabs {
    border-top: 1px solid #e0e0e0;
    padding-top: 20px;
  }

  .tab-buttons {
    display: flex;
    gap: 8px;
    border-bottom: 2px solid #e0e0e0;
    margin-bottom: 20px;
  }

  .tab-button {
    padding: 12px 24px;
    background: none;
    border: none;
    border-bottom: 3px solid transparent;
    cursor: pointer;
    font-size: 16px;
    font-weight: 500;
    color: #6c757d;
    transition: all 0.2s;
  }

  .tab-button:hover {
    color: #007bff;
  }

  .tab-button.active {
    color: #007bff;
    border-bottom-color: #007bff;
  }

  .tab-panel {
    display: none;
  }

  .tab-panel.active {
    display: block;
  }

  /* 상세 정보 탭 */
  .detail-content {
    padding: 20px;
    line-height: 1.8;
  }

  .detail-content h3 {
    font-size: 20px;
    margin: 24px 0 12px;
    color: #212529;
  }

  .detail-content h4 {
    font-size: 16px;
    margin: 20px 0 12px;
    color: #495057;
  }

  .detail-content p {
    color: #6c757d;
    margin-bottom: 16px;
  }

  .detail-content ul {
    margin-left: 20px;
    color: #495057;
  }

  .detail-content li {
    margin-bottom: 8px;
  }

  .specs-table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 12px;
  }

  .specs-table th,
  .specs-table td {
    padding: 12px;
    border: 1px solid #e0e0e0;
    text-align: left;
  }

  .specs-table th {
    background: #f8f9fa;
    font-weight: 600;
    color: #495057;
    width: 30%;
  }

  .specs-table td {
    color: #6c757d;
  }

  /* 후기 탭 */
  .reviews-content {
    padding: 20px;
  }

  .reviews-summary {
    background: #f8f9fa;
    padding: 24px;
    border-radius: 8px;
    margin-bottom: 24px;
  }

  .summary-rating {
    text-align: center;
  }

  .summary-rating .big-rating {
    font-size: 48px;
    font-weight: 700;
    color: #212529;
    margin-bottom: 8px;
  }

  .summary-rating .stars {
    color: #ffc107;
    font-size: 24px;
    margin-bottom: 8px;
  }

  .summary-rating .review-count {
    color: #6c757d;
    font-size: 14px;
  }

  .reviews-list {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .review-item {
    padding: 20px;
    border: 1px solid #e0e0e0;
    border-radius: 8px;
  }

  .review-header {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 12px;
  }

  .review-author {
    font-weight: 600;
    color: #495057;
  }

  .review-rating {
    color: #ffc107;
    font-size: 14px;
  }

  .review-date {
    color: #6c757d;
    font-size: 13px;
    margin-left: auto;
  }

  .review-content {
    color: #495057;
    line-height: 1.6;
  }

  .no-reviews {
    text-align: center;
    padding: 60px 20px;
    color: #6c757d;
    font-size: 16px;
  }

  /* Investment Detail Page (투자 상품 상세 페이지) */
  .investment-detail-container {
    padding: 20px;
    background: #f8f9fa;
    min-height: 100vh;
  }

  .investment-detail {
    max-width: 1200px;
    margin: 0 auto;
    background: white;
    border-radius: 12px;
    padding: 30px;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
  }

  /* 상단 섹션 - 좌우 분할 */
  .investment-top-section {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 40px;
    margin-bottom: 40px;
    padding-bottom: 40px;
    border-bottom: 2px solid #f0f0f0;
  }

  .top-left {
    display: flex;
    flex-direction: column;
  }

  .top-right {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }

  /* 기본 정보 */
  .basic-info {
    margin-bottom: 8px;
  }

  .basic-info .investment-title {
    font-size: 28px;
    font-weight: 700;
    color: #212529;
    margin: 0 0 12px 0;
  }

  .basic-info .investment-address {
    font-size: 15px;
    color: #6c757d;
    margin: 0;
  }

  /* 투자 정보 카드 */
  .investment-info-cards {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 12px;
  }

  .info-card {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    padding: 20px;
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .info-card .card-label {
    font-size: 13px;
    opacity: 0.9;
  }

  .info-card .card-value {
    font-size: 24px;
    font-weight: 700;
  }

  /* 재무 요약 */
  .financial-summary {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  .financial-summary .summary-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px;
    background: #f8f9fa;
    border-radius: 8px;
  }

  .financial-summary .label {
    font-size: 14px;
    font-weight: 600;
    color: #495057;
  }

  .financial-summary .value {
    font-size: 16px;
    font-weight: 700;
    color: #212529;
  }

  /* LTV Compact */
  .ltv-compact {
    background: #f8f9fa;
    padding: 16px;
    border-radius: 8px;
  }

  .ltv-compact .ltv-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 12px;
  }

  .ltv-compact .label {
    font-size: 14px;
    font-weight: 600;
    color: #495057;
  }

  .ltv-compact .value {
    font-size: 20px;
    font-weight: 700;
    color: #007bff;
  }

  .ltv-compact .ltv-bar-container {
    width: 100%;
    height: 32px;
    background: #e9ecef;
    border-radius: 16px;
    overflow: hidden;
    position: relative;
  }

  .ltv-compact .ltv-bar-fill {
    height: 100%;
    background: linear-gradient(90deg, #28a745 0%, #20c997 100%);
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding-right: 12px;
    transition: width 0.5s ease;
  }

  .ltv-compact .ltv-label {
    color: white;
    font-weight: 700;
    font-size: 13px;
  }

  /* 이미지 갤러리 */
  .investment-gallery {
    width: 100%;
  }

  .gallery-main {
    width: 100%;
    height: 350px;
    border-radius: 12px;
    overflow: hidden;
    margin-bottom: 12px;
  }

  .gallery-main img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .gallery-thumbnails {
    display: flex;
    gap: 12px;
  }

  .gallery-thumbnails img {
    width: 100px;
    height: 80px;
    object-fit: cover;
    border-radius: 8px;
    cursor: pointer;
    border: 3px solid transparent;
    transition: all 0.2s;
  }

  .gallery-thumbnails img:hover {
    border-color: #007bff;
    opacity: 0.8;
  }

  .gallery-thumbnails img.active {
    border-color: #007bff;
  }

  /* 탭 섹션 */
  .investment-tab-section {
    margin-top: 32px;
  }

  .tab-buttons {
    display: flex;
    gap: 8px;
    border-bottom: 2px solid #e9ecef;
    margin-bottom: 24px;
  }

  .tab-btn {
    padding: 14px 24px;
    background: none;
    border: none;
    border-bottom: 3px solid transparent;
    font-size: 15px;
    font-weight: 600;
    color: #6c757d;
    cursor: pointer;
    transition: all 0.2s;
    position: relative;
    bottom: -2px;
  }

  .tab-btn:hover {
    color: #007bff;
    background: #f8f9fa;
  }

  .tab-btn.active {
    color: #007bff;
    border-bottom-color: #007bff;
  }

  .tab-content {
    min-height: 300px;
  }

  .tab-content-container {
    display: flex;
    flex-direction: column;
    gap: 32px;
  }

  /* 섹션 공통 */
  .investment-section {
    margin-bottom: 30px;
    padding-bottom: 30px;
    border-bottom: 1px solid #f0f0f0;
  }

  .investment-section:last-child {
    border-bottom: none;
  }

  .section-title {
    font-size: 22px;
    font-weight: 700;
    color: #212529;
    margin: 0 0 20px 0;
  }

  /* 상세 설명 */
  .investment-description {
    font-size: 16px;
    line-height: 1.8;
    color: #495057;
    margin: 0;
  }

  /* 재무 정보 */
  .financial-cards {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 16px;
    margin-bottom: 30px;
  }

  .financial-card {
    background: #f8f9fa;
    padding: 24px;
    border-radius: 12px;
    display: flex;
    align-items: center;
    gap: 16px;
    transition: all 0.2s;
  }

  .financial-card:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }

  .financial-card.kb-value {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
  }

  .financial-card.property-value {
    background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
    color: white;
  }

  .financial-card.senior-loan {
    background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
    color: white;
  }

  .card-icon {
    font-size: 32px;
  }

  .card-content {
    flex: 1;
  }

  .card-label {
    font-size: 13px;
    opacity: 0.9;
    margin-bottom: 4px;
  }

  .card-value {
    font-size: 18px;
    font-weight: 700;
  }

  /* LTV 섹션 */
  .ltv-section {
    background: #f8f9fa;
    padding: 24px;
    border-radius: 12px;
  }

  .ltv-title {
    font-size: 18px;
    font-weight: 600;
    color: #212529;
    margin: 0 0 16px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .ltv-value {
    font-size: 24px;
    color: #007bff;
  }

  .ltv-bar-container {
    width: 100%;
    height: 40px;
    background: #e9ecef;
    border-radius: 20px;
    overflow: hidden;
    position: relative;
    margin-bottom: 12px;
  }

  .ltv-bar-fill {
    height: 100%;
    background: linear-gradient(90deg, #28a745 0%, #20c997 100%);
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding-right: 16px;
    transition: width 0.5s ease;
    position: relative;
  }

  .ltv-label {
    color: white;
    font-weight: 700;
    font-size: 14px;
  }

  .ltv-description {
    font-size: 14px;
    color: #6c757d;
    margin: 0;
  }

  /* 월별 이자 지급 내역 */
  .interest-summary {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
    margin-bottom: 20px;
  }

  .interest-summary .summary-item {
    background: #f8f9fa;
    padding: 16px;
    border-radius: 8px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .interest-summary .label {
    font-size: 14px;
    color: #6c757d;
    font-weight: 500;
  }

  .interest-summary .value {
    font-size: 20px;
    font-weight: 700;
    color: #007bff;
  }

  .interest-table {
    width: 100%;
    border-collapse: collapse;
    background: white;
  }

  .interest-table thead {
    background: #f8f9fa;
  }

  .interest-table th {
    padding: 12px;
    text-align: left;
    font-size: 14px;
    font-weight: 600;
    color: #495057;
    border-bottom: 2px solid #dee2e6;
  }

  .interest-table td {
    padding: 12px;
    font-size: 14px;
    color: #495057;
    border-bottom: 1px solid #f0f0f0;
  }

  .interest-table tr:hover {
    background: #f8f9fa;
  }

  .interest-table .amount {
    color: #007bff;
    font-weight: 600;
  }

  .interest-table .cumulative {
    color: #28a745;
    font-weight: 600;
  }

  /* 물건 정보 테이블 */
  .property-info-table {
    width: 100%;
    border-collapse: collapse;
  }

  .property-info-table th,
  .property-info-table td {
    padding: 16px;
    border: 1px solid #e9ecef;
    text-align: left;
  }

  .property-info-table th {
    background: #f8f9fa;
    font-weight: 600;
    color: #495057;
    width: 30%;
  }

  .property-info-table td {
    color: #212529;
  }

  .property-info-table tr:hover {
    background: #f8f9fa;
  }

  /* Login Page (로그인 페이지) */
  .login-container {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    padding: 20px;
  }

  .login-box {
    background: white;
    border-radius: 16px;
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
    padding: 48px 40px;
    width: 100%;
    max-width: 420px;
  }

  .login-header {
    text-align: center;
    margin-bottom: 32px;
  }

  .login-logo {
    font-size: 64px;
    margin-bottom: 16px;
  }

  .login-title {
    font-size: 32px;
    font-weight: 700;
    color: #212529;
    margin: 0 0 8px 0;
  }

  .login-subtitle {
    font-size: 16px;
    color: #6c757d;
    margin: 0;
  }

  .login-form {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .login-form.shake {
    animation: shake 0.5s;
  }

  @keyframes shake {
    0%, 100% { transform: translateX(0); }
    10%, 30%, 50%, 70%, 90% { transform: translateX(-10px); }
    20%, 40%, 60%, 80% { transform: translateX(10px); }
  }

  .form-group {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .form-group label {
    font-size: 14px;
    font-weight: 600;
    color: #495057;
  }

  .form-group input {
    padding: 14px 16px;
    border: 2px solid #e9ecef;
    border-radius: 8px;
    font-size: 15px;
    transition: all 0.2s;
    outline: none;
  }

  .form-group input:focus {
    border-color: #667eea;
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
  }

  .form-group input::placeholder {
    color: #adb5bd;
  }

  .login-error {
    background: #f8d7da;
    color: #721c24;
    padding: 12px 16px;
    border-radius: 8px;
    font-size: 14px;
    border: 1px solid #f5c6cb;
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .login-button {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    border: none;
    padding: 16px;
    border-radius: 8px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s;
    margin-top: 8px;
  }

  .login-button:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 20px rgba(102, 126, 234, 0.3);
  }

  .login-button:active {
    transform: translateY(0);
  }

  .login-button:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }

  .test-account-info {
    margin-top: 24px;
    padding-top: 24px;
    border-top: 1px solid #e9ecef;
  }

  .info-title {
    font-size: 13px;
    font-weight: 600;
    color: #6c757d;
    margin: 0 0 12px 0;
    text-align: center;
  }

  .test-accounts {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .test-account {
    background: #f8f9fa;
    padding: 10px 12px;
    border-radius: 6px;
    font-size: 13px;
    color: #495057;
    text-align: center;
  }

  .test-account strong {
    color: #667eea;
    font-weight: 600;
  }

  /* 반응형 */
  @media (max-width: 768px) {
    .investment-list {
      grid-template-columns: 1fr;
    }

    .investment-list-title {
      font-size: 24px;
    }

    .investment-card {
      max-width: 100%;
    }

    .investment-detail {
      padding: 20px;
    }

    .investment-top-section {
      grid-template-columns: 1fr;
      gap: 24px;
    }

    .basic-info .investment-title {
      font-size: 24px;
    }

    .investment-info-cards {
      grid-template-columns: 1fr;
    }

    .financial-cards {
      grid-template-columns: 1fr;
    }

    .interest-summary {
      grid-template-columns: 1fr;
    }

    .gallery-main {
      height: 250px;
    }

    .gallery-thumbnails img {
      width: 70px;
      height: 60px;
    }

    .tab-buttons {
      flex-direction: column;
    }

    .tab-btn {
      width: 100%;
      text-align: left;
    }

    .product-top {
      grid-template-columns: 1fr;
    }

    .product-actions {
      grid-template-columns: 1fr;
    }

    .login-box {
      padding: 32px 24px;
    }

    .login-title {
      font-size: 28px;
    }

    .login-logo {
      font-size: 48px;
    }
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    .investment-list {
      grid-template-columns: repeat(2, 1fr);
    }

    .financial-cards {
      grid-template-columns: 1fr;
    }
  }

  /* Registration Document (등기부등본) */
  .registration-document-section {
    background: white;
    padding: 32px;
    border-radius: 12px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  }

  .reg-issue-date {
    margin-bottom: 24px;
    padding: 12px 16px;
    background: #f8f9fa;
    border-left: 4px solid #007bff;
    border-radius: 4px;
    font-size: 14px;
    color: #495057;
  }

  .reg-section {
    margin-bottom: 32px;
    padding-bottom: 32px;
    border-bottom: 1px solid #dee2e6;
  }

  .reg-section:last-child {
    border-bottom: none;
    margin-bottom: 0;
    padding-bottom: 0;
  }

  .reg-section-title {
    font-size: 20px;
    font-weight: 700;
    color: #212529;
    margin-bottom: 16px;
    padding: 12px 16px;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    border-radius: 8px;
  }

  .reg-table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 12px;
    background: white;
    border: 1px solid #dee2e6;
    border-radius: 8px;
    overflow: hidden;
  }

  .reg-table th {
    background: #f8f9fa;
    padding: 12px 16px;
    text-align: left;
    font-weight: 600;
    color: #495057;
    width: 30%;
    border-bottom: 1px solid #dee2e6;
    border-right: 1px solid #dee2e6;
  }

  .reg-table td {
    padding: 12px 16px;
    color: #212529;
    border-bottom: 1px solid #dee2e6;
  }

  .reg-table tr:last-child th,
  .reg-table tr:last-child td {
    border-bottom: none;
  }

  .reg-right-box,
  .reg-restriction-box {
    background: #f8f9fa;
    border: 1px solid #dee2e6;
    border-radius: 8px;
    padding: 16px;
    margin-bottom: 16px;
  }

  .reg-restriction-box {
    background: #fff3cd;
    border-color: #ffc107;
  }

  .reg-right-item,
  .reg-restriction-item {
    padding: 8px 0;
    color: #495057;
    font-size: 14px;
  }

  .reg-restriction-item {
    color: #856404;
  }

  .reg-right-item strong,
  .reg-restriction-item strong {
    display: inline-block;
    min-width: 120px;
    color: #212529;
    font-weight: 600;
  }

  .reg-restriction-item strong {
    color: #856404;
  }

  @media (max-width: 768px) {
    .registration-document-section {
      padding: 20px;
    }

    .reg-section-title {
      font-size: 18px;
      padding: 10px 12px;
    }

    .reg-table {
      font-size: 13px;
    }

    .reg-table th,
    .reg-table td {
      padding: 10px 12px;
    }

    .reg-table th {
      width: 35%;
    }

    .reg-right-box,
    .reg-restriction-box {
      padding: 12px;
    }

    .reg-right-item,
    .reg-restriction-item {
      font-size: 13px;
    }

    .reg-right-item strong,
    .reg-restriction-item strong {
      min-width: 100px;
      font-size: 13px;
    }
  }
`;
