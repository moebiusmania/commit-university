export interface Square {
  locked: boolean;
  done: boolean;
  label: string;
}

// just random item getter
export const getRandomItem = (items: string[]): string => {
  const random = Math.floor(Math.random() * items.length);
  return items[random];
};

// this function is used to dispatch events from a Web Component
// https://developer.mozilla.org/en-US/docs/Web/Events/Creating_and_triggering_events
export const fireEvent = (_this: any, name: string, detail?: any) => {
  const event = new CustomEvent(name, {
    bubbles: true, // this let's the event bubble up through the DOM
    detail,
  });

  _this.dispatchEvent(event);
};

// initial state of the squares in the grid
export const initial: Square[] = new Array(24).fill({}).map((_, index) => ({
  done: false,
  locked: index === 0 ? false : true,
  label: (index + 1).toString(),
}));

// create class names based on the state of the square
// eventually, lit-html has a classMap directive
// https://lit.dev/docs/templates/directives/#classmap
export const getClass = (item: Square): string => {
  const classes = [
    "square",
    item.done ? "done" : "",
    item.locked ? "locked" : "",
  ];
  return classes.join(" ").trim();
};
