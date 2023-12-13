import "reveal.js/dist/reveal.css";
import "reveal.js/dist/theme/sky.css";
// import "reveal.js/dist/plugin/highlight/monokai.css";

// themes that I like:
// league - white - simple - sky

import Reveal from "reveal.js";
import Markdown from "reveal.js/plugin/markdown/markdown.esm.js";
import Notes from "reveal.js/plugin/notes/notes.esm.js";

import "./gamepad";

// https://revealjs.com/api/
const deck = new Reveal({
  plugins: [Markdown, Notes],
});

deck.initialize();

const gamepad = document.querySelector("gamepad-api");

gamepad?.addEventListener("button", (evt: Event): void => {
  const direction = (evt as CustomEvent).detail.button;
  switch (direction) {
    case "prev":
      deck.prev();
      break;
    case "next":
      deck.next();
      break;
    default:
      break;
  }
});
