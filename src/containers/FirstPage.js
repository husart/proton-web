import React from 'react'
import history from "../history";
import { useDispatch } from 'react-redux'

import { SELECT_TYPE } from '../reducers/actions';
import './FirstPage.scss'


const FirstPage = ()=> {
    const dispatch = useDispatch()
   
    const onClick = (path) => {
        dispatch({
            type: SELECT_TYPE,
            payload: path.substring(1)
        })
        history.push(path)
    };

    return (
        
        <div className="FirstPageContaier">
            <button onClick={()=> onClick('/elev')}>Elev</button>
            <button onClick={()=> onClick('/profesor')}>Profesor</button>
        </div>
    )
};

export default FirstPage;
