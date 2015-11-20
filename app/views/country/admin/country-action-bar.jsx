import React from 'react';
const ALPHABET ='abcdefghijklmnopqrstuvwxyz'

export default function CountryActionBar({onLetterClick}) {
    return (
        <ul style={{display: 'flex', textDecoration: 'none'}}>
            {ALPHABET.split('').map( l => <li><button className='mdl-button mdl-button--raised mdl-button--colored' onClick={() => onLetterClick(l)}>{l.toUpperCase()}</button></li>)}
        </ul>
    );
}
