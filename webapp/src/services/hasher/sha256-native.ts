const __encoder = new TextEncoder()

const sha256 = async (input: string): Promise<string> => {
  const __data = __encoder.encode(input)
  const __digest = await crypto.subtle.digest('SHA-256', __data)

  const __bitArray = [...new Uint8Array(__digest)]
  const __hexArray = __bitArray.map((b) => b.toString(16).padStart(2, '0'))

  return __hexArray.join('')
}

export default sha256
