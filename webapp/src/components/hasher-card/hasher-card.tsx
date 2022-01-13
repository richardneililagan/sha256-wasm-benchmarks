import { FC, useState, useCallback } from 'react'
import type { HasherFunction } from '@/services/hasher'

// :: ---

const HASH_ITERATION_LENGTH = 100_000

type HasherCardProps = {
  title: string
  hasher: HasherFunction
  disabled?: boolean

  onStart?: () => void
  onEnd?: () => void
}

const __performHashing = async (seed: string, hasher: HasherFunction): Promise<string> => {
  let __seed = `${seed}` // make a copy, just in case

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  for (const _ of Array.from({ length: HASH_ITERATION_LENGTH })) {
    __seed = await hasher(__seed)
  }

  return __seed
}

const HasherCard: FC<HasherCardProps> = (props) => {
  const [state, updateState] = useState({
    disabled: false,
    duration: 0,
  })

  const handleStart = useCallback(async () => {
    updateState((state) => ({
      ...state,
      disabled: true,
    }))

    props.onStart?.()

    const __start = performance.now()
    const output = await __performHashing('abc', props.hasher)
    const __end = performance.now()
    console.debug(output)

    props.onEnd?.()

    updateState((state) => ({
      ...state,
      disabled: false,
      duration: __end - __start,
    }))
  }, [props.hasher, updateState])

  return (
    <div className='w-1/4 h-96 p-4 rounded-lg bg-white shadow hover:shadow-lg transition transition-all flex flex-col gap-8'>
      <header className='text-center text-lg'>{props.title}</header>
      <section className='flex-grow flex flex-col'>
        <div className='flex-grow'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, praesentium.
        </div>
        {state.duration > 0 && (
          <div className='text-center font-mono text-teal-600'>{state.duration} ms</div>
        )}
      </section>
      <footer>
        <button
          className='w-full py-4 rounded-lg bg-indigo-100 text-indigo-500 disabled:text-slate-300 disabled:bg-slate-100'
          disabled={props.disabled || state.disabled}
          onClick={handleStart}
        >
          Start
        </button>
      </footer>
    </div>
  )
}

export default HasherCard
