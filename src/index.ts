// Pollyfill
if (typeof require.context === 'undefined') {
  const fs = require('fs');
  const path = require('path');
  require.context = (base: String = '.', scanSubDirectories: Boolean = false, regularExpression: RegExp = /\.js$/): any => {
    const files: Object = {};

    function readDirectory(directory: any) {
      fs.readdirSync(directory).forEach((file: String) => {
        const fullPath: any = path.resolve(directory, file);

        if (fs.statSync(fullPath).isDirectory()) {
          if (scanSubDirectories) readDirectory(fullPath);

          return;
        }

        if (!regularExpression.test(fullPath)) return;

        files[fullPath] = true;
      });
    }

    readDirectory(path.resolve(__dirname, base));

    function Module(file: any): NodeRequire {

      return require(file);
    }

    Module.keys = (): String[] => Object.keys(files);

    return Module;
  };
}

// Import Global
function importGlobal(requireContext: __WebpackModuleApi.RequireContext): void {
  requireContext.keys().map((key: string) => {
    window[key.replace(".js", "").replace(/^.*[\\\/]/, '')] = requireContext(
      key
    ).default;
  });
}

export default function ReactGlobalComponents(path: String = "/plugins"): void {
  importGlobal(require.context(`${require('path').resolve(__dirname)}/${path}`, true, /\.js$/));
}
