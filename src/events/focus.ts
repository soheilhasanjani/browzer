import { createEvent } from "../core/observable";

/** Emits `true` on window focus and `false` on blur. Returns unsubscribe. */
export const focus = createEvent<boolean>((emit) => {
  const onFocus = () => emit(true);
  const onBlur = () => emit(false);

  window.addEventListener("focus", onFocus);
  window.addEventListener("blur", onBlur);

  return () => {
    window.removeEventListener("focus", onFocus);
    window.removeEventListener("blur", onBlur);
  };
});
