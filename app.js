const produtos = [
    { nome: 'Tripe 1m', imagem: 'img/tripe_1m.jpg', descricao: 'Tripé de 1 metro' },
    { nome: 'Teclado G', imagem: 'img/teclado_g.jpg', descricao: 'Teclado gamer' },
    { nome: 'Suporte Tel', imagem: 'img/suporte_tel.jpg', descricao: 'Suporte para telefone' },
    { nome: 'Suporte Note', imagem: 'img/suporte_note.jpg', descricao: 'Suporte para notebook' },
    { nome: 'Suporte', imagem: 'img/suporte.jpg', descricao: 'Suporte universal' },
    { nome: 'Som Auto', imagem: 'img/som_auto.jpg', descricao: 'Sistema de som automotivo' },
    { nome: 'Raquete', imagem: 'img/raquete.jpg', descricao: 'Raquete de tênis' },
    { nome: 'Rádio Retro 2', imagem: 'img/radio_retro2.jpg', descricao: 'Rádio retrô modelo 2' },
    { nome: 'Rádio Retro', imagem: 'img/radio_retro.jpg', descricao: 'Rádio retrô' },
    { nome: 'Rádio Com', imagem: 'img/radio_com.jpg', descricao: 'Rádio com Bluetooth' },
    { nome: 'Projetor 01', imagem: 'img/projetor01.jpg', descricao: 'Projetor modelo 01' },
    { nome: 'Projetor 02', imagem: 'img/projeto02.jpg', descricao: 'Projetor modelo 02' },
    { nome: 'Powerbank', imagem: 'img/powerbank.jpg', descricao: 'Carregador portátil' },
    { nome: 'Placa de Som', imagem: 'img/placa_som.jpg', descricao: 'Placa de som externa' },
    { nome: 'Pilha Rec', imagem: 'img/pilha_rec.jpg', descricao: 'Pilha recarregável' },
    { nome: 'Pilha', imagem: 'img/pilha.jpg', descricao: 'Pilha comum' },
    { nome: 'Pendrive Nano', imagem: 'img/pendrive_nano.jpg', descricao: 'Pendrive nano' },
    { nome: 'Pendrive', imagem: 'img/pendrive.jpg', descricao: 'Pendrive' },
    { nome: 'Multímetro 01', imagem: 'img/multimetro01.jpg', descricao: 'Multímetro modelo 01' },
    { nome: 'Multímetro', imagem: 'img/multimetro.jpg', descricao: 'Multímetro' },
    { nome: 'Mouse Pad', imagem: 'img/mouse_pad.jpg', descricao: 'Mouse pad' },
    { nome: 'Microfone', imagem: 'img/microfone.jpg', descricao: 'Microfone' },
    { nome: 'Mata-Mosquito', imagem: 'img/mata-mosquito.jpg', descricao: 'Mata-mosquito elétrico' },
    { nome: 'Marmita 01', imagem: 'img/marmita01.jpg', descricao: 'Marmita modelo 01' },
    { nome: 'Marmita', imagem: 'img/marmita.jpg', descricao: 'Marmita' },
    { nome: 'Máquina Drag', imagem: 'img/maquina_drag.jpg', descricao: 'Máquina de cortar cabelo Drag' },
    { nome: 'Máquina Cab', imagem: 'img/maquina_cab.jpg', descricao: 'Máquina de cortar cabelo' },
    { nome: 'Lixa de Pé 02', imagem: 'img/lixa_pe02.jpg', descricao: 'Lixa de pé modelo 02' },
    { nome: 'Lixa de Pé 01', imagem: 'img/lixa_pe01.jpg', descricao: 'Lixa de pé modelo 01' },
    { nome: 'Lixa de Pé', imagem: 'img/lixa_pe.jpg', descricao: 'Lixa de pé' },
    { nome: 'Lanterna', imagem: 'img/lanterna.jpg', descricao: 'Lanterna' },
    { nome: 'Lancheira', imagem: 'img/lancheira.jpg', descricao: 'Lancheira térmica' },
    { nome: 'Kit de Facas', imagem: 'img/kif_faca.jpg', descricao: 'Kit de facas' },
    { nome: 'Joystick', imagem: 'img/joystick.jpg', descricao: 'Joystick' },
    { nome: 'Globo de Luz', imagem: 'img/globo_luz.jpg', descricao: 'Globo de luz' },
    { nome: 'Garrafa Blog', imagem: 'img/garrafa_blog.jpg', descricao: 'Garrafa térmica' },
    { nome: 'Fonte Dell', imagem: 'img/fonte_dell.jpg', descricao: 'Fonte para notebook Dell' },
    { nome: 'Fone Blug', imagem: 'img/fone_blug.jpg', descricao: 'Fone de ouvido Blug' },
    { nome: 'Fone Bluetooth', imagem: 'img/fone_bluet.jpg', descricao: 'Fone de ouvido Bluetooth' },
    { nome: 'Fone Blue', imagem: 'img/fone_blue.jpg', descricao: 'Fone de ouvido Blue' },
    { nome: 'Fone AirD', imagem: 'img/fone_aird.jpg', descricao: 'Fone de ouvido AirD' },
    { nome: 'Fita', imagem: 'img/fita.jpg', descricao: 'Fita adesiva' },
    { nome: 'Copo Som', imagem: 'img/copo_som.jpg', descricao: 'Copo com som' },
    { nome: 'Copo Cuia', imagem: 'img/copo_cuia.jpg', descricao: 'Copo cuia' },
    { nome: 'Copo Café', imagem: 'img/copo_cafe.jpg', descricao: 'Copo de café' },
    { nome: 'Copo 473', imagem: 'img/copo_473.jpg', descricao: 'Copo de 473ml' },
    { nome: 'Copão 600', imagem: 'img/copao600.jpg', descricao: 'Copo de 600ml' },
    { nome: 'Chaleira', imagem: 'img/chaleira.jpg', descricao: 'Chaleira elétrica' },
    { nome: 'Cartela de Pilhas', imagem: 'img/cartela_pilha.jpg', descricao: 'Cartela de pilhas' },
    { nome: 'Carregador de Pilhas', imagem: 'img/carregador_pilha.jpg', descricao: 'Carregador de pilhas' },
    { nome: 'Carregador Ind', imagem: 'img/carregador_ind.jpg', descricao: 'Carregador industrial' },
    { nome: 'Carregador de Celular', imagem: 'img/carregador_cell.jpg', descricao: 'Carregador de celular' },
    { nome: 'Câmera', imagem: 'img/camera.jpg', descricao: 'Câmera digital' },
    { nome: 'Caixa de Som B01', imagem: 'img/caixa_som_b01.jpg', descricao: 'Caixa de som modelo B01' },
    { nome: 'Caixa de Som B', imagem: 'img/caixa_som_b.jpg', descricao: 'Caixa de som modelo B' },
    { nome: 'Caixa de Som', imagem: 'img/caixa_som.jpg', descricao: 'Caixa de som' },
    { nome: 'Cabo VGA', imagem: 'img/cabo_vga.jpg', descricao: 'Cabo VGA' },
    { nome: 'Cabo de Rede', imagem: 'img/cabo_rede.jpg', descricao: 'Cabo de rede' },
    { nome: 'Cabo RCA', imagem: 'img/cabo_rca.jpg', descricao: 'Cabo RCA' },
    { nome: 'Barbeador 3 em 1', imagem: 'img/barbeador_3e1.jpg', descricao: 'Barbeador 3 em 1' },
    { nome: 'Barbeador', imagem: 'img/barbeador.jpg', descricao: 'Barbeador elétrico' },
    { nome: 'Balança', imagem: 'img/balança.jpg', descricao: 'Balança digital' },
    { nome: 'Armário 01', imagem: 'img/armario01.jpg', descricao: 'Armário modelo 01' },
    { nome: 'Armário', imagem: 'img/armario.jpg', descricao: 'Armário' },
    { nome: 'Hub 7 Portas', imagem: 'img/hub.jpg', descricao: 'Hub com 7 portas adicionais' },
    { nome: 'Pilha LR44', imagem: 'img/pilha_lr44.jpg', descricao: 'Cartela de Pilha LR44' },
    { nome: 'Pendrive MultiLaser 64GB', imagem: 'img/pendrive64.jpg', descricao: 'Pendrive 64GB MultiLaser' },
    { nome: 'Amolador', imagem: 'img/amolador.jpg', descricao: 'Amolador de faca' }
];

const section = document.getElementById('produtos');

// Função para criar e adicionar os produtos
function adicionarProdutos(produtos) {
    produtos.forEach(produto => {
        const div = document.createElement('div');
        div.className = 'produto';
        
        const img = document.createElement('img');
        img.src = produto.imagem;
        img.alt = produto.nome;
        
        const nome = document.createElement('h2');
        nome.textContent = produto.nome;
        
        const descricao = document.createElement('p');
        descricao.textContent = produto.descricao;
        
        div.appendChild(img);
        div.appendChild(nome);
        div.appendChild(descricao);
        section.appendChild(div);
    });
}

// Chama a função para adicionar os produtos
adicionarProdutos(produtos);

