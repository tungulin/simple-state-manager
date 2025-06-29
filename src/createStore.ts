import { CreateState, StoreApi } from "./types/store";

export const createStore = <T>(createState: CreateState<T>): StoreApi<T> => {
  type TState = ReturnType<typeof createState>;

  let state: TState;

  const setState = (partial: TState) => {
    const nextState = typeof partial === "function" ? partial(state) : partial;

    if (!Object.is(state, nextState)) {
      Object.assign(state, nextState);
    }
  };

  const getState = () => state;

  const api: StoreApi<TState> = { setState, getState };

  state = createState(setState, getState, api);

  return api;
};
