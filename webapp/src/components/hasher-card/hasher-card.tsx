import { FC, useState, useCallback } from 'react'
import type { HasherFunction } from '@/services/hasher'

// :: ---

type HasherCardProps = {
  title: string
  hasher: HasherFunction
  disabled?: boolean

  onStart?: () => void
  onEnd?: () => void
}

const HasherCard: FC<HasherCardProps> = (props) => {
  const [state, updateState] = useState({
    disabled: false,
  })

  const handleStart = useCallback(() => {
    updateState((state) => ({
      ...state,
      disabled: true,
    }))

    props.onStart?.()

    let seed = 'abc'
    for (let _ = 0; _ < 1000; _ += 1) {
      seed = props.hasher(seed)
    }
    console.debug(seed)

    props.onEnd?.()

    updateState((state) => ({
      ...state,
      disabled: false,
    }))
  }, [props.hasher, updateState])

  return (
    <div className='w-1/4 h-96 p-4 rounded-lg bg-white shadow hover:shadow-lg transition transition-all flex flex-col gap-8'>
      <header className='text-center text-lg'>{props.title}</header>
      <div className='flex-grow'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, praesentium.
      </div>
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
