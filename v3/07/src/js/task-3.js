const inputValue = document.querySelector("#name-input");
const outputValue = document.querySelector("#name-output")

inputValue.addEventListener('input', (event) => {
    const trimValue = event.target.value.trim();

    if (trimValue === '') {
        outputValue.textContent = 'Anonymous';
        
    } else {
        outputValue.textContent = trimValue;
    }
});