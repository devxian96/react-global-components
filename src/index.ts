import * as path from "path";

// Import Global
function importGlobal(requireContext: __WebpackModuleApi.RequireContext): void {
  requireContext.keys().map((key: string) => {
    window[key.replace(".js", "").replace("./", "")] = requireContext(
      key
    ).default;
  });
}

export default function ReactGlobalComponents(setPath: string): void {
  importGlobal(require.context(path.join(__dirname, setPath), true, /\.js$/));
}
