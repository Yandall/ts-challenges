import { Expect, Equal } from "../helpers/type-utils";

type MyObj = {
  id: number;
  name: string;
  1: number;
  2: number;
};

type UnionExtract = never;

type Test = Expect<Equal<UnionExtract, "id" | "name">>;
