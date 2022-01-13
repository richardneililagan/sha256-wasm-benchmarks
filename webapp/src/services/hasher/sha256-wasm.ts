import init, { sha256 } from 'wasm'

// :: ?url is required so that vite doesn't mangle the WASM binary contents.
import wasm from 'wasm/wasm_bg.wasm?url'

// :: ---

init(wasm)

const sha256algo = async (input: string): Promise<string> => {
  return sha256(input)
}

export default sha256algo
