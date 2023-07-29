function getInputValueById(inputId){
    const inputValue = document.getElementById(inputId).value;
    const newInputValue = parseFloat(inputValue);
    return newInputValue;
};

function getElementTextById(textElementID){
    const texTelement = document.getElementById(textElementID).innerText;
    const newTextElement = parseFloat(texTelement); 
    return newTextElement;
}

function setElementById(elementTag,newValue){
    const element = document.getElementById(elementTag);
    element.innerText = newValue;
}