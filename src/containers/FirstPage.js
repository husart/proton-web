import React from 'react'
import history from "../history";
import { useDispatch } from 'react-redux'
import { withRouter } from "react-router-dom";

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
        <div className="PaginaDeStart">
            <img src="ed_home.png" alt="Imagine"></img>
            <div className="FirstPageContaier">
                <button onClick={()=> onClick('/elev')}>ELEV/PARINTE</button>
                <button onClick={()=> onClick('/profesor')}>PROFESOR</button>
            </div>
        </div>
        
    )
};

export default withRouter(FirstPage);
