import { Link } from 'react-router-dom'

export default function Usuarios() {
    return (
        <div>
            <div className="container w-75 my-5">
                <h1 className="fw-bold text-start text-primary py-2">
                    Usuarios
                </h1>
                <div className="d-flex justify-content-end">    
                    <input type="text" className="form-control" float= "left" id="Buscar" width="50" placeholder="Buscar..." />           
                    <Link className="nav-link fw-bold" to="/usuarios">
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
                            <th scope="col">Correo electrónico</th>
                            <th scope="col">Tipo Documento</th>
                            <th scope="col">Documento</th>
                            <th scope="col">Nombres</th>
                            <th scope="col">Apellidos</th>
                            <th scope="col">Dirección</th>
                            <th scope="col">Teléfono</th>
                            <th scope="col">Rol</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>fpallares@uninorte.edu.co</td>
                            <td>CC</td>
                            <td>12345</td>
                            <td>Francisco</td>
                            <td>Pallares</td>
                            <td>Av. 15 # 34-26</td>
                            <td>31011111111</td>
                            <td>Interno</td>
                            <td>
                                <div className="">
                                    <Link to="/usuarios">
                                        <img src="/img/view-ico.png" alt="" width="35" height="35"
                                            className="d-inline-block align-text-middle" />
                                    </Link>
                                    <Link to="/usuarios">
                                        <img src="/img/deleted-ico.png" alt="" width="30" height="30"
                                            className="d-inline-block align-text-middle" />
                                    </Link>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>lzbenitez@uninorte.edu.co</td>
                            <td>CC</td>
                            <td>678910</td>
                            <td>Zamira</td>
                            <td>Benitez R</td>
                            <td>Calle 100 # 10-20</td>
                            <td>3178888888</td>
                            <td>Interno</td>                            
                            <td>
                                <div className="">
                                    <Link to="/usuarios">
                                        <img src="/img/view-ico.png" alt="" width="35" height="35"
                                            className="d-inline-block align-text-middle" />
                                    </Link>
                                    <Link to="/usuarios">
                                        <img src="/img/deleted-ico.png" alt="" width="30" height="30"
                                            className="d-inline-block align-text-middle" />
                                    </Link>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>stapias@uninorte.edu.co</td>
                            <td>CC</td>
                            <td>12345</td>
                            <td>Sergio</td>
                            <td>Tapias</td>
                            <td>K 10B 63 44 Mz 4 Lo 19</td>
                            <td>31011111111</td> 
                            <td>Externo</td>
                            <td>
                                <div className="">
                                    <Link to="/usuarios">
                                        <img src="/img/view-ico.png" alt="" width="35" height="35"
                                            className="d-inline-block align-text-middle" />
                                    </Link>
                                    <Link to="/usuarios">
                                        <img src="/img/deleted-ico.png" alt="" width="30" height="30"
                                            className="d-inline-block align-text-middle" />
                                    </Link>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">4</th>
                            <td>nguzman@uninorte.edu.co</td>
                            <td>CC</td>
                            <td>12345</td>
                            <td>Nicolás</td>
                            <td>Guzman</td>
                            <td>K 10B 63 44 Mz 4 Lo 19</td>
                            <td>31011111111</td> 
                            <td>Externo</td>
                            <td>
                                <div className="">
                                    <Link to="/usuarios">
                                        <img src="/img/view-ico.png" alt="" width="35" height="35"
                                            className="d-inline-block align-text-middle" />
                                    </Link>
                                    <Link to="/usuarios">
                                        <img src="/img/deleted-ico.png" alt="" width="30" height="30"
                                            className="d-inline-block align-text-middle" />
                                    </Link>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">5</th>
                            <td>ftorres@uninorte.edu.co</td>
                            <td>CC</td>
                            <td>12345</td>
                            <td>Fernely</td>
                            <td>Torres</td>
                            <td>K 10B 63 44 Mz 4 Lo 19</td>
                            <td>31011111111</td> 
                            <td>Externo</td>
                            <td>
                                <div className="">
                                    <Link to="/usuarios">
                                        <img src="/img/view-ico.png" alt="" width="35" height="35"
                                            className="d-inline-block align-text-middle" />
                                    </Link>
                                    <Link to="/usuarios">
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
