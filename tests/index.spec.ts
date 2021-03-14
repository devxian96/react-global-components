import * as React from "react";
import ReactGlobalComponents from "../src/index";

test("component testing'", () => {
  ReactGlobalComponents([{ name: "lodash", path: "lodash" }]);
  console.log(lodashImp);
});
