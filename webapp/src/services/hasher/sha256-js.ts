import * as sjcl from 'sjcl'

// :: ---

const __algo = sjcl.hash.sha256

const sha256 = async (input: string, iterations: number): Promise<string> => {
  const result = [...Array.from({ length: iterations })].reduce<string | sjcl.BitArray>(
    (accumulator) => {
      return __algo.hash(accumulator)
    },
    input
  )

  return sjcl.codec.hex.fromBits(result as sjcl.BitArray)
}

export default sha256
