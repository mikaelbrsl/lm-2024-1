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
if (window.location.pathname.includes('cadastro.html')) {
    document.getElementById('imovelForm').addEventListener('submit', function (e) {
        e.preventDefault();

        const localizacao = document.getElementById('localizacao').value;
        const qnt_quartos = document.getElementById('qnt_quartos').value;
        const preco = document.getElementById('preco').value;
        const imagem = document.getElementById('imagem').value;
        const qnt_banheiros = document.getElementById('qnt_banheiros').value;
        const area_lazer = document.getElementById('area_lazer').value;
        const piscina = document.getElementById('piscina').value;

        const imovel = {
            localizacao,
            qnt_quartos,
            qnt_banheiros,
            area_lazer,
            piscina,
            preco,
            imagem
        };

        salvarImovel(imovel);
        alert('Imóvel cadastrado com sucesso!');
        document.getElementById('imovelForm').reset();
    });
}





if (window.location.pathname.includes('index.html')) {
    const imoveis = carregarImoveis();
    const cardsContainer = document.getElementById('cardsContainer');

    if (imoveis.length === 0) {
        cardsContainer.innerHTML = '<p>Nenhum imóvel cadastrado.</p>';
    } else {
        imoveis.forEach(imovel => {
            const card = document.createElement('div');
            card.className = 'card';
            card.innerHTML = `
                <article>
                    <img class="fotoDestaque" src="${imovel.imagem}" alt="Imagem do imóvel">
                    <h3>${imovel.localizacao}</h3>
                    <div class="flexDescricao">
                        <span class="material-symbols-outlined">bedroom_parent</span>
                        <p>${imovel.qnt_quartos}</p>
                    </div>
                    <div class="flexDescricao">
                        <span class="material-symbols-outlined">shower</span>
                        <p>${imovel.qnt_banheiros}</p>
                    </div>
                    <div class="flexDescricao">
                        <span class="material-symbols-outlined">mood</span>
                        <p>${imovel.area_lazer}</p>
                    </div>
                    <div class="flexDescricao">
                        <span class="material-symbols-outlined">pool</span>
                        <p>${imovel.piscina}</p>
                    </div>
                    <div class="flexDescricao">
                        <span class="material-symbols-outlined">attach_money</span>
                        <p>${imovel.preco}</p>
                    </div>
                </article>
            `;
            cardsContainer.appendChild(card);
        });
    }
}
