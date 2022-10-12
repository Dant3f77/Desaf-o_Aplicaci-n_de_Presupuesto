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