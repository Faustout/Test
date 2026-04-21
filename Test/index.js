// let welcomeEl = document.getElementById("welcome-el")

// let myName = "Faust"
// let greeting= "Good day, "

// welcomeEl.innerText =greeting + myName 

// welcomeEl.innerText +=  "😁"


// let firstName= "Faustin"
// let lastName="Nathania"

// let fullName= firstName +" " +lastName
// console.log(fullName)


// let name1 = "Linda"
// let greeting = "Hi there"

// function hello(){
//    console.log ( greeting + ", " + name1 + "!")
    
// }
// hello()


// let myPoints = 3

// function add3Points(){
//     myPoints += 3
// }

// function remove1Point(){
//     myPoints -= 1
// }

// add3Points()
// add3Points()
// add3Points()
// remove1Point()
// remove1Point()

// console.log(myPoints)

// console.log("2" + 2) //22
// console.log(11 + 7) //18
// console.log(6 + "5") //65
// console.log("My points: " + 5 + 9) // My points: 59
// console.log(2 + 2) // 4
// console.log("11" + "14") // 1114

// let featuredPosts = [
//     "Check Out My Netflix Clone, Here's the Code for My Project, I've Just Relaunched My Portfolio"
// ]

// let linkedinProfile = [
//     "Experience as Designer and Database Admin", "Bachelor of Arts in BINUS University","Coding License, Diploma and Personal Driving License", "Photoshop, VSCode, CSP, Illustrator, Office"
// ]

// Arrays - ordered lists of items

// let featuredPosts = [
//     "Check out my Netflix clone",
//     "Here's the code for my project",
//     "I've just relaunched my portfolio"
// ]


// let experience = ["CEO at Scrimba", "Frontend developer at Xeneta", "People counter for Norstat"]

// Make the following appear in the console:
// Frontend developer at Xeneta
// People counter for Norstat
// CEO at Scrimba
// console.log( experience [1]);
// console.log( experience [2]);
// console.log( experience [0]);

// let me =["Faust", 29, true]
// console.log(me);

// let cards2 = [7, 4]
// cards2.push(6)
//console.log(cards)

// Push the newMessage to the messages array, and then log out the array

// let messages = [
//     "Hey, how's it going?",        
//     "I'm great, thank you! How about you?",
//     "All good. Been working on my portfolio lately."
// ]

// let newMessage = "Same here!"

// messages.push(newMessage)
// console.log(messages);

// messages.pop(messages)
// console.log(messages);

// Count to ten!

// We need to specify...

// Where should we START counting?
// Where is the FINISH line?
// What's the STEP SIZE we should use?

//    START           FINISH       STEP SIZE
// for ( let count = 10;  count < 21;  count += 1 )  {
    
//     console.log(count)

// }

// for (let i = 0; i < 6; i +=1) {
//     console.log(i); 
// }
//  for (let i =10; i <101; i +=10) {
//     console.log(i);
    
//  }

// let messages = [
//     "Hey, how's it going?",        
//     "I'm great, thank you! How about you?",
//     "All good. Been working on my portfolio lately.",
//     "Same here!",
//     "Great to hear",
//     "✌"
// ]

// for (let i=0; i< messages.length; i+=1) {
//    console.log(messages[i]);
     
// }

// let cards = [7, 3, 9]

// for (let i=0; i <cards.length; i ++){
//     console.log(cards[i]);
    
// }
// Create a for loop that logs out all the cards in the array
// Use cards.length to specify how long the loop should run

// let sentence = ["Hello", "my", "name", "is", "Per"] 
// let greetingEl = document.getElementById("greeting-el")

// // Render the sentence in the greetingEl paragraph using a for loop and .textContent

// for (let i=0; i <sentence.length; i++){
//     greetingEl.textContent += sentence[i] + " "
   
// }

// let player1Time = 102
// let player2Time = 105

// function getFastestRaceTime(){
//     if (player1Time < player2Time){
//         return player1Time
//     } else if(player1Time > player2Time){
//         return player2Time
//     }else {
//         return player1Time}
// }

// let fastestRacer = getFastestRaceTime()
// console.log(fastestRacer);

// Write a function that returns the total race time
// Call/invoke the function and store the returned value in a new variable
// Finally, log the variable out


// logikanya ambil jumlah fastestRacer terus dimasukin ke Array
// nanti angka apapun di arraynya disum
// abis disum return functionnya disetor di variable let baru



// function totalTime(){
//  return player1Time + player2Time
// }
// let raceResult = totalTime()
// console.log(raceResult);


// let randomNumber = Math.random() *6
// console.log(randomNumber);


// what does math.random() do?
// create random numbers in certain range between 0 and 1?


/* 

In which range will our randomNumber be now?

From: 0
To: 5.99999 (basically mentok sebelom 6)

*/

// let randomNumber = Math.random() * 6

// let flooredNumber = Math.floor(3.562)

// console.log(flooredNumber)


/* 

What does Math.floor() do to positive numbers?

Your answer: removing decimal numbers

*/

// let randomNumber = Math.floor( Math.random() *6)
// console.log(randomNumber);

/* 

Write down all the possible values randomNumber can hold now!

 0 1 2 3 4 5


*/

// Try to modify the expression so that we get a range from 1 to 6
// let randomNumber = Math.floor(Math.random() * (7-1) +1 )
// let randomNumber = Math.floor(Math.random() * 6 +1 ) //lebi simplenya

// range array awalnya (yang 7-1) itu isinya kalo dibuletin 0 1 2 3 4 5 ada 6 angka
// 7 itu nilai maksimum alias gabakal bisa nyampe 7,
// 1 itu nilai minimum alias paling dikit angka 1
// sebenernya pake let randomNumber = Math.floor(Math.random() * 6 ) langsung bisa cuma min max yang 7-1 biar bisa dimodif2 aja angkanya
// +1 itu buat upgrade range arraynya jadi 1 2 3 4 5 6

// function diceRoll(){
//     let randomNumber = Math.floor(Math.random() * 6 +1 )
//     return randomNumber
// }

// console.log(diceRoll());



// let hasCompletedCourse = true
// let givesCertificate = true

// if (hasCompletedCourse === true && givesCertificate === true) {
//         generateCertificate()
    
// }

// function generateCertificate() {
//     console.log("Generating certificate....")
// }

// let hasSolvedChallenge = false
// let hasHintsLeft = false

// Create an if statement that checks that both variables are false.
// If so, run the showSolution() function

// if (hasSolvedChallenge === false && hasHintsLeft === false){
//  showSolution()
// }

// function showSolution() {
//     console.log("Showing the solution....")
// }

// Create two boolean variables, likesDocumentaries and likesStartups
// Use an OR statement (||) to call recommendMovie() if either of those variables are true

// let likesDocumentaries = false
// let likesStartups = true

// if (likesDocumentaries === true || likesStartups === true){
//     recommendMovie()
// }

// function recommendMovie() {
//     console.log("Hey, check out this new film we think you will like!")
// }

// // Create an object that represents an airbnb castle listing.
// // It should contain at least one boolean, one string, one number, and one array
// // Log out at least two of the keys using the dot notation

// let castle = {
//     name: "Castle in East Stroudsburg, Pennsylvania, United States",
//     facilities: ["8 guests", "4 bedrooms", "4 beds", "2 baths"],
//     price: 2697,
//     available: true,
//     greeting: function(){
//         console.log("Bienvenue!")
//     }
// }

// console.log(castle.name)
// console.log(castle.price)
// castle.greeting()


// Create a person object that contains three keys: name, age, and county.
// Use yourself as an example to set the values for name, age, and country

// Create a function, logData(), that uses the person object to create a
// string in the following format: 
// "Per is 35 years old and lives in Norway"

// Call the logData() function to verify that it works

// let person = {
//     name: "Faust",
//     age: 29,
//     country: "Indonesia"
// }

// function logData(){
//     console.log( person.name + " is " + person.age + " and Lives in " + person.country)
// }

// logData()

// let age = 25

// less than 6 years old -> free
// 6 to 17 years old     -> child discount
// 18 to 26 years old    -> student discount
// 27 to 66 years old    -> full price
// over 66 years old     -> senior citizen discount

// Create a conditional statement (if/else/else if) that logs out the discount
// the passenger will get based upon the value of the age variable

// if (age < 6){
//     console.log("Free");
    
// } else if (age <18) {
//     console.log("Child discount");
    
// }
//     else if (age <27) {
//     console.log("Student discount");
    
// }
//     else if (age <67) {
//     console.log("Full price");
    
// }
//     else 
//     console.log("Senior citizen discount");
    
    // let largeCountries = ["China","India","USA","Indonesia","Pakistan"]

/* Use a for loop to log the following to the console:

The 5 largest countries in the world:
- China
- India
- United States
- Indinesia
- Pakistan
*/

// for (let i=0; i<largeCountries.length;i++){
//     console.log("- " + largeCountries[i]);
    
// }

// let largeCountries = ["Tuvalu","India","USA","Indonesia","Monaco"]

// You need to help me fixup the largeCountries array so that 
// China and Pakistan are added back into their respective places

// Use push() & pop() and their counterparts unshift() & shift()
// Google how to use unshift() and shift()

// largeCountries.pop()
// largeCountries.push("Pakistan")
// largeCountries.shift()
// largeCountries.unshift("China")

// console.log(largeCountries);

// let dayOfMonth = 13
// let weekday = "Friday"

// // If it is Friday the 13th, log out this spooky face: 😱
// // Use the logical "AND operator" -> &&

// if (dayOfMonth === 13 && weekday === "Friday"){
//     console.log("😱");
    
// }
    

// let hands = ["rock", "paper", "scissor"]

// Create a function that returns a random item from the array

// function rockPaperScissors() {
//     let randomIndex = Math.floor(Math.random() *3)
//     return hands[randomIndex]
// }

// console.log(rockPaperScissors());

let fruit = ["🍎", "🍊", "🍎", "🍎", "🍊"]
let appleShelf = document.getElementById("apple-shelf")
let orangeShelf = document.getElementById("orange-shelf")

// Create a function that puts the apples onto the appleShelf
// and the oranges onto the orangeShelf. Use a for loop,
// a conditional statement, and the textContent property.

function redShelf(){
    for (let i=0; i<fruit.length;i++){
        if (fruit[i] === "🍎" ){
            appleShelf.textContent += "🍎"
        }
        else orangeShelf.textContent += "🍊"
    } 
}
console.log(redShelf());

