// Prueba para ver como quedan los numeros al costado del carrito
let carrito = document.querySelector("#carrito");
let carritoItems = document.querySelector("#carrito-items");

carritoItems = 0;

carrito.addEventListener("click", () => {
  carritoItems += 1;
  document.querySelector("#carrito-items").innerHTML = carritoItems;
});

// Crear Etiquetas
const crearEtiqueta = (nombre = null, atributos = {}, contenido = "") => {
  if (!nombre) {
    return;
  }

  let etiqueta = document.createElement(nombre);

  for (const atributo in atributos) {
    etiqueta.setAttribute(atributo, atributos[atributo]);
  }

  if (contenido) {
    etiqueta.innerText = contenido;
  }

  return etiqueta;
};

// Productos
const productos = [
  {
    id: "Small-Edit-Malla-Dorado",
    titulo: "Small Edit Malla Dorado",
    imagen: "img/relojes/Small-Edit-Malla-Dorado.png",
    categoria: {
      nombre: "Relojes",
      id: "relojes",
    },
    precio: 99,
  },
  {
    id: "Boxy-XS-Gold",
    titulo: "Boxy XS Gold",
    imagen: "img/relojes/Boxy-XS-Gold.png",
    categoria: {
      nombre: "Relojes",
      id: "relojes",
    },
    precio: 119,
  },
  {
    id: "Pulsera-3-iniciales",
    titulo: "Pulsera 3 iniciales",
    imagen: "img/pulseras/Pulsera-3-iniciales.png",
    categoria: {
      nombre: "Pulseras",
      id: "pulseras",
    },
    precio: 39,
  },
  {
    id: "Wave-Charm-Earring",
    titulo: "Wave Charm Earring",
    imagen: "img/aritos/Wave-Charm-Earring.png",
    categoria: {
      nombre: "Aritos",
      id: "aritos",
    },
    precio: 40,
  },
  {
    id: "Set-dos-Unite-Mother-of-Pearl",
    titulo: "Set de dos Unite Mother of Pearl",
    imagen: "img/collares/Set-dos-Unite-Mother-of-Pearl.png",
    categoria: {
      nombre: "Collares",
      id: "collares",
    },
    precio: 89,
  },
  {
    id: "Brazalete-Doble-Oro",
    titulo: "Brazalete Doble Oro",
    imagen: "img/pulseras/Brazalete-Doble-Oro.png",
    categoria: {
      nombre: "Pulseras",
      id: "pulseras",
    },
    precio: 49,
  },
  {
    id: "Collar-Dúo-Corazones",
    titulo: "Collar Dúo Corazones",
    imagen: "img/collares/Collar-Dúo-Corazones.png",
    categoria: {
      nombre: "Collares",
      id: "collares",
    },
    precio: 59,
  },
  {
    id: "Aros-Esmeralda-con-monedas",
    titulo: "Aros Esmeralda con monedas",
    imagen: "img/aritos/Aros-Esmeralda-con-monedas.png",
    categoria: {
      nombre: "Aritos",
      id: "aritos",
    },
    precio: 45,
  },
  {
    id: "Mercer-Negro-Oro-Rosa",
    titulo: "Mercer Negro Oro Rosa",
    imagen: "img/relojes/Mercer-Negro-Oro-Rosa.png",
    categoria: {
      nombre: "Relojes",
      id: "relojes",
    },
    precio: 90,
  },
  {
    id: "Collar-Con-Moneda-Texturizada",
    titulo: "Collar Con Moneda Texturizada",
    imagen: "img/collares/Collar-Con-Moneda-Texturizada.png",
    categoria: {
      nombre: "Collares",
      id: "collares",
    },
    precio: 45,
  },
  {
    id: "West-Village-Verde-Oro",
    titulo: "West Village Verde Oro",
    imagen: "img/relojes/West-Village-Verde-Oro.png",
    categoria: {
      nombre: "Relojes",
      id: "relojes",
    },
    precio: 129,
  },
  {
    id: "Aros-De-Perla",
    titulo: "Aros De Perla",
    imagen: "img/aritos/Aros-De-Perla.png",
    categoria: {
      nombre: "Aritos",
      id: "aritos",
    },
    precio: 35,
  },
  {
    id: "Pulsera-Verde-Menta",
    titulo: "Pulsera Verde Menta",
    imagen: "img/pulseras/Pulsera-Verde-Menta.png",
    categoria: {
      nombre: "Pulseras",
      id: "pulseras",
    },
    precio: 29,
  },
  {
    id: "Anillo-con-inicial-meñique",
    titulo: "Anillo con inicial meñique",
    imagen: "img/anillos/Anillo-con-inicial-meñique.png",
    categoria: {
      nombre: "Anillos",
      id: "anillos",
    },
    precio: 39,
  },
  {
    id: "Collar-con-colgante",
    titulo: "Collar con colgante",
    imagen: "img/collares/Collar-con-colgante.png",
    categoria: {
      nombre: "Collares",
      id: "collares",
    },
    precio: 59,
  },
  {
    id: "Anillo-Cuadrado",
    titulo: "Anillo Cuadrado",
    imagen: "img/anillos/Anillo-Cuadrado.png",
    categoria: {
      nombre: "Anillos",
      id: "anillos",
    },
    precio: 40,
  },
  {
    id: "Oval-Anillo",
    titulo: "Oval Anillo",
    imagen: "img/anillos/Oval-Anillo.png",
    categoria: {
      nombre: "Anillos",
      id: "anillos",
    },
    precio: 35,
  },
  {
    id: "Octagon-Anillo",
    titulo: "Octagon Anillo",
    imagen: "img/anillos/Octagon-Anillo.png",
    categoria: {
      nombre: "Anillos",
      id: "anillos",
    },
    precio: 49,
  },
  {
    id: "Pulsera-de-eslabones",
    titulo: "Pulsera De Eslabones",
    imagen: "img/pulseras/Pulsera-de-eslabones.png",
    categoria: {
      nombre: "Pulseras",
      id: "pulseras",
    },
    precio: 39,
  },
  {
    id: "Pendientes-Geométricos",
    titulo: "Pendientes Geométricos",
    imagen: "img/aritos/Pendientes-Geométricos.png",
    categoria: {
      nombre: "Aritos",
      id: "aritos",
    },
    precio: 39,
  },
];

const contenedorProductos = document.querySelector("#contenedor-productos");
const botonesCategorias = document.querySelectorAll(".boton-categoria");
let filtros = document.querySelectorAll(".filtros a");

// Agregar productos al HTML
function cargarProductos(productos) {
  contenedorProductos.innerHTML = "";

  productos.forEach((producto) => {
    let div = crearEtiqueta("div", { class: "producto" });
    let img = crearEtiqueta("img", { src: producto.imagen });
    let h3 = crearEtiqueta("h3", { class: "titulo-producto" }, producto.titulo);
    let p = crearEtiqueta(
      "p",
      { class: "precio-producto" },
      `$${producto.precio}`
    );
    let boton = crearEtiqueta(
      "button",
      { class: "boton-producto", id: producto.id },
      "Añadir al carrito"
    );

    div.appendChild(img);
    div.appendChild(h3);
    div.appendChild(p);
    div.appendChild(boton);

    contenedorProductos.appendChild(div);
  });
}

cargarProductos(productos);

// Filtrar productos
botonesCategorias.forEach((boton) => {
  boton.addEventListener("click", (e) => {
    // evitar que se vaya arriba
    e.preventDefault();

    // filtrar productos
    if (e.currentTarget.id != "todos") {
      const productosFiltrados = productos.filter(
        (producto) => producto.categoria.id === e.currentTarget.id
      );
      cargarProductos(productosFiltrados);
    } else {
      cargarProductos(productos);
    }
  });
});

// Estilo de los filtros
filtros.forEach(function (filtro) {
  filtro.addEventListener("click", function (event) {
    // añadir una clase para que se vea seleccionado
    filtros.forEach(function (filtro) {
      filtro.classList.remove("filtro-selec");
    });
    this.classList.add("filtro-selec");
  });
});
