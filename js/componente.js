function mostrarModal(titulo, mensaje, tipo, textoBoton, tema, tiempo, mostrarBoton, mostrarX) {
  let modalExistente = document.getElementById("fondoModal");

  if (modalExistente != null) {
    modalExistente.remove();
  }

  let fondoModal = document.createElement("div");
  fondoModal.className = "fondoModal";
  fondoModal.id = "fondoModal";

  let modal = document.createElement("div");

  if (tema == "oscuro") {
    modal.className = "modal modalOscuro";
  } else {
    modal.className = "modal modalClaro";
  }

  let botonX = document.createElement("button");
  botonX.className = "botonX";
  botonX.textContent = "X";

  let iconoModal = document.createElement("img");
  iconoModal.className = "iconoModal";

  let botonCerrar = document.createElement("button");
  botonCerrar.className = "botonCerrar";

  let mostrarIcono = true;

  if (tipo == "exito") {
    iconoModal.src = "img/exito.svg";
    botonCerrar.className = "botonCerrar botonExito";
  } else if (tipo == "error") {
    iconoModal.src = "img/error.svg";
    botonCerrar.className = "botonCerrar botonError";
  } else if (tipo == "advertencia") {
    iconoModal.src = "img/advertencia.svg";
    botonCerrar.className = "botonCerrar botonAdvertencia";
  } else if (tipo == "informacion") {
    iconoModal.src = "img/informacion.svg";
    botonCerrar.className = "botonCerrar botonInformacion";
  } else {
    mostrarIcono = false;
  }

  let tituloModal = document.createElement("h2");
  tituloModal.textContent = titulo;

  let mensajeModal = document.createElement("p");
  mensajeModal.textContent = mensaje;

  if (textoBoton == undefined || textoBoton == "") {
    botonCerrar.textContent = "Cerrar";
  } else {
    botonCerrar.textContent = textoBoton;
  }

  botonX.onclick = function () {
    fondoModal.remove();
  };

  botonCerrar.onclick = function () {
    fondoModal.remove();
  };

  fondoModal.onclick = function (evento) {
    if (evento.target == fondoModal) {
      fondoModal.remove();
    }
  };

  if (mostrarX != false) {
    modal.appendChild(botonX);
  }

  if (mostrarIcono == true) {
    modal.appendChild(iconoModal);
  }

  modal.appendChild(tituloModal);
  modal.appendChild(mensajeModal);

  if (mostrarBoton != false) {
    modal.appendChild(botonCerrar);
  }

  fondoModal.appendChild(modal);

  if (tiempo != undefined && tiempo > 0) {
    setTimeout(function () {
      fondoModal.remove();
    }, tiempo);
  }

  document.body.appendChild(fondoModal);
}
