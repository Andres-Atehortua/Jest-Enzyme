import React from "react";
import App, { Title } from "./../App";
// Configuración de enzyme en cada test de componentes

import { configure, shallow, mount, render } from "enzyme";
// shallow hace un renderizado superficial dentro de la memoria y cada montado es independiente. Ideal para
// componentes como una única unidad
// mount es útil para interactuar con apis del dom o probar componente envuento en otro componente HOC
// render transforma el arbol de componentes de react en un marcado html y lo envuelve en cheerio.
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });

describe("Probando componente <App />", () => {
  test("Probando renderizado del componente", () => {
    const wrapper = shallow(<App />);
    // console.log(wrapper.find("h1")); //tags
    // console.log(wrapper.find(".container").html()); // className
    // console.log(wrapper.find("#main").html()); // id
    // console.log(wrapper.find("div p").html()); // All p tags inside a div
    // console.log(wrapper.find("div > p").html()); // All p tags directly sons of a div
    // console.log(wrapper.find("div + p").html()); // A p tag brother of a div
    // console.log(wrapper.find("div ~ p").length); // All p tags brothers of a div
    // console.log(wrapper.find("[num=3]").html()); // Search by props and by a number
    // console.log(wrapper.find("[num='3']").html()); // Search by props and by a string
    // console.log(wrapper.find(Title).html()); // Search by props and by a string

    expect(wrapper.find(Title).html()).toBe(
      "<h1>Testing con JEST y ENZYME</h1>"
    );

    expect(wrapper.find(Title)).toHaveLength(1);
  });
});
