import ReactGlobalComponents from "react-global-components";

test("Publish Version Test", () => {
  ReactGlobalComponents();
  expect(lodash.VERSION !== undefined).toBeTruthy();
});
