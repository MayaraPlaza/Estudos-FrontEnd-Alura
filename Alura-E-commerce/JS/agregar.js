const imagen = document.querySelector("[data-file]");
const categoria = document.querySelector("[data-form-categoria]");
const titulo = document.querySelector("[data-form-titulo]");
const precio = document.querySelector("[data-form-precio]");
const descripcion = document.querySelector("[data-form-descripcion]");
const boton = document.querySelector("[data-form-boton]");
const cate = ["Juegos","Consolas","Pc"];
var img = "";
$("#file").on("change", function () {
  var imagen = $(this)[0].files[0];
  procesarImagen(imagen, function (result) {
    const image = document.querySelector("[data-imagen ]");
    image.style.background = "url(" + result + ") no-repeat center / cover";
    img = result;
  });
});

var procesarImagen = function (imagen, callback) {
  var fileReader = new FileReader();
  fileReader.readAsDataURL(imagen);
  fileReader.onload = function () {
    callback(fileReader.result);
  };
};


const agregraProducto = () => {
  const categoriaValor = categoria.value;
  const tituloValor = titulo.value;
  const precioValor = precio.value;
  const descripcionValor = descripcion.value;
  const resultado = img;
  const taskObj = {
    resultado,
    categoriaValor,
    tituloValor,
    precioValor,
    descripcionValor,
  };

  const productoLista = JSON.parse(localStorage.getItem("producto")) || [];
  productoLista.push(taskObj);
  localStorage.setItem("producto", JSON.stringify(productoLista));
};
boton.addEventListener("click", agregraProducto);
const categoriaSelect = () =>{
  for(let i = 0; i < cate.length; i++){
    const opcion = document.createElement("option");
    opcion.innerText = cate[i];
    categoria.appendChild(opcion);
  }
}

categoriaSelect();