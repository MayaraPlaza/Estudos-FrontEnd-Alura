import { categorias } from "../JS/datos.js";
import { informacion } from "../JS/datos.js";
var numeracion = 1;

const verItem = () => {
  const productoLista = JSON.parse(localStorage.getItem("producto")) || [];
  productoLista.forEach((item) => {
    crearItem(item);
  });
};
const predefinidos = () => {
  for (let i = 0; i < informacion.length; i++) {
    const lista = document.querySelector("[data-lista-productos]");
    const item = document.createElement("li");
    item.classList.add("lista__item");

    const imagen = document.createElement("div");
    imagen.classList.add("tamaño");
    imagen.style.background =
      "url(../" + informacion[i][1] + ") no-repeat center / cover";
    imagen.style.display = "flex";
    imagen.style.flexDirection = "row";
    imagen.style.justifyContent = "flex-end";

    const eliminar = document.createElement("a");
    eliminar.innerHTML = "m";
    eliminar.style.fontSize = "25px";
    eliminar.style.color = "transparent";
    eliminar.style.userSelect = "none";
    const eliminarImg = document.createElement("div");
    eliminarImg.classList.add("lista__eliminar");
    eliminar.setAttribute("href", "#");
    eliminarImg.appendChild(eliminar);

    const editar = document.createElement("a");
    editar.innerHTML = "m";
    editar.style.fontSize = "25px";
    editar.style.color = "transparent";
    editar.style.userSelect = "none";
    const editarImg = document.createElement("div");
    editarImg.classList.add("lista__editar");
    editar.setAttribute("href", "#");
    editarImg.appendChild(editar);

    const Ttitulo = document.createElement("h1");
    Ttitulo.classList.add("lista__titulo");
    Ttitulo.innerText = informacion[i][2];

    const Tprecio = document.createElement("h2");
    Tprecio.classList.add("lista__precio");
    Tprecio.innerText = informacion[i][3];

    const Tnumero = document.createElement("h3");
    Tnumero.classList.add("lista__numero");
    Tnumero.innerText = "#" + numeracion;
    numeracion++;

    lista.appendChild(item);
    imagen.appendChild(eliminarImg);
    imagen.appendChild(editarImg);
    item.appendChild(imagen);
    item.appendChild(Ttitulo);
    item.appendChild(Tprecio);
    item.appendChild(Tnumero);
  }
};
const crearItem = ({
  resultado,
  categoriaValor,
  tituloValor,
  precioValor,
  descripcionValor,
}) => {
  const lista = document.querySelector("[data-lista-productos]");

  const item = document.createElement("li");
  item.classList.add("lista__item");

  const imagen = document.createElement("div");
  imagen.classList.add("tamaño");
  imagen.style.background = "url(" + resultado + ") no-repeat center / cover";
  imagen.style.display = "flex";
  imagen.style.flexDirection = "row";
  imagen.style.justifyContent = "flex-end";

  const eliminarImg = document.createElement("div");
  eliminarImg.classList.add("lista__eliminar");
 
  const eliminar = document.createElement("a");
  eliminar.innerHTML = "m";
  eliminar.style.fontSize = "25px";
  eliminar.style.color = "transparent";
  eliminar.style.userSelect = "none";

  eliminar.setAttribute("href", "#");
  eliminarImg.appendChild(eliminar);

  const editar = document.createElement("a");
  editar.innerHTML = "m";
  editar.style.fontSize = "25px";
  editar.style.color = "transparent";
  editar.style.userSelect = "none";
  const editarImg = document.createElement("div");
  editarImg.classList.add("lista__editar");
  editar.setAttribute("href", "#");
  editarImg.appendChild(editar);

  const Ttitulo = document.createElement("h1");
  Ttitulo.classList.add("lista__titulo");
  Ttitulo.innerText = tituloValor;

  const Tprecio = document.createElement("h2");
  Tprecio.classList.add("lista__precio");
  Tprecio.innerText = precioValor;

  const Tnumero = document.createElement("h3");
  Tnumero.classList.add("lista__numero");
  Tnumero.innerText = "#" + numeracion;
  numeracion++;

  lista.appendChild(item);
  imagen.appendChild(eliminarImg);
  imagen.appendChild(editarImg);
  item.appendChild(imagen);
  item.appendChild(Ttitulo);
  item.appendChild(Tprecio);
  item.appendChild(Tnumero);
};
/*
const categoriasIndex = () => {
  const listaCategorias = document.querySelector("[data-lista-categorias]");
  for (let i = 0; i < categorias.length; i++) {
    const itemC = document.createElement("li");
    itemC.classList.add("lista__item__seccion");

    const seccion = document.createElement("div");
    seccion.classList.add("lista__seccion__encabezado");

    const tituloC = document.createElement("h1");
    tituloC.classList.add("nombre__seccion");
    tituloC.innerText = categorias[i];

    const verTodo = document.createElement("a");
    const verTodoTexto = document.createTextNode("Ver Todo");
    verTodo.classList.add("ver__seccion");
    verTodo.setAttribute("href", "#");

    const listaProductos = document.createElement("ul");
    listaProductos.classList.add("lista__productos");

    listaCategorias.appendChild(itemC);
    itemC.appendChild(seccion);
    itemC.appendChild(listaProductos);
    seccion.appendChild(tituloC);
    seccion.appendChild(verTodo);
    verTodo.appendChild(verTodoTexto);
    for (j = 0; j < informacion.length; j++) {
      if (informacion[j][0] == categorias[i]) {
        listaProductos.appendChild(juegosIndex(j));
      }
    }
  }
};

const juegosIndex = (i) => {
  const item = document.createElement("li");
  item.classList.add("lista__item__producto");

  const imagen = document.createElement("div");
  imagen.style.width = "176px";
  imagen.style.height = "240px";
  imagen.style.background =
    "url(" + informacion[i][1]+ ") no-repeat center / cover";
  const titulo = document.createElement("h1");
  titulo.classList.add("nombre__producto");
  if(i < informacion.length){
    titulo.innerText = informacion[i][2];
  }else{
    titulo.innerText = tituloValor;
  }
  const precio = document.createElement("h2");
  precio.classList.add("precio__producto");
  precio.innerText = informacion[i][3];

  const verMas = document.createElement("a");
  const verMasTexto = document.createTextNode("Ver producto");
  verMas.classList.add("ver__producto");
  verMas.setAttribute("href", "#");

  item.appendChild(imagen);
  item.appendChild(titulo);
  item.appendChild(precio);
  item.appendChild(verMas);
  verMas.appendChild(verMasTexto);
  return item;
};
*/
predefinidos();
verItem();
