export default class GamepadApi extends HTMLElement {
  polling: NodeJS.Timeout | null;

  constructor() {
    super();

    this.polling = null;
  }

  _filter(gamepads: (Gamepad | null)[]): number {
    const arr = gamepads.filter((pad) => pad !== null);
    return arr.length;
  }

  _checkButtons() {
    const prev = this.pad(0)?.buttons[14].pressed ? "prev" : null;
    const next = this.pad(0)?.buttons[15].pressed ? "next" : null;
    if (prev || next) {
      // console.log(prev || next);
      this.dispatchEvent(
        new CustomEvent("button", {
          bubbles: true,
          composed: true,
          detail: {
            button: prev || next,
          },
        })
      );
    }
  }

  pad(index: number): Gamepad | null {
    return navigator.getGamepads()[index];
  }

  removePad() {
    window.addEventListener("gamepaddisconnected", (e) => {
      console.log(
        "Gamepad disconnected from index %d: %s",
        e.gamepad.index,
        e.gamepad.id
      );

      this.removeAttribute("connected");
      this.removeAttribute("devices");
      this.polling && clearInterval(this.polling);
    });
  }

  setPad() {
    this.setAttribute("connected", "true");
    this.setAttribute(
      "devices",
      this._filter(navigator.getGamepads()).toString()
    );
    this.polling = setInterval(this._checkButtons.bind(this), 100);
  }

  detectPad() {
    window.addEventListener("gamepadconnected", (e) => {
      console.log(
        "Gamepad connected at index %d: %s. %d buttons, %d axes.",
        e.gamepad.index,
        e.gamepad.id,
        e.gamepad.buttons.length,
        e.gamepad.axes.length
      );
      this.setPad();
    });
  }

  connectedCallback() {
    this._filter(navigator.getGamepads()) ? this.setPad() : null;
    this.detectPad();
    this.removePad();
  }
}

customElements.define("gamepad-api", GamepadApi);
