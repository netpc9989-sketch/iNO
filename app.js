const ADMIN_PASSWORD = "ino123"; // بعداً عوضش کن

function openAdmin() {
  if (localStorage.getItem("isAdmin") === "true") {
    document.getElementById("adminPanel").classList.remove("hidden");
  } else {
    document.getElementById("adminLogin").classList.remove("hidden");
  }
}

function loginAdmin() {
  const pass = document.getElementById("adminPassword").value;
  if (pass === ADMIN_PASSWORD) {
    localStorage.setItem("isAdmin", "true");
    document.getElementById("adminLogin").classList.add("hidden");
    document.getElementById("adminPanel").classList.remove("hidden");
  } else {
    alert("رمز اشتباه است");
  }
}

function logoutAdmin() {
  localStorage.removeItem("isAdmin");
  location.reload();
}

function saveAdminSettings() {
  const text = document.getElementById("homeTextInput").value;
  const file = document.getElementById("logoInput").files[0];

  if (text) {
    localStorage.setItem("homeText", text);
  }

  if (file) {
    const reader = new FileReader();
    reader.onload = () => {
      localStorage.setItem("appLogo", reader.result);
      applySettings();
    };
    reader.readAsDataURL(file);
  }

  alert("ذخیره شد ✅");
}

function applySettings() {
  const text = localStorage.getItem("homeText");
  const logo = localStorage.getItem("appLogo");

  if (text) {
    document.getElementById("homeText").innerText = text;
  }

  if (logo) {
    document.getElementById("appLogo").src = logo;
  }
}

document.addEventListener("DOMContentLoaded", applySettings);
