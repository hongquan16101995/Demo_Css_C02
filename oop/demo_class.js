// khai báo 1 lớp sử dụng Function (ES5)

// Rectangle là tên của lớp
// width, height là phần tham số để truyền g.trị cụ thể cho thuộc tính khi khởi tạo đối tượng
function Rectangle(width, height) {
    // this.width, this.heigth: đánh dấu rằng đây là thuộc tính của lớp
    this.width = width
    this.height = height

    // các phương thức là các hành vi hay hoạt động có thể có của lớp
    this.getPerimeter = function () {
        return (this.width + this.height) * 2
    }

    this.getArea = function () {
        return this.width * this.height
    }
}

// khai báo đối tượng Rectangle được tạo ra bới lớp Rectangle ở trên
let rec1 = new Rectangle(10, 5)
let rec2 = new Rectangle(100, 40)

alert(rec1.getPerimeter())
alert(rec2.getPerimeter())

