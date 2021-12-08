import { Link } from 'react-router-dom'

export default function MisRecibos() {
    return (
        <div>
            <div className="container w-75 my-5">
                <h1 className="fw-bold text-start text-primary py-2">
                    Mis Recibos
                </h1>
                <div className="d-flex justify-content-end">
                    <Link className="nav-link fw-bold" to="/misrecibos">
                        <img src="/img/add-ico.png" alt="" width="50" height="50" className="d-inline-block align-text-middle" />
                    </Link>
                </div>
            </div>
            <div className="container w-75 mb-5 border-1 rounded shadow">

                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th scope="col">Vigencia</th>
                            <th scope="col">Referencia Catastral</th>
                            <th scope="col">Valor</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">2021</th>
                            <td>07-04-00-00-1013-0029-0-00-00-0000</td>
                            <td>$305.000</td>
                            <td>
                                <div className="">
                                    <Link to="/misrecibos">
                                        <img src="/img/view-ico.png" alt="" width="30" height="30" className="d-inline-block align-text-middle" />
                                    </Link>
                                    <Link to="/misrecibos">
                                        <img src="/img/cash-ico.png" alt="" width="30" height="30" className="d-inline-block align-text-middle" />
                                    </Link>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">2021</th>
                            <td>07-04-00-00-1015-0042-0-00-00-0000</td>
                            <td>$406.000</td>
                            <td>
                                <div className="">
                                    <Link to="/misrecibos">
                                        <img src="/img/view-ico.png" alt="" width="30" height="30" className="d-inline-block align-text-middle" />
                                    </Link>
                                    <Link to="/misrecibos">
                                        <img src="/img/cash-ico.png" alt="" width="30" height="30" className="d-inline-block align-text-middle" />
                                    </Link>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">2020</th>
                            <td>07-04-00-00-1013-0029-0-00-00-0000</td>
                            <td>$380.000</td>
                            <td>
                                <div className="">
                                    <Link to="/misrecibos">
                                        <img src="/img/view-ico.png" alt="" width="30" height="30" className="d-inline-block align-text-middle" />
                                    </Link>
                                    <Link to="/misrecibos">
                                        <img src="/img/cash-ico.png" alt="" width="30" height="30" className="d-inline-block align-text-middle" />
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
