import { register } from "node:module";
import { pathToFileURL } from "node:url";

const loaderPath = pathToFileURL("./custom-loader.mjs").href;

// Register the custom loader
register(loaderPath, pathToFileURL("./").href);
