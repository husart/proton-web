import React from 'react'
import history from '../history';
import { useDispatch, useSelector } from 'react-redux'
import { CLEAR_APP } from '../reducers/actions';
import './Header.scss';
export default function Header() {
const  dispatch = useDispatch();
const onClick = (path) => {
    dispatch({type:CLEAR_APP});
    history.push(path)
}
const config = useSelector(state=> state.config)
    return (
        <div className="header"> 
        <ul className="headerLinks">
            
            
            <li onClick={()=>{onClick(`/${config.type || ''}`)}}>Platforme</li>
            <li onClick={()=>{onClick('/contact')}}>Contact</li>
            <li onClick={()=>{onClick('/about')}}>Despre</li>
        </ul>
        </div>
    )
}
