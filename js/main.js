  var input = document.getElementsByTagName("input");
  var opcion = document.getElementById("opcion");
  var redexCorreo = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
  console.log(input);
  var validaLetras = function(e) {
      var codigoTecla = e.keyCode;
      if ((codigoTecla >= 97 && codigoTecla <= 122) || (codigoTecla >= 65 && codigoTecla <= 90) || codigoTecla == 39 || codigoTecla == 32) {
          this.nextElementSibling.style.display = "none";
          //this.nextElementSibling.innerText = "";
          return true;
      } else {
          this.nextElementSibling.style.display = "inline-block";
          this.nextElementSibling.innerText = "Este campo solo permite letras";
          return false;
      }
  }

  var convierte = function(e) {
      if (e.target.value.length == 0) {
          this.nextElementSibling.style.display = "inline-block";
          this.nextElementSibling.innerText = "Este no puede estar vacio";

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
      console.log(e.target.value);
      if (e.target.value == 0) {
          this.nextElementSibling.style.display = "inline-block";
          this.nextElementSibling.innerText = "Debes seleccionar al menos un tipo de Bicicleta";
      } else {
          this.nextElementSibling.style.display = "none"
      }
  }
  input[0].onkeypress = validaLetras;
  input[0].onblur = convierte;
  input[1].onkeypress = validaLetras;
  input[1].onblur = convierte;
  input[2].onblur = validaCorreo;
  input[3].onblur = validaPass;
  opcion.onblur = validaSeleccion;
  //input[1].onblur=convierte;
