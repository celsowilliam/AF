/*
AF - Avaliação Final - Linguagens de Programação
Tema do Projeto: CineVerso - Filmes e Séries
Aluno 1: Celso William Leite Ferreira - RA: 251053
Professor: Abimael de Oliveira
Data de entrega: 07/06
*/

// Voltar ao topo
const btnTopo = document.querySelector('#btnTopo');

if (btnTopo) {
    window.addEventListener('scroll', function () {
        if (window.scrollY > 300) {
            btnTopo.classList.add('mostrar');
        } else {
            btnTopo.classList.remove('mostrar');
        }
    });

    btnTopo.addEventListener('click', function () {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}


// 2. validacao do formulario
const formulario = document.querySelector('#formContato');

if (formulario) {
    formulario.addEventListener('submit', function(event) {
        event.preventDefault();

        const nome = document.querySelector('#nome').value;
        const email = document.querySelector('#email').value;
        const mensagem = document.querySelector('#mensagem').value;

        if (nome === '' || email === '' || mensagem === '') {
            alert('Por favor, preencha todos os campos obrigatórios.');
        } else {
            alert('Mensagem enviada com sucesso!');
            formulario.reset();
        }
    });
}

// 3. efeito nos cards
const cards = document.querySelectorAll('.card');

cards.forEach(function(card) {
    card.addEventListener('mouseenter', function() {
        card.classList.add('card-ativo');
    });

    card.addEventListener('mouseleave', function() {
        card.classList.remove('card-ativo');
    });
});
