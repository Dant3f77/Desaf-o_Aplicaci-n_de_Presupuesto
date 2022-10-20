var ingresos = []; //arreglo de ingreso
var egresos = []; //arreglo de egreso
document.getElementById('monto').value=0; //ignorar 
document.getElementById('tblegresos').style.display = "none";







function validar(){
    
    var tipo=document.getElementById('tipo');
    
    if (tipo.value==0 ){
            alert("Selecciona una opción para continuar");
            tipo.focus();
        }
        else{
            var descrip = document.getElementById("descripcion").value;
            var monto = document.getElementById("monto").value;
            monto = parseFloat(monto);
            monto = monto.toFixed(2);
           
            if (descrip=="" || descrip==null) {
                alert("ingrese descripcion de la transaccion");
                var descrip = document.getElementById("descripcion").focus();
            } else {
                
                if (monto=="" || monto==0 || monto==null ||isNaN(monto) ) {
                    alert("El valor del monto no es valido");
                    var descrip = document.getElementById("monto").focus();

                } else {
                    console.log(descrip+" "+monto);
                    document.getElementById("descripcion").value="";
                    document.getElementById("monto").value="";
                    document.getElementById("descripcion").focus();
                    
                    if (tipo.value==1){
                
                        
                        ingresos.push([descrip + ": $", monto]); //agrega los datos al arreglo
                        genera_tablaIngresos(); // muestra los datos del arreglo en la tabla
                        
                    }
                    else{
                        egresos.push([descrip + ": $", monto]); //agrega los datos al arreglo
                        genera_tablaEgresos(); // muestra los datos del arreglo en la tabla
                        
            
                    }
                }
            }

          


        }
        
        
       
        
}
var getData = function(){
  
    
}

function ocultar (){ //metodo ocultar
    document.getElementById('tblegresos').style.display = "none";
    document.getElementById('tblingresos').style.display = "table";

    var tblBody = document.getElementById("tbody");
    tblBody.replaceChildren("");
}
function mostrar (){ //metodo mostrar
    document.getElementById('tblegresos').style.display = "table";
    document.getElementById('tblingresos').style.display = "none";  
    
    var tblBody = document.getElementById("tingresos");
    tblBody.replaceChildren("");
}



/* metodo de la tabla*/
function genera_tablaEgresos() {
    var tblBody = document.getElementById("tbody");
    tblBody.replaceChildren("");
    for(var trans in egresos){
        var hilera = document.createElement("tr");
        for(var i =0;i<2;i++){
            var celda = document.createElement("td");
            var textoCelda = document.createTextNode(egresos[trans][i])
            celda.appendChild(textoCelda);
            hilera.appendChild(celda);
        }

        tblBody.appendChild(hilera);
    }
    
  }





/* metodo de la tabla*/
function genera_tablaIngresos() {
    var tblBody = document.getElementById("tingresos");
    tblBody.replaceChildren("");
    for(var trans in ingresos){
        var hilera = document.createElement("tr");
        for(var i =0;i<2;i++){
            var celda = document.createElement("td");
            var textoCelda = document.createTextNode(ingresos[trans][i]+"")
            celda.appendChild(textoCelda);
            hilera.appendChild(celda);
        }

        tblBody.appendChild(hilera);
    }
    
  }
  
  /*Metodo suma ingresos*/
  function genera_sumaIngresos(){
    var total; 
    alert("Hola MUNDO")
    for(var trans in ingresos){
        total+= ingresos[trans][2];
    }
    alert(total);
  }