import { Expect, Equal } from "../helpers/type-utils";

type Colors = "red" | "green" | "blue";

type Sizes = "xs" | "s" | "m" | "l" | "xl";

type ColorsSizes = never;

type Test = Expect<
  Equal<
    ColorsSizes,
    {
      red: Sizes;
      green: Sizes;
      blue: Sizes;
    }
  >
>;
