import { Expect, Equal } from "../helpers/type-utils";

const names = ["Steven", "Cesar", "Juan", "Mateo"];
const primes = [2, 3, 5, 7, 11];

type FlatArray<TArray> = never;

type Tests = [
  Expect<Equal<FlatArray<typeof names>, string>>,
  Expect<Equal<FlatArray<typeof primes>, number>>
];
