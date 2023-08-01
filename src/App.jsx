import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='w-full min-h-screen bg-[url("/leopard.jpg")] py-1'>
      <div className='w-[95%] min-h-[99vh] bg-[url("/flowers.jpg")] bg-cover mx-auto border-1 rounded-lg'>
        <div className='flex flex-col justify-center items-center text-3xl font-bold gap-2'>
          <div>
            It's my 50th Birthday Party
          </div>

          <div>
            and
          </div>

          <div>
          YOU are invited
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
