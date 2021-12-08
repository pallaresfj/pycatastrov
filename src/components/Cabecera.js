import { Link } from 'react-router-dom'
// const logeado = true;
const logeado = false;

function Cabecera() {
    if (logeado) {
        return (
            <div className="container-fluid px-5 bg-dark">
                <div className="row gx-5 justify-content-center">
                    <div className="col-lg-6">
                        <div class="text-center my-5">
                            <h1 class="display-5 fw-bolder text-white mb-2">Oficina de Catastro de Valledupar</h1>
                            <p class="lead text-white-50 mb-4">Ya te encuentras dentro de la platafroma de la oficina de
                                catastro de Valledupar; puedes revisar tus predios y realizar tus pagos de impuestos</p>
                            <div class="d-grid gap-3 d-sm-flex justify-content-sm-center">
                                <Link class="btn btn-primary btn-lg px-4 me-sm-3" to="/mispredios">
                                    Predios
                                </Link>
                                <Link class="btn btn-outline-light btn-lg px-4" to="/misrecibos">
                                    Recibos
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    return (
        <div className="container-fluid px-5 bg-dark">
            <div className="row gx-5 justify-content-center">
                <div className="col-lg-6">
                    <div className="text-center my-5">
                        <h1 className="display-5 fw-bolder text-white mb-2">Oficina de Catastro de Valledupar</h1>
                        <p className="lead text-white-50 mb-4">Para conocer el estado de cuenta de su predio ingrese a la plataforma o regístrese si aun no tiene cuenta!</p>
                        <div className="d-grid gap-3 d-sm-flex justify-content-sm-center">
                            <Link className="btn btn-primary btn-lg px-4 me-sm-3" to="/login">
                                Ingresar
                            </Link>
                            <Link className="btn btn-outline-light btn-lg px-4" to="/registro">
                                Registrar
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cabecera;