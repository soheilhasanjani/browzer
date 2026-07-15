import type { Unsubscribe } from "../core/observable";

export type HistoryState = "popstate" | "hashchange";

/** Subscribes to popstate and hashchange. */
export function history(
  listener: (
    state: HistoryState,
    event: PopStateEvent | HashChangeEvent,
  ) => void,
): Unsubscribe {
  const onPopstate = (event: PopStateEvent) => listener("popstate", event);
  const onHashchange = (event: HashChangeEvent) =>
    listener("hashchange", event);

  window.addEventListener("popstate", onPopstate);
  window.addEventListener("hashchange", onHashchange);

  return () => {
    window.removeEventListener("popstate", onPopstate);
    window.removeEventListener("hashchange", onHashchange);
  };
}
