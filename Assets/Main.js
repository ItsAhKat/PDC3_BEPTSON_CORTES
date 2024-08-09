const productos = [
    {
      nombre: "Leche",
      precio: 1000,
    },
    {
      nombre: "Pan de molde",
      precio: 2000,
    },
    {
      nombre: "Queso",
      precio: 1200,
    },
    {
      nombre: "Mermelada",
      precio: 890,
    },
    {
      nombre: "Azúcar",
      precio: 1300,
    },
  ],
  carrito = [];

//Introduccion al carrito
let seleccion = prompt("Bienvenido a la tienda, Desea continuar con la visita y comprar algo? (Proceda con Y/N)");

//While permite forzar una seleccion de si o no
while (seleccion != "Y" && seleccion != "N") {
  alert("por favor proceda con un Y/N");
  seleccion = prompt("Por favor decida si va a comprar Y/N");
}

//If para decidir ambos casos ya sea un si o un no. En caso de ser no se añade una alerta con la cual cerrar el bucle
if (seleccion == "Y") {
  alert("Aqui nuestros productos en stock :)");
  let todosLosProductos = productos.map(
    (producto) => producto.nombre + " " + producto.precio + "$"
  );
  alert(todosLosProductos.join(" - "));
} else if (seleccion == "N") {
  alert("Esta bien si no deseas nada, hasta luego :D!");
}


//Al seleccionar "N", mostrar los productos disponibles en stock y sus respectivos precios
while (seleccion != "N") {
  let producto = prompt("Elige tus productos para tu carro!");
  let precio = 0;

  if (
    producto == "Leche" ||
    producto == "Pan de molde" ||
    producto == "Queso" ||
    producto == "Mermelada" ||
    producto == "Azúcar"

  ) {
    //Para cada producto un uso de Case para generar un "caso" distinto entre cada producto, en caso de no seleccionar ninguno se activa la Alerta para seleccionar un producto valido
      switch (producto) {
        case "Leche":
          precio = 1000;
          break;
        case "Pan de molde":
          precio = 2000;
          break;
        case "Queso":
          precio = 1200;
          break;
        case "Mermelada":
          precio = 890;
          break;
        case "Azúcar":
          precio = 1300;
          break;
        default:
          break;
      }
    let unidades = parseInt(
      prompt("Cuantas unidades de este producto deseas llevar, Recuerda solo usar numeros (0-9), El uso de letras invalidara tu compra ;)")
    );

    carrito.push({ producto, unidades, precio });
    console.log(carrito);

  } else {
    alert("Ese producto no existe o esta mal escrito, Trata de escribir las Mayusculas y asegurarte de haber escrito los nombres bien, Recuerda, (Leche/Pandemolde/Queso/Mermelada/Azúcar) ");
  }

  //Dejar decision de continuar compra para repetir o no el bucle y finalizar el conteo
  seleccion = prompt("Deseas continuar con tu compra Y/N");

  //en caso de no seguir con la compra aplicar la alerta y provocar que el carro genere un monto total
  while (seleccion == "N") {
    alert("Gracias por su compra, para ver su boleta vaya a su consola, Gracias <3");

    carrito.forEach((carritoFinal) => {
      console.log(
        `"producto:" ${carritoFinal.producto}, "unidades:" ${
          carritoFinal.unidades
        }, "total a pagar por producto:" ${carritoFinal.unidades * carritoFinal.precio}`
      );
    });
    break;
  }
}

// y al final se calcula el total de todos los productos con sus unidades y se genera un rastro en la consola para ver la suma total
const total = carrito.reduce((acc, el) => acc + el.precio * el.unidades, 0)
console.log(`el total a pagar por su compra es de:  ${total}`)