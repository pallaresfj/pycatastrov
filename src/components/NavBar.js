import { Link } from 'react-router-dom'
const logeado = true;
// const logeado = false;

function NavBar() {
    if (logeado) {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark mt-3">
                <div className="container px-5">
                    <Link to="/" className="navbar-brand">
                        <img src="/img/logo-catastro.png" alt="" width="170" height="50" />
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#MenuNavegacion" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse d-flex-md justify-content-end" id="MenuNavegacion">
                        <ul className="navbar-nav ms-3">
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" to="" role="button" data-bs-toggle="dropdown">
                                    <img src="/img/user-ico.png" alt="Usuario" width="30" height="30" className="d-inline-block align-text-middle" />
                                </Link>
                                <ul className="dropdown-menu">
                                    <li>
                                        <Link className="dropdown-item" to="">
                                            <span className="fw-bold">
                                                Nombre de Usuario<br/>
                                            </span>
                                            <span class="fs-6 fw-lighter">
                                                correo @correo.com
                                            </span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item" to="/mispredios">
                                            Mis predios
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item" to="/misrecibos">
                                            Mis recibos
                                        </Link>
                                    </li>                                    
                                    <li>
                                        <Link className="dropdown-item" to="">
                                            Simulador Pago
                                        </Link>
                                    </li>                                    
                                    <li>
                                        <Link className="dropdown-item" to="">
                                            Pagos
                                        </Link>
                                    </li>                                    
                                    <li>
                                        <Link className="dropdown-item" to="">
                                            Solicitud Convenio
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item" to="/usuarios">
                                            Usuarios
                                        </Link>
                                    </li>                                    
                                    <li>
                                        <Link className="dropdown-item" to="/predios">
                                            Predios
                                        </Link>
                                    </li>                                    
                                    <li>
                                        <Link className="dropdown-item" to="">
                                            Convenios
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item" to="/cobros">
                                            Cobros Anuales - Descuentos
                                        </Link>
                                    </li>
                                   
                                    <li>
                                        <Link className="dropdown-item" to="">
                                            Multas
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item" to="/usuarionew">
                                            Prueba usuario
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item" to="/solicitudconv">
                                            Prueba Solicitud    
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item" to="">
                                            Salir
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                        <ul className="navbar-nav ms-3">
                            <li className="nav-item">
                                <Link className="nav-link" to="/">
                                    <img src="/img/help-ico.png" alt="Usuario" width="30" height="30" className="d-inline-block align-text-middle" />
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        )
    }
    return (

        <nav className="navbar navbar-expand-lg navbar-dark bg-dark mt-3">
            <div className="container px-5">
                <Link to="/" className="navbar-brand">
                    <img src="/img/logo-catastro.png" alt="" width="170" height="50" />
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#MenuNavegacion" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse d-flex-md justify-content-end" id="MenuNavegacion">
                    <ul className="navbar-nav ms-3">
                        <li className="nav-item">
                            <Link className="nav-link" to="/login">
                                Iniciar sesión
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/registro">
                                Registrate
                            </Link>
                        </li>
                    </ul>
                    <ul className="navbar-nav ms-3">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">
                                <img src="/img/help-ico.png" alt="Usuario" width="30" height="30" className="d-inline-block align-text-middle" />
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;