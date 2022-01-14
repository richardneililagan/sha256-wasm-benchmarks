import { FC } from 'react'

import HasherCard from '@/components/hasher-card'
import hashers from '@/services/hasher'

// :: ---

type HomeViewProps = {
  //
}

const HomeView: FC<HomeViewProps> = () => {
  return (
    <section className='flex flex-col gap-8 justify-center items-center'>
      <header className='text-white text-center flex flex-col gap-4 justify-center items-center'>
        <h1 className='text-4xl font-light'>WebAssembly benchmarking</h1>
        <p className='font-light text-xl lg:w-2/3'>
          This webapp compares SHA-256 hashing speeds between plain Javascript, a WASM module built
          using Rust, and the native Browser cryptographic APIs.
        </p>
        <aside className='p-4 text-sm border border-amber-400 border-opacity-30 rounded-lg bg-amber-500 bg-opacity-30'>
          <header className='font-semibold'>
            Please ensure your browser's Developer Tools are closed when this page is loaded.
          </header>
          <div>Your browser may compile WASM in debug mode if DevTools are open.</div>
        </aside>
      </header>
      <div className='w-full flex flex-col md:flex-row gap-2 justify-center items-center'>
        <HasherCard title='Vanilla JS' hasher={hashers.js}>
          <p>
            Uses the{' '}
            <a href='https://crypto.stanford.edu/sjcl/' rel='external nofollow noopen noreferrer' target='_blank'>
              Stanford Javascript Crypto Library (SJCL)
            </a>
            .
          </p>
        </HasherCard>
        <HasherCard title='WASM + Rust' hasher={hashers.wasm}>
          <p>
            Uses the <code>Sha256</code> implementation of the{' '}
            <a
              href='https://docs.rs/sha2/0.10.1/sha2/index.html'
              rel='external nofollow noopen noreferrer'
              target='_blank'
            >
              <code>sha2</code>
            </a>{' '}
            crate.
          </p>
        </HasherCard>
        <HasherCard title='Native Browser APIs' hasher={hashers.native}>
          <p>
            Uses the{' '}
            <a
              href='https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto'
              rel='external nofollow noopen noreferrer'
              target='_blank'
            >
              <code>SubtleCrypto API</code>
            </a>
            .
          </p>
          <aside className='text-sm text-slate-500 p-2 bg-pink-100'>
            Note that the <code>SubtleCrypto API</code> functions are <code>async</code>, and
            therefore, results are skewed by event loop overhead.
          </aside>
        </HasherCard>
      </div>
      <footer className='text-sm text-slate-300 flex flex-row gap-1'>
        <span>&copy; 2022</span>
        <a
          href='https://richardneililagan.com'
          target='_blank'
          className='text-white hover:underline'
        >
          Richard Neil Ilagan
        </a>
        <span className='text-slate-300'>/</span>
        <a
          href='https://github.com/richardneililagan/sha256-wasm-benchmarks'
          rel='external noopener nofollow noreferrer'
          className='hover:underline hover:text-white'
          target='_blank'
        >
          Fork this on Github.
        </a>
      </footer>
    </section>
  )
}

export default HomeView
