function reiniciarJogo() {
    window.location.reload()
}

$('#digita_chute, #insere_palavra').keypress(function(e) {
    var keyCode = (e.keyCode ? e.keyCode : e.which); 

    if (!(keyCode > 64 && keyCode < 91 || keyCode > 96 && keyCode < 123)) {
      e.preventDefault();
      alert('Letra Não Permitida')
    }
})

function maxLen(input) {
  if (input.value.length > 1) {
    input.value = input.value.slice(0, 1);
  }
}