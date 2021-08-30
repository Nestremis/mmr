import React, { useCallback, useState } from 'react';
import './App.scss'
import Input from './components/Input'
import { IoMdRepeat }   from 'react-icons/io';
import { MdDelete }  from 'react-icons/md';
import Card                                                from './components/Card'
import { useDispatch, useSelector }                        from 'react-redux'
import { clearActualMatch, flipCardAndMatch, selectCards, newGame, repeatGame } from './features/cardsSlice'

function App() {
   const words = useSelector(selectCards)
	const [timeoutHandler, setTimeoutHandler] = useState(null);
   const dispatch = useDispatch()

   const handleClick = useCallback((cardId) => {
		if (timeoutHandler) {
			clearTimeout(timeoutHandler)
		};

		dispatch(flipCardAndMatch({
			id: cardId,
			isFlipped: true,
		}));

		const handler = setTimeout(()=> {
			dispatch(clearActualMatch())
		}, 3000);

		setTimeoutHandler(handler);

	}, [timeoutHandler, setTimeoutHandler]);


   const reset = () => {
      dispatch( newGame (
         { type: 'reset'}
      ))
   }

   const repeat = () => {
      dispatch( repeatGame (
         { type: 'repeat'}
      ))
   }

	return (
    <>
      <div className='wrapper'>

          <div className = 'header'>
            <h1 className ='logo'>  memory! </h1>
            <Input />
            <div className='buttonsContainer'>
               <button onClick={repeat} className='btn btn1'> <IoMdRepeat/> </button>
               <button onClick={reset} className='btn btn2'> <MdDelete/> </button>
            </div>
          </div>

          <div className='cards-table'>

            {words.map( word =>
               <Card
                  key={word.id}
                  content={word.content}
                  id={word.id}
                  isFlipped={word.isFlipped}
                  handleClick={handleClick}
                  value={word.value}
                  // className={''}
               />
              )}
          </div>
      </div>
   </>
  )
}

export default App;
