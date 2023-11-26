import "reveal.js/dist/reveal.css";
import "reveal.js/dist/theme/sky.css";
// import "reveal.js/dist/plugin/highlight/monokai.css";

// themes that I like:
// league - white - simple - sky

import Reveal from "reveal.js";
import Markdown from "reveal.js/plugin/markdown/markdown.esm.js";
import Notes from "reveal.js/plugin/notes/notes.esm.js";

let deck = new Reveal({
  plugins: [Markdown, Notes],
});

deck.initialize();

// https://revealjs.com/api/
