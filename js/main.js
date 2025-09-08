let nvArr = [];

let dataJson = localStorage.getItem("DSNV");

nvArr = JSON.parse(dataJson) || [];

nvArr = nvArr.map((data) => {
  let { tk, ten, mail, matkhau, ngay, luongcb, chucvu, gioLam, loaiNv } = data;
  return new nhanVien(
    tk,
    ten,
    mail,
    matkhau,
    ngay,
    luongcb,
    chucvu,
    gioLam,
    loaiNv
  );
});

renderDSNV(nvArr);
let themNv = () => {
  let nv = layThongTinTuForm();

  //validate
  let isValid =
    checkTaiKhoan(nv.tk, 4, 6, "tbTKNV") &
    checkTenNV(nv.ten) &
    kiemTraEmail(nv.mail) &
    checkMatKhau(nv.matkhau, 6, 10) &
    checkNgayThangNam(nv.ngay) &
    checkLuongCB(nv.luongcb) &
    checkChucVu(nv.chucvu) &
    checkGioLam(nv.gioLam);

  if (isValid == false) return;

  //push sau khi validate thành công
  nvArr.push(nv);
  console.log(nvArr);

  let dataJson = JSON.stringify(nvArr);
  localStorage.setItem("DSNV", dataJson);

  renderDSNV(nvArr);
  $("#myModal").modal("toggle");
};

let xoaNhanVien = (id) => {
  let index = nvArr.findIndex((item) => item.tk === id);
  if (index !== -1) {
    console.log(nvArr[index]);
    nvArr.splice(index, 1);

    console.log("đã xóa", nvArr);

    renderDSNV(nvArr);

    let dataJson = JSON.stringify(nvArr);
    localStorage.setItem("DSNV", dataJson);
  } else {
    console.log("Không tìm thấy");
  }
};

let editNhanVien = (taikhoan) => {
  let index = nvArr.findIndex((nv) => nv.tk === taikhoan);

  if (index === -1) {
    console.log("không tìm thấy");
    return;
  }

  let nv = nvArr[index];
  document.getElementById("tknv").value = nv.tk;
  document.getElementById("name").value = nv.ten;
  document.getElementById("email").value = nv.mail;
  document.getElementById("password").value = nv.matkhau;
  document.getElementById("datepicker").value = nv.ngay;
  document.getElementById("luongCB").value = nv.luongcb;
  document.getElementById("chucvu").value = nv.chucvu;
  document.getElementById("gioLam").value = nv.gioLam;
  $("#myModal").modal("toggle");
};

let capNhatNV = () => {
  let nv = layThongTinTuForm();

  let index = nvArr.findIndex((item) => item.tk === nv.tk);

  if (index !== -1) {
    nvArr[index] = nv;
    renderDSNV(nvArr);

    let dataJson = JSON.stringify(nvArr);
    localStorage.setItem("DSNV", dataJson);
    $("#myModal").modal("toggle");
  }
};

let timTheoLoai = () => {
  let value = document.getElementById("searchName").value;
  let tuTimKiem = value
    .trim()
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/đ/g, "d")
    .replace(/Đ/g, "d");

  let newArr = [];
  if (tuTimKiem === "xuat sac") {
    console.log(tuTimKiem);
    newArr = nvArr.filter((item) => item.gioLam >= 192);
    renderDSNV(newArr);

    console.log(newArr);
  } else if (tuTimKiem === "gioi") {
    newArr = nvArr.filter((item) => item.gioLam >= 176 && item.gioLam < 192);
    renderDSNV(newArr);
  } else if (tuTimKiem === "kha") {
    newArr = nvArr.filter((item) => item.gioLam >= 160 && item.gioLam < 176);
    renderDSNV(newArr);
  } else if (tuTimKiem === "trung binh") {
    newArr = nvArr.filter((item) => item.gioLam >= 80 && item.gioLam < 160);
    renderDSNV(newArr);
  } else {
    renderDSNV([]);
    console.log("Không có kết quả");
  }
};
