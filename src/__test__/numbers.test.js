import {
  suma,
  resta,
  multiplicacion,
  division,
  getRandomNumber,
} from "./../utils/numbers";

describe("Pruebas de numeros", () => {
  test("Probando la función suma", () => {
    expect(suma(5, 5)).toBe(10);
  });
  test("Probando la función resta", () => {
    expect(resta(5, 5)).toBe(0);
  });
  test("Probando la función multiplicacion", () => {
    expect(multiplicacion(5, 5)).toBe(25);
  });
  test("Probando la función division", () => {
    expect(division(5, 5)).toBe(1);
  });
  test("Probando la función getRandomNumber", () => {
    expect(getRandomNumber(5, 10)).toBeGreaterThanOrEqual(5);
    expect(getRandomNumber(5, 10)).toBeLessThanOrEqual(10);
  });
});
