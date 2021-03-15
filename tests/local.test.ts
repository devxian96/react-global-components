import ReactGlobalComponents from "../src/index";

test("Local Version Test", () => {
  if (process.env.NODE_ENV === "test") {
    require("babel-plugin-require-context-hook/register")();
  }

  ReactGlobalComponents("../plugins");

  // @ts-expect-error: Typescript can not read global variable
  expect(lodash.VERSION !== undefined).toBeTruthy();
});
