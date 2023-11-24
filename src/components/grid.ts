import { html } from "lit";
import { component, useState } from "haunted";

const Grid = () => {
  return html` <section class="grid">grid</section> `;
};

customElements.define("cu-grid", component(Grid, { useShadowDOM: false }));
