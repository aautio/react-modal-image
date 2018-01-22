import expect from "expect";
import React from "react";
import { render, unmountComponentAtNode } from "react-dom";

import ModalImage from "src/";

describe("ModalImage", () => {
  let node;

  beforeEach(() => {
    node = document.createElement("div");
  });

  afterEach(() => {
    unmountComponentAtNode(node);
  });

  it("renders the preview thumbnail", () => {
    render(
      <ModalImage preview="http://via.placeholder.com/350x150" alt="Foobar" />,
      node,
      () => {
        expect(node.innerHTML).toContain(
          '<img src="http://via.placeholder.com/350x150" alt="Foobar" style="cursor: pointer;">'
        );
      }
    );
  });
});
