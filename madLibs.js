const place = 'warehouse';
const innerPlace = 'robot factory';

const robot = {
    name: 'RoboMax',
    dialogue: 'Access Granted!',
}

const num1 = 8;
const num2 = 2;
const mathResult = num1/num2;

const isFascinating = true;
const booleanValue = isFascinating ? 'Fascinating, right?' : "Not that fascinating, right?";


const story = `In a hidden ${place}, I stumbled upon a hidden ${innerPlace}. The shiny machines were assembling gadgets endlessly. One robot, named ${robot.name}, handed me a metallic keycard. It beeped and said, ${robot.dialogue} Did you know ${num1} ÷ ${num2} equals ${mathResult}? ${booleanValue}`

document.getElementById("madlibs-output").textContent = story;
console.log(story);