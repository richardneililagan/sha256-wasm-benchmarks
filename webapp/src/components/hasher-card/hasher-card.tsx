import { FC, useState, useCallback } from 'react'
import type { HasherFunction } from '@/services/hasher'

// :: ---

const HASH_ITERATION_LENGTH = 200_000

type HasherCardProps = {
  title: string
  hasher: HasherFunction
  disabled?: boolean

  onStart?: () => void
  onEnd?: () => void
}

const __performHashing = async (seed: string, hasher: HasherFunction): Promise<string> => {
  const __seed = `${seed}` // make a copy, just in case
  return await hasher(__seed, HASH_ITERATION_LENGTH)
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
      duration: 0,
    }))

    // :: Give a chance for the component to re-render (and disable the start button)
    //    before running the hashing process.
    setTimeout(async () => {
      props.onStart?.()

      const __start = performance.now()
      const output = await __performHashing('abc', props.hasher)
      const __end = performance.now()

      props.onEnd?.()

      console.debug(output)

      updateState((state) => ({
        ...state,
        disabled: false,
        duration: __end - __start,
      }))
    }, 0)
  }, [props, updateState])

  return (
    <div className='md:w-1/4 md:h-80 p-4 rounded-lg bg-white shadow hover:shadow-lg transition-all flex flex-col gap-4'>
      <header className='text-center text-lg font-semibold'>{props.title}</header>
      <section className='flex-grow flex flex-col'>
        <div className='flex-grow flex flex-col gap-2 text-center'>{props.children}</div>
        {state.duration > 0 && (
          <div className='text-center font-mono text-teal-600'>{state.duration} ms</div>
        )}
      </section>
      <footer>
        <button
          className='w-full py-4 rounded-lg bg-indigo-100 text-indigo-500 disabled:text-slate-300 disabled:bg-slate-100'
          disabled={state.disabled || props.disabled}
          onClick={handleStart}
        >
          {state.disabled ? 'Processing ...' : 'Start'}
        </button>
      </footer>
    </div>
  )
}

export default HasherCard
