let counterIncrease = () => {
    let buttons =  document.querySelectorAll('button');

    buttons.forEach(button => {
        button.addEventListener('click', () =>{
            let value = button.parentNode.childNodes[1].innerHTML;
            value++;
            button.parentNode.childNodes[1].innerHTML = value;
        });
    }
    );
};

counterIncrease();