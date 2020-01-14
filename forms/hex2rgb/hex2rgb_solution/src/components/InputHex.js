import React from 'react'
import PropTypes from 'prop-types'
import {useState} from 'react'
import HexToRgb from './HexToRgb';

function InputHex(props) {
    const [form, setForm] = useState({
        name: '',
        score: 'good',
        agreement: false
    });

    const handleChange = (event) => {
        setForm(prevForm => ({...prevForm, name: event.target.value}));
        event.persist()
    }

    return (
        <div>
            <input id="name" name="name" value={form.name} onChange={handleChange} />
            <HexToRgb hexCode={form.name}/>
        </div>
    )
}

InputHex.propTypes = {

}

export default InputHex

