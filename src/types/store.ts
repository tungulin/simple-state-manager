export type Actions<S, A> = {
  [K in keyof A]: (state: S) => any;
};

export type StoreApi<S> = {
  getState: () => S;
  setState: any;
};
