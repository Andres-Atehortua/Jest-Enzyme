import { greet, getId, bye } from "./../utils/strings";

describe("Pruebas de strings", () => {
  test("Probando la funcion de saludo", () => {
    const greeting = greet("Andrés");
    expect(greeting).toMatch("Soy Andrés");
  });
  test("Probando la funcion de getId", () => {
    const id = getId();
    expect(id).toMatch(/\d{2}-\d{3}/);
  });
  test("Probando la funcion de bye", () => {
    const despido = bye();
    expect(despido).not.toMatch("adios");
  });
});
