//Part 1
var testOne = "What kind of variable am I?"
// This is a container carrying a string type
var testTwo = 256
// This is a number
var testThree = false
//boolean
var testFour = 'true'
//string
var testFive = '128'
//string
var testSix = ''
//undefined

//Part 2
var testOne = "hello" + "there"
// string => hellothere
var testTwo = "100" + 28
// string => 10028
var testThree = true + 3
// number => 4
var testFour = 'false' + 5
// string => false5
var testFive = '128' - 3
// numver => 125
var testSix = '' * 9
// number => 0
var testSeven = 'zero' - 1
// number => NaN
var testEight = 'five'.length
// number => 4
var testNine = 'five'[0] + 'ever'
// string => fever
var testTen = 'a' > 'b'
// boolean => false
var testEleven = 'number'.length < 7
// boolean => true
var testTwelve = '12' == 12
// boolean true
var testThirteen = 'twelve' == 12
//boolean false
var testFourteen = '14' === 14
//boolean false
var testFifteen = 'Hi there'[0] + 'open sesame'[2] + 'alohamora'[1] + 'eulalia'[4] + 'harkonnen'[4] + 'BATMAN!'[6]
//string => Hello!

//Part 3
var string1 = "Hello, "
var string2 = "my name is "
var string3 = "Kingsley Pappagiorgio."
var combinedStrings = string1 + string2 + string 3
console.log(combinedStrings)
//Hello, my name is Kingsley Pappagiorgio

//Part 4
var num1 = 8
var num2 = 52
var num3 = 60
var combinedNumbers = num1 + num2 + num3
console.log(combinednumbers)
//120

//Part 5
var mixedNum1 = 10
var mixedString1 = "ten"
var mixedNum2 = "10"
var mixedConcatenation = mixedNum1 + mixedNum2 + mixedString1
console.log(mixedConcatenation)
//1010ten

//Part 6
var num4 = 5;
var num5 = 0;
if (num4 > 1) {
  console.log("Num4 is greater than 1")
} else {
  console.log("Num4 is NOT greater than 1")
}
//Num4 is greater than 1

//Part 7
var num4 = 5
var num5 = 0

if(num4 < num5 || num4 === num5) {
  console.log('If statement ran!')
} else if (num5 === "0" || true) {
  console.log("Else if statement ran")
} else {
  console.log("Else statement ran")
}
//else if statement ran 
//else statement ran

//Part 8
var string1 = "this is a string"
for (var i = 0; i < string1.length; i = i + 1) {
  console.log(i, string1[i])
}
/*
0 t
1 h
2 i 
3 s
4 
5 i
6 s
7 
8 a
9
10 s
11 t
12 r
13 i
14 n
15 g
*/

//Part 9
var string2 = "coding"
var total = 0
for (var i = 0; i < string2.length; i++) {
  total = total + i
}
//5


//Part 10
var string3 = "onomatopoeia"
for (var i = 0; i < string3.length; i++) {
  if (string3[i] == 'o') {
    console.log(i, string3[i])
  }
}
//0 o
//2 o
//6 o 
//8 o

//Part 11
var string4 = "You're gonna need a bigger boat."
for (var i = 0; i < string4.length; i++){
  if (string4[i] == "a" || string4[i] == "e" || string4[i] == "i" || string4[i] == "o" || string4[i] == "u") {
    console.log(string4[i])
  }
}
//o u e o a e e a i e o a 


























