const requireContext = require("require-context");

// Import Global
function importGlobal(requireContext: __WebpackModuleApi.RequireContext): void {
  requireContext.keys().map((key: string) => {
    global[key.replace(".js", "")] = requireContext(key).default.default;
  });
}

export default function ReactGlobalComponents(): void {
  importGlobal(requireContext("../../plugins", true, /\.js$/));
}
