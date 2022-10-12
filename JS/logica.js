function validar(){
    
    var tipo=document.getElementById('tipo');
    
    if (tipo.value==0){
            alert("Selecciona una opción para continuar");
            tipo.focus();
        }
        else{
            var descrip = document.getElementById("descripcion").value
            var monto = document.getElementById("monto").value
            if (descrip=="") {
                var descrip = document.getElementById("descripcion").focus();
            } else {
                if (monto=="") {
                    var descrip = document.getElementById("monto").focus();
                } else {
                    console.log(descrip+" "+monto);
                    document.getElementById("descripcion").value="";
                    document.getElementById("monto").value="";
                    document.getElementById("descripcion").focus();
                }
            }

            if (tipo.value==1){
                
                let h4 = document.createElement('h4');
                h4.textContent = descrip + ": $" + monto;

                let tabla=document.getElementById("historialtable");
                tabla.appendChild(h4);
            }
            else{
                alert("Egreso")
                
    
            }


        }
        
        
       
        
}

var getData = function(){
    
   
    
}


/* metodo de la tabla*/
function genera_tabla() {
    var tblBody = document.getElementById("tbody");
    tblBody.replaceChildren("");
    for(var trans in transaccion){
        var hilera = document.createElement("tr");
        for(var i =0;i<5;i++){
            var celda = document.createElement("td");
            var textoCelda = document.createTextNode(transaccion[trans][i])
            celda.appendChild(textoCelda);
            hilera.appendChild(celda);
        }

        tblBody.appendChild(hilera);
    }
  }

