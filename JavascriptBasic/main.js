// Bài 1. Viết function truyền vào mảng các chuỗi có độ dài bất kỳ. Kết quả trả về là 1 mảng các chuỗi có độ dài lớn nhất

let StringArr = ['aba', 'aa', 'ad', 'c', 'vcd'];
let max = StringArr[0].length
let ArrMax = StringArr[0]
function getStringHasMaxLength(StringArr) {
    let newArr = [];
    for (let i = 0; i < StringArr.length; i++) {
        if (StringArr[i].length >= max) {
            ArrMax = StringArr[i];
            newArr.push(ArrMax)
        }
    }
    return newArr;
}

console.log(getStringHasMaxLength(StringArr));

//Bai 2:

users = [
    {
        name: "Nguyễn Thu Hằng",
        age: 27,
        isStatus: false
    },
    {
        name: "Bùi Công Sơn",
        age: 30,
        isStatus: true
    },

    {
        name: "Phạm Văn Dũng",
        age: 20,
        isStatus: false
    }
]
// Viết function truyền vào 1 mảng các object user. Trả về mảng các user có age > 25 và isStatus = true
function UserAgeTo(users) {
    return users.filter(e => e.age > 25 && e.isStatus === true)
}
console.log(UserAgeTo(users));
// Viết function truyền vào 1 mảng các object user. Trả về mảng các user có age tăng dần

function SapXepAge(users) {
    return users.sort((a, b) => a.age - b.age)
}
console.log(SapXepAge(users));

//Bài 3. Viết function truyền vào 1 mảng các chuỗi. Trả về Object hiển thị xem mỗi phần tử trong mảng xuất hiện bao nhiêu lần

let ArrStr = ["one", "two", "three", "one", "one", "three"];

function getCountElement(Arr) {
    let count = 0;
    let obj = new Object;
    for (let i = 0; i < Arr.length; i++) {
        obj[Arr[i]] = count++;
    }
    return obj;
}
console.log(getCountElement(ArrStr));  