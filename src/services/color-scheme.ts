import { createSignal } from "solid-js";

type colorscheme = "light" | "dark";
const colorschemeDefaults = {
  light: { type: "light" as colorscheme, id: "color-scheme-light" },
  dark: { type: "dark" as colorscheme, id: "color-scheme-dark" },
};

const [colorschemeState, setColorschemeState] = createSignal({
  type: "dark" as colorscheme,
});
export const changeColorScheme = () => {
  const _colorscheme = colorschemeState().type === "light" ? "dark" : "light";
  const _default = colorschemeDefaults[_colorscheme];
  document.body.id = _default.id;
  setColorschemeState({
    ...colorschemeState(),
    ..._default,
  });
};
