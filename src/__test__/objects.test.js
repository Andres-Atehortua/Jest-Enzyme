import { createStore } from "./../utils/objects";

describe("Pruebas a objetos", () => {
  test("should add item to store", () => {
    const store = createStore();
    store.addItem({ id: 1, name: "Andrés", country: "Spain" });
    expect(store.getStore()[0]).toEqual({
      id: 1,
      name: "Andrés",
      country: "Spain",
    });
  });

  test("should find item by id", () => {
    const store = createStore();
    store.addItem({ id: 1, name: "Andrés1", country: "Spain" });
    store.addItem({ id: 2, name: "Andrés2", country: "Spain" });
    store.addItem({ id: 3, name: "Andrés3", country: "Spain" });
    expect(store.getById(1)).toEqual({
      id: 1,
      name: "Andrés1",
      country: "Spain",
    });
    expect(store.getById(1)).toMatchObject({ id: 1 });
    expect(store.getById(1)).toHaveProperty("id", 1);
  });
});
