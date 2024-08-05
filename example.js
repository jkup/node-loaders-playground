// This should be swapped out by our loader
import assert from "@customRuntime/assert";

// This should fail because a real assert library is used
assert.strictEqual(1 + 1, 3, "Math works!");
