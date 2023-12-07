import { html } from "lit";
import { component } from "haunted";

import { Square, getClass } from "../utils";

interface Props {
  index: string;
  item: Square;
  setDone: (index: number) => () => void;
}

const SquareBlock = ({ index, item, setDone }: Props) => {
  return html`<div
    data-id=${index}
    class=${getClass(item)}
    @click=${setDone(parseInt(index))}
  >
    <h2>
      ${item.label} ${item.locked ? html`<span>🔒</span>` : null}
      ${item.done ? html`<span>✅</span>` : null}
    </h2>
  </div>`;
};

customElements.define(
  "cu-square",
  component<HTMLElement & Props>(SquareBlock, {
    observedAttributes: ["index", "item", "setDone"],
    useShadowDOM: false,
  })
);
