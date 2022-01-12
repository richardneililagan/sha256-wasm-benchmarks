import sha256js from './sha256-js'

// :: ---

export type HasherFunction = (input: string) => string

const __hasher: Record<string, HasherFunction> = {
  js: sha256js,
}

export default __hasher
