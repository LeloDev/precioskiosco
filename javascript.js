const nombre = prompt("Hola! Bienvenido a la pagina web , porfavor inserte su nombre:")
const titulo =document.querySelector(".pija")

titulo.textContent = ` ${nombre}`;
titulo.setAttribute("ContentEditable","true")
//////// SCRIPT TWO/////

const precio = document.querySelector(".precio")
precio.addEventListener("click",()=>{
    precio.style.color= "brown"
})
///////////////SCRIPT TREE//////


const flexItem = document.querySelector(".flex-item")
flexItem.setAttribute("ContentEditable","true")

const flexItem2 = document.querySelector(".item2")
flexItem2.setAttribute("ContentEditable","true")

const flexItem3 = document.querySelector(".item3")
flexItem3.setAttribute("ContentEditable","true")

const flexItem4 = document.querySelector(".item4")
flexItem4.setAttribute("ContentEditable","true")
const flexItem5 = document.querySelector(".item5")
flexItem5.setAttribute("ContentEditable","true")


///////TIME SCRIPT//////////////////

const hora = document.querySelector(".time")
const tiempo = document.querySelector(".time2")
hora.addEventListener("click",()=>{
    let time = new Date();
    let hora = time.getHours();
    let minutos = time.getMinutes();
    let resultado = `La hora es ${hora}:${minutos}`;
    respuesta = alert(resultado)
})