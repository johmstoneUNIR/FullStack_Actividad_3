export const CardProducto = ( {producto} ) => {
  return (
    <div className="card m-1">
        <img src={producto.imagen} className="card-img-top" alt={producto.title}/>
        <div className="card-body">
        <h5 className="card-title">{producto.title}</h5>
        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        </div>
        <div className="card-footer">
        <small className="text-muted">{producto.precio}</small>
        </div>
    </div>
  )
}
