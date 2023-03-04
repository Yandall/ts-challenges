import { Expect, Equal } from "../helpers/type-utils";

const userObj = {
  id: 1,
  name: "Steven",
  lastName: "Agudelo",
  internalId: 2,
  countryId: 123123,
};

type IdUnion = never;

type OnlyIdObj = never;

type Test = Expect<
  Equal<
    OnlyIdObj,
    {
      id: number;
      internalId: number;
      countryId: number;
    }
  >
>;
