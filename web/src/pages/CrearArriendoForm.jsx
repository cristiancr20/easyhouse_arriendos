import React from "react";

import { crearArriendo } from "../core/apiCore";

const CrearArriendoForm = () => {
    const [values, setValues] = React.useState({
        titulo: "",
        descripcion: "",
        precio: "",
        ubicacion: "",
        capacidad: "",
        imagen: "",
        fecha: "",
        estado: "",
        success: false,
        error: '',
        loading: false,
    });

    const { titulo, descripcion, precio, ubicacion, capacidad, imagen, fecha, estado, success, error, loading } = values;

    const handleChange = event => {
        setValues({ ...values, [event.target.name]: event.target.value });
    }

    const clickSubmit = () => {
        setValues({ ...values, error: '', loading: true });
        const arriendo = { titulo, descripcion, precio, ubicacion, capacidad, imagen, fecha, estado };
        crearArriendo(arriendo)
            .then(data => {
                if (data.error) {
                    setValues({ ...values, error: data.error, success: false, loading: false });
                } else {
                    setValues({
                        ...values,
                        titulo: "",
                        descripcion: "",
                        precio: "",
                        ubicacion: "",
                        capacidad: "",
                        imagen: "",
                        fecha: "",
                        estado: "",
                        success: true,
                        loading: false,
                    });
                }
            })
            .catch(error => {
                setValues({ ...values, error: 'Hubo un problema con la solicitud.', success: false, loading: false });
            });
    };

    const crearArriendoForm = () => (
        <div>

            <form>
                <div className="form-group">
                    <label className="text-muted">Título</label>
                    <input onChange={handleChange} type="text" name="titulo" className="form-control" value={titulo} />
                </div>
                <div className="form-group">
                    <label className="text-muted">Descripción</label>
                    <textarea onChange={handleChange} type="text" name="descripcion" className="form-control" value={descripcion} />
                </div>
                <div className="form-group">
                    <label className="text-muted">Precio</label>
                    <input onChange={handleChange} type="number" name="precio" className="form-control" value={precio} />
                </div>
                <div className="form-group">
                    <label className="text-muted">Ubicación</label>
                    <input onChange={handleChange} type="text" name="ubicacion" className="form-control" value={ubicacion} />
                </div>
                <div className="form-group">
                    <label className="text-muted">Capacidad</label>
                    <input onChange={handleChange} type="number" name="capacidad" className="form-control" value={capacidad} />
                </div>
                <div className="form-group">
                    <label className="text-muted">Imagen</label>
                    <input onChange={handleChange} type="file" name="imagen" className="form-control" value={imagen} />
                </div>
                <div className="form-group">
                    <label className="text-muted">Fecha</label>
                    <input onChange={handleChange} type="date" name="fecha" className="form-control" value={fecha} />
                </div>
                <div className="form-group">
                    <label className="text-muted">Estado</label>
                    <input onChange={handleChange} type="text" name="estado" className="form-control" value={estado} />
                </div>
            </form>
            <div className="boton">
                <button type="submit" onClick={clickSubmit}>
                    {loading ? 'Cargando...' : 'Crear Arriendo'}
                </button>
            </div>
        </div>

    );

    const showError = () => (
        <div className='alerta' style={{ display: error ? '' : 'none' }}>
            {error}
        </div>
    )

    const showSuccess = () => (
        <div className='alerta' style={{ display: success ? '' : 'none' }}>
            Nueva cuenta creada con éxito.
        </div>
    )

    return (
        <>
            {showSuccess()}
            {showError()}
            {crearArriendoForm()}
        </>
    );
};

export default CrearArriendoForm;


