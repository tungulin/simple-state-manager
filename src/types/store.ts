export type Actions<S, A> = {
  [K in keyof A]: (state: S) => any;
};

export type Store<S, A> = {
  state: S;
  actions: Actions<S, A>;
};
