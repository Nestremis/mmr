// card.className = 'card-inactive'
// className={`session-sign-${sessionOn && !breakIsOn ? 'active':'inactive'}`}> 
import { createSlice } from '@reduxjs/toolkit'
import '../App.scss'

const initialState = {
    cardsInGame: [],
	actualMatched: [],
	completed:[],
}

const _clearActualMatch = (state) => {
	const actualMatched = state.actualMatched;
	state.actualMatched = [];
	state.cardsInGame = state.cardsInGame.map((card) => {
		if (actualMatched.find(matchedCard => matchedCard.id === card.id)) {
			card.isFlipped = false;
		}
		
		return card;
	});
}

const cardsSlice = createSlice({
    name: 'cards',
    initialState,
    reducers: {

        saveCards: (state, action) => {
            if(state.cardsInGame.length < 24) {
	            _clearActualMatch(state);
                state.cardsInGame.push(action.payload[0]);
                state.cardsInGame.push(action.payload[1]);
                state.cardsInGame.sort(() => .5 - Math.random())
            }
        },

	    flipCardAndMatch: (state, action) => {
        	if (state.actualMatched.length === 2) {
		        _clearActualMatch(state);
	        }

	    	state.cardsInGame = state.cardsInGame.map((card) => {
	    		if (card.id === action.payload.id) {
				    card.isFlipped = action.payload.isFlipped;
					// card.style={color: "red"};				
					// document.card.className='card-translation-inactive';
				    state.actualMatched.push(card);				   
					state.completed.push(card);
					// if (state.completed.includes()){
					// 	card.className	
					// }
						
			    }
	    			return card;
		    });
			
		    if (state.actualMatched.length === 2 &&
			    state.actualMatched[0].value===state.actualMatched[1].value) {				
					state.actualMatched = [];
				}
		},
			
		clearActualMatch: (state, action) => {
				_clearActualMatch(state);
	    },

		newGame: (state, action) => {
			state.cardsInGame = []
		},

		repeatGame: (state, action) => {
			state.cardsInGame.sort(() => .5 - Math.random());
			state.cardsInGame = state.cardsInGame.map((card) => {	    		
				card.isFlipped = false;		
	    		return card;
		    })
		}
}});

export const { saveCards, flipCardAndMatch, clearActualMatch, newGame, repeatGame, matchedCard, completed } = cardsSlice.actions

export const selectCards = state => state.cards.cardsInGame

export default cardsSlice.reducer
