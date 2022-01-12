import sha256js from './sha256-js'
import sha256native from './sha256-native'

// :: ---

export type HasherFunction = (input: string) => Promise<string>

const __hasher: Record<string, HasherFunction> = {
  js: sha256js,
  native: sha256native,
}

export default __hasher
