declare namespace types {
  export type Discriminated<D, $> = { discriminant: D; $: $ };

  export type Result<T, E> = Ok<T> | Err<E>;

  export type Api = {
    Ok: typeof Ok.discriminant;
    Err: typeof Err.discriminant;

    ok: <T, E>(ok: T) => Result<T, E>;
    err: <T, E>(err: E) => Result<T, E>;
  };
}

class Ok<T> {
  static readonly discriminant: unique symbol = Symbol();

  readonly $: T;

  constructor($: T) {
    this.$ = $;
  }

  discriminate(): types.Discriminated<typeof Ok.discriminant, T> {
    return { discriminant: Ok.discriminant, $: this.$ };
  }
}

class Err<E> {
  static readonly discriminant: unique symbol = Symbol();

  readonly $: E;

  constructor($: E) {
    this.$ = $;
  }

  discriminate(): types.Discriminated<typeof Err.discriminant, E> {
    return { discriminant: Err.discriminant, $: this.$ };
  }
}

export const Result: types.Api = {
  Ok: Ok.discriminant,
  Err: Err.discriminant,

  ok: ($) => new Ok($),
  err: ($) => new Err($),
};
