import { Link } from 'react-router-dom'

export default function Predios() {
    return (
        <div>
            <div className="container w-75 my-5">
                <h1 className="fw-bold text-start text-primary py-2">
                    Predios
                </h1>
                <div className="d-flex justify-content-end">
                    <Link className="nav-link fw-bold" to="/predios">
                        <img src="/img/add-ico.png" alt="" width="50" height="50"
                            className="d-inline-block align-text-middle" />
                    </Link>
                </div>
            </div>
            <div className="container w-75 mb-5 border-1 rounded shadow">

                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Referencia Catastral</th>
                            <th scope="col">Documento</th>
                            <th scope="col">Dirección</th>
                            <th scope="col">Ciudad</th>  
                            <th scope="col">Departamento</th>  
                            <th scope="col">Estrato</th>
                            <th scope="col">Uso</th>
                            <th scope="col">Area m2</th>
                            <th scope="col">Avalúo</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>07-04-00-00-1013-0029-0-00-00-0000</td>
                            <td>12345</td>
                            <td>K 10B 63 44 Mz 4 Lo 19</td>
                            <td>Valledupar</td>
                            <td>César</td>
                            <td>3</td>
                            <td>Residencial</td>
                            <td>100</td>
                            <td>100.000.000</td>
                            <td>
                                <div className="">
                                    <Link to="/predios">
                                        <img src="/img/view-ico.png" alt="" width="35" height="35"
                                            className="d-inline-block align-text-middle" />
                                    </Link>
                                    <Link to="/predios">
                                        <img src="/img/deleted-ico.png" alt="" width="30" height="30"
                                            className="d-inline-block align-text-middle" />
                                    </Link>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>07-04-00-00-1013-0029-0-00-00-0000</td>
                            <td>12345</td>
                            <td>K 10B 63 44 Mz 4 Lo 19</td>
                            <td>Valledupar</td>
                            <td>César</td>
                            <td>3</td>
                            <td>Residencial</td>
                            <td>100</td>
                            <td>100.000.000</td>
                            <td>
                                <div className="">
                                    <Link to="/predios">
                                        <img src="/img/view-ico.png" alt="" width="35" height="35"
                                            className="d-inline-block align-text-middle" />
                                    </Link>
                                    <Link to="/predios">
                                        <img src="/img/deleted-ico.png" alt="" width="30" height="30"
                                            className="d-inline-block align-text-middle" />
                                    </Link>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>07-04-00-00-1013-0029-0-00-00-0000</td>
                            <td>12345</td>
                            <td>K 10B 63 44 Mz 4 Lo 19</td>
                            <td>Valledupar</td>
                            <td>César</td>
                            <td>3</td>
                            <td>Residencial</td>
                            <td>100</td>
                            <td>100.000.000</td>
                            <td>
                                <div className="">
                                    <Link to="/predios">
                                        <img src="/img/view-ico.png" alt="" width="35" height="35"
                                            className="d-inline-block align-text-middle" />
                                    </Link>
                                    <Link to="/predios">
                                        <img src="/img/deleted-ico.png" alt="" width="30" height="30"
                                            className="d-inline-block align-text-middle" />
                                    </Link>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">4</th>
                            <td>07-04-00-00-1013-0029-0-00-00-0000</td>
                            <td>12345</td>
                            <td>K 10B 63 44 Mz 4 Lo 19</td>
                            <td>Valledupar</td>
                            <td>César</td>
                            <td>3</td>
                            <td>Residencial</td>
                            <td>100</td>
                            <td>100.000.000</td>
                            <td>
                                <div className="">
                                    <Link to="/predios">
                                        <img src="/img/view-ico.png" alt="" width="35" height="35"
                                            className="d-inline-block align-text-middle" />
                                    </Link>
                                    <Link to="/predios">
                                        <img src="/img/deleted-ico.png" alt="" width="30" height="30"
                                            className="d-inline-block align-text-middle" />
                                    </Link>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}
