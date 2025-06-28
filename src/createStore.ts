export const createStore = (data) => {
  type TState = typeof data;

  let state: TState;

  const setState = (partial) => {
    const nextState = typeof partial === "function" ? partial(state) : partial;

    if (!Object.is(state, nextState)) {
      Object.assign(state, nextState);
    }
  };

  const getState = () => state;

  return { setState, getState };
};
