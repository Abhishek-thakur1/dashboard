import React from 'react'
import * as Component from './top-style';
import {Logo} from '../../data';

const Top = () => {

    const URL_REGEX = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/;

    const renderText = txt =>
        txt.split(" ").map(part => URL_REGEX.test(part) ? <img src={part} className="logoImg"/> : part + " " );
    
    return (
        <Component.Container>
            <Component.Logo>{ renderText(Logo) }</Component.Logo>
            <Component.Icon />
        </Component.Container>
    )
}

export default Top;
