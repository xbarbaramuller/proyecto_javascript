/* Definición de prendas */
const ROPA = [],
      INTERIOR = [
            { prenda: "boxer", precio: 1300 },
            { prenda: "media", precio: 500 },
            { prenda: "soquete", precio: 400 },
      ],
      ABRIGO = [
            { prenda: "campera", precio: 5600 },
            { prenda: "canguro", precio: 4400 },
            { prenda: "buzo", precio: 2500 },
      ],
      SUPERIOR = [
            { prenda: "remera", precio: 2100 },
            { prenda: "chomba", precio: 2400 },
            { prenda: "camisa", precio: 4000 },
      ],
      INFERIOR = [
            { prenda: "jean", precio: 4000 },
            { prenda: "chino", precio: 6200 },
            { prenda: "jogging", precio: 3600 },
            { prenda: "bermuda", precio: 3900 },
      ],
      ZAPATILLAS = [
            { prenda: "cuero", precio: 3600 },
            { prenda: "deportivas", precio: 5000 },
            { prenda: "urbanas", precio: 3300 },
      ],
      ACCESORIOS = [
            { prenda: "beanie", precio: 1600 },
            { prenda: "visera", precio: 2000 },
            { prenda: "bufanda", precio: 1900 },
            { prenda: "cinturon", precio: 2400 },
      ],      
      MARROQUINERIA = [
            { prenda: "billetera", precio: 2400 },
            { prenda: "morral", precio: 3000 },
            { prenda: "mochila", precio: 6500 },
            { prenda: "riñonera", precio: 2000 },
      ], 

      NADA = [{ prenda: "nada", precio: 0 }];

/* Función para consultar las prendas al user */
const consultar = (mensaje) => {
      dato = parseInt(prompt(mensaje));
      while (dato <= -1 || dato >= 7 || isNaN(dato)) {
            alert("Por favor ingrese una opción correcta");
            dato = parseInt(prompt(mensaje));
      }
      return dato;
};
/* Función total de las prendas elegidas y regargo crédito */
const ropa = (ropa) => {
      let respuesta,
            precios = ropa.map((prenda) => prenda.precio),
            total = precios.reduce((a, b) => a + b, 0),
            recargo = total * 0.15;

      respuesta =
            "Ropa interior: " +
            ropa[0].prenda +
            " $" +
            ropa[0].precio +
            ", Abrigo: " +
            ropa[1].prenda +
            " $" +
            ropa[1].precio +
            ", Prenda superior: " +
            ropa[2].prenda +
            " $" +
            ropa[2].precio +
            ", Prenda inferior: " +
            ropa[3].prenda +
            " $" +
            ropa[3].precio +
            ", Zapatillas: " +
            ropa[4].prenda +
            " $" +
            ropa[4].precio +
            ", Accesorios: " +
            ropa[5].prenda +
            " $" +
            ropa[5].precio +
            ", Marroquineria: " +
            ropa[6].prenda +
            " $" +
            ropa[6].precio +
            ". Total: $" +
            total +
            ". Recargo crédito $" +
            recargo;

      return respuesta;
};
/* Función para la validación de opciones elegidas */
validacion = (valor, array) => {
      if (valor != 4) {
            ROPA.push({
                  prenda: array[valor].prenda,
                  precio: array[valor].precio,
            });
      } else {
            ROPA.push({
                  prenda: NADA[0].prenda,
                  precio: NADA[0].precio,
            });
      }
};
/* Mensaje para elección de prendas para el outfit a comprar */
let mensajeInterior =
      "Elija su opción de ropa interior: ingrese 0 para boxer, 1 para media, 2 para soquete o 3 para nada.";

let mensajeAbrigo=
      "Elija su opción de abrigo: ingrese 0 para campera, 1 para canguro, 2 para buzo o 3 para nada.";

let mensajeSuperior =
      "Elija su opción de prenda superior: ingrese 0 para remera, 1 para chomba, 2 para camisa o 3 para nada.";

let mensajeInferior =
      "Elija su opción de prenda inferior: ingrese 0 para jean, 1 para chino, 2 para jogging, 3 para bermuda o 4 para nada.";

let mensajeZapatillas =
      "Elija su opción de zapatillas: ingrese 0 para cuero, 1 para deportivas, 2 para urbanas o 3 para nada.";      

let mensajeAccesorios =
      "Elija su opción de accesorios: ingrese 0 para beanie, 1 para visera, 2 para bufanda, 3 para cinturon o 4 para nada.";   
      
let mensajeMarroquineria =
      "Elija su opción de marroquineria: ingrese 0 para billetera, 1 para morral, 2 para mochila, 3 para riñonera o 4 para nada.";   


/* Llamado a todas las funciones */
let interior = consultar(mensajeInterior);

validacion(interior, INTERIOR);

let abrigo = consultar(mensajeAbrigo);

validacion(abrigo, ABRIGO);

let superior = consultar(mensajeSuperior);

validacion(superior, SUPERIOR);

let inferior = consultar(mensajeInferior);

validacion(inferior, INFERIOR);

let zapatillas = consultar(mensajeZapatillas);

validacion(zapatillas, ZAPATILLAS);

let accesorios = consultar(mensajeAccesorios);

validacion(accesorios, ACCESORIOS);

let marroquineria = consultar(mensajeMarroquineria);

validacion(marroquineria, MARROQUINERIA);

alert(outfit(ROPA));