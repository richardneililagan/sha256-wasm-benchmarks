import sha256js from './sha256-js'
import sha256native from './sha256-native'
import sha256wasm from './sha256-wasm'

// :: ---

export type HasherFunction = (input: string) => Promise<string>

const __hasher: Record<string, HasherFunction> = {
  js: sha256js,
  native: sha256native,
  wasm: sha256wasm,
}

export default __hasher
