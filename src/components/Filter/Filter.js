import React from 'react';
import s from "./Filter.module.css"

const Filter = ({ filter, changeFilter }) => (

    <div>
        <label >
            Find contacts by name
        <input type="text"
                value={filter}
                name="filter"
                onChange={changeFilter} />
        </label>
    </div>
);

export default Filter;
