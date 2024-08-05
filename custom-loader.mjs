export async function resolve(specifier, context, defaultResolve) {
  if (specifier === "@customRuntime/assert") {
    // Redirect to the native Node.js assert module
    return {
      url: "node:assert",
      shortCircuit: true,
    };
  }

  // For other modules, use the default resolver
  return defaultResolve(specifier, context, defaultResolve);
}
