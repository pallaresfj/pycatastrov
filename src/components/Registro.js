import React from 'react'

export default function Registro() {
    return (
        <div className="container w-50 my-5 border-1 rounded shadow">
            <div className="row">
                <div className="col">
                    <h2 className="fw-bold text-center text-primary py-2">Registrar Usuario</h2>

                    <form action="#" method="post" name="formRegistro" onsubmit="validar_formulario();">
                        <div className="mb-4">
                            <label for="email" className="form-label fw-bold">
                                Correo electrónico
                            </label>
                            <input className="form-control" type="email" name="email" id="email" aria-describedby="emailHelp"/>
                        </div>
                        <div className="mb-4">
                            <label for="password" className="form-label fw-bold">
                                Contraseña
                            </label>
                            <input className="form-control" type="password" name="password" id="password"/>
                        </div>
                        <div className="mb-4">
                            <label for="nombre" className="form-label fw-bold">
                                Nombre
                            </label>
                            <input className="form-control" type="text" name="nombre" id="nombre"/>
                        </div>
                        <div className="mb-4">
                            <label for="documento" className="form-label fw-bold">
                                No. Documento
                            </label>
                            <input className="form-control" type="text" name="documento" id="documento"/>
                        </div>
                        <div className="mb-4 form-check">
                            <input type="checkbox" className="form-check-input" name="condicion" id="condicion"/>
                            <label for="condicion" class ="form-check-label">
                            Declaro haber leído y aceptar las condiciones generales del programa y la normativa sobre protección de datos.
                            </label>

                        </div>
                        <div className="d-grid mb-4">
                            <button type="submit" className="btn btn-primary fw-bold">
                                Registrar
                            </button>
                        </div>

                    </form>

                </div>
            </div>
        </div>
    )
}

