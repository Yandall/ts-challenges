type StringOnly<T> = T;

type Tests = [
  // @ts-expect-error
  StringOnly<number>,
  // @ts-expect-error
  StringOnly<boolean>,

  StringOnly<string>
];
