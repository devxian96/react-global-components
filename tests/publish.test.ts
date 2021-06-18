/*
// @ts-expect-error: Not ready support typescript
import ReactGlobalComponents from "react-global-components";

test("Publish Version Test", () => {

  console.log(ReactGlobalComponents)
  ReactGlobalComponents();
  // @ts-expect-error: Typescript can not read global variable
  expect(lodash.VERSION !== undefined).toBeTruthy();
});
*/

import ReactGlobalComponents from "../src/index";

test("Publish Version Test", () => {
  ReactGlobalComponents('../plugins');
  // @ts-expect-error: Typescript can not read global variable
  expect(lodash.VERSION !== undefined).toBeTruthy();
});