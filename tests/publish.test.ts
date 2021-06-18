declare var lodash: any;

// @ts-ignore
import ReactGlobalComponents from "react-global-components";
import ReactGlobalComponentsLocal from "../src/index";

const $this = (<any>globalThis)

describe('Publish Version Test', (): void => {
  test("lodash is undefined?", (): void => {
    $this.lodash = undefined
    expect($this.lodash === undefined).toBeTruthy();
  });

  test("Publish Version Test", (): void => {
    ReactGlobalComponents('../../../plugins');
    expect($this.lodash.VERSION !== undefined).toBeTruthy();
  });
});

describe('Local Version Test', (): void => {
  test("lodash is undefined?", (): void => {
    $this.lodash = undefined
    expect($this.lodash === undefined).toBeTruthy();
  });

  test("Local Version Test", (): void => {
    ReactGlobalComponentsLocal('../plugins');
    expect($this.lodash.VERSION !== undefined).toBeTruthy();
  });
})