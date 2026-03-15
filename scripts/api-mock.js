const mockDb = {
  catalog: [{ id: 'sku-001', name: 'Placeholder Product' }],
  orders: [{ id: 'ord-001', status: 'pending' }]
};

export function init() { return mockDb; }
export function render() { return mockDb; }
export function bindEvents() { return null; }
export function setState(collection, value) { mockDb[collection] = value; return mockDb[collection]; }
export function destroy() { return null; }
