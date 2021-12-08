import { Link } from 'react-router-dom'

export default function Cobros() {
    return (
        <div>
            <div className="container w-75 my-5">
                <h1 className="fw-bold text-start text-primary py-2">
                    Cobros Anuales - Descuentos
                </h1>
                <div className="d-flex justify-content-end">
                    <Link className="nav-link fw-bold" to="/cobros">
                        <img src="/img/actualizar.png" alt="" width="50" height="50" className="d-inline-block align-text-middle" />
                    </Link>
                </div>
            </div>
            <div className="container w-75 mb-5 border-1 rounded shadow">

                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th scope="col">Vigencia</th>
                            <th scope="col">Referencia Catastral</th>
                            <th scope="col">Fecha Max.Pago</th>
                            <th scope="col">Valor Pago</th>
                            <th scope="col">Fecha Max.Pago con descuento</th>
                            <th scope="col">Valor con descuento</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">2021</th>
                            <td>07-04-00-00-1013-0029-0-00-00-0000</td>
                            <td>2021-12-31</td>
                            <td>$305.000</td>
                            <td>2021-11-01</td>
                            <td>$244.000</td>                           
                        </tr>
                        <tr>
                            <th scope="row">2021</th>
                            <td>07-04-00-00-1015-0042-0-00-00-0000</td>
                            <td>2021-12-31</td>
                            <td>$406.000</td>
                            <td>2021-11-01</td>
                            <td>$324.800</td>                            
                        </tr>
                        <tr>
                            <th scope="row">2022</th>
                            <td>07-04-00-00-1013-0029-0-00-00-0000</td>
                            <td>2021-12-31</td>
                            <td></td>
                            <td></td>
                            <td></td>                            
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}
