import { useState } from 'react'
import WordSelector from './components/WordSelector'
import { Button } from '@headlessui/react'
import { mappedVerbs } from './verbs'
import './App.css'

function App() {
  const [randomVerb, setRandomVerb] = useState('\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0')
  const [currentVerb, setCurrentVerb] = useState('')

  const handleSurpriseMe = () => {
    let randomIndex
    let newVerb

    do {
      randomIndex = Math.floor(Math.random() * mappedVerbs.length)
      newVerb = mappedVerbs[randomIndex].word
    } while (newVerb === currentVerb)

    setRandomVerb(newVerb)
  }

  return (
    <>
      <div className="m-4 sm:m-20 md:m-40 lg:m-20">
        <h1 className="text-zinc-300">Architecture is the art of</h1>
        <div className="flex flex-row flex-wrap items-end justify-center">
          <WordSelector onChange={setCurrentVerb} />
          <span className="flex items-center justify-center">
            <h1 className="border-b-4 border-b-transparent">&nbsp;and&nbsp;</h1>
          </span>
          <div className="">
            <h1 className="border-b-4 border-b-zinc-300">{randomVerb}</h1>
          </div>
        </div>
        <Button className="mt-20" onClick={handleSurpriseMe}>
          Generate
        </Button>
      </div>
    </>
  )
}

export default App
