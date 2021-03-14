import * as React from "react";

interface components {
  name: string;
  path: string;
}

export default function ReactGlobalComponents(
  globalImports: Array<components>
): void {
  globalImports.map((imports: components) => {
    eval(`const ${imports.name}Imp = require('${imports.path}');`);
    // eval(`const ${imports.name} = React.createContext('${imports.name}Imp');`);
  });
}
