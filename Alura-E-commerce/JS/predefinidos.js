import { categorias } from "../JS/datos.js";
import { informacion } from "../JS/datos.js";

const local = [];
const verItem = () => {
  const productoLista = JSON.parse(localStorage.getItem("producto")) || [];
  productoLista.forEach((item) => {
    local.push(item);
  });
  categoriasIndex();
};
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
    verTodo.innerHTML = "Ver Todo&#9758;";
    verTodo.classList.add("ver__seccion");
    verTodo.setAttribute("href", "screems/ver-todo.html");

    verTodo.addEventListener("click", ()=>{
      const valor = categorias[i];
      const obj = {
        valor
      }
      localStorage.removeItem("todo");
      const verTo = JSON.parse(localStorage.getItem("todo")) || [];
      verTo.push(obj);
      localStorage.setItem("todo", JSON.stringify(verTo));
    })
    const listaProductos = document.createElement("ul");
    listaProductos.classList.add("lista__productos");

    listaCategorias.appendChild(itemC);
    itemC.appendChild(seccion);
    itemC.appendChild(listaProductos);
    seccion.appendChild(tituloC);
    seccion.appendChild(verTodo);
    var numero = 0;
    for (let j = 0; j < informacion.length; j++) {
      if (informacion[j][0] == categorias[i] && numero < 6){
        listaProductos.appendChild(juegosIndex(j));
        numero++;
      }
    }
    
    for (let k = 0; k < local.length; k++) {
      //console.log(local[k].resultado);
      if (local[k].categoriaValor == categorias[i] && numero < 6) {
        listaProductos.appendChild(
          agregados(
            local[k].resultado,
            local[k].tituloValor,
            local[k].precioValor,
            local[k].descripcionValor,
            local[k].categoriaValor
          )
        );
      }
    }
  }
};

const juegosIndex = (i) => {
  const item = document.createElement("li");
  item.classList.add("lista__item__producto");

  const imagen = document.createElement("div");
  imagen.classList.add("tamaño");
  imagen.style.background =
    "url(" + informacion[i][1] + ") no-repeat center / cover";

  const titulo = document.createElement("h1");
  titulo.classList.add("nombre__producto");
  titulo.innerText = informacion[i][2];

  const precio = document.createElement("h2");
  precio.classList.add("precio__producto");
  precio.innerText = "$" + informacion[i][3] + " COP";

  const verMas = document.createElement("a");
  verMas.innerHTML = "Ver producto";
  verMas.classList.add("ver__producto");
  verMas.setAttribute("href", "screems/ver-producto.html");

  const cat = informacion[i][0];
  const imag = informacion[i][1];
  const tit = informacion[i][2];
  const pre = informacion[i][3];
  const des = informacion[i][4];
  verMas.addEventListener("click", (e)=>{
    localStorage.removeItem("ver");
    const taskObj = {
      cat,
      imag,
      tit,
      pre,
      des
    };

    const verPro = JSON.parse(localStorage.getItem("ver")) || [];
    verPro.push(taskObj);
    localStorage.setItem("ver", JSON.stringify(verPro));
  });
  
  item.appendChild(imagen);
  item.appendChild(titulo);
  item.appendChild(precio);
  item.appendChild(verMas);
  return item;
};

const agregados = (resultado, tituloValor, precioValor, descripcionValor, categoriaValor) => {
  const item = document.createElement("li");
  item.classList.add("lista__item__producto");

  const imagen = document.createElement("div");
  imagen.classList.add("tamaño");
  imagen.style.background = "url(" + resultado + ") no-repeat center / cover";

  const titulo = document.createElement("h1");
  titulo.classList.add("nombre__producto");
  titulo.innerText = tituloValor;

  const precio = document.createElement("h2");
  precio.classList.add("precio__producto");
  precio.innerText = "$" + precioValor + " COP";

  const verMas = document.createElement("a");
  const verMasTexto = document.createTextNode("Ver producto");
  verMas.classList.add("ver__producto");
  verMas.setAttribute("href", "screems/ver-producto.html");

  const cat = categoriaValor;
  const imag = resultado;
  const tit = tituloValor;
  const pre = precioValor;
  const des = descripcionValor;
  verMas.addEventListener("click", (e) => {
    localStorage.removeItem("ver");
    console.log(categoriaValor);
    const taskObj = {
      cat,
      imag,
      tit,
      pre,
      des,
    };

    const verPro = JSON.parse(localStorage.getItem("ver")) || [];
    verPro.push(taskObj);
    localStorage.setItem("ver", JSON.stringify(verPro));
  });

  item.appendChild(imagen);
  item.appendChild(titulo);
  item.appendChild(precio);
  item.appendChild(verMas);
  verMas.appendChild(verMasTexto);
  return item;
};
verItem();
