import { informacion } from "../JS/datos.js"; 
const imagen = document.querySelector("[data-imagen-producto]");
const titulo = document.querySelector("[data-titulo-producto]");
const precio = document.querySelector("[data-precio-producto]");
const descripcion = document.querySelector("[data-descripcion-producto]");
var categoria = "";
var titu = "";
var numero = 0;
const verItem = () => {
  const verProducto = JSON.parse(localStorage.getItem("ver")) || [];
  verProducto.forEach((item) => {
    crearItem(item);
  });
};
const verLocal = () =>{
  const productoLocal = JSON.parse(localStorage.getItem("producto")) || [];
  productoLocal.forEach((item) => {
    similaresLocal(item);
  });
}
const crearItem = ({ imag, tit, pre, des, cat}) => {
  imagen.classList.add("imagen_producto");
  if(imag.includes("assets")){
    imagen.style.background = "url('../" + imag + "') no-repeat center / contain";
  }else{
   imagen.style.background = "url('" + imag + "') no-repeat center / contain";
  }
  titulo.innerText = tit;
  precio.innerText = "$" + pre + " COP";
  descripcion.innerText = des;

  categoria = cat;
  titu = tit;
  similares();
};
const similares = ()=>{
  const lista = document.querySelector("[data-productos-similares]");
  for(let i = 0; i < informacion.length; i++){
    if(categoria == informacion[i][0] && titu != informacion[i][2] && numero < 6) {
      const item = document.createElement("li");
      item.classList.add("lista__item__producto");

      const imagen = document.createElement("div");
      imagen.classList.add("tamaño");
      imagen.style.background =
        "url(../" + informacion[i][1] + ") no-repeat center / cover";

      const titulo = document.createElement("h1");
      titulo.classList.add("nombre__producto");
      titulo.innerText = informacion[i][2];

      const precio = document.createElement("h2");
      precio.classList.add("precio__producto");
      precio.innerText = "$" + informacion[i][3] + " COP";

      const verMas = document.createElement("a");
      verMas.innerHTML = "Ver producto";
      verMas.classList.add("ver__producto");
      verMas.setAttribute("href", "ver-producto.html");

      const cat = informacion[i][0];
      const imag = informacion[i][1];
      const tit = informacion[i][2];
      const pre = informacion[i][3];
      const des = informacion[i][4];
      verMas.addEventListener("click", (e) => {
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

      lista.appendChild(item);
      item.appendChild(imagen);
      item.appendChild(titulo);
      item.appendChild(precio);
      item.appendChild(verMas);
      numero++;
    }
  }
}

const similaresLocal = ({resultado, tituloValor, precioValor, categoriaValor, descripcionValor}) => {
  const lista = document.querySelector("[data-productos-similares]");
  if (categoria == categoriaValor && titu != tituloValor && numero < 6) {
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
    verMas.innerHTML = "Ver producto";
    verMas.classList.add("ver__producto");
    verMas.setAttribute("href", "ver-producto.html");

    const cat = categoriaValor;
    const imag = resultado;
    const tit = tituloValor;
    const pre = precioValor;
    const des = descripcionValor;
    verMas.addEventListener("click", (e) => {
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

    lista.appendChild(item);
    item.appendChild(imagen);
    item.appendChild(titulo);
    item.appendChild(precio);
    item.appendChild(verMas);
    numero++;
  }
};
verItem();
verLocal();