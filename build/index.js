'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

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

exports.default = ReactGlobalComponents;
//# sourceMappingURL=index.js.map
