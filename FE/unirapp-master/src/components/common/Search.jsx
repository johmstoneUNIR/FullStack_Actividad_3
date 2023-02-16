import React from 'react'
import { useState } from 'react';

export const Search = () => {
    const [busqueda, setbusqueda] = useState('');

    const handleChange = (event) => {
        setbusqueda(event.target.value);
    }

    const handleSearch = () => {
        alert(`Buscaste: ${busqueda}`);
    }

  return (
    <div className="input-group mb-3">
        <input onChange={handleChange} type="search" className="form-control" placeholder="Buscar..." value={busqueda}/>
        <button onClick={handleSearch} className="btn btn-primary" type="button">Buscar</button>
    </div>
  )
}
