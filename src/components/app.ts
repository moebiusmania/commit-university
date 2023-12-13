import { html } from "lit";
import { component, useReducer } from "haunted";

import activities from "../data/activities.json";
import { Square, getRandomItem, initial } from "../utils";

import "./participants";
import "./modal";
import "./square";

interface AppState {
  data: Square[];
  isOpen: boolean;
  participants: string;
  title: string;
  content: string;
}

const initState: AppState = {
  data: initial,
  isOpen: false,
  participants: "",
  title: "",
  content: "",
};

const reducer = (state: AppState, action: any) => {
  switch (action.type) {
    case "setDone":
      return {
        ...state,
        data: action.payload.update,
        content: getRandomItem(action.payload.activities),
        title: getRandomItem(state.participants.split(",")),
        isOpen: true,
      };
    case "close":
      return { ...state, isOpen: false };
    case "setParticipants":
      return { ...state, participants: action.payload };
    default:
      return state;
  }
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, initState);

  const setDone = (index: number) => () => {
    const current = state.data[index];

    if (!current.locked && !current.done) {
      const update = [...state.data];
      update[index].done = true;
      index !== state.data.length - 1 && (update[index + 1].locked = false);

      dispatch({
        type: "setDone",
        payload: {
          update,
          activities,
        },
      });
    }
  };

  const setParticipants = (e: CustomEvent) => {
    dispatch({ type: "setParticipants", payload: e.detail });
  };

  const onClose = () => {
    dispatch({ type: "close" });

    const dones = state.data.filter((item) => item.done);
    const isLast = dones.length === state.data.length;
    isLast
      ? (window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ/")
      : null;
  };

  // lit-html has different bindings for attributes and properties
  // https://lit.dev/docs/templates/expressions/

  // eventually lit-html has a directive for repeating items
  // https://lit.dev/docs/templates/directives/#repeat

  return html`
    <cu-participants @update=${setParticipants}></cu-participants>
    <section class="grid">
      ${state.data.map(
        (item, index) =>
          html`<cu-square
            index=${index}
            .item=${item}
            .setDone=${setDone}
          ></cu-square>`
      )}
    </section>
    <cu-modal
      ?open="${state.isOpen}"
      @close-modal=${onClose}
      message=${state.content}
      title=${state.title}
    ></cu-modal>
  `;
};

// global component registration
// https://developer.mozilla.org/en-US/docs/Web/API/CustomElementRegistry/define
customElements.define(
  "cu-app",
  component(App, {
    // component() is a haunted function that returns a Web Component from a function component
    useShadowDOM: false, // we are turning off Shadow DOM here to allow us to use global styles
  })
);
