import React from 'react'
import { Link } from 'react-router-dom' 

export const NotFoundPage = () => {
  return (
    <div className="d-flex align-items-center justify-content-center vh-50">
        <div className="text-center row">
            <div className="col">
                <p className="fs-3"> <span className="text-danger">Opps!</span> La página no existe.</p>
                <p className="lead">
                    La página que buscas no existe.
                </p>
                
                <Link to="/" className="btn btn-primary">Ir al inicio</Link>
            </div>

        </div>
    </div>
  )
}
