var S=`
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

  /* Investment List (\uD22C\uC790 \uC0C1\uD488 \uBAA9\uB85D) */
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
    content: "\u{1F4CD}";
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

  /* Product List (\uAE30\uC874 \uC0C1\uD488) */
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

  /* \uC0C1\uD488 \uC774\uBBF8\uC9C0 */
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

  /* \uC0C1\uD488 \uC815\uBCF4 */
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

  /* \uD0ED \uBA54\uB274 */
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

  /* \uC0C1\uC138 \uC815\uBCF4 \uD0ED */
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

  /* \uD6C4\uAE30 \uD0ED */
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

  /* Investment Detail Page (\uD22C\uC790 \uC0C1\uD488 \uC0C1\uC138 \uD398\uC774\uC9C0) */
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

  /* \uC0C1\uB2E8 \uC139\uC158 - \uC88C\uC6B0 \uBD84\uD560 */
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

  /* \uAE30\uBCF8 \uC815\uBCF4 */
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

  /* \uD22C\uC790 \uC815\uBCF4 \uCE74\uB4DC */
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

  /* \uC7AC\uBB34 \uC694\uC57D */
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

  /* \uC774\uBBF8\uC9C0 \uAC24\uB7EC\uB9AC */
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

  /* \uD0ED \uC139\uC158 */
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

  /* \uC139\uC158 \uACF5\uD1B5 */
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

  /* \uC0C1\uC138 \uC124\uBA85 */
  .investment-description {
    font-size: 16px;
    line-height: 1.8;
    color: #495057;
    margin: 0;
  }

  /* \uC7AC\uBB34 \uC815\uBCF4 */
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

  /* LTV \uC139\uC158 */
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

  /* \uC6D4\uBCC4 \uC774\uC790 \uC9C0\uAE09 \uB0B4\uC5ED */
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

  /* \uBB3C\uAC74 \uC815\uBCF4 \uD14C\uC774\uBE14 */
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

  /* Login Page (\uB85C\uADF8\uC778 \uD398\uC774\uC9C0) */
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

  /* \uBC18\uC751\uD615 */
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

  /* Registration Document (\uB4F1\uAE30\uBD80\uB4F1\uBCF8) */
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
`;function i(a,t={}){let e=document.createElement(a);return Object.keys(t).forEach(n=>{n==="className"?e.className=t[n]:n==="innerHTML"?e.innerHTML=t[n]:n==="style"&&typeof t[n]=="object"?Object.assign(e.style,t[n]):n==="dataset"?Object.keys(t[n]).forEach(o=>{e.dataset[o]=t[n][o]}):e.setAttribute(n,t[n])}),e}var R="https://abcbond-api.sixman-joseph.workers.dev";function j(){try{let a=localStorage.getItem("widget-state");if(a)return JSON.parse(a).token||null}catch(a){console.warn("Failed to get auth token:",a)}return null}async function T(a,t={}){try{let e=j(),n={"Content-Type":"application/json",...t.headers};e&&(n.Authorization=`Bearer ${e}`);let o=await fetch(`${R}${a}`,{...t,headers:n});if(!o.ok){let s=await o.json().catch(()=>({}));throw new Error(s.message||`HTTP error! status: ${o.status}`)}return await o.json()}catch(e){throw console.error("API call failed:",e),e}}async function E(){try{let a=await T("/user-investments/my");return a.success?a.data:[]}catch(a){throw console.error("Failed to fetch my investments:",a),a}}async function H(a){try{let t=await T(`/investments/${a}`);return t.success?t.data:null}catch(t){throw console.error("Failed to fetch investment detail:",t),t}}async function M(a,t){try{let e=await T("/auth/login",{method:"POST",body:JSON.stringify({username:a,password:t})});return e.success?{token:e.token,user:e.user}:null}catch(e){throw console.error("Login failed:",e),e}}var f=class{constructor(t={}){this.props=t,this.onLoginSuccess=t.onLoginSuccess||(()=>{}),this.state=t.state,this.error=null,this.isLoading=!1}render(){let t=i("div",{className:"login-container"}),e=i("div",{className:"login-box"}),n=i("div",{className:"login-header"});n.innerHTML=`
      <div class="login-logo">\u{1F3E2}</div>
      <h1 class="login-title">ABC Bond</h1>
      <p class="login-subtitle">\uD22C\uC790 \uAD00\uB9AC \uC2DC\uC2A4\uD15C</p>
    `,e.appendChild(n);let o=this.renderLoginForm();return e.appendChild(o),t.appendChild(e),t}renderLoginForm(){let t=i("form",{className:"login-form"}),e=i("div",{className:"login-error",style:"display: none;"});t.appendChild(e);let n=i("div",{className:"form-group"});n.innerHTML=`
      <label for="username">\uC544\uC774\uB514</label>
      <input 
        type="text" 
        id="username" 
        name="username" 
        placeholder="\uC544\uC774\uB514\uB97C \uC785\uB825\uD558\uC138\uC694"
        autocomplete="username"
        required
      >
    `,t.appendChild(n);let o=i("div",{className:"form-group"});o.innerHTML=`
      <label for="password">\uBE44\uBC00\uBC88\uD638</label>
      <input 
        type="password" 
        id="password" 
        name="password" 
        placeholder="\uBE44\uBC00\uBC88\uD638\uB97C \uC785\uB825\uD558\uC138\uC694"
        autocomplete="current-password"
        required
      >
    `,t.appendChild(o);let r=i("button",{type:"submit",className:"login-button"});r.innerHTML="\uB85C\uADF8\uC778",t.appendChild(r);let s=i("div",{className:"test-account-info"});return s.innerHTML=`
      <p class="info-title">\uD14C\uC2A4\uD2B8 \uACC4\uC815</p>
      <div class="test-accounts">
        <div class="test-account">
          <strong>user1</strong> / 1234 (\uD22C\uC790 3\uAC74)
        </div>
        <div class="test-account">
          <strong>user2</strong> / 1234 (\uD22C\uC790 2\uAC74)
        </div>
        <div class="test-account">
          <strong>admin</strong> / admin (\uC804\uCCB4 \uD22C\uC790)
        </div>
      </div>
    `,t.appendChild(s),t.addEventListener("submit",async l=>{l.preventDefault(),await this.handleLogin(t,e,r)}),t}async handleLogin(t,e,n){if(this.isLoading)return;let o=new FormData(t),r=o.get("username"),s=o.get("password");if(!r||!s){this.showError(e,"\uC544\uC774\uB514\uC640 \uBE44\uBC00\uBC88\uD638\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694.");return}this.isLoading=!0,n.disabled=!0,n.innerHTML="\uB85C\uADF8\uC778 \uC911...",e.style.display="none";try{let l=await M(r,s);l?this.onLoginSuccess(l):this.showError(e,"\uC544\uC774\uB514 \uB610\uB294 \uBE44\uBC00\uBC88\uD638\uAC00 \uC62C\uBC14\uB974\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.")}catch(l){console.error("Login error:",l),this.showError(e,"\uB85C\uADF8\uC778 \uC911 \uC624\uB958\uAC00 \uBC1C\uC0DD\uD588\uC2B5\uB2C8\uB2E4. \uB2E4\uC2DC \uC2DC\uB3C4\uD574\uC8FC\uC138\uC694.")}finally{this.isLoading=!1,n.disabled=!1,n.innerHTML="\uB85C\uADF8\uC778"}}showError(t,e){t.innerHTML=`\u26A0\uFE0F ${e}`,t.style.display="block";let n=t.parentElement;n.classList.add("shake"),setTimeout(()=>{n.classList.remove("shake")},500)}};var m=class{constructor(t={}){this.props=t,this.investments=[],this.onInvestmentClick=t.onInvestmentClick||(()=>{}),this.state=t.state}async loadInvestments(){try{let t=await E();return this.investments=t.map(e=>({id:e.investment_id,name:e.name,location:e.location,investedAmount:e.invested_amount,expectedReturn:e.expected_return,status:e.status,image:e.image||"https://via.placeholder.com/400x300?text=No+Image",userInvestmentId:e.id})),this.investments}catch(t){throw console.error("Failed to load investments:",t),t}}render(){let t=i("div",{className:"investment-list-container"});return this.loadInvestments().then(()=>{t.innerHTML="";let e=this.renderInvestmentList();t.appendChild(e)}).catch(e=>{t.innerHTML="";let n=i("div",{className:"widget-error",innerHTML:`\uD22C\uC790 \uC0C1\uD488\uC744 \uBD88\uB7EC\uC624\uB294\uB370 \uC2E4\uD328\uD588\uC2B5\uB2C8\uB2E4: ${e.message}`});t.appendChild(n)}),t}renderInvestmentList(){let t=i("div",{className:"investment-wrapper"}),e=i("div",{className:"investment-list-header"}),n=i("h2",{className:"investment-list-title",innerHTML:"\uB0B4 \uD22C\uC790 \uD604\uD669"});if(e.appendChild(n),this.state&&this.state.getUser()){let r=this.state.getUser(),s=i("div",{className:"user-info"});s.innerHTML=`
        <span class="user-name">${r.name}\uB2D8</span>
        <button class="logout-button">\uB85C\uADF8\uC544\uC6C3</button>
      `,s.querySelector(".logout-button").addEventListener("click",()=>{confirm("\uB85C\uADF8\uC544\uC6C3 \uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?")&&this.state.logout()}),e.appendChild(s)}t.appendChild(e);let o=i("div",{className:"investment-list"});return this.investments.forEach(r=>{let s=this.renderInvestmentCard(r);o.appendChild(s)}),t.appendChild(o),t}renderInvestmentCard(t){let e=i("div",{className:"investment-card"});return e.innerHTML=`
      <div class="investment-image">
        <img src="${t.image}" alt="${t.name}">
        <span class="investment-status ${t.status}">${t.status==="active"?"\uD22C\uC790 \uC911":"\uC885\uB8CC"}</span>
      </div>
      <div class="investment-info">
        <h3 class="investment-name">${t.name}</h3>
        <p class="investment-location">${t.location}</p>
        <div class="investment-amount">
          <span class="label">\uD22C\uC790 \uAE08\uC561</span>
          <span class="value">${t.investedAmount.toLocaleString("ko-KR")}\uC6D0</span>
        </div>
        <div class="investment-return">
          <span class="label">\uC608\uC0C1 \uC218\uC775\uB960</span>
          <span class="value return-rate">${t.expectedReturn}%</span>
        </div>
      </div>
    `,e.addEventListener("click",()=>{this.onInvestmentClick(t)}),e}};var u=class{constructor(t={}){this.investmentId=t.investmentId,this.investment=null,this.state=t.state,this.onBack=t.onBack||(()=>{}),this.currentImageIndex=0,this.currentTab="detail"}async loadInvestment(){try{return this.investment=await H(this.investmentId),this.investment}catch(t){throw console.error("Failed to load investment:",t),t}}render(){let t=i("div",{className:"investment-detail-container"});return this.loadInvestment().then(()=>{t.innerHTML="",t.appendChild(this.renderContent())}).catch(e=>{t.innerHTML="";let n=i("div",{className:"widget-error",innerHTML:`\uD22C\uC790 \uC0C1\uD488 \uC815\uBCF4\uB97C \uBD88\uB7EC\uC624\uB294\uB370 \uC2E4\uD328\uD588\uC2B5\uB2C8\uB2E4: ${e.message}`});t.appendChild(n)}),t}renderContent(){let t=i("div",{className:"investment-detail"}),e=i("button",{className:"back-button",innerHTML:"\u2190 \uBAA9\uB85D\uC73C\uB85C"});return e.addEventListener("click",()=>this.onBack()),t.appendChild(e),t.appendChild(this.renderTopSection()),t.appendChild(this.renderTabSection()),t}renderTopSection(){let t=i("div",{className:"investment-top-section"}),e=i("div",{className:"top-left"});e.appendChild(this.renderImageGallery()),t.appendChild(e);let n=i("div",{className:"top-right"});return n.appendChild(this.renderBasicInfo()),n.appendChild(this.renderInvestmentInfo()),n.appendChild(this.renderFinancialSummary()),t.appendChild(n),t}renderBasicInfo(){let t=i("div",{className:"basic-info"}),e=i("h1",{className:"investment-title",innerHTML:this.investment.name});t.appendChild(e);let n=i("p",{className:"investment-address",innerHTML:`\u{1F4CD} ${this.investment.address}`});return t.appendChild(n),t}renderInvestmentInfo(){let t=i("div",{className:"investment-info-cards"});return[{label:"\uB0B4 \uD22C\uC790\uAE08",value:`${this.investment.investedAmount.toLocaleString("ko-KR")}\uC6D0`,className:"investment-amount"},{label:"\uC608\uC0C1 \uC218\uC775\uB960",value:`${this.investment.expectedReturn}%`,className:"expected-return"}].forEach(n=>{let o=i("div",{className:`info-card ${n.className}`});o.innerHTML=`
        <div class="card-label">${n.label}</div>
        <div class="card-value">${n.value}</div>
      `,t.appendChild(o)}),t}renderFinancialSummary(){let t=i("div",{className:"financial-summary"}),e=i("div",{className:"summary-item"});e.innerHTML=`
      <span class="label">KB \uC2DC\uC138</span>
      <span class="value">${this.investment.kbValuation.toLocaleString("ko-KR")}\uC6D0</span>
    `,t.appendChild(e);let n=i("div",{className:"summary-item"});n.innerHTML=`
      <span class="label">\uC120\uC21C\uC704 \uB300\uCD9C\uAE08</span>
      <span class="value">${this.investment.seniorLoan.toLocaleString("ko-KR")}\uC6D0</span>
    `,t.appendChild(n);let o=i("div",{className:"ltv-compact"});return o.innerHTML=`
      <div class="ltv-header">
        <span class="label">LTV \uBE44\uC728</span>
        <span class="value">${this.investment.ltv}%</span>
      </div>
      <div class="ltv-bar-container">
        <div class="ltv-bar-fill" style="width: ${this.investment.ltv}%">
          <span class="ltv-label">${this.investment.ltv}%</span>
        </div>
      </div>
    `,t.appendChild(o),t}renderTabSection(){let t=i("div",{className:"investment-tab-section"}),e=i("div",{className:"tab-buttons"}),n=i("button",{className:`tab-btn ${this.currentTab==="detail"?"active":""}`,innerHTML:"\uC0C1\uC138\uC815\uBCF4 / \uBB3C\uAC74\uC815\uBCF4"});n.addEventListener("click",()=>this.switchTab("detail",t));let o=i("button",{className:`tab-btn ${this.currentTab==="interest"?"active":""}`,innerHTML:"\uC6D4\uBCC4 \uC774\uC790 \uC9C0\uAE09 \uB0B4\uC5ED"});o.addEventListener("click",()=>this.switchTab("interest",t));let r=i("button",{className:`tab-btn ${this.currentTab==="registration"?"active":""}`,innerHTML:"\uB4F1\uAE30\uBD80\uB4F1\uBCF8"});r.addEventListener("click",()=>this.switchTab("registration",t)),e.appendChild(n),e.appendChild(o),e.appendChild(r),t.appendChild(e);let s=i("div",{className:"tab-content"});return s.appendChild(this.renderTabContent()),t.appendChild(s),t}switchTab(t,e){this.currentTab=t;let n=e.querySelectorAll(".tab-btn");n.forEach(s=>s.classList.remove("active")),n[t==="detail"?0:t==="interest"?1:2].classList.add("active");let r=e.querySelector(".tab-content");r.innerHTML="",r.appendChild(this.renderTabContent())}renderTabContent(){let t=i("div",{className:"tab-content-container"});return this.currentTab==="detail"?(t.appendChild(this.renderDescription()),t.appendChild(this.renderPropertyInfo())):this.currentTab==="interest"?t.appendChild(this.renderMonthlyInterest()):this.currentTab==="registration"&&t.appendChild(this.renderRegistrationDocument()),t}renderImageGallery(){let t=i("div",{className:"investment-gallery"}),e=i("div",{className:"gallery-main"}),n=i("img",{src:this.investment.images[this.currentImageIndex],alt:this.investment.name});e.appendChild(n),t.appendChild(e);let o=i("div",{className:"gallery-thumbnails"});return this.investment.images.forEach((r,s)=>{let l=i("img",{src:r,alt:`${this.investment.name} ${s+1}`,className:s===this.currentImageIndex?"active":""});l.addEventListener("click",()=>{this.currentImageIndex=s,n.src=r,o.querySelectorAll("img").forEach(c=>c.classList.remove("active")),l.classList.add("active")}),o.appendChild(l)}),t.appendChild(o),t}renderDescription(){let t=i("div",{className:"investment-section"}),e=i("h2",{className:"section-title",innerHTML:"\uC0C1\uC138 \uC124\uBA85"});t.appendChild(e);let n=i("p",{className:"investment-description",innerHTML:this.investment.description});return t.appendChild(n),t}renderMonthlyInterest(){let t=i("div",{className:"investment-section"}),e=i("h2",{className:"section-title",innerHTML:"\uC6D4\uBCC4 \uC774\uC790 \uC9C0\uAE09 \uB0B4\uC5ED"});t.appendChild(e);let n=this.investment.monthlyInterest.reduce((c,h)=>c+h.amount,0),o=i("div",{className:"interest-summary"});o.innerHTML=`
      <div class="summary-item">
        <span class="label">\uCD1D \uC218\uB839 \uC774\uC790</span>
        <span class="value">${n.toLocaleString("ko-KR")}\uC6D0</span>
      </div>
      <div class="summary-item">
        <span class="label">\uC9C0\uAE09 \uD69F\uC218</span>
        <span class="value">${this.investment.monthlyInterest.length}\uD68C</span>
      </div>
    `,t.appendChild(o);let r=i("table",{className:"interest-table"});r.innerHTML=`
      <thead>
        <tr>
          <th>\uC9C0\uAE09\uC6D4</th>
          <th>\uC9C0\uAE09\uC561</th>
          <th>\uB204\uC801\uC561</th>
        </tr>
      </thead>
      <tbody>
      </tbody>
    `;let s=r.querySelector("tbody"),l=0;return this.investment.monthlyInterest.forEach(c=>{l+=c.amount;let h=i("tr");h.innerHTML=`
        <td>${c.month}</td>
        <td class="amount">${c.amount.toLocaleString("ko-KR")}\uC6D0</td>
        <td class="cumulative">${l.toLocaleString("ko-KR")}\uC6D0</td>
      `,s.appendChild(h)}),t.appendChild(r),t}renderPropertyInfo(){let t=i("div",{className:"investment-section"}),e=i("h2",{className:"section-title",innerHTML:"\uBB3C\uAC74 \uC815\uBCF4"});t.appendChild(e);let n=i("table",{className:"property-info-table"}),o=this.investment.details,r=[["\uAC74\uBB3C \uC720\uD615",o.buildingType],["\uC804\uCCB4 \uC138\uB300\uC218",o.totalUnits+"\uC138\uB300"],["\uC900\uACF5\uC5F0\uB3C4",o.buildYear+"\uB144"],["\uC804\uC6A9\uBA74\uC801",o.area],["\uCE35\uC218",o.floor],["\uBC29\uD5A5",o.direction],["\uC8FC\uCC28",o.parking],["\uB09C\uBC29",o.heating]],s=i("tbody");return r.forEach(([l,c])=>{let h=i("tr");h.innerHTML=`
        <th>${l}</th>
        <td>${c}</td>
      `,s.appendChild(h)}),n.appendChild(s),t.appendChild(n),t}renderRegistrationDocument(){let t=i("div",{className:"registration-document-section"}),e=i("h2",{className:"section-title",innerHTML:"\uB4F1\uAE30\uBD80\uB4F1\uBCF8"});t.appendChild(e);let n=this.investment.registrationDocument,o=i("div",{className:"reg-issue-date"});o.innerHTML=`<strong>\uBC1C\uAE09\uC77C\uC790:</strong> ${n.issueDate}`,t.appendChild(o);let r=i("div",{className:"reg-section"}),s=i("h3",{className:"reg-section-title",innerHTML:"\uD45C\uC81C\uBD80 (\uBB3C\uAC74 \uC815\uBCF4)"});r.appendChild(s);let l=i("table",{className:"reg-table"}),c=[["\uC18C\uC7AC\uC9C0",n.propertyInfo.address],["\uAC74\uBB3C\uBA85",n.propertyInfo.buildingName],["\uAC74\uBB3C \uC720\uD615",n.propertyInfo.buildingType],["\uAD6C\uC870",n.propertyInfo.structure],["\uCE35\uC218",n.propertyInfo.floors],["\uC804\uCCB4 \uBA74\uC801",n.propertyInfo.totalArea],["\uC900\uACF5\uC77C",n.propertyInfo.buildDate]],h=i("tbody");c.forEach(([p,g])=>{let d=i("tr");d.innerHTML=`
        <th>${p}</th>
        <td>${g}</td>
      `,h.appendChild(d)}),l.appendChild(h),r.appendChild(l),t.appendChild(r);let L=i("div",{className:"reg-section"}),$=i("h3",{className:"reg-section-title",innerHTML:"\uAC11\uAD6C (\uC18C\uC720\uAD8C \uC815\uBCF4)"});L.appendChild($);let N=i("table",{className:"reg-table"}),P=[["\uC18C\uC720\uC790",n.ownershipInfo.owner],["\uB4F1\uAE30\uC77C\uC790",n.ownershipInfo.registrationDate],["\uB4F1\uAE30\uC6D0\uC778",n.ownershipInfo.registrationCause],["\uC9C0\uBD84",n.ownershipInfo.shareRatio]],z=i("tbody");if(P.forEach(([p,g])=>{let d=i("tr");d.innerHTML=`
        <th>${p}</th>
        <td>${g}</td>
      `,z.appendChild(d)}),N.appendChild(z),L.appendChild(N),t.appendChild(L),n.rightsInfo&&n.rightsInfo.length>0){let p=i("div",{className:"reg-section"}),g=i("h3",{className:"reg-section-title",innerHTML:"\uAD8C\uB9AC\uC0AC\uD56D (\uAC11\uAD6C)"});p.appendChild(g),n.rightsInfo.forEach((d,k)=>{let x=i("div",{className:"reg-right-box"});x.innerHTML=`
          <div class="reg-right-item"><strong>\uC21C\uC704\uBC88\uD638:</strong> ${k+1}</div>
          <div class="reg-right-item"><strong>\uAD8C\uB9AC\uC885\uB958:</strong> ${d.type}</div>
          <div class="reg-right-item"><strong>\uAD8C\uB9AC\uC790:</strong> ${d.holder}</div>
          <div class="reg-right-item"><strong>\uB4F1\uAE30\uC77C\uC790:</strong> ${d.registrationDate}</div>
          <div class="reg-right-item"><strong>\uB4F1\uAE30\uBAA9\uC801:</strong> ${d.purpose}</div>
        `,p.appendChild(x)}),t.appendChild(p)}if(n.restrictionsInfo&&n.restrictionsInfo.length>0){let p=i("div",{className:"reg-section"}),g=i("h3",{className:"reg-section-title",innerHTML:"\uC744\uAD6C (\uC81C\uD55C\uC0AC\uD56D)"});p.appendChild(g),n.restrictionsInfo.forEach((d,k)=>{let x=i("div",{className:"reg-restriction-box"});x.innerHTML=`
          <div class="reg-restriction-item"><strong>\uC21C\uC704\uBC88\uD638:</strong> ${k+1}</div>
          <div class="reg-restriction-item"><strong>\uAD8C\uB9AC\uC885\uB958:</strong> ${d.type}</div>
          <div class="reg-restriction-item"><strong>\uAD8C\uB9AC\uC790:</strong> ${d.holder}</div>
          <div class="reg-restriction-item"><strong>\uCC44\uAD8C\uCD5C\uACE0\uC561:</strong> ${d.amount.toLocaleString()}\uC6D0</div>
          <div class="reg-restriction-item"><strong>\uB4F1\uAE30\uC77C\uC790:</strong> ${d.registrationDate}</div>
          <div class="reg-restriction-item"><strong>\uB4F1\uAE30\uBAA9\uC801:</strong> ${d.purpose}</div>
        `,p.appendChild(x)}),t.appendChild(p)}return t}};var b=class{constructor(t={}){this.routes=t,this.currentRoute=null,this.currentPath=null,this.pathParams={},this.isNavigating=!1,this.loadingTimeout=null,this.beforeNavigate=null,this.handlePopState=this.handlePopState.bind(this),window.addEventListener("popstate",this.handlePopState),this.handleHashChange=this.handleHashChange.bind(this),window.addEventListener("hashchange",this.handleHashChange)}addRoute(t,e){this.routes[t]=e}addRoutes(t){this.routes={...this.routes,...t}}getHash(){return window.location.hash.slice(1)||"/"}extractParams(t,e){let n=t.split("/"),o=e.split("/");if(n.length!==o.length)return null;let r={};for(let s=0;s<n.length;s++)if(n[s].startsWith(":")){let l=n[s].slice(1);r[l]=decodeURIComponent(o[s])}else if(n[s]!==o[s])return null;return r}matchRoute(t){if(this.routes[t])return{handler:this.routes[t],params:{}};for(let e in this.routes){if(e==="*")continue;let n=this.extractParams(e,t);if(n!==null)return{handler:this.routes[e],params:n}}return this.routes["*"]?{handler:this.routes["*"],params:{}}:null}async handleRoute(){if(this.isNavigating)return;let t=this.getHash(),e=this.matchRoute(t);if(!e){console.warn("No route handler found for:",t);return}this.isNavigating=!0;try{this.loadingTimeout=setTimeout(()=>{this.showLoadingIndicator()},1e3),this.beforeNavigate&&await this.beforeNavigate(t,e.params),clearTimeout(this.loadingTimeout),this.hideLoadingIndicator(),this.currentRoute=t,this.currentPath=t,this.pathParams=e.params,e.handler(e.params)}catch(n){console.error("Route handling error:",n),clearTimeout(this.loadingTimeout),this.hideLoadingIndicator()}finally{this.isNavigating=!1}}handlePopState(){this.handleRoute()}handleHashChange(){this.handleRoute()}showLoadingIndicator(){if(document.querySelector(".router-loading-indicator"))return;let e=document.createElement("div");e.className="router-loading-indicator",e.innerHTML='<div class="spinner"></div>',document.body.appendChild(e)}hideLoadingIndicator(){let t=document.querySelector(".router-loading-indicator");t&&t.remove()}setBeforeNavigate(t){this.beforeNavigate=t}navigate(t,e={}){window.history.pushState(e,"",`#${t}`),this.handleRoute()}redirect(t,e={}){window.history.replaceState(e,"",`#${t}`),this.handleRoute()}back(){window.history.back()}forward(){window.history.forward()}getCurrentRoute(){return{fullPath:this.currentRoute,path:this.currentPath,params:this.pathParams,hash:this.getHash()}}getParam(t){return t?this.pathParams[t]:{...this.pathParams}}isRoute(t){return this.currentPath===t}destroy(){window.removeEventListener("popstate",this.handlePopState),window.removeEventListener("hashchange",this.handleHashChange)}init(){this.handleRoute()}};var v=class{constructor(){this.state={user:null,token:null,currentView:null},this.listeners=new Map}getState(t){return t?this.state[t]:{...this.state}}setState(t){let e={...this.state};this.state={...this.state,...t},Object.keys(t).forEach(n=>{this.notify(n,this.state[n],e[n])}),this.notify("*",this.state,e)}subscribe(t,e){return this.listeners.has(t)||this.listeners.set(t,[]),this.listeners.get(t).push(e),()=>{let n=this.listeners.get(t),o=n.indexOf(e);o>-1&&n.splice(o,1)}}notify(t,e,n){(this.listeners.get(t)||[]).forEach(r=>{r(e,n)})}setUser(t){this.setState({user:t})}getUser(){return this.state.user}isAuthenticated(){return this.state.user!==null}logout(){this.setState({user:null,token:null});try{localStorage.removeItem("widget-state")}catch(t){console.warn("Failed to remove state from localStorage:",t)}this.notify("auth:logout")}setCurrentView(t){this.setState({currentView:t})}reset(){this.state={user:null,token:null,currentView:null},this.notify("*",this.state,{})}saveToStorage(){try{localStorage.setItem("widget-state",JSON.stringify({user:this.state.user,token:this.state.token}))}catch(t){console.warn("Failed to save state to localStorage:",t)}}loadFromStorage(){try{let t=localStorage.getItem("widget-state");if(t){let e=JSON.parse(t);this.setState({user:e.user||null,token:e.token||null})}}catch(t){console.warn("Failed to load state from localStorage:",t)}}},I=null;function y(){return I||(I=new v),I}var w=class{constructor(t,e={}){this.container=t||"#widget-root",this.config=e,this.currentView=null,this.state=y(),this.router=new b,this.setupRoutes(),this.init()}setupRoutes(){this.router.addRoutes({"/":()=>this.showInvestmentList(),"/investment/:id":t=>this.showInvestmentDetail(t),"*":()=>this.showInvestmentList()})}init(){if(console.log("Widget initialized with config:",this.config),!this.getContainer()){console.error("Container not found:",this.container);return}if(this.config.persistState!==!1&&this.state.loadFromStorage(),this.config.persistState!==!1&&this.state.subscribe("user",()=>{this.state.saveToStorage()}),this.state.subscribe("auth:logout",()=>{this.showLogin()}),this.router.setBeforeNavigate(async(e,n)=>{if(!this.state.isAuthenticated()){this.showLogin();return}await this.preloadPage(e,n)}),!this.state.isAuthenticated()){this.showLogin();return}this.router.init()}async preloadPage(t,e){if(t==="/")await new m({state:this.state}).loadInvestments();else if(t.startsWith("/investment/")){let n=parseInt(e.id);n&&await new u({investmentId:n,state:this.state}).loadInvestment()}}getContainer(){return typeof this.container=="string"?document.querySelector(this.container):this.container}showLogin(){let t=this.getContainer();if(!t)return;this.state.setCurrentView("login");let n=new f({state:this.state,onLoginSuccess:o=>{this.state.setState({user:o.user,token:o.token}),this.config.persistState!==!1&&this.state.saveToStorage(),this.router.currentRoute?this.router.navigate("/"):this.router.init()}}).render();this.transitionToPage(t,n)}showInvestmentList(){let t=this.getContainer();if(!t)return;this.state.setCurrentView("investment-list");let n=new m({state:this.state,onInvestmentClick:o=>{this.router.navigate(`/investment/${o.id}`)}}).render();this.transitionToPage(t,n)}showInvestmentDetail(t){let e=this.getContainer();if(!e)return;let n=parseInt(t.id);if(!n){console.error("Investment ID is required"),this.router.navigate("/");return}this.state.setCurrentView("investment-detail");let r=new u({investmentId:n,state:this.state,onBack:()=>{this.router.back()}}).render();this.transitionToPage(e,r)}transitionToPage(t,e){let n=t.firstElementChild;e.style.opacity="0",e.style.transition="opacity 0.05s ease-in-out",n?(n.style.transition="opacity 0.05s ease-in-out",n.style.opacity="0",setTimeout(()=>{t.innerHTML="",t.appendChild(e),setTimeout(()=>{e.style.opacity="1"},10)},50)):(t.appendChild(e),setTimeout(()=>{e.style.opacity="1"},10))}getCurrentRoute(){return this.router.getCurrentRoute()}navigate(t,e={}){this.router.navigate(t,e)}getState(t){return this.state.getState(t)}destroy(){this.router.destroy(),this.config.resetOnDestroy&&this.state.reset();let t=this.getContainer();t&&(t.innerHTML=""),this.currentView=null}};var C=class a{constructor(t={}){this.props=t,this.title=t.title||"",this.content=t.content||"",this.onClose=t.onClose||(()=>{}),this.overlay=null}render(){this.overlay=i("div",{className:"widget-modal-overlay"});let t=i("div",{className:"widget-modal"}),e=i("button",{className:"widget-modal-close",innerHTML:"\xD7"});e.addEventListener("click",()=>this.close());let n=i("h2",{innerHTML:this.title,style:"margin-top: 0;"}),o=i("div",{className:"widget-modal-content"});return typeof this.content=="string"?o.innerHTML=this.content:o.appendChild(this.content),t.appendChild(e),this.title&&t.appendChild(n),t.appendChild(o),this.overlay.appendChild(t),this.overlay.addEventListener("click",r=>{r.target===this.overlay&&this.close()}),this.handleEscKey=r=>{r.key==="Escape"&&this.close()},document.addEventListener("keydown",this.handleEscKey),this.overlay}open(){let t=this.render();document.body.appendChild(t)}close(){this.overlay&&this.overlay.parentNode&&this.overlay.parentNode.removeChild(this.overlay),document.removeEventListener("keydown",this.handleEscKey),this.onClose()}static show(t){let e=new a(t);return e.open(),e}};function D(){let a="pages-template-styles";if(document.getElementById(a))return;let t=document.createElement("style");t.id=a,t.textContent=S,document.head.appendChild(t)}typeof window<"u"&&(D(),window.PagesTemplate={Widget:w,Router:b,State:v,getState:y,components:{LoginPage:f,IndexPage:m,InvestmentPage:u,Modal:C}},window.Widget=w,console.log("Pages Template loaded."));export{m as IndexPage,u as InvestmentPage,f as LoginPage,C as Modal,b as Router,v as State,w as Widget,y as getState};
//# sourceMappingURL=abcbond-widget.esm.js.map
