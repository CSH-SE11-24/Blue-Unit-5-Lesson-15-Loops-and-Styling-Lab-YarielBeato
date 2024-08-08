console.log("Script running...");
// Task 1: All off button
// Select the all off button and console log to confirm you selected successfully
let light = document.querySelectorAll(".lightbulb")
let b = document.querySelector("#clear")
// Select all the lightbulb p tags and console log the length to confirm you selected successfully
console.log(light.length)

// Add an event listener such that when the all off button is clicked, the background color of all the lightbulbs becomes black
b.addEventListener("click", function(event){
  for(let i =0; i < light.length; i++)
    light[i].style.backgroundColor = "black"
  
})




// Task 2: CSH Mode
// Select the CSH mode button and console log to confirm you selected successfully
// Make sure to add an ID so you can select this button
let csh = document.querySelector("#csh")

// Select the body and console log to confirm you selected successfully
let body = document.querySelector("body")
console.log(csh.length)
// Add an event listener such that when your mouse is over CSH mode button, the background color of body becomes green and the text of the lightbulb tags becomes "💻"

csh.addEventListener("mouseover", function(event){
   for(let i =0; i < light.length; i++)
      light.textContent = "💻"
    body.style.backgroundColor = "green"

})




// Add an event listener such that when your mouse is off CSH mode button, the background color of body becomes black again and the text of the lightbulb tags goes back to "💡"




// Task 3: On and off features
// Add an event listener to each lightbulb such that when you click it, the background color of that p tag changes to white







// Extra credit: use classList and toggle to the lightbulb class to toggle on AND off when you click each lightbulb






