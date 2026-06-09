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