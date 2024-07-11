const prompts = [
"Draw a dragon",
    "Sketch your dream house",
    "Create a new superhero",
    "Illustrate a scene from your favorite book",
    "Draw an underwater city",
    "Sketch a futuristic vehicle",
    "Create a new type of plant",
    "Draw a day in the life of a cat",
    "Illustrate your favorite holiday",
    "Draw a magical forest",
    "Draw a castle in the clouds",
    "Sketch a robot with a unique function",
    "Create a new mythical creature",
    "Illustrate a scene from a carnival",
    "Draw a space station on a distant planet",
    "Sketch an enchanted treehouse",
    "Create a superhero's secret lair",
    "Draw a magical potion with strange ingredients",
    "Sketch an underwater adventure",
    "Illustrate a day at the zoo",
    "Draw a landscape from another planet",
    "Create a new kind of flower",
    "Sketch a scene from your favorite movie",
    "Draw a futuristic city skyline",
    "Illustrate a fairy tale character in modern times",
    "Draw an animal doing something unusual",
    "Create a new type of transportation",
    "Sketch a scene from a beach",
    "Draw a magical doorway to another world",
    "Illustrate your dream vacation spot"
];

let usedPrompts = [];

function getRandomPrompt() {
    if (usedPrompts.length === prompts.length) {
        usedPrompts = [];
    }
    
    let prompt;
    do {
        prompt = prompts[Math.floor(Math.random() * prompts.length)];
    } while (usedPrompts.includes(prompt));
    
    usedPrompts.push(prompt);
    return prompt;
}

function newPrompt() {
    const promptElement = document.getElementById('prompt');
    const previousPromptsElement = document.getElementById('previous-prompts');

    if (promptElement.textContent) {
        const listItem = document.createElement('li');
        listItem.textContent = promptElement.textContent;
        previousPromptsElement.appendChild(listItem);
    }

    promptElement.textContent = getRandomPrompt();
}

document.addEventListener('DOMContentLoaded', newPrompt);

