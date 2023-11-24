import { html } from "lit";
import { component } from "haunted";

const Grid = () => {
  return html` <section class="grid">grid</section> `;
};

customElements.define("cu-grid", component(Grid, { useShadowDOM: false }));
