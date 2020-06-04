import { createStore } from "./../utils/arrays";

describe("Pruebas a arrays/listas", () => {
  test("Agregar nueva fruta", () => {
    const store = createStore();
    store.addFruit("Fresa");
    expect(store.getFruits()).toStrictEqual(["Fresa"]);
  });

  test("Agregar dos frutas", () => {
    const store = createStore();
    store.addFruit("Fresa");
    store.addFruit("Melón");
    expect(store.getFruits()).toStrictEqual(["Fresa", "Melón"]);
  });

  test("Comprobar si existe un elemento", () => {
    const store = createStore();
    store.addFruit("Manzana");
    expect(store.getFruits()).toContain("Manzana");
    expect(store.getFruits()).not.toContain("Jamón");
  });

  test("Comprobar la longitud del array", () => {
    const store = createStore();
    store.addFruit("Manzana");
    store.addFruit("Pera");
    store.addFruit("Plátano");
    expect(store.getFruits()).toHaveLength(3);
  });
  test("Comprobar agregar objeto con informacion", () => {
    const store = createStore();
    store.addFruit("Fresa");
    store.addFruit({ name: "uva", price: 0.5 });
    expect(store.getFruits()).toContainEqual({ name: "uva", price: 0.5 });
  });
});
