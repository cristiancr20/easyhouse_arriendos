//crear arriendo 
export const crearArriendo = async (arriendo) => {
    try {
        const response = await fetch('http://localhost:5050/crear/nuevo/arriendo', {
            method: "POST",
            headers: {
                Accept: 'application/json',
                "Content-Type": "application/json"
            },
            body: JSON.stringify(arriendo)
        });

        const data = await response.json();

        if (!response.ok) {
            // Si la respuesta no es exitosa, lanzar un error con el mensaje del servidor
            throw new Error(data.error || "Hubo un problema al crear el arriendo.");
        }

        return data; // Devolver los datos de la respuesta si todo fue exitoso
    } catch (error) {
        // Si ocurre un error de conexión o en el procesamiento, lanzar un nuevo error
        throw new Error("Hubo un problema con la solicitud: " + error.message);
    }
};

//listar arriendos

export const listarArriendos = async () => {
    try {
        const response = await fetch(
            'http://localhost:5050/obtener/arriendo',
            {
                method: 'GET'
            }
        );

        if (!response.ok) {
            // Si la respuesta no es exitosa, lanzar un error con el mensaje del servidor
            throw new Error('Hubo un problema al obtener los arriendos.');
        }

        const data = await response.json();

        if (data) {
            return data; // Devolver los datos si existen en la respuesta
        } else {
            throw new Error('Respuesta inválida del servidor.');
        }
    } catch (err) {
        console.log(err); // Mostrar el error en la consola
        throw err; // Propagar el error para que el componente que llama a esta función pueda manejarlo
    }
};

