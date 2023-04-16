$("#file").on("change",function(){
    var imagen = $(this)[0].files[0];
    procesarImagen(imagen,function(result){
       const image = document.querySelector("[data-imagen ]");
       image.style.background ="url(" + result + ") no-repeat center / cover";
       Imagen(result);
    })
})

var procesarImagen = function(imagen, callback){
    var fileReader = new FileReader();
    fileReader.readAsDataURL(imagen);
    fileReader.onload = function(){
        callback(fileReader.result);
    }
}
const Imagen = (resultado) => {
    $("#agrega").on("click", function () {
      const productoLista = JSON.parse(localStorage.getItem("imagen")) || [];
      productoLista.push(resultado);
      localStorage.setItem("imagen", JSON.stringify(productoLista));
    });
};


/*
$imgPreview.style.background ="url(" + objectUrl + ") no-repeat center / cover";

const taskObj = {
  objectUrl,
};


*/