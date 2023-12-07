export type Square = {
  locked: boolean;
  done: boolean;
  label: string;
};

export const fireEvent = (_this: any, name: string, detail?: any) => {
  const event = new CustomEvent(name, {
    bubbles: true, // this let's the event bubble up through the DOM
    detail,
  });

  _this.dispatchEvent(event);
};

export const initial: Square[] = new Array(24).fill({}).map((_, index) => ({
  done: false,
  locked: index === 0 ? false : true,
  label: (index + 1).toString(),
}));

export const getClass = (item: Square): string => {
  const classes = [
    "square",
    item.done ? "done" : "",
    item.locked ? "locked" : "",
  ];
  return classes.join(" ").trim();
};
