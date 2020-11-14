import React from 'react'
import './Congrats.scss'
import history from '../history'
export default function Congrats({title}) {
    return (
        <div>
            <h1>Felicitari!</h1>
            <p>Ai terminat cursul</p>
           <p><strong >{title}</strong> </p>

           <button className="back" onClick={()=>{history.goBack()}}>Inapoi</button>
        </div>
    )
}
