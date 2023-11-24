# Commit University | December 2023 event

> Slides and code from the event.

![Midjourney prompt: "web developers christmas event, illustration, --ar 16:9"](./cu_cover.webp)

This repository includes both the slides and the sample webapp used for the event.

## Event ToC

- Part 1: ⏳ **10 years in a (frontend) lifetime** - a 15 to 20 minutes retrospective about the last decade of the frontend development world
- Part 2: 👩‍💻 **title-in-progress** - a 20 to 30 minutes hands-on coding session on building a simple quiz game using (_mostly_) current web standards
- Part 3: 🤓 **Let's play the just-built quiz!**

## Built on top of

Sample advent calendar webapp:

- vanilla [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [Web Components](https://developer.mozilla.org/en-US/docs/Web/API/Web_components) - standard spec to build reusable [Custom Elements](https://developer.mozilla.org/en-US/docs/Web/API/Web_components/Using_custom_elements)
- [Vite.js](https://vitejs.dev/) - next generation frontend tooling
- [Lit](https://lit.dev/docs/templates/overview/) - dynamic HTML templating built in Javascript
- [Haunted](https://hauntedhooks.netlify.app/) - React hooks for Web Components

Slides:

- [Reveal.js](https://revealjs.com/) - the HTML presentation framework

## Use the "starter" version

```bash
$ git clone -b starter https://github.com/moebiusmania/commit-university
```

## Run locally

Clone the repo

```bash
$ git clone https://github.com/moebiusmania/commit-university
```

install the dependencies

```bash
$ cd commit-university
$ npm i
```

run the dev server

```bash
$ npm run dev
```

open your browsr on the `localhost:3000` address.

## License

All of the code in this repository is distribuited under the terms of the [MIT license](LICENSE).
