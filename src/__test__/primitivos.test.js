const getValue = (exp) => {
  switch (exp) {
    case "definido":
      return {};
    case "indefinido":
      return undefined;
    case "verdadero":
      return true;
    case "falso":
      return false;
    default:
      return null;
  }
};

describe("Pruebas para valores boleanos, null y undefined", () => {
  test("Validar si existe o está definido un valor", () => {
    expect(getValue("definido")).toBeDefined();
  });

  test("Validar si es undefined", () => {
    expect(getValue("indefinido")).toBeUndefined();
  });
  test("Validar si es true", () => {
    expect(getValue("verdadero")).toBeTruthy();
  });
  test("Validar si es false", () => {
    expect(getValue("falso")).toBeFalsy();
  });
  test("Validar si es null", () => {
    expect(getValue()).toBeNull();
  });
  test("Validar si es NaN", () => {
    expect("a" * 1).toBeNaN();
  });
});
