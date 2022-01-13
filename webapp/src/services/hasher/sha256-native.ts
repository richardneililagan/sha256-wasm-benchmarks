const __encoder = new TextEncoder()

const sha256 = async (input: string, iterations: number): Promise<string> => {
  let __data: ArrayBuffer = __encoder.encode(input)

  for (let index = 0; index < iterations; index += 1) {
    __data = await crypto.subtle.digest('SHA-256', __data)
  }

  const __bitArray = [...new Uint8Array(__data)]
  const __hexArray = __bitArray.map((b) => b.toString(16).padStart(2, '0'))

  return __hexArray.join('')

  // const __data = __encoder.encode(input)
  // const result = [...Array.from({ length: iterations })].reduce<Promise<ArrayBuffer>>(
  //   async (accumulator) => {
  //     return crypto.subtle.digest('SHA-256', await accumulator)
  //   },
  //   Promise.resolve(__data)
  // )

  // const __bitArray = [...new Uint8Array(await result)]
  // const __hexArray = __bitArray.map((b) => b.toString(16).padStart(2, '0'))

  // return __hexArray.join('')
}

export default sha256
