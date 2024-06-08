/**
 * ¡Buena suerte! ¡Pasa el mensaje!
 */

sendBtn = document.querySelector("#btn-send");
inputValue = document.querySelector("#message");
lastMessage = document.querySelector("#last-message");


    // 1. Asociar un manejador de eventos click al botón "ENVIAR"
sendBtn.addEventListener("click", function(){
    // 2. Al hacer clic en el botón, se debe leer el valor del input
    console.log("valor del input: ", inputValue.value);

    // 3. El valor del input debe ser colocado en el contenedor #last-message, sobreescribiendo cualquier mensaje anterior
    lastMessage.textContent = inputValue.value;

    // 4. Debemos limpiar el input después de pasar el mensaje
    inputValue.value = "";
});









