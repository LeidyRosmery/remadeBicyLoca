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
    if(input[0].value.length==0){
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
      this.nextElementSibling.style.display="none";
      //this.nextElementSibling.innerText = " ";
    }


    }


input[0].onkeypress=validaLetras;
input[1].onkeypress=validaLetras;
input[0].onblur=convierte;
//input[1].onblur=convierte;
