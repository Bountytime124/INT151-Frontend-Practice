//TOPIC ARRAY DESTRUCTURING
//USE AI FOR DOING PRACTICE
 //1.เขียนโค้ด array destructuring เพื่อดึงค่า "red" ไปเก็บในตัวแปร firstColor และ "blue" ไปเก็บในตัวแปร thirdColor
const colors = ["red", "green", "blue"];
const [firstColor,secondColor,thirdColor] = ["red", "green", "blue"]
//2.ใช้ destructuring เพื่อเก็บ ค่าแรกไว้ใน first ค่าแรก + ค่าที่เหลือ (rest) ไว้ใน restNumbers
const numbers = [10, 20, 30, 40, 50];
const [first,...restNumbers] = [10,20,30,40,50]
console.log(restNumbers)
//3.ใช้ array destructuring เพื่อเก็บคะแนน math, english, science จากค่าที่ฟังก์ชัน return มา
function getScores() {
  return [70, 80, 90];
}
const [math, english, science] = getScores()
console.log(math)
//4.ใช้ destructuring เก็บ "apple" → firsts ข้าม "banana" เก็บ "cherry" → third เก็บ "date" → fourth console.log ทั้ง 4 ตัว
const fruits = ["apple", "banana", "cherry", "date"];
const [firsts,,third,fourth] = ["apple", "banana", "cherry", "date"];
console.log(firsts,third,fourth)