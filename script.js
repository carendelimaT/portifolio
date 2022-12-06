document.getElementById("BotaoEnviar").addEventListener("click", validaFormulario) 

function validaFormulario(){
  if(document.getElementById("email").value != ""){alert("Prontinho! Assim que possível, responderei a sua mensagem.")
  }else{
  alert("Por favor, preencha o campo email!")
  }
}