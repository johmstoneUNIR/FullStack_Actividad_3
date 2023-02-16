import React from 'react'
import logo from './../svg/logoarbol.svg';
import { Link } from 'react-router-dom';

export const WelcomePage = () => {
  return (
    <>
    <div className="container-fluid">
        
        <div className="px-4 py-5 my-5 text-center">
          <img src={logo} className="d-block mx-auto mb-1 w-25" alt="logo" />
          <div className="col-lg-6 mx-auto">
            <p className="lead mb-1">React Shop es una aplicación desarrollada bajo React y Typescript  que te permitirá administrar tus productos, clientes y pedidos. Con una interfaz amigable y adaptativa para móviles. Conoce más sobre el proyecto o consulta con nuestro soporte.</p>
            <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
              <Link to="/productos" type="button" className="btn btn-primary btn-lg px-4 gap-3">Ver tus productos</Link>
              <a href="mailto:guti06@hotmail.es" className="btn btn-outline-secondary btn-lg px-4">Soporte</a>
            </div>
          </div>
        </div>
    </div>
    </>
  )
}
