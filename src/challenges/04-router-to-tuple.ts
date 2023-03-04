import { Equal, Expect } from "../helpers/type-utils";

type Router =
  | {
      url: "auth/login";
      method: "POST";
      handler: () => void;
    }
  | {
      url: "aisle/:number/product/:id";
      method: "GET";
      handler: () => object;
    }
  | {
      url: "profile/user/:id";
      method: "GET";
      handler: () => object;
    };

type Urls = never;

type Test = Expect<
  Equal<
    Urls,
    ["/auth/login", "/aisle/:number/product/:id", "/profile/user/:id"]
  >
>;
