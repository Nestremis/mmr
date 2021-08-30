import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
import {saveCards} from '../features/cardsSlice'
import { nanoid } from 'nanoid';


const Input = () => {

    const [input, setInput] = useState ('')
    const dispatch = useDispatch()

    const addNewCards = e => {
        if (input !== '' && e.key === 'Enter') {

            dispatch( saveCards ( 
                    [{
                        id: nanoid(),
                        value: input,
                        content: input.slice(0, input.indexOf('=')),
                        isFlipped: false,
                        // className: '',
                    },
                    {
                        id: nanoid(),
                        value: input,
                        content: input.slice(input.indexOf('=') +1),
                        isFlipped: false,
                        // className: '',
                    }]
                ));

        setInput('')
    }};


    return (
        <div className='input'>
            <input
                type='text'
                value={input}
                placeholder='word=translation and enter'
                onChange={e=>setInput(e.target.value)}
                onKeyPress={addNewCards}
            />
        </div>
    )
}

export default Input
