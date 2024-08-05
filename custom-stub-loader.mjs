export async function resolve(specifier, context, defaultResolve) {
  if (specifier === "@sys-kernel") {
    // Return a special URL to indicate we're handling this
    return {
      url: "stub:@sys-kernel",
      shortCircuit: true,
    };
  }

  // For other modules, use the default resolver
  return defaultResolve(specifier, context, defaultResolve);
}

export async function load(url, context, defaultLoad) {
  if (url === "stub:@sys-kernel") {
    // Return a stubbed module that provides the required interface
    const source = `
        export const kernel = {
          isNative: () => false
        };
      `;
    return {
      format: "module",
      shortCircuit: true,
      source,
    };
  }

  // For other modules, use the default loader
  return defaultLoad(url, context, defaultLoad);
}
