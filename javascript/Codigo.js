const gmail = document.querySelector(`.mail`);
const business = document.querySelector(`.business`);
const message = document.querySelector(`.menssage`);
const button = document.querySelector(`.submit`);
const form = document.querySelector(`.form`);
const mensajeerror = document.querySelector(`.mensaje-error`);


const listinput = document.querySelectorAll(`.form__section`);



const mostrarMensajeError = (classInput, mensaje) =>{
    let element = document.querySelector(`.${classInput}`);
    element.lastElementChild.textContent = `${mensaje}`
}
form.addEventListener(`submit`, (e)=>{
    e.preventDefault();
    let condicion = validacion();
    if (condicion){
        enviarForm();        
    }else{
        form.lastElementChild.textContent = ""; 
    }

})


const validacion = () =>{

    let condicion = true;

    listinput.forEach((elemento)=>{
        elemento.lastElementChild.textContent = "";
    });    
    
    if(gmail.value.length < 1 || gmail.value.trim() == ""){
        mostrarMensajeError(`maildiv`,`Gmail no Valido`);
        
        condicion = false;
    }
    if(message.value.length < 1 || message.value.trim() == ""){
        mostrarMensajeError(`menssagediv`,`Mensaje no Valido`);
        condicion = false;
    }
    if(business.value.length < 1 || business.value.trim() == "" ){
        mostrarMensajeError(`businessdiv`,`Asunto no Valido`);
        condicion = false;
    }
    return condicion;
}

const enviarForm = () =>{
    form.reset();
    form.lastElementChild.textContent = "Formulario Enviado";        

}