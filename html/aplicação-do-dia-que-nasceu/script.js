function Exibir() {
    var dia = document.getElementById("dia_nasc").value;
    var mes = document.getElementById("mes_nasc").value;
    var ano = document.getElementById("ano_nasc").value;
    var hoje = new Date();

    var mesExtenso = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
                      "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
    var diaExtenso = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];

    if (isNaN(dia) || dia == "") {
        alert("Forneça um dia válido!");
        document.getElementById("dia_nasc").focus();
    }
    else if (isNaN(mes) || mes == "") {
        alert("Forneça um mês válido de 1 a 12");
        document.getElementById("mes_nasc").focus();
    }
    else if (isNaN(ano) || ano == "") {
        alert("Forneça um ano válido!");
        document.getElementById("ano_nasc").focus();
    }
    else if (ano.length != 4) {
        alert("Forneça um ano válido com comprimento de 4!");
        document.getElementById("ano_nasc").focus();
    }
    else {
        dia = parseInt(dia);
        mes = parseInt(mes);
        ano = parseInt(ano);

        if (mes < 1 || mes > 12) {
            alert("Forneça um mês válido que seja INTEIRO e entre 1 e 12!");
            document.getElementById("mes_nasc").focus();
        }
        else if (dia < 1 || dia > 31) {
            alert("Forneça um dia válido que seja INTEIRO e que seja VÁLIDO!");
            document.getElementById("dia_nasc").focus();
        }
        else {
            var nascimento = new Date(ano, mes - 1, dia);

            // se a data não existe, o nascimento (que é um date) calcula para um próximo mes
            //e ai é comparado se ele foi alterado, e se foi, pede pro usuário arrumar
            //e isso trata o problema de ano bisesto
            if (nascimento.getMonth() != mes - 1 || nascimento.getDate() != dia) {
                alert("Essa data não existe!");
                document.getElementById("dia_nasc").focus();
            }
            else if (nascimento > hoje) {
                alert("Você nasceu no futuro!");
                document.getElementById("ano_nasc").focus();
            }
            else {
                var idade = hoje.getFullYear() - ano;
                if (mes - 1 > hoje.getMonth() ||
                   (mes - 1 == hoje.getMonth() && dia > hoje.getDate())) {
                    idade -= 1; // ainda não fez aniversário este ano
                }

                if (idade > 105) {
                    alert("Você já morreu!");
                    document.getElementById("ano_nasc").focus();
                }
                else {
                    document.getElementById("mes_texto").value = mesExtenso[nascimento.getMonth()];
                    document.getElementById("dia_semana").value = diaExtenso[nascimento.getDay()];
                    document.getElementById("idade").value = idade;
                    
                    
                    /* Verificando o signo correspondente */
                    if (((dia >= 21) && (mes == 1)) || ((dia <= 19) && (mes == 2)))
                        document.images["signo_imagem"].src = "assets/Aquario.png";
                    else if (((dia >= 20) && (mes == 2)) || ((dia <= 20) && (mes == 3)))
                        document.images["signo_imagem"].src = "assets/Peixes.png";
                    else if (((dia >= 21) && (mes == 3)) || ((dia <= 20) && (mes == 4)))
                        document.images["signo_imagem"].src = "assets/Aries.png";
                    else if (((dia >= 21) && (mes == 4)) || ((dia <= 20) && (mes == 5)))
                        document.images["signo_imagem"].src = "assets/Touro.png";
                    else if (((dia >= 21) && (mes == 5)) || ((dia <= 20) && (mes == 6)))
                        document.images["signo_imagem"].src = "assets/Gemeos.png";
                    else if (((dia >= 21) && (mes == 6)) || ((dia <= 22) && (mes == 7)))
                        document.images["signo_imagem"].src = "assets/Cancer.png";
                    else if (((dia >= 23) && (mes == 7)) || ((dia <= 22) && (mes == 8)))
                        document.images["signo_imagem"].src = "assets/Leao.png";
                    else if (((dia >= 23) && (mes == 8)) || ((dia <= 22) && (mes == 9)))
                        document.images["signo_imagem"].src = "assets/Virgem.png";
                    else if (((dia >= 23) && (mes == 9)) || ((dia <= 22) && (mes == 10)))
                        document.images["signo_imagem"].src = "assets/Libra.png";
                    else if (((dia >= 23) && (mes == 10)) || ((dia <= 21) && (mes == 11)))
                        document.images["signo_imagem"].src = "assets/Escorpiao.png";
                    else if (((dia >= 22) && (mes == 11)) || ((dia <= 21) && (mes == 12)))
                        document.images["signo_imagem"].src ="assets/Sargitario.png";
                    else
                        document.images["signo_imagem"].src = "assets/Capricornio.png";
                }
            }
        }
    }
}

// Opcional: limpa a imagem quando clicar em "Limpar"
function Limpar() {
    document.images["signo_imagem"].removeAttribute("src");
    document.getElementById("dia_nasc").focus();
}