let empleados = Array(
  {
    id:1,
    nombre:"Camila Oquendo Ramirez",
    cargo:"Jefe general",
    telefono:"3004448740",
    correo:"xplosionmicheladas@gmail.com",
    salario: 3000000,
    contactoEmergencia:"3147855501",
    foto:"./img/WhatsApp Image 2024-04-09 at 8.45.44 AM.jpeg"

  },
{
    id:2,
    nombre:"Ana Cano",
    cargo:"Gerente General",
    telefono:"3124567991",
    correo:"anacano@gamil.com",
    salario: 2000000,
    contactoEmergencia:"3124567891",
    foto:"./img/empleado2.jpg"
},
{
    id:3,
    nombre:"Wendy Sanchez",
    cargo:"Supervisora",
    telefono:"3004521236",
    correo:"wendysanchez56@gmail.com",
    salario: 1300000,
    contactoEmergencia:"3147855501",
    foto:"./img/empleado32jpg.jpg"
},
{
    id:4,
    nombre:"Oscar Osorio",
    cargo:"Jefe de ventas",
    telefono:"3004448748",
    correo:"oscaroso@gmail.com",
    salario: 2500000,
    contactoEmergencia:"3147865501",
    foto:"./img/empleado4.jpg"
}, 
{
    id:5,
    nombre:"Elkin Escobar",
    cargo:"Auxiliar contable",
    telefono:"3004415642",
    correo:"auxicontable@gmail.com",
    salario: 3000000,
    contactoEmergencia:"311562501",
    foto:"./img/empleado5.jpg"
},
{
    id:6,
    nombre:"Yuri Alzate",
    cargo:"Jefe de personal",
    telefono:"3005632740",
    correo:"yurialzate@gmail.com",
    salario: 3000000,
    contactoEmergencia:"3148894501",
    foto:"./img/empleado6jpg.jpg"
},
{
    id:7,
    nombre:"Monica Ruiz",
    cargo:"Recepcionista",
    telefono:"3102448740",
    correo:"monicaruiz@gmail.com",
    salario: 1300000,
    contactoEmergencia:"3147855501",
    foto:"./img/empleado7.jpg"
},
{
    id:8,
    nombre:"Maria Jose Toro",
    cargo:"Asesora callcenter",
    telefono:"3230448740",
    correo:"majotoro@gmail.com",
    salario: 1300000,
    contactoEmergencia:"3147855501",
    foto:"./img/empleado8.jpg"
},
{
    id:9,
    nombre:"Mariangel Moscoso",
    cargo:"Asesora comercial",
    telefono:"313448740",
    correo:"mariamoscoso@gmail.com",
    salario: 1300000,
    contactoEmergencia:"3147865501",
    foto:"./img/empleado9.jpg"
},
{
    id:10,
    nombre:"Luis Campos ",
    cargo:"Bartender",
    telefono:"309654412",
    correo:"luiscampos@gmail.com",
    salario: 13000000,
    contactoEmergencia:"3117855501",
    foto:"./img/empleado10.jpg"
},
{
    id:11,
    nombre:"Andry Escobar",
    cargo:"Impulsadora comercial",
    telefono:"3004448740",
    correo:"escobarandry@gmail.com",
    salario: 1300000,
    contactoEmergencia:"3147855501",
    foto:"./img/empleado11.jpg"
},
{
    id:12,
    nombre:"Juan Pablo Betancur",
    cargo:"Recursos humanos",
    telefono:"3214448740",
    correo:"jpbetancur@gmail.com",
    salario: 2000000,
    contactoEmergencia:"3147855501",
    foto:"./img/empleado12.jpg"
},
{
    id:13,
    nombre:"America Parra Palomeque",
    cargo:"Analista de talento humano",
    telefono:"3488848740",
    correo:"palomequeparra@gmail.com",
    salario: 1300000,
    contactoEmergencia:"3147855501",
    foto:"./img/empleado13.jpg"
},
{
    id:14,
    nombre:"Erica Ruiz",
    cargo:"Jefe de ventas",
    telefono:"3786328740",
    correo:"ericaruiz@gmail.com",
    salario: 1500000,
    contactoEmergencia:"3147855501",
    foto:"./img/empleado14.jpg"
},
{
    id:15,
    nombre:"Diego Lopez",
    cargo:" Jefe marketing digital",
    telefono:"3218835647",
    correo:"lopezdiegomarketing@gmail.com",
    salario: 3000000,
    contactoEmergencia:"3147855501",
    foto:"./img/empleado15.jpg "
},
{
    id:16,
    nombre:"Rigoberto Uran",
    cargo:"Auxiliar de marketing ",
    telefono:"3204448740",
    correo:"rigouran@gmail.com",
    salario: 2000000,
    contactoEmergencia:"3148 855501",
    foto:"./img/empleado16.jpg"
},
{
    id:17,
    nombre:"Karla Cabello",
    cargo:"Secretaria",
    telefono:"389148740",
    correo:"camilacbello@gmail.com",
    salario: 1300000,
    contactoEmergencia:"3147855501",
    foto:"./img/empleado17.jpg"
},
{
    id:18,
    nombre:"Jhon Martinez",
    cargo:"Logistica y distribucion",
    telefono:"3214567890",
    correo:"jhonm@gmail.com",
    salario: 2000000,
    contactoEmergencia:"3147855501",
    foto:"./img/empleado18.jpg"
},
{
    id:19,
    nombre:"Santiago Salazar",
    cargo:"Auxiliar logistico",
    telefono:"3154757170",
    correo:"santisalzar@gmail.com",
    salario: 1500000,
    contactoEmergencia:"3247855501",
    foto:"./img/empleado19.jpg"
},
{
    id:20,
    nombre:"Marta Agudelo ",
    cargo:"Auxiliar de oficios varios",
    telefono:"3184448740",
    correo:"agudelomarta@gmail.com",
    salario: 1500000,
    contactoEmergencia:"3254755501",
    foto:"./img/empleado20.jpg"
} 

)


//crear una referencia al contenedor de empleados
let contenedor=document.getElementById("contenedor")

console.log(empleados)

//pasos para crear una lista dinamica de elementos//
//1. debo recorrer la base de datos del problema
empleados.forEach(function(empleado){
    
    
    let columna=document.createElement("div")
    columna.classList.add("col")

    let tarjeta=document.createElement("div")
    tarjeta.classList.add("card","shadow")


    let foto=document.createElement("img")
    foto.classList.add("img-fluid","mx-auto","d-block")
    foto.src=empleado.foto

    let nombre=document.createElement("h3")
    nombre.textContent=empleado.nombre

    let cargo=document.createElement("h3")
    cargo.textContent=empleado.cargo

    let telefono=document.createElement("h3")
    telefono.textContent=empleado.telefono

    let correo=document.createElement("h3")
    correo.textContent=empleado.correo

    let salario=document.createElement("h3")
    salario.textContent=empleado.salario


//se asocian las estructuras en un orden logico

        tarjeta.appendChild(foto)
        tarjeta.appendChild(nombre)
        tarjeta.appendChild(cargo)
        tarjeta.appendChild(telefono)
        tarjeta.appendChild(correo)
        tarjeta.appendChild(salario)
        columna.appendChild(tarjeta)
        contenedor.appendChild(columna)

}
)