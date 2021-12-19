import React from "react";
import {
    Label,
    Input,
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    FormGroup,
    ModalFooter,
} from "reactstrap";

const data = [
    { _id: "61ba73aa192149a38cda14d5", correo: "usuarioexterno1@catastro.val", password: "12345", nombre: "Usuario Externo Uno", documento: "87654321", rol: "ue" },
    { _id: "61ba7483192149a38cda14d6", correo: "usuarioexterno2@catastro.val", password: "12345", nombre: "Usuario Externo Dos", documento: "87456321", rol: "ue" },
    { _id: "61ba74a3192149a38cda14d7", correo: "usuarioexterno3@catastro.val", password: "12345", nombre: "Usuario Externo Tres", documento: "87546321", rol: "ue" },
    { _id: "61ba74d8192149a38cda14d8", correo: "usuarioexterno4@catastro.val", password: "12345", nombre: "Usuario Externo Cuatro", documento: "87564321", rol: "ue" },
    { _id: "61ba7577192149a38cda14da", correo: "usuariointerno1@catastro.val", password: "12345", nombre: "Usuario Interno Uno", documento: "87654123", rol: "ui" },
    { _id: "61ba759a192149a38cda14db", correo: "usuariointerno2@catastro.val", password: "12345", nombre: "Usuario Interno Dos", documento: "87456132", rol: "ui" },
];

class Usuarios extends React.Component {
    state = {
        data: data,
        modalActualizar: false,
        modalInsertar: false,
        form: {
            _id: "",
            correo: "",
            password: "",
            nombre: "",
            documento: "",
            rol: "",
        },
    };

    mostrarModalActualizar = (dato) => {
        this.setState({
            form: dato,
            modalActualizar: true,
        });
    };

    cerrarModalActualizar = () => {
        this.setState({ modalActualizar: false });
    };

    mostrarModalInsertar = () => {
        this.setState({
            modalInsertar: true,
        });
    };

    cerrarModalInsertar = () => {
        this.setState({ modalInsertar: false });
    };

    editar = (dato) => {
        var contador = 0;
        var arreglo = this.state.data;
        arreglo.map((registro) => {
            if (dato._id === registro._id) {
                arreglo[contador].correo = dato.correo;
                arreglo[contador].password = dato.password;
                arreglo[contador].nombre = dato.nombre;
                arreglo[contador].documento = dato.documento;
                arreglo[contador].rol = dato.rol;
            }
            contador++;
        });
        this.setState({ data: arreglo, modalActualizar: false });
    };

    eliminar = (dato) => {
        var opcion = window.confirm("¿Está seguro que desea eliminar a " + dato.nombre + "?");
        if (opcion === true) {
            var contador = 0;
            var arreglo = this.state.data;
            arreglo.map((registro) => {
                if (dato._id === registro._id) {
                    arreglo.splice(contador, 1);
                }
                contador++;
            });
            this.setState({ data: arreglo, modalActualizar: false });
        }
    };

    insertar = () => {
        var valorNuevo = { ...this.state.form };
        valorNuevo.id = this.state.data.length + 1;
        var lista = this.state.data;
        lista.push(valorNuevo);
        this.setState({ modalInsertar: false, data: lista });
    }

    handleChange = (e) => {
        this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value,
            },
        });
    };
    render() {
        return (
            <div>
                <div className="container w-75 my-5">
                    <h1 className="fw-bold text-start text-primary py-2">
                        Usuarios
                    </h1>
                    <div className="d-flex justify-content-end">
                        <input type="text" className="form-control" float="left" id="Buscar" width="50" placeholder="Buscar..." />
                        <Button
                            color="light"
                            onClick={() => this.mostrarModalInsertar()}>
                            <img src="/img/add-ico.png" alt="" width="50" height="50"
                                className="d-inline-block align-text-middle" />
                        </Button>
                    </div>
                </div>
                <div className="container w-75 mb-5 border-1 rounded shadow">

                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th scope="col">Correo electrónico</th>
                                <th scope="col">Contraseña</th>
                                <th scope="col">Nombre</th>
                                <th scope="col">Documento</th>
                                <th scope="col">Rol</th>
                                <th scope="col"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.data.map((dato) => (
                                <tr key={dato._id}>
                                    <td>{dato.correo}</td>
                                    <td>{dato.password}</td>
                                    <td>{dato.nombre}</td>
                                    <td>{dato.documento}</td>
                                    <td>{dato.rol}</td>
                                    <td>
                                        <Button
                                            color="light"
                                            onClick={() => this.mostrarModalActualizar(dato)}
                                        >
                                            <img src="/img/edit-text-ico.png" alt="" width="30" height="30"
                                                className="d-inline-block align-text-middle" />
                                        </Button>{" "}
                                        <Button
                                            color="light"
                                            onClick={() => this.eliminar(dato)}>
                                            <img src="/img/deleted-ico.png" alt="" width="30" height="30"
                                                className="d-inline-block align-text-middle" />
                                        </Button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <Modal isOpen={this.state.modalActualizar}>

                    <ModalHeader>
                        <div>
                            <h3 className="fw-bold text-center text-primary py-2">Editar Usuario</h3>
                        </div>
                    </ModalHeader>

                    <ModalBody>

                        <FormGroup>
                            <Label for="id" className="form-label fw-bold">
                                Id
                            </Label>
                            <Input className="form-control" readOnly type="text" name="id" id="id" value={this.state.form._id} />
                        </FormGroup>

                        <FormGroup>
                            <Label for="correo" className="form-label fw-bold">
                                Correo
                            </Label>
                            <Input
                                className="form-control"
                                name="correo"
                                id="correo"
                                type="email"
                                onChange={this.handleChange}
                                value={this.state.form.correo}
                            />
                        </FormGroup>

                        <FormGroup>
                            <Label for="password" className="form-label fw-bold">
                                Contraseña
                            </Label>
                            <Input
                                className="form-control"
                                name="password"
                                id="password"
                                type="password"
                                onChange={this.handleChange}
                                value={this.state.form.password}
                            />
                        </FormGroup>

                        <FormGroup>
                            <Label for="nombre" className="form-label fw-bold">
                                Nombre
                            </Label>
                            <Input
                                className="form-control"
                                name="nombre"
                                id="nombre"
                                type="text"
                                onChange={this.handleChange}
                                value={this.state.form.nombre}
                            />
                        </FormGroup>

                        <FormGroup>
                            <Label for="documento" className="form-label fw-bold">
                                Documento
                            </Label>
                            <Input
                                className="form-control"
                                name="documento"
                                id="documento"
                                type="text"
                                onChange={this.handleChange}
                                value={this.state.form.documento}
                            />
                        </FormGroup>

                        <FormGroup>
                            <Label for="rol" className="form-label fw-bold">
                                Rol
                            </Label>
                            <Input className="form-control" type="select" name="rol" id="rol" onChange={this.handleChange} value={this.state.form.rol}>
                                <option>ui</option>
                                <option>ue</option>
                            </Input>
                        </FormGroup>

                    </ModalBody>

                    <ModalFooter>
                        <Button
                            color="primary"
                            onClick={() => this.editar(this.state.form)}
                        >
                            Actualizar
                        </Button>
                        <Button
                            color="danger"
                            onClick={() => this.cerrarModalActualizar()}
                        >
                            Cancelar
                        </Button>
                    </ModalFooter>
                </Modal>

                <Modal isOpen={this.state.modalInsertar}>
                    <ModalHeader>
                        <div>
                            <h3 className="fw-bold text-center text-primary py-2">Insertar Usuario</h3>
                        </div>
                    </ModalHeader>

                    <ModalBody>
                        <FormGroup>
                            <Label for="id" className="form-label fw-bold">
                                Id
                            </Label>
                            <Input
                                className="form-control"
                                readOnly
                                id="id"
                                name="id"
                                type="text"
                                value={this.state.data.length + 1}
                            />
                        </FormGroup>

                        <FormGroup>
                            <Label for="correo" className="form-label fw-bold">
                                Correo
                            </Label>
                            <Input
                                className="form-control"
                                name="correo"
                                id="correo"
                                type="email"
                                onChange={this.handleChange}
                            />
                        </FormGroup>

                        <FormGroup>
                            <Label for="password" className="form-label fw-bold">
                                Contraseña
                            </Label>
                            <Input
                                className="form-control"
                                name="password"
                                id="password"
                                type="password"
                                onChange={this.handleChange}
                            />
                        </FormGroup>

                        <FormGroup>
                            <Label for="nombre" className="form-label fw-bold">
                                Nombre
                            </Label>
                            <Input
                                className="form-control"
                                name="nombre"
                                id="nombre"
                                type="text"
                                onChange={this.handleChange}
                            />
                        </FormGroup>

                        <FormGroup>
                            <Label for="documento" className="form-label fw-bold">
                                Documento
                            </Label>
                            <Input
                                className="form-control"
                                name="documento"
                                id="documento"
                                type="text"
                                onChange={this.handleChange}
                            />
                        </FormGroup>

                        <FormGroup>
                            <Label for="rol" className="form-label fw-bold">
                                Rol
                            </Label>
                            <Input
                                className="form-control"
                                name="rol"
                                id="rol"
                                type="select"
                                onChange={this.handleChange}>
                                <option>ui</option>
                                <option>ue</option>
                            </Input>
                        </FormGroup>

                    </ModalBody>

                    <ModalFooter>
                        <Button
                            color="primary"
                            onClick={() => this.insertar()}
                        >
                            Insertar
                        </Button>
                        <Button
                            className="btn btn-danger"
                            onClick={() => this.cerrarModalInsertar()}
                        >
                            Cancelar
                        </Button>
                    </ModalFooter>
                </Modal>
            </div>
        )
    }
}

export default Usuarios;