
import ReactGlobalComponents from "react-global-components";
import ReactGlobalComponentsLocal from "../src/index";

describe('Publish Version Test', (): void => {
  test("lodash is undefined?", (): void => {
    // @ts-expect-error: Typescript can not read global variable
    window.lodash = undefined
    // @ts-expect-error: Typescript can not read global variable
    expect(lodash === undefined).toBeTruthy();
  });

  test("Publish Version Test", (): void => {
    ReactGlobalComponentsLocal('../plugins');
    // @ts-expect-error: Typescript can not read global variable
    expect(lodash.VERSION !== undefined).toBeTruthy();
  });
});

describe('Local Version Test', (): void => {
  test("lodash is undefined?", (): void => {
    // @ts-expect-error: Typescript can not read global variable
    window.lodash = undefined
    // @ts-expect-error: Typescript can not read global variable
    expect(lodash === undefined).toBeTruthy();
  });

  test("Local Version Test", (): void => {
    ReactGlobalComponentsLocal('../plugins');
    // @ts-expect-error: Typescript can not read global variable
    expect(lodash.VERSION !== undefined).toBeTruthy();
  });
})