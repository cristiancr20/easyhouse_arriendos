import React from "react";
import './ArriendosStyle.css'

import { crearArriendo } from "../core/apiCore";

const CrearArriendoForm = () => {
    const [values, setValues] = React.useState({
        titulo: "",
        precio: "",
        ubicacion: "",
        capacidad: "",
        imagen: "",
        success: false,
        error: '',
        loading: false,
    });

    const { titulo, precio, ubicacion, capacidad, imagen, success, error, loading } = values;

    const handleChange = event => {
        setValues({ ...values, [event.target.name]: event.target.value });
    }

    const clickSubmit = () => {
        setValues({ ...values, error: '', loading: true });
        const arriendo = { titulo,  precio, ubicacion, capacidad, imagen };
        crearArriendo(arriendo)
            .then(data => {
                if (data.error) {
                    setValues({ ...values, error: data.error, success: false, loading: false });
                } else {
                    setValues({
                        ...values,
                        titulo: "",
                        precio: "",
                        ubicacion: "",
                        capacidad: "",
                        imagen: "",
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
        <div className="register__arriendos_container">
            <div className="register__arriendos_form">
                <h1>Registro de Arriendo</h1>

                <form>
                    <div className="form-group">
                        <label className="text-muted">Título</label>
                        <input onChange={handleChange} type="text" name="titulo" className="form-control" placeholder="Título" value={titulo} />
                    </div>
                    <div className="form-group">
                        <label className="text-muted">Precio</label>
                        <input onChange={handleChange} type="text" name="precio" className="form-control"  placeholder="Precio" value={precio} />
                    </div>
                    <div className="form-group">
                        <label className="text-muted">Ubicación</label>
                        <input onChange={handleChange} type="text" name="ubicacion" className="form-control" placeholder="Ubicación" value={ubicacion} />
                    </div>
                    <div className="form-group">
                        <label className="text-muted">Capacidad</label>
                        <input onChange={handleChange} type="text" name="capacidad" className="form-control" placeholder="Capacidad" value={capacidad} />
                    </div>
                    <div className="form-group-img">
                        <label className="text-muted">Imagen</label>
                        <input onChange={handleChange} type="file" name="imagen" className="form-control-img" placeholder="Imagen" value={imagen} />
                    </div>
                    
                </form>
                <div className="boton">
                    <button type="submit" onClick={clickSubmit}>
                        {loading ? 'Cargando...' : 'Crear Arriendo'}
                    </button>
                </div>
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
            Nueva arriendo creado con éxito.
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


