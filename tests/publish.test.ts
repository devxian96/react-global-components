
import ReactGlobalComponents from "react-global-components";
import ReactGlobalComponentsLocal from "../src/index";

describe('Publish Version Test', (): void => {
  test("lodash is undefined?", (): void => {
    window.lodash = undefined
    expect(lodash === undefined).toBeTruthy();
  });

  test("Publish Version Test", (): void => {
    ReactGlobalComponentsLocal('../plugins');
    expect(lodash.VERSION !== undefined).toBeTruthy();
  });
});

describe('Local Version Test', (): void => {
  test("lodash is undefined?", (): void => {
    window.lodash = undefined
    expect(lodash === undefined).toBeTruthy();
  });

  test("Local Version Test", (): void => {
    ReactGlobalComponentsLocal('../plugins');
    expect(lodash.VERSION !== undefined).toBeTruthy();
  });
})