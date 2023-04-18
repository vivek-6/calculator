let initialValue = "";

let buttons = document.querySelectorAll('.button');

Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (event) => {
        if(event.target.innerHTML == '='){
            initialValue = eval(initialValue);
            document.querySelector('input').value = initialValue;
        }else if(event.target.innerHTML == 'C'){
            initialValue = "";
            document.querySelector('input').value = initialValue;
        }else{
            console.log(event);
            initialValue = initialValue + event.target.innerHTML;
            document.querySelector('input').value = initialValue;
        }
    });
});