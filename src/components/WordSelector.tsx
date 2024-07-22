import { Combobox, ComboboxInput, ComboboxOption, ComboboxOptions } from '@headlessui/react'
import { mappedVerbs} from '../verbs'
import { useState } from 'react'

export default function Example({ onChange : String }) {
    const [selectedVerb, setSelectedVerb] = useState(mappedVerbs[1])
    const [query, setQuery] = useState('')

    const filteredVerbs =
        query === ''
        ? mappedVerbs
        : mappedVerbs.filter((verb) => {
            return verb.word.toLowerCase().includes(query.toLowerCase())
            })

    const handleChange = (verb : string) => {
        setSelectedVerb(verb)
        onChange(verb.word)
    }

    return (
        <div className="">
            <Combobox value={selectedVerb} onChange={handleChange} onClose={() => setQuery('')}>
                <ComboboxInput
                    className="text-6xl md:text-7xl w-[374px] md:w-[444px] text-zinc-500 h-[66px] sm:h-20 hover:text-zinc-300 focus:text-zinc-300 font-bold tracking-tighter bg-transparent border-b-4 border-b-zinc-500 hover:border-b-zinc-300 focus:border-b-zinc-300 focus:outline-none"
                    aria-label="Assignee"
                    displayValue={(verb) => verb?.word}
                    onChange={(event) => setQuery(event.target.value)}
                />
                <ComboboxOptions anchor="bottom" className="absolute z-1 mt-2 w-[444px] bg-zinc-800 border border-zinc-700 empty:invisible tracking-tight">
                    {filteredVerbs.map((verb) => (
                    <ComboboxOption key={verb.id} value={verb} className="px-2 py-1 text-lg text-zinc-300 group flex gap-2 data-[focus]:bg-zinc-700">
                        {verb.word}
                    </ComboboxOption>
                    ))}
                </ComboboxOptions>
            </Combobox>
        </div>
        
    )
}