import { html } from "lit";
import { component, useEffect, useState } from "haunted";

import { fireEvent } from "../utils";

function Participants() {
  const [isVisible, setVisible] = useState<boolean>(false);
  const [data, setData] = useState<string[]>(["foo", "bar"]);

  const doUpdate = (value: string[]) => {
    // @ts-ignore
    fireEvent(this, "update", value.join(","));
  };

  const handleKeyUp = (e: KeyboardEvent) => {
    const value = (e.target as HTMLInputElement).value;
    const update = value.split(",").map((name) => name.trim());
    setData(update);

    doUpdate(update);
  };

  useEffect(() => {
    doUpdate(data);
  }, []);

  return html`
    <section class="participants" @dblclick="${() => setVisible(!isVisible)}">
      <form class="${isVisible ? "show" : ""}">
        <input
          @keyup="${handleKeyUp}"
          type="text"
          placeholder="pippo, pluto, paperino"
        />
      </form>
      <div class="badges">
        <label>Participants:</label>
        ${data.map((name) => html`<span class="badge">${name}</span>`)}
      </div>
    </section>
  `;
}

customElements.define(
  "cu-participants",
  component(Participants, { useShadowDOM: false })
);
