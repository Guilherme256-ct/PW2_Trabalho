function Exibir(){
    var dia=document.getElementById("dia_nasc").value;
    var mes=document.getElementById("mes_nasc").value;
    var ano=document.getElementById("ano_nasc").value;
    var hoje= new Date();

    var dia_hoje= hoje.getDate();
    var mes_hoje = hoje.getMonth()+1;
    var ano_hoje = hoje.getFullYear();

    var mesExtenso=new Array("Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Desembro");
    var diaExtenso=new Array("Domingo","Segunda","Terça","Quarta","Quinta","Sexta","Sábado");
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
    else if(ano.length<4 || ano.length>4){
        alert("Forneça um ano válido com comprimento de 4!");
        document.getElementById("ano_nasc").focus();
    }
    else{
        dia=parseInt(dia);
        mes=parseInt(mes-1);
        ano=eval(ano);
        ano=parseInt(ano);
        
        hoje.setDate(dia);
        hoje.setMonth(mes);
        hoje.setFullYear(ano);

        //checa se o ano, mes e dia são inteiros e se estão corretos
        
        if(mes>12 || mes<0){
            alert("Forneça um mês válido que seja INTEIRO e entre 1 e 12!");
            document.getElementById("mes_nasc").focus();
        }
        else if(dia>31 || dia<1){
            alert("Forneça um dia válido que seja INTEIRO e entre 1 e 31!");
            document.getElementById("dia_nasc").focus(); 
        }
        else{
            document.getElementById("mes_texto").value=mesExtenso[hoje.getMonth()];
            var semana=dia%7;
            if(semana==0){
                semana=7;
            }
            document.getElementById("dia_semana").value=diaExtenso[hoje.getDay()]
            var idadePessoa=ano_hoje-hoje.getFullYear();
            if(hoje.getFullYear()>ano_hoje || idadePessoa>105){
                alert("Você é do futuro ou já morreu!");
                document.getElementById("ano_nasc").focus();
            }
            else if(hoje.getFullYear()==ano_hoje && (mes_hoje<hoje.getMonth()+1 || (mes_hoje==hoje.getMonth()+1 && dia_hoje<hoje.getDate()))){
                alert("Você nasceu no futuro!");
                location.reload();
            }
            else{
                if(mes_hoje<hoje.getMonth()+1){
                    idadePessoa-=1;
                }
                else if(hoje.getMonth()+1==mes_hoje){
                    if(hoje.getDate()>dia_hoje){
                        idadePessoa-=1;
                    }
                }
                document.getElementById("idade").value=idadePessoa;
                if((hoje.getMonth()+1>=1 && hoje.getMonth()<=2)){
                    if((hoje.getMonth()+1==1 && 21<=hoje.getDate()) || (hoje.getMonth()+1==2 && hoje.getDate()<=19)){
                        document.images["signo_imagem"].src = "assets\Aquario.png"
                        
                    
                    }
                }
            }
            
                                            
            
        }
    }
}