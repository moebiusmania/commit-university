import { html } from "lit";
import { component } from "haunted";
import { fireEvent } from "../utils";

interface Props {
  open: boolean;
  message?: string;
  title?: string;
}

function Modal({ open, message, title }: Props) {
  const onClick = (e: Event) => {
    e.preventDefault();

    // @ts-ignore
    fireEvent(this, "close-modal");
  };

  // Wrapping a native <dialog> element in a Web Component
  // https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog
  return html`<dialog ?open=${open}>
    <article>
      <h2>${title}</h2>
      <p>${message}</p>
      <form method="dialog">
        <button @click="${onClick}">Next ⏩︎</button>
      </form>
    </article>
  </dialog>`;
}

customElements.define(
  "cu-modal",
  component<HTMLElement & Props>(Modal, {
    observedAttributes: ["open", "message"],
    useShadowDOM: false,
  })
);
