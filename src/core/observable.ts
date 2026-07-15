export type Unsubscribe = () => void;

export type Listener<T> = (value: T) => void;

export type Emit<T> = (value: T) => void;

/**
 * Creates a subscribe function. `setup` receives `emit` to push values to the listener.
 * Calling the result with a listener starts the source and returns unsubscribe.
 */
export function createEvent<T>(
  setup: (emit: Emit<T>) => Unsubscribe,
): (listener: Listener<T>) => Unsubscribe {
  return (listener) => setup(listener);
}
