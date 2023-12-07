import { html } from "lit";
import { component, useState } from "haunted";

import activities from "../data/activities.json";
import { Square, initial } from "../utils";

import "./participants";
import "./modal";
import "./square";

const getRandomItem = (items: string[]): string => {
  const random = Math.floor(Math.random() * items.length);
  return items[random];
};

const App = () => {
  const [data, setData] = useState<Square[]>(initial);
  const [isOpen, setOpen] = useState<boolean>(false);
  const [participants, setParticipants] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");

  const setDone = (index: number) => () => {
    const current = data[index];

    if (!current.locked && !current.done) {
      const update = [...data];
      update[index].done = true;
      index !== data.length - 1 && (update[index + 1].locked = false);

      setData(update);
      setContent(getRandomItem(activities));
      setTitle(getRandomItem(participants.split(",")));
      setOpen(true);
    }
  };

  const onClose = () => {
    setOpen(false);
  };

  return html`
    <cu-participants
      @update=${(e: CustomEvent) => setParticipants(e.detail)}
    ></cu-participants>
    <section class="grid">
      ${data.map(
        (item, index) =>
          html`<cu-square
            index=${index}
            .item=${item}
            .setDone=${setDone}
          ></cu-square>`
      )}
    </section>
    <cu-modal
      ?open="${isOpen}"
      @close-modal=${onClose}
      message=${content}
      title=${title}
    ></cu-modal>
  `;
};

customElements.define(
  "cu-app",
  component(App, {
    observedAttributes: ["participants"],
    useShadowDOM: false,
  })
);
