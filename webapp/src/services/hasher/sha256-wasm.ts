import init, { sha256 } from 'wasm'

// :: ?url is required so that vite doesn't mangle the WASM binary contents.
import wasm from 'wasm/wasm_bg.wasm?url'

// :: ---

init(wasm)

const sha256algo = async (input: string, iterations: number): Promise<string> => {
  return sha256(input, iterations)
}

export default sha256algo
