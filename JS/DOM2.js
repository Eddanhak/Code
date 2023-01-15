
// Check index2.html for this code.

// Declare variable of a container.
const container = document.querySelector("#container");


const newParagraphOne = document.createElement("p");
// Here we create a new paragraph in the html.
newParagraphOne.setAttribute("id", "pOne");
newParagraphOne.setAttribute("style", "color: red");
// Set the id to "pOne", and color to red.
newParagraphOne.textContent = "Hey I'm red!";
// Add text to the paragraph.  
container.appendChild(newParagraphOne);
// Appends, or puts the paragraph in the container div.


const newThreeHead = document.createElement("h3");
// Declare a variable with a h3 tag.
newThreeHead.setAttribute("id", "hThreeOne");
newThreeHead.setAttribute("style", "color: blue");
newThreeHead.textContent = "I'm a blue h3!";

container.appendChild(newThreeHead);
// Append, or put the h3 into the container div.


const divContainer = document.createElement("div");
divContainer.setAttribute("style", "border: 2px solid black; background-color: pink");
// Declares new container div. with black border and pink background.


const newHeadOne = document.createElement("h1");
newHeadOne.setAttribute("id", "hOneOne");
newHeadOne.setAttribute("style", "color: aqua");
newHeadOne.textContent = "I'm in this div.";

const newParagraphTwo = document.createElement("p");
newParagraphTwo.setAttribute("id", "pTwo");
newParagraphTwo.textContent = "ME TOO!";

divContainer.appendChild(newHeadOne);
divContainer.appendChild(newParagraphTwo);
// append or add the h1 and p tag to the container.

container.appendChild(divContainer);
// Append or add the container to the other container, making it its child.





const btn = document.querySelector("#btn");
// calls the button in the html.

btn.addEventListener("click", () => {
    alert("Hallau duu");
});
// Using an EventListener to make the button do stuff.
// addEventListener also works with pre declared functions.

function btnClick() {
    alert("Hallau duu");
}

const btnTwo = document.querySelector("#btnTwo");

btnTwo.addEventListener("click", btnClick);
// Used with premade function.


const btnThree = document.querySelector("#btnThree");

btnThree.addEventListener("click", function(e) {
    e.target.style.background = "red";
})

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {

    button.addEventListener("click", () => {
        alert(button.id);
    });
});