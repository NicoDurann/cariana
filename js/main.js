"use strict";

// Nicolás Durán

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
    descripcion:
      "El Small Edit Malla Dorado fusiona elegancia y simplicidad, convirtiéndolo en un accesorio versátil para cualquier ocasión. Su estilo distintivo añade un toque de sofisticación a tu vestimenta diaria.",
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
    descripcion:
      "Elegancia compacta en dorado. El Boxy XS Gold ofrece un diseño minimalista con una esfera dorada y pulsera de malla, aportando estilo sutil y sofisticado a cualquier ocasión.",
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
    descripcion:
      "Personalización minimalista. La pulsera ideal para llevar hasta tres iniciales con estilo y significado. Un accesorio único que destaca tu individualidad.",
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
    descripcion:
      "Estos aritos destacan por su estilo único y moderno, capturando la esencia de la elegancia con un toque de sofisticación. Perfectos para complementar cualquier conjunto con un toque de movimiento y estilo.",
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
    descripcion:
      "Elegancia en pareja. Este conjunto de dos piezas presenta la sutileza del nácar en collares versátiles, ofreciendo un toque clásico y moderno en un solo accesorio.",
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
    descripcion:
      "Este accesorio aporta un toque de sofisticación y estilo a tu muñeca, ideal para realzar tu look con un toque moderno y versátil.",
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
    descripcion:
      "Un collar encantador con un dúo de corazones. Este accesorio celebra el amor y la elegancia con un diseño delicado y romántico. Perfecto para expresar sentimientos y emociones.",
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
    descripcion:
      "Estos aretes combinan el encanto clásico con un toque bohemio, creando una pieza única y llamativa. Ideales para añadir un destello de color y originalidad a tu estilo.",
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
    descripcion:
      "El reloj Mercer Negro Oro Rosa combina la sofisticación del negro con la calidez del oro rosa, creando un diseño moderno y atemporal.",
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
    descripcion:
      "Este accesorio agrega un toque de estilo bohemio y originalidad a tu conjunto diario. Perfecto para quienes buscan un detalle distintivo",
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
    descripcion:
      "El West Village Verde Oro es una declaración de estilo, combinando un diseño moderno con la belleza clásica. ",
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
    descripcion:
      "Estos aros añaden un toque de elegancia clásica a tu estilo, perfectos para cualquier ocasión. Un accesorio sutil y encantador que completa tu look.",
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
    descripcion:
      "Este accesorio aporta un toque de color y vitalidad a tu muñeca, creando un estilo vibrante y a la moda. Perfecta para complementar atuendos tanto casuales como más elegantes.",
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
    descripcion:
      "Un anillo personalizado que destaca en el dedo meñique. Con una inicial delicadamente grabada, este anillo agrega un toque personal y elegante a tu estilo. ",
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
    descripcion:
      "Este accesorio presenta un colgante elegante, añadiendo un toque de distinción a tu cuello. Perfecto para realzar tu estilo diario con un elemento simple y encantador.",
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
    descripcion:
      "Este accesorio moderno y elegante destaca en tu mano con su diseño distintivo. Perfecto para quienes buscan agregar un toque de estilo contemporáneo a su colección de joyas.",
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
    descripcion:
      "Este accesorio destaca por su diseño clásico y atemporal, perfecto para complementar cualquier conjunto con un toque refinado y elegante.",
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
    descripcion:
      "Este accesorio moderno y distintivo añade un toque de originalidad a tu estilo. Ideal para quienes buscan una pieza de joyería que combine la elegancia con la audacia geométrica.",
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
    descripcion:
      "Este accesorio clásico y versátil agrega un toque de elegancia a tu muñeca. Perfecta para complementar cualquier atuendo, desde casual hasta más formal.",
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
    descripcion:
      "Estos accesorios modernos destacan por su diseño único, agregando un toque contemporáneo a tu apariencia. Perfectos para quienes buscan un estilo original y distintivo.",
  },
];

const contenedorProductos = document.querySelector("#contenedor-productos");
const botonesCategorias = document.querySelectorAll(".boton-categoria");
let filtros = document.querySelectorAll(".filtros a");
let botonProducto = document.querySelectorAll(".boton-producto");

// Prueba para ver como quedan los numeros al costado del carrito
let carrito = document.querySelector("#carrito");
let carritoItems = document.querySelector("#carrito-items");
carritoItems = 0;

// Agregar productos al HTML
function cargarProductos(productos) {
  contenedorProductos.innerHTML = "";

  productos.forEach((producto) => {
    let div = crearEtiqueta("div", { class: "producto" });
    let divInfo = crearEtiqueta("div", { class: "info-producto" });
    let img = crearEtiqueta("img", {
      src: producto.imagen,
      alt: producto.titulo,
    });
    let h3 = crearEtiqueta("h3", { class: "titulo-producto" }, producto.titulo);
    let h4 = crearEtiqueta(
      "h4",
      { class: "categoria-producto" },
      producto.categoria.nombre
    );
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

    // Eventos
    divInfo.addEventListener("click", (e) => {
      abrirModal(producto);
    });

    boton.addEventListener("click", () => {
      // Agregar la lógica para agregar el producto al carrito
      // Llamar a una función que maneje la lógica del carrito.
      console.log("Producto agregado al carrito:", producto);
      carritoItems += 1;
      document.querySelector("#carrito-items").innerHTML = carritoItems;
    });

    // Añadir al archivo
    divInfo.appendChild(img);
    divInfo.appendChild(h3);
    divInfo.appendChild(h4);
    divInfo.appendChild(p);

    div.appendChild(divInfo);
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

// Modal producto
function crearModalProducto(producto) {
  // Crear modal
  let modalProducto = crearEtiqueta("div", {
    class: "modalProducto",
    id: "modalProducto",
  });
  let div = crearEtiqueta("div");
  let botonCerrar = crearEtiqueta("button", { class: "cerrar" }, "X");
  let img = crearEtiqueta("img", {
    src: producto.imagen,
    alt: producto.titulo,
  });
  let divInfo = crearEtiqueta("div", { class: "info" });
  let h3 = crearEtiqueta("h3", { class: "titulo-modal" }, producto.titulo);
  let h4 = crearEtiqueta(
    "h4",
    { class: "categoria-producto" },
    producto.categoria.nombre
  );
  let pPrecio = crearEtiqueta(
    "p",
    { class: "precio-modal" },
    `$${producto.precio}`
  );
  let pDescripcion = crearEtiqueta(
    "p",
    { class: "descripcion" },
    producto.descripcion
  );
  let botonAgregar = crearEtiqueta(
    "button",
    { class: "boton-producto" },
    "Agregar al carrito"
  );

  // Cerrar modal
  botonCerrar.addEventListener("click", () => {
    modalProducto.remove();
  });

  botonAgregar.addEventListener("click", () => {
    // Agregar la lógica para agregar el producto al carrito
    // Llamar a una función que maneje la lógica del carrito.
    console.log("Producto agregado al carrito (modal):", producto);
    carritoItems += 1;
    document.querySelector("#carrito-items").innerHTML = carritoItems;
  });

  divInfo.appendChild(h3);
  divInfo.appendChild(h4);
  divInfo.appendChild(pPrecio);
  divInfo.appendChild(pDescripcion);
  divInfo.appendChild(botonAgregar);

  div.appendChild(botonCerrar);
  div.appendChild(img);
  div.appendChild(divInfo);

  modalProducto.appendChild(div);

  // Agregar el modal al cuerpo del documento
  document.body.appendChild(modalProducto);
}

//  Abir modal

function abrirModal(producto) {
  crearModalProducto(producto);
}
