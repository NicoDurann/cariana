// Prueba para ver como quedan los numeros al costado del carrito
let carrito = document.querySelector("#carrito");
let carritoItems = document.querySelector("#carrito-items");

carritoItems = 0;

carrito.addEventListener("click", () => {
  carritoItems += 1;
  document.querySelector("#carrito-items").innerHTML = carritoItems;
});

// Prueba filtros

let filtros = document.querySelectorAll(".filtros a");

filtros.forEach(function (filtro) {
  filtro.addEventListener("click", function (event) {
    // evitar que se vaya arriba
    event.preventDefault();
    console.log("click");

    // añadir una clase para que se vea seleccionado
    filtros.forEach(function (filtro) {
      filtro.classList.remove("filtro-selec");
    });

    this.classList.add("filtro-selec");
  });
});
