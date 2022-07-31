
let noMbre=prompt("Ingresar nombre")
alert ("Bienvenido/a "+ noMbre + " a Ne.mu tienda on-line")

// Calcular precio de productos , segun la cantidad solicitada*/
/*
function productoPrecio (prodcutos,cantidad) {
    switch (prodcutos) {
        case "NUECES":
                return (cantidad*800)/1000
                break;
        case "ALEMNDRAS":
                return (cantidad*1000)/1000
                break;
        case "LENTEJAS":
                return (cantidad*300)/1000
                break;
        case "ARANDANOS":
                return (cantidad*900)/1000
                break; 
        case "POROTOS":
                return (cantidad*300)/1000
                break;
        case "CASTAÑAS":
                return (cantidad*500)/1000
                break;
               
        default:
            break;
    }
    
} 
 
 let precio= productoPrecio (prompt("INGRESAR PRODUCTO \nEN MAYUSCULA \nEJ. NUECES - ALMENDRAS-ARANDANOS ETC "),parseInt(prompt("Ingresar cantidad en gramos")))


alert  ("Precio a abonar  es de " + "$"+precio)
*/

// calcular precio mas iva , con descuento
/*
const suma =(a,b)=> a+b;
const resta = (a,b)=> a-b;
const iva = x => x*0.21;

let precioProducto= parseInt (prompt("Ingresar precio del producto"))
let desCuento= precioProducto * 0.20 

let nuevoPrecio = suma((precioProducto),iva(precioProducto))
let nuevoprecio2= resta (suma(precioProducto,iva (precioProducto)),desCuento)

alert ("Precio mas iva :"+ nuevoPrecio+ "\nPrecio en efectivo (-20%) : "+nuevoprecio2)
*/