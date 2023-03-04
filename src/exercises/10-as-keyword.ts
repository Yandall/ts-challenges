import { Expect, Equal } from "../helpers/type-utils";

type User = {
  id: number;
  name: string;
};

type Getters = never;

type Setters = never;

type Tests = [
  Expect<
    Equal<
      Getters,
      {
        getId: () => number;
        getName: () => string;
      }
    >
  >,
  Expect<
    Equal<
      Setters,
      {
        setId: (id: number) => void;
        setName: (name: string) => void;
      }
    >
  >
];
