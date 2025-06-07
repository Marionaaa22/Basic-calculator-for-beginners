// Selecciona el elemento de la pantalla de la calculadora
const screen = document.querySelector('.screen'); 

// Selecciona todos los botones de la calculadora
const buttons = document.querySelectorAll('button'); 

let justCalculated = false; // Variable para saber si se acaba de calcular un resultado

// Recorre todos los botones
buttons.forEach((btn) => {

    // Añade un evento de click a cada botón
    btn.addEventListener('click', () =>
    {
        const buttonPressed = btn.textContent; // Obtiene el texto del botón presionado
        
        // Si el botón es "C", reinicia la pantalla a 0
        if(btn.id === 'C'){
            screen.textContent = '0';
            return;
        }

        // Si el botón es "delete", borra el último carácter de la pantalla
        if(btn.id === 'delete'){
            // Si solo queda un carácter o hay un error, reinicia a 0
            if(screen.textContent.length === 1 || screen.textContent === 'ERROR'){
                screen.textContent = '0';
            }
            // Si hay más de un carácter, elimina el último
            else{
                screen.textContent = screen.textContent.slice(0, -1);
            }
            return;
        }

        // Si el botón es "equal", evalúa la expresión en pantalla
        if(btn.id === 'equal'){
            try {
                // Calcula el resultado usando eval
                screen.textContent = eval(screen.textContent);
            } catch (error) {
                // Si hay un error en la expresión, muestra "ERROR"
                screen.textContent = 'ERROR';
            }
            justCalculated = true; // Marca que se acaba de calcular un resultado
            return;
        }

        // Si la pantalla está en 0, en ERROR o se acaba de calcular, reemplaza el contenido con el nuevo número/operador
        if(screen.textContent === '0' || screen.textContent === 'ERROR' || justCalculated){
            screen.textContent = buttonPressed;
            justCalculated = false; // Ya no estamos mostrando un resultado
        }   
        // Si no, añade el nuevo carácter al final de la pantalla
        else{
            screen.textContent += buttonPressed;
        }
    });
});