import React from "react";
import Counter from "./../components/Counter";
import { configure, shallow /* mount, render*/ } from "enzyme";
import toJson from "enzyme-to-json"; // Dar otro formato al snapshot
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });

describe("Pruebas para componente <Counter />", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Counter />);
  });

  test("Comprobar que coincida con el snapshot", () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  test("Validar funcionamiento de botones", () => {
    wrapper.find("button").first().simulate("click");
    expect(wrapper.find("h2").text()).toBe("1");
    wrapper.find("button").last().simulate("click");
    wrapper.find("button").last().simulate("click");
    wrapper.find("button").last().simulate("click");
    expect(wrapper.find("h2").text()).toBe("-2");
  });
});
