import React, { useRef, useState } from 'react'
import './TicTacToe.css'
import cross from '../Assets/cross.png'
import zero from '../Assets/zero.png'

let data = ['','','','','','','','','',''];

const TicTacToe = () => {
//  let[varName, functionName]
    let [count, setCount] = useState(0);
    let [lock, setLock] = useState(false);
    let titleRef = useRef(null);
    let box1 = useRef(null);
    let box2 = useRef(null);
    let box3 = useRef(null);
    let box4 = useRef(null);
    let box5 = useRef(null);
    let box6 = useRef(null);
    let box7 = useRef(null);
    let box8 = useRef(null);
    let box9 = useRef(null);

    let box_array = [box1,box2,box3,box4,box5,box6,box7,box8,box9];

    const toggle = (e,num) =>{
        if(lock){
            return 0;
        }
        if(count%2===0){
            e.target.innerHTML = `<img src = '${cross}'>`;
            data[num] ="x";
            setCount(++count);
        }
        else{
            e.target.innerHTML = `<img src = '${zero}'>`;
            data[num] ="o";
            setCount(++count);
        }
        checkWin();
    }

    const winningCombos = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
      
    const checkWin = () => {
        for (let [a, b, c] of winningCombos) {
          if (data[a] === data[b] && data[b] === data[c] && data[a] !== "") {
            won(data[a]); // pass the winner (e.g., "x" or "o")
            break;
          }
        }
    };
      
    const won = (winner) => {
        setLock(true);
        if(winner === 'x'){
            titleRef.current.innerHTML = `Congratulation : <img src=${cross}> !!`
        }
        else{
            titleRef.current.innerHTML = `Congratulation : <img src=${zero}> !!`
        }
    };
    
    const reset = () =>{
        setLock(false);
        data = ['','','','','','','','','',''];
        titleRef.current.innerHTML = 'Tic Tac Toe in <span>React</span>';
        box_array.map((e)=>{
            e.current.innerHTML = "";
        });
    }

  return (
    <div className='container'>
        <h1 className="title" ref={titleRef}>Tic Tac Toe Game in <span>React</span> </h1>
        <div className="board">
            <div className="row1">
                <div className="boxes" ref={box1} onClick={(e)=>{toggle(e,0)}}></div>
                <div className="boxes" ref={box2} onClick={(e)=>{toggle(e,1)}}></div>
                <div className="boxes" ref={box3} onClick={(e)=>{toggle(e,2)}}></div>
            </div>
            <div className="row2">
                <div className="boxes" ref={box4} onClick={(e)=>{toggle(e,3)}}></div>
                <div className="boxes" ref={box5} onClick={(e)=>{toggle(e,4)}}></div>
                <div className="boxes" ref={box6} onClick={(e)=>{toggle(e,5)}}></div>
            </div>
            <div className="row3">
                <div className="boxes" ref={box7} onClick={(e)=>{toggle(e,6)}}></div>
                <div className="boxes" ref={box8} onClick={(e)=>{toggle(e,7)}}></div>
                <div className="boxes" ref={box9} onClick={(e)=>{toggle(e,8)}}></div>
            </div>
        </div>
        {/* alternate short code: 
        <div className="board">
            {[...Array(3)].map((_, rowIdx) => (
                <div key={rowIdx} className={`row${rowIdx + 1}`}>
                    {[...Array(3)].map((_, colIdx) => (
                        <div key={colIdx} className="boxes"></div>
                    ))}
                </div>
             ))}
        </div> */}
        <button className="reset" onClick={()=>{reset()}}>RESET GAME</button>
    </div>
  )
}

export default TicTacToe
