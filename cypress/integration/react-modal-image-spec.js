describe("react-modal-image", function() {
  it("can find four images in the demo", function() {
    cy.visit("demo/dist/index.html");

    cy.contains("react-modal-image");
    cy.contains("#1 with alt, small, medium and large props");
    cy.contains("#2 with small and large props defined only");
    cy.contains("#3 with small and medium props defined only");
    cy.contains("#4 with download and zoom -buttons hidden");

    cy.get("img").should("have.length", 4);
  });

  it("can open and close the three first lightboxes", function() {
    cy.visit("demo/dist/index.html");

    cy.get("#react-modal-image-img").should("not.exist");

    for (let idx of [0, 1, 2]) {
      cy.get(`img:nth(${idx})`).click();
      cy.get("#react-modal-image-img");

      cy.get("span.__react_modal_image__icon_menu").children().last().click();
      cy.get("#react-modal-image-img").should("not.exist");
    }
  });

  it("can zoom in and out with the three first lightboxes", function() {
    cy.visit("demo/dist/index.html");

    for (let idx of [0, 1, 2]) {
      cy.get(`img:nth(${idx})`).click();

      cy.get("span.__react_modal_image__icon_menu").children().first().next().then($zoom1 => {
        const initialHtml = $zoom1.html();

        // doubleclicks
        cy.get("#react-modal-image-img").dblclick();

        cy.get("span.__react_modal_image__icon_menu").children().first().next().then($zoom2 => {
          expect($zoom2.html()).to.not.equal(initialHtml);
        });

        cy.get("#react-modal-image-img").dblclick();

        cy.get("span.__react_modal_image__icon_menu").children().first().next().then($zoom2 => {
          expect($zoom2.html()).to.equal(initialHtml);
        });

        // clicks to zoom icon
        cy.get("span.__react_modal_image__icon_menu").children().first().next().click();

        cy.get("span.__react_modal_image__icon_menu").children().first().next().then($zoom2 => {
          expect($zoom2.html()).to.not.equal(initialHtml);
        });

        cy.get("span.__react_modal_image__icon_menu").children().first().next().click();

        cy.get("span.__react_modal_image__icon_menu").children().first().next().then($zoom2 => {
          expect($zoom2.html()).to.equal(initialHtml);
        });
      });

      cy.get("span.__react_modal_image__icon_menu").children().last().click();
    }
  });

  it("can download img from the first three lightboxes", function() {
    cy.visit("demo/dist/index.html");

    cy.get("#react-modal-image-img").should("not.exist");

    for (let idx of [0, 1, 2]) {
      cy.get(`img:nth(${idx})`).click();
      cy.get("#react-modal-image-img");
      cy.get("span.__react_modal_image__icon_menu").children().first().should("have.attr", "download");

      const hrefUrl =
        idx < 2 ? "example_img_large.jpg" : "example_img_medium.jpg";

      cy
        .get("span.__react_modal_image__icon_menu").children().first()
        .should("have.attr", "href", hrefUrl);
      cy.get("span.__react_modal_image__icon_menu").children().last().click();
    }
  });


  it("zoom and download buttons are hidden in the fourth lightbox", function() {
    cy.visit("demo/dist/index.html");

    const idx = 3

    cy.get(`img:nth(${idx})`).click();

    cy.get("span.__react_modal_image__icon_menu").children().should("have.length", "1");

    cy.get(".react-modal-image-zoom").should("not.exist");

    cy.get("span.__react_modal_image__icon_menu").children().last().click();
  });
});
