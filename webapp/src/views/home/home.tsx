import { FC } from 'react'

import HasherCard from '@/components/hasher-card'
import hashers from '@/services/hasher'

// :: ---

type HomeViewProps = {
  //
}

const HomeView: FC<HomeViewProps> = () => {
  return (
    <section className='flex flex-col gap-16 justify-center items-center'>
      <header className='text-white text-center flex flex-col gap-4 justify-center items-center'>
        <h1 className='text-4xl font-light'>Web Assembly benchmarking</h1>
        <p className='font-light text-xl lg:w-2/3'>
          This webapp compares SHA-256 hashing speeds between plain Javascript, a WASM module built
          using Rust, and the native Browser cryptographic APIs.
        </p>
      </header>
      <div className='flex flex-row gap-2 justify-center items-center'>
        <HasherCard
          title='Vanilla JS'
          hasher={hashers.js}
          onStart={() => console.debug('start JS')}
          onEnd={() => console.debug('end JS')}
        />
        <HasherCard title='WASM + Rust' hasher={hashers.js} disabled />
        <HasherCard title='Native Browser APIs' hasher={hashers.js} disabled />
      </div>
      <footer>blah</footer>
    </section>
  )
}

export default HomeView
