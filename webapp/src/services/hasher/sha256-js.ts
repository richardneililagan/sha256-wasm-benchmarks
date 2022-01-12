import * as sjcl from 'sjcl'

// :: ---

const __algo = sjcl.hash.sha256

const sha256 = async (input: string): Promise<string> => {
  const __words = __algo.hash(input)
  return sjcl.codec.hex.fromBits(__words)
}

export default sha256
