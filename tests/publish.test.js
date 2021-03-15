import ReactGlobalComponents from "react-global-components";

test("Publish Version Test", () => {
  ReactGlobalComponents("../plugins");
  expect(lodash.VERSION !== undefined).toBeTruthy();
});
