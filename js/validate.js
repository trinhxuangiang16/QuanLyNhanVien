let checkTaiKhoan = (value, min, max, idErr) => {
  if (value.length >= min && value.length <= max) {
    console.log(value.length);
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
