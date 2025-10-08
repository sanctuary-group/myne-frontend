// ===== MOCK DATA =====
// 友だちデータ
const MOCK_FRIENDS = [
  { id: 1, name: '田中太郎', lineId: 'U001', tags: [1, 3], registeredAt: '2024-01-15', memo: '製品Aに興味あり', bookmarked: true, readStatus: 'unread' },
  { id: 2, name: '鈴木花子', lineId: 'U002', tags: [2], registeredAt: '2024-01-14', memo: '', bookmarked: false, readStatus: 'read' },
  { id: 3, name: '佐藤次郎', lineId: 'U003', tags: [1, 2], registeredAt: '2024-01-13', memo: '月次レポート希望', bookmarked: true, readStatus: 'unread' },
  { id: 4, name: '高橋美咲', lineId: 'U004', tags: [], registeredAt: '2024-01-12', memo: '', bookmarked: false, readStatus: 'read' },
  { id: 5, name: '伊藤健一', lineId: 'U005', tags: [3], registeredAt: '2024-01-11', memo: '', bookmarked: false, readStatus: 'read' },
  { id: 6, name: '渡辺さくら', lineId: 'U006', tags: [1], registeredAt: '2024-01-10', memo: 'VIP対応', bookmarked: true, readStatus: 'unread' },
  { id: 7, name: '山本太一', lineId: 'U007', tags: [2, 3], registeredAt: '2024-01-09', memo: '', bookmarked: false, readStatus: 'read' },
  { id: 8, name: '中村結衣', lineId: 'U008', tags: [], registeredAt: '2024-01-08', memo: '', bookmarked: false, readStatus: 'read' },
  { id: 9, name: '小林大輔', lineId: 'U009', tags: [1], registeredAt: '2024-01-07', memo: '請求書発行済み', bookmarked: false, readStatus: 'read' },
  { id: 10, name: '加藤愛', lineId: 'U010', tags: [3], registeredAt: '2024-01-06', memo: '', bookmarked: false, readStatus: 'unread' },
  { id: 11, name: '吉田悠斗', lineId: 'U011', tags: [2], registeredAt: '2024-01-05', memo: '', bookmarked: false, readStatus: 'read' },
  { id: 12, name: '山田陽菜', lineId: 'U012', tags: [], registeredAt: '2024-01-04', memo: '', bookmarked: false, readStatus: 'read' },
  { id: 13, name: '佐々木蓮', lineId: 'U013', tags: [1, 2], registeredAt: '2024-01-03', memo: '次回フォロー: 2/1', bookmarked: true, readStatus: 'unread' },
  { id: 14, name: '松本葵', lineId: 'U014', tags: [], registeredAt: '2024-01-02', memo: '', bookmarked: false, readStatus: 'read' },
  { id: 15, name: '井上颯太', lineId: 'U015', tags: [3], registeredAt: '2024-01-01', memo: '', bookmarked: false, readStatus: 'read' }
];

// タグデータ
const MOCK_TAGS = [
  { id: 1, name: 'VIP顧客', color: '#00b900' },
  { id: 2, name: '問い合わせ対応中', color: '#f59e0b' },
  { id: 3, name: '資料送付済み', color: '#3b82f6' },
  { id: 4, name: '要フォローアップ', color: '#ef4444' },
  { id: 5, name: 'キャンペーン参加', color: '#8b5cf6' }
];

// メッセージデータ
const MOCK_MESSAGES = {
  1: [
    { id: 1, sender: 'user', content: 'こんにちは！製品Aについて詳しく教えてください。', timestamp: '2024-01-15 10:30' },
    { id: 2, sender: 'admin', content: 'お問い合わせありがとうございます。製品Aは当社の主力商品で...', timestamp: '2024-01-15 10:35' },
    { id: 3, sender: 'user', content: '価格はいくらですか？', timestamp: '2024-01-15 10:40' },
    { id: 4, sender: 'admin', content: '製品Aの価格は¥9,800です。', timestamp: '2024-01-15 10:42' }
  ],
  2: [
    { id: 1, sender: 'user', content: '配送状況を教えてください', timestamp: '2024-01-14 14:20' },
    { id: 2, sender: 'admin', content: 'ご注文の商品は本日発送いたしました。', timestamp: '2024-01-14 14:25' },
    { id: 3, sender: 'user', content: 'ありがとうございます！', timestamp: '2024-01-14 14:30' }
  ],
  3: [
    { id: 1, sender: 'user', content: '月次レポートをお願いします', timestamp: '2024-01-13 09:00' },
    { id: 2, sender: 'admin', content: '承知いたしました。準備でき次第お送りします。', timestamp: '2024-01-13 09:15' },
    { id: 3, sender: 'user', content: 'いつ頃になりそうですか？', timestamp: '2024-01-13 11:00' }
  ],
  6: [
    { id: 1, sender: 'user', content: 'VIPプランについて教えてください', timestamp: '2024-01-10 15:00' },
    { id: 2, sender: 'admin', content: 'VIPプランは月額¥29,800で...', timestamp: '2024-01-10 15:10' },
    { id: 3, sender: 'user', content: '申し込みたいです', timestamp: '2024-01-10 15:20' }
  ],
  13: [
    { id: 1, sender: 'user', content: '次回の打ち合わせはいつですか？', timestamp: '2024-01-03 10:00' },
    { id: 2, sender: 'admin', content: '2月1日の14時でいかがでしょうか？', timestamp: '2024-01-03 10:15' }
  ]
};

// LocalStorageからデータを読み込むか、初期データを設定
function initializeMockData() {
  if (!localStorage.getItem('mockFriends')) {
    localStorage.setItem('mockFriends', JSON.stringify(MOCK_FRIENDS));
  }
  if (!localStorage.getItem('mockTags')) {
    localStorage.setItem('mockTags', JSON.stringify(MOCK_TAGS));
  }
  if (!localStorage.getItem('mockMessages')) {
    localStorage.setItem('mockMessages', JSON.stringify(MOCK_MESSAGES));
  }
}

// データ取得関数
function getMockFriends() {
  return JSON.parse(localStorage.getItem('mockFriends') || '[]');
}

function getMockTags() {
  return JSON.parse(localStorage.getItem('mockTags') || '[]');
}

function getMockMessages(userId) {
  const allMessages = JSON.parse(localStorage.getItem('mockMessages') || '{}');
  return allMessages[userId] || [];
}

function saveMockFriends(friends) {
  localStorage.setItem('mockFriends', JSON.stringify(friends));
}

function saveMockTags(tags) {
  localStorage.setItem('mockTags', JSON.stringify(tags));
}

function saveMockMessages(messages) {
  localStorage.setItem('mockMessages', JSON.stringify(messages));
}

// Application State
let currentUser = null;
let currentPage = "dashboard";
let currentChatUserId = null;
let currentChatUserName = null;
let userDraftMessages = {}; // Store draft messages per user

// DOM Elements
const loginContainer = document.getElementById("login-container");
const mainApp = document.getElementById("main-app");
const loginForm = document.getElementById("login-form");
const loginBtn = document.getElementById("login-btn");
const errorMessage = document.getElementById("error-message");
const logoutBtn = document.getElementById("logout-btn");
const navItems = document.querySelectorAll(".nav-item");
const pages = document.querySelectorAll(".page");

// Initialize the application
document.addEventListener("DOMContentLoaded", function () {
  initializeApp();
});

function initializeApp() {
  // モックデータを初期化
  initializeMockData();

  // 【開発用】ログインをスキップしてダッシュボードに直接遷移
  // ログインUIは残しているが、実際にはスキップされる

  // Check if user is already logged in (simplified check)
  // const isLoggedIn = sessionStorage.getItem("isLoggedIn") === "true";

  // if (isLoggedIn) {
  //   showMainApp();
  // } else {
  //   showLoginScreen();
  // }

  // 開発用: 常にログイン済みとして扱う
  currentUser = { email: "dev@example.com" };
  sessionStorage.setItem("isLoggedIn", "true");
  sessionStorage.setItem("userEmail", "dev@example.com");
  showMainApp();

  setupEventListeners();
}

function setupEventListeners() {
  // Login form submission
  loginForm.addEventListener("submit", handleLogin);

  // Logout button
  logoutBtn.addEventListener("click", handleLogout);

  // Navigation items
  navItems.forEach((item) => {
    item.addEventListener("click", function () {
      const page = this.getAttribute("data-page");
      navigateToPage(page);
    });
  });

  // Quick action buttons
  const quickActionBtns = document.querySelectorAll("[data-navigate]");
  quickActionBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      const page = this.getAttribute("data-navigate");
      navigateToPage(page);
    });
  });

  // Back to dashboard buttons
  const backBtns = document.querySelectorAll('[data-navigate="dashboard"]');
  backBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      navigateToPage("dashboard");
    });
  });
}

function handleLogin(e) {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  // Show loading state
  loginBtn.textContent = "ログイン中...";
  loginBtn.disabled = true;
  hideError();

  // Simulate API call
  setTimeout(() => {
    if (email === "admin@example.com" && password === "password") {
      // Successful login
      currentUser = { email: email };
      sessionStorage.setItem("isLoggedIn", "true");
      sessionStorage.setItem("userEmail", email);
      showMainApp();
    } else {
      // Failed login
      showError("メールアドレスまたはパスワードが正しくありません");
    }

    // Reset button state
    loginBtn.textContent = "ログイン";
    loginBtn.disabled = false;
  }, 1000);
}

function handleLogout() {
  currentUser = null;
  sessionStorage.removeItem("isLoggedIn");
  sessionStorage.removeItem("userEmail");
  showLoginScreen();

  // Reset form
  document.getElementById("email").value = "";
  document.getElementById("password").value = "";
  hideError();
}

function showLoginScreen() {
  loginContainer.style.display = "flex";
  mainApp.style.display = "none";
}

function showMainApp() {
  loginContainer.style.display = "none";
  mainApp.style.display = "grid";
  navigateToPage("dashboard");
}

function showError(message) {
  errorMessage.textContent = message;
  errorMessage.style.display = "block";
}

function hideError() {
  errorMessage.style.display = "none";
}

function navigateToPage(pageId) {
  // Update current page
  currentPage = pageId;

  // Hide all pages
  pages.forEach((page) => {
    page.classList.remove("active");
    page.style.display = "none";
  });

  // Show selected page
  const targetPage = document.getElementById(pageId + "-page");
  if (targetPage) {
    targetPage.classList.add("active");
    targetPage.style.display = "block";
  }

  // Update navigation active state
  navItems.forEach((item) => {
    item.classList.remove("active");
  });

  const activeNavItem = document.querySelector(`[data-page="${pageId}"]`);
  if (activeNavItem) {
    activeNavItem.classList.add("active");
  }
}

// Broadcast form functionality
function initializeBroadcastForm() {
  const messageTypeRadios = document.querySelectorAll(
    'input[name="messageType"]'
  );
  const targetRadios = document.querySelectorAll('input[name="target"]');

  // Handle message type changes
  messageTypeRadios.forEach((radio) => {
    radio.addEventListener("change", function () {
      handleMessageTypeChange(this.value);
    });
  });

  // Handle target changes
  targetRadios.forEach((radio) => {
    radio.addEventListener("change", function () {
      handleTargetChange(this.value);
    });
  });

  // Handle delivery timing changes
  const deliveryTimingRadios = document.querySelectorAll('input[name="deliveryTiming"]');
  deliveryTimingRadios.forEach((radio) => {
    radio.addEventListener("change", function () {
      handleBroadcastDeliveryTimingChange(this.value);
    });
  });

  // Reset friend selection state when broadcast page is loaded
  friendSelectionInitialized = false;
  selectedFriends.clear();

  // Hide tag selection area initially
  const tagSelectionArea = document.getElementById('tag-selection-area');
  if (tagSelectionArea) {
    tagSelectionArea.style.display = 'none';
  }

  // Hide scheduled datetime initially
  const scheduledDatetimeGroup = document.getElementById('scheduled-datetime-group');
  if (scheduledDatetimeGroup) {
    scheduledDatetimeGroup.style.display = 'none';
  }

  // Add event listener for broadcast send button
  const sendBtn = document.getElementById('broadcast-send-btn');
  if (sendBtn) {
    // Remove existing listeners
    const newSendBtn = sendBtn.cloneNode(true);
    sendBtn.parentNode.replaceChild(newSendBtn, sendBtn);

    newSendBtn.addEventListener('click', sendBroadcast);
  }
}

// Handle broadcast delivery timing change
function handleBroadcastDeliveryTimingChange(timing) {
  const scheduledDatetimeGroup = document.getElementById('scheduled-datetime-group');

  if (timing === 'scheduled') {
    scheduledDatetimeGroup.style.display = 'block';
  } else {
    scheduledDatetimeGroup.style.display = 'none';
  }
}

function handleMessageTypeChange(type) {
  // Only text messages are supported
  console.log("Message type changed to:", type);
}

function handleTargetChange(target) {
  const tagSelectionArea = document.getElementById('tag-selection-area');

  if (target === 'tags') {
    // タグで絞り込み選択時はタグ選択UIを表示
    tagSelectionArea.style.display = 'block';
    initializeBroadcastTagSelection();
  } else {
    // その他の場合は非表示
    tagSelectionArea.style.display = 'none';
  }

  console.log("Target changed to:", target);
}

// Individual support functionality
function initializeIndividualSupport() {
  const searchInput = document.querySelector(
    "#individual-page .search-box input"
  );

  if (searchInput) {
    searchInput.addEventListener("input", function () {
      filterFriends(this.value);
    });
  }

  // Message buttons
  const messageBtns = document.querySelectorAll(".friend-actions .btn-primary");
  messageBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      const friendItem = this.closest(".friend-item");
      if (friendItem) {
        const friendName = friendItem
          .querySelector(".friend-name")
          .textContent.trim();
        const friendId = friendItem
          .querySelector(".friend-id")
          .textContent.trim();
        const friendAvatar = friendItem
          .querySelector(".friend-avatar")
          .textContent.trim();
        openChat(friendName, friendId, friendAvatar);
      }
    });
  });
}

function filterFriends(searchTerm) {
  // Here you would implement friend filtering logic
  console.log("Filtering friends:", searchTerm);
}

// Settings functionality
function initializeSettings() {
  const saveButtons = document.querySelectorAll("#settings-page .btn-primary");

  saveButtons.forEach((btn) => {
    btn.addEventListener("click", function () {
      // Here you would implement settings save
      console.log("Saving settings...");

      // Show success message (simplified)
      alert("設定を保存しました");
    });
  });
}

// History page functionality
function initializeHistoryPage() {
  const searchInput = document.getElementById("history-search");
  const statusFilter = document.getElementById("history-status-filter");

  if (searchInput) {
    searchInput.addEventListener("input", function () {
      filterHistoryTable();
    });
  }

  if (statusFilter) {
    statusFilter.addEventListener("change", function () {
      filterHistoryTable();
    });
  }

  // Initialize action buttons
  const actionButtons = document.querySelectorAll("#history-table .btn");
  actionButtons.forEach((btn) => {
    btn.addEventListener("click", function (e) {
      e.preventDefault();
      const action = this.textContent.trim();
      const row = this.closest("tr");
      const title = row.querySelector("td:first-child").textContent.trim();

      handleHistoryAction(action, title, row);
    });
  });
}

function filterHistoryTable() {
  const searchTerm = document
    .getElementById("history-search")
    .value.toLowerCase();
  const statusFilter = document.getElementById("history-status-filter").value;

  const rows = document.querySelectorAll("#history-table tbody tr");
  let visibleCount = 0;

  rows.forEach((row) => {
    const title = row
      .querySelector("td:nth-child(1)")
      .textContent.toLowerCase();
    const statusBadge = row.querySelector(".status-badge");
    const status = statusBadge ? statusBadge.textContent : "";

    const matchesSearch = title.includes(searchTerm);
    const matchesStatus = !statusFilter || status === statusFilter;

    if (matchesSearch && matchesStatus) {
      row.style.display = "";
      visibleCount++;
    } else {
      row.style.display = "none";
    }
  });

  // Update pagination info (simplified)
  const paginationInfo = document.querySelector(".pagination-info");
  if (paginationInfo && visibleCount > 0) {
    paginationInfo.textContent = `表示中: ${visibleCount} 件`;
  } else if (paginationInfo) {
    paginationInfo.textContent = "該当する履歴が見つかりません";
  }
}

function handleHistoryAction(action, title, row) {
  switch (action) {
    case "詳細":
      // Show delivery details modal or navigate to details page
      console.log("詳細表示:", title);
      alert(`${title} の詳細を表示します（実装予定）`);
      break;
    case "停止":
      // Stop ongoing delivery
      console.log("停止:", title);
      if (confirm(`${title} の配信を停止しますか？`)) {
        const statusBadge = row.querySelector(".status-badge");
        if (statusBadge) {
          statusBadge.textContent = "停止";
          statusBadge.className = "status-badge status-error";
        }
        // Update action button
        const actionBtn = row.querySelector(".btn-secondary");
        if (actionBtn && actionBtn.textContent.trim() === "停止") {
          actionBtn.textContent = "再開";
          actionBtn.className = "btn btn-primary btn-sm";
        }
      }
      break;
    case "再開":
      // Resume stopped delivery
      console.log("再開:", title);
      if (confirm(`${title} の配信を再開しますか？`)) {
        const statusBadge = row.querySelector(".status-badge");
        if (statusBadge) {
          statusBadge.textContent = "進行中";
          statusBadge.className = "status-badge status-progress";
        }
        // Update action button
        const actionBtn = row.querySelector(".btn-primary");
        if (actionBtn && actionBtn.textContent.trim() === "再開") {
          actionBtn.textContent = "停止";
          actionBtn.className = "btn btn-secondary btn-sm";
        }
      }
      break;
    default:
      console.log("Unknown action:", action);
  }
}

// Statistics animation (optional enhancement)
function animateStats() {
  const statNumbers = document.querySelectorAll(".stat-number");

  statNumbers.forEach((stat) => {
    const finalValue = stat.textContent;
    const isPercent = finalValue.includes("%");
    const numericValue = parseFloat(finalValue.replace(/[,%]/g, ""));

    if (!isNaN(numericValue)) {
      animateNumber(stat, 0, numericValue, isPercent, finalValue.includes(","));
    }
  });
}

function animateNumber(element, start, end, isPercent, hasComma) {
  const duration = 2000;
  const startTime = performance.now();

  function update(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);

    const current = start + (end - start) * easeOutCubic(progress);

    let displayValue = Math.floor(current).toString();

    if (hasComma && current >= 1000) {
      displayValue = current.toLocaleString();
    }

    if (isPercent) {
      displayValue += "%";
    }

    element.textContent = displayValue;

    if (progress < 1) {
      requestAnimationFrame(update);
    }
  }

  requestAnimationFrame(update);
}

function easeOutCubic(t) {
  return 1 - Math.pow(1 - t, 3);
}

// Initialize page-specific functionality when navigating
const originalNavigateToPage = navigateToPage;
navigateToPage = function (pageId) {
  originalNavigateToPage(pageId);

  // Initialize page-specific functionality
  switch (pageId) {
    case "broadcast":
      initializeBroadcastForm();
      break;
    case "step":
      initializeScenarioModal();
      initializeScenarioEditModal();
      break;
    case "data-management":
      initializeTagManagement();
      break;
    case "individual":
      initializeIndividualSupport();
      initializeRightColumnTabs();  // タブ機能を初期化
      initializeBookmarkButton();  // ブックマークボタンを初期化
      initializeBookmarkFilter();  // ブックマークフィルターを初期化
      initializeReadStatusButtons();  // 既読・未読ボタンを初期化
      loadIndividualPageUsers('all');  // APIからユーザーリストを取得して表示（デフォルトはすべて）
      break;
    case "history":
      initializeHistoryPage();
      break;
    case "settings":
      initializeSettings();
      break;
    case "dashboard":
      // Animate stats when dashboard loads
      setTimeout(animateStats, 100);
      break;
  }
};

// Additional utility functions
function formatNumber(num) {
  return num.toLocaleString();
}

function formatDate(date) {
  return new Date(date).toLocaleDateString("ja-JP");
}

function formatDateTime(date) {
  return new Date(date).toLocaleString("ja-JP");
}

// Mobile navigation toggle (for responsive design)
function toggleMobileNav() {
  const sidebar = document.querySelector(".sidebar");
  sidebar.classList.toggle("mobile-open");
}

// Add mobile nav toggle button (if needed)
if (window.innerWidth <= 768) {
  const header = document.querySelector(".app-header .header-content");
  const mobileNavBtn = document.createElement("button");
  mobileNavBtn.innerHTML = "☰";
  mobileNavBtn.className = "mobile-nav-toggle";
  mobileNavBtn.style.cssText = `
    background: transparent;
    border: none;
    color: white;
    font-size: 20px;
    cursor: pointer;
    padding: 5px;
  `;
  mobileNavBtn.addEventListener("click", toggleMobileNav);
  header.insertBefore(mobileNavBtn, header.firstChild);
}

// Handle window resize
window.addEventListener("resize", function () {
  if (window.innerWidth > 768) {
    const sidebar = document.querySelector(".sidebar");
    sidebar.classList.remove("mobile-open");
  }
});

// Form validation helpers
function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

function validateRequired(value) {
  return value && value.trim().length > 0;
}

// Add enhanced form validation to login
const originalHandleLogin = handleLogin;
handleLogin = function (e) {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  // Validate inputs
  if (!validateRequired(email) || !validateRequired(password)) {
    showError("メールアドレスとパスワードを入力してください");
    return;
  }

  if (!validateEmail(email)) {
    showError("有効なメールアドレスを入力してください");
    return;
  }

  originalHandleLogin(e);
};

// Chat functionality
let currentChatUser = null;

function openChat(friendName, friendId, friendAvatar) {
  currentChatUser = { name: friendName, id: friendId, avatar: friendAvatar };

  // Update chat header with friend info
  document.getElementById("chat-user-name").textContent = friendName;
  document.getElementById("chat-user-id").textContent = friendId;
  document.getElementById("chat-avatar").textContent = friendAvatar;

  // Show chat modal
  const chatModal = document.getElementById("chat-modal");
  chatModal.style.display = "flex";

  // Clear input and focus
  const chatInput = document.getElementById("chat-input");
  chatInput.value = "";
  setTimeout(() => chatInput.focus(), 100);

  // Scroll to bottom of messages
  scrollToBottom();

  // Initialize chat event listeners if not already done
  initializeChatEventListeners();
}

function closeChat() {
  const chatModal = document.getElementById("chat-modal");
  chatModal.style.display = "none";
  currentChatUser = null;
}

function initializeChatEventListeners() {
  // Prevent multiple event listeners
  if (window.chatEventListenersInitialized) return;
  window.chatEventListenersInitialized = true;

  // Close button
  document
    .getElementById("chat-close-btn")
    .addEventListener("click", closeChat);

  // Send button
  document
    .getElementById("chat-send-btn")
    .addEventListener("click", sendMessage);

  // Enter key to send (Shift+Enter for new line)
  document
    .getElementById("chat-input")
    .addEventListener("keydown", function (e) {
      if (e.key === "Enter" && !e.shiftKey) {
        e.preventDefault();
        sendMessage();
      }
    });

  // Close modal when clicking outside
  document.getElementById("chat-modal").addEventListener("click", function (e) {
    if (e.target === this) {
      closeChat();
    }
  });

  // Auto-resize textarea
  document.getElementById("chat-input").addEventListener("input", function () {
    this.style.height = "auto";
    this.style.height = Math.min(this.scrollHeight, 120) + "px";
  });
}

// New API-based sendMessage function for individual support
async function sendMessage() {
  console.log('=== sendMessage() called ===');

  const chatInput = document.getElementById("chat-input");
  const messageText = chatInput.value.trim();
  console.log('Message text:', messageText);

  if (!messageText) {
    console.warn('Message is empty');
    return;
  }

  console.log('currentChatUserId:', currentChatUserId);
  console.log('currentChatUserName:', currentChatUserName);

  // Check if we have a current user
  if (!currentChatUserId) {
    console.error('❌ No user selected for chat');
    return;
  }

  // Create message element for immediate display
  const messageDiv = document.createElement("div");
  messageDiv.className = "message message-sent";

  const now = new Date();
  const timeString = now
    .toLocaleString("ja-JP", {
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
    })
    .replace(/\//g, "-");

  messageDiv.innerHTML = `
    <div class="message-content">
      <div class="message-text">${escapeHtml(messageText)}</div>
      <div class="message-time">${timeString}</div>
    </div>
  `;

  // Add to chat messages
  const chatMessages = document.getElementById("chat-messages");
  chatMessages.appendChild(messageDiv);

  // Clear input and reset height
  chatInput.value = "";
  chatInput.style.height = "auto";

  // Scroll to bottom
  if (chatMessages) {
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }

  // Prepare API call
  const apiUrl = `${API_BASE_URL}/send-message`;
  const payload = {
    user_id: currentChatUserId,
    message: messageText
  };

  console.log('API URL:', apiUrl);
  console.log('Payload:', payload);

  // Send message to API
  try {
    console.log('Starting fetch...');

    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload)
    });

    console.log('Response status:', response.status);
    console.log('Response statusText:', response.statusText);
    console.log('Response:', response);

    // Get response text first
    const responseText = await response.text();
    console.log('Response text:', responseText);

    // Try to parse JSON
    let result;
    try {
      result = JSON.parse(responseText);
      console.log('Parsed result:', result);
    } catch (parseError) {
      console.error('❌ JSON parse error:', parseError);
      console.error('Response was:', responseText);
      return;
    }

    if (result.success) {
      console.log('✅ Message saved successfully!');
      console.log('Data:', result.data);
      console.log('Message ID:', result.data.message.id);
      console.log('Task ID:', result.data.task.id);
    } else {
      console.error('❌ Failed to save message');
      console.error('Error message:', result.message);
    }
  } catch (error) {
    console.error('❌ Error sending message:', error);
    console.error('Error message:', error.message);
    console.error('Error stack:', error.stack);
  }
}

function scrollToBottom() {
  const chatMessages = document.getElementById("chat-messages");
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

function escapeHtml(text) {
  const div = document.createElement("div");
  div.textContent = text;
  return div.innerHTML;
}

// Scenario Management
let currentScenario = null;
let scenarios = [];

// New Scenario Creation Modal functionality
let scenarioModalInitialized = false;

function initializeScenarioModal() {
  if (scenarioModalInitialized) return;
  scenarioModalInitialized = true;

  const modal = document.getElementById("scenario-modal");
  const closeBtn = document.getElementById("scenario-close-btn");
  const cancelBtn = document.getElementById("scenario-cancel-btn");
  const createBtn = document.getElementById("scenario-create-btn");

  // Open modal
  const newScenarioBtn = document.getElementById("scenario-new-btn");
  if (newScenarioBtn) {
    newScenarioBtn.addEventListener("click", function () {
      openScenarioModal();
    });
  }

  // Close modal events
  closeBtn.addEventListener("click", closeScenarioModal);
  cancelBtn.addEventListener("click", closeScenarioModal);

  // Close modal when clicking outside
  modal.addEventListener("click", function (e) {
    if (e.target === modal) {
      closeScenarioModal();
    }
  });

  // Create scenario handler
  createBtn.addEventListener("click", handleScenarioCreation);
}

function openScenarioModal() {
  const modal = document.getElementById("scenario-modal");
  modal.style.display = "flex";

  // Reset form
  document.getElementById("scenario-name").value = "";

  // Focus on scenario name input
  setTimeout(() => {
    document.getElementById("scenario-name").focus();
  }, 100);
}

function closeScenarioModal() {
  const modal = document.getElementById("scenario-modal");
  modal.style.display = "none";
}

function handleScenarioCreation() {
  const scenarioName = document.getElementById("scenario-name").value.trim();

  // Validation
  if (!scenarioName) {
    alert("管理名を入力してください");
    return;
  }

  // Create scenario object
  const newScenario = {
    id: Date.now(),
    name: scenarioName,
    createdAt: new Date().toLocaleDateString('ja-JP'),
    steps: []
  };

  scenarios.push(newScenario);
  currentScenario = newScenario;

  console.log("Creating new scenario:", newScenario);

  // Close modal
  closeScenarioModal();

  // Navigate to scenario detail page
  showScenarioDetailPage(newScenario);
}

// Update timing preview function
function updateTimingPreview() {
  const daysInput = document.getElementById("scenario-days");
  const timeInput = document.getElementById("scenario-time");
  const previewDays = document.getElementById("preview-days");
  const previewTime = document.getElementById("preview-time");

  if (daysInput && timeInput && previewDays && previewTime) {
    const days = daysInput.value || "0";
    const time = timeInput.value || "09:00";

    previewDays.textContent = days;
    previewTime.textContent = time;
  }
}

// Update timing preview function for edit modal
function updateEditTimingPreview() {
  const daysInput = document.getElementById("edit-scenario-days");
  const timeInput = document.getElementById("edit-scenario-time");
  const previewDays = document.getElementById("edit-preview-days");
  const previewTime = document.getElementById("edit-preview-time");

  if (daysInput && timeInput && previewDays && previewTime) {
    const days = daysInput.value || "0";
    const time = timeInput.value || "09:00";

    previewDays.textContent = days;
    previewTime.textContent = time;
  }
}

// Scenario Edit Modal functionality
let scenarioEditModalInitialized = false;
let currentEditScenarioId = null;

function initializeScenarioEditModal() {
  if (scenarioEditModalInitialized) return;
  scenarioEditModalInitialized = true;

  const modal = document.getElementById("scenario-edit-modal");
  const closeBtn = document.getElementById("scenario-edit-close-btn");
  const cancelBtn = document.getElementById("scenario-edit-cancel-btn");
  const saveBtn = document.getElementById("scenario-edit-save-btn");
  const editDeliveryTimingRadios = document.querySelectorAll(
    'input[name="editDeliveryTiming"]'
  );

  // Edit button event listeners
  const editButtons = document.querySelectorAll(".scenario-edit-btn");
  editButtons.forEach((btn) => {
    btn.addEventListener("click", function () {
      const scenarioRow = this.closest("tr");
      if (scenarioRow) {
        // Get scenario ID and find the scenario data
        const scenarioId = scenarioRow.getAttribute("data-scenario-id");
        const scenario = scenarios.find(s => s.id == scenarioId);

        if (scenario) {
          // Navigate to scenario detail page instead of opening modal
          showScenarioDetailPage(scenario);
        } else {
          // Fallback: create a scenario object from row attributes if not found in array
          const fallbackScenario = {
            id: scenarioId,
            name: scenarioRow.getAttribute("data-scenario-name"),
            createdAt: new Date().toLocaleDateString('ja-JP'),
            steps: []
          };
          showScenarioDetailPage(fallbackScenario);
        }
      }
    });
  });

  // Close modal events
  closeBtn.addEventListener("click", closeScenarioEditModal);
  cancelBtn.addEventListener("click", closeScenarioEditModal);

  // Close modal when clicking outside
  modal.addEventListener("click", function (e) {
    if (e.target === modal) {
      closeScenarioEditModal();
    }
  });

  // Delivery timing change handler
  editDeliveryTimingRadios.forEach((radio) => {
    radio.addEventListener("change", function () {
      handleEditDeliveryTimingChange(this.value);
    });
  });

  // Save scenario handler
  saveBtn.addEventListener("click", handleScenarioUpdate);

  // Add input event listeners for real-time preview
  const editDaysInput = document.getElementById("edit-scenario-days");
  const editTimeInput = document.getElementById("edit-scenario-time");

  if (editDaysInput) {
    editDaysInput.addEventListener("input", updateEditTimingPreview);
  }
  if (editTimeInput) {
    editTimeInput.addEventListener("input", updateEditTimingPreview);
  }
}

function openScenarioEditModal(scenarioCard) {
  const modal = document.getElementById("scenario-edit-modal");

  // Get scenario data from attributes
  currentEditScenarioId = scenarioCard.getAttribute("data-scenario-id");
  const scenarioName = scenarioCard.getAttribute("data-scenario-name");
  const deliveryTiming = scenarioCard.getAttribute("data-delivery-timing");
  const scheduledDays = scenarioCard.getAttribute("data-scheduled-days") || "0";
  const scheduledTime =
    scenarioCard.getAttribute("data-scheduled-time") || "09:00";

  // Populate form with existing data
  document.getElementById("edit-scenario-name").value = scenarioName;

  // Set delivery timing
  document.querySelector(
    `input[name="editDeliveryTiming"][value="${deliveryTiming}"]`
  ).checked = true;

  if (deliveryTiming === "scheduled") {
    document.getElementById("edit-scenario-days").value = scheduledDays;
    document.getElementById("edit-scenario-time").value = scheduledTime;
    document.getElementById("edit-scheduled-group").style.display = "block";
  } else {
    document.getElementById("edit-scheduled-group").style.display = "none";
  }

  // Update preview
  updateEditTimingPreview();

  // Show modal
  modal.style.display = "flex";

  // Focus on scenario name input
  setTimeout(() => {
    document.getElementById("edit-scenario-name").focus();
  }, 100);
}

function closeScenarioEditModal() {
  const modal = document.getElementById("scenario-edit-modal");
  modal.style.display = "none";
  currentEditScenarioId = null;
}

function handleEditDeliveryTimingChange(timing) {
  const scheduledGroup = document.getElementById("edit-scheduled-group");

  if (timing === "scheduled") {
    scheduledGroup.style.display = "block";
    updateEditTimingPreview();
  } else {
    scheduledGroup.style.display = "none";
  }
}

function handleScenarioUpdate() {
  const scenarioName = document
    .getElementById("edit-scenario-name")
    .value.trim();
  const deliveryTiming = document.querySelector(
    'input[name="editDeliveryTiming"]:checked'
  ).value;
  const scheduledDays = document.getElementById("edit-scenario-days").value;
  const scheduledTime = document.getElementById("edit-scenario-time").value;

  // Validation
  if (!scenarioName) {
    alert("シナリオ名を入力してください");
    return;
  }

  if (deliveryTiming === "scheduled") {
    if (!scheduledDays || scheduledDays < 0 || scheduledDays > 30) {
      alert("経過日数を0〜30日の範囲で指定してください");
      return;
    }
    if (!scheduledTime) {
      alert("配信時間を指定してください");
      return;
    }
  }

  // Update scenario object
  const updatedScenario = {
    id: currentEditScenarioId,
    name: scenarioName,
    deliveryTiming: deliveryTiming,
    scheduledDays:
      deliveryTiming === "scheduled" ? parseInt(scheduledDays) : null,
    scheduledTime: deliveryTiming === "scheduled" ? scheduledTime : null,
    updatedAt: new Date().toISOString(),
  };

  console.log("Updating scenario:", updatedScenario);

  // Update the scenario card in the UI
  updateScenarioCardInUI(updatedScenario);

  // Show success message
  let successMessage = `シナリオ「${scenarioName}」を更新しました！`;
  if (deliveryTiming === "scheduled") {
    successMessage += `\n配信タイミング: ステップ開始から${scheduledDays}日後の${scheduledTime}`;
  }
  alert(successMessage);

  // Close modal
  closeScenarioEditModal();

  // Here you would typically send the data to the server
}

function updateScenarioCardInUI(scenario) {
  const scenarioCard = document.querySelector(
    `[data-scenario-id="${scenario.id}"]`
  );
  if (scenarioCard) {
    // Update data attributes
    scenarioCard.setAttribute("data-scenario-name", scenario.name);
    scenarioCard.setAttribute("data-delivery-timing", scenario.deliveryTiming);

    if (scenario.deliveryTiming === "scheduled") {
      scenarioCard.setAttribute("data-scheduled-days", scenario.scheduledDays);
      scenarioCard.setAttribute("data-scheduled-time", scenario.scheduledTime);
    } else {
      scenarioCard.removeAttribute("data-scheduled-days");
      scenarioCard.removeAttribute("data-scheduled-time");
    }

    // Update visible elements
    const nameElement = scenarioCard.querySelector(".scenario-header h3");

    if (nameElement) nameElement.textContent = scenario.name;
  }
}

// Friend Selection functionality
let friendsData = [];
let selectedFriends = new Set();
let friendSelectionInitialized = false;

// Sample friends data (in a real app, this would come from an API)
const sampleFriendsData = [
  { id: 'U001234', name: '田中太郎', avatar: '田' },
  { id: 'U005678', name: '佐藤花子', avatar: '佐' },
  { id: 'U009876', name: '山田次郎', avatar: '山' },
  { id: 'U005432', name: '鈴木美咲', avatar: '鈴' },
  { id: 'U001122', name: '高橋健太', avatar: '高' },
  { id: 'U003344', name: '伊藤麻衣', avatar: '伊' },
  { id: 'U005566', name: '渡辺晴彦', avatar: '渡' },
  { id: 'U007788', name: '中村優子', avatar: '中' },
  { id: 'U009900', name: '小林大輔', avatar: '小' },
  { id: 'U001199', name: '加藤美穂', avatar: '加' }
];

function initializeFriendSelection() {
  if (friendSelectionInitialized) return;
  friendSelectionInitialized = true;

  // Initialize friends data
  friendsData = [...sampleFriendsData];
  selectedFriends.clear();

  // Render friends list
  renderFriendsList();

  // Set up event listeners
  setupFriendSelectionEventListeners();
}

function setupFriendSelectionEventListeners() {
  const searchInput = document.getElementById('friend-search');
  const selectAllBtn = document.getElementById('select-all-friends');
  const deselectAllBtn = document.getElementById('deselect-all-friends');

  // Search functionality
  if (searchInput) {
    searchInput.addEventListener('input', function() {
      const searchTerm = this.value.toLowerCase();
      filterFriendsList(searchTerm);
    });
  }

  // Select all button
  if (selectAllBtn) {
    selectAllBtn.addEventListener('click', function() {
      selectAllVisibleFriends();
    });
  }

  // Deselect all button
  if (deselectAllBtn) {
    deselectAllBtn.addEventListener('click', function() {
      deselectAllFriends();
    });
  }
}

function renderFriendsList(filteredFriends = null) {
  const friendsList = document.getElementById('friends-selection-list');
  if (!friendsList) return;

  const friendsToRender = filteredFriends || friendsData;

  friendsList.innerHTML = '';

  friendsToRender.forEach(friend => {
    const friendItem = createFriendSelectionItem(friend);
    friendsList.appendChild(friendItem);
  });

  updateSelectedCount();
}

function createFriendSelectionItem(friend) {
  const itemDiv = document.createElement('div');
  itemDiv.className = 'friend-selection-item';
  itemDiv.setAttribute('data-friend-id', friend.id);

  const isSelected = selectedFriends.has(friend.id);
  if (isSelected) {
    itemDiv.classList.add('selected');
  }

  itemDiv.innerHTML = `
    <input type="checkbox" class="friend-checkbox" ${isSelected ? 'checked' : ''}>
    <div class="friend-selection-avatar">${friend.avatar}</div>
    <div class="friend-selection-info">
      <div class="friend-selection-name">${friend.name}</div>
      <div class="friend-selection-id">ID: ${friend.id}</div>
    </div>
  `;

  // Add click event listener
  itemDiv.addEventListener('click', function() {
    toggleFriendSelection(friend.id);
  });

  // Prevent checkbox click from bubbling
  const checkbox = itemDiv.querySelector('.friend-checkbox');
  checkbox.addEventListener('click', function(e) {
    e.stopPropagation();
    toggleFriendSelection(friend.id);
  });

  return itemDiv;
}

function toggleFriendSelection(friendId) {
  const friendItem = document.querySelector(`[data-friend-id="${friendId}"]`);
  const checkbox = friendItem.querySelector('.friend-checkbox');

  if (selectedFriends.has(friendId)) {
    selectedFriends.delete(friendId);
    friendItem.classList.remove('selected');
    checkbox.checked = false;
  } else {
    selectedFriends.add(friendId);
    friendItem.classList.add('selected');
    checkbox.checked = true;
  }

  updateSelectedCount();
}

function selectAllVisibleFriends() {
  const visibleItems = document.querySelectorAll('.friend-selection-item');

  visibleItems.forEach(item => {
    const friendId = item.getAttribute('data-friend-id');
    if (!selectedFriends.has(friendId)) {
      selectedFriends.add(friendId);
      item.classList.add('selected');
      item.querySelector('.friend-checkbox').checked = true;
    }
  });

  updateSelectedCount();
}

function deselectAllFriends() {
  selectedFriends.clear();

  const allItems = document.querySelectorAll('.friend-selection-item');
  allItems.forEach(item => {
    item.classList.remove('selected');
    item.querySelector('.friend-checkbox').checked = false;
  });

  updateSelectedCount();
}

function filterFriendsList(searchTerm) {
  if (!searchTerm.trim()) {
    renderFriendsList();
    return;
  }

  const filteredFriends = friendsData.filter(friend =>
    friend.name.toLowerCase().includes(searchTerm) ||
    friend.id.toLowerCase().includes(searchTerm)
  );

  renderFriendsList(filteredFriends);
}

function updateSelectedCount() {
  const countElement = document.getElementById('selected-friends-count');
  if (countElement) {
    countElement.textContent = selectedFriends.size;
  }
}

// Helper function to get selected friends data
function getSelectedFriendsData() {
  return friendsData.filter(friend => selectedFriends.has(friend.id));
}

// ===== Broadcast Function =====
async function sendBroadcast() {
  console.log('=== sendBroadcast() called ===');

  const titleInput = document.getElementById('broadcast-title');
  const messageInput = document.getElementById('broadcast-message');

  if (!titleInput || !messageInput) {
    console.error('❌ Input elements not found');
    alert('エラー: 入力フォームが見つかりません');
    return;
  }

  const broadcastTitle = titleInput.value.trim();
  const message = messageInput.value.trim();

  console.log('Broadcast title:', broadcastTitle);
  console.log('Message:', message);

  // Validation
  if (!broadcastTitle) {
    console.warn('⚠️ Broadcast title is empty');
    alert('配信タイトルを入力してください');
    return;
  }

  if (!message) {
    console.warn('⚠️ Message is empty');
    alert('メッセージ内容を入力してください');
    return;
  }

  // Confirmation
  const confirmed = confirm(`一斉配信を送信します。よろしいですか?\n\nタイトル: ${broadcastTitle}\nメッセージ: ${message}`);
  if (!confirmed) {
    console.log('User cancelled broadcast');
    return;
  }

  const apiUrl = `${API_BASE_URL}/broadcast`;
  const payload = {
    broadcast_title: broadcastTitle,
    message: message
  };

  console.log('API URL:', apiUrl);
  console.log('Payload:', payload);

  try {
    console.log('Starting fetch...');

    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload)
    });

    console.log('Response status:', response.status);
    console.log('Response statusText:', response.statusText);

    const responseText = await response.text();
    console.log('Response text:', responseText);

    let result;
    try {
      result = JSON.parse(responseText);
      console.log('Parsed result:', result);
    } catch (parseError) {
      console.error('❌ JSON parse error:', parseError);
      console.error('Response was:', responseText);
      alert('エラー: サーバーからの応答が不正です');
      return;
    }

    if (result.success) {
      console.log('✅ Broadcast sent successfully!');
      console.log('Total users:', result.data.total_users);
      console.log('Messages created:', result.data.messages_created);
      console.log('Tasks created:', result.data.tasks_created);

      alert(`一斉配信が送信されました!\n\n対象ユーザー数: ${result.data.total_users}人\nメッセージ作成数: ${result.data.messages_created}件\nタスク作成数: ${result.data.tasks_created}件`);

      // Clear form
      titleInput.value = '';
      messageInput.value = '';
    } else {
      console.error('❌ Failed to send broadcast');
      console.error('Error message:', result.message);
      alert('一斉配信の送信に失敗しました: ' + result.message);
    }
  } catch (error) {
    console.error('❌ Error sending broadcast:', error);
    console.error('Error message:', error.message);
    console.error('Error stack:', error.stack);
    alert('一斉配信の送信中にエラーが発生しました: ' + error.message);
  }
}

// ===== API Functions =====
// 動的にAPI URLを設定（localhostでもIPアドレスでも動作する）
const API_BASE_URL = `${window.location.protocol}//${window.location.host}/api`;

// Fetch users from API
async function fetchUsers() {
  // モックデータを返す
  const friends = getMockFriends();
  return friends.map(friend => ({
    id: friend.id,
    user_name: friend.name,
    uuid: friend.lineId,
    created_at: friend.registeredAt,
    tags: friend.tags,
    memo: friend.memo
  }));
}

// Load users and display in individual page
async function loadIndividualPageUsers(filter = 'all') {
  const friendsListContainer = document.querySelector('#individual-page .friends-list');

  if (!friendsListContainer) {
    console.error('Friends list container not found');
    return;
  }

  // Show loading state
  friendsListContainer.innerHTML = '<div style="padding: 20px; text-align: center;">読み込み中...</div>';

  try {
    let users = await fetchUsers();

    // Apply filters
    if (filter === 'unread') {
      users = users.filter(user => getUserReadStatus(user.id) === 'unread');
    } else if (filter === 'read') {
      users = users.filter(user => getUserReadStatus(user.id) === 'read');
    } else if (filter === 'bookmarked') {
      const bookmarks = getBookmarkedFriends();
      users = users.filter(user => bookmarks[user.id] === true);
    }
    // 'all' の場合はフィルタリングしない（全ユーザーを表示）

    // Sort: bookmarked users first
    users.sort((a, b) => {
      const aBookmarked = isBookmarked(a.id);
      const bBookmarked = isBookmarked(b.id);
      if (aBookmarked && !bBookmarked) return -1;
      if (!aBookmarked && bBookmarked) return 1;
      return 0;
    });

    // Render users
    if (users.length === 0) {
      friendsListContainer.innerHTML = '<div style="padding: 20px; text-align: center;">友だちが見つかりません</div>';
      return;
    }

    // Fetch latest messages for all users
    const usersWithLastMessage = await Promise.all(users.map(async (user) => {
      const messages = await fetchMessages(user.id);
      const latestMessage = messages.length > 0 ? messages[messages.length - 1] : null;
      return { ...user, latestMessage };
    }));

    friendsListContainer.innerHTML = usersWithLastMessage.map(user => {
      const avatar = user.user_name.charAt(0);
      const isUnread = getUserReadStatus(user.id) === 'unread';
      const unreadIndicator = isUnread ? '<span class="unread-indicator"></span>' : '';
      const userBookmarked = isBookmarked(user.id);
      const bookmarkIconHTML = userBookmarked ? '<i class="friend-bookmark-icon fa-solid fa-bookmark"></i>' : '';

      // Format last message content and time
      let lastMessageContent = '';
      let lastMessageTime = '';

      if (user.latestMessage) {
        // メッセージ内容（長い場合は省略）
        lastMessageContent = user.latestMessage.message.length > 30
          ? user.latestMessage.message.substring(0, 30) + '...'
          : user.latestMessage.message;

        // 日時（今日の場合は時刻のみ、それ以外は日付も表示）
        const lastMessageDate = new Date(user.latestMessage.created_at);
        const today = new Date();
        const isToday = lastMessageDate.toDateString() === today.toDateString();

        if (isToday) {
          lastMessageTime = lastMessageDate.toLocaleString('ja-JP', {
            hour: '2-digit',
            minute: '2-digit'
          });
        } else {
          lastMessageTime = lastMessageDate.toLocaleString('ja-JP', {
            month: '2-digit',
            day: '2-digit'
          });
        }
      } else {
        lastMessageContent = 'まだやりとりがありません';
      }

      return `
        <div class="friend-item" data-user-id="${user.id}" onclick="selectFriend(${user.id}, '${user.user_name}', '${user.uuid}', '${user.created_at}', this)">
          <div class="friend-avatar">${avatar}</div>
          <div class="friend-info">
            <div class="friend-name">${user.user_name}</div>
            <div class="last-message">
              <span class="message-preview">${lastMessageContent}</span>
            </div>
          </div>
          ${lastMessageTime ? `<div class="friend-time">${lastMessageTime}</div>` : ''}
          ${bookmarkIconHTML}
          ${unreadIndicator}
        </div>
      `;
    }).join('');

  } catch (error) {
    console.error('Error loading users:', error);
    friendsListContainer.innerHTML = '<div style="padding: 20px; text-align: center; color: red;">エラーが発生しました</div>';
  }
}

// Fetch messages for a specific user
async function fetchMessages(userId) {
  // モックデータを返す
  const messages = getMockMessages(userId);
  return messages.map(msg => ({
    id: msg.id,
    user_id: userId,
    message: msg.content,
    is_from_admin: msg.sender === 'admin',
    created_at: msg.timestamp
  }));
}

// Select friend and show chat in center column
async function selectFriend(userId, userName, uuid, createdAt, friendElement) {
  // Save current draft before switching
  const chatInput = document.getElementById('individual-chat-input');
  if (currentChatUserId && chatInput) {
    userDraftMessages[currentChatUserId] = chatInput.value;
  }

  // Remove selected class from all friend items
  document.querySelectorAll('.friend-item').forEach(item => {
    item.classList.remove('selected');
  });

  // Add selected class to clicked friend
  if (friendElement) {
    friendElement.classList.add('selected');
  }

  // Store current user info globally
  currentChatUserId = userId;
  currentChatUserName = userName;

  // Update center column - chat header
  const chatUserName = document.getElementById('individual-chat-user-name');
  const chatUserId = document.getElementById('individual-chat-user-id');
  const chatAvatar = document.getElementById('individual-chat-avatar');
  const chatMessages = document.getElementById('individual-chat-messages');
  const chatInputArea = document.getElementById('individual-chat-input-area');

  // Set user info
  if (chatUserName) chatUserName.textContent = userName;
  if (chatAvatar) chatAvatar.textContent = userName.charAt(0);

  // Show loading state
  if (chatMessages) {
    chatMessages.innerHTML = '<div style="padding: 20px; text-align: center;">メッセージを読み込み中...</div>';
  }

  // Show chat input area and restore draft
  if (chatInputArea) {
    chatInputArea.style.display = 'block';
  }

  // Restore draft message for this user
  if (chatInput) {
    chatInput.value = userDraftMessages[userId] || '';
    chatInput.style.height = '44px';
    if (chatInput.value) {
      chatInput.style.height = chatInput.scrollHeight + 'px';
    }
  }

  // Show and update bookmark button
  const chatHeaderActions = document.getElementById('chat-header-actions');
  if (chatHeaderActions) {
    chatHeaderActions.style.display = 'flex';
  }
  updateChatHeaderBookmark(userId);

  // Update read status button state
  const currentReadStatus = getUserReadStatus(userId);
  updateReadStatusButtonState(currentReadStatus);

  // Update right column - user info
  updateUserInfo(userId, userName, uuid, createdAt);

  // Initialize chat event listeners if not already done
  initializeIndividualChatEventListeners();

  // Load messages
  try {
    const messages = await fetchMessages(userId);
    renderIndividualMessages(messages);
  } catch (error) {
    console.error('Error loading messages:', error);
    if (chatMessages) {
      chatMessages.innerHTML = '<div style="padding: 20px; text-align: center; color: red;">メッセージの読み込みに失敗しました</div>';
    }
  }
}

// Update user info in right column
function updateUserInfo(userId, userName, uuid, createdAt) {
  const userInfoContent = document.getElementById('individual-user-info');
  if (!userInfoContent) return;

  const formattedDate = new Date(createdAt).toLocaleDateString('ja-JP', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit'
  });

  // 仮データ（後でAPIから取得する想定）
  const lineName = userName; // LINE名（仮）
  const stepDeliveries = ['ウェルカムシーケンス', '商品紹介ステップ', 'フォローアップステップ']; // 送信したステップ配信のタイトル（仮）
  const systemDisplayName = `ユーザー${userId}`; // システム表示名（仮）

  // ステップ配信のタイトルリストHTML生成
  const stepDeliveriesHtml = stepDeliveries.map(title =>
    `<div class="step-delivery-item">${title}</div>`
  ).join('');

  // Get memo for this user
  const memo = getUserMemo(userId);
  const memoDisplay = memo || 'メモを追加...';

  // Get tags for this user
  const allTags = getAllTags();
  const userTagIds = getUserTags(userId);

  let tagsHtml = '';
  if (allTags.length === 0) {
    tagsHtml = '<div class="empty-state-small"><p>タグが作成されていません</p></div>';
  } else {
    tagsHtml = `
      <div class="tag-selection-list">
        ${allTags.map(tag => `
          <label class="tag-checkbox-item">
            <input type="checkbox" value="${tag.id}" ${userTagIds.includes(tag.id) ? 'checked' : ''}>
            <span class="tag-badge" style="background-color: ${tag.color};">${tag.name}</span>
          </label>
        `).join('')}
      </div>
      <div class="tags-save-button-container" style="margin-top: 16px;">
        <button class="btn btn-primary" onclick="saveUserTagsFromBasicInfo(${userId})">保存</button>
      </div>
    `;
  }

  userInfoContent.innerHTML = `
    <div class="user-info-item">
      <div class="user-info-label">LINE名</div>
      <div class="user-info-value">${lineName}</div>
    </div>
    <div class="user-info-item" style="margin-top: -12px;">
      <div class="user-info-value" style="color: #888888;">${formattedDate}</div>
    </div>
    <div class="user-info-item">
      <div class="user-info-label">システム表示名</div>
      <div class="user-info-value">${systemDisplayName}</div>
    </div>
    <div class="user-info-item">
      <div class="user-info-label">ステップ</div>
      <div class="user-info-value">
        <div class="step-delivery-list">
          ${stepDeliveriesHtml || '<div class="empty-state-small">送信されたステップ配信はありません</div>'}
        </div>
      </div>
    </div>
    <div class="user-info-divider"></div>
    <div class="user-info-item">
      <div class="user-info-label">メモ</div>
      <div class="user-info-value user-info-memo" onclick="openMemoModal(${userId})" style="cursor: pointer; color: ${memo ? '#333' : '#999'};">
        ${memoDisplay}
      </div>
    </div>
    <div class="user-info-divider"></div>
    <div class="user-info-item">
      <div class="user-info-label">タグ</div>
      <div class="user-info-value">
        ${tagsHtml}
      </div>
    </div>
  `;
}

// Render messages in individual page center column
function renderIndividualMessages(messages) {
  const chatMessages = document.getElementById('individual-chat-messages');
  if (!chatMessages) return;

  if (messages.length === 0) {
    chatMessages.innerHTML = '<div class="empty-state"><p>まだメッセージがありません</p></div>';
    return;
  }

  chatMessages.innerHTML = messages.map(msg => {
    const messageClass = msg.is_from_user ? 'message-received' : 'message-sent';
    const formattedTime = new Date(msg.created_at).toLocaleString('ja-JP', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit'
    });

    return `
      <div class="message ${messageClass}">
        <div class="message-content">
          <div class="message-text">${msg.message}</div>
          <div class="message-time">${formattedTime}</div>
        </div>
      </div>
    `;
  }).join('');

  // Scroll to bottom
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Render messages in chat modal (kept for backward compatibility)
function renderMessages(messages) {
  const chatMessages = document.getElementById('chat-messages');
  if (!chatMessages) return;

  if (messages.length === 0) {
    chatMessages.innerHTML = '<div style="padding: 20px; text-align: center;">メッセージがありません</div>';
    return;
  }

  chatMessages.innerHTML = messages.map(msg => {
    const messageClass = msg.is_from_user ? 'message-received' : 'message-sent';
    const formattedTime = new Date(msg.created_at).toLocaleString('ja-JP', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit'
    });

    return `
      <div class="message ${messageClass}">
        <div class="message-content">
          <div class="message-text">${msg.message}</div>
          <div class="message-time">${formattedTime}</div>
        </div>
      </div>
    `;
  }).join('');

  // Scroll to bottom
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Initialize right column tabs
function initializeRightColumnTabs() {
  // Prevent multiple event listeners
  if (window.rightColumnTabsInitialized) return;
  window.rightColumnTabsInitialized = true;

  const tabButtons = document.querySelectorAll('.right-column-tabs .tab-btn');

  tabButtons.forEach(button => {
    button.addEventListener('click', function() {
      const tabName = this.getAttribute('data-tab');
      switchRightColumnTab(tabName);
    });
  });
}

// Switch right column tab
function switchRightColumnTab(tabName) {
  // Remove active class from all buttons
  document.querySelectorAll('.right-column-tabs .tab-btn').forEach(btn => {
    btn.classList.remove('active');
  });

  // Add active class to clicked button
  const activeButton = document.querySelector(`.right-column-tabs .tab-btn[data-tab="${tabName}"]`);
  if (activeButton) {
    activeButton.classList.add('active');
  }

  // Hide all tab contents
  document.querySelectorAll('.individual-right-column .tab-content').forEach(content => {
    content.classList.remove('active');
  });

  // Show selected tab content
  const activeContent = document.getElementById(`${tabName}-tab`);
  if (activeContent) {
    activeContent.classList.add('active');
  }

  // Initialize tab-specific content
  if (tabName === 'tags') {
    initializeTagsTab();
    // Load user tag selection if user is selected
    if (currentChatUserId) {
      initializeUserTagSelection(currentChatUserId);
    }
  }
}

// Initialize event listeners for individual page chat
function initializeIndividualChatEventListeners() {
  // Prevent multiple event listeners
  if (window.individualChatEventListenersInitialized) return;
  window.individualChatEventListenersInitialized = true;

  // Send button
  const sendBtn = document.getElementById('individual-chat-send-btn');
  if (sendBtn) {
    sendBtn.addEventListener('click', function(e) {
      sendIndividualMessage();
    });
  }

  // Shift+Enter key to send
  const chatInput = document.getElementById('individual-chat-input');
  if (chatInput) {
    chatInput.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' && e.shiftKey) {
        e.preventDefault();
        sendIndividualMessage();
      }
    });

    // Auto-resize textarea
    chatInput.addEventListener('input', function () {
      this.style.height = '44px';
      this.style.height = this.scrollHeight + 'px';
    });
  }
}

// Send message from individual page
async function sendIndividualMessage() {
  console.log('=== sendIndividualMessage() called ===');

  const chatInput = document.getElementById('individual-chat-input');
  const messageText = chatInput.value.trim();
  console.log('Message text:', messageText);

  if (!messageText) {
    console.warn('Message is empty');
    return;
  }

  console.log('currentChatUserId:', currentChatUserId);
  console.log('currentChatUserName:', currentChatUserName);

  // Check if we have a current user
  if (!currentChatUserId) {
    console.error('❌ No user selected for chat');
    return;
  }

  // Create message element for immediate display
  const messageDiv = document.createElement('div');
  messageDiv.className = 'message message-sent';

  const now = new Date();
  const timeString = now
    .toLocaleString('ja-JP', {
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
    })
    .replace(/\//g, '-');

  messageDiv.innerHTML = `
    <div class="message-content">
      <div class="message-text">${escapeHtml(messageText)}</div>
      <div class="message-time">${timeString}</div>
    </div>
  `;

  // Add to chat messages
  const chatMessages = document.getElementById('individual-chat-messages');
  chatMessages.appendChild(messageDiv);

  // Clear input and reset height, and clear draft
  chatInput.value = '';
  chatInput.style.height = '44px';
  delete userDraftMessages[currentChatUserId];

  // Scroll to bottom
  if (chatMessages) {
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }

  // Prepare API call
  const apiUrl = `${API_BASE_URL}/send-message`;
  const payload = {
    user_id: currentChatUserId,
    message: messageText
  };

  console.log('API URL:', apiUrl);
  console.log('Payload:', payload);

  // Send message to API
  try {
    console.log('Starting fetch...');

    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload)
    });

    console.log('Response status:', response.status);
    console.log('Response statusText:', response.statusText);

    const responseText = await response.text();
    console.log('Response text:', responseText);

    let result;
    try {
      result = JSON.parse(responseText);
      console.log('Parsed result:', result);
    } catch (parseError) {
      console.error('❌ JSON parse error:', parseError);
      console.error('Response was:', responseText);
      return;
    }

    if (result.success) {
      console.log('✅ Message saved successfully!');
      console.log('Data:', result.data);
    } else {
      console.error('❌ Failed to save message');
      console.error('Error message:', result.message);
    }
  } catch (error) {
    console.error('❌ Error sending message:', error);
    console.error('Error message:', error.message);
  }
}

// Setup chat modal close button
document.addEventListener('DOMContentLoaded', function() {
  const chatCloseBtn = document.getElementById('chat-close-btn');
  const chatModal = document.getElementById('chat-modal');

  if (chatCloseBtn && chatModal) {
    chatCloseBtn.addEventListener('click', function() {
      chatModal.style.display = 'none';
    });
  }

  // Close modal when clicking outside
  if (chatModal) {
    chatModal.addEventListener('click', function(e) {
      if (e.target === chatModal) {
        chatModal.style.display = 'none';
      }
    });
  }
});

// Initialize tags tab
function initializeTagsTab() {
  // Prevent multiple initializations
  if (window.tagsTabInitialized) return;
  window.tagsTabInitialized = true;

  // Sample folder data
  const sampleFolders = [
    { id: 1, name: '重要顧客', count: 12, icon: '📁' },
    { id: 2, name: '見込み客', count: 34, icon: '📁' },
    { id: 3, name: 'VIP', count: 5, icon: '📁' }
  ];

  // Sample tag data
  const sampleTags = [
    { id: 1, name: '興味あり', count: 28, icon: '🏷️' },
    { id: 2, name: '要フォロー', count: 15, icon: '🏷️' },
    { id: 3, name: '購入済み', count: 42, icon: '🏷️' },
    { id: 4, name: '問い合わせ中', count: 8, icon: '🏷️' }
  ];

  renderFolderList(sampleFolders);
  renderTagList(sampleTags);
}

// Render folder list
function renderFolderList(folders) {
  const folderList = document.getElementById('folder-list');
  if (!folderList) return;

  if (folders.length === 0) {
    folderList.innerHTML = '<div class="empty-state-small"><p>フォルダがありません</p></div>';
    return;
  }

  folderList.innerHTML = folders.map(folder => `
    <div class="folder-item" data-folder-id="${folder.id}">
      <span class="folder-icon">${folder.icon}</span>
      <span class="folder-name">${folder.name}</span>
      <span class="folder-count">${folder.count}</span>
    </div>
  `).join('');

  // Add click event listeners
  folderList.querySelectorAll('.folder-item').forEach(item => {
    item.addEventListener('click', function() {
      const folderId = this.getAttribute('data-folder-id');
      console.log('Folder clicked:', folderId);
      // TODO: Filter users by folder
    });
  });
}

// Render tag list
function renderTagList(tags) {
  const tagList = document.getElementById('tag-list');
  if (!tagList) return;

  if (tags.length === 0) {
    tagList.innerHTML = '<div class="empty-state-small"><p>タグがありません</p></div>';
    return;
  }

  tagList.innerHTML = tags.map(tag => `
    <div class="tag-item" data-tag-id="${tag.id}">
      <span class="tag-icon">${tag.icon}</span>
      <span class="tag-name">${tag.name}</span>
      <span class="tag-count">${tag.count}</span>
    </div>
  `).join('');

  // Add click event listeners
  tagList.querySelectorAll('.tag-item').forEach(item => {
    item.addEventListener('click', function() {
      const tagId = this.getAttribute('data-tag-id');
      console.log('Tag clicked:', tagId);
      // TODO: Filter users by tag
    });
  });
}

// Note: loadIndividualPageUsers() is called in the main navigateToPage override (line 458)

// ===== Tag Management System =====

// Get all tags from localStorage
function getAllTags() {
  // モックデータと統合
  const mockTags = getMockTags();
  const customTags = localStorage.getItem('line_tags');
  const parsedCustomTags = customTags ? JSON.parse(customTags) : [];

  // モックタグとカスタムタグをマージ（IDの重複を避ける）
  const existingIds = mockTags.map(t => t.id);
  const filteredCustomTags = parsedCustomTags.filter(t => !existingIds.includes(t.id));

  return [...mockTags, ...filteredCustomTags];
}

// Save tags to localStorage
function saveTags(tags) {
  // モックタグを除外してカスタムタグのみ保存
  const mockTagIds = MOCK_TAGS.map(t => t.id);
  const customTags = tags.filter(t => !mockTagIds.includes(t.id));
  localStorage.setItem('line_tags', JSON.stringify(customTags));
}

// Get user tags from localStorage
function getUserTags(userId) {
  const userTags = localStorage.getItem(`user_tags_${userId}`);
  if (userTags) {
    return JSON.parse(userTags);
  }

  // LocalStorageにない場合、モックデータから取得
  const friends = getMockFriends();
  const friend = friends.find(f => f.id == userId);
  return friend ? friend.tags : [];
}

// Save user tags to localStorage
function saveUserTags(userId, tagIds) {
  localStorage.setItem(`user_tags_${userId}`, JSON.stringify(tagIds));
}

// Initialize tag management page
function initializeTagManagement() {
  // Tab switching for data management page
  const dataTabBtns = document.querySelectorAll('.data-tab-btn');
  dataTabBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      const tabName = this.getAttribute('data-tab');

      // Update active button
      dataTabBtns.forEach(b => b.classList.remove('active'));
      this.classList.add('active');

      // Update active content
      const dataTabContents = document.querySelectorAll('.data-tab-content');
      dataTabContents.forEach(content => content.classList.remove('active'));
      const activeContent = document.getElementById(`${tabName}-tab`);
      if (activeContent) {
        activeContent.classList.add('active');
      }

      // Initialize friend list when friend list tab is clicked
      if (tabName === 'friend-list') {
        initializeFriendListManagement();
      }
    });
  });

  // Tag creation form
  const tagCreateForm = document.getElementById('tag-create-form');
  if (tagCreateForm) {
    tagCreateForm.addEventListener('submit', function(e) {
      e.preventDefault();

      const tagNameInput = document.getElementById('tag-name-input');
      const tagColorInput = document.getElementById('tag-color-input');

      const tagName = tagNameInput.value.trim();
      const tagColor = tagColorInput.value;

      if (!tagName) return;

      // Create new tag
      const tags = getAllTags();
      const newTag = {
        id: Date.now().toString(),
        name: tagName,
        color: tagColor,
        createdAt: new Date().toISOString()
      };

      tags.push(newTag);
      saveTags(tags);

      // Reset form
      tagNameInput.value = '';
      tagColorInput.value = '#00b900';

      // Refresh tag list
      renderTagManagementList();
    });
  }

  // Initial render
  renderTagManagementList();
}

// Render tag management list
function renderTagManagementList() {
  const tagList = document.getElementById('tag-management-list');
  if (!tagList) return;

  const tags = getAllTags();

  if (tags.length === 0) {
    tagList.innerHTML = '<div class="empty-state"><p>タグがまだ作成されていません</p></div>';
    return;
  }

  tagList.innerHTML = tags.map(tag => `
    <div class="tag-management-item">
      <div class="tag-badge" style="background-color: ${tag.color};">
        ${tag.name}
      </div>
      <div class="tag-actions">
        <button class="btn-icon btn-edit-tag" data-tag-id="${tag.id}" title="編集">
          ✏️
        </button>
        <button class="btn-icon btn-delete-tag" data-tag-id="${tag.id}" title="削除">
          🗑️
        </button>
      </div>
    </div>
  `).join('');

  // Add delete event listeners
  tagList.querySelectorAll('.btn-delete-tag').forEach(btn => {
    btn.addEventListener('click', function() {
      const tagId = this.getAttribute('data-tag-id');
      if (confirm('このタグを削除してもよろしいですか？')) {
        deleteTag(tagId);
      }
    });
  });

  // Add edit event listeners
  tagList.querySelectorAll('.btn-edit-tag').forEach(btn => {
    btn.addEventListener('click', function() {
      const tagId = this.getAttribute('data-tag-id');
      editTag(tagId);
    });
  });
}

// Delete tag
function deleteTag(tagId) {
  let tags = getAllTags();
  tags = tags.filter(tag => tag.id !== tagId);
  saveTags(tags);
  renderTagManagementList();
}

// Edit tag (simple implementation - can be enhanced)
function editTag(tagId) {
  const tags = getAllTags();
  const tag = tags.find(t => t.id === tagId);
  if (!tag) return;

  const newName = prompt('新しいタグ名を入力してください:', tag.name);
  if (newName && newName.trim()) {
    tag.name = newName.trim();
    saveTags(tags);
    renderTagManagementList();
  }
}

// Initialize user tag selection in individual chat
function initializeUserTagSelection(userId) {
  const tagSelectionContainer = document.getElementById('user-tag-selection');
  const saveButtonContainer = document.getElementById('tags-save-button-container');
  const saveButton = document.getElementById('save-user-tags-btn');

  if (!tagSelectionContainer) return;

  const allTags = getAllTags();
  const userTagIds = getUserTags(userId);

  if (allTags.length === 0) {
    tagSelectionContainer.innerHTML = `
      <div class="empty-state-small">
        <p>タグが作成されていません</p>
        <p style="font-size: 12px; margin-top: 8px;">情報管理 > タグ管理 からタグを作成してください</p>
      </div>
    `;
    if (saveButtonContainer) {
      saveButtonContainer.style.display = 'none';
    }
    return;
  }

  tagSelectionContainer.innerHTML = `
    <div class="tag-selection-list">
      ${allTags.map(tag => `
        <label class="tag-checkbox-item">
          <input
            type="checkbox"
            class="user-tag-checkbox"
            data-tag-id="${tag.id}"
            ${userTagIds.includes(tag.id) ? 'checked' : ''}
          />
          <span class="tag-badge" style="background-color: ${tag.color};">
            ${tag.name}
          </span>
        </label>
      `).join('')}
    </div>
  `;

  // Show save button
  if (saveButtonContainer) {
    saveButtonContainer.style.display = 'block';
  }

  // Save button click handler
  if (saveButton) {
    // Remove previous event listeners
    const newSaveButton = saveButton.cloneNode(true);
    saveButton.parentNode.replaceChild(newSaveButton, saveButton);

    newSaveButton.addEventListener('click', function() {
      // Get all checked tag IDs
      const checkedTagIds = [];
      tagSelectionContainer.querySelectorAll('.user-tag-checkbox:checked').forEach(checkbox => {
        checkedTagIds.push(checkbox.getAttribute('data-tag-id'));
      });

      // Save to localStorage
      saveUserTags(userId, checkedTagIds);

      // Show success feedback
      const originalText = newSaveButton.textContent;
      newSaveButton.textContent = '保存しました！';
      newSaveButton.style.backgroundColor = '#10b981';

      setTimeout(() => {
        newSaveButton.textContent = originalText;
        newSaveButton.style.backgroundColor = '';
      }, 2000);
    });
  }
}

// ===== Bookmark Management System =====

// Get all bookmarked friends from localStorage
function getBookmarkedFriends() {
  const bookmarks = localStorage.getItem('bookmarked_friends');
  if (bookmarks) {
    return JSON.parse(bookmarks);
  }

  // LocalStorageにない場合、モックデータから取得
  const friends = getMockFriends();
  const initialBookmarks = {};
  friends.forEach(friend => {
    if (friend.bookmarked) {
      initialBookmarks[friend.id] = true;
    }
  });
  return initialBookmarks;
}

// Save bookmarked friends to localStorage
function saveBookmarkedFriends(bookmarks) {
  localStorage.setItem('bookmarked_friends', JSON.stringify(bookmarks));
}

// Check if a user is bookmarked
function isBookmarked(userId) {
  const bookmarks = getBookmarkedFriends();
  return bookmarks[userId] === true;
}

// Toggle bookmark status for a user
function toggleBookmark(userId) {
  const bookmarks = getBookmarkedFriends();

  if (bookmarks[userId]) {
    delete bookmarks[userId];
  } else {
    bookmarks[userId] = true;
  }

  saveBookmarkedFriends(bookmarks);
  updateBookmarkCount();
  return bookmarks[userId] === true;
}

// Update bookmark count in the UI
function updateBookmarkCount() {
  const bookmarkCountElement = document.getElementById('bookmark-count');
  if (!bookmarkCountElement) return;

  const bookmarks = getBookmarkedFriends();
  const count = Object.keys(bookmarks).length;
  bookmarkCountElement.textContent = `(${count})`;
}

// Update all filter counts (unread, read, bookmark)
async function updateFilterCounts() {
  try {
    const users = await fetchUsers();

    // Count all users
    const allCount = users.length;

    // Count unread users
    const unreadCount = users.filter(user => getUserReadStatus(user.id) === 'unread').length;

    // Count read users
    const readCount = users.filter(user => getUserReadStatus(user.id) === 'read').length;

    // Count bookmarked users
    const bookmarks = getBookmarkedFriends();
    const bookmarkCount = Object.keys(bookmarks).length;

    // Update select options text
    const selectElement = document.getElementById('friend-filter-select');
    if (selectElement) {
      selectElement.options[0].text = `すべて (${allCount})`;
      selectElement.options[1].text = `未読 (${unreadCount})`;
      selectElement.options[2].text = `既読 (${readCount})`;
      selectElement.options[3].text = `ブックマーク (${bookmarkCount})`;
    }
  } catch (error) {
    console.error('Error updating filter counts:', error);
  }
}

// Update chat header bookmark button state
function updateChatHeaderBookmark(userId) {
  const bookmarkBtn = document.getElementById('chat-bookmark-btn');
  const bookmarkIcon = bookmarkBtn?.querySelector('.bookmark-icon');

  if (!bookmarkBtn || !bookmarkIcon) return;

  const isUserBookmarked = isBookmarked(userId);

  if (isUserBookmarked) {
    bookmarkIcon.classList.remove('fa-regular');
    bookmarkIcon.classList.add('fa-solid');
    bookmarkBtn.classList.add('bookmarked');
  } else {
    bookmarkIcon.classList.remove('fa-solid');
    bookmarkIcon.classList.add('fa-regular');
    bookmarkBtn.classList.remove('bookmarked');
  }
}

// Initialize bookmark button click handler
function initializeBookmarkButton() {
  const bookmarkBtn = document.getElementById('chat-bookmark-btn');

  if (!bookmarkBtn) return;

  bookmarkBtn.addEventListener('click', function() {
    if (!currentChatUserId) return;

    const newState = toggleBookmark(currentChatUserId);
    updateChatHeaderBookmark(currentChatUserId);

    // Refresh friends list to update bookmark icons
    const selectElement = document.getElementById('friend-filter-select');
    const currentFilter = selectElement ? selectElement.value : 'all';
    if (currentFilter === 'bookmarked' && !newState) {
      // If user was unbookmarked and we're viewing bookmarked only, reload list
      loadIndividualPageUsers(currentFilter);
    } else {
      // Just update the icon in the current list
      updateFriendListBookmarkIcon(currentChatUserId, newState);
    }

    // Update filter counts
    updateFilterCounts();
  });
}

// Update bookmark icon in friends list
function updateFriendListBookmarkIcon(userId, isBookmarkedStatus) {
  const friendItem = document.querySelector(`.friend-item[data-user-id="${userId}"]`);
  if (!friendItem) return;

  // Remove existing icon if present
  const existingIcon = friendItem.querySelector('.friend-bookmark-icon');
  if (existingIcon) {
    existingIcon.remove();
  }

  // Add icon only if bookmarked
  if (isBookmarkedStatus) {
    const newIcon = document.createElement('i');
    newIcon.className = 'friend-bookmark-icon fa-solid fa-bookmark';
    friendItem.appendChild(newIcon);
  }
}

// Initialize bookmark filter select
function initializeBookmarkFilter() {
  const selectElement = document.getElementById('friend-filter-select');

  if (!selectElement) return;

  // Add change event listener
  selectElement.addEventListener('change', function() {
    const filter = this.value;
    loadIndividualPageUsers(filter);
  });

  // Initial filter counts update
  updateFilterCounts();
}

// ===== Broadcast Tag Selection System =====

// Selected tags for broadcast
let selectedBroadcastTags = new Set();

// Initialize tag selection for broadcast
function initializeBroadcastTagSelection() {
  const tagSelectionList = document.getElementById('broadcast-tag-selection-list');
  if (!tagSelectionList) return;

  const allTags = getAllTags();

  if (allTags.length === 0) {
    tagSelectionList.innerHTML = `
      <div class="empty-state-small">
        <p>タグが作成されていません</p>
        <p style="font-size: 12px; margin-top: 8px;">情報管理 > タグ管理 からタグを作成してください</p>
      </div>
    `;
    return;
  }

  tagSelectionList.innerHTML = allTags.map(tag => `
    <label class="broadcast-tag-item">
      <input
        type="checkbox"
        class="broadcast-tag-checkbox"
        data-tag-id="${tag.id}"
      />
      <span class="tag-badge" style="background-color: ${tag.color};">
        ${tag.name}
      </span>
      <span class="tag-user-count" data-tag-id="${tag.id}">-</span>
    </label>
  `).join('');

  // Calculate and display user counts for each tag
  updateTagUserCounts();

  // Add change event listeners
  tagSelectionList.querySelectorAll('.broadcast-tag-checkbox').forEach(checkbox => {
    checkbox.addEventListener('change', function() {
      const tagId = this.getAttribute('data-tag-id');
      
      if (this.checked) {
        selectedBroadcastTags.add(tagId);
      } else {
        selectedBroadcastTags.delete(tagId);
      }

      updateSelectedTagsCount();
    });
  });

  // Reset selected tags
  selectedBroadcastTags.clear();
  updateSelectedTagsCount();
}

// Update user count for each tag
function updateTagUserCounts() {
  const allTags = getAllTags();
  
  allTags.forEach(tag => {
    const count = calculateTagUserCount(tag.id);
    const countElement = document.querySelector(`.tag-user-count[data-tag-id="${tag.id}"]`);
    if (countElement) {
      countElement.textContent = `${count}人`;
    }
  });
}

// Calculate how many users have a specific tag
function calculateTagUserCount(tagId) {
  // Get all users from localStorage (実際にはAPIから取得する想定)
  // ここでは仮実装として、各ユーザーのタグ情報をチェック
  let count = 0;
  
  // localStorageのキーを列挙してuser_tags_*を探す
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (key.startsWith('user_tags_')) {
      const userTags = JSON.parse(localStorage.getItem(key));
      if (userTags.includes(tagId)) {
        count++;
      }
    }
  }
  
  return count;
}

// Update selected tags count display
function updateSelectedTagsCount() {
  const countContainer = document.getElementById('tag-selection-count');
  const countSpan = document.getElementById('tagged-friends-count');

  if (!countContainer || !countSpan) return;

  if (selectedBroadcastTags.size === 0) {
    countContainer.style.display = 'none';
    return;
  }

  // Calculate total unique users with selected tags
  const totalCount = calculateTotalTaggedUsers();
  
  countContainer.style.display = 'block';
  countSpan.textContent = totalCount;
}

// Calculate total unique users with any of the selected tags
function calculateTotalTaggedUsers() {
  const uniqueUsers = new Set();
  
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (key.startsWith('user_tags_')) {
      const userId = key.replace('user_tags_', '');
      const userTags = JSON.parse(localStorage.getItem(key));
      
      // Check if user has any of the selected tags
      for (let tagId of selectedBroadcastTags) {
        if (userTags.includes(tagId)) {
          uniqueUsers.add(userId);
          break;
        }
      }
    }
  }
  
  return uniqueUsers.size;
}

// Get selected broadcast tags
function getSelectedBroadcastTags() {
  return Array.from(selectedBroadcastTags);
}

// ===== Read/Unread Status Management =====

// Get user read status from localStorage
function getUserReadStatus(userId) {
  const status = localStorage.getItem(`user_read_status_${userId}`);
  if (status) {
    return status;
  }

  // LocalStorageにない場合、モックデータから取得
  const friends = getMockFriends();
  const friend = friends.find(f => f.id == userId);
  return friend ? friend.readStatus : 'read';
}

// Set user read status in localStorage
function setUserReadStatus(userId, status) {
  localStorage.setItem(`user_read_status_${userId}`, status);
}

// Initialize read status buttons
function initializeReadStatusButtons() {
  const toggleBtn = document.getElementById('read-status-toggle-btn');

  if (!toggleBtn) return;

  // Click handler for toggle button
  toggleBtn.addEventListener('click', function() {
    if (!currentChatUserId) return;

    // Get current status and toggle it
    const currentStatus = getUserReadStatus(currentChatUserId);
    const newStatus = currentStatus === 'read' ? 'unread' : 'read';

    // Update status
    setUserReadStatus(currentChatUserId, newStatus);
    updateReadStatusButtonState(newStatus);
    updateFriendListUnreadIndicator(currentChatUserId, newStatus === 'unread');
    updateFilterCounts();
  });
}

// Update read status button visual state
function updateReadStatusButtonState(status) {
  const toggleBtn = document.getElementById('read-status-toggle-btn');
  if (!toggleBtn) return;

  const icon = toggleBtn.querySelector('i');
  if (!icon) return;

  if (status === 'unread') {
    // 未読: fa-regular fa-envelope（閉じた封筒、塗りつぶしなし）
    icon.className = 'fa-regular fa-envelope';
    toggleBtn.classList.add('unread');
  } else {
    // 既読: fa-solid fa-envelope-open（開いた封筒、塗りつぶしあり）
    icon.className = 'fa-solid fa-envelope-open';
    toggleBtn.classList.remove('unread');
  }
}

// Update unread indicator in friends list
function updateFriendListUnreadIndicator(userId, showIndicator) {
  const friendItem = document.querySelector(`.friend-item[data-user-id="${userId}"]`);
  if (!friendItem) return;

  // Remove existing indicator
  const existingIndicator = friendItem.querySelector('.unread-indicator');
  if (existingIndicator) {
    existingIndicator.remove();
  }

  // Add new indicator if needed
  if (showIndicator) {
    const indicator = document.createElement('span');
    indicator.className = 'unread-indicator';
    friendItem.appendChild(indicator);
  }
}

// ===== URL Management System =====

// Get all URLs from localStorage
function getAllUrls() {
  const urls = localStorage.getItem('line_urls');
  return urls ? JSON.parse(urls) : [];
}

// Save URLs to localStorage
function saveUrls(urls) {
  localStorage.setItem('line_urls', JSON.stringify(urls));
}

// Initialize URL management page
function initializeUrlManagement() {
  // URL creation form
  const urlCreateForm = document.getElementById('url-create-form');
  if (urlCreateForm && !urlCreateForm.dataset.initialized) {
    urlCreateForm.dataset.initialized = 'true';

    urlCreateForm.addEventListener('submit', function(e) {
      e.preventDefault();

      const urlTitleInput = document.getElementById('url-title-input');
      const urlLinkInput = document.getElementById('url-link-input');

      const title = urlTitleInput.value.trim();
      const link = urlLinkInput.value.trim();

      if (!title || !link) return;

      // Create new URL
      const urls = getAllUrls();
      const newUrl = {
        id: Date.now().toString(),
        title: title,
        url: link,
        createdAt: new Date().toISOString()
      };

      urls.push(newUrl);
      saveUrls(urls);

      // Reset form
      urlTitleInput.value = '';
      urlLinkInput.value = '';

      // Refresh URL list
      renderUrlManagementList();
    });
  }

  // Initial render
  renderUrlManagementList();
}

// Render URL management list
function renderUrlManagementList() {
  const urlList = document.getElementById('url-management-list');
  if (!urlList) return;

  const urls = getAllUrls();

  if (urls.length === 0) {
    urlList.innerHTML = '<div class="empty-state"><p>URLがまだ作成されていません</p></div>';
    return;
  }

  urlList.innerHTML = urls.map(url => `
    <div class="url-management-item">
      <div class="url-item-header">
        <div class="url-title">${url.title}</div>
        <div class="url-actions">
          <button class="btn-icon btn-copy-url" data-url="${url.url}" title="URLをコピー">
            📋
          </button>
          <button class="btn-icon btn-delete-url" data-url-id="${url.id}" title="削除">
            🗑️
          </button>
        </div>
      </div>
      <div class="url-link">
        <a href="${url.url}" target="_blank" rel="noopener noreferrer">${url.url}</a>
      </div>
      <div class="url-created-at">作成日: ${new Date(url.createdAt).toLocaleString('ja-JP')}</div>
    </div>
  `).join('');

  // Add event listeners for delete buttons
  urlList.querySelectorAll('.btn-delete-url').forEach(btn => {
    btn.addEventListener('click', function() {
      const urlId = this.getAttribute('data-url-id');
      if (confirm('このURLを削除しますか？')) {
        deleteUrl(urlId);
      }
    });
  });

  // Add event listeners for copy buttons
  urlList.querySelectorAll('.btn-copy-url').forEach(btn => {
    btn.addEventListener('click', function() {
      const url = this.getAttribute('data-url');
      copyToClipboard(url);
    });
  });
}

// Delete URL
function deleteUrl(urlId) {
  const urls = getAllUrls();
  const updatedUrls = urls.filter(url => url.id !== urlId);
  saveUrls(updatedUrls);
  renderUrlManagementList();
}

// Copy text to clipboard
function copyToClipboard(text) {
  navigator.clipboard.writeText(text).then(() => {
    alert('URLをクリップボードにコピーしました');
  }).catch(err => {
    console.error('コピーに失敗しました:', err);
    alert('コピーに失敗しました');
  });
}

// ===== Friend List Management System =====

// Generate UUID for new friend
function generateUUID() {
  // 既存のUUID形式: U001234567890abcdef###
  // ランダムな文字列を生成（数字とアルファベット）
  const chars = '0123456789abcdef';
  let uuid = 'U';
  for (let i = 0; i < 20; i++) {
    uuid += chars[Math.floor(Math.random() * chars.length)];
  }
  return uuid;
}

// Create new friend
async function createFriend(userName) {
  try {
    const uuid = generateUUID();

    const response = await fetch(`${API_BASE_URL}/users`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        uuid: uuid,
        user_name: userName
      })
    });

    if (!response.ok) {
      throw new Error('Failed to create friend');
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.error('Error creating friend:', error);
    throw error;
  }
}

// Initialize friend list management page
function initializeFriendListManagement() {
  // Friend creation form
  const friendCreateForm = document.getElementById('friend-create-form');
  if (friendCreateForm && !friendCreateForm.dataset.initialized) {
    friendCreateForm.dataset.initialized = 'true';

    friendCreateForm.addEventListener('submit', async function(e) {
      e.preventDefault();

      const nameInput = document.getElementById('friend-name-input');
      const userName = nameInput.value.trim();

      if (!userName) {
        alert('友だち名を入力してください');
        return;
      }

      try {
        await createFriend(userName);
        alert('友だちを追加しました！');

        // フォームをリセット
        nameInput.value = '';

        // 友だちリストをリフレッシュ
        renderFriendListTable();
      } catch (error) {
        alert('友だちの追加に失敗しました: ' + error.message);
      }
    });
  }

  // Friend list search
  const searchInput = document.getElementById('friend-list-search');
  if (searchInput && !searchInput.dataset.initialized) {
    searchInput.dataset.initialized = 'true';

    searchInput.addEventListener('input', function() {
      const searchTerm = this.value.trim().toLowerCase();
      renderFriendListTable(searchTerm);
    });
  }

  // Initial render
  renderFriendListTable();
}

// Render friend list table
async function renderFriendListTable(searchTerm = '') {
  const tbody = document.getElementById('friend-list-tbody');
  if (!tbody) return;

  // Show loading state
  tbody.innerHTML = '<tr><td colspan="4" style="text-align: center; padding: 20px;">読み込み中...</td></tr>';

  try {
    // Fetch all users
    const users = await fetchUsers();

    // Filter by search term
    let filteredUsers = users;
    if (searchTerm) {
      filteredUsers = users.filter(user =>
        user.user_name.toLowerCase().includes(searchTerm) ||
        user.uuid.toLowerCase().includes(searchTerm)
      );
    }

    if (filteredUsers.length === 0) {
      tbody.innerHTML = '<tr><td colspan="4" style="text-align: center; padding: 20px;">友だちが見つかりません</td></tr>';
      return;
    }

    // Get all tags
    const allTags = getAllTags();

    // Render table rows
    tbody.innerHTML = filteredUsers.map(user => {
      const formattedDate = new Date(user.created_at).toLocaleString('ja-JP', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit'
      });

      // Get user tags
      const userTagIds = getUserTags(user.id);
      const userTags = allTags.filter(tag => userTagIds.includes(tag.id));
      const tagsHtml = userTags.length > 0
        ? userTags.map(tag => `<span class="tag-badge" style="background-color: ${tag.color};">${tag.name}</span>`).join(' ')
        : '<span style="color: #999;">タグなし</span>';

      return `
        <tr class="friend-list-row">
          <td class="friend-list-name">${user.user_name}</td>
          <td class="friend-list-uuid">${user.uuid}</td>
          <td class="friend-list-tags">${tagsHtml}</td>
          <td class="friend-list-date">${formattedDate}</td>
        </tr>
      `;
    }).join('');

  } catch (error) {
    console.error('Error loading friend list:', error);
    tbody.innerHTML = '<tr><td colspan="4" style="text-align: center; padding: 20px; color: red;">エラーが発生しました</td></tr>';
  }
}

// ===== Memo Functions =====
let currentMemoUserId = null;

// Get user memo from localStorage
function getUserMemo(userId) {
  const key = `user_${userId}_memo`;
  const memo = localStorage.getItem(key);
  if (memo !== null) {
    return memo;
  }

  // LocalStorageにない場合、モックデータから取得
  const friends = getMockFriends();
  const friend = friends.find(f => f.id == userId);
  return friend ? friend.memo : '';
}

// Save user memo to localStorage
function saveUserMemo(userId, memo) {
  const key = `user_${userId}_memo`;
  localStorage.setItem(key, memo);
}

// Open memo modal
function openMemoModal(userId) {
  currentMemoUserId = userId;
  const modal = document.getElementById('memo-modal');
  const textarea = document.getElementById('memo-textarea');

  if (!modal || !textarea) return;

  // Load existing memo
  const memo = getUserMemo(userId);
  textarea.value = memo;

  modal.style.display = 'flex';
  textarea.focus();
}

// Close memo modal
function closeMemoModal() {
  const modal = document.getElementById('memo-modal');
  if (modal) {
    modal.style.display = 'none';
    currentMemoUserId = null;
  }
}

// Save memo and close modal
function saveMemoAndClose() {
  if (currentMemoUserId === null) return;

  const textarea = document.getElementById('memo-textarea');
  if (!textarea) return;

  const memo = textarea.value.trim();
  saveUserMemo(currentMemoUserId, memo);

  // Update the display in user info
  const memoDisplay = document.querySelector('.user-info-memo');
  if (memoDisplay) {
    memoDisplay.textContent = memo || 'メモを追加...';
    memoDisplay.style.color = memo ? '#333' : '#999';
  }

  closeMemoModal();
}

// Initialize memo modal event listeners
function initializeMemoModal() {
  const closeBtn = document.getElementById('memo-close-btn');
  const cancelBtn = document.getElementById('memo-cancel-btn');
  const saveBtn = document.getElementById('memo-save-btn');
  const modal = document.getElementById('memo-modal');

  if (closeBtn) {
    closeBtn.addEventListener('click', closeMemoModal);
  }

  if (cancelBtn) {
    cancelBtn.addEventListener('click', closeMemoModal);
  }

  if (saveBtn) {
    saveBtn.addEventListener('click', saveMemoAndClose);
  }

  // Close modal when clicking outside
  if (modal) {
    modal.addEventListener('click', function(e) {
      if (e.target === modal) {
        closeMemoModal();
      }
    });
  }
}

// Call initializeMemoModal on page load
document.addEventListener('DOMContentLoaded', function() {
  initializeMemoModal();
});

// ===== Save Tags from Basic Info =====
function saveUserTagsFromBasicInfo(userId) {
  const checkboxes = document.querySelectorAll('#individual-user-info .tag-checkbox-item input[type="checkbox"]');
  const selectedTagIds = [];

  checkboxes.forEach(checkbox => {
    if (checkbox.checked) {
      selectedTagIds.push(checkbox.value);
    }
  });

  // Save to localStorage
  localStorage.setItem(`user_${userId}_tags`, JSON.stringify(selectedTagIds));

  // Show success message
  alert('タグを保存しました');

  // Refresh friends list to update tag badges
  loadIndividualPageUsers();
}

// ===== Scenario Detail Page =====
function showScenarioDetailPage(scenario) {
  // Set current scenario
  currentScenario = scenario;

  // Hide all pages
  document.querySelectorAll('.page').forEach(page => {
    page.classList.remove('active');
    page.style.display = 'none';
  });

  // Show scenario detail page
  const detailPage = document.getElementById('scenario-detail-page');
  detailPage.classList.add('active');
  detailPage.style.display = 'block';

  // Update page title and info
  document.getElementById('scenario-detail-title').textContent = scenario.name;
  document.getElementById('detail-scenario-name').textContent = scenario.name;
  document.getElementById('detail-scenario-date').textContent = scenario.createdAt;

  const stepsCountElement = document.getElementById('detail-scenario-steps');
  if (stepsCountElement) {
    stepsCountElement.textContent = scenario.steps.length;
  }

  // Update active nav item
  document.querySelectorAll('.nav-item').forEach(item => item.classList.remove('active'));
  document.querySelector('[data-page="step"]').classList.add('active');

  // Render steps list
  renderStepsList(scenario.steps);

  // Initialize event listeners
  initializeScenarioDetailPage();
}

function initializeScenarioDetailPage() {
  console.log('Initializing scenario detail page, currentScenario:', currentScenario);

  // Back to list button
  const backBtn = document.getElementById('scenario-back-btn');
  console.log('Back button element:', backBtn);
  if (backBtn) {
    // Remove old event listener if exists by cloning the button
    const newBackBtn = backBtn.cloneNode(true);
    backBtn.parentNode.replaceChild(newBackBtn, backBtn);

    newBackBtn.addEventListener('click', () => {
      console.log('Back button clicked');
      navigateToPage('step');
    });
  }

  // Add step button
  const addStepBtn = document.getElementById('add-step-btn');
  console.log('Add step button element:', addStepBtn);
  if (addStepBtn) {
    // Remove old event listener if exists by cloning the button
    const newAddStepBtn = addStepBtn.cloneNode(true);
    addStepBtn.parentNode.replaceChild(newAddStepBtn, addStepBtn);

    newAddStepBtn.addEventListener('click', () => {
      console.log('Add step button clicked, currentScenario:', currentScenario);
      openStepTimingModal();
    });
  }

  // Edit scenario name button
  const editNameBtn = document.getElementById('edit-scenario-name-btn');
  if (editNameBtn) {
    // Remove old event listener if exists by cloning the button
    const newEditNameBtn = editNameBtn.cloneNode(true);
    editNameBtn.parentNode.replaceChild(newEditNameBtn, editNameBtn);

    newEditNameBtn.addEventListener('click', () => {
      enableScenarioNameEdit();
    });
  }

  // Initialize step timing modal
  initializeStepTimingModal();
}

function enableScenarioNameEdit() {
  if (!currentScenario) return;

  const nameElement = document.getElementById('detail-scenario-name');
  const editBtn = document.getElementById('edit-scenario-name-btn');

  if (!nameElement || !editBtn) return;

  const currentName = currentScenario.name;

  // Create input field
  const input = document.createElement('input');
  input.type = 'text';
  input.value = currentName;
  input.className = 'form-input';
  input.style.flex = '1';

  // Create save button
  const saveBtn = document.createElement('button');
  saveBtn.className = 'btn-icon';
  saveBtn.innerHTML = '<i class="fa-solid fa-check"></i>';
  saveBtn.title = '保存';

  // Create cancel button
  const cancelBtn = document.createElement('button');
  cancelBtn.className = 'btn-icon';
  cancelBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>';
  cancelBtn.title = 'キャンセル';

  // Replace name element with input
  const parent = nameElement.parentElement;
  parent.innerHTML = '';
  parent.appendChild(input);
  parent.appendChild(saveBtn);
  parent.appendChild(cancelBtn);

  // Focus on input
  input.focus();
  input.select();

  // Save function
  const save = () => {
    const newName = input.value.trim();
    if (!newName) {
      alert('管理名を入力してください');
      return;
    }

    // Update scenario
    currentScenario.name = newName;

    // Update UI
    parent.innerHTML = `
      <span class="info-value" id="detail-scenario-name">${escapeHtml(newName)}</span>
      <button class="btn-icon" id="edit-scenario-name-btn" title="管理名を編集">
        <i class="fa-solid fa-pen"></i>
      </button>
    `;

    // Update page title
    document.getElementById('scenario-detail-title').textContent = newName;

    // Re-initialize edit button
    initializeScenarioDetailPage();

    console.log('Scenario name updated:', newName);
  };

  // Cancel function
  const cancel = () => {
    parent.innerHTML = `
      <span class="info-value" id="detail-scenario-name">${escapeHtml(currentName)}</span>
      <button class="btn-icon" id="edit-scenario-name-btn" title="管理名を編集">
        <i class="fa-solid fa-pen"></i>
      </button>
    `;

    // Re-initialize edit button
    initializeScenarioDetailPage();
  };

  // Event listeners
  saveBtn.addEventListener('click', save);
  cancelBtn.addEventListener('click', cancel);

  // Enter key to save
  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      save();
    } else if (e.key === 'Escape') {
      cancel();
    }
  });
}

function renderStepsList(steps) {
  const stepsList = document.getElementById('steps-list');

  if (steps.length === 0) {
    stepsList.innerHTML = `
      <div class="empty-state-small">
        <p>配信タイミングがまだ追加されていません</p>
        <p>「次の配信タイミングを追加」ボタンから追加してください</p>
      </div>
    `;
    return;
  }

  stepsList.innerHTML = steps.map((step, index) => `
    <div class="step-item">
      <div class="step-header">
        <span class="step-number">ステップ ${index + 1}</span>
        <div class="step-actions">
          <button class="btn btn-secondary btn-sm" onclick="deleteStep(${index})">削除</button>
        </div>
      </div>
      <div class="step-timing-info">
        <span>
          ${step.timing === 'immediate'
            ? 'ステップ開始直後に配信'
            : `ステップ開始から${step.days}日後の${step.time}に配信`}
        </span>
        <button class="btn btn-outline btn-sm" onclick="editStepTiming(${index})" style="margin-left: 10px;">
          <i class="fa-solid fa-pen"></i> 配信タイミングを変更
        </button>
      </div>

      <div class="step-message-actions">
        <button class="btn btn-outline btn-sm" onclick="addMessageToStep(${index})">
          <i class="fa-solid fa-plus"></i> メッセージ
        </button>
      </div>

      <div class="step-messages-list" id="step-${index}-messages">
        ${step.messages && step.messages.length > 0
          ? step.messages.map((msg, msgIndex) => `
            <div class="step-message-item">
              <div class="step-message-content">${escapeHtml(msg.content)}</div>
              <div class="step-message-item-actions">
                <button class="btn btn-sm btn-outline" onclick="editMessage(${index}, ${msgIndex})">
                  <i class="fa-solid fa-edit"></i>
                </button>
                <button class="btn btn-sm btn-secondary" onclick="deleteMessage(${index}, ${msgIndex})">
                  <i class="fa-solid fa-trash"></i>
                </button>
              </div>
            </div>
          `).join('')
          : '<div class="empty-state-small"><p>メッセージがまだ追加されていません</p></div>'}
      </div>
    </div>
  `).join('');
}

function deleteStep(index) {
  if (!currentScenario) return;

  if (confirm(`ステップ ${index + 1} を削除しますか？`)) {
    currentScenario.steps.splice(index, 1);
    document.getElementById('detail-scenario-steps').textContent = currentScenario.steps.length;
    renderStepsList(currentScenario.steps);
  }
}

let currentEditStepIndex = null;

function editStepTiming(index) {
  if (!currentScenario || !currentScenario.steps[index]) return;

  currentEditStepIndex = index;
  const step = currentScenario.steps[index];

  const modal = document.getElementById('step-timing-modal');

  // Update modal title
  document.getElementById('step-timing-title').textContent = `ステップ ${index + 1} の配信タイミングを変更`;

  // Set current timing values
  const timingRadio = document.querySelector(`input[name="stepDeliveryTiming"][value="${step.timing}"]`);
  if (timingRadio) {
    timingRadio.checked = true;
  }

  if (step.timing === 'scheduled') {
    document.getElementById('step-days').value = step.days || 0;
    document.getElementById('step-time').value = step.time || '09:00';
    document.getElementById('step-scheduled-group').style.display = 'block';
    updateStepTimingPreview();
  } else {
    document.getElementById('step-scheduled-group').style.display = 'none';
  }

  // Change button text to "更新"
  const addBtn = document.getElementById('step-timing-add-btn');
  addBtn.textContent = '更新';

  // Show modal
  modal.style.display = 'flex';
}

// ===== Message Management =====
let currentStepIndex = null;
let currentMessageIndex = null;
let messageModalInitialized = false;

function initializeMessageModal() {
  if (messageModalInitialized) return;
  messageModalInitialized = true;

  const modal = document.getElementById('message-modal');
  const closeBtn = document.getElementById('message-close-btn');
  const cancelBtn = document.getElementById('message-cancel-btn');
  const addBtn = document.getElementById('message-add-btn');

  // Close modal events
  closeBtn.addEventListener('click', closeMessageModal);
  cancelBtn.addEventListener('click', closeMessageModal);

  // Close modal when clicking outside
  modal.addEventListener('click', function (e) {
    if (e.target === modal) {
      closeMessageModal();
    }
  });

  // Add message handler
  addBtn.addEventListener('click', handleMessageAdd);
}

function addMessageToStep(stepIndex) {
  currentStepIndex = stepIndex;
  currentMessageIndex = null;

  // Initialize modal if not done yet
  initializeMessageModal();

  // Update modal title
  document.getElementById('message-modal-title').textContent = `ステップ ${stepIndex + 1} にメッセージを追加`;

  // Reset form
  document.getElementById('message-content').value = '';

  // Update button text
  document.getElementById('message-add-btn').textContent = '追加';

  // Show modal
  document.getElementById('message-modal').style.display = 'flex';

  // Focus on textarea
  setTimeout(() => {
    document.getElementById('message-content').focus();
  }, 100);
}

function addTemplateToStep(stepIndex) {
  alert('テンプレート機能は実装予定です');
}

function closeMessageModal() {
  document.getElementById('message-modal').style.display = 'none';
  currentStepIndex = null;
  currentMessageIndex = null;
}

function handleMessageAdd() {
  if (!currentScenario || currentStepIndex === null) return;

  const content = document.getElementById('message-content').value.trim();

  // Validation
  if (!content) {
    alert('メッセージを入力してください');
    return;
  }

  const step = currentScenario.steps[currentStepIndex];

  if (currentMessageIndex !== null) {
    // Edit existing message
    step.messages[currentMessageIndex].content = content;
  } else {
    // Add new message
    if (!step.messages) {
      step.messages = [];
    }
    step.messages.push({
      type: 'text',
      content: content
    });
  }

  console.log('Message added/updated:', { stepIndex: currentStepIndex, content });

  // Update UI
  renderStepsList(currentScenario.steps);

  // Close modal
  closeMessageModal();
}

function editMessage(stepIndex, messageIndex) {
  if (!currentScenario) return;

  currentStepIndex = stepIndex;
  currentMessageIndex = messageIndex;

  const message = currentScenario.steps[stepIndex].messages[messageIndex];

  // Initialize modal if not done yet
  initializeMessageModal();

  // Update modal title
  document.getElementById('message-modal-title').textContent = `メッセージを編集`;

  // Fill form with existing data
  document.getElementById('message-content').value = message.content;

  // Update button text
  document.getElementById('message-add-btn').textContent = '更新';

  // Show modal
  document.getElementById('message-modal').style.display = 'flex';

  // Focus on textarea
  setTimeout(() => {
    document.getElementById('message-content').focus();
  }, 100);
}

function deleteMessage(stepIndex, messageIndex) {
  if (!currentScenario) return;

  if (confirm('このメッセージを削除しますか？')) {
    currentScenario.steps[stepIndex].messages.splice(messageIndex, 1);
    renderStepsList(currentScenario.steps);
  }
}

// ===== Step Timing Modal =====
let stepTimingModalInitialized = false;

function initializeStepTimingModal() {
  if (stepTimingModalInitialized) return;
  stepTimingModalInitialized = true;

  const modal = document.getElementById('step-timing-modal');
  const closeBtn = document.getElementById('step-timing-close-btn');
  const cancelBtn = document.getElementById('step-timing-cancel-btn');
  const addBtn = document.getElementById('step-timing-add-btn');
  const deliveryTimingRadios = document.querySelectorAll('input[name="stepDeliveryTiming"]');

  // Close modal events
  closeBtn.addEventListener('click', closeStepTimingModal);
  cancelBtn.addEventListener('click', closeStepTimingModal);

  // Close modal when clicking outside
  modal.addEventListener('click', function (e) {
    if (e.target === modal) {
      closeStepTimingModal();
    }
  });

  // Delivery timing change handler
  deliveryTimingRadios.forEach(radio => {
    radio.addEventListener('change', function() {
      handleStepDeliveryTimingChange(this.value);
    });
  });

  // Add step handler
  addBtn.addEventListener('click', handleStepAdd);

  // Add input event listeners for real-time preview
  const daysInput = document.getElementById('step-days');
  const timeInput = document.getElementById('step-time');

  if (daysInput) {
    daysInput.addEventListener('input', updateStepTimingPreview);
  }
  if (timeInput) {
    timeInput.addEventListener('input', updateStepTimingPreview);
  }
}

function openStepTimingModal() {
  console.log('openStepTimingModal called, currentScenario:', currentScenario);
  if (!currentScenario) {
    console.error('currentScenario is null!');
    return;
  }

  // Reset edit index
  currentEditStepIndex = null;

  const modal = document.getElementById('step-timing-modal');
  const stepNumber = currentScenario.steps.length + 1;

  console.log('Opening step timing modal, step number:', stepNumber);

  // Update modal title
  document.getElementById('step-timing-title').textContent = `ステップ ${stepNumber} の配信タイミング`;

  // Reset form
  document.querySelector('input[name="stepDeliveryTiming"][value="immediate"]').checked = true;
  document.getElementById('step-days').value = '0';
  document.getElementById('step-time').value = '09:00';
  document.getElementById('step-scheduled-group').style.display = 'none';

  // Reset button text
  document.getElementById('step-timing-add-btn').textContent = '追加';

  // Reset preview
  updateStepTimingPreview();

  modal.style.display = 'flex';
}

function closeStepTimingModal() {
  const modal = document.getElementById('step-timing-modal');
  modal.style.display = 'none';
}

function handleStepDeliveryTimingChange(timing) {
  const scheduledGroup = document.getElementById('step-scheduled-group');

  if (timing === 'scheduled') {
    scheduledGroup.style.display = 'block';
    updateStepTimingPreview();
  } else {
    scheduledGroup.style.display = 'none';
  }
}

function handleStepAdd() {
  if (!currentScenario) return;

  const deliveryTiming = document.querySelector('input[name="stepDeliveryTiming"]:checked').value;
  const scheduledDays = document.getElementById('step-days').value;
  const scheduledTime = document.getElementById('step-time').value;

  // Validation
  if (deliveryTiming === 'scheduled') {
    if (!scheduledDays || scheduledDays < 0 || scheduledDays > 30) {
      alert('経過日数を0〜30日の範囲で指定してください');
      return;
    }
    if (!scheduledTime) {
      alert('配信時間を指定してください');
      return;
    }
  }

  // Check if editing existing step or adding new one
  if (currentEditStepIndex !== null) {
    // Update existing step
    const step = currentScenario.steps[currentEditStepIndex];
    step.timing = deliveryTiming;
    step.days = deliveryTiming === 'scheduled' ? parseInt(scheduledDays) : 0;
    step.time = deliveryTiming === 'scheduled' ? scheduledTime : null;

    console.log('Updating step:', step);

    // Reset edit index
    currentEditStepIndex = null;
  } else {
    // Create new step object
    const newStep = {
      timing: deliveryTiming,
      days: deliveryTiming === 'scheduled' ? parseInt(scheduledDays) : 0,
      time: deliveryTiming === 'scheduled' ? scheduledTime : null,
      messages: []  // メッセージは別途追加する
    };

    // Add step to scenario
    currentScenario.steps.push(newStep);

    console.log('Adding step:', newStep);
  }

  // Update UI
  const stepsCountElement = document.getElementById('detail-scenario-steps');
  if (stepsCountElement) {
    stepsCountElement.textContent = currentScenario.steps.length;
  }
  renderStepsList(currentScenario.steps);

  // Close modal
  closeStepTimingModal();
}

function updateStepTimingPreview() {
  const daysInput = document.getElementById('step-days');
  const timeInput = document.getElementById('step-time');
  const previewDays = document.getElementById('step-preview-days');
  const previewTime = document.getElementById('step-preview-time');

  if (daysInput && timeInput && previewDays && previewTime) {
    const days = daysInput.value || '0';
    const time = timeInput.value || '09:00';

    previewDays.textContent = days;
    previewTime.textContent = time;
  }
}
