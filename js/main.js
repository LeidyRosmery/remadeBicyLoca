  var input = document.getElementsByTagName("input");
  var spans = document.getElementsByTagName("span");
  var opcion = document.getElementById("opcion1");
  var registrar = document.getElementById("registrar");
  var redexCorreo = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
  var validaLetras = function(e) {
      var codigoTecla = e.keyCode;
      if ((codigoTecla >= 97 && codigoTecla <= 122) || (codigoTecla >= 65 && codigoTecla <= 90) || codigoTecla == 39 || codigoTecla == 32) {
          e.target.nextElementSibling.style.display = "none";
          //this.nextElementSibling.innerText = "";
          return true;
      } else {
          e.target.nextElementSibling.style.display = "inline-block";
          e.target.nextElementSibling.innerText = "Este campo solo permite letras";
          return false;
      }
  }

  var convierte = function(e) {
      if (e.target.value.length == 0) {
          e.target.nextElementSibling.style.display = "inline-block";
          e.target.nextElementSibling.innerText = "Este campo es requerido";

      } else if (this.getAttribute("type") == "text") {
          var arrDato = this.value.split(" ");
          var datoConMayusculas = "";
          for (var i = 0; i < arrDato.length; i++) {
              datoConMayusculas += arrDato[i].charAt(0).toUpperCase() + arrDato[i].substring(1).toLowerCase() + " ";
          }
          this.value = datoConMayusculas.trim();

          //this.nextElementSibling.innerText = " ";
      }
  }

  var validaPass = function(e) {
      if (e.target.value.length < 6) {
          this.nextElementSibling.style.display = "inline-block";
          this.nextElementSibling.innerText = "La contraseña debe contener al menos 6 caracteres";
      } else {
          this.nextElementSibling.style.display = "none";
      }
      if (e.target.value == "password" || e.target.value == "123456" || e.target.value == "098754") {
          this.nextElementSibling.style.display = "none";
          this.nextElementSibling.style.display = "inline-block";
          this.nextElementSibling.innerText = "Ingrese una contraseña diferente";
      }
  }

  var validaCorreo = function(e) {

      if (redexCorreo.test(e.target.value)) {
          this.nextElementSibling.style.display = "none";
      } else {
          this.nextElementSibling.style.display = "inline-block";
          this.nextElementSibling.innerText = "Ingrese un correo valido";
      }
  }

  var validaSeleccion = function(e) {
      if (this.value == "") {
          spans[4].style.display = "inline-block";
          spans[4].innerText = "Debes seleccionar al menos un tipo de Bicicleta";
      } else {
          spans[4].style.display = "none"
      }
  }

  function validateForm() {
      for (var i = 0; i < 4; i++) {
          if (input[i].value == "") {
              spans[i].style.display = "inline-block";
              spans[i].innerText = " * Este campo es obligatorio ";
          }
      }
      if (opcion.value == "") {
          spans[4].style.display = "inline-block";
          spans[4].innerText = "Debes seleccionar al menos un tipo de Bicicleta";
      } else {
          spans[4].style.display = "none";
      }

      if (spans[0].style.display == "none" && spans[1].style.display == "none" && spans[2].style.display == "none" && spans[3].style.display == "none" && spans[4].style.display == "none") {
          alert("SUS DATOS FUERON REGISTRADOS CORRECTAMENTE");
          document.getElementById("formulario").reset();
      }
  }

  input[0].onkeypress = validaLetras;
  input[0].onblur = convierte;
  input[1].onkeypress = validaLetras;
  input[1].onblur = convierte;
  input[2].onblur = validaCorreo;
  input[3].onblur = validaPass;
  opcion.onblur = validaSeleccion;
