/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import productos from './../data/productos.json';
import { CardProducto } from './../components/CardProducto';
import { Breadcrumb } from './../components/common/Breadcrumb';
import { Search } from '../components/common/Search';

import BackEndServices from '../services/backend';

export const ProductosPage = () => {

  const [Productos, setProductos] = useState([]);
  const BEServices = new BackEndServices();

  useEffect(() => {
    document.title = "ReactShop - Productos"
    loadData();
  }, []);

  const loadData = () => {
    BEServices.ProductList().then(res => {
      console.log(res);
      setProductos(res);
    }); 
  }

  const Updatelist = (searchTxt) => {
    console.log(searchTxt);
    if(searchTxt === "" || searchTxt === undefined) {
      loadData()
    } else {
    BEServices.SearchByName(searchTxt).then(res => {
      console.log(res);
      setProductos(res);
    });
  }
  }

  return (
    <>
      <div className="container-fluid">
          <h2 className='mt-2'>Productos</h2>
          <Breadcrumb titulo="Productos"></Breadcrumb>
          <div className="row">
            <div className="col">
              <div className="shadow-sm p-3 bg-white rounded">
                <div className="row">
                <Search CallbackFunction={Updatelist}></Search>
                  <div className="card-group">
                    { 
                      Productos.map( producto => {
                        return (<div className="col-md-3 col-sm-6 col-xs-1" key={producto.id}>
                                    <CardProducto  producto={producto}></CardProducto>
                                </div>)
                      })
                    }
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>
    </>
  )
}
