

/* alert(`el numero loco es ${numeroloco} \n multiplicado por 3 es : ${locox3} \n y sumado mas uno es ${locox3 +1}\nel num es ${num}`);
 */

function juego(a) {
    // alert(`tu elegiste ${a}`);
    var numeroloco = Math.random();
    var locox3 = numeroloco * 3;
    var maquina = Math.floor((locox3) + 1);
    var num = maquina.toFixed(0);
    // alert(num);
    var sistema = "";
    var resultado="";
    if (num == 1) {

        sistema = "Piedra";
        // alert(sistema);
    } else if (num == 2) {

        sistema = "Papel";
        // alert(sistema);
    } else {
        // alert(sistema);

        sistema = "Tijera";
        // alert(sistema);
    }
    if (a==sistema) {

        resultado = "Empate";
        document.getElementById("resultado").style.color="grey";
        
    } else if (((a=="Piedra" && sistema=="Tijera")||(a=="Papel" && sistema=="Piedra"))||(a=="Tijera" && sistema=="Papel")) {
resultado="Ganaste";
document.getElementById("resultado").style.color="rgb(98, 223, 14)" ;
    }else{
        resultado="Perdiste";
        document.getElementById("resultado").style.color="red";
    }
    
    document.getElementById("maquina_resultado").innerHTML = sistema;
    document.getElementById("usuario_eleccion").innerHTML = a;
    document.getElementById("resultado").innerHTML = resultado;
    

}