const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");
const muneco = document.querySelector(".muneco");
const copiar = document.querySelector(".btn-copiar");
const aviso = document.querySelector(".text-aviso");

/*
La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"
*/

function btnEncriptar() {
  const textoEncriptado = encriptar(textArea.value);
  mensaje.value = textoEncriptado;
  textArea.value = "";
  muneco.style.visibility = "hidden";
  aviso.style.visibility = "hidden";
  mensaje.style.visibility = "visible";
  copiar.style.visibility = "visible";
}

function encriptar(stringEncriptada) {
  let matrizCodigo = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
  ];

  stringEncriptada = stringEncriptada.toLowerCase();

  for (let index = 0; index < matrizCodigo.length; index++) {
    if (stringEncriptada.includes(matrizCodigo[index][0])) {
      stringEncriptada = stringEncriptada.replaceAll(
        matrizCodigo[index][0],
        matrizCodigo[index][1]
      );
    }
  }

  return stringEncriptada;
}

function btnDesencriptar() {
  const textoEncriptado = desencriptar(textArea.value);
  mensaje.value = textoEncriptado;
  textArea.value = "";
  muneco.style.visibility = "hidden";
  aviso.style.visibility = "hidden";
  mensaje.style.visibility = "visible";
  copiar.style.visibility = "visible";
}

function desencriptar(stringDesencriptada) {
  let matrizCodigo = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
  ];

  stringDesencriptada = stringDesencriptada.toLowerCase();

  for (let index = 0; index < matrizCodigo.length; index++) {
    if (stringDesencriptada.includes(matrizCodigo[index][1])) {
      stringDesencriptada = stringDesencriptada.replaceAll(
        matrizCodigo[index][1],
        matrizCodigo[index][0]
      );
    }
  }

  return stringDesencriptada;
}

/*
fenterlimescimesdaidenters poberr enternfrenterntair enterstenter dentersaifimesober y haibenterrlober cobernclufatimesdober cobern enterximestober!
*/

function btnCopiar() {
  mensaje.value = "";
  textArea.value = "";
  muneco.style.visibility = "visible";
  aviso.style.visibility = "visible";
  mensaje.style.visibility = "hidden";
  copiar.style.visibility = "hidden";
}
