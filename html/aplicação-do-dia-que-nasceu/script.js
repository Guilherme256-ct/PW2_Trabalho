function Exibir(){
    var dia=document.getElementById("dia_nasc").value;
    var mes=document.getElementById("mes_nasc").value;
    var ano=document.getElementById("ano_nasc").value;
    var hoje= new Date();
    var mesExtenso=new Array("Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Desembro");
    
    //Checa o dia
    if(isNaN(dia) || dia==""){
        alert("Forneça um dia válido!");
        document.getElementById("dia_nasc").focus();
    }
    //Checa o mês
    else if(isNaN(mes) || mes==""){
        alert("Forneça um mês válido de 1 a 12");
        document.getElementById("mes_nasc").focus();
    }
    //checa o ano
    else if(isNaN(ano) || ano==""){
        alert("Forneça um ano válido!");
        document.getElementById("ano_nasc").focus();
    }
    else{
        dia=parseFloat(dia);
        mes=parseFloat(mes);
        ano=parseFloat(ano);
        
        //checa se o ano, mes e dia são inteiros e se estão corretos
        if(ano%1!=0){
            alert("Forneça um ano válido que seja INTEIRO!");
            document.getElementById("ano_nasc").focus();
        }
        else if(mes%1!=0 || mes>12 || mes<1){
            alert("Forneça um mês válido que seja INTEIRO e entre 1 e 12!");
            document.getElementById("mes_nasc").focus();
        }
        else if(dia%1!=0 || dia>31 || dia<1){
            alert("Forneça um dia válido que seja INTEIRO e entre 1 e 31!");
            document.getElementById("dia_nasc").focus(); 
        }
        else{
            
            ano=eval(ano);
            if(maxlength(ano)!=4){
                alert("Forneça um ano válido com comprimento de 4!")
            }
            else{
                alert("b");
                ano=parseInt(ano);
                mes=parseInt(mes)-1;
                dia=parseInt(dia);
                document.getElementById("mes_texto").value=mesExtenso[mes];
                alert("QUEJO");
            }
        }
    }
}