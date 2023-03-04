import { Expect, Equal } from "../helpers/type-utils";

type Colors = "red" | "green" | "blue";

type Sizes = "xs" | "s";

type ColorsSizes = never;

type Test = Expect<
  Equal<
    ColorsSizes,
    "red-xs" | "red-s" | "green-xs" | "green-s" | "blue-xs" | "blue-s"
  >
>;
