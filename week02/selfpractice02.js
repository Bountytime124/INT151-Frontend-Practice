//TOPIC ARRAYS ADDING and DELETING ARRAY ELEMENT AND OOP INHERITENCE
//USE AI FOR DOING PRACTICE
//1.เพิ่ม "cherry" เข้าไปท้าย array เพิ่ม "mango" เข้าไปหน้า array ลบ "banana" ออก console.log array สุดท้าย
let fruits = ["apple", "banana"];
fruits.push("cherry")
fruits.unshift("mango")
fruits.splice(2,1)
console.log(fruits)
//2. เพิ่ม 25 หลัง 20 ลบ 40 เพิ่ม 5 หน้า array console.log array สุดท้าย
let numbers = [10, 20, 30, 40, 50];
numbers.splice(2, 0, 25)
console.log(numbers)
numbers.splice(4,1)
console.log(numbers)
numbers.unshift(5)
console.log(numbers)
//3. ลบ student ที่ชื่อ "Bob" เพิ่ม student ใหม่ {name: "David", age: 23} หลัง Charlie
// เพิ่ม student {name: "Eve", age: 19} หน้า Alice console.log array สุดท้าย
let students = [
  {name: "Alice", age: 20},
  {name: "Bob", age: 21},
  {name: "Charlie", age: 22}
];
students.splice(1,1)
students.unshift({name: "Eve", age:19 })
students.push({name: "David" ,age: 23})
console.log(students)
//สร้างคลาส Animal ที่มี property name และ method speak() (แค่ console.log "I am an animal").
//จากนั้นสร้างคลาส Dog ที่สืบทอด (extends) จาก Animal แล้ว override method speak() ให้พิมพ์ "Woof! My name is <name>"
class Animal {
    constructor(name){
        this.name = name
    }
    speak() {
        console.log("I am an animal")
    }
}
class Dog extends Animal {
    constructor(name) {
        super(name)

    }
    override_method_speak() {
        return "Woof! My name is " + this.name
    }
}
let x = new Dog("WEREWOLF")
console.log(x)
console.log(x.override_method_speak())
//สร้างคลาส Vehicle ที่มี property brand และ method drive() ที่พิมพ์ "Driving a <brand>".
//จากนั้นสร้างคลาส Car ที่สืบทอดจาก Vehicle และเพิ่ม property model.
//เขียน method drive() ของ Car ให้พิมพ์ "Driving a <brand> <model>".
//new Car("Toyota", "Corolla") แล้วเรียก drive().
class Vehicle {
    constructor(brand){
        this.brand = brand
    }
    drive() {
        return "Driving a " + this.brand 
    }
}
class Car extends Vehicle {
    constructor(brand,model){
        super(brand)
        this.model = model
    }
    drive() {
        return "Driving a" + " "  + this.brand + " " + this.model
    }
}
let y = new Car("Toyota", "Corolla")
console.log(y.drive())
//สร้างคลาส Person ที่มี property name และ method introduce().
//จากนั้นสร้างคลาส Student ที่สืบทอดจาก Person และเพิ่ม property studentId.
//แล้วสร้างคลาส GraduateStudent ที่สืบทอดจาก Student และเพิ่ม property thesisTitle.
//ให้ introduce() ของ GraduateStudent พิมพ์ "My name is <name>, my ID is <studentId>, and my thesis is <thesisTitle>".
//new GraduateStudent("Alice", 123, "AI in Education") และเรียก introduce().
class Person {
    constructor(names){
        this.names = names
    }
    introduce() {

    }
}
class Student extends Person {
    constructor (names,studentId){
        super(names)
        this.studentId = studentId
    }
}
class GraduateStudent extends Student {
    constructor (names,studentId,thesisTitle){
        super(names,studentId)
        this.thesisTitle = thesisTitle
    }
    introduce(GraduateStudent){
        return "My name is" + this.names + " " +"my ID is" + this.studentId + " " 
        + "and my thesis is" + this.thesisTitle
    }
}
let k = new GraduateStudent("Alice", 123, "AI in Education") 
console.log(k.introduce())