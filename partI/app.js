let counterIncrease = () => {
    let button =  document.querySelector('button');
    button.addEventListener('click', () =>{
        let counter = document.querySelector('.counter');
        let counterValue = counter.innerHTML;
        counterValue++;
        counter.innerHTML = counterValue;
    });
};

counterIncrease();