/*
"Chaves" de criptografia:
-A letra "e" é convertida para "enter"
-A letra "i" é convertida para "imes"
-A letra "a" é convertida para "ai"
-A letra "o" é convertida para "ober"
-A letra "u" é convertida para "ufat"

Requisitos:
-Deve funcionar apenas com letras minúsculas
-Não devem ser utilizados letras com acentos nem caracteres especiais
-Deve ser possível converter uma palavra para a versão criptografada e também retornar uma palavra criptografada para a versão original.
- A página deve ter campos para inserção do texto a ser criptografado ou descriptografado, e a pessoa usuária deve poder escolher entre as duas opções
-O resultado deve ser exibido na tela.
-Um botão que copie o texto criptografado/descriptografado para a área de transferência
*/
function btnEncriptar() {
  const inputTexto = document.querySelector(".input-texto");
  const mensagem = document.querySelector(".mensagem");
  const textoEncriptado = encriptar(inputTexto.value);
  mensagem.value = textoEncriptado;
  document.style.backgroundImage = "none";
}

function encriptar(stringEncriptada) {
  let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
  stringEncriptada = stringEncriptada.toLowerCase();

  for (let i = 0; i < matrizCodigo.length; i++) {
    if (stringEncriptada.includes(matrizCodigo[i][0])) {
      stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
    }
  }
  return stringEncriptada;
}

function btnDesencriptar() {
  const inputTexto = document.querySelector(".input-texto");
  const mensagem = document.querySelector(".mensagem");
  const textoDesencriptado = desencriptar(inputTexto.value);
  mensagem.value = textoDesencriptado;
}

function desencriptar(stringDesencriptada) {
  let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
  stringDesencriptada = stringDesencriptada.toLowerCase();

  for (let i = 0; i < matrizCodigo.length; i++) {
    if (stringDesencriptada.includes(matrizCodigo[i][1])) {
      stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
    }
  }
  return stringDesencriptada;
}

function copiar(textoDesencriptado) {
  
}