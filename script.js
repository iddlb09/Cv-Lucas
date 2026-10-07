// JavaScript para funcionalidades adicionais, se necessário
document.addEventListener('DOMContentLoaded', function () {
    console.log('Currículo carregado com sucesso!');

    // Exemplo: Adicionar evento de impressão
    document.addEventListener('keydown', function (e) {
        if (e.ctrlKey && e.key === 'p') {
            e.preventDefault();
            alert('Use o botão de impressão do navegador para imprimir o currículo.');
        }
    });
});

document.getElementById('download-pdf').addEventListener('click', function () {
    window.print(); // Gera PDF diretamente pelo navegador
});