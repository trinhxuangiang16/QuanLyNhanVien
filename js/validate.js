let checkTaiKhoan = (value, min, max, idErr) => {
  if (value.length >= min && value.length <= max) {
    console.log("yes");
    document.getElementById(idErr).innerText = "";
    return true;
  } else {
    document.getElementById(idErr).style.display = "block";
    document.getElementById(
      idErr
    ).innerText = `* Độ dài tài khoản từ ${min} - ${max} ký tự`;
    return false;
  }
};

let checkMatKhau = (mk, min, max) => {
  const matkhauRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).+$/;
  let isValid = matkhauRegex.test(mk);

  if (isValid == true && mk.length >= min && mk.length <= max) {
    document.getElementById("tbMatKhau").innerText = "";
    console.log("yes");
    return true;
  } else {
    document.getElementById("tbMatKhau").style.display = "block";
    document.getElementById("tbMatKhau").innerText = "* Mật khẩu sai định dạng";
    return false;
  }
};
let checkTenNV = (ten) => {
  const textRegex = /^[A-Za-z]+$/;

  let isValid = textRegex.test(ten);

  if (isValid == true && ten.length !== 0) {
    document.getElementById("tbTen").innerText = "";
    console.log("yes");
    return true;
  } else {
    document.getElementById("tbTen").style.display = "block";

    document.getElementById("tbTen").innerText =
      "* Nhập tên tài khoản không bao gồm số và không để trống";
    return false;
  }
};

let kiemTraEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  let isValid = emailRegex.test(email);

  if (isValid == true) {
    document.getElementById("tbEmail").innerText = "";
    console.log("yes");
    return true;
  } else {
    document.getElementById("tbEmail").style.display = "block";
    document.getElementById("tbEmail").innerText = `* Nhập email hợp lệ!`;
    return false;
  }
};

let checkNgayThangNam = (ngayThang) => {
  const dayRegex = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/;

  let isValid = dayRegex.test(ngayThang);

  if (isValid == true && ngayThang.length !== "") {
    console.log("yes");
    document.getElementById("tbNgay").innerText = "";
    return true;
  } else {
    document.getElementById("tbNgay").style.display = "block";
    document.getElementById("tbNgay").innerText = `* Nhập theo mẫu dd/mm/yyyy`;
    return false;
  }
};

let checkLuongCB = (luongCB) => {
  if (luongCB >= 1000000 && luongCB <= 20000000 && luongCB.length !== 0) {
    document.getElementById("tbLuongCB").innerText = "";
    console.log("yes");
    return true;
  } else {
    document.getElementById("tbLuongCB").style.display = "block";
    document.getElementById(
      "tbLuongCB"
    ).innerText = `* Nhập lương cơ bản từ 1.000.000 - 20.000.000`;
    return false;
  }
};

let checkChucVu = (chucVu) => {
  if (chucVu === "Sếp" || chucVu === "Trưởng phòng" || chucVu === "Nhân viên") {
    document.getElementById("tbChucVu").innerText = "";
    console.log("yes");
    return true;
  } else {
    document.getElementById("tbChucVu").style.display = "block";
    document.getElementById("tbChucVu").innerText = `* Chọn chức vụ phù hợp`;
    return false;
  }
};

let checkGioLam = (gioLam) => {
  if (gioLam >= 80 && gioLam <= 200 && gioLam.length !== 0) {
    document.getElementById("tbGiolam").innerText = "";
    console.log("yes");
    return true;
  } else {
    document.getElementById("tbGiolam").style.display = "block";
    document.getElementById(
      "tbGiolam"
    ).innerText = `* Nhập giờ làm từ 80 - 200 giờ`;
    return false;
  }
};
