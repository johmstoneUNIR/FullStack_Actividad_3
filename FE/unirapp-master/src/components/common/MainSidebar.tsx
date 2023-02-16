
import logo from '../../svg/logo.svg';
import '../../styles/MainSidebar.css';
import '../../styles/App.css';
import { Link, NavLink } from 'react-router-dom';

export const MainSidebar = () => {
  return (
    <>
      <div id='sidebar-wrapper' className="flex-column flex-shrink-0 text-bg-dark customWith">
        <Link to="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
          <img src={logo} className="App-logo" alt="logo" />
          
          <span className="fs-4">ReactShop</span>
        </Link>
        <hr></hr>
          <ul className="nav nav-pills flex-column mb-auto">
            <li className="nav-item">
              <NavLink 
                to="/" 
                className={ ({isActive}) => `nav-link ${ isActive ? 'active' : 'text-white'}`}>
                <i className="fa-solid fa-home"></i> Inicio
              </NavLink>
            </li>
            <li>
              <NavLink to="/productos" 
                className={ ({isActive}) => `nav-link ${ isActive ? 'active' : 'text-white'}`}>
                <i className="fa-solid fa-cubes"></i> Productos
              </NavLink>
            </li>
            <li>
              <NavLink to="/pedidos"
                className={ ({isActive}) => `nav-link ${ isActive ? 'active' : 'text-white'}`}>
                <i className="fa-solid fa-bag-shopping"></i> Pedidos
              </NavLink>
            </li>
            <li>
              <NavLink to="/clientes"
                className={ ({isActive}) => `nav-link ${ isActive ? 'active' : 'text-white'}`}>
                <i className="fa-solid fa-users"></i> Clientes
              </NavLink>
            </li>
            <li>
              <NavLink to="/noexiste"
                className={ ({isActive}) => `nav-link ${ isActive ? 'active' : 'text-white'}`}>
                <i className="fa-solid fa-file"></i> 404 Page
              </NavLink>
            </li>
          </ul>
      </div>
    </>
  )
}
