button = document.getElementById("mybutton");

// button.addEventListener("click", login());

function login() {
  // Lấy giá trị người dùng nhập vào bên trong hàm
  inputUser = document.getElementById("inputUser").value;
  inputPass = document.getElementById("inputPass").value;

  // Kiểm tra thông tin đăng nhập
  if (inputUser === "admin" && inputPass === "1234") {
    alert("Đăng nhập thành công!");
    window.location.href = "main.html";
  } else {
    alert("Sai tên người dùng hoặc mật khẩu! Vui lòng nhập lại.");
  }
}

button.addEventListener("click", function (event) {
  event.preventDefault();
  if (login()) {
    location.href = "main.html";
  }
});
