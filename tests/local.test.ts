import ReactGlobalComponents from "../src/index";

test("Local Version Test", () => {
  ReactGlobalComponents();
  // @ts-expect-error: Typescript can not read global variable
  expect(lodash.VERSION !== undefined).toBeTruthy();
});
