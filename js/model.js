class nhanVien {
  constructor(tk, ten, mail, matkhau, ngay, luongcb, chucvu, gioLam, loaiNv) {
    this.tk = tk;
    this.ten = ten;
    this.mail = mail;
    this.matkhau = matkhau;
    this.ngay = ngay;
    this.luongcb = luongcb;
    this.chucvu = chucvu;
    this.gioLam = gioLam;
    this.loaiNv = loaiNv;
  }
  tongLuong = function () {
    if (this.chucvu === "Sếp") {
      console.log(this.luongcb * 3);
      return this.luongcb * 3;
    } else if (this.chucvu === "Trưởng phòng") {
      console.log(this.luongcb * 2);
      return this.luongcb * 2;
    } else {
      console.log(this.luongcb * 1);
      return this.luongcb * 1;
    }
  };
}
