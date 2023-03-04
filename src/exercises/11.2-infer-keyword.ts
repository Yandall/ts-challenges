import { Expect, Equal } from "../helpers/type-utils";

type MyTuple = [1, 2, "Steven", () => void];

type RemoveFirst<TTuple> = never;

type RemoveLast<TTuple> = never;

type Tests = [
  Expect<Equal<RemoveFirst<MyTuple>, [2, "Steven", () => void]>>,
  Expect<Equal<RemoveLast<MyTuple>, [1, 2, "Steven"]>>
];
