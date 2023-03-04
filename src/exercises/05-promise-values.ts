import { Expect, Equal } from "../helpers/type-utils";

type MyPromise = Promise<number>;

type MyValue = never;

type Test = Expect<Equal<MyValue, number>>;
