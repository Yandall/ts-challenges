import { Equal, Expect } from "../helpers/type-utils";

type FullName = "Jhon Steven Agudelo Rodriguez";

type Path = "/users/:id/archive/:id";

type Digits = "1-2-3-4-5-6-7-8-9-0";

type StringSplit<TString, TSplit> = never;

type Tests = [
  Expect<
    Equal<
      StringSplit<FullName, " ">,
      "Jhon" | "Steven" | "Agudelo" | "Rodriguez"
    >
  >,
  Expect<Equal<StringSplit<Path, "/">, "" | "users" | ":id" | "archive">>,
  Expect<
    Equal<
      StringSplit<Digits, "-">,
      "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "0"
    >
  >
];
