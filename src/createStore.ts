import { StoreApi } from "./types/store";

export const createStore = (createState) => {
  type TState = typeof createState;

  let state: TState;

  const setState = (partial) => {
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
