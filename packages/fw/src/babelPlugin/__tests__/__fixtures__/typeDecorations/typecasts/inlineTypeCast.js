/* @flow */

export const input = `
  const a = {
    b: 123
  };
  function go() {
    return 456;
  }
  a.b = a.b + (go(): number);
`;

export const expected = `
  import t from "runtime-types";
  const a = {
    b: 123
  };
  function go() {
    return 456;
  }
  a.b = a.b + t.number().assert(go());
`;