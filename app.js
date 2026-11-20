/* =========================================================
   TOP LANCHES — MVP ESTÁTICO (STOREFRONT + PAINEL ADMIN)
   ========================================================= */

(() => {
  'use strict';

  const CATALOG_VERSION = '2.0-classic';

  const STORAGE_KEYS = {
    PRODUCTS: 'topLanches_products_v2',
    ORDERS: 'topLanches_orders_v2',
    CART: 'topLanches_cart_v2',
    CATALOG_VERSION: 'topLanches_catalog_version',
    ADMIN_AUTH: 'topLanches_admin_session_v1',
  };

  // Senha padrão para demonstração do MVP
  const ADMIN_PASSWORD = 'top123';
  const DELIVERY_FEE = 6.9;
  const CATEGORY_ORDER = ['Lanches Clássicos', 'Combos', 'Porções', 'Bebidas'];
  const ALLOWED_ORDER_STATUSES = ['Preparando', 'Em entrega', 'Entregue', 'Cancelado'];

  const STOCK_IMAGES = {
    xBurguer: 'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=800&q=80',
    xSalada: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80',
    xBacon: 'https://images.unsplash.com/photo-1683882330385-e9270342b306?auto=format&fit=crop&w=800&q=80',
    xEgg: 'https://images.unsplash.com/photo-1559671743-c67a25c1c665?auto=format&fit=crop&w=800&q=80',
    xTudo: 'https://images.unsplash.com/photo-1700835880369-467ebff9d324?auto=format&fit=crop&w=800&q=80',
    hotDog: 'https://images.unsplash.com/photo-1669661825279-280c2df3a3a3?auto=format&fit=crop&w=800&q=80',
    mistoQuente: 'https://images.unsplash.com/photo-1788843304341-7edbe347ba66?auto=format&fit=crop&w=800&q=80',
    combo: 'https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?auto=format&fit=crop&w=800&q=80',
    fries: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=800&q=80',
    onionRings: 'https://images.unsplash.com/photo-1630825533949-74f62f54553a?auto=format&fit=crop&w=800&q=80',
    soda: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=800&q=80',
    orangeJuice: 'https://images.unsplash.com/photo-1613478223719-2ab802602423?auto=format&fit=crop&w=800&q=80',
    milkshake: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=800&q=80',
  };

  // =========================================================
  // DADOS FANTASIA INICIAIS (CARDÁPIO CLÁSSICO)
  // =========================================================
  const DEFAULT_PRODUCTS = [
    {
      id: 'prod-1',
      name: 'X-Burguer',
      category: 'Lanches Clássicos',
      price: 18.9,
      description: 'Pão de hambúrguer tradicional, hambúrguer bovino na chapa e queijo mussarela derretido.',
      image: STOCK_IMAGES.xBurguer,
      badge: 'Clássico',
      active: true,
      customizationPrompt: 'Gostaria de retirar algo?',
      customizationOptions: ['Queijo', 'Maionese'],
    },
    {
      id: 'prod-2',
      name: 'X-Salada',
      category: 'Lanches Clássicos',
      price: 21.9,
      description: 'Pão de hambúrguer, carne na chapa, queijo mussarela, alface, tomate fresco e maionese da casa.',
      image: STOCK_IMAGES.xSalada,
      badge: 'Mais Pedido',
      active: true,
      customizationPrompt: 'Gostaria de retirar algo?',
      customizationOptions: ['Alface', 'Tomate', 'Cebola', 'Maionese'],
    },
    {
      id: 'prod-3',
      name: 'X-Bacon',
      category: 'Lanches Clássicos',
      price: 25.9,
      description: 'Pão de hambúrguer, hambúrguer bovino, queijo derretido, fatias de bacon crocante, alface e tomate.',
      image: STOCK_IMAGES.xBacon,
      badge: '',
      active: true,
      customizationPrompt: 'Gostaria de retirar algo?',
      customizationOptions: ['Bacon', 'Alface', 'Tomate', 'Maionese'],
    },
    {
      id: 'prod-4',
      name: 'X-Egg',
      category: 'Lanches Clássicos',
      price: 23.9,
      description: 'Pão de hambúrguer, carne na chapa, queijo mussarela, ovo frito na chapa, alface, tomate e maionese.',
      image: STOCK_IMAGES.xEgg,
      badge: '',
      active: true,
      customizationPrompt: 'Gostaria de retirar algo?',
      customizationOptions: ['Ovo', 'Alface', 'Tomate', 'Maionese'],
    },
    {
      id: 'prod-5',
      name: 'X-Tudo',
      category: 'Lanches Clássicos',
      price: 29.9,
      description: 'O completo da casa: pão tradicional, hambúrguer, queijo, presunto, bacon, ovo, milho, batata palha, alface e tomate.',
      image: STOCK_IMAGES.xTudo,
      badge: 'Mais Pedido',
      active: true,
      customizationPrompt: 'Gostaria de retirar algo?',
      customizationOptions: ['Bacon', 'Ovo', 'Presunto', 'Milho', 'Batata palha', 'Alface', 'Tomate'],
    },
    {
      id: 'prod-6',
      name: 'Cachorro-Quente Tradicional',
      category: 'Lanches Clássicos',
      price: 16.9,
      description: 'Pão macio de hot dog, duas salsichas, molho de tomate caseiro, milho, ervilha, batata palha e queijo ralado.',
      image: STOCK_IMAGES.hotDog,
      badge: '',
      active: true,
      customizationPrompt: 'Gostaria de retirar algo?',
      customizationOptions: ['Milho', 'Ervilha', 'Batata palha', 'Queijo ralado', 'Molho'],
    },
    {
      id: 'prod-7',
      name: 'Misto Quente na Chapa',
      category: 'Lanches Clássicos',
      price: 14.5,
      description: 'Pão de forma dourado na chapa com manteiga, presunto fatiado e queijo mussarela bem derretido.',
      image: STOCK_IMAGES.mistoQuente,
      badge: '',
      active: true,
      customizationPrompt: 'Gostaria de retirar algo?',
      customizationOptions: ['Presunto', 'Queijo', 'Manteiga na chapa'],
    },
    {
      id: 'prod-8',
      name: 'Combo X-Salada + Fritas + Refri',
      category: 'Combos',
      price: 32.9,
      description: '1 X-Salada tradicional + 1 porção individual de batata frita crocante + 1 refrigerante lata 350ml.',
      image: STOCK_IMAGES.combo,
      badge: 'Combo',
      active: true,
      customizationPrompt: 'Gostaria de retirar algo?',
      customizationOptions: ['Alface', 'Tomate', 'Maionese', 'Gelo e limão'],
    },
    {
      id: 'prod-9',
      name: 'Combo X-Bacon + Fritas + Refri',
      category: 'Combos',
      price: 36.9,
      description: '1 X-Bacon caprichado + 1 porção individual de batata frita crocante + 1 refrigerante lata 350ml.',
      image: STOCK_IMAGES.combo,
      badge: 'Oferta',
      active: true,
      customizationPrompt: 'Gostaria de retirar algo?',
      customizationOptions: ['Bacon', 'Alface', 'Tomate', 'Maionese'],
    },
    {
      id: 'prod-10',
      name: 'Batata Frita Tradicional (G)',
      category: 'Porções',
      price: 18.9,
      description: 'Porção generosa de batata palito frita na hora, sequinha e com sal na medida. Acompanha catchup e maionese.',
      image: STOCK_IMAGES.fries,
      badge: 'Mais Pedido',
      active: true,
      customizationPrompt: 'Gostaria de retirar algo?',
      customizationOptions: ['Sal', 'Catchup', 'Maionese'],
    },
    {
      id: 'prod-11',
      name: 'Anéis de Cebola Crocantes',
      category: 'Porções',
      price: 21.9,
      description: 'Porção de cebolas empanadas fritas até ficarem douradas e crocantes. Acompanha molho rosê da casa.',
      image: STOCK_IMAGES.onionRings,
      badge: '',
      active: true,
      customizationPrompt: 'Gostaria de retirar algo?',
      customizationOptions: ['Molho rosê'],
    },
    {
      id: 'prod-12',
      name: 'Refrigerante Lata 350ml',
      category: 'Bebidas',
      price: 6.5,
      description: 'Coca-Cola, Guaraná Antarctica, Fanta Laranja ou Sprite bem gelados (informe o sabor nas observações).',
      image: STOCK_IMAGES.soda,
      badge: '',
      active: true,
      customizationPrompt: 'Preferência ou retirada:',
      customizationOptions: ['Gelo e limão'],
    },
    {
      id: 'prod-13',
      name: 'Suco Natural de Laranja 400ml',
      category: 'Bebidas',
      price: 9.9,
      description: 'Suco de laranja feito na hora, servido bem gelado.',
      image: STOCK_IMAGES.orangeJuice,
      badge: '',
      active: true,
      customizationPrompt: 'Preferência ou retirada:',
      customizationOptions: ['Açúcar', 'Gelo'],
    },
    {
      id: 'prod-14',
      name: 'Milk-Shake Tradicional 400ml',
      category: 'Bebidas',
      price: 16.9,
      description: 'Milk-shake cremoso de chocolate ou morango batido na hora com cobertura e chantilly.',
      image: STOCK_IMAGES.milkshake,
      badge: '',
      active: true,
      customizationPrompt: 'Gostaria de retirar algo?',
      customizationOptions: ['Chantilly', 'Calda'],
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
      notes: 'Sem cebola no X-Salada',
      deliveryFee: 6.9,
      subtotal: 51.8,
      total: 58.7,
      status: 'Preparando',
      items: [
        { productId: 'prod-5', name: 'X-Tudo', qty: 1, price: 29.9 },
        { productId: 'prod-2', name: 'X-Salada', qty: 1, price: 21.9 },
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
      subtotal: 53.8,
      total: 60.7,
      status: 'Em entrega',
      items: [
        { productId: 'prod-9', name: 'Combo X-Bacon + Fritas + Refri', qty: 1, price: 36.9 },
        { productId: 'prod-14', name: 'Milk-Shake Tradicional 400ml', qty: 1, price: 16.9 },
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
      subtotal: 44.8,
      total: 44.8,
      status: 'Entregue',
      items: [
        { productId: 'prod-3', name: 'X-Bacon', qty: 1, price: 25.9 },
        { productId: 'prod-10', name: 'Batata Frita Tradicional (G)', qty: 1, price: 18.9 },
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
      subtotal: 65.8,
      total: 72.7,
      status: 'Entregue',
      items: [
        { productId: 'prod-8', name: 'Combo X-Salada + Fritas + Refri', qty: 2, price: 32.9 },
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
      subtotal: 69.7,
      total: 76.6,
      status: 'Entregue',
      items: [
        { productId: 'prod-4', name: 'X-Egg', qty: 2, price: 23.9 },
        { productId: 'prod-11', name: 'Anéis de Cebola Crocantes', qty: 1, price: 21.9 },
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
      subtotal: 42.3,
      total: 42.3,
      status: 'Entregue',
      items: [
        { productId: 'prod-1', name: 'X-Burguer', qty: 1, price: 18.9 },
        { productId: 'prod-6', name: 'Cachorro-Quente Tradicional', qty: 1, price: 16.9 },
        { productId: 'prod-12', name: 'Refrigerante Lata 350ml', qty: 1, price: 6.5 },
      ],
    },
  ];

  // =========================================================
  // ESTADO DA APLICAÇÃO & NORMALIZAÇÃO
  // =========================================================
  function sanitizeImageUrl(url) {
    const trimmed = String(url ?? '').trim();
    if (/^(https?:\/\/|\.\/|\/)/i.test(trimmed)) {
      return trimmed;
    }
    return STOCK_IMAGES.xSalada;
  }

  function defaultOptionsForCategory(category) {
    if (category === 'Lanches Clássicos' || category === 'Combos') {
      return ['Alface', 'Tomate', 'Cebola', 'Maionese', 'Catchup', 'Mostarda'];
    }
    if (category === 'Porções') {
      return ['Sal', 'Catchup', 'Maionese'];
    }
    if (category === 'Bebidas') {
      return ['Gelo e limão'];
    }
    return ['Cebola', 'Maionese'];
  }

  function roundCurrency(value) {
    return Math.round((Number(value) || 0) * 100) / 100;
  }

  function normalizeText(str) {
    return String(str ?? '')
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .toLowerCase();
  }

  function parseNumericPrice(value) {
    if (typeof value === 'number') {
      return Number.isFinite(value) && value >= 0 ? roundCurrency(value) : 0;
    }
    const cleaned = String(value ?? '').trim().replace(/\s+/g, '').replace(',', '.');
    const num = Number(cleaned);
    return Number.isFinite(num) && num >= 0 ? roundCurrency(num) : 0;
  }

  function normalizeProduct(raw, index = 0) {
    const id = String(raw?.id ?? `prod-${Date.now()}-${index}`);
    const defaultMatch = DEFAULT_PRODUCTS.find((d) => d.id === id);
    const category = String(raw?.category ?? defaultMatch?.category ?? 'Lanches Clássicos').trim() || 'Lanches Clássicos';
    const price = parseNumericPrice(raw?.price ?? defaultMatch?.price ?? 0);
    const options = Array.isArray(raw?.customizationOptions)
      ? raw.customizationOptions.map((o) => String(o).trim()).filter(Boolean)
      : defaultMatch
      ? [...defaultMatch.customizationOptions]
      : defaultOptionsForCategory(category);

    return {
      id,
      name: String(raw?.name ?? defaultMatch?.name ?? 'Produto').trim() || 'Produto',
      category,
      price: price > 0 ? price : (defaultMatch?.price ?? 1),
      description: String(raw?.description ?? defaultMatch?.description ?? '').trim(),
      image: sanitizeImageUrl(raw?.image ?? defaultMatch?.image),
      badge: String(raw?.badge ?? '').trim(),
      active: raw?.active !== false && raw?.active !== 'false',
      customizationPrompt:
        String(raw?.customizationPrompt ?? defaultMatch?.customizationPrompt ?? 'Gostaria de retirar algo?').trim() ||
        'Gostaria de retirar algo?',
      customizationOptions: [...new Set(options)],
    };
  }

  function buildCartLineId(productId, removedOptions = [], customNote = '') {
    const normalizedRemoved = [...new Set(removedOptions.map((o) => String(o).trim()).filter(Boolean))].sort((a, b) =>
      a.localeCompare(b, 'pt-BR')
    );
    const normalizedNote = String(customNote || '').trim();
    const removedKey = normalizedRemoved.map((r) => encodeURIComponent(r.toLowerCase())).join(',');
    const noteKey = encodeURIComponent(normalizedNote.toLowerCase());
    return `${String(productId)}::${removedKey}::${noteKey}`;
  }

  function normalizeCartEntry(raw) {
    if (!raw || !raw.productId) return null;
    const productId = String(raw.productId);
    const qty = Math.max(0, parseInt(raw.qty, 10) || 0);
    if (qty <= 0) return null;

    const removedOptions = Array.isArray(raw.removedOptions)
      ? [...new Set(raw.removedOptions.map((o) => String(o).trim()).filter(Boolean))]
      : [];
    const customNote = String(raw.customNote ?? '').trim();

    return {
      lineId: buildCartLineId(productId, removedOptions, customNote),
      productId,
      qty,
      removedOptions,
      customNote,
    };
  }

  function normalizeOrder(raw, index = 0) {
    if (!raw || typeof raw !== 'object' || Array.isArray(raw) || !Array.isArray(raw.items)) {
      return null;
    }
    const id = String(raw.id ?? '').trim() || `TL-${1001 + index}`;
    const status = ALLOWED_ORDER_STATUSES.includes(raw.status) ? raw.status : 'Preparando';
    const deliveryType =
      raw.deliveryType === 'Retirada' || raw.deliveryType === 'Entrega' ? raw.deliveryType : 'Entrega';
    const paymentMethod = String(raw.paymentMethod ?? '').trim() || 'Pix';
    const items = raw.items
      .filter((it) => it && typeof it === 'object' && !Array.isArray(it))
      .map((it) => ({
        productId: String(it.productId ?? ''),
        name: String(it.name ?? 'Item').trim() || 'Item',
        qty: Math.max(1, parseInt(it.qty, 10) || 1),
        price: parseNumericPrice(it.price ?? 0),
        ...(it.customization ? { customization: String(it.customization).trim() } : {}),
      }));

    const itemsSubtotal = roundCurrency(items.reduce((acc, it) => acc + it.price * it.qty, 0));
    const deliveryFee =
      raw.deliveryFee !== undefined && raw.deliveryFee !== null && raw.deliveryFee !== ''
        ? parseNumericPrice(raw.deliveryFee)
        : 0;
    const rawSubtotalNum =
      raw.subtotal !== undefined && raw.subtotal !== null && raw.subtotal !== ''
        ? Number(String(raw.subtotal).replace(',', '.'))
        : NaN;
    const subtotal = Number.isFinite(rawSubtotalNum) && rawSubtotalNum >= 0
      ? roundCurrency(rawSubtotalNum)
      : itemsSubtotal;
    const rawTotalNum =
      raw.total !== undefined && raw.total !== null && raw.total !== ''
        ? Number(String(raw.total).replace(',', '.'))
        : NaN;
    const total = Number.isFinite(rawTotalNum) && rawTotalNum >= 0
      ? roundCurrency(rawTotalNum)
      : roundCurrency(subtotal + deliveryFee);

    return {
      id,
      createdAt: String(raw.createdAt ?? '').trim() || formatNow(),
      customerName: String(raw.customerName ?? '').trim() || 'Cliente',
      phone: String(raw.phone ?? '').trim(),
      deliveryType,
      address:
        String(raw.address ?? '').trim() ||
        (deliveryType === 'Retirada' ? 'Retirada no balcão' : ''),
      paymentMethod,
      notes: String(raw.notes ?? '').trim(),
      deliveryFee,
      subtotal,
      total,
      status,
      items,
    };
  }

  function formatCustomizationText(entry) {
    if (!entry) return '';
    const parts = [];
    if (Array.isArray(entry.removedOptions) && entry.removedOptions.length) {
      parts.push(`Sem ${entry.removedOptions.join(', ')}`);
    }
    const note = String(entry.customNote ?? '').trim();
    if (note) {
      parts.push(`Obs: ${note}`);
    }
    return parts.join(' • ');
  }

  function migrateCatalogStorage() {
    try {
      if (localStorage.getItem(STORAGE_KEYS.CATALOG_VERSION) !== CATALOG_VERSION) {
        localStorage.removeItem('topLanches_products_v1');
        localStorage.removeItem('topLanches_orders_v1');
        localStorage.removeItem('topLanches_cart_v1');
        localStorage.setItem(STORAGE_KEYS.CATALOG_VERSION, CATALOG_VERSION);
      }
    } catch {
      // Ignore storage access errors
    }
  }

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

  migrateCatalogStorage();

  let products = loadStorage(STORAGE_KEYS.PRODUCTS, DEFAULT_PRODUCTS).map((p, i) => normalizeProduct(p, i));
  if (!products.length) {
    products = structuredClone(DEFAULT_PRODUCTS);
  }
  let orders = loadStorage(STORAGE_KEYS.ORDERS, DEFAULT_ORDERS)
    .map((o, i) => normalizeOrder(o, i))
    .filter(Boolean);
  const rawCart = loadStorage(STORAGE_KEYS.CART, []);
  let cart = rawCart
    .map(normalizeCartEntry)
    .filter(Boolean)
    .filter((entry) => products.some((p) => String(p.id) === String(entry.productId)));
  if (cart.length !== rawCart.length) {
    saveCart();
  }

  function pruneOrphanCartEntries() {
    const existingIds = new Set(products.map((p) => String(p.id)));
    const nextCart = cart.filter((entry) => existingIds.has(String(entry.productId)));
    if (nextCart.length !== cart.length) {
      cart = nextCart;
      saveCart();
    }
  }

  let selectedCategory = 'Todos';
  let searchQuery = '';
  let adminStatusFilter = 'Todos';
  let adminProductCategoryFilter = 'Todos';
  let activeProductId = null;
  let detailQty = 1;
  let detailRemovedOptions = new Set();

  // =========================================================
  // UTILITÁRIOS
  // =========================================================
  function saveProducts() {
    try {
      localStorage.setItem(STORAGE_KEYS.PRODUCTS, JSON.stringify(products));
    } catch {
      showToast('Não foi possível salvar os produtos no navegador.');
    }
  }

  function saveOrders() {
    try {
      localStorage.setItem(STORAGE_KEYS.ORDERS, JSON.stringify(orders));
    } catch {
      showToast('Não foi possível salvar os pedidos no navegador.');
    }
  }

  function saveCart() {
    try {
      localStorage.setItem(STORAGE_KEYS.CART, JSON.stringify(cart));
    } catch {
      showToast('Não foi possível salvar o carrinho no navegador.');
    }
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
  // STOREFRONT: CATEGORIAS, CARDÁPIO E TELA DO PRODUTO
  // =========================================================
  function slugifyCategory(cat) {
    return String(cat || '')
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-|-$/g, '');
  }

  function getCategories(includeAll = true) {
    const ordered = [];
    const seen = new Set();
    if (includeAll) {
      ordered.push('Todos');
      seen.add('Todos');
    }
    CATEGORY_ORDER.forEach((cat) => {
      if (!seen.has(cat)) {
        ordered.push(cat);
        seen.add(cat);
      }
    });
    products.forEach((p) => {
      const cat = String(p.category || '').trim();
      if (cat && !seen.has(cat)) {
        ordered.push(cat);
        seen.add(cat);
      }
    });
    return ordered;
  }

  function renderCategoryTabs() {
    const container = document.getElementById('category-tabs');
    const categories = getCategories(true);
    if (!categories.includes(selectedCategory)) {
      selectedCategory = 'Todos';
    }
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
    const targetId = String(productId);
    return cart.reduce((sum, entry) => (String(entry.productId) === targetId ? sum + entry.qty : sum), 0);
  }

  function renderProductCardHTML(p) {
    const qty = getCartQty(p.id);
    const ctaLabel = !p.active ? 'Ver Detalhes' : 'Personalizar';
    const ctaClass = !p.active ? 'btn btn-ghost btn-sm' : 'btn btn-primary btn-sm';

    return `
      <article class="product-card ${p.active ? '' : 'sold-out'}" data-product-id="${escapeHTML(p.id)}" tabindex="0" role="button" aria-label="Selecionar ${escapeHTML(p.name)}">
        <div class="product-thumb">
          <img src="${escapeHTML(p.image)}" alt="${escapeHTML(p.name)}" loading="lazy" />
          ${!p.active ? `<div class="sold-out-overlay">Esgotado</div>` : ''}
        </div>
        <div class="product-body">
          <div class="product-info">
            <div class="product-meta-inline">
              <span class="product-category-label">${escapeHTML(p.category)}</span>
              ${p.badge ? `<span class="product-badge">${escapeHTML(p.badge)}</span>` : ''}
              ${p.active && qty > 0 ? `<span class="product-card-in-cart">${qty} no pedido</span>` : ''}
            </div>
            <h3 class="product-title">${escapeHTML(p.name)}</h3>
            <p class="product-desc">${escapeHTML(p.description)}</p>
          </div>
          <div class="product-footer">
            <span class="product-price">${formatBRL(p.price)}</span>
            <button type="button" class="${ctaClass}" data-action="detail" data-id="${escapeHTML(p.id)}">${ctaLabel}</button>
          </div>
        </div>
      </article>
    `;
  }

  function renderMenu() {
    const sectionsRoot = document.getElementById('menu-grid');
    const emptyEl = document.getElementById('menu-empty');

    const q = normalizeText(searchQuery.trim());
    const filtered = products.filter((p) => {
      const matchesCat = selectedCategory === 'Todos' || p.category === selectedCategory;
      const matchesQuery =
        !q ||
        normalizeText(p.name).includes(q) ||
        normalizeText(p.description).includes(q) ||
        normalizeText(p.category).includes(q);
      return matchesCat && matchesQuery;
    });

    if (!filtered.length) {
      sectionsRoot.innerHTML = '';
      emptyEl.classList.remove('hidden');
      return;
    }

    emptyEl.classList.add('hidden');
    const categoriesOrder = getCategories(false);
    const grouped = new Map();
    categoriesOrder.forEach((cat) => grouped.set(cat, []));
    filtered.forEach((p) => {
      if (!grouped.has(p.category)) {
        grouped.set(p.category, []);
      }
      grouped.get(p.category).push(p);
    });

    const sectionHTML = [];
    grouped.forEach((items, category) => {
      if (!items.length) return;
      const slug = slugifyCategory(category);
      const countLabel = `${items.length} ${items.length === 1 ? 'item' : 'itens'}`;
      sectionHTML.push(`
        <section class="menu-category-section" id="cat-${escapeHTML(slug)}" data-category-section="${escapeHTML(category)}">
          <div class="category-section-header">
            <h3>${escapeHTML(category)}</h3>
            <span class="category-count">${countLabel}</span>
          </div>
          <div class="menu-grid">
            ${items.map(renderProductCardHTML).join('')}
          </div>
        </section>
      `);
    });

    sectionsRoot.innerHTML = sectionHTML.join('');
  }

  function renderProductDetail() {
    if (!activeProductId) return;
    const prod = products.find((p) => String(p.id) === String(activeProductId));
    if (!prod) {
      closeProductDetail(false);
      return;
    }

    const imgEl = document.getElementById('detail-product-image');
    imgEl.dataset.fallbackApplied = '';
    imgEl.src = prod.image;
    imgEl.alt = prod.name;

    const badgeEl = document.getElementById('detail-product-badge');
    if (prod.badge) {
      badgeEl.textContent = prod.badge;
      badgeEl.classList.remove('hidden');
    } else {
      badgeEl.textContent = '';
      badgeEl.classList.add('hidden');
    }

    const soldOutEl = document.getElementById('detail-sold-out-overlay');
    soldOutEl.classList.toggle('hidden', prod.active);

    document.getElementById('detail-breadcrumb').textContent = `Cardápio / ${prod.category}`;
    document.getElementById('detail-product-category').textContent = prod.category;
    document.getElementById('detail-product-name').textContent = prod.name;
    document.getElementById('detail-product-price').textContent = formatBRL(prod.price);
    document.getElementById('detail-product-description').textContent = prod.description;

    const availBadge = document.getElementById('detail-availability-badge');
    availBadge.textContent = prod.active ? 'Disponível' : 'Esgotado';
    availBadge.className = `availability-pill ${prod.active ? 'available' : 'unavailable'}`;

    document.getElementById('detail-custom-prompt').textContent =
      prod.customizationPrompt || 'Gostaria de retirar algo?';

    const optionsContainer = document.getElementById('detail-removal-options');
    const options = Array.isArray(prod.customizationOptions) ? prod.customizationOptions : [];
    const allowedSet = new Set(options);
    detailRemovedOptions.forEach((opt) => {
      if (!allowedSet.has(opt)) {
        detailRemovedOptions.delete(opt);
      }
    });
    if (options.length) {
      optionsContainer.classList.remove('hidden');
      optionsContainer.innerHTML = options
        .map((opt) => {
          const isSelected = detailRemovedOptions.has(opt);
          return `
            <label class="removal-checkbox ${isSelected ? 'selected' : ''} ${!prod.active ? 'disabled' : ''}">
              <input
                type="checkbox"
                data-removal-option="${escapeHTML(opt)}"
                ${isSelected ? 'checked' : ''}
                ${!prod.active ? 'disabled' : ''}
              />
              <span>Sem ${escapeHTML(opt)}</span>
            </label>
          `;
        })
        .join('');
    } else {
      optionsContainer.classList.add('hidden');
      optionsContainer.innerHTML = '';
    }

    document.getElementById('detail-qty-value').textContent = String(detailQty);
    document.getElementById('detail-qty-dec').disabled = !prod.active || detailQty <= 1;
    document.getElementById('detail-qty-inc').disabled = !prod.active;
    document.getElementById('detail-product-notes').disabled = !prod.active;

    const addBtn = document.getElementById('detail-add-to-cart-btn');
    addBtn.disabled = !prod.active;
    addBtn.textContent = prod.active
      ? `Adicionar ao Pedido • ${formatBRL(prod.price * detailQty)}`
      : 'Produto Esgotado';
  }

  function openProductDetail(productId) {
    const prod = products.find((p) => String(p.id) === String(productId));
    if (!prod) return;

    activeProductId = prod.id;
    detailQty = 1;
    detailRemovedOptions = new Set();
    document.getElementById('detail-product-notes').value = '';

    renderProductDetail();
    document.getElementById('store-home-content').classList.add('hidden');
    document.getElementById('product-detail-view').classList.remove('hidden');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function closeProductDetail(scrollToMenu = true) {
    activeProductId = null;
    document.getElementById('product-detail-view').classList.add('hidden');
    document.getElementById('store-home-content').classList.remove('hidden');
    if (scrollToMenu) {
      const menuEl = document.getElementById('cardapio');
      if (menuEl) menuEl.scrollIntoView({ behavior: 'smooth' });
    }
  }

  // =========================================================
  // CARRINHO & CHECKOUT
  // =========================================================
  function addCustomizedToCart(productId, qty = 1, removedOptions = [], customNote = '') {
    const product = products.find((p) => String(p.id) === String(productId) && p.active);
    if (!product) return;

    const cleanQty = Math.max(1, parseInt(qty, 10) || 1);
    const cleanRemoved = [...new Set(removedOptions.map((o) => String(o).trim()).filter(Boolean))];
    const cleanNote = String(customNote || '').trim();
    const lineId = buildCartLineId(product.id, cleanRemoved, cleanNote);

    const existing = cart.find((item) => item.lineId === lineId);
    if (existing) {
      existing.qty += cleanQty;
    } else {
      cart.push({
        lineId,
        productId: product.id,
        qty: cleanQty,
        removedOptions: cleanRemoved,
        customNote: cleanNote,
      });
    }

    saveCart();
    renderMenu();
    renderCart();
    const customLabel = formatCustomizationText({ removedOptions: cleanRemoved, customNote: cleanNote });
    showToast(
      customLabel
        ? `${product.name} (${customLabel}) adicionado ao pedido!`
        : `${product.name} adicionado ao pedido!`,
      'success'
    );
  }

  function updateCartQty(lineId, delta) {
    const idx = cart.findIndex((item) => item.lineId === lineId);
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
      const prod = products.find((p) => String(p.id) === String(entry.productId) && p.active);
      if (prod) {
        itemCount += entry.qty;
        subtotal += prod.price * entry.qty;
        validItems.push({ ...entry, product: prod });
      }
    });

    subtotal = roundCurrency(subtotal);
    const deliveryType = getSelectedDeliveryType();
    const deliveryFee = roundCurrency(validItems.length > 0 && deliveryType === 'Entrega' ? DELIVERY_FEE : 0);
    const total = roundCurrency(subtotal + deliveryFee);

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
      .map((entry) => {
        const { product, qty, lineId } = entry;
        const customText = formatCustomizationText(entry);
        return `
        <div class="cart-item">
          <img src="${escapeHTML(product.image)}" alt="${escapeHTML(product.name)}" />
          <div class="cart-item-info">
            <strong>${escapeHTML(product.name)}</strong>
            ${customText ? `<small class="cart-item-custom">${escapeHTML(customText)}</small>` : ''}
            <span class="cart-item-price">${formatBRL(product.price * qty)}</span>
          </div>
          <div class="qty-stepper">
            <button type="button" data-cart-action="dec" data-line-id="${escapeHTML(lineId)}" aria-label="Diminuir">−</button>
            <span>${qty}</span>
            <button type="button" data-cart-action="inc" data-line-id="${escapeHTML(lineId)}" aria-label="Aumentar">+</button>
          </div>
        </div>
      `;
      })
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
      items: validItems.map((entry) => ({
        productId: entry.product.id,
        name: entry.product.name,
        qty: entry.qty,
        price: entry.product.price,
        customization: formatCustomizationText(entry),
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
      <div>
        <strong>Itens:</strong>
        <div style="margin-top:4px;display:flex;flex-direction:column;gap:4px">
          ${newOrder.items
            .map(
              (i) => `
              <div>
                <span>${i.qty}x ${escapeHTML(i.name)}</span>
                ${i.customization ? `<small class="receipt-item-sub">${escapeHTML(i.customization)}</small>` : ''}
              </div>
            `
            )
            .join('')}
        </div>
      </div>
      <div class="receipt-total-row">
        <strong>Total Pago:</strong>
        <span class="receipt-total-amount">${formatBRL(newOrder.total)}</span>
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
    renderAdminCategoryFilterOptions();
    renderAdminDashboard();
    renderAdminProducts();
  }

  function showStoreView() {
    document.getElementById('admin-view').classList.add('hidden');
    document.getElementById('store-view').classList.remove('hidden');
    window.scrollTo({ top: 0, behavior: 'instant' });
    renderCategoryTabs();
    renderMenu();
    if (activeProductId) {
      renderProductDetail();
    }
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
        const itemsPreview = (o.items || [])
          .map((i) => `${i.qty}x ${i.name}${i.customization ? ` (${i.customization})` : ''}`)
          .join(', ');
        const safeStatus = ALLOWED_ORDER_STATUSES.includes(o.status) ? o.status : 'Preparando';
        const statusClass = `status-${safeStatus.replace(/\s+/g, '-')}`;
        return `
          <tr>
            <td><strong>#${escapeHTML(o.id)}</strong></td>
            <td>${escapeHTML(o.createdAt)}</td>
            <td>
              <strong>${escapeHTML(o.customerName)}</strong><br />
              <small style="color:var(--text-soft)">${escapeHTML(o.deliveryType)}</small>
            </td>
            <td class="sales-items-cell">${escapeHTML(itemsPreview)}</td>
            <td>${escapeHTML(o.paymentMethod)}</td>
            <td><strong>${formatBRL(o.total)}</strong></td>
            <td>
              <select class="status-select ${escapeHTML(statusClass)}" data-order-status="${escapeHTML(o.id)}" aria-label="Status do pedido ${escapeHTML(o.id)}">
                ${ALLOWED_ORDER_STATUSES
                  .map(
                    (st) =>
                      `<option value="${st}" ${safeStatus === st ? 'selected' : ''}>${st}</option>`
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
      <div class="order-receipt order-detail-meta">
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
        <div style="margin-top:8px;display:flex;flex-direction:column;gap:8px">
          ${(order.items || [])
            .map(
              (i) => `
              <div class="receipt-item-row">
                <div>
                  <span>${i.qty}x ${escapeHTML(i.name)}</span>
                  ${i.customization ? `<small class="receipt-item-sub">${escapeHTML(i.customization)}</small>` : ''}
                </div>
                <strong>${formatBRL(i.qty * i.price)}</strong>
              </div>
            `
            )
            .join('')}
          <div style="display:flex;justify-content:space-between;font-size:0.86rem;color:var(--text-muted);padding-top:6px;border-top:1px solid var(--border)">
            <span>Taxa de entrega</span>
            <span>${order.deliveryFee > 0 ? formatBRL(order.deliveryFee) : 'Grátis'}</span>
          </div>
          <div class="receipt-total-row">
            <span>Total</span>
            <span class="receipt-total-amount">${formatBRL(order.total)}</span>
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
    const prod = products.find((p) => String(p.id) === String(prodId));
    const total = roundCurrency(prod ? prod.price * qty : 0);
    document.getElementById('manual-total-display').textContent = formatBRL(total);
  }

  function handleManualSaleSubmit(e) {
    e.preventDefault();
    const prodId = document.getElementById('manual-product').value;
    const prod = products.find((p) => String(p.id) === String(prodId));
    if (!prod) return;

    const qty = Math.max(1, parseInt(document.getElementById('manual-qty').value || '1', 10));
    const customerName = document.getElementById('manual-customer').value.trim() || 'Cliente Balcão';
    const paymentMethod = document.getElementById('manual-payment').value;
    const total = roundCurrency(prod.price * qty);

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
  function ensureSelectOption(selectEl, value, label = value) {
    if (!selectEl) return;
    const strVal = String(value ?? '');
    const exists = Array.from(selectEl.options).some((opt) => opt.value === strVal);
    if (!exists) {
      const opt = document.createElement('option');
      opt.value = strVal;
      opt.textContent = label || 'Nenhum';
      selectEl.appendChild(opt);
    }
  }

  function renderAdminCategoryFilterOptions() {
    const filterEl = document.getElementById('admin-product-category-filter');
    if (!filterEl) return;
    const categories = getCategories(true);
    if (!categories.includes(adminProductCategoryFilter)) {
      adminProductCategoryFilter = 'Todos';
    }
    filterEl.innerHTML = categories
      .map(
        (cat) =>
          `<option value="${escapeHTML(cat)}">${cat === 'Todos' ? 'Todas as categorias' : escapeHTML(cat)}</option>`
      )
      .join('');
    filterEl.value = adminProductCategoryFilter;
  }

  function syncAllViewsAfterProductChange() {
    renderAdminCategoryFilterOptions();
    renderAdminProducts();
    renderAdminDashboard();
    renderCategoryTabs();
    renderMenu();
    if (activeProductId) {
      const stillExists = products.some((p) => String(p.id) === String(activeProductId));
      if (stillExists) {
        renderProductDetail();
      } else {
        closeProductDetail(false);
      }
    }
    renderCart();
  }

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
    const categorySelect = document.getElementById('product-category');
    const badgeSelect = document.getElementById('product-badge');

    if (productId) {
      const prod = products.find((p) => String(p.id) === String(productId));
      if (!prod) {
        showToast('Produto não encontrado para edição.');
        return;
      }

      document.getElementById('product-modal-title').textContent = 'Editar Produto';
      document.getElementById('product-id').value = prod.id;
      document.getElementById('product-name').value = prod.name;
      ensureSelectOption(categorySelect, prod.category);
      categorySelect.value = prod.category;
      document.getElementById('product-price').value = Number(prod.price || 0).toFixed(2);
      ensureSelectOption(badgeSelect, prod.badge || '');
      badgeSelect.value = prod.badge || '';
      document.getElementById('product-description').value = prod.description;
      document.getElementById('product-custom-prompt').value =
        prod.customizationPrompt || 'Gostaria de retirar algo?';
      document.getElementById('product-custom-options').value = Array.isArray(prod.customizationOptions)
        ? prod.customizationOptions.join(', ')
        : '';
      document.getElementById('product-active').checked = Boolean(prod.active);

      const hasPreset = Array.from(presetSelect.options).some((opt) => opt.value === prod.image);
      presetSelect.value = hasPreset ? prod.image : 'custom';
      urlInput.value = prod.image;
    } else {
      document.getElementById('product-modal-title').textContent = 'Novo Produto';
      document.getElementById('product-id').value = '';
      document.getElementById('product-custom-prompt').value = 'Gostaria de retirar algo?';
      document.getElementById('product-custom-options').value = 'Alface, Tomate, Cebola, Maionese, Catchup, Mostarda';
      document.getElementById('product-active').checked = true;
      presetSelect.value = STOCK_IMAGES.xSalada;
      urlInput.value = STOCK_IMAGES.xSalada;
    }

    openModal('product-modal');
  }

  function handleProductSubmit(e) {
    e.preventDefault();
    const id = document.getElementById('product-id').value.trim();
    const name = document.getElementById('product-name').value.trim();
    const category = document.getElementById('product-category').value.trim();
    const rawPrice = document.getElementById('product-price').value.trim().replace(/\s+/g, '').replace(',', '.');
    const parsedPrice = Number(rawPrice);
    const price = Number.isFinite(parsedPrice) ? Math.round(parsedPrice * 100) / 100 : NaN;
    const badge = document.getElementById('product-badge').value.trim();
    const description = document.getElementById('product-description').value.trim();
    const rawImage = document.getElementById('product-image-url').value.trim();
    const image = sanitizeImageUrl(rawImage || STOCK_IMAGES.xSalada);
    const active = document.getElementById('product-active').checked;
    const customizationPrompt =
      document.getElementById('product-custom-prompt').value.trim() || 'Gostaria de retirar algo?';
    const rawOptions = document.getElementById('product-custom-options').value;
    const customizationOptions = [
      ...new Set(
        rawOptions
          .split(',')
          .map((item) => item.trim())
          .filter(Boolean)
      ),
    ];

    if (!name || !category || !description || Number.isNaN(price) || price <= 0) {
      showToast('Preencha nome, categoria, descrição e um preço válido maior que zero.');
      return;
    }

    if (id) {
      const idx = products.findIndex((p) => String(p.id) === String(id));
      if (idx === -1) {
        showToast('Erro: produto não encontrado para atualização.');
        return;
      }
      products[idx] = {
        ...products[idx],
        name,
        category,
        price,
        badge,
        description,
        image,
        active,
        customizationPrompt,
        customizationOptions,
      };
      if (adminProductCategoryFilter !== 'Todos' && adminProductCategoryFilter !== category) {
        adminProductCategoryFilter = 'Todos';
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
        customizationPrompt,
        customizationOptions,
      });
      if (adminProductCategoryFilter !== 'Todos' && adminProductCategoryFilter !== category) {
        adminProductCategoryFilter = 'Todos';
      }
      showToast(`Produto "${name}" adicionado ao cardápio!`, 'success');
    }

    saveProducts();
    closeModal('product-modal');
    syncAllViewsAfterProductChange();
  }

  function resetDemoData() {
    if (!confirm('Restaurar o cardápio e o histórico de vendas padrão de demonstração?')) return;
    products = structuredClone(DEFAULT_PRODUCTS);
    orders = structuredClone(DEFAULT_ORDERS);
    cart = [];
    adminProductCategoryFilter = 'Todos';
    adminStatusFilter = 'Todos';
    saveProducts();
    saveOrders();
    saveCart();
    closeProductDetail(false);
    syncAllViewsAfterProductChange();
    showToast('Dados de demonstração restaurados!', 'success');
  }

  // =========================================================
  // EVENT LISTENERS
  // =========================================================
  function bindEvents() {
    // Fallback automático para imagens que falharem no carregamento
    document.addEventListener(
      'error',
      (e) => {
        if (e.target && e.target.tagName === 'IMG' && !e.target.dataset.fallbackApplied) {
          e.target.dataset.fallbackApplied = '1';
          e.target.src = STOCK_IMAGES.xSalada;
        }
      },
      true
    );

    // Header brand / navigation links (garante retorno ao cardápio caso a tela de detalhe esteja aberta)
    const brandLink = document.querySelector('#store-view .brand');
    if (brandLink) {
      brandLink.addEventListener('click', (e) => {
        if (activeProductId) {
          e.preventDefault();
          closeProductDetail(false);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      });
    }

    document.getElementById('nav-menu-link').addEventListener('click', (e) => {
      if (activeProductId) {
        e.preventDefault();
        closeProductDetail(true);
      }
    });

    document.getElementById('nav-about-link').addEventListener('click', (e) => {
      if (activeProductId) {
        e.preventDefault();
        closeProductDetail(false);
        const aboutEl = document.getElementById('sobre');
        if (aboutEl) aboutEl.scrollIntoView({ behavior: 'smooth' });
      }
    });

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
      closeProductDetail(false);
      searchQuery = '';
      const searchInput = document.getElementById('menu-search');
      if (searchInput) searchInput.value = '';
      selectedCategory = 'Combos';
      renderCategoryTabs();
      renderMenu();
      const target = document.getElementById('cat-combos') || document.getElementById('cardapio');
      if (target) target.scrollIntoView({ behavior: 'smooth' });
    };
    document.getElementById('nav-combos-link').addEventListener('click', (e) => {
      e.preventDefault();
      jumpToCombos();
    });

    // Menu rows -> open dedicated product detail view
    const menuGridEl = document.getElementById('menu-grid');
    menuGridEl.addEventListener('click', (e) => {
      const card = e.target.closest('.product-card');
      if (!card) return;
      openProductDetail(card.dataset.productId);
    });

    menuGridEl.addEventListener('keydown', (e) => {
      if (e.key !== 'Enter' && e.key !== ' ') return;
      const card = e.target.closest('.product-card');
      if (!card) return;
      e.preventDefault();
      openProductDetail(card.dataset.productId);
    });

    // Dedicated product detail view controls
    document.getElementById('back-to-menu-btn').addEventListener('click', () => {
      closeProductDetail(true);
    });

    document.getElementById('detail-removal-options').addEventListener('change', (e) => {
      const checkbox = e.target.closest('input[type="checkbox"][data-removal-option]');
      if (!checkbox) return;
      const opt = checkbox.dataset.removalOption;
      if (checkbox.checked) {
        detailRemovedOptions.add(opt);
      } else {
        detailRemovedOptions.delete(opt);
      }
      const label = checkbox.closest('.removal-checkbox');
      if (label) {
        label.classList.toggle('selected', checkbox.checked);
      }
    });

    document.getElementById('detail-qty-dec').addEventListener('click', () => {
      if (detailQty > 1) {
        detailQty -= 1;
        renderProductDetail();
      }
    });

    document.getElementById('detail-qty-inc').addEventListener('click', () => {
      detailQty += 1;
      renderProductDetail();
    });

    document.getElementById('detail-add-to-cart-btn').addEventListener('click', () => {
      if (!activeProductId) return;
      const notes = document.getElementById('detail-product-notes').value.trim();
      addCustomizedToCart(activeProductId, detailQty, Array.from(detailRemovedOptions), notes);
      detailQty = 1;
      detailRemovedOptions = new Set();
      document.getElementById('detail-product-notes').value = '';
      renderProductDetail();
    });

    // Cart drawer
    document.getElementById('open-cart-btn').addEventListener('click', openCartDrawer);
    document.getElementById('mobile-cart-trigger').addEventListener('click', openCartDrawer);
    document.getElementById('close-cart-btn').addEventListener('click', closeCartDrawer);
    document.getElementById('cart-backdrop').addEventListener('click', closeCartDrawer);

    document.getElementById('cart-items-list').addEventListener('click', (e) => {
      const btn = e.target.closest('[data-cart-action]');
      if (!btn) return;
      const { cartAction, lineId } = btn.dataset;
      updateCartQty(lineId, cartAction === 'inc' ? 1 : -1);
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
        const prod = products.find((p) => String(p.id) === String(toggleBtn.dataset.toggleProduct));
        if (prod) {
          prod.active = !prod.active;
          saveProducts();
          syncAllViewsAfterProductChange();
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
        const prod = products.find((p) => String(p.id) === String(delBtn.dataset.deleteProduct));
        if (!prod) return;
        if (!confirm(`Excluir "${prod.name}" do cardápio?`)) return;
        products = products.filter((p) => String(p.id) !== String(prod.id));
        saveProducts();
        pruneOrphanCartEntries();
        syncAllViewsAfterProductChange();
        showToast(`Produto "${prod.name}" excluído.`);
      }
    });

    document.getElementById('product-image-preset').addEventListener('change', (e) => {
      const urlInput = document.getElementById('product-image-url');
      if (e.target.value === 'custom') {
        urlInput.focus();
      } else {
        urlInput.value = e.target.value;
      }
    });

    document.getElementById('product-image-url').addEventListener('input', (e) => {
      const presetSelect = document.getElementById('product-image-preset');
      const val = e.target.value.trim();
      const matched = Array.from(presetSelect.options).some(
        (opt) => opt.value !== 'custom' && opt.value === val
      );
      presetSelect.value = matched ? val : 'custom';
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
