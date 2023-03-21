// khai báo 1 lớp sử dụng class-constructor (ES6)

// từ khóa class: đánh dấu đây là 1 class tự tạo
// Rectangle là tên của lớp

class Rectangle1 {
    // khai báo các thuộc tính với tên của nó
    width
    height

    // khai báo hàm khởi tạo của lớp Rectangle với từ khóa constructor
    constructor(width, height) {
        this.width = width
        this.height = height
    }

    // các phương thức là các hành vi hay hoạt động có thể có của lớp
    getPerimeter() {
        return (this.width + this.height) * 2
    }

    getArea() {
        return this.width * this.height
    }
}

// khai báo đối tượng Rectangle được tạo ra bới lớp Rectangle ở trên
let rec3 = new Rectangle1(20, 10)
let rec4 = new Rectangle1(200, 80)

alert(rec3.getPerimeter())
alert(rec4.getPerimeter())
