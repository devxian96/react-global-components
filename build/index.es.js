const requireContext = require("require-context");
// Import Global
function importGlobal(requireContext) {
    requireContext.keys().map((key) => {
        global[key.replace(".js", "")] = requireContext(key).default.default;
    });
}
function ReactGlobalComponents() {
    importGlobal(requireContext("../../plugins", true, /\.js$/));
}

export default ReactGlobalComponents;
//# sourceMappingURL=index.es.js.map
