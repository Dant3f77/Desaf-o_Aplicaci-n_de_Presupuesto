function validar(){
    
    var tipo=document.getElementById('tipo');
    
    if (tipo.value==0){
            alert("Selecciona una opción para continuar");
            tipo.focus();
        }else  if (tipo.value==1){
            alert("Ingreso")
        }
        else{
            alert("Egreso")

        }
        
}

var getData = function(){
    var descrip = document.getElementById("descripcion").value
    var monto = document.getElementById("monto").value
    if (descrip=="") {
        var descrip = document.getElementById("descripcion").focus();
    } else {
        if (monto=="") {
            var descrip = document.getElementById("monto").focus();
        } else {
            console.log(descrip+" "+monto);
            var descrip = document.getElementById("descripcion").value="";
            var monto = document.getElementById("monto").value="";
            var descrip = document.getElementById("descripcion").focus();
        }
    }
    
}

