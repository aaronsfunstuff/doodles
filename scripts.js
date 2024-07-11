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
    "Draw a magical forest"
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
