function botao() {
    //alert('OK');
    document.getElementById('title3').innerHTML = 'Botão clicado!'; // innerHTML também permite injetar tags HTML
}

function redirecionar() {
    window.open('https://www.youtube.com/'); // Abre uma nova aba
    // window.location.href = 'https://www.youtube.com/'; // Abre o link na mesma aba
}

function trocar(elemento) { // Trocar a cor de fundo do botão
    // document.getElementById('btn-youtube').style.backgroundColor = "#fa4";
    elemento.style.backgroundColor = "#fa4";
}

function retrocar(elemento) { // Usando um parametro para chamar a mesma função para dois elementos diferentes
    // document.getElementById('btn-youtube').style.backgroundColor = "#fff";
    elemento.style.backgroundColor = "#fff";
}

function load() { // Ao iniciar a página
    console.log('Página carregada!');
}

function funcaoChange(elemento) { // para coletar o valor do elemento
    alert(elemento.value);
}