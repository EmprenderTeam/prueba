var bandera=0;
function cambio1(){
    if(bandera==1){
        /* tercero */
        console.log("tercero");
        document.getElementById("text0").style.transition = "all 2s";
        document.getElementById("text1").style.transition = "all 2s";
        document.getElementById("text3").style.transition = "all 2s";
        document.getElementById("text4").style.transition = "all 2s";
        document.getElementById("text6").style.transition = "all 2s";
        document.getElementById("text8").style.transition = "all 2s";
        document.getElementById("img").style.transition = "all 0.5s";

        document.getElementById('titulo').style.backgroundColor="#eb661a";
        document.getElementById('titulo').style.fontSize="16px";
        document.getElementById('titulo').style.margin="10px 0 7px 0";
        document.getElementById('titulo').style.cursor="pointer";
        document.getElementById('titulo').style.color="#eb661a";
        document.getElementById('text0').style.backgroundColor="#ffffff";
        document.getElementById('text1').style.backgroundColor="#000000";
        document.getElementById('text2').style.backgroundColor="#000000";
        document.getElementById('text3').style.backgroundColor="#ffffff";
        document.getElementById('text4').style.backgroundColor="#ffffff";
        document.getElementById('text5').style.backgroundColor="#000000";
        document.getElementById('text6').style.backgroundColor="#000000";
        document.getElementById('text7').style.backgroundColor="#000000";
        document.getElementById('text8').style.backgroundColor="#000000";
        document.getElementById('text8').style.cursor="context-menu";
        document.getElementById('text8').style.color="#000000";
        document.getElementById('text9').style.backgroundColor="#000000";
        document.getElementById('img').style.opacity="0";
        bandera=0;
        debugger;
    }else{
        /* primero */
        console.log("primero");
        document.getElementById("text0").style.transition = "all 2s";
        document.getElementById("text1").style.transition = "all 2s";
        document.getElementById("text3").style.transition = "all 2s";
        document.getElementById("text4").style.transition = "all 2s";
        document.getElementById("text6").style.transition = "all 2s";
        document.getElementById("text8").style.transition = "all 2s";
        document.getElementById("text9").style.transition = "all 2s";
    
        document.getElementById('titulo').style.backgroundColor="#ffffff";
        document.getElementById('titulo').style.fontSize="25px";
        document.getElementById('titulo').style.margin="0 0 17px 0";
        document.getElementById('titulo').style.cursor="context-menu";
        document.getElementById('titulo').style.color="#000000";
        document.getElementById('text0').style.backgroundColor="#000000";
        document.getElementById('text1').style.backgroundColor="#ffffff";
        document.getElementById('text3').style.backgroundColor="#000000";
        document.getElementById('text4').style.backgroundColor="#000000";
        document.getElementById('text6').style.backgroundColor="#ffffff";
        document.getElementById('text8').style.backgroundColor="#eb661a";
        document.getElementById('text8').style.cursor="pointer";
        document.getElementById('text8').style.color="#eb661a";
        document.getElementById('text9').style.backgroundColor="#eb661a";
    }
    console.log(bandera);
}
function cambio2(){
    /* segundo */
    console.log("segundo");
    document.getElementById("text0").style.transition = "all 2s";
    document.getElementById("text1").style.transition = "all 2s";
    document.getElementById("text2").style.transition = "all 2s";
    document.getElementById("text3").style.transition = "all 2s";
    document.getElementById("text4").style.transition = "all 2s";
    document.getElementById("text5").style.transition = "all 2s";
    document.getElementById("text6").style.transition = "all 2s";
    document.getElementById("text7").style.transition = "all 2s";
    document.getElementById("text8").style.transition = "all 2s";
    document.getElementById("text9").style.transition = "all 2s";
    document.getElementById("img").style.transition = "all 6s";

    document.getElementById('titulo').style.cursor="pointer";
    document.getElementById('text0').style.backgroundColor="#ffffff";
    document.getElementById('text1').style.backgroundColor="#ffffff";
    document.getElementById('text2').style.backgroundColor="#ffffff";
    document.getElementById('text3').style.backgroundColor="#ffffff";
    document.getElementById('text4').style.backgroundColor="#ffffff";
    document.getElementById('text5').style.backgroundColor="#ffffff";
    document.getElementById('text6').style.backgroundColor="#ffffff";
    document.getElementById('text7').style.backgroundColor="#ffffff";
    document.getElementById('text8').style.backgroundColor="#ffffff";
    document.getElementById('text8').style.cursor="context-menu";
    document.getElementById('text8').style.color="#000000";
    document.getElementById('text9').style.backgroundColor="#ffffff";
    document.getElementById('img').style.opacity="1";
    bandera=1
    console.log(bandera);
}