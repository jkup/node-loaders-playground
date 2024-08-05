import { register } from "node:module";
import { pathToFileURL } from "node:url";

const simpleReplaceLoaderPath = pathToFileURL(
  "./simple-replace-loader.mjs"
).href;

const customStubLoaderPath = pathToFileURL("./custom-stub-loader.mjs").href;

// Register the custom loader
register(simpleReplaceLoaderPath, pathToFileURL("./").href);
register(customStubLoaderPath, pathToFileURL("./").href);
