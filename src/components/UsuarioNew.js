import React from 'react'

export default function UsuarioNew() {
    return (
        <div className="container w-50 my-5 border-1 rounded shadow">
            <div className="row">
                <div className="col">
                    <h2 className="fw-bold text-center text-primary py-2">Nuevo Usuario</h2>

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
                                Nombres
                            </label>
                            <input className="form-control" type="text" name="nombre" id="nombre"/>
                        </div>
                        <div className="mb-4">
                            <label for="apellido" className="form-label fw-bold">
                                Apellidos
                            </label>
                            <input className="form-control" type="text" name="apellido" id="apellido"/>
                        </div>
                        <div className="mb-4">
                            <label for="tipodocumento" className="form-label fw-bold">
                                Tipo Documento
                            </label>
                            <input className="form-control" type="text" name="tipodocumento" id="tipodocumento"/>
                        </div>
                        <div className="mb-4">
                            <label for="documento" className="form-label fw-bold">
                                No. Documento
                            </label>
                            <input className="form-control" type="text" name="documento" id="documento"/>
                        </div>
                        <div className="mb-4">
                            <label for="direccion" className="form-label fw-bold">
                                Direccion
                            </label>
                            <input className="form-control" type="text" name="direccion" id="direccion"/>
                        </div>
                        <div className="mb-4">
                            <label for="telefono" className="form-label fw-bold">
                                Telefono
                            </label>
                            <input className="form-control" type="text" name="telefono" id="telefono"/>
                        </div>
                        <div className="mb-4">
                            <label for="rol" className="form-label fw-bold">
                                Rol
                            </label>
                            <input className="form-control" type="text" name="rol" id="rol"/>
                        </div>
                        <div className= "d-flex justify-content-end ">
                            <button type="button" className="btn btn-space btn-danger ">Cancelar</button>                        
                            <button type="submit" className="btn btn-space btn-primary " >Guardar</button>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    )
}

