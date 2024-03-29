import { useSound } from "use-sound";
import { usePersistentState } from ".";

import type { ReturnedValue } from "use-sound/dist/types";

export function useClick(): ReturnedValue | [() => void, null] {
  const state = usePersistentState();
  const result = useSound("/sounds/click.ogg", {
    volume: 0.85,
  });

  if (!state.get().sound)
    return [
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      (): void => {},
      null,
    ];

  return result;
}
