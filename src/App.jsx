import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [popup, setPopup] = useState(true);
  const [spanish, setSpanish] = useState(false);

  return (
    <>
      { popup ? 
        <div className='w-full min-h-screen bg-black'>
          <div className='w-full h-screen flex flex-col justify-center items-center font-bold gap-8'>
            <button onClick={() => setPopup(false)} 
            className='bg-white rounded-lg px-[3.25rem] py-4 text-xl'>
              English
            </button>

            <button onClick={() => {setPopup(false); setSpanish(true)}} 
            className='bg-white rounded-lg px-12 py-4 text-xl'>
              Español
            </button>
          </div>
        </div> :
        <div className='w-full min-h-screen bg-[url("/leopard.jpg")] py-1'>
          <div className='w-[95%] min-h-[99vh] bg-[url("/flowers.jpg")] bg-cover mx-auto border-1 rounded-lg pt-4'>
            <div className='flex flex-col justify-center items-center text-4xl font-bold gap-4'>
              <img src='/flowerline.png' />

              {spanish ?
              <div>Es mi fiesta de</div> :
              <div>It's my 50th</div>
              }

              {spanish ?
              <div>50 cumpleaños.</div> :
              <div>birthday party!</div>
              }

              {spanish ?
              <div>Estas invitado</div> :
              <div>You're Invited!</div>
              }
            </div>

            <div className='flex flex-col justify-center items-center text-2xl gap-2 pt-10'>
              {spanish ?
              <div className='font-bold text-3xl'>Cuando y Donde:</div> :
              <div className='font-bold text-3xl'>When and Where:</div>
              }

              {spanish ?
              <div>Sábado, 12 de Agosto</div> :
              <div>Saturday, August 12th</div>
              }

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
      }
    </>
  )
}

export default App
