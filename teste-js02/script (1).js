// Função para salvar no localStorage
function salvarImovel(imovel) {
    let imoveis = JSON.parse(localStorage.getItem('imoveis')) || [];
    imoveis.push(imovel);
    localStorage.setItem('imoveis', JSON.stringify(imoveis));
}

// Função para carregar imóveis do localStorage
function carregarImoveis() {
    return JSON.parse(localStorage.getItem('imoveis')) || [];
}

// Cadastro de imóveis
if (window.location.pathname.includes('index.html')) {
    document.getElementById('imovelForm').addEventListener('submit', function (e) {
        e.preventDefault();

        const titulo = document.getElementById('titulo').value;
        const qtd_quartos = document.getElementById('qtd_quartos').value;
        const preco = document.getElementById('preco').value;
        const imagem = document.getElementById('imagem').value;

        const imovel = {
            titulo,
            descricao,
            preco,
            imagem
        };

        salvarImovel(imovel);
        alert('Imóvel cadastrado com sucesso!');
        document.getElementById('imovelForm').reset();
    });
}

// Exibição dos cards
if (window.location.pathname.includes('cards.html')) {
    const imoveis = carregarImoveis();
    const cardsContainer = document.getElementById('cardsContainer');

    if (imoveis.length === 0) {
        cardsContainer.innerHTML = '<p>Nenhum imóvel cadastrado.</p>';
    } else {
        imoveis.forEach(imovel => {
            const card = document.createElement('div');
            card.className = 'card';
            card.innerHTML = `
                <img src="${imovel.imagem}" alt="${imovel.titulo}">
                <h2>${imovel.titulo}</h2>
                <p>${imovel.descricao}</p>
                <p><strong>Preço:</strong> R$ ${imovel.preco}</p>
            `;
            cardsContainer.appendChild(card);
        });
    }
}