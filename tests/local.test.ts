require("babel-plugin-require-context-hook/register")();
import ReactGlobalComponents from "../src/index";

test("Local Version Test", () => {
  ReactGlobalComponents("../plugins");
  // @ts-expect-error: Typescript can not read global variable
  expect(lodash.VERSION !== undefined).toBeTruthy();
});
