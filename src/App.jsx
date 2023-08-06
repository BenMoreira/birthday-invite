import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return (
    <div className='w-full min-h-screen bg-[url("/leopard.jpg")] py-1'>
      <div className='w-[95%] min-h-[99vh] bg-[url("/flowers.jpg")] bg-cover mx-auto border-1 rounded-lg pt-4'>
        <div className='flex flex-col justify-center items-center text-4xl font-bold gap-4'>
          <img src='/flowerline.png' />

          <div>
            Es mi fiesta de
          </div>

          <div>
            50 cumpleaños.
          </div>

          <div>
            Estas invitado
          </div>
        </div>

        <div className='flex flex-col justify-center items-center text-2xl gap-2 pt-10'>
          <div className='font-bold text-3xl'>
            Cuando y Donde:
          </div>

          <div>
            Sábado, 12 de Agosto
          </div>
          
          <div>
            3896 Egypt Rd. Snellville, GA, 30039
          </div>

          <div>
            @ 7 P.M. - 10 P.M.
          </div>

          <img src='/leopardpic.png' className='w-[300px]' />
        </div>
      </div>
    </div>
  )
}

export default App
