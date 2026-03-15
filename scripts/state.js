// Porting note (OWL/QWeb): map store slices to Owl reactive useState hooks/services.
export const createStore = (initial = {}) => {
  let state = structuredClone(initial);
  const listeners = new Set();
  return {
    getState: () => state,
    setState: (patch) => {
      state = { ...state, ...(typeof patch === 'function' ? patch(state) : patch) };
      listeners.forEach((fn) => fn(state));
    },
    subscribe: (fn) => {
      listeners.add(fn);
      return () => listeners.delete(fn);
    }
  };
};

export const pageState = createStore({ status: 'idle', message: '' });
export const appState = createStore({ userRole: 'guest', route: '' });
