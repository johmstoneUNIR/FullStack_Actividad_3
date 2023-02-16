import { Breadcrumb } from './../components/common/Breadcrumb';
import { Search } from './../components/common/Search';
import { useFetch } from './../hooks/useFetch';

export const ClientesPage = () => {
  const { resultados, isLoading } = useFetch('https://jsonplaceholder.typicode.com/users');
  return (
    <>
      <div className="container-fluid">
          <h2 className='mt-2'>Clientes</h2>
          <Breadcrumb titulo="Clientes"></Breadcrumb>
          <div className="row">
            <div className="col">
              <div className="shadow-sm p-3 bg-white rounded">
                <div className="row">
                  <Search></Search>
                  <table class="table">
                    <thead>
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Correo</th>
                        <th scope="col">Teléfono</th>
                      </tr>
                    </thead>
                    <tbody>
                      { 
                        resultados.map( row => {
                          return (<tr key={row.id}>
                                    <td>{row.id}</td>
                                    <td>{row.name}</td>
                                    <td>{row.email}</td>
                                    <td>{row.phone}</td>
                                    
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
