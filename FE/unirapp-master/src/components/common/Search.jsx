import React from 'react'
import { useState } from 'react';
import PropType from "prop-types";


export const Search = (props) => {
    const [busqueda, setbusqueda] = useState('');

    const handleChange = (event) => {
        setbusqueda(event.target.value);
        props.CallbackFunction(busqueda);
    }

    const handleSearch = () => {
        props.CallbackFunction(busqueda);
    }

  return (
    <div className="input-group mb-3">
        <input onChange={handleChange} type="search" className="form-control" placeholder="Buscar..." value={busqueda}/>
        <button onClick={handleSearch} className="btn btn-primary" type="button">Buscar</button>
    </div>
  )
}

Search.propTypes = {
  CallbackFunction: PropType.func
}