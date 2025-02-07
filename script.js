// Variable Declarations
let name = "Jupiter"; 
const type = "Gas Giant"; 
var discoveryYear = "Ancient Times"; 

// Writing Functions*/
function populateHeader() {
  const headerElement = document.getElementById("celestial-name");
  headerElement.textContent = name;
}

// Call the function when the script loads
populateHeader();

// Implementation Of Reveal Space Fact Button
const spaceFact = "Jupiter has a storm called the Great Red Spot, which has been raging for over 300 years!";

function revealFact() {
  const factElement = document.getElementById("space-fact");
  factElement.textContent = spaceFact; 
  factElement.style.display = "block";
}

// Implementing Event Listeners
const revealButton = document.getElementById("reveal-btn");
revealButton.addEventListener("click", revealFact); 

// Manipulating the DOM
const description = document.createElement("p");
description.textContent = `Jupiter is a ${type}, known since ${discoveryYear}. It is the largest planet in the solar system, with more than 75 moons!`;
document.getElementById("celestial-info").appendChild(description);

// Using Arrow Functions
const kilometersToMiles = (kilometers) => kilometers * 0.621371;
console.log(`Diameter of Jupiter: ${kilometersToMiles(139820)} miles`);

// Error Handling with Try-Catch-Finally
try {
  undefinedFunction(); 
} catch (error) {
  console.error("An error occurred:", error.message);
} finally {
  console.log("Error handling completed.");
}

// Looping Through Data
const facts = [
  "Jupiter is 318 times more massive than Earth.",
  "A day on Jupiter lasts only 10 hours.",
  "Jupiter has a faint ring system made of dust particles.",
];
facts.forEach((fact) => console.log(fact));

// Added Challenge: Append facts as list items to the DOM
const factList = document.getElementById("fact-list");
if (factList) { 
    for (const fact of facts) {
        const listItem = document.createElement("li");
        listItem.textContent = fact;
        factList.appendChild(listItem);
    }
} else {
    console.error("Fact list element not found in the DOM.");
}
