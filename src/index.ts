// Import Global
function importGlobal(requireContext: __WebpackModuleApi.RequireContext): void {
  requireContext.keys().map((key: string) => {
    window[key.replace(".js", "").replace("./", "")] = requireContext(
      key
    ).default;
  });
}

export default function ReactGlobalComponents(path: String = "/plugins"): void {
  importGlobal(require.context(`../../..${path}`, true, /\.js$/));
}
