/* Função para mostrar a seção certa quando clicar no menu */
function mostrarSecao(idDaSecao) {
    /* Primeiro, esconder todas as seções */
    var todasAsSecoes = document.getElementsByClassName('caixa_de_postagem');
    for (var i = 0; i < todasAsSecoes.length; i++) {
        todasAsSecoes[i].classList.remove('mostrar');
        /* Tirar a classe "mostrar" */
    }

    /* Depois, mostrar só a seção que a gente quer */
    var aSecaoQueEuQueroMostrar = document.getElementById(idDaSecao);
    if (aSecaoQueEuQueroMostrar) {
        aSecaoQueEuQueroMostrar.classList.add('mostrar');
        /* Colocar a classe "mostrar" */
    }
}

/* Mostrar a primeira seção quando a página carregar */
mostrarSecao('secao_sobre');