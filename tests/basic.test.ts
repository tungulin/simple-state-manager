import { expect, it } from "vitest";
import { createStore } from "simple-state";

it("counter state", () => {
  const store = createStore((set) => ({
    count: 0,
    inc: () => set((state) => ({ count: state.count + 1 })),
  }));

  store.getState().inc();

  expect(store.getState().count).toBe(1);
});
