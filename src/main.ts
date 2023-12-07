import "normalize.css";
import "./style.css";

import "./components/app";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <cu-app></cu-app>
`;
