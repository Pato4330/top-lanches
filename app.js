/* =========================================================
   TOP LANCHES — MVP ESTÁTICO (STOREFRONT + PAINEL ADMIN)
   ========================================================= */

(() => {
  'use strict';

  const STORAGE_KEYS = {
    PRODUCTS: 'topLanches_products_v1',
    ORDERS: 'topLanches_orders_v1',
    CART: 'topLanches_cart_v1',
    ADMIN_AUTH: 'topLanches_admin_session_v1',
  };

  // Senha padrão para demonstração do MVP
  const ADMIN_PASSWORD = 'top123';
  const DELIVERY_FEE = 6.9;

  const STOCK_IMAGES = {
    baconDuplo: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80',
    classic: 'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=800&q=80',
    chicken: 'https://images.unsplash.com/photo-1606755962773-d324e0a13086?auto=format&fit=crop&w=800&q=80',
    cheddar: 'https://images.unsplash.com/photo-1553979459-d2229ba7433b?auto=format&fit=crop&w=800&q=80',
    combo: 'https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?auto=format&fit=crop&w=800&q=80',
    fries: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=800&q=80',
    milkshake: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=800&q=80',
    soda: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=800&q=80',
  };

  // =========================================================
  // DADOS FANTASIA INICIAIS (CARDÁPIO)
  // =========================================================
  const DEFAULT_PRODUCTS = [
    {
      id: 'prod-1',
      name: 'Top Bacon Duplo',
      category: 'Hambúrgueres',
      price: 36.9,
      description: 'Dois smash burgers 100g, cheddar duplo derretido, bacon crocante, cebola caramelizada e molho especial no brioche.',
      image: STOCK_IMAGES.baconDuplo,
      badge: 'Mais Pedido',
      active: true,
    },
    {
      id: 'prod-2',
      name: 'Top Clássico Artesanal',
      category: 'Hambúrgueres',
      price: 29.9,
      description: 'Blend bovino 160g na chapa, queijo cheddar, alface americana, tomate maduro, picles e maionese verde da casa.',
      image: STOCK_IMAGES.classic,
      badge: 'Clássico',
      active: true,
    },
    {
      id: 'prod-3',
      name: 'Top Crispy Chicken',
      category: 'Hambúrgueres',
      price: 31.5,
      description: 'Sobrecoxa empanada super crocante, salada coleslaw cremosa, picles artesanal e molho honey mustard no brioche.',
      image: STOCK_IMAGES.chicken,
      badge: 'Novo',
      active: true,
    },
    {
      id: 'prod-4',
      name: 'Top Smash Cheddar',
      category: 'Hambúrgueres',
      price: 26.9,
      description: 'Smash burger 120g com crostinha perfeita, creme de cheddar inglês e cebola roxa grelhada no pão brioche.',
      image: STOCK_IMAGES.cheddar,
      badge: '',
      active: true,
    },
    {
      id: 'prod-5',
      name: 'Combo Top Casal',
      category: 'Combos',
      price: 74.9,
      description: '2 Top Clássico Artesanal + 1 Batata Cheddar & Bacon média + 2 refrigerantes lata 350ml à sua escolha.',
      image: STOCK_IMAGES.combo,
      badge: 'Combo',
      active: true,
    },
    {
      id: 'prod-6',
      name: 'Combo Individual Top',
      category: 'Combos',
      price: 44.9,
      description: '1 Top Bacon Duplo + 1 porção individual de batatas fritas crocantes + 1 refrigerante lata gelado.',
      image: STOCK_IMAGES.combo,
      badge: 'Oferta',
      active: true,
    },
    {
      id: 'prod-7',
      name: 'Batata Cheddar & Bacon',
      category: 'Porções',
      price: 24.9,
      description: 'Porção generosa de batatas fritas sequinhas cobertas com molho cheddar cremoso, cubos de bacon e cebolinha.',
      image: STOCK_IMAGES.fries,
      badge: 'Mais Pedido',
      active: true,
    },
    {
      id: 'prod-8',
      name: 'Fritas da Casa (G)',
      category: 'Porções',
      price: 17.9,
      description: 'Batatas palito crocantes temperadas com páprica defumada e alecrim. Acompanha maionese artesanal.',
      image: STOCK_IMAGES.fries,
      badge: '',
      active: true,
    },
    {
      id: 'prod-9',
      name: 'Milkshake Brownie 400ml',
      category: 'Bebidas',
      price: 21.9,
      description: 'Sorvete artesanal de chocolate belga batido com pedaços de brownie, chantilly e calda cremosa.',
      image: STOCK_IMAGES.milkshake,
      badge: 'Novo',
      active: true,
    },
    {
      id: 'prod-10',
      name: 'Refrigerante Lata 350ml',
      category: 'Bebidas',
      price: 7.5,
      description: 'Coca-Cola, Guaraná Antarctica ou Sprite bem gelados (informe o sabor nas observações).',
      image: STOCK_IMAGES.soda,
      badge: '',
      active: true,
    },
  ];

  // =========================================================
  // VENDAS FANTASIA INICIAIS (HISTÓRICO PARA O PAINEL ADMIN)
  // =========================================================
  const DEFAULT_ORDERS = [
    {
      id: 'TL-1006',
      createdAt: '18/11/2026 19:52',
      customerName: 'Mariana Oliveira',
      phone: '(11) 98412-3301',
      deliveryType: 'Entrega',
      address: 'Rua das Acácias, 410 - Jardins',
      paymentMethod: 'Pix',
      notes: 'Sem cebola no clássico',
      deliveryFee: 6.9,
      subtotal: 66.8,
      total: 73.7,
      status: 'Preparando',
      items: [
        { productId: 'prod-1', name: 'Top Bacon Duplo', qty: 1, price: 36.9 },
        { productId: 'prod-2', name: 'Top Clássico Artesanal', qty: 1, price: 29.9 },
      ],
    },
    {
      id: 'TL-1005',
      createdAt: '18/11/2026 19:30',
      customerName: 'Rafael Costa',
      phone: '(11) 97701-8890',
      deliveryType: 'Entrega',
      address: 'Av. Brasil Fantasia, 890 - Apto 12',
      paymentMethod: 'Cartão de Crédito',
      notes: '',
      deliveryFee: 6.9,
      subtotal: 96.8,
      total: 103.7,
      status: 'Em entrega',
      items: [
        { productId: 'prod-5', name: 'Combo Top Casal', qty: 1, price: 74.9 },
        { productId: 'prod-9', name: 'Milkshake Brownie 400ml', qty: 1, price: 21.9 },
      ],
    },
    {
      id: 'TL-1004',
      createdAt: '18/11/2026 18:55',
      customerName: 'Camila Ferreira',
      phone: '(11) 99123-4567',
      deliveryType: 'Retirada',
      address: 'Retirada no balcão',
      paymentMethod: 'Pix',
      notes: 'Maionese extra',
      deliveryFee: 0,
      subtotal: 56.4,
      total: 56.4,
      status: 'Entregue',
      items: [
        { productId: 'prod-3', name: 'Top Crispy Chicken', qty: 1, price: 31.5 },
        { productId: 'prod-7', name: 'Batata Cheddar & Bacon', qty: 1, price: 24.9 },
      ],
    },
    {
      id: 'TL-1003',
      createdAt: '18/11/2026 18:24',
      customerName: 'Bruno Almeida',
      phone: '(11) 98845-2211',
      deliveryType: 'Entrega',
      address: 'Rua Bela Vista, 77 - Centro',
      paymentMethod: 'Cartão de Débito',
      notes: '',
      deliveryFee: 6.9,
      subtotal: 89.8,
      total: 96.7,
      status: 'Entregue',
      items: [
        { productId: 'prod-6', name: 'Combo Individual Top', qty: 2, price: 44.9 },
      ],
    },
    {
      id: 'TL-1002',
      createdAt: '17/11/2026 21:40',
      customerName: 'Juliana Santos',
      phone: '(11) 97234-9900',
      deliveryType: 'Entrega',
      address: 'Alameda dos Pinheiros, 205',
      paymentMethod: 'Pix',
      notes: '',
      deliveryFee: 6.9,
      subtotal: 73.8,
      total: 80.7,
      status: 'Entregue',
      items: [
        { productId: 'prod-1', name: 'Top Bacon Duplo', qty: 2, price: 36.9 },
      ],
    },
    {
      id: 'TL-1001',
      createdAt: '17/11/2026 20:15',
      customerName: 'Pedro Henrique',
      phone: '(11) 99654-1122',
      deliveryType: 'Retirada',
      address: 'Retirada no balcão',
      paymentMethod: 'Dinheiro',
      notes: 'Troco para R$ 50',
      deliveryFee: 0,
      subtotal: 34.4,
      total: 34.4,
      status: 'Entregue',
      items: [
        { productId: 'prod-4', name: 'Top Smash Cheddar', qty: 1, price: 26.9 },
        { productId: 'prod-10', name: 'Refrigerante Lata 350ml', qty: 1, price: 7.5 },
      ],
    },
  ];

  // =========================================================
  // ESTADO DA APLICAÇÃO
  // =========================================================
  let products = loadStorage(STORAGE_KEYS.PRODUCTS, DEFAULT_PRODUCTS);
  let orders = loadStorage(STORAGE_KEYS.ORDERS, DEFAULT_ORDERS);
  let cart = loadStorage(STORAGE_KEYS.CART, []);

  let selectedCategory = 'Todos';
  let searchQuery = '';
  let adminStatusFilter = 'Todos';
  let adminProductCategoryFilter = 'Todos';

  // =========================================================
  // UTILITÁRIOS
  // =========================================================
  function loadStorage(key, fallback) {
    try {
      const raw = localStorage.getItem(key);
      if (!raw) return structuredClone(fallback);
      const parsed = JSON.parse(raw);
      return Array.isArray(parsed) ? parsed : structuredClone(fallback);
    } catch {
      return structuredClone(fallback);
    }
  }

  function saveProducts() {
    localStorage.setItem(STORAGE_KEYS.PRODUCTS, JSON.stringify(products));
  }

  function saveOrders() {
    localStorage.setItem(STORAGE_KEYS.ORDERS, JSON.stringify(orders));
  }

  function saveCart() {
    localStorage.setItem(STORAGE_KEYS.CART, JSON.stringify(cart));
  }

  function formatBRL(value) {
    return Number(value || 0).toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });
  }

  function formatNow() {
    const d = new Date();
    const pad = (n) => String(n).padStart(2, '0');
    return `${pad(d.getDate())}/${pad(d.getMonth() + 1)}/${d.getFullYear()} ${pad(d.getHours())}:${pad(d.getMinutes())}`;
  }

  function nextOrderCode() {
    const nums = orders
      .map((o) => parseInt(String(o.id).replace(/\D/g, ''), 10))
      .filter((n) => !Number.isNaN(n));
    const max = nums.length ? Math.max(...nums) : 1000;
    return `TL-${max + 1}`;
  }

  function escapeHTML(str) {
    return String(str ?? '')
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  function showToast(message, type = 'default') {
    const container = document.getElementById('toast-container');
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.textContent = message;
    container.appendChild(toast);
    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(-6px)';
      toast.style.transition = 'all 0.2s ease';
      setTimeout(() => toast.remove(), 220);
    }, 2800);
  }

  function openModal(id) {
    document.getElementById(id).classList.remove('hidden');
  }

  function closeModal(id) {
    document.getElementById(id).classList.add('hidden');
  }

  // =========================================================
  // STOREFRONT: CATEGORIAS E CARDÁPIO
  // =========================================================
  function getCategories() {
    const set = new Set(['Todos', 'Hambúrgueres', 'Combos', 'Porções', 'Bebidas']);
    products.forEach((p) => set.add(p.category));
    return Array.from(set);
  }

  function renderCategoryTabs() {
    const container = document.getElementById('category-tabs');
    const categories = getCategories();
    container.innerHTML = categories
      .map(
        (cat) => `
        <button
          type="button"
          class="category-pill ${cat === selectedCategory ? 'active' : ''}"
          data-category="${escapeHTML(cat)}"
          role="tab"
          aria-selected="${cat === selectedCategory}"
        >
          ${escapeHTML(cat)}
        </button>
      `
      )
      .join('');
  }

  function getCartQty(productId) {
    const found = cart.find((c) => c.productId === productId);
    return found ? found.qty : 0;
  }

  function renderMenu() {
    const grid = document.getElementById('menu-grid');
    const emptyEl = document.getElementById('menu-empty');

    const q = searchQuery.trim().toLowerCase();
    const filtered = products.filter((p) => {
      const matchesCat = selectedCategory === 'Todos' || p.category === selectedCategory;
      const matchesQuery =
        !q ||
        p.name.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q);
      return matchesCat && matchesQuery;
    });

    if (!filtered.length) {
      grid.innerHTML = '';
      emptyEl.classList.remove('hidden');
      return;
    }

    emptyEl.classList.add('hidden');
    grid.innerHTML = filtered
      .map((p) => {
        const qty = getCartQty(p.id);
        const actionHTML = !p.active
          ? `<button type="button" class="btn btn-ghost btn-sm" disabled>Indisponível</button>`
          : qty > 0
          ? `
            <div class="qty-stepper">
              <button type="button" data-action="dec" data-id="${escapeHTML(p.id)}" aria-label="Remover um">−</button>
              <span>${qty}</span>
              <button type="button" data-action="inc" data-id="${escapeHTML(p.id)}" aria-label="Adicionar mais um">+</button>
            </div>
          `
          : `<button type="button" class="btn btn-primary btn-sm" data-action="add" data-id="${escapeHTML(p.id)}">+ Adicionar</button>`;

        return `
          <article class="product-card ${p.active ? '' : 'sold-out'}">
            <div class="product-thumb">
              <img src="${escapeHTML(p.image)}" alt="${escapeHTML(p.name)}" loading="lazy" />
              ${p.badge ? `<span class="product-badge">${escapeHTML(p.badge)}</span>` : ''}
              ${!p.active ? `<div class="sold-out-overlay">Esgotado</div>` : ''}
            </div>
            <div class="product-body">
              <span class="product-category-label">${escapeHTML(p.category)}</span>
              <h3 class="product-title">${escapeHTML(p.name)}</h3>
              <p class="product-desc">${escapeHTML(p.description)}</p>
              <div class="product-footer">
                <span class="product-price">${formatBRL(p.price)}</span>
                ${actionHTML}
              </div>
            </div>
          </article>
        `;
      })
      .join('');
  }

  // =========================================================
  // CARRINHO & CHECKOUT
  // =========================================================
  function addToCart(productId) {
    const product = products.find((p) => p.id === productId && p.active);
    if (!product) return;

    const existing = cart.find((item) => item.productId === productId);
    if (existing) {
      existing.qty += 1;
    } else {
      cart.push({ productId, qty: 1 });
    }
    saveCart();
    renderMenu();
    renderCart();
    showToast(`${product.name} adicionado ao pedido!`, 'success');
  }

  function updateCartQty(productId, delta) {
    const idx = cart.findIndex((item) => item.productId === productId);
    if (idx === -1) return;

    cart[idx].qty += delta;
    if (cart[idx].qty <= 0) {
      cart.splice(idx, 1);
    }
    saveCart();
    renderMenu();
    renderCart();
  }

  function getSelectedDeliveryType() {
    const checked = document.querySelector('input[name="deliveryType"]:checked');
    return checked ? checked.value : 'Entrega';
  }

  function getCartTotals() {
    let itemCount = 0;
    let subtotal = 0;
    const validItems = [];

    cart.forEach((entry) => {
      const prod = products.find((p) => p.id === entry.productId && p.active);
      if (prod) {
        itemCount += entry.qty;
        subtotal += prod.price * entry.qty;
        validItems.push({ ...entry, product: prod });
      }
    });

    const deliveryType = getSelectedDeliveryType();
    const deliveryFee = validItems.length > 0 && deliveryType === 'Entrega' ? DELIVERY_FEE : 0;
    const total = subtotal + deliveryFee;

    return { itemCount, subtotal, deliveryFee, total, validItems, deliveryType };
  }

  function renderCart() {
    const { itemCount, subtotal, deliveryFee, total, validItems } = getCartTotals();

    // Header badge
    document.getElementById('cart-badge').textContent = itemCount;

    // Mobile bottom bar
    const mobileBar = document.getElementById('mobile-cart-bar');
    if (itemCount > 0) {
      mobileBar.classList.remove('hidden');
      document.getElementById('mobile-cart-count').textContent =
        `${itemCount} ${itemCount === 1 ? 'item' : 'itens'}`;
      document.getElementById('mobile-cart-total').textContent = formatBRL(total);
    } else {
      mobileBar.classList.add('hidden');
    }

    // Drawer contents
    const emptyState = document.getElementById('cart-empty-state');
    const itemsList = document.getElementById('cart-items-list');
    const checkoutForm = document.getElementById('checkout-form');
    const footer = document.getElementById('cart-footer');

    if (!validItems.length) {
      emptyState.classList.remove('hidden');
      itemsList.innerHTML = '';
      checkoutForm.classList.add('hidden');
      footer.classList.add('hidden');
      return;
    }

    emptyState.classList.add('hidden');
    checkoutForm.classList.remove('hidden');
    footer.classList.remove('hidden');

    itemsList.innerHTML = validItems
      .map(
        ({ product, qty }) => `
        <div class="cart-item">
          <img src="${escapeHTML(product.image)}" alt="${escapeHTML(product.name)}" />
          <div class="cart-item-info">
            <strong>${escapeHTML(product.name)}</strong>
            <span>${formatBRL(product.price * qty)}</span>
          </div>
          <div class="qty-stepper">
            <button type="button" data-cart-action="dec" data-id="${escapeHTML(product.id)}" aria-label="Diminuir">−</button>
            <span>${qty}</span>
            <button type="button" data-cart-action="inc" data-id="${escapeHTML(product.id)}" aria-label="Aumentar">+</button>
          </div>
        </div>
      `
      )
      .join('');

    document.getElementById('cart-subtotal').textContent = formatBRL(subtotal);
    document.getElementById('cart-delivery-fee').textContent =
      deliveryFee > 0 ? formatBRL(deliveryFee) : 'Grátis';
    document.getElementById('cart-total').textContent = formatBRL(total);
  }

  function openCartDrawer() {
    document.getElementById('cart-backdrop').classList.remove('hidden');
    document.getElementById('cart-drawer').classList.remove('hidden');
    renderCart();
  }

  function closeCartDrawer() {
    document.getElementById('cart-backdrop').classList.add('hidden');
    document.getElementById('cart-drawer').classList.add('hidden');
  }

  function handleCheckoutSubmit(e) {
    e.preventDefault();
    const { validItems, subtotal, deliveryFee, total, deliveryType } = getCartTotals();
    if (!validItems.length) return;

    const customerName = document.getElementById('customer-name').value.trim();
    const phone = document.getElementById('customer-phone').value.trim();
    const addressInput = document.getElementById('customer-address').value.trim();
    const paymentMethod = document.getElementById('payment-method').value;
    const notes = document.getElementById('order-notes').value.trim();

    if (!customerName || !phone) {
      showToast('Preencha nome e telefone para continuar.');
      return;
    }

    if (deliveryType === 'Entrega' && !addressInput) {
      showToast('Informe o endereço de entrega.');
      return;
    }

    const newOrder = {
      id: nextOrderCode(),
      createdAt: formatNow(),
      customerName,
      phone,
      deliveryType,
      address: deliveryType === 'Entrega' ? addressInput : 'Retirada no balcão',
      paymentMethod,
      notes,
      deliveryFee,
      subtotal,
      total,
      status: 'Preparando',
      items: validItems.map(({ product, qty }) => ({
        productId: product.id,
        name: product.name,
        qty,
        price: product.price,
      })),
    };

    orders.unshift(newOrder);
    saveOrders();

    // Limpa carrinho e formulário
    cart = [];
    saveCart();
    document.getElementById('checkout-form').reset();
    updateAddressVisibility();
    closeCartDrawer();
    renderMenu();
    renderCart();

    // Exibe modal de confirmação
    const summaryEl = document.getElementById('order-success-summary');
    summaryEl.innerHTML = `
      <div><strong>Código:</strong> #${escapeHTML(newOrder.id)}</div>
      <div><strong>Cliente:</strong> ${escapeHTML(newOrder.customerName)}</div>
      <div><strong>Modalidade:</strong> ${escapeHTML(newOrder.deliveryType)} (${escapeHTML(newOrder.address)})</div>
      <div><strong>Pagamento:</strong> ${escapeHTML(newOrder.paymentMethod)}</div>
      <div><strong>Itens:</strong> ${newOrder.items.map((i) => `${i.qty}x ${escapeHTML(i.name)}`).join(', ')}</div>
      <div style="padding-top:6px;border-top:1px solid rgba(255,255,255,0.1)">
        <strong>Total Pago:</strong> <span style="color:#86efac">${formatBRL(newOrder.total)}</span>
      </div>
    `;
    openModal('order-success-modal');
    showToast(`Pedido #${newOrder.id} registrado com sucesso!`, 'success');
  }

  function updateAddressVisibility() {
    const type = getSelectedDeliveryType();
    const group = document.getElementById('address-group');
    const input = document.getElementById('customer-address');
    if (type === 'Retirada') {
      group.classList.add('hidden');
      input.required = false;
    } else {
      group.classList.remove('hidden');
      input.required = true;
    }
    renderCart();
  }

  // =========================================================
  // ADMIN: AUTENTICAÇÃO E NAVEGAÇÃO
  // =========================================================
  function isAdminAuthenticated() {
    return sessionStorage.getItem(STORAGE_KEYS.ADMIN_AUTH) === 'true';
  }

  function showAdminView() {
    document.getElementById('store-view').classList.add('hidden');
    document.getElementById('admin-view').classList.remove('hidden');
    window.scrollTo({ top: 0, behavior: 'instant' });
    renderAdminDashboard();
    renderAdminProducts();
  }

  function showStoreView() {
    document.getElementById('admin-view').classList.add('hidden');
    document.getElementById('store-view').classList.remove('hidden');
    window.scrollTo({ top: 0, behavior: 'instant' });
    renderCategoryTabs();
    renderMenu();
    renderCart();
  }

  function requestAdminAccess() {
    if (isAdminAuthenticated()) {
      showAdminView();
      return;
    }
    document.getElementById('admin-password-input').value = '';
    document.getElementById('admin-login-error').classList.add('hidden');
    openModal('admin-login-modal');
    setTimeout(() => document.getElementById('admin-password-input').focus(), 60);
  }

  function handleAdminLogin(e) {
    e.preventDefault();
    const pwd = document.getElementById('admin-password-input').value.trim();
    if (pwd === ADMIN_PASSWORD) {
      sessionStorage.setItem(STORAGE_KEYS.ADMIN_AUTH, 'true');
      closeModal('admin-login-modal');
      showAdminView();
      showToast('Bem-vindo ao Painel Administrativo!', 'success');
    } else {
      document.getElementById('admin-login-error').classList.remove('hidden');
    }
  }

  function handleAdminLogout() {
    sessionStorage.removeItem(STORAGE_KEYS.ADMIN_AUTH);
    showStoreView();
    showToast('Sessão administrativa encerrada.');
  }

  // =========================================================
  // ADMIN: DASHBOARD & VENDAS
  // =========================================================
  function renderAdminDashboard() {
    const validOrders = orders.filter((o) => o.status !== 'Cancelado');
    const totalRevenue = validOrders.reduce((acc, o) => acc + Number(o.total || 0), 0);
    const avgTicket = validOrders.length ? totalRevenue / validOrders.length : 0;
    const activeProducts = products.filter((p) => p.active).length;

    document.getElementById('kpi-revenue').textContent = formatBRL(totalRevenue);
    document.getElementById('kpi-orders').textContent = orders.length;
    document.getElementById('kpi-orders-sub').textContent =
      `${validOrders.length} válidos • ${orders.length - validOrders.length} cancelados`;
    document.getElementById('kpi-ticket').textContent = formatBRL(avgTicket);
    document.getElementById('kpi-products').textContent = `${activeProducts} / ${products.length}`;

    // 1. Receita por forma de pagamento
    const payMap = {};
    validOrders.forEach((o) => {
      payMap[o.paymentMethod] = (payMap[o.paymentMethod] || 0) + Number(o.total || 0);
    });
    const payEntries = Object.entries(payMap).sort((a, b) => b[1] - a[1]);
    const payContainer = document.getElementById('payment-breakdown');

    if (!payEntries.length) {
      payContainer.innerHTML = `<p class="muted-text">Nenhuma venda válida registrada ainda.</p>`;
    } else {
      payContainer.innerHTML = payEntries
        .map(([method, val]) => {
          const pct = totalRevenue > 0 ? Math.round((val / totalRevenue) * 100) : 0;
          return `
            <div class="breakdown-row">
              <div class="breakdown-meta">
                <span>${escapeHTML(method)}</span>
                <strong>${formatBRL(val)} (${pct}%)</strong>
              </div>
              <div class="breakdown-bar-track">
                <div class="breakdown-bar-fill" style="width:${pct}%"></div>
              </div>
            </div>
          `;
        })
        .join('');
    }

    // 2. Itens mais vendidos
    const itemMap = {};
    validOrders.forEach((o) => {
      (o.items || []).forEach((it) => {
        if (!itemMap[it.name]) {
          itemMap[it.name] = { qty: 0, revenue: 0 };
        }
        itemMap[it.name].qty += Number(it.qty || 0);
        itemMap[it.name].revenue += Number(it.qty || 0) * Number(it.price || 0);
      });
    });

    const topItems = Object.entries(itemMap)
      .sort((a, b) => b[1].qty - a[1].qty)
      .slice(0, 5);

    const topContainer = document.getElementById('top-products-list');
    if (!topItems.length) {
      topContainer.innerHTML = `<p class="muted-text">Sem itens vendidos ainda.</p>`;
    } else {
      topContainer.innerHTML = topItems
        .map(
          ([name, data], i) => `
          <div class="top-product-row">
            <span class="top-product-rank">
              <span class="rank-num">${i + 1}</span>
              <span>${escapeHTML(name)}</span>
            </span>
            <strong>${data.qty} un. • ${formatBRL(data.revenue)}</strong>
          </div>
        `
        )
        .join('');
    }

    // 3. Tabela de vendas
    const tbody = document.getElementById('sales-table-body');
    const filteredOrders =
      adminStatusFilter === 'Todos'
        ? orders
        : orders.filter((o) => o.status === adminStatusFilter);

    if (!filteredOrders.length) {
      tbody.innerHTML = `<tr><td colspan="8" style="text-align:center;color:var(--text-muted);padding:28px">Nenhuma venda encontrada para este filtro.</td></tr>`;
      return;
    }

    tbody.innerHTML = filteredOrders
      .map((o) => {
        const itemsPreview = (o.items || []).map((i) => `${i.qty}x ${i.name}`).join(', ');
        const statusClass = `status-${o.status.replace(/\s+/g, '-')}`;
        return `
          <tr>
            <td><strong>#${escapeHTML(o.id)}</strong></td>
            <td>${escapeHTML(o.createdAt)}</td>
            <td>
              <strong>${escapeHTML(o.customerName)}</strong><br />
              <small style="color:var(--text-soft)">${escapeHTML(o.deliveryType)}</small>
            </td>
            <td style="max-width:230px">${escapeHTML(itemsPreview)}</td>
            <td>${escapeHTML(o.paymentMethod)}</td>
            <td><strong>${formatBRL(o.total)}</strong></td>
            <td>
              <select class="status-select ${statusClass}" data-order-status="${escapeHTML(o.id)}" aria-label="Status do pedido ${escapeHTML(o.id)}">
                ${['Preparando', 'Em entrega', 'Entregue', 'Cancelado']
                  .map(
                    (st) =>
                      `<option value="${st}" ${o.status === st ? 'selected' : ''}>${st}</option>`
                  )
                  .join('')}
              </select>
            </td>
            <td>
              <div class="table-actions">
                <button type="button" class="btn btn-outline btn-sm" data-view-order="${escapeHTML(o.id)}">Detalhes</button>
                <button type="button" class="btn btn-danger btn-sm" data-delete-order="${escapeHTML(o.id)}" title="Excluir registro">✕</button>
              </div>
            </td>
          </tr>
        `;
      })
      .join('');
  }

  function openOrderDetails(orderId) {
    const order = orders.find((o) => o.id === orderId);
    if (!order) return;

    document.getElementById('order-detail-title').textContent = `Pedido #${order.id}`;
    document.getElementById('order-detail-body').innerHTML = `
      <div class="order-receipt">
        <div><strong>Data/Hora:</strong> ${escapeHTML(order.createdAt)}</div>
        <div><strong>Status:</strong> ${escapeHTML(order.status)}</div>
        <div><strong>Cliente:</strong> ${escapeHTML(order.customerName)}</div>
        <div><strong>Telefone:</strong> ${escapeHTML(order.phone || '—')}</div>
        <div><strong>Modalidade:</strong> ${escapeHTML(order.deliveryType)}</div>
        <div><strong>Endereço:</strong> ${escapeHTML(order.address)}</div>
        <div><strong>Pagamento:</strong> ${escapeHTML(order.paymentMethod)}</div>
        ${order.notes ? `<div><strong>Observações:</strong> ${escapeHTML(order.notes)}</div>` : ''}
      </div>
      <div>
        <strong style="font-size:0.86rem;color:var(--text-muted)">Itens do Pedido:</strong>
        <div style="margin-top:8px;display:flex;flex-direction:column;gap:6px">
          ${(order.items || [])
            .map(
              (i) => `
              <div style="display:flex;justify-content:space-between;font-size:0.9rem">
                <span>${i.qty}x ${escapeHTML(i.name)}</span>
                <strong>${formatBRL(i.qty * i.price)}</strong>
              </div>
            `
            )
            .join('')}
          <div style="display:flex;justify-content:space-between;font-size:0.86rem;color:var(--text-muted);padding-top:6px;border-top:1px solid var(--border)">
            <span>Taxa de entrega</span>
            <span>${order.deliveryFee > 0 ? formatBRL(order.deliveryFee) : 'Grátis'}</span>
          </div>
          <div style="display:flex;justify-content:space-between;font-size:1rem;font-weight:700">
            <span>Total</span>
            <span style="color:#86efac">${formatBRL(order.total)}</span>
          </div>
        </div>
      </div>
    `;
    openModal('order-detail-modal');
  }

  // =========================================================
  // ADMIN: VENDA MANUAL (BALCÃO)
  // =========================================================
  function openManualSaleModal() {
    const select = document.getElementById('manual-product');
    select.innerHTML = products
      .map(
        (p) =>
          `<option value="${escapeHTML(p.id)}">${escapeHTML(p.name)} — ${formatBRL(p.price)}</option>`
      )
      .join('');
    document.getElementById('manual-customer').value = 'Cliente Balcão';
    document.getElementById('manual-qty').value = '1';
    updateManualSaleTotal();
    openModal('manual-sale-modal');
  }

  function updateManualSaleTotal() {
    const prodId = document.getElementById('manual-product').value;
    const qty = Math.max(1, parseInt(document.getElementById('manual-qty').value || '1', 10));
    const prod = products.find((p) => p.id === prodId);
    const total = prod ? prod.price * qty : 0;
    document.getElementById('manual-total-display').textContent = formatBRL(total);
  }

  function handleManualSaleSubmit(e) {
    e.preventDefault();
    const prodId = document.getElementById('manual-product').value;
    const prod = products.find((p) => p.id === prodId);
    if (!prod) return;

    const qty = Math.max(1, parseInt(document.getElementById('manual-qty').value || '1', 10));
    const customerName = document.getElementById('manual-customer').value.trim() || 'Cliente Balcão';
    const paymentMethod = document.getElementById('manual-payment').value;
    const total = prod.price * qty;

    const sale = {
      id: nextOrderCode(),
      createdAt: formatNow(),
      customerName,
      phone: 'Balcão',
      deliveryType: 'Retirada',
      address: 'Venda presencial (Balcão)',
      paymentMethod,
      notes: 'Registrada manualmente no painel',
      deliveryFee: 0,
      subtotal: total,
      total,
      status: 'Entregue',
      items: [{ productId: prod.id, name: prod.name, qty, price: prod.price }],
    };

    orders.unshift(sale);
    saveOrders();
    closeModal('manual-sale-modal');
    renderAdminDashboard();
    showToast(`Venda #${sale.id} registrada (${formatBRL(total)})!`, 'success');
  }

  // =========================================================
  // ADMIN: CRUD DE PRODUTOS
  // =========================================================
  function renderAdminProducts() {
    const tbody = document.getElementById('products-table-body');
    const filtered =
      adminProductCategoryFilter === 'Todos'
        ? products
        : products.filter((p) => p.category === adminProductCategoryFilter);

    if (!filtered.length) {
      tbody.innerHTML = `<tr><td colspan="6" style="text-align:center;color:var(--text-muted);padding:28px">Nenhum produto nesta categoria.</td></tr>`;
      return;
    }

    tbody.innerHTML = filtered
      .map(
        (p) => `
        <tr>
          <td>
            <div class="table-product-cell">
              <img src="${escapeHTML(p.image)}" alt="${escapeHTML(p.name)}" />
              <div>
                <strong>${escapeHTML(p.name)}</strong>
                <small>${escapeHTML(p.description)}</small>
              </div>
            </div>
          </td>
          <td>${escapeHTML(p.category)}</td>
          <td><strong>${formatBRL(p.price)}</strong></td>
          <td>${p.badge ? `<span class="demo-pill" style="margin:0">${escapeHTML(p.badge)}</span>` : '<span style="color:var(--text-soft)">—</span>'}</td>
          <td>
            <button type="button" class="pill-toggle ${p.active ? 'active' : 'inactive'}" data-toggle-product="${escapeHTML(p.id)}">
              ${p.active ? '● Disponível' : '○ Esgotado'}
            </button>
          </td>
          <td>
            <div class="table-actions">
              <button type="button" class="btn btn-outline btn-sm" data-edit-product="${escapeHTML(p.id)}">Editar</button>
              <button type="button" class="btn btn-danger btn-sm" data-delete-product="${escapeHTML(p.id)}" title="Remover produto">Excluir</button>
            </div>
          </td>
        </tr>
      `
      )
      .join('');
  }

  function openProductModal(productId = null) {
    const form = document.getElementById('product-form');
    form.reset();

    const presetSelect = document.getElementById('product-image-preset');
    const urlInput = document.getElementById('product-image-url');

    if (productId) {
      const prod = products.find((p) => p.id === productId);
      if (!prod) return;

      document.getElementById('product-modal-title').textContent = 'Editar Produto';
      document.getElementById('product-id').value = prod.id;
      document.getElementById('product-name').value = prod.name;
      document.getElementById('product-category').value = prod.category;
      document.getElementById('product-price').value = prod.price.toFixed(2);
      document.getElementById('product-badge').value = prod.badge || '';
      document.getElementById('product-description').value = prod.description;
      document.getElementById('product-active').checked = Boolean(prod.active);

      const hasPreset = Array.from(presetSelect.options).some((opt) => opt.value === prod.image);
      presetSelect.value = hasPreset ? prod.image : 'custom';
      urlInput.value = prod.image;
    } else {
      document.getElementById('product-modal-title').textContent = 'Novo Produto';
      document.getElementById('product-id').value = '';
      document.getElementById('product-active').checked = true;
      presetSelect.value = STOCK_IMAGES.classic;
      urlInput.value = STOCK_IMAGES.classic;
    }

    openModal('product-modal');
  }

  function handleProductSubmit(e) {
    e.preventDefault();
    const id = document.getElementById('product-id').value;
    const name = document.getElementById('product-name').value.trim();
    const category = document.getElementById('product-category').value;
    const price = parseFloat(document.getElementById('product-price').value);
    const badge = document.getElementById('product-badge').value;
    const description = document.getElementById('product-description').value.trim();
    const image =
      document.getElementById('product-image-url').value.trim() || STOCK_IMAGES.classic;
    const active = document.getElementById('product-active').checked;

    if (!name || Number.isNaN(price) || price <= 0) {
      showToast('Verifique o nome e o preço do produto.');
      return;
    }

    if (id) {
      const idx = products.findIndex((p) => p.id === id);
      if (idx !== -1) {
        products[idx] = { ...products[idx], name, category, price, badge, description, image, active };
      }
      showToast(`Produto "${name}" atualizado!`, 'success');
    } else {
      products.unshift({
        id: `prod-${Date.now()}`,
        name,
        category,
        price,
        badge,
        description,
        image,
        active,
      });
      showToast(`Produto "${name}" adicionado ao cardápio!`, 'success');
    }

    saveProducts();
    closeModal('product-modal');
    renderAdminProducts();
    renderAdminDashboard();
    renderCategoryTabs();
    renderMenu();
    renderCart();
  }

  function resetDemoData() {
    if (!confirm('Restaurar o cardápio e o histórico de vendas padrão de demonstração?')) return;
    products = structuredClone(DEFAULT_PRODUCTS);
    orders = structuredClone(DEFAULT_ORDERS);
    cart = [];
    saveProducts();
    saveOrders();
    saveCart();
    renderAdminDashboard();
    renderAdminProducts();
    renderCategoryTabs();
    renderMenu();
    renderCart();
    showToast('Dados de demonstração restaurados!', 'success');
  }

  // =========================================================
  // EVENT LISTENERS
  // =========================================================
  function bindEvents() {
    // Storefront: Search & Categories
    document.getElementById('menu-search').addEventListener('input', (e) => {
      searchQuery = e.target.value;
      renderMenu();
    });

    document.getElementById('clear-search-btn').addEventListener('click', () => {
      searchQuery = '';
      selectedCategory = 'Todos';
      document.getElementById('menu-search').value = '';
      renderCategoryTabs();
      renderMenu();
    });

    document.getElementById('category-tabs').addEventListener('click', (e) => {
      const btn = e.target.closest('.category-pill');
      if (!btn) return;
      selectedCategory = btn.dataset.category;
      renderCategoryTabs();
      renderMenu();
    });

    // Quick jump to Combos
    const jumpToCombos = () => {
      selectedCategory = 'Combos';
      renderCategoryTabs();
      renderMenu();
      document.getElementById('cardapio').scrollIntoView({ behavior: 'smooth' });
    };
    document.getElementById('hero-combo-btn').addEventListener('click', jumpToCombos);
    document.getElementById('nav-combos-link').addEventListener('click', (e) => {
      e.preventDefault();
      jumpToCombos();
    });

    // Menu grid actions (Add / Inc / Dec)
    document.getElementById('menu-grid').addEventListener('click', (e) => {
      const btn = e.target.closest('[data-action]');
      if (!btn) return;
      const { action, id } = btn.dataset;
      if (action === 'add') addToCart(id);
      if (action === 'inc') updateCartQty(id, 1);
      if (action === 'dec') updateCartQty(id, -1);
    });

    // Cart drawer
    document.getElementById('open-cart-btn').addEventListener('click', openCartDrawer);
    document.getElementById('mobile-cart-trigger').addEventListener('click', openCartDrawer);
    document.getElementById('close-cart-btn').addEventListener('click', closeCartDrawer);
    document.getElementById('cart-backdrop').addEventListener('click', closeCartDrawer);

    document.getElementById('cart-items-list').addEventListener('click', (e) => {
      const btn = e.target.closest('[data-cart-action]');
      if (!btn) return;
      const { cartAction, id } = btn.dataset;
      updateCartQty(id, cartAction === 'inc' ? 1 : -1);
    });

    document.querySelectorAll('input[name="deliveryType"]').forEach((radio) => {
      radio.addEventListener('change', updateAddressVisibility);
    });

    document.getElementById('checkout-form').addEventListener('submit', handleCheckoutSubmit);

    // Admin access & auth
    document.getElementById('open-admin-btn').addEventListener('click', requestAdminAccess);
    document.getElementById('success-open-admin-btn').addEventListener('click', () => {
      closeModal('order-success-modal');
      requestAdminAccess();
    });
    document.getElementById('admin-login-form').addEventListener('submit', handleAdminLogin);
    document.getElementById('back-to-store-btn').addEventListener('click', showStoreView);
    document.getElementById('admin-logout-btn').addEventListener('click', handleAdminLogout);

    // Admin tabs
    document.querySelectorAll('.admin-tab').forEach((tab) => {
      tab.addEventListener('click', () => {
        document.querySelectorAll('.admin-tab').forEach((t) => t.classList.remove('active'));
        tab.classList.add('active');
        const target = tab.dataset.tab;
        document.getElementById('admin-tab-sales').classList.toggle('hidden', target !== 'sales');
        document.getElementById('admin-tab-products').classList.toggle('hidden', target !== 'products');
      });
    });

    // Admin sales controls
    document.getElementById('sales-status-filter').addEventListener('change', (e) => {
      adminStatusFilter = e.target.value;
      renderAdminDashboard();
    });

    document.getElementById('sales-table-body').addEventListener('change', (e) => {
      const sel = e.target.closest('[data-order-status]');
      if (!sel) return;
      const order = orders.find((o) => o.id === sel.dataset.orderStatus);
      if (order) {
        order.status = sel.value;
        saveOrders();
        renderAdminDashboard();
        showToast(`Status do pedido #${order.id} alterado para ${order.status}.`);
      }
    });

    document.getElementById('sales-table-body').addEventListener('click', (e) => {
      const viewBtn = e.target.closest('[data-view-order]');
      if (viewBtn) {
        openOrderDetails(viewBtn.dataset.viewOrder);
        return;
      }
      const delBtn = e.target.closest('[data-delete-order]');
      if (delBtn) {
        const id = delBtn.dataset.deleteOrder;
        if (!confirm(`Remover o registro do pedido #${id}?`)) return;
        orders = orders.filter((o) => o.id !== id);
        saveOrders();
        renderAdminDashboard();
        showToast(`Registro #${id} removido.`);
      }
    });

    document.getElementById('open-manual-sale-btn').addEventListener('click', openManualSaleModal);
    document.getElementById('manual-product').addEventListener('change', updateManualSaleTotal);
    document.getElementById('manual-qty').addEventListener('input', updateManualSaleTotal);
    document.getElementById('manual-sale-form').addEventListener('submit', handleManualSaleSubmit);
    document.getElementById('reset-demo-btn').addEventListener('click', resetDemoData);

    // Admin products controls
    document.getElementById('admin-product-category-filter').addEventListener('change', (e) => {
      adminProductCategoryFilter = e.target.value;
      renderAdminProducts();
    });

    document.getElementById('new-product-btn').addEventListener('click', () => openProductModal(null));

    document.getElementById('products-table-body').addEventListener('click', (e) => {
      const toggleBtn = e.target.closest('[data-toggle-product]');
      if (toggleBtn) {
        const prod = products.find((p) => p.id === toggleBtn.dataset.toggleProduct);
        if (prod) {
          prod.active = !prod.active;
          saveProducts();
          renderAdminProducts();
          renderAdminDashboard();
          renderMenu();
          showToast(`${prod.name}: ${prod.active ? 'Disponível' : 'Esgotado'}.`);
        }
        return;
      }

      const editBtn = e.target.closest('[data-edit-product]');
      if (editBtn) {
        openProductModal(editBtn.dataset.editProduct);
        return;
      }

      const delBtn = e.target.closest('[data-delete-product]');
      if (delBtn) {
        const prod = products.find((p) => p.id === delBtn.dataset.deleteProduct);
        if (!prod) return;
        if (!confirm(`Excluir "${prod.name}" do cardápio?`)) return;
        products = products.filter((p) => p.id !== prod.id);
        saveProducts();
        renderAdminProducts();
        renderAdminDashboard();
        renderMenu();
        showToast(`Produto "${prod.name}" excluído.`);
      }
    });

    document.getElementById('product-image-preset').addEventListener('change', (e) => {
      if (e.target.value !== 'custom') {
        document.getElementById('product-image-url').value = e.target.value;
      }
    });

    document.getElementById('product-form').addEventListener('submit', handleProductSubmit);

    // Generic modal close buttons & backdrop click
    document.querySelectorAll('.modal-close').forEach((btn) => {
      btn.addEventListener('click', () => closeModal(btn.dataset.close));
    });

    document.querySelectorAll('.modal-backdrop').forEach((backdrop) => {
      backdrop.addEventListener('click', (e) => {
        if (e.target === backdrop) backdrop.classList.add('hidden');
      });
    });

    // Escape key closes drawer/modals
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        closeCartDrawer();
        document.querySelectorAll('.modal-backdrop').forEach((m) => m.classList.add('hidden'));
      }
    });
  }

  // =========================================================
  // INICIALIZAÇÃO
  // =========================================================
  function init() {
    renderCategoryTabs();
    renderMenu();
    renderCart();
    bindEvents();
  }

  init();
})();
