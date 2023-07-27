//crear arriendo 
export const crearArriendo = async (arriendoData) => {
    try {
        const response = await fetch('http://localhost:8000/crear/nuevo/arriendo', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(arriendoData),
        });

        return await response.json();
    } catch (error) {
        console.log('Error al crear el arriendo:', error);
    }
};
