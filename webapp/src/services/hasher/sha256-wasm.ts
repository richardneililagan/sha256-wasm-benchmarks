import init, { sha256 } from '@sha256-wasm-benchmarks/wasm'

// :: ?url is required so that vite doesn't mangle the WASM binary contents.
import wasm from '@sha256-wasm-benchmarks/wasm/wasm_bg.wasm?url'

// :: ---

const __compile = init(wasm)

const sha256algo = async (input: string, iterations: number): Promise<string> => {
  await __compile
  return sha256(input, iterations)
}

export default sha256algo
