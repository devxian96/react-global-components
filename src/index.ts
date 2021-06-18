// Pollyfill
if (typeof require.context === 'undefined') {
  const fs = require('fs');
  const path = require('path');
  require.context = (base: string = '.', scanSubDirectories: Boolean = false, regularExpression: RegExp = /\.js$/): any => {
    const files: Object = {};

    function readDirectory(directory: string) {
      fs.readdirSync(directory).forEach((file: string) => {
        const fullPath: string = path.resolve(directory, file);

        if (fs.statSync(fullPath).isDirectory()) {
          if (scanSubDirectories) readDirectory(fullPath);

          return;
        }

        if (!regularExpression.test(fullPath)) return;

        files[fullPath] = true;
      });
    }

    readDirectory(path.resolve(__dirname, base));

    function Module(file: string): any {
      return require(file);
    }

    Module.keys = (): String[] => Object.keys(files);

    console.log(typeof Module)

    return Module;
  };
}

// Import Global
function importGlobal(requireContext: any): void {
  requireContext.keys().map((key: string) => {
    global.globalThis[key.replace(".js", "").replace(/^.*[\\\/]/, '')] = requireContext(
      key
    ).default;
  });
}

export default function ReactGlobalComponents(path: String = "/plugins"): void {
  importGlobal(require.context(`${require('path').resolve(__dirname)}/${path}`, true, /\.js$/));
}
