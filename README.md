# 🔥 Top Lanches — MVP Estático

Site estático demonstrativo (MVP) desenvolvido para a lanchonete **Top Lanches** em HTML, CSS e Vanilla JS, pronto para apresentação e hospedagem no **GitHub Pages** — sem backend, com persistência em `localStorage` e imagens stock do Unsplash.

## ✨ Funcionalidades

### Loja / Cardápio
- **Visual em tema claro** de alto contraste, entrada direta no cardápio em formato de listas e layout responsivo para desktop e celular.
- **Cardápio clássico dividido por seções** (*Lanches Clássicos, Combos, Porções, Bebidas*), com busca em tempo real e abas de filtro/navegação por categoria.
- **Tela dedicada para cada lanche:** ao selecionar qualquer item da lista do cardápio, abre-se uma visualização própria em cartão arredondado com foto, descrição, disponibilidade, quantidade e área de personalização com caixas de seleção (*"Gostaria de retirar algo?"* + observações livres), além do botão para voltar ao cardápio.
- **Carrinho inteligente por personalização:** combinações diferentes do mesmo lanche aparecem como itens separados no carrinho e acompanham o resumo do pedido finalizado e o histórico no painel admin.
- Escolha entre **Entrega** (taxa fixa) ou **Retirada no Balcão** (grátis), com barra flutuante de pedido no celular.

### Painel Administrativo (com senha)
- Clique em **Admin** no topo do site.
- **Senha padrão de demonstração:** `top123`
- **Resumo & Vendas:**
  - KPIs em tempo real (Faturamento Válido, Total de Pedidos, Ticket Médio, Produtos Ativos).
  - Receita por forma de pagamento, ranking de itens mais vendidos e detalhes completos dos pedidos (incluindo personalizações).
  - Alteração de status (*Preparando, Em entrega, Entregue, Cancelado*), registro de **Venda Balcão** e botão **Resetar Demo**.
- **Gerenciar Produtos:**
  - Criar, editar e salvar qualquer campo do produto (nome, categoria, preço, selo, descrição, imagem, pergunta/opções de personalização e disponibilidade) ou excluir itens.
  - Todas as alterações são salvas no `localStorage` e sincronizadas imediatamente na loja, na tela do lanche e no carrinho.

## 🚀 Publicação no GitHub Pages

1. Mantenha os arquivos estáticos (`index.html`, `styles.css`, `app.js` e `README.md`) na branch `main` do repositório.
2. Em **Settings → Pages**, configure **Deploy from a branch** apontando para `main` (`/root`).
3. O site fica disponível em `https://pato4330.github.io/top-lanches/`.
