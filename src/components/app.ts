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

  return html` <section>-our code here-</section> `;
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
