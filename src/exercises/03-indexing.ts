import { Expect, Equal } from "../helpers/type-utils";

// Pistas: typeof, as const, []

const myObj = {
  foo: "bar",
  hello: "world",
};

type FooIndex = never;

type UsePick = never;

type Tests = [
  Expect<Equal<FooIndex, "bar">>,
  Expect<Equal<UsePick, { readonly foo: "bar" }>>
];
