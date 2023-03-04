import { Expect, Equal } from "../helpers/type-utils";

function doSomething(p1: string, p2: number, p3: boolean): object {
  return {};
}

type MyReturn = never;

type MyParams = never;

type Tests = [
  Expect<Equal<MyReturn, object>>,
  Expect<Equal<MyParams, [p1: string, p2: number, p3: boolean]>>
];
