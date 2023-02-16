import { Breadcrumb } from './../components/common/Breadcrumb';
import { Search } from './../components/common/Search';
import { useFetch } from './../hooks/useFetch';

export const PedidosPage = () => {
 
  const { resultados, isLoading } = useFetch('https://jsonplaceholder.typicode.com/posts');
  console.log({ resultados, isLoading });

  return (
    <>
      <div className="container-fluid">
        <h2 className='mt-2'>Pedidos</h2>
        <Breadcrumb titulo="Pedidos"></Breadcrumb>
        <div className="row">
          <div className="col">
            <div className="shadow-sm p-3 bg-white rounded">
              <div className="row">
                <Search></Search>

                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Producto</th>
                      <th scope="col">Descripción</th>

                    </tr>
                  </thead>
                  <tbody>
                    {
                      resultados.map(row => {
                        return (<tr key={row.id}>
                          <td>{row.id}</td>
                          <td>{row.title}</td>
                          <td>{row.body}</td>
                        </tr>)
                      })
                    }
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
