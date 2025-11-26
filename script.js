// ===== MOCK DATA =====
// 友だちデータ
const MOCK_FRIENDS = [
  {
    id: 1,
    name: "田中太郎",
    lineId: "U001",
    tags: [1, 3],
    registeredAt: "2025-10-15",
    memo: "製品Aに興味あり",
    bookmarked: true,
    readStatus: "unread",
  },
  {
    id: 2,
    name: "鈴木花子",
    lineId: "U002",
    tags: [2],
    registeredAt: "2025-10-14",
    memo: "",
    bookmarked: false,
    readStatus: "read",
  },
  {
    id: 3,
    name: "佐藤次郎",
    lineId: "U003",
    tags: [1, 2],
    registeredAt: "2025-10-13",
    memo: "月次レポート希望",
    bookmarked: true,
    readStatus: "unread",
  },
  {
    id: 4,
    name: "高橋美咲",
    lineId: "U004",
    tags: [],
    registeredAt: "2025-10-12",
    memo: "",
    bookmarked: false,
    readStatus: "read",
  },
  {
    id: 5,
    name: "伊藤健一",
    lineId: "U005",
    tags: [3],
    registeredAt: "2025-10-11",
    memo: "",
    bookmarked: false,
    readStatus: "read",
  },
  {
    id: 6,
    name: "渡辺さくら",
    lineId: "U006",
    tags: [1],
    registeredAt: "2025-09-10",
    memo: "VIP対応",
    bookmarked: true,
    readStatus: "unread",
  },
  {
    id: 7,
    name: "山本太一",
    lineId: "U007",
    tags: [2, 3],
    registeredAt: "2025-09-09",
    memo: "",
    bookmarked: false,
    readStatus: "read",
  },
  {
    id: 8,
    name: "中村結衣",
    lineId: "U008",
    tags: [],
    registeredAt: "2025-08-08",
    memo: "",
    bookmarked: false,
    readStatus: "read",
  },
  {
    id: 9,
    name: "小林大輔",
    lineId: "U009",
    tags: [1],
    registeredAt: "2025-08-07",
    memo: "請求書発行済み",
    bookmarked: false,
    readStatus: "read",
  },
  {
    id: 10,
    name: "加藤愛",
    lineId: "U010",
    tags: [3],
    registeredAt: "2025-07-06",
    memo: "",
    bookmarked: false,
    readStatus: "unread",
  },
  {
    id: 11,
    name: "吉田悠斗",
    lineId: "U011",
    tags: [2],
    registeredAt: "2025-07-05",
    memo: "",
    bookmarked: false,
    readStatus: "read",
  },
  {
    id: 12,
    name: "山田陽菜",
    lineId: "U012",
    tags: [],
    registeredAt: "2025-06-04",
    memo: "",
    bookmarked: false,
    readStatus: "read",
  },
  {
    id: 13,
    name: "佐々木蓮",
    lineId: "U013",
    tags: [1, 2],
    registeredAt: "2025-06-03",
    memo: "次回フォロー: 11/1",
    bookmarked: true,
    readStatus: "unread",
  },
  {
    id: 14,
    name: "松本葵",
    lineId: "U014",
    tags: [],
    registeredAt: "2025-05-02",
    memo: "",
    bookmarked: false,
    readStatus: "read",
  },
  {
    id: 15,
    name: "井上颯太",
    lineId: "U015",
    tags: [3],
    registeredAt: "2025-05-01",
    memo: "",
    bookmarked: false,
    readStatus: "read",
  },
];

// タグデータ
const MOCK_TAGS = [
  { id: 1, name: "VIP顧客", color: "#00b900" },
  { id: 2, name: "問い合わせ対応中", color: "#f59e0b" },
  { id: 3, name: "資料送付済み", color: "#3b82f6" },
  { id: 4, name: "要フォローアップ", color: "#ef4444" },
  { id: 5, name: "キャンペーン参加", color: "#8b5cf6" },
];

// メッセージデータ
const MOCK_MESSAGES = {
  1: [
    {
      id: 1,
      sender: "user",
      content: "こんにちは！製品Aについて詳しく教えてください。",
      timestamp: "2025-10-15 10:30",
    },
    {
      id: 2,
      sender: "admin",
      content: "お問い合わせありがとうございます。製品Aは当社の主力商品で...",
      timestamp: "2025-10-15 10:35",
    },
    {
      id: 3,
      sender: "user",
      content: "価格はいくらですか？",
      timestamp: "2025-10-15 10:40",
    },
    {
      id: 4,
      sender: "admin",
      content: "製品Aの価格は¥9,800です。",
      timestamp: "2025-10-15 10:42",
    },
  ],
  2: [
    {
      id: 1,
      sender: "user",
      content: "配送状況を教えてください",
      timestamp: "2025-10-14 14:20",
    },
    {
      id: 2,
      sender: "admin",
      content: "ご注文の商品は本日発送いたしました。",
      timestamp: "2025-10-14 14:25",
    },
    {
      id: 3,
      sender: "user",
      content: "ありがとうございます！",
      timestamp: "2025-10-14 14:30",
    },
  ],
  3: [
    {
      id: 1,
      sender: "user",
      content: "月次レポートをお願いします",
      timestamp: "2025-10-13 09:00",
    },
    {
      id: 2,
      sender: "admin",
      content: "承知いたしました。準備でき次第お送りします。",
      timestamp: "2025-10-13 09:15",
    },
    {
      id: 3,
      sender: "user",
      content: "いつ頃になりそうですか？",
      timestamp: "2025-10-13 11:00",
    },
  ],
  6: [
    {
      id: 1,
      sender: "user",
      content: "VIPプランについて教えてください",
      timestamp: "2025-09-10 15:00",
    },
    {
      id: 2,
      sender: "admin",
      content: "VIPプランは月額¥29,800で...",
      timestamp: "2025-09-10 15:10",
    },
    {
      id: 3,
      sender: "user",
      content: "申し込みたいです",
      timestamp: "2025-09-10 15:20",
    },
  ],
  13: [
    {
      id: 1,
      sender: "user",
      content: "次回の打ち合わせはいつですか？",
      timestamp: "2025-06-03 10:00",
    },
    {
      id: 2,
      sender: "admin",
      content: "11月1日の14時でいかがでしょうか？",
      timestamp: "2025-06-03 10:15",
    },
  ],
};

// 一斉配信・ステップ配信の共通ダミーメッセージ（全ユーザー共通）
const MOCK_DELIVERY_MESSAGES = [
  // 一斉配信メッセージ
  {
    id: 1001,
    sender: "admin",
    content: "いつもご利用ありがとうございます。新商品が入荷しました！",
    timestamp: "2025-10-14 09:00",
    type: "broadcast",
  },
  {
    id: 1002,
    sender: "admin",
    content: "秋のキャンペーンを開始しました！対象商品が最大30%OFF。",
    timestamp: "2025-10-13 12:00",
    type: "broadcast",
  },
  // ステップ配信メッセージ
  {
    id: 2001,
    sender: "admin",
    content: "ご登録ありがとうございます！定期的にお得な情報をお届けします。",
    timestamp: "2025-10-12 10:00",
    type: "step",
  },
  {
    id: 2002,
    sender: "admin",
    content: "当店のおすすめ商品をご紹介します。人気No.1は製品Aです！",
    timestamp: "2025-10-13 10:00",
    type: "step",
  },
  // ユーザーからの返信メッセージ
  {
    id: 3001,
    sender: "user",
    content: "新商品の情報ありがとうございます！詳しく教えてください。",
    timestamp: "2025-10-14 10:30",
    type: "individual",
  },
  {
    id: 3002,
    sender: "user",
    content: "キャンペーン商品を購入したいです。",
    timestamp: "2025-10-13 15:00",
    type: "individual",
  },
];

// LocalStorageからデータを読み込むか、初期データを設定
function initializeMockData() {
  if (!localStorage.getItem("mockFriends")) {
    localStorage.setItem("mockFriends", JSON.stringify(MOCK_FRIENDS));
  }
  if (!localStorage.getItem("mockTags")) {
    localStorage.setItem("mockTags", JSON.stringify(MOCK_TAGS));
  }
  if (!localStorage.getItem("mockMessages")) {
    localStorage.setItem("mockMessages", JSON.stringify(MOCK_MESSAGES));
  }

  // MOCKデータのタグ情報をlocalStorageに保存（常に更新）
  MOCK_FRIENDS.forEach((friend) => {
    const key = `user_tags_${friend.id}`;
    localStorage.setItem(key, JSON.stringify(friend.tags || []));
  });
}

// データ取得関数
function getMockFriends() {
  return JSON.parse(localStorage.getItem("mockFriends") || "[]");
}

function getMockTags() {
  return JSON.parse(localStorage.getItem("mockTags") || "[]");
}

function getMockMessages(userId) {
  const allMessages = JSON.parse(localStorage.getItem("mockMessages") || "{}");
  return allMessages[userId] || [];
}

function saveMockFriends(friends) {
  localStorage.setItem("mockFriends", JSON.stringify(friends));
}

function saveMockTags(tags) {
  localStorage.setItem("mockTags", JSON.stringify(tags));
}

function saveMockMessages(messages) {
  localStorage.setItem("mockMessages", JSON.stringify(messages));
}

// Application State
let currentUser = null;
let currentPage = "dashboard";
let currentChatUserId = null;
let currentChatUserName = null;
let userDraftMessages = {}; // Store draft messages per user
let currentAccount = "account1"; // Current selected account
let pendingVerificationEmail = null; // 認証待ちのメールアドレス
let pendingResetEmail = null; // パスワードリセット待ちのメールアドレス
let currentBroadcastStatusFilter = "配信予約中"; // Current broadcast status filter

// DOM Elements
const loginContainer = document.getElementById("login-container");
const signupContainer = document.getElementById("signup-container");
const verificationContainer = document.getElementById("verification-container");
const passwordResetContainer = document.getElementById(
  "password-reset-container"
);
const resetCodeContainer = document.getElementById("reset-code-container");
const newPasswordContainer = document.getElementById("new-password-container");
const mainApp = document.getElementById("main-app");
const loginForm = document.getElementById("login-form");
const signupForm = document.getElementById("signup-form");
const verificationForm = document.getElementById("verification-form");
const passwordResetForm = document.getElementById("password-reset-form");
const resetCodeForm = document.getElementById("reset-code-form");
const newPasswordForm = document.getElementById("new-password-form");
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

  // Signup form submission
  signupForm.addEventListener("submit", handleSignup);

  // Verification form submission
  verificationForm.addEventListener("submit", handleVerification);

  // Password reset form submission
  passwordResetForm.addEventListener("submit", handlePasswordReset);

  // Reset code form submission
  resetCodeForm.addEventListener("submit", handleResetCode);

  // New password form submission
  newPasswordForm.addEventListener("submit", handleNewPassword);

  // Navigation links between login and signup screens
  const gotoSignupLink = document.getElementById("goto-signup-link");
  const gotoLoginLink = document.getElementById("goto-login-link");
  const gotoPasswordResetLink = document.querySelector('a[href="#forgot"]');
  const gotoLoginFromResetLink = document.getElementById(
    "goto-login-from-reset-link"
  );

  if (gotoSignupLink) {
    gotoSignupLink.addEventListener("click", function (e) {
      e.preventDefault();
      showSignupScreen();
    });
  }

  if (gotoLoginLink) {
    gotoLoginLink.addEventListener("click", function (e) {
      e.preventDefault();
      showLoginScreen();
    });
  }

  if (gotoPasswordResetLink) {
    gotoPasswordResetLink.addEventListener("click", function (e) {
      e.preventDefault();
      showPasswordResetScreen();
    });
  }

  if (gotoLoginFromResetLink) {
    gotoLoginFromResetLink.addEventListener("click", function (e) {
      e.preventDefault();
      showLoginScreen();
    });
  }

  // Logout button
  logoutBtn.addEventListener("click", handleLogout);

  // Account selector
  const accountSelect = document.getElementById("account-select");
  if (accountSelect) {
    // Load saved account from localStorage
    const savedAccount = localStorage.getItem("currentAccount");
    if (savedAccount) {
      currentAccount = savedAccount;
      accountSelect.value = savedAccount;
    }

    accountSelect.addEventListener("change", handleAccountChange);
  }

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

function handleAccountChange(e) {
  const newAccount = e.target.value;
  currentAccount = newAccount;

  // Save to localStorage
  localStorage.setItem("currentAccount", newAccount);

  // Show notification
  console.log(`アカウントを ${getAccountName(newAccount)} に切り替えました`);

  // Reload current page data with new account context
  // In a real application, you would fetch data for the selected account
  // For now, we'll just refresh the current page
  navigateToPage(currentPage);
}

function getAccountName(accountId) {
  const accountNames = {
    account1: "メインアカウント",
    account2: "サブアカウント",
    account3: "テストアカウント",
  };
  return accountNames[accountId] || accountId;
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
  signupContainer.style.display = "none";
  verificationContainer.style.display = "none";
  passwordResetContainer.style.display = "none";
  resetCodeContainer.style.display = "none";
  newPasswordContainer.style.display = "none";
  mainApp.style.display = "none";
  hideError();
}

function showSignupScreen() {
  loginContainer.style.display = "none";
  signupContainer.style.display = "flex";
  verificationContainer.style.display = "none";
  passwordResetContainer.style.display = "none";
  resetCodeContainer.style.display = "none";
  newPasswordContainer.style.display = "none";
  mainApp.style.display = "none";
  hideSignupError();
}

function showVerificationScreen() {
  loginContainer.style.display = "none";
  signupContainer.style.display = "none";
  verificationContainer.style.display = "flex";
  passwordResetContainer.style.display = "none";
  resetCodeContainer.style.display = "none";
  newPasswordContainer.style.display = "none";
  mainApp.style.display = "none";

  // Set the email address in verification screen
  if (pendingVerificationEmail) {
    document.getElementById("verification-email").textContent =
      pendingVerificationEmail;
  }

  hideVerificationError();
}

function showPasswordResetScreen() {
  loginContainer.style.display = "none";
  signupContainer.style.display = "none";
  verificationContainer.style.display = "none";
  passwordResetContainer.style.display = "flex";
  resetCodeContainer.style.display = "none";
  newPasswordContainer.style.display = "none";
  mainApp.style.display = "none";
  hidePasswordResetError();
}

function showResetCodeScreen() {
  loginContainer.style.display = "none";
  signupContainer.style.display = "none";
  verificationContainer.style.display = "none";
  passwordResetContainer.style.display = "none";
  resetCodeContainer.style.display = "flex";
  newPasswordContainer.style.display = "none";
  mainApp.style.display = "none";

  // Set the email address in reset code screen
  if (pendingResetEmail) {
    document.getElementById("reset-code-email").textContent = pendingResetEmail;
  }

  hideResetCodeError();
}

function showNewPasswordScreen() {
  loginContainer.style.display = "none";
  signupContainer.style.display = "none";
  verificationContainer.style.display = "none";
  passwordResetContainer.style.display = "none";
  resetCodeContainer.style.display = "none";
  newPasswordContainer.style.display = "flex";
  mainApp.style.display = "none";
  hideNewPasswordError();
}

function showMainApp() {
  loginContainer.style.display = "none";
  signupContainer.style.display = "none";
  verificationContainer.style.display = "none";
  passwordResetContainer.style.display = "none";
  resetCodeContainer.style.display = "none";
  newPasswordContainer.style.display = "none";
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

// ===== Signup Functions =====
function handleSignup(e) {
  e.preventDefault();

  const email = document.getElementById("signup-email").value;
  const password = document.getElementById("signup-password").value;
  const signupBtn = document.getElementById("signup-btn");

  // Validate inputs
  if (!validateRequired(email) || !validateRequired(password)) {
    showSignupError("メールアドレスとパスワードを入力してください");
    return;
  }

  if (!validateEmail(email)) {
    showSignupError("有効なメールアドレスを入力してください");
    return;
  }

  if (password.length < 6) {
    showSignupError("パスワードは6文字以上で入力してください");
    return;
  }

  // Show loading state
  signupBtn.textContent = "登録中...";
  signupBtn.disabled = true;
  hideSignupError();

  // Simulate API call
  setTimeout(() => {
    // Successful signup - move to verification
    pendingVerificationEmail = email;
    showVerificationScreen();

    // Reset form
    signupBtn.textContent = "新規登録";
    signupBtn.disabled = false;
    document.getElementById("signup-email").value = "";
    document.getElementById("signup-password").value = "";
  }, 1000);
}

function showSignupError(message) {
  const errorMessage = document.getElementById("signup-error-message");
  errorMessage.textContent = message;
  errorMessage.style.display = "block";
}

function hideSignupError() {
  const errorMessage = document.getElementById("signup-error-message");
  errorMessage.style.display = "none";
}

// ===== Verification Functions =====
function handleVerification(e) {
  e.preventDefault();

  const code = document.getElementById("verification-code").value;
  const verificationBtn = document.getElementById("verification-btn");

  // Validate input
  if (!validateRequired(code) || code.length !== 6) {
    showVerificationError("6桁の認証コードを入力してください");
    return;
  }

  // Show loading state
  verificationBtn.textContent = "認証中...";
  verificationBtn.disabled = true;
  hideVerificationError();

  // Simulate API call
  setTimeout(() => {
    if (code === "123456") {
      // Successful verification
      currentUser = { email: pendingVerificationEmail };
      sessionStorage.setItem("isLoggedIn", "true");
      sessionStorage.setItem("userEmail", pendingVerificationEmail);
      showMainApp();

      // Reset form
      verificationBtn.textContent = "認証";
      verificationBtn.disabled = false;
      document.getElementById("verification-code").value = "";
      pendingVerificationEmail = null;
    } else {
      // Failed verification
      showVerificationError("認証コードが正しくありません");
      verificationBtn.textContent = "認証";
      verificationBtn.disabled = false;
    }
  }, 1000);
}

function showVerificationError(message) {
  const errorMessage = document.getElementById("verification-error-message");
  errorMessage.textContent = message;
  errorMessage.style.display = "block";
}

function hideVerificationError() {
  const errorMessage = document.getElementById("verification-error-message");
  errorMessage.style.display = "none";
}

// ===== Password Reset Functions =====
function handlePasswordReset(e) {
  e.preventDefault();

  const email = document.getElementById("reset-email").value;
  const resetBtn = document.getElementById("password-reset-btn");

  // Validate input
  if (!validateRequired(email)) {
    showPasswordResetError("メールアドレスを入力してください");
    return;
  }

  if (!validateEmail(email)) {
    showPasswordResetError("有効なメールアドレスを入力してください");
    return;
  }

  // Show loading state
  resetBtn.textContent = "送信中...";
  resetBtn.disabled = true;
  hidePasswordResetError();

  // Simulate API call
  setTimeout(() => {
    // Successful - move to reset code screen
    pendingResetEmail = email;
    showResetCodeScreen();

    // Reset form
    resetBtn.textContent = "リセットコードを送信";
    resetBtn.disabled = false;
    document.getElementById("reset-email").value = "";
  }, 1000);
}

function showPasswordResetError(message) {
  const errorMessage = document.getElementById("password-reset-error-message");
  errorMessage.textContent = message;
  errorMessage.style.display = "block";
}

function hidePasswordResetError() {
  const errorMessage = document.getElementById("password-reset-error-message");
  errorMessage.style.display = "none";
}

function handleResetCode(e) {
  e.preventDefault();

  const code = document.getElementById("reset-code").value;
  const resetCodeBtn = document.getElementById("reset-code-btn");

  // Validate input
  if (!validateRequired(code) || code.length !== 6) {
    showResetCodeError("6桁のリセットコードを入力してください");
    return;
  }

  // Show loading state
  resetCodeBtn.textContent = "確認中...";
  resetCodeBtn.disabled = true;
  hideResetCodeError();

  // Simulate API call
  setTimeout(() => {
    if (code === "654321") {
      // Successful verification - move to new password screen
      showNewPasswordScreen();

      // Reset form
      resetCodeBtn.textContent = "確認";
      resetCodeBtn.disabled = false;
      document.getElementById("reset-code").value = "";
    } else {
      // Failed verification
      showResetCodeError("リセットコードが正しくありません");
      resetCodeBtn.textContent = "確認";
      resetCodeBtn.disabled = false;
    }
  }, 1000);
}

function showResetCodeError(message) {
  const errorMessage = document.getElementById("reset-code-error-message");
  errorMessage.textContent = message;
  errorMessage.style.display = "block";
}

function hideResetCodeError() {
  const errorMessage = document.getElementById("reset-code-error-message");
  errorMessage.style.display = "none";
}

function handleNewPassword(e) {
  e.preventDefault();

  const newPassword = document.getElementById("new-password").value;
  const confirmPassword = document.getElementById("confirm-password").value;
  const newPasswordBtn = document.getElementById("new-password-btn");

  // Validate inputs
  if (!validateRequired(newPassword) || !validateRequired(confirmPassword)) {
    showNewPasswordError("新しいパスワードを入力してください");
    return;
  }

  if (newPassword.length < 6) {
    showNewPasswordError("パスワードは6文字以上で入力してください");
    return;
  }

  if (newPassword !== confirmPassword) {
    showNewPasswordError("パスワードが一致しません");
    return;
  }

  // Show loading state
  newPasswordBtn.textContent = "設定中...";
  newPasswordBtn.disabled = true;
  hideNewPasswordError();

  // Simulate API call
  setTimeout(() => {
    // Successful password reset - show login screen with success message
    alert(
      "パスワードが正常にリセットされました。新しいパスワードでログインしてください。"
    );
    showLoginScreen();

    // Reset form
    newPasswordBtn.textContent = "パスワードを設定";
    newPasswordBtn.disabled = false;
    document.getElementById("new-password").value = "";
    document.getElementById("confirm-password").value = "";
    pendingResetEmail = null;
  }, 1000);
}

function showNewPasswordError(message) {
  const errorMessage = document.getElementById("new-password-error-message");
  errorMessage.textContent = message;
  errorMessage.style.display = "block";
}

function hideNewPasswordError() {
  const errorMessage = document.getElementById("new-password-error-message");
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
  const deliveryTimingRadios = document.querySelectorAll(
    'input[name="deliveryTiming"]'
  );
  deliveryTimingRadios.forEach((radio) => {
    radio.addEventListener("change", function () {
      handleBroadcastDeliveryTimingChange(this.value);
    });
  });

  // Reset friend selection state when broadcast page is loaded
  friendSelectionInitialized = false;
  selectedFriends.clear();

  // Hide tag selection area initially
  const tagSelectionArea = document.getElementById("tag-selection-area");
  if (tagSelectionArea) {
    tagSelectionArea.style.display = "none";
  }

  // Hide scheduled datetime initially
  const scheduledDatetimeGroup = document.getElementById(
    "scheduled-datetime-group"
  );
  if (scheduledDatetimeGroup) {
    scheduledDatetimeGroup.style.display = "none";
  }

  // Initialize time select with 5-minute intervals
  initializeBroadcastTimeSelect();

  // Add event listener for broadcast send button
  const sendBtn = document.getElementById("broadcast-send-btn");
  if (sendBtn) {
    // Remove existing listeners
    const newSendBtn = sendBtn.cloneNode(true);
    sendBtn.parentNode.replaceChild(newSendBtn, sendBtn);

    newSendBtn.addEventListener("click", sendBroadcast);
  }
}

// Update broadcast date minimum to today
function updateBroadcastDateMin() {
  const dateInput = document.getElementById("broadcast-date");
  if (!dateInput) return;

  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");
  dateInput.min = `${year}-${month}-${day}`;
}

// Initialize broadcast time select with 5-minute intervals
function initializeBroadcastTimeSelect() {
  const timeSelect = document.getElementById("broadcast-time");
  const dateInput = document.getElementById("broadcast-date");
  if (!timeSelect) return;

  // Check if selected date is today
  const now = new Date();
  const selectedDate = dateInput ? dateInput.value : "";
  const today = new Date();
  const todayStr = `${today.getFullYear()}-${String(
    today.getMonth() + 1
  ).padStart(2, "0")}-${String(today.getDate()).padStart(2, "0")}`;
  const isToday = selectedDate === todayStr;

  // Calculate minimum time (current time + 5 minutes, rounded up to next 5-minute interval)
  let minHour = 0;
  let minMinute = 0;
  if (isToday) {
    const fiveMinutesLater = new Date(now.getTime() + 5 * 60 * 1000);
    minHour = fiveMinutesLater.getHours();
    minMinute = Math.ceil(fiveMinutesLater.getMinutes() / 5) * 5;
    if (minMinute >= 60) {
      minMinute = 0;
      minHour += 1;
    }
  }

  // Generate time options in 5-minute intervals
  const options = [];
  for (let hour = 0; hour < 24; hour++) {
    for (let minute = 0; minute < 60; minute += 5) {
      // Skip times before minimum time if today
      if (
        isToday &&
        (hour < minHour || (hour === minHour && minute < minMinute))
      ) {
        continue;
      }

      const hourStr = String(hour).padStart(2, "0");
      const minuteStr = String(minute).padStart(2, "0");
      const timeValue = `${hourStr}:${minuteStr}`;
      options.push(`<option value="${timeValue}">${timeValue}</option>`);
    }
  }

  const currentValue = timeSelect.value;
  timeSelect.innerHTML = options.join("");

  // Restore previous value if still valid, otherwise set first option
  if (
    currentValue &&
    options.some((opt) => opt.includes(`value="${currentValue}"`))
  ) {
    timeSelect.value = currentValue;
  } else if (options.length > 0) {
    timeSelect.value = options[0].match(/value="([^"]+)"/)[1];
  }
}

// Initialize step time select (5-minute intervals, with optional date restrictions)
function initializeStepTimeSelect(
  selectId,
  daysInputId,
  defaultValue = "09:00"
) {
  const timeSelect = document.getElementById(selectId);
  const daysInput = document.getElementById(daysInputId);
  if (!timeSelect) return;

  // Check if days is 0 (same day delivery)
  const days = daysInput ? parseInt(daysInput.value, 10) : null;
  const isToday = days === 0;

  // Calculate minimum time if today (current time + 5 minutes)
  let minHour = 0;
  let minMinute = 0;
  if (isToday) {
    const now = new Date();
    const fiveMinutesLater = new Date(now.getTime() + 5 * 60 * 1000);
    minHour = fiveMinutesLater.getHours();
    minMinute = Math.ceil(fiveMinutesLater.getMinutes() / 5) * 5;
    if (minMinute >= 60) {
      minMinute = 0;
      minHour += 1;
    }
  }

  // Generate time options
  const options = [];
  for (let hour = 0; hour < 24; hour++) {
    for (let minute = 0; minute < 60; minute += 5) {
      // Skip times before minimum time if today
      if (
        isToday &&
        (hour < minHour || (hour === minHour && minute < minMinute))
      ) {
        continue;
      }

      const hourStr = String(hour).padStart(2, "0");
      const minuteStr = String(minute).padStart(2, "0");
      const timeValue = `${hourStr}:${minuteStr}`;
      options.push(`<option value="${timeValue}">${timeValue}</option>`);
    }
  }

  const currentValue = timeSelect.value;
  timeSelect.innerHTML = options.join("");

  if (
    currentValue &&
    options.some((opt) => opt.includes(`value="${currentValue}"`))
  ) {
    timeSelect.value = currentValue;
  } else if (options.length > 0) {
    timeSelect.value = options[0].match(/value="([^"]+)"/)[1];
  } else {
    timeSelect.value = defaultValue;
  }
}

// Handle broadcast delivery timing change
function handleBroadcastDeliveryTimingChange(timing) {
  const scheduledDatetimeGroup = document.getElementById(
    "scheduled-datetime-group"
  );

  if (timing === "scheduled") {
    scheduledDatetimeGroup.style.display = "block";
  } else {
    scheduledDatetimeGroup.style.display = "none";
  }
}

function handleMessageTypeChange(type) {
  // Only text messages are supported
  console.log("Message type changed to:", type);
}

function handleTargetChange(target) {
  const tagSelectionArea = document.getElementById("tag-selection-area");

  if (target === "tags") {
    // タグで絞り込み選択時はタグ選択UIを表示
    tagSelectionArea.style.display = "block";
    initializeBroadcastTagSelection();
  } else {
    // その他の場合は非表示
    tagSelectionArea.style.display = "none";
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
  const emailInput = document.getElementById("settings-email");
  const passwordInput = document.getElementById("settings-password");
  const editBtn = document.getElementById("settings-edit-btn");
  const saveCancelGroup = document.getElementById("settings-save-cancel-group");
  const saveBtn = document.getElementById("settings-save-btn");
  const cancelBtn = document.getElementById("settings-cancel-btn");

  // 元の値を保存する変数
  let originalEmail = "";
  let originalPassword = "";

  // 編集ボタンのクリックイベント
  if (editBtn) {
    editBtn.addEventListener("click", function () {
      // 現在の値を保存
      originalEmail = emailInput.value;
      originalPassword = passwordInput.value;

      // 入力フィールドを有効化
      emailInput.disabled = false;
      passwordInput.disabled = false;

      // ボタンの表示を切り替え
      editBtn.style.display = "none";
      saveCancelGroup.style.display = "flex";
    });
  }

  // 保存ボタンのクリックイベント
  if (saveBtn) {
    saveBtn.addEventListener("click", function () {
      // Here you would implement settings save
      console.log("Saving settings...");
      console.log("Email:", emailInput.value);
      console.log("Password:", passwordInput.value);

      // 入力フィールドを無効化
      emailInput.disabled = true;
      passwordInput.disabled = true;

      // ボタンの表示を切り替え
      editBtn.style.display = "inline-block";
      saveCancelGroup.style.display = "none";

      // Show success message (simplified)
      alert("設定を保存しました");
    });
  }

  // キャンセルボタンのクリックイベント
  if (cancelBtn) {
    cancelBtn.addEventListener("click", function () {
      // 元の値に戻す
      emailInput.value = originalEmail;
      passwordInput.value = originalPassword;

      // 入力フィールドを無効化
      emailInput.disabled = true;
      passwordInput.disabled = true;

      // ボタンの表示を切り替え
      editBtn.style.display = "inline-block";
      saveCancelGroup.style.display = "none";
    });
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

// Update dashboard statistics from actual data
function updateDashboardStats() {
  // 友だち数を1:1チャットのデータから取得
  const friends = getMockFriends();
  const friendsCount = friends.length;

  // 今月の配信数を計算（一斉配信とステップ配信の合計）
  const broadcasts = getMockBroadcasts();
  const scenarios = loadScenariosFromLocalStorage();

  console.log("[Dashboard] 一斉配信データ:", broadcasts);
  console.log("[Dashboard] ステップ配信データ:", scenarios);

  // 今月の年月を取得
  const now = new Date();
  const currentYear = now.getFullYear();
  const currentMonth = now.getMonth() + 1; // 0-indexed, so add 1
  console.log(`[Dashboard] 現在の年月: ${currentYear}年${currentMonth}月`);

  // 今月の一斉配信をカウント
  const thisMonthBroadcasts = broadcasts.filter((broadcast) => {
    if (!broadcast.createdAt) return false;
    const createdDate = new Date(broadcast.createdAt);
    const match =
      createdDate.getFullYear() === currentYear &&
      createdDate.getMonth() + 1 === currentMonth;
    console.log(
      `[Dashboard] 一斉配信 "${broadcast.title}": ${broadcast.createdAt} -> ${
        match ? "今月" : "対象外"
      }`
    );
    return match;
  }).length;

  // 今月のステップ配信をカウント
  const thisMonthScenarios = scenarios.filter((scenario) => {
    if (!scenario.createdAt) return false;
    // createdAtは 'YYYY/MM/DD' 形式の日本語ロケール文字列
    const dateParts = scenario.createdAt.split("/");
    if (dateParts.length !== 3) return false;
    const year = parseInt(dateParts[0]);
    const month = parseInt(dateParts[1]);
    const match = year === currentYear && month === currentMonth;
    console.log(
      `[Dashboard] ステップ配信 "${scenario.name}": ${
        scenario.createdAt
      } (${year}/${month}) -> ${match ? "今月" : "対象外"}`
    );
    return match;
  }).length;

  const totalDeliveries = thisMonthBroadcasts + thisMonthScenarios;

  console.log(`[Dashboard] 今月の一斉配信: ${thisMonthBroadcasts}件`);
  console.log(`[Dashboard] 今月のステップ配信: ${thisMonthScenarios}件`);
  console.log(`[Dashboard] 合計: ${totalDeliveries}件`);

  // DOMを更新
  const statCards = document.querySelectorAll(".stat-card");
  if (statCards.length >= 2) {
    // 友だち数を更新
    const friendsStatNumber = statCards[0].querySelector(".stat-number");
    if (friendsStatNumber) {
      friendsStatNumber.textContent = friendsCount.toLocaleString();
    }

    // 今月の配信数を更新
    const deliveriesStatNumber = statCards[1].querySelector(".stat-number");
    if (deliveriesStatNumber) {
      deliveriesStatNumber.textContent = totalDeliveries.toString();
      console.log(`[Dashboard] DOM更新完了: 今月の配信数 = ${totalDeliveries}`);
    }
  }
}

// Load and display broadcast history on dashboard
function loadDashboardBroadcastHistory() {
  const tbody = document.getElementById("dashboard-history-tbody");
  if (!tbody) return;

  const broadcasts = getMockBroadcasts();

  // Filter only completed broadcasts, sort by createdAt descending (most recent first) and take top 3
  const recentBroadcasts = broadcasts
    .filter((b) => b.status === "配信完了")
    .sort((a, b) => {
      const dateA = new Date(a.createdAt || 0);
      const dateB = new Date(b.createdAt || 0);
      return dateB - dateA;
    })
    .slice(0, 3);

  // Clear existing rows
  tbody.innerHTML = "";

  if (recentBroadcasts.length === 0) {
    tbody.innerHTML =
      '<tr><td colspan="3" style="text-align: center; color: #999;">配信履歴がありません</td></tr>';
    return;
  }

  // Render rows
  recentBroadcasts.forEach((broadcast) => {
    const row = document.createElement("tr");

    // Title
    const titleCell = document.createElement("td");
    titleCell.textContent = broadcast.title || "(タイトルなし)";
    row.appendChild(titleCell);

    // Date and time
    const dateCell = document.createElement("td");
    if (broadcast.createdAt) {
      const date = new Date(broadcast.createdAt);
      dateCell.textContent =
        date.toLocaleDateString("ja-JP", {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
        }) +
        " " +
        (broadcast.time || "09:00");
    } else {
      dateCell.textContent = "-";
    }
    row.appendChild(dateCell);

    // Status
    const statusCell = document.createElement("td");
    const statusBadge = document.createElement("span");
    statusBadge.className = "status-badge status-active";
    statusBadge.textContent = broadcast.status || "配信完了";
    statusCell.appendChild(statusBadge);
    row.appendChild(statusCell);

    tbody.appendChild(row);
  });
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
      loadScenariosFromLocalStorage();
      loadDefaultScenarioId();
      initializeDefaultScenarioSelect();
      renderScenarioList();
      initializeScenarioModal();
      break;
    case "data-management":
      initializeTagManagement();
      break;
    case "url-management":
      initializeUrlManagement();
      break;
    case "individual":
      initializeIndividualSupport();
      initializeRightColumnTabs(); // タブ機能を初期化
      initializeBookmarkButton(); // ブックマークボタンを初期化
      initializeBookmarkFilter(); // ブックマークフィルターを初期化
      initializeReadStatusButtons(); // 既読・未読ボタンを初期化
      loadIndividualPageUsers("all"); // APIからユーザーリストを取得して表示（デフォルトはすべて）
      break;
    case "settings":
      initializeSettings();
      break;
    case "dashboard":
      // Update stats from actual data, then animate
      updateDashboardStats();
      loadDashboardBroadcastHistory();
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
  console.log("=== sendMessage() called ===");

  const chatInput = document.getElementById("chat-input");
  const messageText = chatInput.value.trim();
  console.log("Message text:", messageText);

  if (!messageText) {
    console.warn("Message is empty");
    return;
  }

  console.log("currentChatUserId:", currentChatUserId);
  console.log("currentChatUserName:", currentChatUserName);

  // Check if we have a current user
  if (!currentChatUserId) {
    console.error("❌ No user selected for chat");
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
    message: messageText,
  };

  console.log("API URL:", apiUrl);
  console.log("Payload:", payload);

  // Send message to API
  try {
    console.log("Starting fetch...");

    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    console.log("Response status:", response.status);
    console.log("Response statusText:", response.statusText);
    console.log("Response:", response);

    // Get response text first
    const responseText = await response.text();
    console.log("Response text:", responseText);

    // Try to parse JSON
    let result;
    try {
      result = JSON.parse(responseText);
      console.log("Parsed result:", result);
    } catch (parseError) {
      console.error("❌ JSON parse error:", parseError);
      console.error("Response was:", responseText);
      return;
    }

    if (result.success) {
      console.log("✅ Message saved successfully!");
      console.log("Data:", result.data);
      console.log("Message ID:", result.data.message.id);
      console.log("Task ID:", result.data.task.id);
    } else {
      console.error("❌ Failed to save message");
      console.error("Error message:", result.message);
    }
  } catch (error) {
    console.error("❌ Error sending message:", error);
    console.error("Error message:", error.message);
    console.error("Error stack:", error.stack);
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

/**
 * 全角文字幅を考慮してテキストを省略する
 * 全角文字(日本語、中国語など)を2文字分、半角文字を1文字分としてカウント
 * @param {string} text - 省略するテキスト
 * @param {number} maxWidth - 最大全角文字幅 (デフォルト: 20)
 * @returns {string} 省略されたテキスト(必要に応じて"..."付き)
 */
function truncateByFullWidth(text, maxWidth = 20) {
  if (!text) return text;

  let currentWidth = 0;
  let truncatedText = '';

  for (let i = 0; i < text.length; i++) {
    const char = text[i];
    const charCode = char.charCodeAt(0);

    // 全角文字の判定: 日本語(ひらがな、カタカナ、漢字)、中国語、韓国語、全角記号
    // 範囲: 0x3000-0x9FFF (CJK), 0xFF00-0xFFEF (全角形式)
    const isFullWidth = (charCode >= 0x3000 && charCode <= 0x9FFF) ||
                       (charCode >= 0xFF00 && charCode <= 0xFFEF);

    const charWidth = isFullWidth ? 2 : 1;

    if (currentWidth + charWidth > maxWidth) {
      return truncatedText + '...';
    }

    truncatedText += char;
    currentWidth += charWidth;
  }

  return truncatedText;
}

// Scenario Management
let currentScenario = null;
let scenarios = [];
let scenarioHasUnsavedChanges = false;
let selectedScenarioTags = new Set();
let originalScenario = null;
let isNewScenario = false;
let defaultScenarioId = null; // 設定中のステップのID

// LocalStorage functions for scenarios
function saveScenariosToLocalStorage() {
  localStorage.setItem("scenarios", JSON.stringify(scenarios));
  console.log("Scenarios saved to LocalStorage:", scenarios);
}

function loadScenariosFromLocalStorage() {
  const saved = localStorage.getItem("scenarios");
  if (saved) {
    scenarios = JSON.parse(saved).map(normalizeScenarioData);
    console.log("Scenarios loaded from LocalStorage:", scenarios);
  }
  return scenarios;
}

function saveDefaultScenarioId() {
  localStorage.setItem(
    "defaultScenarioId",
    defaultScenarioId !== null ? String(defaultScenarioId) : ""
  );
  console.log("Default scenario ID saved to LocalStorage:", defaultScenarioId);
}

function loadDefaultScenarioId() {
  const saved = localStorage.getItem("defaultScenarioId");
  if (saved && saved !== "") {
    defaultScenarioId = parseInt(saved, 10);
    if (Number.isNaN(defaultScenarioId)) {
      defaultScenarioId = null;
    }
  } else {
    defaultScenarioId = null;
  }
  console.log(
    "Default scenario ID loaded from LocalStorage:",
    defaultScenarioId
  );
  return defaultScenarioId;
}

function updateScenarioInLocalStorage(scenario) {
  const index = scenarios.findIndex((s) => s.id === scenario.id);
  if (index !== -1) {
    scenarios[index] = scenario;
  } else {
    scenarios.push(scenario);
  }
  saveScenariosToLocalStorage();

  // Update default scenario select dropdown
  if (document.getElementById("default-scenario-select")) {
    initializeDefaultScenarioSelect();
  }

  console.log("Scenario updated in LocalStorage:", scenario);
}

function normalizeScenarioData(scenario) {
  if (!scenario) return scenario;
  const clone = JSON.parse(JSON.stringify(scenario));
  // Keep targetType as is (don't force to "tags")
  clone.targetType = clone.targetType || "all";
  clone.targetTagIds = Array.isArray(clone.targetTagIds)
    ? clone.targetTagIds
        .map((id) => parseInt(id, 10))
        .filter((id) => !Number.isNaN(id))
    : [];
  clone.steps = Array.isArray(clone.steps) ? clone.steps : [];
  clone.steps = clone.steps.map((step) => {
    const normalizedStep = { ...step };
    normalizedStep.timing =
      step && step.timing === "scheduled" ? "scheduled" : "immediate";
    normalizedStep.days =
      normalizedStep.timing === "scheduled" ? parseInt(step.days, 10) || 0 : 0;
    normalizedStep.time =
      normalizedStep.timing === "scheduled" ? step.time || "09:00" : null;
    normalizedStep.messages = Array.isArray(step && step.messages)
      ? step.messages
      : [];
    return normalizedStep;
  });
  return clone;
}

function cloneScenarioData(scenario) {
  if (!scenario) return null;
  return JSON.parse(JSON.stringify(scenario));
}

function markScenarioDirty() {
  scenarioHasUnsavedChanges = true;
}

function resetScenarioEditingState() {
  currentScenario = null;
  originalScenario = null;
  selectedScenarioTags = new Set();
  scenarioHasUnsavedChanges = false;
  isNewScenario = false;
}

// Render scenario list in table
function renderScenarioList() {
  const tbody = document.getElementById("scenarios-tbody");
  if (!tbody) return;

  if (scenarios.length === 0) {
    tbody.innerHTML =
      '<tr><td colspan="6" style="text-align: center; padding: 30px; color: #999;">シナリオがまだ作成されていません</td></tr>';
    return;
  }

  tbody.innerHTML = scenarios
    .map((scenario) => {
      const deliverySummary = getScenarioDeliverySummary(scenario);
      const targetSummary = getScenarioTargetSummary(scenario);
      const isDefault = defaultScenarioId === scenario.id;
      // ステータスを設定中のステップに基づいて判定
      const statusText = isDefault ? "配信中" : "未配信";
      const statusClass = isDefault ? "status-active" : "status-inactive";
      return `
      <tr data-scenario-id="${scenario.id}" data-scenario-name="${
        scenario.name
      }" class="${isDefault ? "is-default-scenario" : ""}">
        <td>
          <div style="display: flex; align-items: center; gap: 8px;">
            <span>${escapeHtml(scenario.name)}</span>
            ${
              isDefault
                ? '<span class="badge-default-mini"><i class="fa-solid fa-envelope"></i> 設定中</span>'
                : ""
            }
          </div>
        </td>
        <td>${escapeHtml(targetSummary)}</td>
        <td>${escapeHtml(deliverySummary)}</td>
        <td><span class="status-badge ${statusClass}">${statusText}</span></td>
        <td>${scenario.createdAt}</td>
        <td>
          <button class="btn btn-outline btn-sm scenario-edit-btn" onclick="openScenarioFromList(${
            scenario.id
          })">編集</button>
          <button class="btn btn-secondary btn-sm" onclick="deleteScenario(${
            scenario.id
          })">削除</button>
        </td>
      </tr>
    `;
    })
    .join("");
}

function setDefaultScenario(scenarioId) {
  console.log("setDefaultScenario called with scenarioId:", scenarioId);

  // defaultScenarioIdを更新
  defaultScenarioId = scenarioId;

  // LocalStorageに保存
  saveDefaultScenarioId();

  // UIを更新
  initializeDefaultScenarioSelect();
  renderScenarioList();

  console.log("Default scenario set to ID:", scenarioId);
}

// Initialize default scenario select dropdown
function initializeDefaultScenarioSelect() {
  const select = document.getElementById("default-scenario-select");
  if (!select) return;

  const currentDefault = defaultScenarioId;

  // Generate options
  let options = '<option value="">配信するステップを選択</option>';
  scenarios.forEach((scenario) => {
    const selected = scenario.id === currentDefault ? "selected" : "";
    options += `<option value="${scenario.id}" ${selected}>${escapeHtml(
      scenario.name
    )}</option>`;
  });

  select.innerHTML = options;

  // Update info display
  updateSelectedScenarioInfo();

  // Add change event listener (remove old listener first)
  const newSelect = select.cloneNode(true);
  select.parentNode.replaceChild(newSelect, select);

  // Dropdown change - only update preview, don't save
  newSelect.addEventListener("change", (e) => {
    updateSelectedScenarioInfo();
  });

  // Button click - save the changes (remove old listener first)
  const setButton = document.getElementById("set-default-scenario-btn");
  if (setButton) {
    const newButton = setButton.cloneNode(true);
    setButton.parentNode.replaceChild(newButton, setButton);

    newButton.addEventListener("click", () => {
      const select = document.getElementById("default-scenario-select");
      if (!select) return;

      const value = select.value;
      defaultScenarioId = value ? parseInt(value, 10) : null;
      saveDefaultScenarioId();
      updateSelectedScenarioInfo();
      renderScenarioList();

      // Show success message
      alert("設定しました");
    });
  }
}

// Update selected scenario info display
function updateSelectedScenarioInfo() {
  const infoContainer = document.getElementById("selected-scenario-info");
  if (!infoContainer) return;

  // Read from dropdown value for preview
  const select = document.getElementById("default-scenario-select");
  if (!select) return;

  const selectedValue = select.value;
  const previewScenarioId = selectedValue ? parseInt(selectedValue, 10) : null;

  if (!previewScenarioId) {
    infoContainer.style.display = "none";
    return;
  }

  const selectedScenario = scenarios.find((s) => s.id === previewScenarioId);
  if (!selectedScenario) {
    infoContainer.style.display = "none";
    return;
  }

  // Show info container
  infoContainer.style.display = "block";

  // Update target info
  const targetElement = document.getElementById("selected-scenario-target");
  if (targetElement) {
    targetElement.textContent = getScenarioTargetSummary(selectedScenario);
  }

  // Update timing info
  const timingElement = document.getElementById("selected-scenario-timing");
  if (timingElement) {
    timingElement.textContent = getScenarioDeliverySummary(selectedScenario);
  }
}

function getScenarioDeliverySummary(scenario) {
  if (
    !scenario ||
    !Array.isArray(scenario.steps) ||
    scenario.steps.length === 0
  ) {
    return "未設定";
  }

  // 常にステップ1（steps[0]）のタイミングを表示
  const firstStep = scenario.steps[0];

  if (!firstStep.timing || firstStep.timing === "immediate") {
    return "開始直後";
  }

  if (firstStep.timing === "scheduled") {
    const days = Number.isFinite(firstStep.days)
      ? firstStep.days
      : parseInt(firstStep.days, 10) || 0;
    const time = firstStep.time || "時間未設定";
    return `開始から${days}日後 ${time}`;
  }

  return "未設定";
}

function getScenarioTargetSummary(scenario) {
  if (!scenario) return "未設定";

  if (scenario.targetType === "all") {
    return "全員";
  }

  const tagIds = Array.isArray(scenario.targetTagIds)
    ? scenario.targetTagIds
    : [];
  if (tagIds.length === 0) {
    return "タグ未選択";
  }

  const allTags = getAllTags();
  const tagNames = tagIds
    .map((id) => allTags.find((tag) => tag.id === id))
    .filter(Boolean)
    .map((tag) => tag.name);

  if (tagNames.length === 0) {
    return "タグ未選択";
  }

  return truncateByFullWidth(tagNames.join(", "), 20);
}

function formatScenarioStepTiming(step) {
  if (!step) return "未設定";
  if (step.timing === "scheduled") {
    const days = parseInt(step.days, 10) || 0;
    const time = step.time || "時間未設定";
    return `ステップ開始から${days}日後 ${time}`;
  }
  return "ステップ開始直後";
}

// Open scenario from list
function openScenarioFromList(id) {
  const scenario = scenarios.find((s) => s.id === id);
  if (scenario) {
    showScenarioDetailPage(scenario);
  }
}

// Delete scenario
function deleteScenario(id) {
  // Check if this scenario is set as the default initial message
  const isDefaultScenario = defaultScenarioId === id;

  let confirmMessage = "このシナリオを削除しますか？";
  if (isDefaultScenario) {
    confirmMessage =
      "このステップは設定中のステップとして登録されています。\n削除すると設定が解除されます。\n\n削除してもよろしいですか？";
  }

  if (!confirm(confirmMessage)) return;

  // Delete the scenario
  scenarios = scenarios.filter((s) => s.id !== id);
  saveScenariosToLocalStorage();

  // If this was the default scenario, clear it
  if (isDefaultScenario) {
    defaultScenarioId = null;
    saveDefaultScenarioId();
    initializeDefaultScenarioSelect();
  }

  renderScenarioList();
}

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
    createdAt: new Date().toLocaleDateString("ja-JP"),
    steps: [],
    targetType: "tags",
    targetTagIds: [],
  };

  const normalizedScenario = normalizeScenarioData(newScenario);
  console.log("Creating new scenario draft:", normalizedScenario);

  // Close modal
  closeScenarioModal();

  // Navigate to scenario detail page
  showScenarioDetailPage(normalizedScenario, { isNew: true });
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

// Friend Selection functionality
let friendsData = [];
let selectedFriends = new Set();
let friendSelectionInitialized = false;

// Sample friends data (in a real app, this would come from an API)
const sampleFriendsData = [
  { id: "U001234", name: "田中太郎", avatar: "田" },
  { id: "U005678", name: "佐藤花子", avatar: "佐" },
  { id: "U009876", name: "山田次郎", avatar: "山" },
  { id: "U005432", name: "鈴木美咲", avatar: "鈴" },
  { id: "U001122", name: "高橋健太", avatar: "高" },
  { id: "U003344", name: "伊藤麻衣", avatar: "伊" },
  { id: "U005566", name: "渡辺晴彦", avatar: "渡" },
  { id: "U007788", name: "中村優子", avatar: "中" },
  { id: "U009900", name: "小林大輔", avatar: "小" },
  { id: "U001199", name: "加藤美穂", avatar: "加" },
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
  const searchInput = document.getElementById("friend-search");
  const selectAllBtn = document.getElementById("select-all-friends");
  const deselectAllBtn = document.getElementById("deselect-all-friends");

  // Search functionality
  if (searchInput) {
    searchInput.addEventListener("input", function () {
      const searchTerm = this.value.toLowerCase();
      filterFriendsList(searchTerm);
    });
  }

  // Select all button
  if (selectAllBtn) {
    selectAllBtn.addEventListener("click", function () {
      selectAllVisibleFriends();
    });
  }

  // Deselect all button
  if (deselectAllBtn) {
    deselectAllBtn.addEventListener("click", function () {
      deselectAllFriends();
    });
  }
}

function renderFriendsList(filteredFriends = null) {
  const friendsList = document.getElementById("friends-selection-list");
  if (!friendsList) return;

  const friendsToRender = filteredFriends || friendsData;

  friendsList.innerHTML = "";

  friendsToRender.forEach((friend) => {
    const friendItem = createFriendSelectionItem(friend);
    friendsList.appendChild(friendItem);
  });

  updateSelectedCount();
}

function createFriendSelectionItem(friend) {
  const itemDiv = document.createElement("div");
  itemDiv.className = "friend-selection-item";
  itemDiv.setAttribute("data-friend-id", friend.id);

  const isSelected = selectedFriends.has(friend.id);
  if (isSelected) {
    itemDiv.classList.add("selected");
  }

  itemDiv.innerHTML = `
    <input type="checkbox" class="friend-checkbox" ${
      isSelected ? "checked" : ""
    }>
    <div class="friend-selection-avatar">${friend.avatar}</div>
    <div class="friend-selection-info">
      <div class="friend-selection-name">${friend.name}</div>
      <div class="friend-selection-id">ID: ${friend.id}</div>
    </div>
  `;

  // Add click event listener
  itemDiv.addEventListener("click", function () {
    toggleFriendSelection(friend.id);
  });

  // Prevent checkbox click from bubbling
  const checkbox = itemDiv.querySelector(".friend-checkbox");
  checkbox.addEventListener("click", function (e) {
    e.stopPropagation();
    toggleFriendSelection(friend.id);
  });

  return itemDiv;
}

function toggleFriendSelection(friendId) {
  const friendItem = document.querySelector(`[data-friend-id="${friendId}"]`);
  const checkbox = friendItem.querySelector(".friend-checkbox");

  if (selectedFriends.has(friendId)) {
    selectedFriends.delete(friendId);
    friendItem.classList.remove("selected");
    checkbox.checked = false;
  } else {
    selectedFriends.add(friendId);
    friendItem.classList.add("selected");
    checkbox.checked = true;
  }

  updateSelectedCount();
}

function selectAllVisibleFriends() {
  const visibleItems = document.querySelectorAll(".friend-selection-item");

  visibleItems.forEach((item) => {
    const friendId = item.getAttribute("data-friend-id");
    if (!selectedFriends.has(friendId)) {
      selectedFriends.add(friendId);
      item.classList.add("selected");
      item.querySelector(".friend-checkbox").checked = true;
    }
  });

  updateSelectedCount();
}

function deselectAllFriends() {
  selectedFriends.clear();

  const allItems = document.querySelectorAll(".friend-selection-item");
  allItems.forEach((item) => {
    item.classList.remove("selected");
    item.querySelector(".friend-checkbox").checked = false;
  });

  updateSelectedCount();
}

function filterFriendsList(searchTerm) {
  if (!searchTerm.trim()) {
    renderFriendsList();
    return;
  }

  const filteredFriends = friendsData.filter(
    (friend) =>
      friend.name.toLowerCase().includes(searchTerm) ||
      friend.id.toLowerCase().includes(searchTerm)
  );

  renderFriendsList(filteredFriends);
}

function updateSelectedCount() {
  const countElement = document.getElementById("selected-friends-count");
  if (countElement) {
    countElement.textContent = selectedFriends.size;
  }
}

// Helper function to get selected friends data
function getSelectedFriendsData() {
  return friendsData.filter((friend) => selectedFriends.has(friend.id));
}

// ===== Broadcast Function =====
async function sendBroadcast() {
  console.log("=== sendBroadcast() called ===");

  const titleInput = document.getElementById("broadcast-title");
  const messageInput = document.getElementById("broadcast-message");

  if (!titleInput || !messageInput) {
    console.error("❌ Input elements not found");
    alert("エラー: 入力フォームが見つかりません");
    return;
  }

  const broadcastTitle = titleInput.value.trim();
  const message = messageInput.value.trim();

  console.log("Broadcast title:", broadcastTitle);
  console.log("Message:", message);

  // Validation
  if (!broadcastTitle) {
    console.warn("⚠️ Broadcast title is empty");
    alert("配信タイトルを入力してください");
    return;
  }

  if (!message) {
    console.warn("⚠️ Message is empty");
    alert("メッセージ内容を入力してください");
    return;
  }

  // Confirmation
  const confirmed = confirm(
    `一斉配信を送信します。よろしいですか?\n\nタイトル: ${broadcastTitle}\nメッセージ: ${message}`
  );
  if (!confirmed) {
    console.log("User cancelled broadcast");
    return;
  }

  const apiUrl = `${API_BASE_URL}/broadcast`;
  const payload = {
    broadcast_title: broadcastTitle,
    message: message,
  };

  console.log("API URL:", apiUrl);
  console.log("Payload:", payload);

  try {
    console.log("Starting fetch...");

    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    console.log("Response status:", response.status);
    console.log("Response statusText:", response.statusText);

    const responseText = await response.text();
    console.log("Response text:", responseText);

    let result;
    try {
      result = JSON.parse(responseText);
      console.log("Parsed result:", result);
    } catch (parseError) {
      console.error("❌ JSON parse error:", parseError);
      console.error("Response was:", responseText);
      alert("エラー: サーバーからの応答が不正です");
      return;
    }

    if (result.success) {
      console.log("✅ Broadcast sent successfully!");
      console.log("Total users:", result.data.total_users);
      console.log("Messages created:", result.data.messages_created);
      console.log("Tasks created:", result.data.tasks_created);

      alert(
        `一斉配信が送信されました!\n\n対象ユーザー数: ${result.data.total_users}人\nメッセージ作成数: ${result.data.messages_created}件\nタスク作成数: ${result.data.tasks_created}件`
      );

      // Clear form
      titleInput.value = "";
      messageInput.value = "";
    } else {
      console.error("❌ Failed to send broadcast");
      console.error("Error message:", result.message);
      alert("一斉配信の送信に失敗しました: " + result.message);
    }
  } catch (error) {
    console.error("❌ Error sending broadcast:", error);
    console.error("Error message:", error.message);
    console.error("Error stack:", error.stack);
    alert("一斉配信の送信中にエラーが発生しました: " + error.message);
  }
}

// ===== API Functions =====
// 動的にAPI URLを設定（localhostでもIPアドレスでも動作する）
const API_BASE_URL = `${window.location.protocol}//${window.location.host}/api`;

// Fetch users from API
async function fetchUsers() {
  // モックデータを返す
  const friends = getMockFriends();
  return friends.map((friend) => ({
    id: friend.id,
    user_name: friend.name,
    uuid: friend.lineId,
    created_at: friend.registeredAt,
    tags: friend.tags,
    memo: friend.memo,
  }));
}

// Load users and display in individual page
async function loadIndividualPageUsers(filter = "all") {
  const friendsListContainer = document.querySelector(
    "#individual-page .friends-list"
  );

  if (!friendsListContainer) {
    console.error("Friends list container not found");
    return;
  }

  // Show loading state
  friendsListContainer.innerHTML =
    '<div style="padding: 20px; text-align: center;">読み込み中...</div>';

  try {
    let users = await fetchUsers();

    // Apply filters
    if (filter === "unread") {
      users = users.filter((user) => getUserReadStatus(user.id) === "unread");
    } else if (filter === "read") {
      users = users.filter((user) => getUserReadStatus(user.id) === "read");
    } else if (filter === "bookmarked") {
      const bookmarks = getBookmarkedFriends();
      users = users.filter((user) => bookmarks[user.id] === true);
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
      friendsListContainer.innerHTML =
        '<div style="padding: 20px; text-align: center;">友だちが見つかりません</div>';
      return;
    }

    // Fetch latest messages for all users
    const usersWithLastMessage = await Promise.all(
      users.map(async (user) => {
        const messages = await fetchMessages(user.id);
        const latestMessage =
          messages.length > 0 ? messages[messages.length - 1] : null;
        return { ...user, latestMessage };
      })
    );

    friendsListContainer.innerHTML = usersWithLastMessage
      .map((user) => {
        // システム表示名が設定されていない場合はLINE名を表示
        const displayName = getUserSystemDisplayName(user.id, user.user_name);
        const avatar = displayName.charAt(0);

        const isUnread = getUserReadStatus(user.id) === "unread";
        const unreadIndicator = isUnread
          ? '<span class="unread-indicator"></span>'
          : "";
        const userBookmarked = isBookmarked(user.id);
        const bookmarkIconHTML = userBookmarked
          ? '<i class="friend-bookmark-icon fa-solid fa-bookmark"></i>'
          : "";

        // Format last message content and time
        let lastMessageContent = "";
        let lastMessageTime = "";

        if (user.latestMessage) {
          // メッセージ内容（長い場合は省略）
          lastMessageContent =
            user.latestMessage.message.length > 30
              ? user.latestMessage.message.substring(0, 30) + "..."
              : user.latestMessage.message;

          // 日時（今日の場合は時刻のみ、それ以外は日付も表示）
          const lastMessageDate = new Date(user.latestMessage.created_at);
          const today = new Date();
          const isToday =
            lastMessageDate.toDateString() === today.toDateString();

          if (isToday) {
            lastMessageTime = lastMessageDate.toLocaleString("ja-JP", {
              hour: "2-digit",
              minute: "2-digit",
            });
          } else {
            lastMessageTime = lastMessageDate.toLocaleString("ja-JP", {
              month: "2-digit",
              day: "2-digit",
            });
          }
        } else {
          lastMessageContent = "まだやりとりがありません";
        }

        return `
        <div class="friend-item" data-user-id="${
          user.id
        }" onclick="selectFriend(${user.id}, '${user.user_name}', '${
          user.uuid
        }', '${user.created_at}', this)">
          <div class="friend-avatar">${avatar}</div>
          <div class="friend-info">
            <div class="friend-name">${displayName}</div>
            <div class="last-message">
              <span class="message-preview">${lastMessageContent}</span>
            </div>
          </div>
          ${
            lastMessageTime
              ? `<div class="friend-time">${lastMessageTime}</div>`
              : ""
          }
          ${bookmarkIconHTML}
          ${unreadIndicator}
        </div>
      `;
      })
      .join("");
  } catch (error) {
    console.error("Error loading users:", error);
    friendsListContainer.innerHTML =
      '<div style="padding: 20px; text-align: center; color: red;">エラーが発生しました</div>';
  }
}

// Fetch messages for a specific user
async function fetchMessages(userId) {
  // 個別メッセージを取得
  const individualMessages = getMockMessages(userId);

  // 配信メッセージと統合
  const allMessages = [...individualMessages, ...MOCK_DELIVERY_MESSAGES];

  // 時系列でソート（古い順）
  allMessages.sort((a, b) => new Date(a.timestamp) - new Date(b.timestamp));

  return allMessages.map((msg) => ({
    id: msg.id,
    user_id: userId,
    message: msg.content,
    is_from_user: msg.sender === "user",
    created_at: msg.timestamp,
  }));
}

// Select friend and show chat in center column
async function selectFriend(userId, userName, uuid, createdAt, friendElement) {
  // Save current draft before switching
  const chatInput = document.getElementById("individual-chat-input");
  if (currentChatUserId && chatInput) {
    userDraftMessages[currentChatUserId] = chatInput.value;
  }

  // Remove selected class from all friend items
  document.querySelectorAll(".friend-item").forEach((item) => {
    item.classList.remove("selected");
  });

  // Add selected class to clicked friend
  if (friendElement) {
    friendElement.classList.add("selected");
  }

  // Store current user info globally
  currentChatUserId = userId;
  currentChatUserName = userName;

  // Update center column - chat header
  const chatUserName = document.getElementById("individual-chat-user-name");
  const chatUserId = document.getElementById("individual-chat-user-id");
  const chatAvatar = document.getElementById("individual-chat-avatar");
  const chatMessages = document.getElementById("individual-chat-messages");
  const chatInputArea = document.getElementById("individual-chat-input-area");

  // Set user info - システム表示名が設定されていない場合はLINE名を表示
  const displayName = getUserSystemDisplayName(userId, userName);
  if (chatUserName) chatUserName.textContent = displayName;
  if (chatAvatar) chatAvatar.textContent = displayName.charAt(0);

  // Show loading state
  if (chatMessages) {
    chatMessages.innerHTML =
      '<div style="padding: 20px; text-align: center;">メッセージを読み込み中...</div>';
  }

  // Show chat input area and restore draft
  if (chatInputArea) {
    chatInputArea.style.display = "block";
  }

  // Restore draft message for this user
  if (chatInput) {
    chatInput.value = userDraftMessages[userId] || "";
    chatInput.style.height = "44px";
    if (chatInput.value) {
      chatInput.style.height = chatInput.scrollHeight + "px";
    }
  }

  // Show and update bookmark button
  const chatHeaderActions = document.getElementById("chat-header-actions");
  if (chatHeaderActions) {
    chatHeaderActions.style.display = "flex";
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
    console.error("Error loading messages:", error);
    if (chatMessages) {
      chatMessages.innerHTML =
        '<div style="padding: 20px; text-align: center; color: red;">メッセージの読み込みに失敗しました</div>';
    }
  }
}

// Update user info in right column
function updateUserInfo(userId, userName, uuid, createdAt) {
  const userInfoContent = document.getElementById("individual-user-info");
  if (!userInfoContent) return;

  const formattedDate = new Date(createdAt).toLocaleDateString("ja-JP", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });

  // 仮データ（後でAPIから取得する想定）
  const lineName = userName; // LINE名（仮）
  const stepDeliveries = [
    "ウェルカムシーケンス",
    "商品紹介ステップ",
    "フォローアップステップ",
  ]; // 送信したステップ配信のタイトル（仮）
  const systemDisplayName = getUserSystemDisplayName(userId, userName); // システム表示名

  // ステップ配信のタイトルリストHTML生成
  const stepDeliveriesHtml = stepDeliveries
    .map((title) => `<div class="step-delivery-item">${title}</div>`)
    .join("");

  // Get memo for this user
  const memo = getUserMemo(userId);
  const memoDisplay = memo || "メモを追加...";

  // Get tags for this user
  const allTags = getAllTags();
  const userTagIds = getUserTags(userId);

  // Display mode: Show only selected tags with edit button
  let tagsHtml = "";

  if (allTags.length === 0) {
    // No tags exist in the system
    tagsHtml = `
      <div class="empty-state-small">
        <p>タグが作成されていません</p>
      </div>
    `;
  } else {
    // Ensure type compatibility for comparison
    const selectedTags = allTags.filter((tag) =>
      userTagIds.some((id) => String(id) === String(tag.id))
    );

    if (selectedTags.length === 0) {
      // Tags exist but none are selected
      tagsHtml = `
        <span style="color: #999;">タグが設定されていません</span>
      `;
    } else {
      // Display selected tags in vertical layout
      const selectedTagBadges = selectedTags
        .map((tag) => {
          const isTransparent = tag.color === "transparent";
          const styleAttr = isTransparent
            ? "background-color: transparent; border: 1px solid #ddd; color: #333;"
            : `background-color: ${tag.color};`;
          return `<span class="tag-badge" style="${styleAttr}">${tag.name}</span>`;
        })
        .join("");

      tagsHtml = `
        <div id="user-tags-display-${userId}" style="display: flex; flex-direction: column; gap: 6px;">
          ${selectedTagBadges}
        </div>
      `;
    }
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
      <div class="user-info-value user-info-system-display-name" onclick="openSystemDisplayNameModal(${userId})" style="cursor: pointer; display: flex; align-items: center; gap: 8px;">
        <span>${systemDisplayName}</span>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="opacity: 0.5;">
          <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
          <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
        </svg>
      </div>
    </div>
    <div class="user-info-item">
      <div class="user-info-label">ステップ</div>
      <div class="user-info-value">
        <div class="step-delivery-list">
          ${
            stepDeliveriesHtml ||
            '<div class="empty-state-small">送信されたステップ配信はありません</div>'
          }
        </div>
      </div>
    </div>
    <div class="user-info-divider"></div>
    <div class="user-info-item">
      <div class="user-info-label">メモ</div>
      <div class="user-info-value user-info-memo" onclick="openMemoModal(${userId})" style="cursor: pointer; color: ${
    memo ? "#333" : "#999"
  };">${memoDisplay}</div>
    </div>
    <div class="user-info-divider"></div>
    <div class="user-info-item">
      <div class="user-info-label" style="display: flex; align-items: center; gap: 8px;">
        タグ
        ${
          allTags.length > 0
            ? `<i class="fa-solid fa-pen" onclick="editUserTagsMode(${userId})" style="cursor: pointer; font-size: 12px; color: #888; opacity: 0.7;" onmouseover="this.style.opacity='1'" onmouseout="this.style.opacity='0.7'"></i>`
            : ""
        }
      </div>
      <div class="user-info-value">
        ${tagsHtml}
      </div>
    </div>
  `;
}

// Render messages in individual page center column
function renderIndividualMessages(messages) {
  const chatMessages = document.getElementById("individual-chat-messages");
  if (!chatMessages) return;

  if (messages.length === 0) {
    chatMessages.innerHTML =
      '<div class="empty-state"><p>まだメッセージがありません</p></div>';
    return;
  }

  chatMessages.innerHTML = messages
    .map((msg) => {
      const messageClass = msg.is_from_user
        ? "message-received"
        : "message-sent";
      const formattedTime = new Date(msg.created_at).toLocaleString("ja-JP", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
      });

      return `
      <div class="message ${messageClass}">
        <div class="message-content">
          <div class="message-text">${msg.message}</div>
          <div class="message-time">${formattedTime}</div>
        </div>
      </div>
    `;
    })
    .join("");

  // Scroll to bottom
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Render messages in chat modal (kept for backward compatibility)
function renderMessages(messages) {
  const chatMessages = document.getElementById("chat-messages");
  if (!chatMessages) return;

  if (messages.length === 0) {
    chatMessages.innerHTML =
      '<div style="padding: 20px; text-align: center;">メッセージがありません</div>';
    return;
  }

  chatMessages.innerHTML = messages
    .map((msg) => {
      const messageClass = msg.is_from_user
        ? "message-received"
        : "message-sent";
      const formattedTime = new Date(msg.created_at).toLocaleString("ja-JP", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
      });

      return `
      <div class="message ${messageClass}">
        <div class="message-content">
          <div class="message-text">${msg.message}</div>
          <div class="message-time">${formattedTime}</div>
        </div>
      </div>
    `;
    })
    .join("");

  // Scroll to bottom
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Initialize right column tabs
function initializeRightColumnTabs() {
  // Prevent multiple event listeners
  if (window.rightColumnTabsInitialized) return;
  window.rightColumnTabsInitialized = true;

  const tabButtons = document.querySelectorAll(".right-column-tabs .tab-btn");

  tabButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const tabName = this.getAttribute("data-tab");
      switchRightColumnTab(tabName);
    });
  });
}

// Switch right column tab
function switchRightColumnTab(tabName) {
  // Remove active class from all buttons
  document.querySelectorAll(".right-column-tabs .tab-btn").forEach((btn) => {
    btn.classList.remove("active");
  });

  // Add active class to clicked button
  const activeButton = document.querySelector(
    `.right-column-tabs .tab-btn[data-tab="${tabName}"]`
  );
  if (activeButton) {
    activeButton.classList.add("active");
  }

  // Hide all tab contents
  document
    .querySelectorAll(".individual-right-column .tab-content")
    .forEach((content) => {
      content.classList.remove("active");
    });

  // Show selected tab content
  const activeContent = document.getElementById(`${tabName}-tab`);
  if (activeContent) {
    activeContent.classList.add("active");
  }

  // Initialize tab-specific content
  if (tabName === "tags") {
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
  const sendBtn = document.getElementById("individual-chat-send-btn");
  if (sendBtn) {
    sendBtn.addEventListener("click", function (e) {
      sendIndividualMessage();
    });
  }

  // Shift+Enter key to send
  const chatInput = document.getElementById("individual-chat-input");
  if (chatInput) {
    chatInput.addEventListener("keydown", function (e) {
      if (e.key === "Enter" && e.shiftKey) {
        e.preventDefault();
        sendIndividualMessage();
      }
    });

    // Auto-resize textarea
    chatInput.addEventListener("input", function () {
      this.style.height = "44px";
      this.style.height = this.scrollHeight + "px";
    });
  }
}

// Send message from individual page
async function sendIndividualMessage() {
  console.log("=== sendIndividualMessage() called ===");

  const chatInput = document.getElementById("individual-chat-input");
  const messageText = chatInput.value.trim();
  console.log("Message text:", messageText);

  if (!messageText) {
    console.warn("Message is empty");
    return;
  }

  console.log("currentChatUserId:", currentChatUserId);
  console.log("currentChatUserName:", currentChatUserName);

  // Check if we have a current user
  if (!currentChatUserId) {
    console.error("❌ No user selected for chat");
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
  const chatMessages = document.getElementById("individual-chat-messages");
  chatMessages.appendChild(messageDiv);

  // Clear input and reset height, and clear draft
  chatInput.value = "";
  chatInput.style.height = "44px";
  delete userDraftMessages[currentChatUserId];

  // Scroll to bottom
  if (chatMessages) {
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }

  // Prepare API call
  const apiUrl = `${API_BASE_URL}/send-message`;
  const payload = {
    user_id: currentChatUserId,
    message: messageText,
  };

  console.log("API URL:", apiUrl);
  console.log("Payload:", payload);

  // Send message to API
  try {
    console.log("Starting fetch...");

    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    console.log("Response status:", response.status);
    console.log("Response statusText:", response.statusText);

    const responseText = await response.text();
    console.log("Response text:", responseText);

    let result;
    try {
      result = JSON.parse(responseText);
      console.log("Parsed result:", result);
    } catch (parseError) {
      console.error("❌ JSON parse error:", parseError);
      console.error("Response was:", responseText);
      return;
    }

    if (result.success) {
      console.log("✅ Message saved successfully!");
      console.log("Data:", result.data);
    } else {
      console.error("❌ Failed to save message");
      console.error("Error message:", result.message);
    }
  } catch (error) {
    console.error("❌ Error sending message:", error);
    console.error("Error message:", error.message);
  }
}

// Setup chat modal close button
document.addEventListener("DOMContentLoaded", function () {
  const chatCloseBtn = document.getElementById("chat-close-btn");
  const chatModal = document.getElementById("chat-modal");

  if (chatCloseBtn && chatModal) {
    chatCloseBtn.addEventListener("click", function () {
      chatModal.style.display = "none";
    });
  }

  // Close modal when clicking outside
  if (chatModal) {
    chatModal.addEventListener("click", function (e) {
      if (e.target === chatModal) {
        chatModal.style.display = "none";
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
    { id: 1, name: "重要顧客", count: 12, icon: "📁" },
    { id: 2, name: "見込み客", count: 34, icon: "📁" },
    { id: 3, name: "VIP", count: 5, icon: "📁" },
  ];

  // Sample tag data
  const sampleTags = [
    { id: 1, name: "興味あり", count: 28, icon: "🏷️" },
    { id: 2, name: "要フォロー", count: 15, icon: "🏷️" },
    { id: 3, name: "購入済み", count: 42, icon: "🏷️" },
    { id: 4, name: "問い合わせ中", count: 8, icon: "🏷️" },
  ];

  renderFolderList(sampleFolders);
  renderTagList(sampleTags);
}

// Render folder list
function renderFolderList(folders) {
  const folderList = document.getElementById("folder-list");
  if (!folderList) return;

  if (folders.length === 0) {
    folderList.innerHTML =
      '<div class="empty-state-small"><p>フォルダがありません</p></div>';
    return;
  }

  folderList.innerHTML = folders
    .map(
      (folder) => `
    <div class="folder-item" data-folder-id="${folder.id}">
      <span class="folder-icon">${folder.icon}</span>
      <span class="folder-name">${folder.name}</span>
      <span class="folder-count">${folder.count}</span>
    </div>
  `
    )
    .join("");

  // Add click event listeners
  folderList.querySelectorAll(".folder-item").forEach((item) => {
    item.addEventListener("click", function () {
      const folderId = this.getAttribute("data-folder-id");
      console.log("Folder clicked:", folderId);
      // TODO: Filter users by folder
    });
  });
}

// Render tag list
function renderTagList(tags) {
  const tagList = document.getElementById("tag-list");
  if (!tagList) return;

  if (tags.length === 0) {
    tagList.innerHTML =
      '<div class="empty-state-small"><p>タグがありません</p></div>';
    return;
  }

  tagList.innerHTML = tags
    .map(
      (tag) => `
    <div class="tag-item" data-tag-id="${tag.id}">
      <span class="tag-icon">${tag.icon}</span>
      <span class="tag-name">${tag.name}</span>
      <span class="tag-count">${tag.count}</span>
    </div>
  `
    )
    .join("");

  // Add click event listeners
  tagList.querySelectorAll(".tag-item").forEach((item) => {
    item.addEventListener("click", function () {
      const tagId = this.getAttribute("data-tag-id");
      console.log("Tag clicked:", tagId);
      // TODO: Filter users by tag
    });
  });
}

// Note: loadIndividualPageUsers() is called in the main navigateToPage override (line 458)

// ===== Tag Management System =====

// Get all tags from localStorage
function getAllTags() {
  // LocalStorageからタグを取得
  const savedTags = localStorage.getItem("line_tags");

  // 初回起動時のみMOCK_TAGSを使用
  if (!savedTags) {
    // 初回はMOCK_TAGSを保存して返す
    localStorage.setItem("line_tags", JSON.stringify(MOCK_TAGS));
    return MOCK_TAGS;
  }

  // 2回目以降はLocalStorageから取得
  return JSON.parse(savedTags);
}

// Save tags to localStorage
function saveTags(tags) {
  // すべてのタグを保存（デモデータも削除可能に）
  localStorage.setItem("line_tags", JSON.stringify(tags));
}

// Get user tags from localStorage
function getUserTags(userId) {
  const userTags = localStorage.getItem(`user_tags_${userId}`);
  if (userTags) {
    return JSON.parse(userTags);
  }

  // LocalStorageにない場合、モックデータから取得
  const friends = getMockFriends();
  const friend = friends.find((f) => f.id == userId);
  return friend ? friend.tags : [];
}

// Save user tags to localStorage
function saveUserTags(userId, tagIds) {
  localStorage.setItem(`user_tags_${userId}`, JSON.stringify(tagIds));
}

// Initialize tag management page
function initializeTagManagement() {
  // Tab switching for data management page
  const dataTabBtns = document.querySelectorAll(".data-tab-btn");
  dataTabBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      const tabName = this.getAttribute("data-tab");

      // Update active button
      dataTabBtns.forEach((b) => b.classList.remove("active"));
      this.classList.add("active");

      // Update active content
      const dataTabContents = document.querySelectorAll(".data-tab-content");
      dataTabContents.forEach((content) => content.classList.remove("active"));
      const activeContent = document.getElementById(`${tabName}-tab`);
      if (activeContent) {
        activeContent.classList.add("active");
      }

      // Initialize friend list when friend list tab is clicked
      if (tabName === "friend-list") {
        initializeFriendListManagement();
      }
    });
  });

  // Initialize color palette for tag creation
  initializeColorPalette("tag-color-palette", "tag-color-input");

  // Tag creation form
  const tagCreateForm = document.getElementById("tag-create-form");
  if (tagCreateForm) {
    tagCreateForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const tagNameInput = document.getElementById("tag-name-input");
      const tagColorInput = document.getElementById("tag-color-input");

      const tagName = tagNameInput.value.trim();
      const tagColor = tagColorInput.value;

      if (!tagName) return;

      // Create new tag
      const tags = getAllTags();
      const newTag = {
        id: Date.now().toString(),
        name: tagName,
        color: tagColor,
        createdAt: new Date().toISOString(),
      };

      tags.push(newTag);
      saveTags(tags);

      // Reset form
      tagNameInput.value = "";
      tagColorInput.value = "transparent";

      // Reset color palette selection
      resetColorPalette("tag-color-palette", "transparent");

      // Refresh tag list
      renderTagManagementList();
    });
  }

  // Initial render
  renderTagManagementList();

  // Initialize tag edit modal
  initializeTagEditModal();
}

// Render tag management list
function renderTagManagementList() {
  const tagList = document.getElementById("tag-management-list");
  if (!tagList) return;

  const tags = getAllTags();

  if (tags.length === 0) {
    tagList.innerHTML =
      '<div class="empty-state"><p>タグがまだ作成されていません</p></div>';
    return;
  }

  tagList.innerHTML = tags
    .map((tag) => {
      const isTransparent = tag.color === "transparent";
      const styleAttr = isTransparent
        ? "background-color: transparent; border: 1px solid #ddd; color: #333;"
        : `background-color: ${tag.color};`;

      return `
      <div class="tag-management-item">
        <div class="tag-badge" style="${styleAttr}">
          ${tag.name}
        </div>
        <div class="tag-actions">
          <button class="btn-icon btn-edit-tag" data-tag-id="${tag.id}" title="編集">
            <i class="fa-solid fa-pen"></i>
          </button>
          <button class="btn-icon btn-delete-tag" data-tag-id="${tag.id}" title="削除">
            <i class="fa-solid fa-trash"></i>
          </button>
        </div>
      </div>
    `;
    })
    .join("");

  // Add delete event listeners
  tagList.querySelectorAll(".btn-delete-tag").forEach((btn) => {
    btn.addEventListener("click", function () {
      const tagId = this.getAttribute("data-tag-id");
      if (confirm("このタグを削除してもよろしいですか？")) {
        deleteTag(tagId);
      }
    });
  });

  // Add edit event listeners
  const editButtons = tagList.querySelectorAll(".btn-edit-tag");
  console.log("Found edit buttons:", editButtons.length);
  editButtons.forEach((btn) => {
    btn.addEventListener("click", function () {
      const tagId = this.getAttribute("data-tag-id");
      console.log("Edit button clicked for tag:", tagId);
      editTag(tagId);
    });
  });
}

// Delete tag
function deleteTag(tagId) {
  let tags = getAllTags();
  tags = tags.filter((tag) => tag.id !== tagId);
  saveTags(tags);
  renderTagManagementList();
}

// Edit tag
let currentEditingTagId = null;

function editTag(tagId) {
  console.log("editTag called with tagId:", tagId, "type:", typeof tagId);
  const tags = getAllTags();
  console.log("All tags:", tags);
  const tag = tags.find((t) => t.id == tagId); // Use loose equality to handle string/number mismatch
  if (!tag) {
    console.log("Tag not found");
    return;
  }

  currentEditingTagId = tagId;

  // Fill modal with current tag data
  const modal = document.getElementById("tag-edit-modal");
  const nameInput = document.getElementById("tag-edit-name-input");
  const colorInput = document.getElementById("tag-edit-color-input");

  console.log("Modal element:", modal);
  console.log("Name input:", nameInput);
  console.log("Color input:", colorInput);

  if (nameInput) nameInput.value = tag.name;
  if (colorInput) colorInput.value = tag.color || "transparent";

  // Update color palette selection
  setColorPaletteValue("tag-edit-color-palette", tag.color || "transparent");

  if (modal) {
    modal.style.display = "flex";
    console.log("Modal display set to flex");
  } else {
    console.error("Modal element not found!");
  }
}

// Initialize tag edit modal
let tagEditModalInitialized = false;

function initializeTagEditModal() {
  if (tagEditModalInitialized) return;
  tagEditModalInitialized = true;

  // Initialize color palette for tag edit modal
  initializeColorPalette("tag-edit-color-palette", "tag-edit-color-input");

  const modal = document.getElementById("tag-edit-modal");
  const closeBtn = document.getElementById("tag-edit-close-btn");
  const cancelBtn = document.getElementById("tag-edit-cancel-btn");
  const saveBtn = document.getElementById("tag-edit-save-btn");

  // Close button
  if (closeBtn) {
    closeBtn.onclick = function () {
      modal.style.display = "none";
      currentEditingTagId = null;
    };
  }

  // Cancel button
  if (cancelBtn) {
    cancelBtn.onclick = function () {
      modal.style.display = "none";
      currentEditingTagId = null;
    };
  }

  // Save button
  if (saveBtn) {
    saveBtn.onclick = function () {
      if (!currentEditingTagId) return;

      const nameInput = document.getElementById("tag-edit-name-input");
      const colorInput = document.getElementById("tag-edit-color-input");

      const newName = nameInput.value.trim();
      const newColor = colorInput.value;

      if (!newName) {
        alert("タグ名を入力してください");
        return;
      }

      const tags = getAllTags();
      const tag = tags.find((t) => t.id === currentEditingTagId);

      if (tag) {
        tag.name = newName;
        tag.color = newColor;
        saveTags(tags);
        renderTagManagementList();
      }

      modal.style.display = "none";
      currentEditingTagId = null;
    };
  }

  // Close modal when clicking outside
  window.addEventListener("click", function (event) {
    if (event.target === modal) {
      modal.style.display = "none";
      currentEditingTagId = null;
    }
  });
}

// Initialize user tag selection in individual chat
function initializeUserTagSelection(userId) {
  const tagSelectionContainer = document.getElementById("user-tag-selection");
  const saveButtonContainer = document.getElementById(
    "tags-save-button-container"
  );
  const saveButton = document.getElementById("save-user-tags-btn");

  if (!tagSelectionContainer) return;

  const allTags = getAllTags();
  const userTagIds = getUserTags(userId);

  if (allTags.length === 0) {
    tagSelectionContainer.innerHTML = `
      <div class="empty-state-small">
        <p>タグが作成されていません</p>
        <p style="font-size: 12px; margin-top: 8px;">友だち情報管理 > タグ管理 からタグを作成してください</p>
      </div>
    `;
    if (saveButtonContainer) {
      saveButtonContainer.style.display = "none";
    }
    return;
  }

  tagSelectionContainer.innerHTML = `
    <div class="tag-selection-list">
      ${allTags
        .map((tag) => {
          const isTransparent = tag.color === "transparent";
          const styleAttr = isTransparent
            ? "background-color: transparent; border: 1px solid #ddd; color: #333;"
            : `background-color: ${tag.color};`;
          return `
          <label class="tag-checkbox-item">
            <input
              type="checkbox"
              class="user-tag-checkbox"
              data-tag-id="${tag.id}"
              ${userTagIds.includes(tag.id) ? "checked" : ""}
            />
            <span class="tag-badge" style="${styleAttr}">
              ${tag.name}
            </span>
          </label>
        `;
        })
        .join("")}
    </div>
  `;

  // Show save button
  if (saveButtonContainer) {
    saveButtonContainer.style.display = "block";
  }

  // Save button click handler
  if (saveButton) {
    // Remove previous event listeners
    const newSaveButton = saveButton.cloneNode(true);
    saveButton.parentNode.replaceChild(newSaveButton, saveButton);

    newSaveButton.addEventListener("click", function () {
      // Get all checked tag IDs
      const checkedTagIds = [];
      tagSelectionContainer
        .querySelectorAll(".user-tag-checkbox:checked")
        .forEach((checkbox) => {
          checkedTagIds.push(checkbox.getAttribute("data-tag-id"));
        });

      // Save to localStorage
      saveUserTags(userId, checkedTagIds);

      // Show success feedback
      const originalText = newSaveButton.textContent;
      newSaveButton.textContent = "保存しました！";
      newSaveButton.style.backgroundColor = "#10b981";

      setTimeout(() => {
        newSaveButton.textContent = originalText;
        newSaveButton.style.backgroundColor = "";
      }, 2000);
    });
  }
}

// ===== Bookmark Management System =====

// Get all bookmarked friends from localStorage
function getBookmarkedFriends() {
  const bookmarks = localStorage.getItem("bookmarked_friends");
  if (bookmarks) {
    return JSON.parse(bookmarks);
  }

  // LocalStorageにない場合、モックデータから取得
  const friends = getMockFriends();
  const initialBookmarks = {};
  friends.forEach((friend) => {
    if (friend.bookmarked) {
      initialBookmarks[friend.id] = true;
    }
  });
  return initialBookmarks;
}

// Save bookmarked friends to localStorage
function saveBookmarkedFriends(bookmarks) {
  localStorage.setItem("bookmarked_friends", JSON.stringify(bookmarks));
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
  const bookmarkCountElement = document.getElementById("bookmark-count");
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
    const unreadCount = users.filter(
      (user) => getUserReadStatus(user.id) === "unread"
    ).length;

    // Count read users
    const readCount = users.filter(
      (user) => getUserReadStatus(user.id) === "read"
    ).length;

    // Count bookmarked users
    const bookmarks = getBookmarkedFriends();
    const bookmarkCount = Object.keys(bookmarks).length;

    // Update select options text
    const selectElement = document.getElementById("friend-filter-select");
    if (selectElement) {
      selectElement.options[0].text = `すべて (${allCount})`;
      selectElement.options[1].text = `未読 (${unreadCount})`;
      selectElement.options[2].text = `既読 (${readCount})`;
      selectElement.options[3].text = `ブックマーク (${bookmarkCount})`;
    }
  } catch (error) {
    console.error("Error updating filter counts:", error);
  }
}

// Update chat header bookmark button state
function updateChatHeaderBookmark(userId) {
  const bookmarkBtn = document.getElementById("chat-bookmark-btn");
  const bookmarkIcon = bookmarkBtn?.querySelector(".bookmark-icon");

  if (!bookmarkBtn || !bookmarkIcon) return;

  const isUserBookmarked = isBookmarked(userId);

  if (isUserBookmarked) {
    bookmarkIcon.classList.remove("fa-regular");
    bookmarkIcon.classList.add("fa-solid");
    bookmarkBtn.classList.add("bookmarked");
  } else {
    bookmarkIcon.classList.remove("fa-solid");
    bookmarkIcon.classList.add("fa-regular");
    bookmarkBtn.classList.remove("bookmarked");
  }
}

// Initialize bookmark button click handler
function initializeBookmarkButton() {
  const bookmarkBtn = document.getElementById("chat-bookmark-btn");

  if (!bookmarkBtn) return;

  bookmarkBtn.addEventListener("click", function () {
    if (!currentChatUserId) return;

    const newState = toggleBookmark(currentChatUserId);
    updateChatHeaderBookmark(currentChatUserId);

    // Refresh friends list to update bookmark icons
    const selectElement = document.getElementById("friend-filter-select");
    const currentFilter = selectElement ? selectElement.value : "all";
    if (currentFilter === "bookmarked" && !newState) {
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
  const friendItem = document.querySelector(
    `.friend-item[data-user-id="${userId}"]`
  );
  if (!friendItem) return;

  // Remove existing icon if present
  const existingIcon = friendItem.querySelector(".friend-bookmark-icon");
  if (existingIcon) {
    existingIcon.remove();
  }

  // Add icon only if bookmarked
  if (isBookmarkedStatus) {
    const newIcon = document.createElement("i");
    newIcon.className = "friend-bookmark-icon fa-solid fa-bookmark";
    friendItem.appendChild(newIcon);
  }
}

// Initialize bookmark filter select
function initializeBookmarkFilter() {
  const selectElement = document.getElementById("friend-filter-select");

  if (!selectElement) return;

  // Add change event listener
  selectElement.addEventListener("change", function () {
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
  const tagSelectionList = document.getElementById(
    "broadcast-tag-selection-list"
  );
  if (!tagSelectionList) return;

  const allTags = getAllTags();

  if (allTags.length === 0) {
    tagSelectionList.innerHTML = `
      <div class="empty-state-small">
        <p>タグが作成されていません</p>
        <p style="font-size: 12px; margin-top: 8px;">友だち情報管理 > タグ管理 からタグを作成してください</p>
      </div>
    `;
    return;
  }

  tagSelectionList.innerHTML = allTags
    .map((tag) => {
      const isTransparent = tag.color === "transparent";
      const styleAttr = isTransparent
        ? "background-color: transparent; border: 1px solid #ddd; color: #333;"
        : `background-color: ${tag.color};`;
      return `
      <label class="broadcast-tag-item">
        <input
          type="checkbox"
          class="broadcast-tag-checkbox"
          data-tag-id="${tag.id}"
        />
        <span class="tag-badge" style="${styleAttr}">
          ${tag.name}
        </span>
        <span class="tag-user-count" data-tag-id="${tag.id}">-</span>
      </label>
    `;
    })
    .join("");

  // Calculate and display user counts for each tag
  updateTagUserCounts();

  // Add change event listeners
  tagSelectionList
    .querySelectorAll(".broadcast-tag-checkbox")
    .forEach((checkbox) => {
      checkbox.addEventListener("change", function () {
        const tagId = parseInt(this.getAttribute("data-tag-id"));

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

  allTags.forEach((tag) => {
    const count = calculateTagUserCount(tag.id);
    const countElements = document.querySelectorAll(
      `.tag-user-count[data-tag-id="${tag.id}"]`
    );
    if (countElements.length > 0) {
      countElements.forEach((element) => {
        element.textContent = `${count}人`;
      });
    }
  });
}

// Calculate how many users have a specific tag
function calculateTagUserCount(tagId) {
  // Get all users from localStorage (実際にはAPIから取得する想定)
  // ここでは仮実装として、各ユーザーのタグ情報をチェック
  let count = 0;
  const numericTagId = parseInt(tagId);

  // localStorageのキーを列挙してuser_tags_*を探す
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (key.startsWith("user_tags_")) {
      const userTags = JSON.parse(localStorage.getItem(key));
      if (userTags.includes(numericTagId)) {
        count++;
      }
    }
  }

  return count;
}

// Update selected tags count display
function updateSelectedTagsCount() {
  const countContainer = document.getElementById("tag-selection-count");
  const countSpan = document.getElementById("tagged-friends-count");

  if (!countContainer || !countSpan) return;

  if (selectedBroadcastTags.size === 0) {
    countContainer.style.display = "none";
    return;
  }

  // Calculate total unique users with selected tags
  const totalCount = calculateTotalTaggedUsers();

  countContainer.style.display = "block";
  countSpan.textContent = totalCount;
}

// Calculate total unique users with any of the selected tags
function calculateTotalUsersForTagSet(tagSet) {
  if (!tagSet || tagSet.size === 0) {
    return 0;
  }

  const uniqueUsers = new Set();

  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (key.startsWith("user_tags_")) {
      const userId = key.replace("user_tags_", "");
      const userTags = JSON.parse(localStorage.getItem(key));

      // Check if user has any of the selected tags
      for (let tagId of tagSet) {
        const numericTagId = parseInt(tagId, 10);
        if (Number.isNaN(numericTagId)) continue;
        if (userTags.includes(numericTagId)) {
          uniqueUsers.add(userId);
          break;
        }
      }
    }
  }

  return uniqueUsers.size;
}

function calculateTotalTaggedUsers() {
  return calculateTotalUsersForTagSet(selectedBroadcastTags);
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
  const friend = friends.find((f) => f.id == userId);
  return friend ? friend.readStatus : "read";
}

// Set user read status in localStorage
function setUserReadStatus(userId, status) {
  localStorage.setItem(`user_read_status_${userId}`, status);
}

// Initialize read status buttons
function initializeReadStatusButtons() {
  const toggleBtn = document.getElementById("read-status-toggle-btn");

  if (!toggleBtn) return;

  // Click handler for toggle button
  toggleBtn.addEventListener("click", function () {
    if (!currentChatUserId) return;

    // Get current status and toggle it
    const currentStatus = getUserReadStatus(currentChatUserId);
    const newStatus = currentStatus === "read" ? "unread" : "read";

    // Update status
    setUserReadStatus(currentChatUserId, newStatus);
    updateReadStatusButtonState(newStatus);
    updateFriendListUnreadIndicator(currentChatUserId, newStatus === "unread");
    updateFilterCounts();
  });
}

// Update read status button visual state
function updateReadStatusButtonState(status) {
  const toggleBtn = document.getElementById("read-status-toggle-btn");
  if (!toggleBtn) return;

  const icon = toggleBtn.querySelector("i");
  if (!icon) return;

  if (status === "unread") {
    // 未読: fa-regular fa-envelope（閉じた封筒、塗りつぶしなし）
    icon.className = "fa-regular fa-envelope";
    toggleBtn.classList.add("unread");
  } else {
    // 既読: fa-solid fa-envelope-open（開いた封筒、塗りつぶしあり）
    icon.className = "fa-solid fa-envelope-open";
    toggleBtn.classList.remove("unread");
  }
}

// Update unread indicator in friends list
function updateFriendListUnreadIndicator(userId, showIndicator) {
  const friendItem = document.querySelector(
    `.friend-item[data-user-id="${userId}"]`
  );
  if (!friendItem) return;

  // Remove existing indicator
  const existingIndicator = friendItem.querySelector(".unread-indicator");
  if (existingIndicator) {
    existingIndicator.remove();
  }

  // Add new indicator if needed
  if (showIndicator) {
    const indicator = document.createElement("span");
    indicator.className = "unread-indicator";
    friendItem.appendChild(indicator);
  }
}

// ===== URL Management System =====

// Get all URLs from localStorage
function getAllUrls() {
  const urls = localStorage.getItem("line_urls");
  return urls ? JSON.parse(urls) : [];
}

// Save URLs to localStorage
function saveUrls(urls) {
  localStorage.setItem("line_urls", JSON.stringify(urls));
}

// Initialize URL management page
function initializeUrlManagement() {
  // URL creation form
  const urlCreateForm = document.getElementById("url-create-form");
  if (urlCreateForm && !urlCreateForm.dataset.initialized) {
    urlCreateForm.dataset.initialized = "true";

    urlCreateForm.addEventListener("submit", function (e) {
      e.preventDefault();
      console.log("URL create form submitted");

      const urlTitleInput = document.getElementById("url-title-input");
      const urlLinkInput = document.getElementById("url-link-input");

      const title = urlTitleInput.value.trim();
      const link = urlLinkInput.value.trim();

      console.log("Title:", title, "Link:", link);

      if (!title || !link) {
        console.log("Title or link is empty");
        return;
      }

      // Create new URL
      const urls = getAllUrls();
      console.log("Current URLs:", urls);

      const shortUrl = generateShortUrl();
      console.log("Generated short URL:", shortUrl);

      const newUrl = {
        id: Date.now().toString(),
        title: title,
        url: link,
        shortUrl: shortUrl,
        createdAt: new Date().toISOString(),
        totalClicks: 0,
        uniqueClicks: 0,
        sent: 0, // Number of times URL was sent in messages
      };

      console.log("New URL object:", newUrl);

      urls.push(newUrl);
      saveUrls(urls);

      console.log("URLs after save:", getAllUrls());

      // Reset form
      urlTitleInput.value = "";
      urlLinkInput.value = "";

      // Refresh URL list
      renderUrlManagementList();
    });
  }

  // Initial render
  renderUrlManagementList();
}

// Generate short URL
function generateShortUrl() {
  const characters =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let shortCode = "";
  for (let i = 0; i < 6; i++) {
    shortCode += characters.charAt(
      Math.floor(Math.random() * characters.length)
    );
  }
  return "https://myne.link/" + shortCode;
}

// Render URL management list
function renderUrlManagementList() {
  const tbody = document.getElementById("url-management-tbody");
  if (!tbody) return;

  const urls = getAllUrls();

  if (urls.length === 0) {
    tbody.innerHTML =
      '<tr><td colspan="6" style="text-align: center; padding: 30px; color: #999;">URLがまだ作成されていません</td></tr>';
    return;
  }

  tbody.innerHTML = urls
    .map((url) => {
      const shortUrl = url.shortUrl || generateShortUrl(); // Generate if not exists for old data
      const createdDate = new Date(url.createdAt).toLocaleString("ja-JP", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
      });

      // Calculate statistics
      const totalClicks = url.totalClicks || 0;
      const uniqueClicks = url.uniqueClicks || 0;
      const sent = url.sent || 0;
      const clickRate =
        sent > 0 ? ((totalClicks / sent) * 100).toFixed(1) : "0.0";
      const uniqueClickRate =
        sent > 0 ? ((uniqueClicks / sent) * 100).toFixed(1) : "0.0";

      return `
      <tr>
        <td>${url.title}</td>
        <td>
          <div style="display: flex; align-items: center; gap: 8px;">
            <a href="${url.url}" target="_blank" rel="noopener noreferrer" style="color: #00b900; text-decoration: none; flex: 1; word-break: break-all;">${url.url}</a>
            <button class="btn-icon btn-copy-url" data-url="${url.url}" title="コピー">
              <i class="fa-solid fa-copy"></i>
            </button>
          </div>
        </td>
        <td>
          <div style="display: flex; align-items: center; gap: 8px;">
            <span style="color: #00b900; font-weight: 500; flex: 1;">${shortUrl}</span>
            <button class="btn-icon btn-copy-short-url" data-short-url="${shortUrl}" title="コピー">
              <i class="fa-solid fa-copy"></i>
            </button>
          </div>
        </td>
        <td>${uniqueClicks} / ${uniqueClickRate}%</td>
        <td>${createdDate}</td>
        <td>
          <button class="btn btn-secondary btn-sm btn-delete-url" data-url-id="${url.id}">削除</button>
        </td>
      </tr>
    `;
    })
    .join("");

  // Add event listeners for delete buttons
  tbody.querySelectorAll(".btn-delete-url").forEach((btn) => {
    btn.addEventListener("click", function () {
      const urlId = this.getAttribute("data-url-id");
      if (confirm("このURLを削除しますか？")) {
        deleteUrl(urlId);
      }
    });
  });

  // Add event listeners for copy buttons (original URL)
  tbody.querySelectorAll(".btn-copy-url").forEach((btn) => {
    btn.addEventListener("click", function () {
      const url = this.getAttribute("data-url");
      copyToClipboard(url);
    });
  });

  // Add event listeners for copy buttons (short URL)
  tbody.querySelectorAll(".btn-copy-short-url").forEach((btn) => {
    btn.addEventListener("click", function () {
      const shortUrl = this.getAttribute("data-short-url");
      copyToClipboard(shortUrl);
    });
  });
}

// Delete URL
function deleteUrl(urlId) {
  const urls = getAllUrls();
  const updatedUrls = urls.filter((url) => url.id !== urlId);
  saveUrls(updatedUrls);
  renderUrlManagementList();
}

// Copy text to clipboard
function copyToClipboard(text) {
  navigator.clipboard
    .writeText(text)
    .then(() => {
      alert("URLをクリップボードにコピーしました");
    })
    .catch((err) => {
      console.error("コピーに失敗しました:", err);
      alert("コピーに失敗しました");
    });
}

// ===== Friend List Management System =====

// Generate UUID for new friend
function generateUUID() {
  // 既存のUUID形式: U001234567890abcdef###
  // ランダムな文字列を生成（数字とアルファベット）
  const chars = "0123456789abcdef";
  let uuid = "U";
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
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        uuid: uuid,
        user_name: userName,
      }),
    });

    if (!response.ok) {
      throw new Error("Failed to create friend");
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Error creating friend:", error);
    throw error;
  }
}

// Initialize friend list management page
function initializeFriendListManagement() {
  // Friend creation form
  const friendCreateForm = document.getElementById("friend-create-form");
  if (friendCreateForm && !friendCreateForm.dataset.initialized) {
    friendCreateForm.dataset.initialized = "true";

    friendCreateForm.addEventListener("submit", async function (e) {
      e.preventDefault();

      const nameInput = document.getElementById("friend-name-input");
      const userName = nameInput.value.trim();

      if (!userName) {
        alert("友だち名を入力してください");
        return;
      }

      try {
        await createFriend(userName);
        alert("友だちを追加しました！");

        // フォームをリセット
        nameInput.value = "";

        // 友だちリストをリフレッシュ
        renderFriendListTable();
      } catch (error) {
        alert("友だちの追加に失敗しました: " + error.message);
      }
    });
  }

  // Friend list search
  const searchInput = document.getElementById("friend-list-search");
  if (searchInput && !searchInput.dataset.initialized) {
    searchInput.dataset.initialized = "true";

    searchInput.addEventListener("input", function () {
      const searchTerm = this.value.trim().toLowerCase();
      renderFriendListTable(searchTerm);
    });
  }

  // Initial render
  renderFriendListTable();
}

// Render friend list table
async function renderFriendListTable(searchTerm = "") {
  const tbody = document.getElementById("friend-list-tbody");
  if (!tbody) return;

  // Show loading state
  tbody.innerHTML =
    '<tr><td colspan="5" style="text-align: center; padding: 20px;">読み込み中...</td></tr>';

  try {
    // Fetch all users
    const users = await fetchUsers();

    // Filter by search term
    let filteredUsers = users;
    if (searchTerm) {
      filteredUsers = users.filter(
        (user) =>
          user.user_name.toLowerCase().includes(searchTerm) ||
          user.uuid.toLowerCase().includes(searchTerm)
      );
    }

    if (filteredUsers.length === 0) {
      tbody.innerHTML =
        '<tr><td colspan="5" style="text-align: center; padding: 20px;">友だちが見つかりません</td></tr>';
      return;
    }

    // Get all tags
    const allTags = getAllTags();

    // Render table rows
    tbody.innerHTML = filteredUsers
      .map((user) => {
        const formattedDate = new Date(user.created_at).toLocaleString(
          "ja-JP",
          {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
            hour: "2-digit",
            minute: "2-digit",
          }
        );

        // Get system display name
        const systemDisplayName = getUserSystemDisplayName(
          user.id,
          user.user_name
        );

        // Get user tags
        const userTagIds = getUserTags(user.id);
        const userTags = allTags.filter((tag) => userTagIds.includes(tag.id));
        const tagsHtml =
          userTags.length > 0
            ? userTags
                .map((tag) => {
                  const isTransparent = tag.color === "transparent";
                  const styleAttr = isTransparent
                    ? "background-color: transparent; border: 1px solid #ddd; color: #333;"
                    : `background-color: ${tag.color};`;
                  return `<span class="tag-badge" style="${styleAttr}">${tag.name}</span>`;
                })
                .join(" ")
            : '<span style="color: #999;">タグなし</span>';

        return `
        <tr class="friend-list-row">
          <td class="friend-list-name">${user.user_name}</td>
          <td class="friend-list-system-name">${systemDisplayName}</td>
          <td class="friend-list-uuid">${user.uuid}</td>
          <td class="friend-list-tags">${tagsHtml}</td>
          <td class="friend-list-date">${formattedDate}</td>
        </tr>
      `;
      })
      .join("");
  } catch (error) {
    console.error("Error loading friend list:", error);
    tbody.innerHTML =
      '<tr><td colspan="4" style="text-align: center; padding: 20px; color: red;">エラーが発生しました</td></tr>';
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
  const friend = friends.find((f) => f.id == userId);
  return friend ? friend.memo : "";
}

// Save user memo to localStorage
function saveUserMemo(userId, memo) {
  const key = `user_${userId}_memo`;
  localStorage.setItem(key, memo);
}

// Open memo modal
function openMemoModal(userId) {
  currentMemoUserId = userId;
  const modal = document.getElementById("memo-modal");
  const textarea = document.getElementById("memo-textarea");

  if (!modal || !textarea) return;

  // Load existing memo
  const memo = getUserMemo(userId);
  textarea.value = memo;

  modal.style.display = "flex";
  textarea.focus();
}

// Close memo modal
function closeMemoModal() {
  const modal = document.getElementById("memo-modal");
  if (modal) {
    modal.style.display = "none";
    currentMemoUserId = null;
  }
}

// Save memo and close modal
function saveMemoAndClose() {
  if (currentMemoUserId === null) return;

  const textarea = document.getElementById("memo-textarea");
  if (!textarea) return;

  const memo = textarea.value.trim();
  saveUserMemo(currentMemoUserId, memo);

  // Update the display in user info
  const memoDisplay = document.querySelector(".user-info-memo");
  if (memoDisplay) {
    memoDisplay.textContent = memo || "メモを追加...";
    memoDisplay.style.color = memo ? "#333" : "#999";
  }

  closeMemoModal();
}

// Initialize memo modal event listeners
function initializeMemoModal() {
  const closeBtn = document.getElementById("memo-close-btn");
  const cancelBtn = document.getElementById("memo-cancel-btn");
  const saveBtn = document.getElementById("memo-save-btn");
  const modal = document.getElementById("memo-modal");

  if (closeBtn) {
    closeBtn.addEventListener("click", closeMemoModal);
  }

  if (cancelBtn) {
    cancelBtn.addEventListener("click", closeMemoModal);
  }

  if (saveBtn) {
    saveBtn.addEventListener("click", saveMemoAndClose);
  }

  // Close modal when clicking outside
  if (modal) {
    modal.addEventListener("click", function (e) {
      if (e.target === modal) {
        closeMemoModal();
      }
    });
  }
}

// ===== System Display Name Functions =====
let currentSystemDisplayNameUserId = null;

// Get user system display name from localStorage
function getUserSystemDisplayName(userId, lineName = "") {
  const key = `user_${userId}_system_display_name`;
  const displayName = localStorage.getItem(key);
  if (displayName !== null && displayName !== "") {
    return displayName;
  }

  // デフォルトはLINE名を返す
  return lineName;
}

// Save user system display name to localStorage
function saveUserSystemDisplayName(userId, displayName) {
  const key = `user_${userId}_system_display_name`;
  localStorage.setItem(key, displayName);
}

// Open system display name modal
function openSystemDisplayNameModal(userId) {
  currentSystemDisplayNameUserId = userId;
  const modal = document.getElementById("system-display-name-modal");
  const input = document.getElementById("system-display-name-input");

  if (!modal || !input) return;

  // Load existing display name - デフォルトはLINE名(currentChatUserName)を使用
  const displayName = getUserSystemDisplayName(userId, currentChatUserName);
  input.value = displayName;

  modal.style.display = "flex";
  input.focus();
}

// Close system display name modal
function closeSystemDisplayNameModal() {
  const modal = document.getElementById("system-display-name-modal");
  if (modal) {
    modal.style.display = "none";
    currentSystemDisplayNameUserId = null;
  }
}

// Save system display name and close modal
function saveSystemDisplayNameAndClose() {
  if (currentSystemDisplayNameUserId === null) return;

  const input = document.getElementById("system-display-name-input");
  if (!input) return;

  const displayName = input.value.trim();
  if (displayName) {
    saveUserSystemDisplayName(currentSystemDisplayNameUserId, displayName);

    // Update the display in user info
    const displayNameElement = document.querySelector(
      ".user-info-system-display-name"
    );
    if (displayNameElement) {
      displayNameElement.textContent = displayName;
    }
  }

  closeSystemDisplayNameModal();
}

// Initialize system display name modal event listeners
function initializeSystemDisplayNameModal() {
  const closeBtn = document.getElementById("system-display-name-close-btn");
  const cancelBtn = document.getElementById("system-display-name-cancel-btn");
  const saveBtn = document.getElementById("system-display-name-save-btn");
  const modal = document.getElementById("system-display-name-modal");

  if (closeBtn) {
    closeBtn.addEventListener("click", closeSystemDisplayNameModal);
  }

  if (cancelBtn) {
    cancelBtn.addEventListener("click", closeSystemDisplayNameModal);
  }

  if (saveBtn) {
    saveBtn.addEventListener("click", saveSystemDisplayNameAndClose);
  }

  // Close modal when clicking outside
  if (modal) {
    modal.addEventListener("click", function (e) {
      if (e.target === modal) {
        closeSystemDisplayNameModal();
      }
    });
  }
}

// Call initializeMemoModal on page load
document.addEventListener("DOMContentLoaded", function () {
  initializeMemoModal();
  initializeSystemDisplayNameModal();
  initializeStepMessagePreviewModal();
});

// ===== Refresh Tag Display =====
function refreshTagDisplay(userId) {
  const allTags = getAllTags();
  const userTagIds = getUserTags(userId);

  let tagsHtml = "";

  if (allTags.length === 0) {
    tagsHtml = `
      <div class="empty-state-small">
        <p>タグが作成されていません</p>
      </div>
    `;
  } else {
    // Ensure type compatibility for comparison
    const selectedTags = allTags.filter((tag) =>
      userTagIds.some((id) => String(id) === String(tag.id))
    );

    if (selectedTags.length === 0) {
      tagsHtml = `
        <span style="color: #999;">タグが設定されていません</span>
      `;
    } else {
      const selectedTagBadges = selectedTags
        .map((tag) => {
          const isTransparent = tag.color === "transparent";
          const styleAttr = isTransparent
            ? "background-color: transparent; border: 1px solid #ddd; color: #333;"
            : `background-color: ${tag.color};`;
          return `<span class="tag-badge" style="${styleAttr}">${tag.name}</span>`;
        })
        .join("");

      tagsHtml = `
        <div id="user-tags-display-${userId}" style="display: flex; flex-direction: column; gap: 6px;">
          ${selectedTagBadges}
        </div>
      `;
    }
  }

  // Update tag display area
  const userInfoItems = document.querySelectorAll(
    "#individual-user-info .user-info-item"
  );
  const tagSection = Array.from(userInfoItems).find((item) => {
    const label = item.querySelector(".user-info-label");
    return label && label.textContent.trim().includes("タグ");
  });

  if (tagSection) {
    const valueDiv = tagSection.querySelector(".user-info-value");
    if (valueDiv) {
      valueDiv.innerHTML = tagsHtml;
    }
  }
}

// ===== Save Tags from Basic Info =====
function saveUserTagsFromBasicInfo(userId) {
  const checkboxes = document.querySelectorAll(
    '#individual-user-info .tag-checkbox-item input[type="checkbox"]'
  );
  const selectedTagIds = [];

  checkboxes.forEach((checkbox) => {
    if (checkbox.checked) {
      // Convert string to number to match tag ID type
      const tagId = parseInt(checkbox.value, 10);
      if (!isNaN(tagId)) {
        selectedTagIds.push(tagId);
      }
    }
  });

  // Save to localStorage using the existing saveUserTags function
  saveUserTags(userId, selectedTagIds);

  // Show success message
  alert("タグを保存しました");

  // Refresh tag display to show display mode
  refreshTagDisplay(userId);

  // Refresh friends list to update tag badges
  loadIndividualPageUsers();
}

// ===== Edit User Tags Mode =====
function editUserTagsMode(userId) {
  const allTags = getAllTags();
  const userTagIds = getUserTags(userId);

  if (allTags.length === 0) {
    alert("タグが作成されていません");
    return;
  }

  // Build checkbox list HTML
  const tagsCheckboxHtml = `
    <div id="user-tags-edit-${userId}">
      <div class="tag-selection-list">
        ${allTags
          .map((tag) => {
            const isTransparent = tag.color === "transparent";
            const styleAttr = isTransparent
              ? "background-color: transparent; border: 1px solid #ddd; color: #333;"
              : `background-color: ${tag.color};`;
            // Ensure type compatibility for comparison
            const isChecked = userTagIds.some(
              (id) => String(id) === String(tag.id)
            );
            return `
            <label class="tag-checkbox-item">
              <input type="checkbox" value="${tag.id}" ${
              isChecked ? "checked" : ""
            }>
              <span class="tag-badge" style="${styleAttr}">${tag.name}</span>
            </label>
          `;
          })
          .join("")}
      </div>
      <div class="tags-save-button-container" style="margin-top: 16px; display: flex; gap: 8px;">
        <button class="btn btn-primary" onclick="saveUserTagsFromBasicInfo(${userId})">保存</button>
        <button class="btn btn-secondary" onclick="cancelUserTagsEdit(${userId})">キャンセル</button>
      </div>
    </div>
  `;

  // Replace the tag display area with edit mode
  const userInfoItems = document.querySelectorAll(
    "#individual-user-info .user-info-item"
  );
  const tagSection = Array.from(userInfoItems).find((item) => {
    const label = item.querySelector(".user-info-label");
    return label && label.textContent.trim() === "タグ";
  });

  if (tagSection) {
    const valueDiv = tagSection.querySelector(".user-info-value");
    if (valueDiv) {
      valueDiv.innerHTML = tagsCheckboxHtml;
    }
  }
}

// ===== Cancel User Tags Edit =====
function cancelUserTagsEdit(userId) {
  // Refresh tag display to go back to display mode
  refreshTagDisplay(userId);
}

// ===== Scenario Detail Page =====
function showScenarioDetailPage(scenario, options = {}) {
  if (!scenario) return;

  // Determine editing mode
  isNewScenario = options.isNew === true;

  const normalized = normalizeScenarioData(scenario);
  originalScenario = isNewScenario ? null : cloneScenarioData(normalized);
  currentScenario = cloneScenarioData(normalized);

  selectedScenarioTags = new Set(
    Array.isArray(currentScenario.targetTagIds)
      ? currentScenario.targetTagIds
      : []
  );

  // Reset unsaved changes flag based on mode
  scenarioHasUnsavedChanges = isNewScenario;

  // Hide all pages
  document.querySelectorAll(".page").forEach((page) => {
    page.classList.remove("active");
    page.style.display = "none";
  });

  // Show scenario detail page
  const detailPage = document.getElementById("scenario-detail-page");
  detailPage.classList.add("active");
  detailPage.style.display = "block";

  // Update page title and info
  updateScenarioDetailTitle();
  document.getElementById("detail-scenario-name").textContent =
    currentScenario.name;
  document.getElementById("detail-scenario-date").textContent =
    currentScenario.createdAt;

  const stepsCountElement = document.getElementById("detail-scenario-steps");
  if (stepsCountElement) {
    stepsCountElement.textContent = currentScenario.steps.length;
  }

  // Update active nav item
  document
    .querySelectorAll(".nav-item")
    .forEach((item) => item.classList.remove("active"));
  document.querySelector('[data-page="step"]').classList.add("active");

  // Render steps list
  renderStepsList(currentScenario.steps);

  // Initialize event listeners
  initializeScenarioDetailPage();
}

function updateScenarioDetailTitle() {
  const titleElement = document.getElementById("scenario-detail-title");
  if (!titleElement) return;
  titleElement.textContent = isNewScenario
    ? "ステップ配信を作成"
    : "ステップ配信を編集";
}

function initializeScenarioDetailPage() {
  console.log(
    "Initializing scenario detail page, currentScenario:",
    currentScenario
  );

  // Back to list button
  const backBtn = document.getElementById("scenario-back-btn");
  console.log("Back button element:", backBtn);
  if (backBtn) {
    // Remove old event listener if exists by cloning the button
    const newBackBtn = backBtn.cloneNode(true);
    backBtn.parentNode.replaceChild(newBackBtn, backBtn);

    newBackBtn.addEventListener("click", () => {
      console.log("Back button clicked");

      // Check if there are unsaved changes
      if (scenarioHasUnsavedChanges) {
        const confirmed = confirm(
          "このサイトを離れますか？\n行った変更が保存されない可能性があります。"
        );
        if (!confirmed) {
          return; // Cancel navigation
        }
      }

      resetScenarioEditingState();
      navigateToPage("step");
    });
  }

  // Add step button
  const addStepBtn = document.getElementById("add-step-btn");
  console.log("Add step button element:", addStepBtn);
  if (addStepBtn) {
    // Remove old event listener if exists by cloning the button
    const newAddStepBtn = addStepBtn.cloneNode(true);
    addStepBtn.parentNode.replaceChild(newAddStepBtn, addStepBtn);

    newAddStepBtn.addEventListener("click", () => {
      console.log("Add step button clicked, currentScenario:", currentScenario);
      openStepTimingModal();
    });
  }

  // Edit scenario name button
  const editNameBtn = document.getElementById("edit-scenario-name-btn");
  if (editNameBtn) {
    // Remove old event listener if exists by cloning the button
    const newEditNameBtn = editNameBtn.cloneNode(true);
    editNameBtn.parentNode.replaceChild(newEditNameBtn, editNameBtn);

    newEditNameBtn.addEventListener("click", () => {
      enableScenarioNameEdit();
    });
  }

  // Preview button
  const previewBtn = document.getElementById("scenario-preview-btn");
  if (previewBtn) {
    const newPreviewBtn = previewBtn.cloneNode(true);
    previewBtn.parentNode.replaceChild(newPreviewBtn, previewBtn);

    newPreviewBtn.addEventListener("click", () => {
      showScenarioPreview();
    });
  }

  // Save button
  const saveBtn = document.getElementById("scenario-save-btn");
  if (saveBtn) {
    const newSaveBtn = saveBtn.cloneNode(true);
    saveBtn.parentNode.replaceChild(newSaveBtn, saveBtn);

    newSaveBtn.addEventListener("click", () => {
      saveScenarioChanges();
    });
  }

  // Initialize target selection controls
  initializeScenarioTargetSettings();

  // Initialize step timing modal
  initializeStepTimingModal();
}

// Handle scenario target type change (all or tags)
function handleScenarioTargetChange(target) {
  const tagSelectionArea = document.getElementById(
    "scenario-tag-selection-area"
  );

  if (target === "tags") {
    // タグで絞り込み選択時はタグ選択UIを表示
    tagSelectionArea.style.display = "block";
    renderScenarioTagSelectionList();
    updateScenarioSelectedTagsCount();
  } else {
    // 全員の場合は非表示
    tagSelectionArea.style.display = "none";
  }

  console.log("Scenario target changed to:", target);
}

function initializeScenarioTargetSettings() {
  if (!currentScenario) return;

  // Set default targetType if not exists
  if (!currentScenario.targetType) {
    currentScenario.targetType = "all";
  }
  if (!Array.isArray(currentScenario.targetTagIds)) {
    currentScenario.targetTagIds = [];
  }
  selectedScenarioTags = new Set(
    currentScenario.targetTagIds
      .map((id) => parseInt(id, 10))
      .filter((id) => !Number.isNaN(id))
  );
  currentScenario.targetTagIds = Array.from(selectedScenarioTags);

  // Set radio button state
  const radioAll = document.querySelector(
    'input[name="scenario-target"][value="all"]'
  );
  const radioTags = document.querySelector(
    'input[name="scenario-target"][value="tags"]'
  );

  if (currentScenario.targetType === "tags") {
    if (radioTags) radioTags.checked = true;
  } else {
    if (radioAll) radioAll.checked = true;
  }

  // Add event listeners to radio buttons
  const radios = document.querySelectorAll('input[name="scenario-target"]');
  radios.forEach((radio) => {
    radio.addEventListener("change", (e) => {
      const value = e.target.value;
      currentScenario.targetType = value;
      handleScenarioTargetChange(value);
    });
  });

  // Initialize UI based on targetType
  handleScenarioTargetChange(currentScenario.targetType);
}

function renderScenarioTagSelectionList() {
  const tagSelectionList = document.getElementById(
    "scenario-tag-selection-list"
  );
  if (!tagSelectionList) return;

  const allTags = getAllTags();

  if (allTags.length === 0) {
    tagSelectionList.innerHTML = `
      <div class="empty-state-small">
        <p>タグが作成されていません</p>
        <p style="font-size: 12px; margin-top: 8px;">友だち情報管理 > タグ管理 からタグを作成してください</p>
      </div>
    `;
    updateScenarioSelectedTagsCount();
    return;
  }

  tagSelectionList.innerHTML = allTags
    .map((tag) => {
      const isTransparent = tag.color === "transparent";
      const styleAttr = isTransparent
        ? "background-color: transparent; border: 1px solid #ddd; color: #333;"
        : `background-color: ${tag.color};`;
      return `
      <label class="broadcast-tag-item">
        <input
          type="checkbox"
          class="scenario-tag-checkbox"
          data-tag-id="${tag.id}"
        />
        <span class="tag-badge" style="${styleAttr}">
          ${tag.name}
        </span>
        <span class="tag-user-count" data-tag-id="${tag.id}">-</span>
      </label>
    `;
    })
    .join("");

  updateTagUserCounts();

  tagSelectionList
    .querySelectorAll(".scenario-tag-checkbox")
    .forEach((checkbox) => {
      const tagId = parseInt(checkbox.getAttribute("data-tag-id"), 10);
      if (!Number.isNaN(tagId) && selectedScenarioTags.has(tagId)) {
        checkbox.checked = true;
      }

      checkbox.addEventListener("change", function () {
        handleScenarioTagCheckboxChange(this);
      });
    });
}

function handleScenarioTagCheckboxChange(checkbox) {
  if (!currentScenario || !checkbox) return;

  const tagId = parseInt(checkbox.getAttribute("data-tag-id"), 10);
  if (Number.isNaN(tagId)) return;

  if (checkbox.checked) {
    selectedScenarioTags.add(tagId);
  } else {
    selectedScenarioTags.delete(tagId);
  }

  currentScenario.targetTagIds = Array.from(selectedScenarioTags);

  updateScenarioSelectedTagsCount();
  markScenarioDirty();
}

function updateScenarioSelectedTagsCount() {
  const countContainer = document.getElementById(
    "scenario-tag-selection-count"
  );
  const countSpan = document.getElementById("scenario-tagged-friends-count");

  if (!countContainer || !countSpan) return;

  if (!selectedScenarioTags || selectedScenarioTags.size === 0) {
    countContainer.style.display = "none";
    countSpan.textContent = "0";
    return;
  }

  const totalCount = calculateTotalUsersForTagSet(selectedScenarioTags);
  countContainer.style.display = "block";
  countSpan.textContent = totalCount;
}

let scenarioPreviewModalInitialized = false;

function initializeScenarioPreviewModal() {
  if (scenarioPreviewModalInitialized) return;

  const modal = document.getElementById("scenario-preview-modal");
  if (!modal) return;

  const closeBtn = document.getElementById("scenario-preview-close-btn");
  const backBtn = document.getElementById("scenario-preview-back-btn");
  const confirmBtn = document.getElementById("scenario-preview-confirm-btn");

  if (closeBtn) {
    closeBtn.addEventListener("click", closeScenarioPreviewModal);
  }

  if (backBtn) {
    backBtn.addEventListener("click", closeScenarioPreviewModal);
  }

  if (confirmBtn) {
    confirmBtn.addEventListener("click", () => {
      saveScenarioChanges();
    });
  }

  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      closeScenarioPreviewModal();
    }
  });

  scenarioPreviewModalInitialized = true;
}

function closeScenarioPreviewModal() {
  const modal = document.getElementById("scenario-preview-modal");
  if (modal) {
    modal.style.display = "none";
  }
}

function showScenarioPreview() {
  if (!currentScenario) return;

  // Validate tags only when targetType is "tags"
  if (currentScenario.targetType === "tags") {
    if (!selectedScenarioTags || selectedScenarioTags.size === 0) {
      alert("配信先タグを1つ以上選択してください");
      return;
    }
  }

  const modal = document.getElementById("scenario-preview-modal");
  if (!modal) return;

  currentScenario.targetTagIds = Array.from(selectedScenarioTags);

  const scenarioNameElement = document.getElementById("scenario-preview-name");
  if (scenarioNameElement) {
    scenarioNameElement.textContent = currentScenario.name || "(管理名なし)";
  }

  // Display target (all or tags)
  const tagsElement = document.getElementById("scenario-preview-tags");
  if (tagsElement) {
    if (currentScenario.targetType === "all") {
      tagsElement.textContent = "全員";
    } else {
      const allTags = getAllTags();
      const tagNames = currentScenario.targetTagIds
        .map((id) => allTags.find((tag) => tag.id === id))
        .filter(Boolean)
        .map((tag) => tag.name);
      tagsElement.textContent =
        tagNames.length > 0 ? truncateByFullWidth(tagNames.join(", "), 20) : "未選択";
    }
  }

  const stepsContainer = document.getElementById("scenario-preview-steps");
  if (stepsContainer) {
    if (!currentScenario.steps || currentScenario.steps.length === 0) {
      stepsContainer.innerHTML =
        '<div class="empty-state-small"><p>ステップが設定されていません</p></div>';
    } else {
      const stepsHtml = currentScenario.steps
        .map((step, index) => {
          const timingText = formatScenarioStepTiming(step);
          const messages = Array.isArray(step.messages) ? step.messages : [];
          const messageCount = messages.length;

          let messagePreviewHtml =
            '<div class="empty-state-small"><p>メッセージが設定されていません</p></div>';
          if (messageCount > 0) {
            const messagesHtml = messages
              .map(
                (msg) => `
              <div class="message message-sent">
                <div class="message-content">
                  <div class="message-text">${escapeHtml(
                    msg.content || ""
                  )}</div>
                </div>
              </div>
            `
              )
              .join("");

            messagePreviewHtml = `
            <div class="message-preview-container">
              <div class="message-preview-chat">
                ${messagesHtml}
              </div>
            </div>
          `;
          }

          return `
          <div class="preview-step-item">
            <div class="preview-step-header">
              <span class="preview-step-number">ステップ ${index + 1}</span>
              <span class="preview-step-timing">${timingText}</span>
            </div>
            <div class="preview-step-body">
              ${messagePreviewHtml}
            </div>
          </div>
        `;
        })
        .join("");

      stepsContainer.innerHTML = stepsHtml;
    }
  }

  initializeScenarioPreviewModal();
  modal.style.display = "flex";
}

function saveScenarioChanges() {
  if (!currentScenario) return;

  // Validate tags only when targetType is "tags"
  if (currentScenario.targetType === "tags") {
    if (!selectedScenarioTags || selectedScenarioTags.size === 0) {
      alert("配信先タグを1つ以上選択してください");
      return;
    }
  }

  const scenarioToSave = normalizeScenarioData({
    ...currentScenario,
    targetType: currentScenario.targetType || "all",
    targetTagIds:
      currentScenario.targetType === "tags"
        ? Array.from(selectedScenarioTags)
        : [],
  });

  updateScenarioInLocalStorage(scenarioToSave);

  currentScenario = cloneScenarioData(scenarioToSave);
  originalScenario = cloneScenarioData(scenarioToSave);
  selectedScenarioTags = new Set(currentScenario.targetTagIds);
  scenarioHasUnsavedChanges = false;
  isNewScenario = false;

  closeScenarioPreviewModal();

  alert("ステップ配信を保存しました");

  navigateToPage("step");
  resetScenarioEditingState();
}

function enableScenarioNameEdit() {
  if (!currentScenario) return;

  const nameElement = document.getElementById("detail-scenario-name");
  const editBtn = document.getElementById("edit-scenario-name-btn");

  if (!nameElement || !editBtn) return;

  const currentName = currentScenario.name;

  // Create input field
  const input = document.createElement("input");
  input.type = "text";
  input.value = currentName;
  input.className = "form-input";
  input.style.flex = "1";

  // Create save button
  const saveBtn = document.createElement("button");
  saveBtn.className = "btn-icon";
  saveBtn.innerHTML = '<i class="fa-solid fa-check"></i>';
  saveBtn.title = "保存";

  // Create cancel button
  const cancelBtn = document.createElement("button");
  cancelBtn.className = "btn-icon";
  cancelBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>';
  cancelBtn.title = "キャンセル";

  // Replace name element with input
  const parent = nameElement.parentElement;
  parent.innerHTML = "";
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
      alert("管理名を入力してください");
      return;
    }

    // Update scenario
    currentScenario.name = newName;

    // Update UI
    parent.innerHTML = `
      <span class="info-value" id="detail-scenario-name">${escapeHtml(
        newName
      )}</span>
      <button class="btn-icon" id="edit-scenario-name-btn" title="管理名を編集">
        <i class="fa-solid fa-pen"></i>
      </button>
    `;

    // Keep header aligned with current mode (作成/編集)
    updateScenarioDetailTitle();

    // Re-initialize edit button
    initializeScenarioDetailPage();

    markScenarioDirty();
    console.log("Scenario name updated:", newName);
  };

  // Cancel function
  const cancel = () => {
    parent.innerHTML = `
      <span class="info-value" id="detail-scenario-name">${escapeHtml(
        currentName
      )}</span>
      <button class="btn-icon" id="edit-scenario-name-btn" title="管理名を編集">
        <i class="fa-solid fa-pen"></i>
      </button>
    `;

    // Re-initialize edit button
    initializeScenarioDetailPage();
  };

  // Event listeners
  saveBtn.addEventListener("click", save);
  cancelBtn.addEventListener("click", cancel);

  // Enter key to save
  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      save();
    } else if (e.key === "Escape") {
      cancel();
    }
  });
}

function renderStepsList(steps) {
  console.log("renderStepsList called with steps:", steps);
  const stepsList = document.getElementById("steps-list");

  if (!stepsList) {
    console.error("steps-list element not found!");
    return;
  }

  if (steps.length === 0) {
    console.log("No steps, showing empty state");
    stepsList.innerHTML = `
      <div class="empty-state-small">
        <p>配信タイミングがまだ追加されていません</p>
        <p>「次の配信タイミングを追加」ボタンから追加してください</p>
      </div>
    `;
    return;
  }

  console.log("Rendering", steps.length, "steps");
  stepsList.innerHTML = steps
    .map(
      (step, index) => `
    <div class="step-item">
      <div class="step-header">
        <span class="step-number">ステップ ${index + 1}</span>
        <div class="step-actions">
          <button class="btn btn-secondary btn-sm" onclick="deleteStep(${index})">削除</button>
        </div>
      </div>
      <div class="step-timing-info">
        <span>
          ${
            step.timing === "immediate"
              ? "ステップ開始直後に配信"
              : `ステップ開始から${step.days}日後の${step.time}に配信`
          }
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
        ${
          step.messages && step.messages.length > 0
            ? step.messages
                .map(
                  (msg, msgIndex) => `
            <div class="step-message-item">
              <div class="step-message-content">${escapeHtml(msg.content)}</div>
              <div class="step-message-item-actions">
                <button class="btn btn-sm btn-outline" onclick="previewStepMessage(${index}, ${msgIndex})" title="プレビュー">
                  <i class="fa-solid fa-eye"></i>
                </button>
                <button class="btn btn-sm btn-outline" onclick="editMessage(${index}, ${msgIndex})" title="編集">
                  <i class="fa-solid fa-edit"></i>
                </button>
                <button class="btn btn-sm btn-secondary" onclick="deleteMessage(${index}, ${msgIndex})" title="削除">
                  <i class="fa-solid fa-trash"></i>
                </button>
              </div>
            </div>
          `
                )
                .join("")
            : '<div class="empty-state-small"><p>メッセージがまだ追加されていません</p></div>'
        }
      </div>
    </div>
  `
    )
    .join("");
}

function deleteStep(index) {
  console.log("deleteStep called with index:", index);
  console.log("currentScenario:", currentScenario);

  if (!currentScenario) {
    console.error("currentScenario is null!");
    return;
  }

  console.log("Steps before delete:", currentScenario.steps);

  if (confirm(`ステップ ${index + 1} を削除しますか？`)) {
    currentScenario.steps.splice(index, 1);
    console.log("Steps after delete:", currentScenario.steps);

    markScenarioDirty();

    const stepsCountElement = document.getElementById("detail-scenario-steps");
    if (stepsCountElement) {
      stepsCountElement.textContent = currentScenario.steps.length;
    }

    renderStepsList(currentScenario.steps);
    console.log("Step deleted successfully");
  }
}

let currentEditStepIndex = null;

function editStepTiming(index) {
  if (!currentScenario || !currentScenario.steps[index]) return;

  currentEditStepIndex = index;
  const step = currentScenario.steps[index];

  const modal = document.getElementById("step-timing-modal");

  // Update modal title
  document.getElementById("step-timing-title").textContent = `ステップ ${
    index + 1
  } の配信タイミングを変更`;

  // Set current timing values
  const timingRadio = document.querySelector(
    `input[name="stepDeliveryTiming"][value="${step.timing}"]`
  );
  if (timingRadio) {
    timingRadio.checked = true;
  }

  // Initialize time select before setting value
  initializeStepTimeSelect("step-time", "step-days", "09:00");

  if (step.timing === "scheduled") {
    document.getElementById("step-days").value = step.days || 0;
    document.getElementById("step-time").value = step.time || "09:00";
    document.getElementById("step-scheduled-group").style.display = "block";
    updateTimingPreview();
  } else {
    document.getElementById("step-scheduled-group").style.display = "none";
  }

  // Change button text to "更新"
  const addBtn = document.getElementById("step-timing-add-btn");
  addBtn.textContent = "更新";

  // Show modal
  modal.style.display = "flex";
}

// ===== Message Management =====
let currentStepIndex = null;
let currentMessageIndex = null;
let messageModalInitialized = false;

function initializeMessageModal() {
  if (messageModalInitialized) return;
  messageModalInitialized = true;

  const modal = document.getElementById("message-modal");
  const closeBtn = document.getElementById("message-close-btn");
  const cancelBtn = document.getElementById("message-cancel-btn");
  const addBtn = document.getElementById("message-add-btn");

  // Close modal events
  closeBtn.addEventListener("click", closeMessageModal);
  cancelBtn.addEventListener("click", closeMessageModal);

  // Close modal when clicking outside
  modal.addEventListener("click", function (e) {
    if (e.target === modal) {
      closeMessageModal();
    }
  });

  // Add message handler
  addBtn.addEventListener("click", handleMessageAdd);
}

function addMessageToStep(stepIndex) {
  currentStepIndex = stepIndex;
  currentMessageIndex = null;

  // Initialize modal if not done yet
  initializeMessageModal();

  // Update modal title
  document.getElementById("message-modal-title").textContent = `ステップ ${
    stepIndex + 1
  } にメッセージを追加`;

  // Reset form
  document.getElementById("message-content").value = "";

  // Update button text
  document.getElementById("message-add-btn").textContent = "追加";

  // Show modal
  document.getElementById("message-modal").style.display = "flex";

  // Focus on textarea
  setTimeout(() => {
    document.getElementById("message-content").focus();
  }, 100);
}

function addTemplateToStep(stepIndex) {
  alert("テンプレート機能は実装予定です");
}

function closeMessageModal() {
  document.getElementById("message-modal").style.display = "none";
  currentStepIndex = null;
  currentMessageIndex = null;
}

function handleMessageAdd() {
  if (!currentScenario || currentStepIndex === null) return;

  const content = document.getElementById("message-content").value.trim();

  // Validation
  if (!content) {
    alert("メッセージを入力してください");
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
      type: "text",
      content: content,
    });
  }

  console.log("Message added/updated:", {
    stepIndex: currentStepIndex,
    content,
  });

  markScenarioDirty();

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
  document.getElementById(
    "message-modal-title"
  ).textContent = `メッセージを編集`;

  // Fill form with existing data
  document.getElementById("message-content").value = message.content;

  // Update button text
  document.getElementById("message-add-btn").textContent = "更新";

  // Show modal
  document.getElementById("message-modal").style.display = "flex";

  // Focus on textarea
  setTimeout(() => {
    document.getElementById("message-content").focus();
  }, 100);
}

function deleteMessage(stepIndex, messageIndex) {
  if (!currentScenario) return;

  if (confirm("このメッセージを削除しますか？")) {
    currentScenario.steps[stepIndex].messages.splice(messageIndex, 1);
    markScenarioDirty();
    renderStepsList(currentScenario.steps);
  }
}

// ===== Step Timing Modal =====
let stepTimingModalInitialized = false;

function initializeStepTimingModal() {
  if (stepTimingModalInitialized) return;
  stepTimingModalInitialized = true;

  const modal = document.getElementById("step-timing-modal");
  const closeBtn = document.getElementById("step-timing-close-btn");
  const cancelBtn = document.getElementById("step-timing-cancel-btn");
  const addBtn = document.getElementById("step-timing-add-btn");
  const deliveryTimingRadios = document.querySelectorAll(
    'input[name="stepDeliveryTiming"]'
  );

  // Close modal events
  closeBtn.addEventListener("click", closeStepTimingModal);
  cancelBtn.addEventListener("click", closeStepTimingModal);

  // Close modal when clicking outside
  modal.addEventListener("click", function (e) {
    if (e.target === modal) {
      closeStepTimingModal();
    }
  });

  // Delivery timing change handler
  deliveryTimingRadios.forEach((radio) => {
    radio.addEventListener("change", function () {
      handleStepDeliveryTimingChange(this.value);
    });
  });

  // Initialize time select
  initializeStepTimeSelect("step-time", "step-days", "09:00");

  // Add event listener for days change to update time select
  const stepDaysInput = document.getElementById("step-days");
  if (stepDaysInput) {
    stepDaysInput.addEventListener("input", function () {
      // Update time select when days change (to restrict past times for 0 days)
      initializeStepTimeSelect("step-time", "step-days", "09:00");
      updateTimingPreview();
    });
  }

  // Add step handler
  addBtn.addEventListener("click", handleStepAdd);
}

function openStepTimingModal() {
  console.log("openStepTimingModal called, currentScenario:", currentScenario);
  if (!currentScenario) {
    console.error("currentScenario is null!");
    return;
  }

  // Reset edit index
  currentEditStepIndex = null;

  const modal = document.getElementById("step-timing-modal");
  const stepNumber = currentScenario.steps.length + 1;

  console.log("Opening step timing modal, step number:", stepNumber);

  // Update modal title
  document.getElementById(
    "step-timing-title"
  ).textContent = `ステップ ${stepNumber} の配信タイミング`;

  // Reset form
  document.querySelector(
    'input[name="stepDeliveryTiming"][value="immediate"]'
  ).checked = true;
  document.getElementById("step-days").value = "0";

  // Initialize time select before setting value
  initializeStepTimeSelect("step-time", "step-days", "09:00");

  document.getElementById("step-scheduled-group").style.display = "none";

  // Reset button text
  document.getElementById("step-timing-add-btn").textContent = "追加";

  modal.style.display = "flex";
}

function closeStepTimingModal() {
  const modal = document.getElementById("step-timing-modal");
  modal.style.display = "none";
}

function handleStepDeliveryTimingChange(timing) {
  const scheduledGroup = document.getElementById("step-scheduled-group");

  if (timing === "scheduled") {
    scheduledGroup.style.display = "block";
  } else {
    scheduledGroup.style.display = "none";
  }
}

function handleStepAdd() {
  if (!currentScenario) return;

  const deliveryTiming = document.querySelector(
    'input[name="stepDeliveryTiming"]:checked'
  ).value;
  const scheduledDays = document.getElementById("step-days").value;
  const scheduledTime = document.getElementById("step-time").value;

  // Validation
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

  // Check if editing existing step or adding new one
  if (currentEditStepIndex !== null) {
    // Update existing step
    const step = currentScenario.steps[currentEditStepIndex];
    step.timing = deliveryTiming;
    step.days = deliveryTiming === "scheduled" ? parseInt(scheduledDays) : 0;
    step.time = deliveryTiming === "scheduled" ? scheduledTime : null;

    console.log("Updating step:", step);

    // Reset edit index
    currentEditStepIndex = null;
  } else {
    // Create new step object
    const newStep = {
      timing: deliveryTiming,
      days: deliveryTiming === "scheduled" ? parseInt(scheduledDays) : 0,
      time: deliveryTiming === "scheduled" ? scheduledTime : null,
      messages: [], // メッセージは別途追加する
    };

    // Add step to scenario
    currentScenario.steps.push(newStep);

    console.log("Adding step:", newStep);
  }

  markScenarioDirty();

  // Update UI
  const stepsCountElement = document.getElementById("detail-scenario-steps");
  if (stepsCountElement) {
    stepsCountElement.textContent = currentScenario.steps.length;
  }
  renderStepsList(currentScenario.steps);

  // Close modal
  closeStepTimingModal();
}

// ===== Broadcast Management Functions =====

// Mock broadcast data
// Generate mock broadcasts with real-time scheduled dates for testing
function generateMockBroadcasts() {
  const now = new Date();
  const today = now.toISOString().split("T")[0];

  // Helper to format time as HH:MM
  const formatTime = (date) => {
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    return `${hours}:${minutes}`;
  };

  // Helper to format date (YYYY-MM-DD)
  const formatDate = (daysFromNow) => {
    const date = new Date(now.getTime() + daysFromNow * 24 * 60 * 60 * 1000);
    return date.toISOString().split("T")[0];
  };

  // 配信予約中の配信日を約1ヶ月後に設定
  const scheduledDate1 = formatDate(28); // 28日後
  const scheduledDate2 = formatDate(35); // 35日後

  return [
    {
      id: 1,
      title: "新商品のお知らせ",
      target: "all",
      targetText: "全員",
      deliveryTiming: "immediate",
      message: "いつもご利用ありがとうございます。新商品が入荷しました！",
      createdAt: today,
      status: "配信完了",
    },
    {
      id: 2,
      title: "限定セール開始のお知らせ",
      target: "tags",
      targetText: "VIP顧客",
      selectedTags: [1],
      deliveryTiming: "scheduled",
      scheduledDate: scheduledDate1,
      time: "10:00",
      message:
        "本日より3日間限定！VIP会員様だけの特別セールを開催いたします。対象商品が最大50%OFF。この機会をお見逃しなく！",
      createdAt: today,
      status: "配信予約中",
    },
    {
      id: 3,
      title: "秋のキャンペーン",
      target: "all",
      targetText: "全員",
      deliveryTiming: "immediate",
      message: "秋のキャンペーンを開始しました！",
      createdAt: today,
      status: "配信完了",
    },
    {
      id: 4,
      title: "9月の総括",
      target: "all",
      targetText: "全員",
      deliveryTiming: "immediate",
      message: "9月の活動報告をお送りします。",
      createdAt: today,
      status: "配信完了",
    },
    {
      id: 6,
      title: "新商品入荷のご案内",
      target: "all",
      targetText: "全員",
      deliveryTiming: "scheduled",
      scheduledDate: scheduledDate2,
      time: "14:00",
      message:
        "お待たせいたしました！人気の新商品が本日入荷しました。数量限定となっておりますので、お早めにご来店ください。",
      createdAt: today,
      status: "配信予約中",
    },
  ];
}

// Mock scenario data
const MOCK_SCENARIOS = [
  {
    id: 1,
    name: "ウェルカムシーケンス",
    createdAt: "2025/10/15",
    steps: [
      {
        timing: "immediate",
        days: 0,
        time: null,
        messages: [],
      },
    ],
    targetType: "tags",
    targetTagIds: [1], // VIP顧客
  },
  {
    id: 2,
    name: "商品紹介シリーズ",
    createdAt: "2025/10/10",
    steps: [
      {
        timing: "scheduled",
        days: 1,
        time: "10:00",
        messages: [],
      },
    ],
    targetType: "tags",
    targetTagIds: [2], // 問い合わせ対応中
  },
  {
    id: 3,
    name: "フォローアップキャンペーン",
    createdAt: "2025/10/05",
    steps: [
      {
        timing: "scheduled",
        days: 3,
        time: "14:00",
        messages: [],
      },
      {
        timing: "scheduled",
        days: 7,
        time: "10:00",
        messages: [],
      },
    ],
    targetType: "tags",
    targetTagIds: [3], // 資料送付済み
  },
  {
    id: 4,
    name: "リピーター育成プログラム",
    createdAt: "2025/09/28",
    steps: [
      {
        timing: "immediate",
        days: 0,
        time: null,
        messages: [],
      },
      {
        timing: "scheduled",
        days: 2,
        time: "11:00",
        messages: [],
      },
      {
        timing: "scheduled",
        days: 5,
        time: "15:00",
        messages: [],
      },
    ],
    targetType: "tags",
    targetTagIds: [5], // キャンペーン参加
  },
  {
    id: 5,
    name: "新規顧客オンボーディング",
    createdAt: "2025/09/20",
    steps: [
      {
        timing: "immediate",
        days: 0,
        time: null,
        messages: [],
      },
      {
        timing: "scheduled",
        days: 1,
        time: "09:00",
        messages: [],
      },
    ],
    targetType: "tags",
    targetTagIds: [1, 2], // VIP顧客、問い合わせ対応中
  },
];

// Initialize mock broadcast data
function initializeBroadcastData() {
  // 常に最新のリアルタイムダミーデータを生成（テスト用）
  localStorage.setItem(
    "mockBroadcasts",
    JSON.stringify(generateMockBroadcasts())
  );
}

// Initialize mock scenario data
function initializeScenarioData() {
  if (!localStorage.getItem("scenarios")) {
    localStorage.setItem("scenarios", JSON.stringify(MOCK_SCENARIOS));
  }
}

function getMockBroadcasts() {
  return JSON.parse(localStorage.getItem("mockBroadcasts") || "[]");
}

function saveMockBroadcasts(broadcasts) {
  localStorage.setItem("mockBroadcasts", JSON.stringify(broadcasts));
}

// Current broadcast being edited
let currentBroadcastId = null;
let broadcastListInitialized = false;

// Initialize broadcast list page
function initializeBroadcastListPage() {
  if (broadcastListInitialized) return;
  broadcastListInitialized = true;

  const newBtn = document.getElementById("broadcast-new-btn");
  if (newBtn) {
    newBtn.addEventListener("click", createNewBroadcast);
  }

  initializeBroadcastStatusToggle();
  renderBroadcastList();
}

// Initialize broadcast status toggle buttons
function initializeBroadcastStatusToggle() {
  const scheduledBtn = document.getElementById("broadcast-status-scheduled");
  const completedBtn = document.getElementById("broadcast-status-completed");

  if (scheduledBtn) {
    scheduledBtn.addEventListener("click", () => {
      currentBroadcastStatusFilter = "配信予約中";
      scheduledBtn.classList.add("active");
      completedBtn.classList.remove("active");
      renderBroadcastList();
    });
  }

  if (completedBtn) {
    completedBtn.addEventListener("click", () => {
      currentBroadcastStatusFilter = "配信完了";
      completedBtn.classList.add("active");
      scheduledBtn.classList.remove("active");
      renderBroadcastList();
    });
  }
}

// Render broadcast list
function renderBroadcastList() {
  const tbody = document.getElementById("broadcasts-tbody");
  if (!tbody) return;

  const allBroadcasts = getMockBroadcasts();

  // Filter based on current status
  const broadcasts = allBroadcasts.filter(
    (b) => b.status === currentBroadcastStatusFilter
  );

  if (broadcasts.length === 0) {
    const emptyMessage =
      currentBroadcastStatusFilter === "配信予約中"
        ? "配信予約中の一斉配信がありません<br>「新規作成」ボタンから作成してください"
        : "配信完了の一斉配信がありません";
    tbody.innerHTML =
      '<tr><td colspan="6" style="text-align: center; padding: 30px; color: #999;">' +
      emptyMessage +
      "</td></tr>";
    return;
  }

  tbody.innerHTML = broadcasts
    .map((broadcast) => {
      let timingText = "";
      if (broadcast.deliveryTiming === "immediate") {
        timingText = "すぐに配信";
      } else if (broadcast.scheduledDate) {
        const date = new Date(broadcast.scheduledDate);
        const year = date.getFullYear();
        const month = date.getMonth() + 1;
        const day = date.getDate();
        timingText = `${year}/${month}/${day} ${broadcast.time}`;
      } else if (broadcast.days !== undefined) {
        // 旧データとの互換性
        timingText = broadcast.days + "日後 " + broadcast.time;
      } else {
        timingText = "日時未設定";
      }
      const statusClass =
        broadcast.status === "配信完了" ? "status-active" : "status-progress";
      return (
        '<tr data-broadcast-id="' +
        broadcast.id +
        '"><td>' +
        (broadcast.title || "(タイトルなし)") +
        "</td><td>" +
        broadcast.targetText +
        "</td><td>" +
        timingText +
        '</td><td><span class="status-badge ' +
        statusClass +
        '">' +
        broadcast.status +
        "</span></td><td>" +
        broadcast.createdAt +
        '</td><td><button class="btn btn-outline btn-sm broadcast-edit-btn" onclick="editBroadcast(' +
        broadcast.id +
        ')">' +
        (broadcast.status === "配信完了" ? "コピー" : "編集") +
        '</button> <button class="btn btn-secondary btn-sm" onclick="deleteBroadcast(' +
        broadcast.id +
        ')">削除</button></td></tr>'
      );
    })
    .join("");
}

// Create new broadcast
function createNewBroadcast() {
  currentBroadcastId = null;
  navigateToPage("broadcast-detail");
  document.getElementById("broadcast-detail-title").textContent =
    "一斉配信を作成";
  document.getElementById("broadcast-title").value = "";
  document.getElementById("broadcast-message").value = "";
  document.querySelector('input[name="target"][value="all"]').checked = true;
  document.querySelector(
    'input[name="deliveryTiming"][value="immediate"]'
  ).checked = true;
  document.getElementById("tag-selection-area").style.display = "none";
  document.getElementById("scheduled-datetime-group").style.display = "none";

  // Set default date to today
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");
  document.getElementById("broadcast-date").value = `${year}-${month}-${day}`;

  // Update date minimum and time options
  updateBroadcastDateMin();
  initializeBroadcastTimeSelect();

  // Add event listener for date change to update time options
  const dateInput = document.getElementById("broadcast-date");
  if (dateInput) {
    // Remove existing listeners by cloning
    const newDateInput = dateInput.cloneNode(true);
    dateInput.parentNode.replaceChild(newDateInput, dateInput);

    newDateInput.addEventListener("change", () => {
      initializeBroadcastTimeSelect();
    });
  }

  selectedBroadcastTags.clear();
}

// Initialize step message preview modal
function initializeStepMessagePreviewModal() {
  const modal = document.getElementById("step-message-preview-modal");
  const closeBtn = document.getElementById("step-message-preview-close");
  const backBtn = document.getElementById("step-message-preview-back-btn");

  if (closeBtn) {
    closeBtn.onclick = function () {
      modal.style.display = "none";
    };
  }

  if (backBtn) {
    backBtn.onclick = function () {
      modal.style.display = "none";
    };
  }

  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
}

// Preview step message
function previewStepMessage(stepIndex, messageIndex) {
  if (
    !currentScenario ||
    !currentScenario.steps ||
    !currentScenario.steps[stepIndex]
  ) {
    alert("メッセージが見つかりません");
    return;
  }

  const step = currentScenario.steps[stepIndex];
  const message = step.messages[messageIndex];

  if (!message) {
    alert("メッセージが見つかりません");
    return;
  }

  const modal = document.getElementById("step-message-preview-modal");
  const chatContainer = document.querySelector(
    "#step-message-preview-container .message-preview-chat"
  );

  const messageHtml = `
    <div class="message message-sent">
      <div class="message-content">
        <div class="message-text">${escapeHtml(message.content)}</div>
      </div>
    </div>
  `;

  chatContainer.innerHTML = messageHtml;
  modal.style.display = "flex";
}

// Check if broadcast can be edited or deleted based on scheduled time
function canEditOrDeleteBroadcast(broadcast, action) {
  // deliveryTiming が scheduled でない場合は制限なし
  if (broadcast.deliveryTiming !== "scheduled" || !broadcast.scheduledDate) {
    return { allowed: true };
  }

  // 配信日時を構築
  const scheduledDateTime = new Date(
    broadcast.scheduledDate + " " + broadcast.time
  );
  const now = new Date();
  const fiveMinsBefore = new Date(scheduledDateTime.getTime() - 5 * 60 * 1000);

  // 現在時刻が配信5分前～配信時刻までの間かチェック
  if (now >= fiveMinsBefore && now < scheduledDateTime) {
    const message =
      action === "edit"
        ? "配信5分前のため編集できません"
        : "配信5分前のため削除できません";
    return { allowed: false, message };
  }

  return { allowed: true };
}

// Edit broadcast
function editBroadcast(id) {
  const broadcasts = getMockBroadcasts();
  const broadcast = broadcasts.find((b) => b.id === id);
  if (!broadcast) return;

  // 配信予約中の場合、配信日時の前後5分間はブロック
  if (broadcast.status === "配信予約中") {
    const check = canEditOrDeleteBroadcast(broadcast, "edit");
    if (!check.allowed) {
      alert(check.message);
      return;
    }
  }

  // 配信完了の場合はコピーモード（新規作成として扱う）
  const isCopyMode = broadcast.status === "配信完了";
  currentBroadcastId = isCopyMode ? null : id;

  navigateToPage("broadcast-detail");
  document.getElementById("broadcast-detail-title").textContent = isCopyMode
    ? "メッセージ登録"
    : "一斉配信を編集";
  document.getElementById("broadcast-title").value = broadcast.title || "";
  document.getElementById("broadcast-message").value = broadcast.message || "";
  document.querySelector(
    'input[name="target"][value="' + broadcast.target + '"]'
  ).checked = true;
  if (broadcast.target === "tags") {
    document.getElementById("tag-selection-area").style.display = "block";
    if (broadcast.selectedTags) {
      selectedBroadcastTags = new Set(broadcast.selectedTags);
      initializeBroadcastTagSelection();
    }
  }
  document.querySelector(
    'input[name="deliveryTiming"][value="' + broadcast.deliveryTiming + '"]'
  ).checked = true;
  if (broadcast.deliveryTiming === "scheduled") {
    document.getElementById("scheduled-datetime-group").style.display = "block";
    document.getElementById("broadcast-date").value =
      broadcast.scheduledDate || "";
    document.getElementById("broadcast-time").value = broadcast.time || "09:00";
  }

  // Update date minimum and time options
  updateBroadcastDateMin();
  initializeBroadcastTimeSelect();

  // Add event listener for date change to update time options
  const dateInput = document.getElementById("broadcast-date");
  if (dateInput) {
    // Remove existing listeners by cloning
    const newDateInput = dateInput.cloneNode(true);
    dateInput.parentNode.replaceChild(newDateInput, dateInput);

    newDateInput.addEventListener("change", () => {
      initializeBroadcastTimeSelect();
    });
  }
}

// Delete broadcast
function deleteBroadcast(id) {
  const broadcasts = getMockBroadcasts();
  const broadcast = broadcasts.find((b) => b.id === id);

  // 配信予約中の場合、配信日時の前後5分間はブロック
  if (broadcast && broadcast.status === "配信予約中") {
    const check = canEditOrDeleteBroadcast(broadcast, "delete");
    if (!check.allowed) {
      alert(check.message);
      return;
    }
  }

  if (!confirm("この一斉配信を削除しますか?")) return;
  const updatedBroadcasts = broadcasts.filter((b) => b.id !== id);
  saveMockBroadcasts(updatedBroadcasts);
  renderBroadcastList();
}

// Duplicate broadcast
function duplicateBroadcast(id) {
  const broadcasts = getMockBroadcasts();
  const broadcast = broadcasts.find((b) => b.id === id);
  if (!broadcast) return;

  // Create a copy of the broadcast
  const duplicatedBroadcast = {
    ...broadcast,
    id: Date.now(),
    title: (broadcast.title || "") + "（コピー）",
    createdAt: new Date().toISOString().split("T")[0],
    status: "配信予約中",
  };

  // Add duplicated broadcast to the list
  broadcasts.push(duplicatedBroadcast);
  saveMockBroadcasts(broadcasts);
  renderBroadcastList();

  alert("一斉配信を複製しました");
}

// Initialize broadcast detail page
let broadcastDetailInitialized = false;

function initializeBroadcastDetailPage() {
  if (broadcastDetailInitialized) return;
  broadcastDetailInitialized = true;
  const backBtn = document.getElementById("broadcast-back-btn");
  if (backBtn) {
    backBtn.addEventListener("click", () => {
      navigateToPage("broadcast");
    });
  }
  const previewBtn = document.getElementById("broadcast-preview-btn");
  if (previewBtn) {
    previewBtn.addEventListener("click", showBroadcastPreview);
  }
  const saveBtn = document.getElementById("broadcast-save-btn");
  if (saveBtn) {
    saveBtn.addEventListener("click", saveBroadcast);
  }
  initializeBroadcastForm();
}

// Save broadcast
function saveBroadcast() {
  const title = document.getElementById("broadcast-title").value;
  const message = document.getElementById("broadcast-message").value;
  if (!message.trim()) {
    alert("メッセージ内容を入力してください");
    return;
  }
  const target = document.querySelector('input[name="target"]:checked').value;
  const deliveryTiming = document.querySelector(
    'input[name="deliveryTiming"]:checked'
  ).value;
  let targetText = target === "all" ? "全員" : "タグ絞り込み";
  if (target === "tags" && selectedBroadcastTags.size > 0) {
    const allTags = getAllTags();
    const selectedTagNames = Array.from(selectedBroadcastTags)
      .map((tagId) => allTags.find((t) => t.id === tagId)?.name)
      .filter(Boolean);
    targetText = truncateByFullWidth(selectedTagNames.join(", "), 20);
  }
  const broadcastData = {
    title: title || "(タイトルなし)",
    target,
    targetText,
    selectedTags: target === "tags" ? Array.from(selectedBroadcastTags) : [],
    deliveryTiming,
    scheduledDate:
      deliveryTiming === "scheduled"
        ? document.getElementById("broadcast-date").value
        : "",
    time:
      deliveryTiming === "scheduled"
        ? document.getElementById("broadcast-time").value
        : "09:00",
    message,
    createdAt: new Date().toISOString().split("T")[0],
    // 新規作成・コピーの場合は常に配信予約中、編集の場合は配信タイミングで判断
    status: currentBroadcastId
      ? deliveryTiming === "immediate"
        ? "配信完了"
        : "配信予約中"
      : "配信予約中",
  };
  let broadcasts = getMockBroadcasts();
  if (currentBroadcastId) {
    broadcasts = broadcasts.map((b) =>
      b.id === currentBroadcastId ? { ...b, ...broadcastData } : b
    );
  } else {
    const newId =
      broadcasts.length > 0 ? Math.max(...broadcasts.map((b) => b.id)) + 1 : 1;
    broadcasts.push({ id: newId, ...broadcastData });
  }
  saveMockBroadcasts(broadcasts);
  alert("一斉配信を保存しました");
  navigateToPage("broadcast");
  renderBroadcastList();
}

// ===== Broadcast Preview Functions =====

let broadcastPreviewInitialized = false;

function initializeBroadcastPreviewModal() {
  if (broadcastPreviewInitialized) return;
  broadcastPreviewInitialized = true;
  const modal = document.getElementById("broadcast-preview-modal");
  const closeBtn = document.getElementById("broadcast-preview-close-btn");
  const backBtn = document.getElementById("broadcast-preview-back-btn");
  const confirmBtn = document.getElementById("broadcast-preview-confirm-btn");
  if (closeBtn) {
    closeBtn.addEventListener("click", () => {
      modal.style.display = "none";
    });
  }
  if (backBtn) {
    backBtn.addEventListener("click", () => {
      modal.style.display = "none";
    });
  }
  if (confirmBtn) {
    confirmBtn.addEventListener("click", () => {
      modal.style.display = "none";
      saveBroadcast();
    });
  }
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });
}

// Show broadcast preview
function showBroadcastPreview() {
  const title = document.getElementById("broadcast-title").value;
  const message = document.getElementById("broadcast-message").value;
  const target = document.querySelector('input[name="target"]:checked').value;
  const deliveryTiming = document.querySelector(
    'input[name="deliveryTiming"]:checked'
  ).value;
  let targetText = target === "all" ? "全員" : "タグで絞り込み";
  if (target === "tags" && selectedBroadcastTags.size > 0) {
    const allTags = getAllTags();
    const selectedTagNames = Array.from(selectedBroadcastTags)
      .map((tagId) => allTags.find((t) => t.id === tagId)?.name)
      .filter(Boolean);
    targetText = "タグで絞り込み (" + truncateByFullWidth(selectedTagNames.join(", "), 20) + ")";
  }
  let timingText = "";
  if (deliveryTiming === "immediate") {
    timingText = "メッセージ登録後すぐに配信";
  } else {
    const dateValue = document.getElementById("broadcast-date").value;
    const timeValue = document.getElementById("broadcast-time").value;
    if (dateValue && timeValue) {
      const date = new Date(dateValue);
      const weekdays = ["日", "月", "火", "水", "木", "金", "土"];
      const year = date.getFullYear();
      const month = date.getMonth() + 1;
      const day = date.getDate();
      const weekday = weekdays[date.getDay()];
      timingText = `${year}年${month}月${day}日(${weekday}) ${timeValue} に配信`;
    } else {
      timingText = "配信日時を指定してください";
    }
  }
  document.getElementById("preview-title").textContent =
    title || "(タイトルなし)";
  document.getElementById("preview-target").textContent = targetText;
  document.getElementById("preview-timing").textContent = timingText;
  document.getElementById("preview-message-text").textContent =
    message || "メッセージが入力されていません";
  initializeBroadcastPreviewModal();
  document.getElementById("broadcast-preview-modal").style.display = "flex";
}

// Override navigateToPage to initialize broadcast pages
const originalNavigateToPageForBroadcast = navigateToPage;
navigateToPage = function (pageId) {
  originalNavigateToPageForBroadcast(pageId);
  if (pageId === "broadcast") {
    initializeBroadcastListPage();
  } else if (pageId === "broadcast-detail") {
    initializeBroadcastDetailPage();
  }
};

// ===== COLOR PALETTE HELPER FUNCTIONS =====

/**
 * Initialize color palette interaction
 * @param {string} paletteId - ID of the color palette container
 * @param {string} inputId - ID of the hidden input to store selected color
 */
function initializeColorPalette(paletteId, inputId) {
  const palette = document.getElementById(paletteId);
  const input = document.getElementById(inputId);

  if (!palette || !input) return;

  // Get color picker element (if exists)
  const pickerIdPrefix = paletteId.replace("-palette", "");
  const colorPicker = document.getElementById(pickerIdPrefix + "-picker");

  // Add click event to all color options
  const colorOptions = palette.querySelectorAll(".color-option");
  colorOptions.forEach((option) => {
    option.addEventListener("click", function () {
      const color = this.getAttribute("data-color");

      // Remove selected class from all options
      colorOptions.forEach((opt) => opt.classList.remove("selected"));

      // Add selected class to clicked option
      this.classList.add("selected");

      // Update hidden input value
      input.value = color;

      // Update color picker value (if not transparent)
      if (colorPicker && color !== "transparent") {
        colorPicker.value = color;
      }
    });
  });

  // Add event listener to color picker (if exists)
  if (colorPicker) {
    colorPicker.addEventListener("input", function () {
      const customColor = this.value;

      // Remove selected class from all palette options
      colorOptions.forEach((opt) => opt.classList.remove("selected"));

      // Update hidden input value
      input.value = customColor;
    });
  }
}

/**
 * Reset color palette to default value
 * @param {string} paletteId - ID of the color palette container
 * @param {string} defaultColor - Default color to select (default: 'transparent')
 */
function resetColorPalette(paletteId, defaultColor = "transparent") {
  const palette = document.getElementById(paletteId);
  if (!palette) return;

  const colorOptions = palette.querySelectorAll(".color-option");
  colorOptions.forEach((option) => {
    const color = option.getAttribute("data-color");
    if (color === defaultColor) {
      option.classList.add("selected");
    } else {
      option.classList.remove("selected");
    }
  });
}

/**
 * Set specific color value in palette
 * @param {string} paletteId - ID of the color palette container
 * @param {string} color - Color value to select
 */
function setColorPaletteValue(paletteId, color) {
  const palette = document.getElementById(paletteId);
  if (!palette) return;

  // Get color picker element (if exists)
  const pickerIdPrefix = paletteId.replace("-palette", "");
  const colorPicker = document.getElementById(pickerIdPrefix + "-picker");

  const colorOptions = palette.querySelectorAll(".color-option");
  let foundInPalette = false;

  colorOptions.forEach((option) => {
    const optionColor = option.getAttribute("data-color");
    if (optionColor === color) {
      option.classList.add("selected");
      foundInPalette = true;
    } else {
      option.classList.remove("selected");
    }
  });

  // Update color picker value
  if (colorPicker) {
    if (color !== "transparent") {
      colorPicker.value = color;
    }
  }
}

// Initialize on load - ensure this runs after DOM is loaded
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", () => {
    initializeBroadcastData();
    initializeScenarioData();
  });
} else {
  initializeBroadcastData();
  initializeScenarioData();
}
