import { useState, useEffect } from 'react';
import CardProduct from "./CardProduct";



export default function ContainerProduct() {

    const [productos, setProductos] = useState([]);

    useEffect(() => {

        // 1. Función para traer los datos (productos) con metodo GET del json-server

        const obtenerProductos = async () => {
            try {
                const response = await fetch('http://localhost:8000/productos');
                const data = await response.json();
                console.log('Productos importados exitosamente:',data);
                setProductos(data);

            } catch (error) {
                console.error("Error cargando productos:", error);

            }
        };

        obtenerProductos();
    }, []);


    return (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

            {productos.map(item => (
                <CardProduct key={item.id} {...item} />
            ))}

        </div>

    )
}
