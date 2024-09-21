'use client'

import React, { useState } from 'react'
import { Button } from './ui/button'
import { Minus, Plus } from 'lucide-react'

const Counter = () => {


    const [count, setCount] = useState(0)

    const increment = () => setCount(count + 1)
    const decrement = () => setCount(count - 1)

  return (
    <div className='flex items-center gap-3'>
        <Button size={'icon'} onClick={increment}>
            <Plus />
        </Button>
        <p>Current vote: {count}</p>
        <Button size={'icon'} onClick={decrement}>
            <Minus />
        </Button>
    </div>
  )
}

export default Counter