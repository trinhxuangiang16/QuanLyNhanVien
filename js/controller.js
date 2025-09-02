let layThongTinTuForm = () => {
  let tk = document.getElementById("tknv").value.trim();
  let ten = document.getElementById("name").value;
  let mail = document.getElementById("email").value;
  let matkhau = document.getElementById("password").value;
  let ngay = document.getElementById("datepicker").value;
  let luongcb = document.getElementById("luongCB").value * 1;
  let chucvu = document.getElementById("chucvu").value;
  let gioLam = document.getElementById("gioLam").value * 1;
  let loaiNv = "";
  let nv = new nhanVien(
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

  return nv;
};

xepLoai = function (gioLam) {
  let loai = "";
  if (gioLam >= 192) {
    loai = "Xuất sắc";
  } else if (gioLam >= 176) {
    loai = "Giỏi";
  } else if (gioLam >= 160) {
    loại = "Khá";
  } else {
    loai = "Trung bình";
  }
  console.log(loai);
  return loai;
};
let renderDSNV = (arr) => {
  let content = "";

  arr.forEach((item) => {
    content += `
        <tr>
        <td>${item.tk}</td>
        <td>${item.ten}</td>
        <td>${item.mail}</td>
        <td>${item.ngay}</td>
        <td>${item.chucvu}</td>
        <td>${item.tongLuong().toLocaleString()}</td>
        <td>${xepLoai(item.gioLam)}</td>
        <td><button onclick='xoaNhanVien("${
          item.tk
        }")' type="button" class="btn btn-danger">Xóa</button></td>
        </tr>
        `;
  });
  document.getElementById("tableDanhSach").innerHTML = content;
};
