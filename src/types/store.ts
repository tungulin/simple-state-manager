type Get<T, K, F> = K extends keyof T ? T[K] : F;

type SetStateInternal<T> = {
  _(
    partial: T | Partial<T> | { _(state: T): T | Partial<T> }["_"],
    replace?: false
  ): void;
  _(state: T | { _(state: T): T }["_"], replace: true): void;
}["_"];

export type StoreApi<S> = {
  getState: () => S;
  setState: SetStateInternal<S>;
};

export type CreateState<T, U = T> = (
  setState: Get<StoreApi<T>, "setState", never>,
  getState: Get<StoreApi<T>, "getState", never>,
  store: StoreApi<T>
) => U;

export type CreateStore<T> = (initiaState: CreateState<T>) => StoreApi<T>;
