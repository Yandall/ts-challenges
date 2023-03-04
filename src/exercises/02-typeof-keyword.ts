import { Expect, Equal } from "../helpers/type-utils";

const myVar = "Hello World";

type MyLiteral = never;

type Test = Expect<Equal<MyLiteral, "Hello World">>;
