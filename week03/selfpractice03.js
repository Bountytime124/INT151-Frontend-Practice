//TOPIC OOP INCLUDE ARRAY,LOOP,INHERITANCE,ITERABLEn OTHER ELSE
//USE AI FOR PRACTICE
//สร้าง object literal ที่ชื่อว่า library
//มี property name (ชื่อห้องสมุด)
//มี property books เป็น array ของ string (รายชื่อหนังสือ)
//มี method showBooks() ที่ใช้ loop แสดงชื่อหนังสือทั้งหมด
const library = {
  name: "Bountycity Library",
  books: ["Harry Potter", "Naruto", "One Piece", "Lord of the Rings"],

  showBooks: function() {
    for (let i = 0; i < this.books.length; i++) {
      console.log(`${i + 1}. ${this.books[i]}`);
    }
  }
};
library.showBooks();
//AI CODING
//CS STUDENT
//Swap to Uppercase
//
//hello world 
//Output: hElLo wOrLdWrite a Javascript program that takes two inputs:
//An integer n
//A string s
//The program should go through the string and for every n-th character, swap its case:
//Lowercase -> convert to Uppercase
//Input: 2

function swapUppercase(n, string) {
    let str = "";
    for (let i = 0; i < string.length; i++) {
        if ((i + 1) % n == 0) {
            str += string.charAt(i).toUpperCase();
        } else {
            str += string.charAt(i);
        }
    }
    return str;
}
console.log(swapUppercase(3, "hello world"));
// Write a program to add the next 20 numbers from the given seed numbers according to the following conditions;
//1. If the seed number is odd, add odd numbers includig the seed as well.
//2. If the seed number is even, add even numbers including the seeds as well.
// The input is the seed number. The output is the result of the adding.
// For example if 55 is a seed number. Then the result is
// 55 + 57 + 59 + 61 +63 +65 +67 +69 +71 +73 +75
sum = 0
function seednumber (x) {
    for (let i = x; i <= x + 20 ; i+=2){
        if(x % 2 === 0){
            sum += i
        }
        else if(x % 2 !== 0){
            sum += i 
        }
    }
    return sum
}
console.log(seednumber(46))

//writing code to compute the factorial of a given non-negative integer (n!), 
// which is the product of all positive integers less than or equal to n
// The factorial of a non-negative integer n, denoted as n!, is the product of all positive integers from 1 to n.
// For example, 5! = 5 × 4 × 3 × 2 × 1 = 120.
// By convention, 0! = 1.
fac = 1
function factorial(n){
    if ( n === 0 || n === 1 ){
        return 1
    }
    for (let i = 1 ; i <= n ; i++ ){
         fac *= i
    }
    return fac
}
console.log(factorial(10))
//Count Digits and Sum
//Write a program that get input an integer and output:
//The total number of digits
//The sum of the digits.
// Input: 12345
// Output: count: 5, sum: 15

function Countdigitsum(str) {
    let count = 0
    let sums = 0
    for(let i = 0; i < str.length; i++){
        let number = parseInt(str[i])
        sums += number
        count++
        
    }
    return ("count:" +count + " " + "sum:"+sums)
}
console.log(Countdigitsum('12345'))