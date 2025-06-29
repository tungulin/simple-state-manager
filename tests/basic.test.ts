import { expect, it } from "vitest";
import { createStore } from "simple-state";

it("counter state", () => {
  const store = createStore((set) => ({
    count: 0,
    inc: () => set((state) => ({ count: state.count + 1 })),
  }));

  store.getState().inc();

  expect(store.getState().count).toBe(1);

  store.getState().inc();
  store.getState().inc();

  expect(store.getState().count).toBe(3);
});

it("get state", async () => {
  type State = {
    value: number;
    getState1: () => State;
    getState2: () => State;
  };

  const store = createStore((_, get) => ({
    value: 1,
    getState1: () => get(),
    getState2: (): State => store.getState(),
  }));

  expect(store.getState().getState1().value).toBe(1);
  expect(store.getState().getState2().value).toBe(1);
});
