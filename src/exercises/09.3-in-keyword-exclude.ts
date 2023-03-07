import { Expect, Equal } from "../helpers/type-utils";

const userObj = {
  id: 1,
  name: "Steven",
  lastName: "Agudelo",
  internalId: 2,
  countryId: 123123,
  oldId: 0,
  idPlayer: 9,
  idState: 1,
};

// Usar Exclude para crear el union type

type IdUnion = never;

type OnlyIdObj = never;

type Test = Expect<
  Equal<
    OnlyIdObj,
    {
      id: number;
      internalId: number;
      countryId: number;
      oldId: number;
      idPlayer: number;
      idState: number;
    }
  >
>;
