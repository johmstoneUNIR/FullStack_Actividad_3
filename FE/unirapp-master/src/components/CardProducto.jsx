export const CardProducto = ( {producto} ) => {
  return (
    <div className="card m-1">
        <img src={producto.imageurl} className="card-img-top" alt={producto.name}/>
        <div className="card-body">
        <h5 className="card-title">{producto.name}</h5>
        <p className="card-text">{producto.description}</p>
        </div>
        <div className="card-footer">
        <small className="text-muted">$ {producto.price}</small>
        </div>
    </div>
  )
}
