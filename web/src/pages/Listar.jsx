import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Listar.css";

//icons
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaPlusSquare } from "react-icons/fa";
import { FaPeopleGroup } from "react-icons/fa6";
import { FaCalendarDays } from "react-icons/fa6";
import { FaDollarSign } from "react-icons/fa6";
import { FaHouseUser } from "react-icons/fa6";

const Listar = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios
            .get("http://localhost:8000/obtener/arriendos")
            .then((response) => {
                setData(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    return (
        <div className="listar__container">
            
            <div className="lista">
            <Link to="/registrar/arriendo" className="post_button">
                <p className="post">Nuevo Post </p><FaPlusSquare/> 
            </Link>
                <div className="card_container">
                    {data.map((item) => (
                        <div key={item._id} className="card">
                            <div className="card_imagen">
                                <img src={item.imagen} alt={item.imagen} />
                            </div>
                            <div className="card_descripcion">
                                <h1>{item.titulo}</h1>
                                <p>
                                    <FaDollarSign /> {item.precio} $
                                </p>
                                <p>
                                    {" "}
                                    <FaMapMarkerAlt /> {item.ubicacion}
                                </p>
                                <p>
                                    {" "}
                                    <FaPeopleGroup /> {item.capacidad}
                                </p>

                                <p>
                                    <FaCalendarDays />
                                    {item.fecha}
                                </p>
                                <p>
                                    <FaHouseUser /> {item.estado}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Listar;
