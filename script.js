const calculatorForm = document.querySelector(".calculator__form");
const calculatorInput = document.querySelector(".calculator__display .calculator__input");
calculatorForm.addEventListener("click", e => {
    e.preventDefault();
    const currentElement = e.target;
    
    // Guard Clause
    if(!currentElement.classList.contains("calculator__buttons")) return;
    const dataButton = currentElement.dataset.button;

    if(currentElement.classList.contains("calculator__operator")){
        if(dataButton === 'AC') calculatorInput.value = '';
        else if(dataButton === "DE") calculatorInput.value = calculatorInput.value.toString().slice(0, -1);
        else if(dataButton === "=") calculatorInput.value = eval(calculatorInput.value);
    } else{
        calculatorInput.value += dataButton
    }

});

calculatorInput.addEventListener("keypress", e => {
    if(e.key === "Enter"){
        e.preventDefault();
        calculatorInput.value = eval(calculatorInput.value);
    }
})