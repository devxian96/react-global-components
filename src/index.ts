// Import Global
function importGlobal(requireContext: __WebpackModuleApi.RequireContext): void {
  requireContext.keys().map((key: string) => {
    window[key.replace(".js", "").replace("./", "")] = requireContext(
      key
    ).default;
  });
}

export default function ReactGlobalComponents(): void {
  importGlobal(require.context("../../../plugins", true, /\.js$/));
}
