
import React, { useState } from 'react';

import PropTypes from 'prop-types';

export const Add = ({setcategories}) => {

    const [state, setstate] = useState("");

    // e es un evento
    const inputChange = (e) => {
        setstate(e.target.value); // el state se actualiza
    } 

    const submit = (e) => {
        e.preventDefault(); //evitar que la pag se recargue al dar enter

        if ( state.trim().length > 2 ){
            setcategories(categ => [state, ...categ]);
            setstate('');
        }

    }

    return (
        <form onSubmit={submit}>
            <input 
                type="text"
                placeholder="Search"
                className="form-control"
                value={state}
                onChange={inputChange}
            />
            <button
                type="submit"
                className="btn m-1 btn-block btn-outline-primary"
            >
               Search 
            </button>
        </form>
    )
}

Add.propTypes = {
    setcategories: PropTypes.func.isRequired
}
