import { Link } from 'react-router-dom'

export default function SolicitudConv() {
    return (
        <div>
            <div className="container w-75 my-5">
                <h1 className="fw-bold text-start text-primary py-2">
                    Solicitud Convenio
                </h1>
                <div className="d-flex justify-content-end">
                        <input type="text" className="form-control" float= "left" id="Buscar" width="50" placeholder="Buscar..." />    
                        
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
                            <th scope="col">#Convenio</th>
                            <th scope="col">Estado</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">2021</th>
                            <td>07-04-00-00-1013-0029-0-00-00-0000</td>
                            <td>2021-12-31</td>
                            <td>$305.000</td>
                            <td>3567</td>
                            <td>En trámite</td>
                            <td>
                                <div className="">
                                    <Link to="/solicitudconv">
                                        <img src="/img/view-ico.png" alt="" width="35" height="35"
                                            className="d-inline-block align-text-middle" />
                                    </Link>
                                    <Link to="/solicitudconv">
                                        <img src="/img/deleted-ico.png" alt="" width="30" height="30"
                                            className="d-inline-block align-text-middle" />
                                    </Link>
                                    <Link to="/solicitudconv">
                                        <img src="/img/add-ico.png" alt="" width="30" height="30"
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
