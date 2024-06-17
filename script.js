document.getElementById('fileInput').addEventListener('change', lerArquivoJson);

let livros = [];

function lerArquivoJson(event) {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function(e) {
      try {
        livros = JSON.parse(e.target.result);
        console.log('Arquivo JSON carregado com sucesso:', livros);
      } catch (err) {
        console.error('Erro ao processar o arquivo JSON:', err);
      }
    };
    reader.readAsText(file);
  }
}

function filtrarLivrosPorPreco() {
  const livrosCaros = livros.filter(livro => livro.preco > 30);
  const resultado = document.getElementById('resultado');
  resultado.innerHTML = '';
  livrosCaros.forEach(livro => {
    const li = document.createElement('li');
    li.textContent = `${livro.titulo}: R$${livro.preco}`;
    resultado.appendChild(li);
  });
}
