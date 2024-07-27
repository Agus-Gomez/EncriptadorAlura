// a - ai
// e - enter
// i - imes
// o - ober
// u - ufat

// i afecta mayúsculas y minúsculas
// g toda la oración
// m afecta múltiples lineas/párrafo

function encrypt() {
  var text = document.getElementById("inputText").value;
  var textLow = text.toLowerCase();

  var txtEncrypted = "";
  for (char of textLow) {
    if (char == "a") {
      txtEncrypted = txtEncrypted + "ai";
    } else if (char == "e") {
      txtEncrypted = txtEncrypted + "enter";
    } else if (char == "i") {
      txtEncrypted = txtEncrypted + "imes";
    } else if (char == "o") {
      txtEncrypted = txtEncrypted + "ober";
    } else if (char == "u") {
      txtEncrypted = txtEncrypted + "ufat";
    } else {
      txtEncrypted = txtEncrypted + char;
    }
  }

  document.getElementById("imgRight").style.display = "none";
  document.getElementById("text").style.display = "none";
  document.getElementById("copy").style.display = "show";
  document.getElementById("text2").innerHTML = txtEncrypted;
  document.getElementById("inputText").innerHTML = " ";
  document.getElementById("copy").style.display = "inherit";
}

function decrypt() {
  var text = document.getElementById("inputText").value;
  var textLower = text.toLowerCase();
  var txtEncrypted = textLower.replace(/ai/gim, "a");
  var txtEncrypted = txtEncrypted.replace(/enter/gim, "e");
  var txtEncrypted = txtEncrypted.replace(/imes/gim, "i");
  var txtEncrypted = txtEncrypted.replace(/ober/gim, "o");
  var txtEncrypted = txtEncrypted.replace(/ufat/gim, "u");

  document.getElementById("imgRight").style.display = "none";
  document.getElementById("text").style.display = "none";
  document.getElementById("copy").style.display = "show";
  document.getElementById("text2").innerHTML = txtEncrypted;
  document.getElementById("inputText").innerHTML = " ";
  document.getElementById("copy").style.display = "inherit";
}

function copy() {
  var content = document.querySelector("#text2");
  content.select();
  document.execCommand("cut");
  alert("¡Mensaje copiado con éxito!");
}
