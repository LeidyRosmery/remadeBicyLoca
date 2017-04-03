  var input=document.getElementsByTagName("input");
  console.log(input);
  var validaLetras = function(e){
		var codigoTecla = e.keyCode;
		if((codigoTecla>=97 && codigoTecla<=122) || (codigoTecla>=65 && codigoTecla<=90)|| codigoTecla==39 || codigoTecla == 32){
      this.nextElementSibling.style.display="none";
      //this.nextElementSibling.innerText = "";
			return true;
		}else{
      this.nextElementSibling.style.display="inline-block";
			this.nextElementSibling.innerText = "Este campo solo permite letras";
			return false;
		}
	}

  var convierte=function(e){
    if(e.target.value.length==0){
     this.nextElementSibling.style.display="inline-block";
     this.nextElementSibling.innerText = "Este no puede estar vacio";

    }
    else if(this.getAttribute("type")=="text"){
      var arrDato = this.value.split(" ");
      var datoConMayusculas = "";
      for(var i = 0; i<arrDato.length;i++){
        datoConMayusculas += arrDato[i].charAt(0).toUpperCase() + arrDato[i].substring(1).toLowerCase() + " ";
      }
      this.value=datoConMayusculas.trim();

      //this.nextElementSibling.innerText = " ";
    }
}

var validaCorreo=function(e){
  if (e.target.value.length<6) {
    this.nextElementSibling.style.display="inline-block";
    this.nextElementSibling.innerText = "La contraseña debe contener al menos 6 caracteres";
  }else {
   this.nextElementSibling.style.display="none";
  }
  if(e.target.value=="password" || e.target.value=="123456"|| e.target.value=="098754" ){
      this.nextElementSibling.style.display="none";
      this.nextElementSibling.style.display="inline-block";
      this.nextElementSibling.innerText = "Ingrese una contraseña diferente";
  }
}

input[0].onkeypress=validaLetras;
input[1].onkeypress=validaLetras;
input[0].onblur=convierte;
input[1].onblur=convierte;
input[3].onblur=validaCorreo;

//input[1].onblur=convierte;
