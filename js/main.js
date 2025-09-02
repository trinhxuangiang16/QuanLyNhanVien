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
  let isValid = checkTaiKhoan(nv.tk, 4, 6, "tbTKNV");
  console.log(isValid, checkTaiKhoan(nv.tk, 4, 6, "tbTKNV"));

  if (isValid == false) return;

  //push sau khi validate thành công
  nvArr.push(nv);
  console.log(nvArr);
  let dataJson = JSON.stringify(nvArr);
  localStorage.setItem("DSNV", dataJson);

  document.getElementById("btnDong").addEventListener("click", () => {
    $("#myModal").modal("hide");
  });

  renderDSNV(nvArr);
};

xoaNhanVien = (id) => {
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
