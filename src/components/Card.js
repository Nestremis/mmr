import React from 'react';
import '../App.scss';
import ReactCardFlip from 'react-card-flip';
import Tilt from 'react-parallax-tilt';
// import { completed } from '../features/cardsSlice';

const Card = ( { handleClick, content, id, isFlipped, value } ) => {
    
    // const colorChange = () => {
        
    //     return <div className={'card-translation'};
       
    //     setTimeout(() => {
    //         return <div className={'card-translation-inactive'}></div>
    //     }, 1000);
    // }

    // let cardColor = {
    //     backgroundColor:'red'
    // }

    // if( isFlipped && completed.filter(id) ) {
    //     cardColor.backgroundColor = 'blue'
    // }
    
    return (
        <Tilt>
            <ReactCardFlip isFlipped={isFlipped} flipDirection='horizontal'  >

                <div
                    className='card'
                    onClick={() => handleClick(id)}
                    id={id} 
                    value={value}
                >
                </div>

                <div
                    className='card-translation'
                    // className={`card-${ isFlipped ? 'translation': ''}`}
                    // style={{ setTimeout(() => {
                    //     { backgroundColor: 'grey'}
                    //   }, 1500) }}
                    id={id}
                    value={value}
                >    
                    {content}
                </div>

            </ReactCardFlip>
        </Tilt>
    );
}

export default Card



