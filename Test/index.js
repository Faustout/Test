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

// let fruit = ["🍎", "🍊", "🍎", "🍎", "🍊"]
// let appleShelf = document.getElementById("apple-shelf")
// let orangeShelf = document.getElementById("orange-shelf")

// Create a function that puts the apples onto the appleShelf
// and the oranges onto the orangeShelf. Use a for loop,
// a conditional statement, and the textContent property.

// function redShelf(){
//     for (let i=0; i<fruit.length;i++){
//         if (fruit[i] === "🍎" ){
//             appleShelf.textContent += "🍎"
//         }
//         else orangeShelf.textContent += "🍊"
//     } 
// }
// console.log(redShelf());


// 1. Grab the box from the DOM and store it in a variable
// 2. Add a click event listener to the box 
// 3. Log out "I want to open the box!" when it's clicked

// let boxOpen = document.getElementById("box")
// boxOpen.addEventListener("click", function (){
//     console.log("I want to open the box!");
// }   
// )

// If possible, use const. If not, use let.

// Which variables below should be changed from let to const?

// The customer wants to order some stuff. Here are the details:
// const basePrice = 520
// const discount = 120
// let shippingCost = 12
// let shippingTime = "5-12 days"

// // Whops! Turns out the shipping will be a bit more complex
// shippingCost = 15
// shippingTime = "7-14 days"

// // Calculating the full price
// const  fullPrice = basePrice - discount + shippingCost

// // Finally, notifying the customer
// console.log("Total cost: " + fullPrice + ". It will arrive in " + shippingTime)

// Use .innerHTML to render a Buy! button inside the div container

// const container = document.getElementById("container")

// container.innerHTML = "<button onclick='buy()'>Buy!</button>"

// function buy() {
//    // When clicked, render a paragraph under the button (in the container)
// // that says "Thank you for buying!
// container.innerHTML += "<p>Thank you for buying!</p>"
    
// }


// template strings/literals

// const recipient = "James"
// const sender = "Per Harald Borgen"

// // Break the email string into multiple lines
// const email = 
// `
// Hey ${recipient}!
// How is it going?
// Cheers ${sender}
// `

// console.log(email)


// 1. Save a key-value pair in localStorage
// 2. Refresh the page. Get the value and log it to the console
// 3. Clear localStorage

// HINTS:
// localStorage.setItem(key, value)
// localStorage.getItem(key)
// localStorage.clear()
// PS: both key and value need to be strings
// localStorage.setItem("myLeads","")
// localStorage.getItem("myLeads")
// localStorage.clear()

// let myLeads =[`["www.awesomelead.com"]`]

// //1. turn the myLeads string into an array (object)
// myLeads = JSON.parse(myLeads)
// //2. Push a new value into the array
// myLeads.push("www.epiclead.com")
// //3. Turn the array into string again
// myLeads = JSON.stringify(myLeads)
// //4. Console.log the string using typeof to make sure the type is string
// console.log(myLeads)

// console.log(  Boolean("")   ) //false
// console.log(  Boolean("0")  ) //true
// console.log(  Boolean(100)  ) //true
// console.log(  Boolean(null) ) //false
// console.log(  Boolean([0])  ) //true
// console.log(  Boolean(-0)   ) //false

// const welcomeEl = document.getElementById("welcome-el")

// // Give the function a parameter, greeting, that replaces "Welcome back"
// function greetUser(greeting, name, emoji) { 

//    welcomeEl.textContent = `
//                              ${greeting}, ${name} ${emoji}

//                              `
// }

// greetUser("Yo", "Faust","🦥")


// Create a function, add(), that adds two numbers together and returns the sum

// function add(firstnum, secondnum){
//    return firstnum + secondnum
// }

// console.log( add(3,4)    ) // should log 7
// console.log( add(9, 102) ) // should log 111


// What are greeting and name? parameters
// What are "Howdy" and "James"? arguments
// What are num1 and num2? parameters
// What are 3 and 4? arguments


//.                parameters
// function greetUser(greeting, name) { 
//     welcomeEl.textContent = `${greeting}, ${name} 👋`
// }

// //.        arguments
// let hi = "Howdy"
// greetUser(hi, "James")


// function add(num1, num2) {
//     return num1 + num2
// }

// add(3, 4)

// Create a function, getFirst(arr), that returns the first item in the array
// function getFirst(arr){
//     return arr[0]
// }

// console.log(getFirst([1,2,3]));
// Call it with an array as an argument to verify that it works


// SETTING THE STAGE
// let player = "Per"
// let opponent = "Nick"
// const game = "AmazingFighter"
// let points = 0
// let hasWon = false

// // PLAYING THE GAME
// points += 100
// hasWon = true

// // ANNOUNCING THE WINNER
// if (hasWon) {
//  console.log(
//     `${player} got ${points} points and won the ${game} game!`)
// } else {
//     console.log(`The winner is ${opponent}! ${player} lost the game`);
// }

// Go through all variables and decide if they should be let or const
// Change the console logs to use template strings instead of double quotes

// let myCourses = ["Learn CSS Animations", "UI Design Fundamentals", "Intro to Clean Code"]

// Create a function that takes a single parameter, an array,
// and logs all the items of the array to the console.
// Call the function while passing in myCourses as an argument

// function courseMy (arr){
//     for(i = 0; i < arr.length; i++)
//         console.log("- " + arr[i]);      
// }

// courseMy(myCourses)

// Save a value to localStorage
// Delete your code and refresh the page
// Fetch your value from localStorage and log it out

// let weekends = ["Friday", "Saturday", "Sunday"]

// localStorage.setItem("weekends", weekends)
// localStorage.clear()

// console.log(localStorage.getItem(weekends));

// let data = [
//     {
//         player: "Jane",
//         score: 52
//     }, 
//     {
//         player: "Mark",
//         score: 41
//     }
// ]

// Fetch the button from the DOM, store it in a variable
// Use addEventListener() to listen for button clicks
// Log Jane's score when the button is clicked (via data)

// let janeButton = document.getElementById("JaneButton")
// janeButton.addEventListener("click", function(){
//     console.log(data[0].score);
    
// })



// The generateSentence(desc, arr) takes two parameterer: a description and an array.
// It should return a string based upon the description and array.

// Example 1: if you pass in "largest countries",and ["China", "India", "USA"],
// it should return the string: "The 3 largest countries are China, India, USA"

// Example 2:If you pass in "best fruits" and ["Apples", "Bananas"], it should return:
// "The 2 best fruits are Apples, Bananas"

// Use both a for loop and a template string to solve the challenge

// let largestCountries = ["China", "India", "USA"]
// let bestFruits = ["Apples", "Bananas"]

//////salah si cuma nyoba2 aja
// function generateSentence2(desc, arr) {
//     for (i=0; i<arr.length; i++)
//         if(desc === "largest countries" || arr === largestCountries){
//             return `The 3 largest countries are ${largestCountries.join(", ")} `
//         }
//         else if(desc === "best fruits" || arr === bestFruits){
//             return `The 2 best fruits are ${bestFruits.join(", ")} `
//         }
// }

// console.log(generateSentence2("largest countries", largestCountries))
// console.log(generateSentence2("best fruits", bestFruits))


/////////yang bener
function generateSentence(desc, arr){
    let baseString = `The ${arr.length} ${desc} are `
    const lastIndex = arr.length -1
    for (i=0; i<arr.length; i++){
        if (i=== lastIndex){
            baseString += arr[i]
        }else
        baseString += arr[i] + ", "
    }
    return baseString
}

console.log(generateSentence("weekend days", ["Friday", "Saturday", "Sunday"]));

// Create a function that renders the three team images
// Use a for loop, template strings (``), plus equals (+=)
// .innerHTML to solve the challenge.


const imgs = [
    "images/hip1.jpg",
    "images/hip2.jpg",
    "images/hip3.jpg"
]
const container = document.getElementById("container")
function renderImg(){
    let imagesRow =""
    for (let i = 0; i < imgs.length; i++) {
        imagesRow += `<img alt="employee in the company" class="team-img" src="${imgs[i]}">`
    }   container.innerHTML = imagesRow
 }
renderImg()