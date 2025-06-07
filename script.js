const screen = document.querySelector('.screen');
const buttons = document.querySelectorAll('button');

buttons.forEach((btn) => {
    btn.addEventListener('click', () =>
    {
        const buttonPressed = btn.textContent;
        
        if(btn.id === 'C'){
            screen.textContent = '0';
            return;
        }

        if(btn.id === 'delete'){
            if(screen.textContent.length === 1 || screen.textContent === 'ERROR'){
                screen.textContent = '0';
            }
            else{
                screen.textContent = screen.textContent.slice(0, -1);
            }
            return;
        }

        if(btn.id === 'equal'){
            try {
                screen.textContent = eval(screen.textContent);
            } catch (error) {
                screen.textContent = 'ERROR';
            }

            return;
        }

        if(screen.textContent === '0' || screen.textContent === 'ERROR'){
            screen.textContent = buttonPressed;
        }   
        else{
            screen.textContent += buttonPressed;
        }
    });
});