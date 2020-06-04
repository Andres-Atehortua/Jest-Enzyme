import React from "react";
import List from "./../components/List";
import { configure, shallow, mount, render } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });

describe("Pruebas a componente <List />", () => {
  test("Validar nodos", () => {
    const fruits = [
      { name: "Fresa", id: 1 },
      { name: "Uva", id: 2 },
      { name: "Mango", id: 3 },
      { name: "Naranja", id: 4 },
    ];
    const wrapper = shallow(<List title="frutas" list={fruits} />);
    // Validar si existe nodo
    expect(wrapper.find("h2").exists()).toBe(true);
    //Validar si tiene clase css
    expect(wrapper.find("h2").hasClass("big")).toBe(true);
    // Validar cantidad de elementos hijos
    expect(wrapper.find("ul").children().length).toBe(4);
    // Validar el contenido de texto del primer elemento
    expect(wrapper.find("li").first().text()).toBe("Fresa");
    // Validar el contenido de texto del ultimo elemento
    expect(wrapper.find("li").last().text()).toBe("Naranja");
    // Validar el contenido de texto del elemento cuyo indice especificamos
    expect(wrapper.find("ul").childAt(2).text()).toBe("Mango");
    // Validar tipo de nodo/elemento
    expect(wrapper.find("ul").childAt(1).type()).toBe("li");
    // Validar el contenido de html
    expect(wrapper.find("li").first().html()).toBe("<li>Fresa</li>");
  });

  test("Actualizar valizaciones en props", () => {
    const fruits = [
      { name: "Fresa", id: 1 },
      { name: "Uva", id: 2 },
      { name: "Mango", id: 3 },
      { name: "Naranja", id: 4 },
    ];
    const wrapper = shallow(<List title="frutas" list={fruits} />);
    // Validar cantidad de elementos li
    expect(wrapper.find("li").length).toBe(4);
    wrapper.setProps({ list: [{ name: "kiwi", id: 5 }] });
    expect(wrapper.find("li").length).toBe(1);
    wrapper.setProps({ title: "Super frutas" });
    expect(wrapper.find(".big").text()).toBe("Super frutas");
  });
});
