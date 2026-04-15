// When the user clicks the purchase button, render out
// "Something went wrong, please try again" in the paragraph
// that has the id="error".

// document.getElementById("error")

// function errorM(){
//     let errorMsg = "Something went wrong, please try again"
//     error.textContent = errorMsg
// }


let errorParagraph = document.getElementById("error")
console.log(errorParagraph)

function errorM(){
    errorParagraph.textContent = "Something went wrong, please try again"
}