import {
  getDataCallback,
  getDataPromise,
  getDataPromiseError,
  getDataHTTP,
} from "./../utils/async";

describe("Probando test a funciones asincronas", () => {
  test("Test a callback", (done) => {
    // Pasamos el done para que espere a que nuestro callback retorne
    getDataCallback((name) => {
      expect(name).toBe("Andrés");
      done();
    });
  });

  test("Test a promise", (done) => {
    getDataPromise().then((resp) => {
      expect(resp).toBe("Andrés desde promesa");
      done();
    });
  });

  test("Test a promise con expect", () => {
    // Esta forma es para resolver la promesa y ver su valor sin usar then
    return expect(getDataPromise()).resolves.toBe("Andrés desde promesa");
  });

  test("Test a promise error", (done) => {
    getDataPromiseError()
      .then((resp) => {})
      .catch((error) => {
        expect(error).toBe("Error desde la promesa");
        done();
      });
  });

  test("Test a promise error con expect", () => {
    // Esta forma es para resolver la promesa y ver su valor sin usar then
    return expect(getDataPromiseError()).rejects.toBe("Error desde la promesa");
  });

  test("Test a promise con async await", async () => {
    const name = await getDataPromise();
    expect(name).toBe("Andrés desde promesa");
  });

  test("Test a promise rejected con async await", async () => {
    try {
      await getDataPromiseError();
    } catch (error) {
      expect(error).toBe("Error desde la promesa");
    }
  });

  test("Test a solicitud HTTP", async () => {
    const user = await getDataHTTP();
    expect(user).toHaveProperty("id", 1);
    expect(user).toHaveProperty("username");
  });
});
