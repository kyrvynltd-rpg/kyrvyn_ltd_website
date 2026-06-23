const fs = require("fs");
const path = require("path");

function walkDir(dir, callback) {
  if (!fs.existsSync(dir)) return;
  fs.readdirSync(dir).forEach((f) => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
  });
}

walkDir(path.join(process.cwd(), "node_modules/sanity/lib"), (filePath) => {
  if (!filePath.endsWith(".js") && !filePath.endsWith(".mjs")) return;

  let content = fs.readFileSync(filePath, "utf8");

  if (content.includes("__patchUseRef")) return; // Already patched

  // Only patch if it imports useEffectEvent from react
  if (/(?:import|require)[^;]*useEffectEvent[^;]*react/.test(content)) {
    // Remove useEffectEvent from the react import list
    content = content.replace(/,\s*useEffectEvent\b/g, "").replace(/\buseEffectEvent\s*,/g, "");

    const esmPolyfill = `
import { useRef as __patchUseRef, useInsertionEffect as __patchUseInsertionEffect, useCallback as __patchUseCallback } from 'react';
const useEffectEvent = (fn) => {
  const ref = __patchUseRef(fn);
  __patchUseInsertionEffect(() => { ref.current = fn; }, [fn]);
  return __patchUseCallback((...args) => (0, ref.current)(...args), []);
};
`;

    // Append the polyfill after the first import statement (that comes from react or any other basic import)
    content = content.replace(/import.*?from\s+"react";/, (match) => match + "\n" + esmPolyfill);

    fs.writeFileSync(filePath, content, "utf8");
    console.log("Patched " + filePath);
  }
});
