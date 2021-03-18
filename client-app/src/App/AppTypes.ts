export interface HttpResponse<T> extends Response {
  parsedBody?: T;
}

export interface Async<T> {
  data: "failed" | { status: "loaded"; data: T } | "loading";
}

export interface Fun<input, output> {
  (_: input): output;
  then: <finalOutput>(
    otherFunction: Fun<output, finalOutput>
  ) => Fun<input, finalOutput>;
}

export type Action<T> = (_: T) => T;

export type Updater<T> = (_: T) => void | undefined;

export type Setter<U, T> = (newVal: U) => (prevState: T) => T;

export interface ApiState<T> {
  data?: T;
  status: "Loading" | "Loaded" | "Failed" | "Unauthorized";
}
export interface HttpResponse<T> extends Response {
  parsedBody?: T;
}
