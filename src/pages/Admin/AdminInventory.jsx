/* eslint-disable react-hooks/set-state-in-effect */
import { useState, useEffect } from 'react';
import { X, AlertTriangle } from 'lucide-react';

export default function AdminInventario() {

    const API_URL = 'http://localhost:8000/commodity';

    //mostar los productos en el inventario
    const [commodity, setcommodity] = useState([]);

    //para saber cuando la ventana tipo modal esta abierta o cerrada
    const [showCreateModal, setShowCreateModal] = useState(false);

    // la ventana de crear y editar estan cnectadas, con estas variables se sabe cuando se esta creando o cuando se esta editando
    const [isEditing, setIsEditing] = useState(false);

    // --- ESTADOS PARA ELIMINAR ---
    const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false);
    const [productToDelete, setProductToDelete] = useState(null);

    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [stock, setStock] = useState("");
    const [kilos, setKilos] = useState("");
    const [imagen, setImagen] = useState("");


    // Función para limpiar campos
    const resetForm = () => {

        setId("");
        setName("");
        setStock("");
        setKilos("");
        setImagen("");
        setIsEditing(false);
    };

    // Función para tener los datos del producto a editar
    const handleEditCommodity = (product) => {
        setId(product.id);
        setName(product.name);
        setStock(product.stock);
        setKilos(product.kilos);
        setImagen(product.imagen);

        setIsEditing(true); // Cambiamos a modo edición
        setShowCreateModal(true); // Abrimos el la ventana tipo modal
    };

    const fetchCommodity = async () => {
        try {
            const response = await fetch(API_URL);
            const data = await response.json();
            setcommodity(data);
        } catch (error) {
            console.error("Error cargando productos:", error);
        }
    };

    useEffect(() => {
        fetchCommodity();
    }, []);

    // POST: Crear
    const handleCreateProduct = (e) => {

        e.preventDefault();

        const productData = {

            id: Number(id),
            name,
            stock: Number(stock),
            kilos: Number(kilos),
            imagen

        };

        console.log(productData);

        fetch(API_URL, {

            method: 'POST',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(productData)
        })
            .then((response) => {

                if (response.ok) {
                    alert("Producto agregado correctamente");
                    setShowCreateModal(false); // Cierra el modal tras éxito
                    resetForm(); // Limpia los inputs
                    fetchCommodity(); // Refresca la tabla
                }
            })
            .catch((error) => console.log(error)
            )

    }
    // PUT: Editar
    const handleUpdateProduct = (e) => {

        e.preventDefault();

        const productData = {
            id: Number(id),
            name,
            stock: Number(stock),
            kilos: Number(kilos),
            imagen
        };

        // Usamos el ID en la URL para indicarle a la API cuál editar
        fetch(`${API_URL}/${id}`, {
            method: 'PUT',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(productData)
        })
            .then((response) => {
                if (response.ok) {
                    alert("Producto actualizado correctamente");
                    setShowCreateModal(false);
                    resetForm();
                    fetchCommodity(); // Refresca la tabla
                }
            })
            .catch((error) => console.error("Error al actualizar:", error));
    };

    //DELETE: eliminiar
    const handleDelete = () => {
        if (!productToDelete) return;

        fetch(`${API_URL}/${productToDelete.id}`, {
            method: 'DELETE',
        })
        .then((response) => {
            if (response.ok) {
                setIsOpenDeleteModal(false);
                setProductToDelete(null);
                fetchCommodity(); // Refresca la tabla
            }
        })
        .catch((error) => console.log("Error al eliminar:", error));
    }




    return (
        <div className='pl-2'>
            <h1 className="text-2xl font-bold">Módulo: Inventario</h1>
            <p> Aquí puedes gestionar el inventario.</p>
            <button
                onClick={() => { resetForm(); setShowCreateModal(true); }}
                className="bg-green-500 mt-15 px-5 py-2 rounded-2xl cursor-pointer text-white">Agregar Nueva Mercancia
            </button>

            <div >
                <table className='w-full border-separate border-spacing-y-3 overflow-x-auto'>
                    <thead>
                        <tr className='bg-white shadow-sm'>
                            <th className='p-5 text-center font-bold rounded-l-xl border-y border-l border-gray-100'>ID</th>
                            <th className='p-5 text-center font-bold border-y border-gray-100'>Producto</th>
                            <th className='p-5 text-center font-bold border-y border-gray-100'>Stock</th>
                            <th className='p-5 text-center font-bold border-y border-gray-100'>kilos</th>
                            <th className='p-5 text-center font-bold rounded-r-xl border-y border-r border-gray-100'>Acción</th>
                        </tr>
                    </thead>

                    <tbody>
                        {commodity.map((com) => (
                            <tr key={com.id} className='bg-white shadow-lg text-center rounded-xl'>
                                {/*ID */}
                                <td className="p-5 border-y border-gray-100">{com.id}</td>
                                {/* PRODUCTO */}
                                <td className='p-5 rounded-l-xl border-y border-l border-gray-100'>
                                    <span className='font-medium '>{com.name}</span>
                                </td>

                                {/* CANTIDAD */}
                                <td className='p-5 border-y border-gray-100'>
                                    <span className='min-w-5'> {com.stock} <strong className='text-[12px]'>U</strong> </span>
                                </td>
                                {/* KILOS */}
                                <td className='p-5 border-y border-gray-100'>
                                    <span className='min-w-5'> {com.kilos} <strong className='text-[12px]'>kg</strong> </span>
                                </td>

                                {/* ACCIÓN */}
                                <td className=" p-5 flex gap-5 items-center justify-center text-white">
                                    <button onClick={() => handleEditCommodity(com)} className="bg-blue-500 px-5 py-2 rounded-2xl cursor-pointer">Editar</button>
                                    <button onClick={() => { setProductToDelete(com); setIsOpenDeleteModal(true); }} className="bg-red-500 px-5 py-2 rounded-2xl cursor-pointer">Eliminar</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/*CREAR UN NUEVO PRODUCTO AL INVENTARIO */}
            {showCreateModal && (
                <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex justify-center items-center z-50 p-4 transition-all duration-300">
                    <div className='bg-white border w-full max-w-md border-slate-300 rounded-2xl p-8 relative shadow-2xl max-h-[90vh] overflow-y-auto'>
                        <div
                            onClick={() => { setShowCreateModal(false); resetForm(); }}
                            className='absolute right-3 top-5 cursor-pointer '>
                            <X className='hover:text-red-600 ' />
                        </div>
                        <h2 className='text-center font-bold text-2xl mt-5'>
                            {isEditing ? "Editar Mercancía" : "Agregar Nueva Mercancía"}
                        </h2>


                        <form
                            onSubmit={isEditing ? handleUpdateProduct : handleCreateProduct}
                            className='flex flex-col gap-8 mt-10'>

                            <div className='flex flex-col '>
                                <label className='block text-sm font-medium mb-1' htmlFor="ID">ID</label>
                                <input
                                    className='w-full border bg-slate-100 border-slate-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-500'
                                    type="number"
                                    id='ID'
                                    name='ID'
                                    value={id}
                                    placeholder='1'
                                    required
                                    disabled={isEditing}
                                    onChange={e => setId(e.target.value)}
                                />
                            </div>

                            <div className='flex flex-col '>
                                <label className='block text-sm font-medium mb-1' htmlFor="Name">Nombre</label>
                                <input
                                    className='w-full border bg-slate-100 border-slate-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-500'
                                    type="text"
                                    id='Name'
                                    name='Name'
                                    value={name}
                                    placeholder='Nombre del producto'
                                    required
                                    onChange={e => setName(e.target.value)}
                                />
                            </div>

                            <div className='flex flex-col '>
                                <label className='block text-sm font-medium mb-1' htmlFor="Stock">Stock</label>
                                <input
                                    className='w-full border bg-slate-100 border-slate-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-500'
                                    type="number"
                                    id='Stock'
                                    placeholder='Cantidad disponible'
                                    name='Stock'
                                    value={stock}
                                    onChange={e => setStock(e.target.value)}
                                    required
                                />
                            </div>

                            <div className='flex flex-col '>
                                <label className='block text-sm font-medium mb-1' htmlFor="Kilos">Kilos</label>
                                <input
                                    className='w-full border bg-slate-100 border-slate-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-500'
                                    type="number"
                                    id='Kilos'
                                    placeholder='Cantidad disponible'
                                    name='Kilos'
                                    value={kilos}
                                    onChange={e => setKilos(e.target.value)}
                                    required
                                />

                            </div>
                            <div className='flex flex-col '>
                                <label className='block text-sm font-medium mb-1' htmlFor="Photo">Url de la imagen</label>
                                <input
                                    className='w-full border bg-slate-100 border-slate-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-500'
                                    type="text"
                                    id='Photo'
                                    name='Photo'
                                    value={imagen}
                                    placeholder='Ingresa la direccion URL de la imagen'
                                    required
                                    onChange={e => setImagen(e.target.value)}
                                />
                            </div>

                            <div>
                                <button type='submit' className={`${isEditing ? 'bg-blue-600' : 'bg-green-500'} px-5 py-2 rounded-lg w-full text-white font-bold`}>
                                    {isEditing ? "Guardar Cambios" : "Crear Nuevo Producto"}
                                </button>
                            </div>
                        </form>
                    </div>

                </div>
            )}
            {/* MODAL DE ELIMINACIÓN */}
            {isOpenDeleteModal && (
                <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex justify-center items-center z-60 p-4">

                    <div className='bg-white w-full max-w-sm rounded-2xl p-8 shadow-2xl text-center relative'>
                        <div
                            onClick={() => { setIsOpenDeleteModal(false) }}
                            className='absolute right-3 top-5'>
                            <X className='hover:text-red-600 ' />
                        </div>
                        <div className='bg-red-100 w-16 h-16 rounded-full flex justify-center items-center mx-auto mb-4'>
                            <AlertTriangle className='text-red-600 w-8 h-8' />
                        </div>
                        <h2 className='text-xl font-bold'>¿Eliminar producto?</h2>
                        <p className='text-gray-500 mt-2'>Estás por borrar <strong>{productToDelete?.name}</strong>.</p>
                        <div className='flex gap-4 mt-8'>
                            <button onClick={() => setIsOpenDeleteModal(false)} className='flex-1 bg-gray-200 py-2 rounded-xl font-semibold'>Cancelar</button>
                            <button onClick={handleDelete} className='flex-1 bg-red-500 py-2 rounded-xl text-white font-semibold'>Eliminar</button>
                        </div>
                    </div>
                </div>
            )}
        </div>





    )
}
