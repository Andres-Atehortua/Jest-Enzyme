export const createStore = () => {
  let store = [];
  return {
    addItem: (item) => (store = [...store, item]),
    getStore: () => store,
    getById: (id) => store.find((item) => item.id === id),
  };
};
