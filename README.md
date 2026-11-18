# 🔥 Top Lanches — MVP Estático

Site estático demonstrativo (MVP) desenvolvido para a lanchonete **Top Lanches**, pronto para apresentação e hospedagem gratuita no **GitHub Pages** — sem necessidade de backend ou build.

## ✨ Funcionalidades

### Loja / Cardápio
- Cardápio interativo com busca em tempo real e filtro por categorias (*Hambúrgueres, Combos, Porções, Bebidas*).
- Carrinho lateral com controle de quantidade, escolha entre **Entrega** (taxa fixa) ou **Retirada no Balcão** (grátis).
- Fluxo completo de finalização de pedido com confirmação instantânea e registro automático no histórico de vendas.
- Layout responsivo (desktop e mobile, com barra flutuante de carrinho no celular).

### Painel Administrativo (com senha)
- Clique em **Admin** no topo do site.
- **Senha padrão de demonstração:** `top123`
- **Resumo & Vendas:**
  - KPIs em tempo real (Faturamento Válido, Total de Pedidos, Ticket Médio, Produtos Ativos).
  - Gráfico de receita por forma de pagamento e ranking de itens mais vendidos.
  - Histórico de pedidos (pré-populado com vendas fictícias + novos pedidos feitos no site), alteração de status (*Preparando, Em entrega, Entregue, Cancelado*), visualização de detalhes e registro de **Venda Balcão**.
- **Gerenciar Produtos:**
  - Criar novos produtos, editar nome, preço, descrição, categoria, selo e imagem, alternar entre *Disponível / Esgotado* ou excluir.
  - Todas as alterações são salvas no `localStorage` do navegador e refletem imediatamente no cardápio público.
  - Botão **Resetar Demo** para restaurar os dados originais a qualquer momento.

## 🚀 Como hospedar no GitHub Pages

1. Crie um repositório no GitHub (ex: `top-lanches`) e envie os arquivos desta pasta (`index.html`, `styles.css`, `app.js` e `README.md`).
2. No repositório, acesse **Settings → Pages**.
3. Em **Build and deployment**, selecione **Deploy from a branch**, escolha a branch `main` (pasta `/root`) e clique em **Save**.
4. Em poucos instantes o site estará online em `https://<seu-usuario>.github.io/top-lanches/`.
