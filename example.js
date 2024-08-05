// This should be swapped out by our loader
import assert from "@customRuntime/assert";
import { kernel } from "@sys-kernel";

// This should pass because a real assert library is used
assert.strictEqual(1 + 1, 2, "Math works!");

if (kernel.isNative()) {
  console.log("It is native");
} else {
  console.log("It is not native");
}
