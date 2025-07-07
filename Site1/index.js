const containerOverall = document.querySelector("div.head_overall");
const container = containerOverall.querySelector("div.head-container");
const head = container.querySelectorAll("div.head");
const active = container.querySelector("div.active");
const inactive = container.querySelector("div.inactive");
console.log(head.length, "heads found", head);
console.log("active head", active);
console.log("inactive head", inactive);
let activeIndex = Array.from(head).indexOf(active);
console.log("active head index", activeIndex);
let nextIndex = activeIndex;
const rightButton = document.querySelector("button.button-right");
const leftButton = document.querySelector("button.button-left");


function switchPart(direction, sectionType)
{
    const containerSelector = `div.${sectionType}-container`;
    const container = document.querySelector(containerSelector);
    const currentActive = container.querySelector("div.active");
    // Build the part selector: "head" → "div.Head" 
    const partElements = container.querySelectorAll(`div.${sectionType}`);
    const currentIndex = Array.from(partElements).indexOf(currentActive);


    const partSelector = Array.from(partElements);

    activeIndex = currentIndex;
    if (direction === 'left')
    {
        console.log("Switching left");
        if (activeIndex - 1 < 0)
        {
            console.log("Active index is smaller than or equal to part length");
            nextIndex = partSelector.length - 1;
        } else
        {
            nextIndex = activeIndex - 1;
        }
    }
    else if (direction === 'right')
    {
        console.log("Switching right");
        if (activeIndex + 1 >= partSelector.length)
        {
            console.log("Active index is greater than or equal to part length");
            nextIndex = 0;
        } else
        {
            nextIndex = activeIndex + 1;
        }
    }
    console.log("Next part index", nextIndex, activeIndex);
    partSelector[activeIndex].classList.remove("active");
    partSelector[activeIndex].classList.add("inactive");
    partSelector[nextIndex].classList.remove("inactive");
    partSelector[nextIndex].classList.add("active");
    console.log("Next part index", nextIndex);
}
// Head buttons
const headContainer = document.querySelector("div.head_overall");
const headRightButton = headContainer.querySelector("button.button-right");
const headLeftButton = headContainer.querySelector("button.button-left");

// Body buttons - ADD THESE MISSING LINES
const bodyContainer = document.querySelector("div.bodyb_overall");
const bodyRightButton = bodyContainer.querySelector("button.button-right");
const bodyLeftButton = bodyContainer.querySelector("button.button-left");

// Leg buttons
const legContainer = document.querySelector("div.Leg_overall");
const legRightButton = legContainer.querySelector("button.button-right");
const legLeftButton = legContainer.querySelector("button.button-left");

// Event listeners - ONLY ONE SET, WITH CORRECT NAMES
headRightButton.addEventListener('click', () => switchPart("right", "head"));
headLeftButton.addEventListener('click', () => switchPart("left", "head"));

bodyRightButton.addEventListener('click', () => switchPart("right", "bodyb"));
bodyLeftButton.addEventListener('click', () => switchPart("left", "bodyb"));

legRightButton.addEventListener('click', () => switchPart("right", "leg"));
legLeftButton.addEventListener('click', () => switchPart("left", "leg"));