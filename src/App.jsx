import { useState } from 'react'
import './output.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <div className='min-h-screen px-10 bg-slate-400 dark:bg-slate-800 dark:text-white'>
            <header className='rounded-3xl bg-gray-500 sticky top-0 z-10'>
                <section className='max-w-4xl mx-auto p-4 flex justify-between items-center'>
                    <a href="#">🚜 Test header section </a>
                </section>
            </header>
            <body>
            <div className="flex space-x-4 py-10">
                <div className="min-h-96 rounded-3xl bg-slate-700 basis-1/4 p-2 ">01</div>
                <div className="rounded-3xl bg-slate-700 basis-3/4 p-2 ">02</div>
            </div>
            </body>
        </div>
    </>
  )
}

export default App;