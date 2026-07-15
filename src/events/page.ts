import type { Unsubscribe } from "../core/observable";

export type PageState = "show" | "hide";

/** Subscribes to pageshow and pagehide. */
export function page(
  listener: (state: PageState, event: PageTransitionEvent) => void,
): Unsubscribe {
  const onShow = (event: PageTransitionEvent) => listener("show", event);
  const onHide = (event: PageTransitionEvent) => listener("hide", event);

  window.addEventListener("pageshow", onShow);
  window.addEventListener("pagehide", onHide);

  return () => {
    window.removeEventListener("pageshow", onShow);
    window.removeEventListener("pagehide", onHide);
  };
}
