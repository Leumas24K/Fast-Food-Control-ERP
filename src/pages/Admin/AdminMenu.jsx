/* eslint-disable react-hooks/set-state-in-effect */
import { useState, useEffect } from 'react';
import { X, AlertTriangle } from 'lucide-react';


export default function AdminMenu() {

    const API_URL = 'http://localhost:8000/products';

    const [product, setProduct] = useState([]);
    // Para saber cuando la ventana tipo modal esta abierta o cerrada
    const [showCreateModal, setShowCreateModal] = useState(false);

    // La ventana de crear y editar estan conectadas, con estas variables se sabe cuando se esta creando o cuando se esta editando
    const [isEditing, setIsEditing] = useState(false);

    // --- ESTADOS PARA ELIMINAR ---
    const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false);
    const [productToDelete, setProductToDelete] = useState(null);

    // ---ESTADOS DEL FORMULARIO ---
    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [category, setCategory] = useState("");
    const [stock, setStock] = useState("");
    const [imagen, setImagen] = useState("");

    // Función para limpiar campos
    const resetForm = () => {

        setId("");
        setName("");
        setDescription("");
        setPrice("");
        setCategory("");
        setStock("");
        setImagen("");
        setIsEditing(false);
    };

    //boton para editar los productos con el id seleccionado
    const handleEditProduct = (product) => {
        setId(product.id);
        setName(product.name);
        setDescription(product.description);
        setPrice(product.price);
        setCategory(product.category);
        setStock(product.stock);
        setImagen(product.imagen);

        setIsEditing(true); // Cambiamos a modo edición
        setShowCreateModal(true); // Abrimos el la ventana tipo modal
    };

    //GET: mostrar
    const fetchProducts = async () => {
        try {
            const response = await fetch(API_URL);
            const data = await response.json();
            setProduct(data);
        } catch (error) {
            console.error("Error cargando productos:", error);
        }
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    //boton para crear un nuevo producto
    const handleCreateProduct = (e) => {

        e.preventDefault();

        const productData = {

            id: Number(id),
            name,
            description,
            price: Number(price),
            category,
            stock: Number(stock),
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
                    fetchProducts();//actualizamos la tabla
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
            description,
            price: Number(price),
            category,
            stock: Number(stock),
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
                    fetchProducts(); // Refresca la tabla
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
                    fetchProducts(); // Refresca la tabla
                }
            })
            .catch((error) => console.log("Error al eliminar:", error));
    };



    return (
        <div className='transition-all duration-300'>
            <h1 className="text-2xl font-bold">Módulo: Menú (Administrador)</h1>
            <p> Aquí puedes gestionar los productos del menú.</p>

            <button
                onClick={() => { resetForm(); setShowCreateModal(true); }}
                className="bg-green-500 mt-15 px-5 py-2 rounded-2xl cursor-pointer text-white">Agregar Nuevo Producto
            </button>

            <div className='overflow-x-auto'>
                <table className='w-full border-separate border-spacing-y-3'>
                    <thead>
                        <tr className='bg-white shadow-sm'>
                            <th className='p-5 text-center font-bold rounded-l-xl border-y border-l border-gray-100'>ID</th>
                            <th className='p-5 text-center font-bold border-y border-gray-100'>Producto</th>
                            <th className='p-5 text-center font-bold border-y border-gray-100'>Stock</th>
                            <th className='p-5 text-center font-bold rounded-r-xl border-y border-r border-gray-100'>Acción</th>
                        </tr>
                    </thead>

                    <tbody>
                        {product.map((prod) => (
                            <tr key={prod.id} className='bg-white shadow-lg rounded-xl'>
                                <td className="p-5 text-center border-y border-gray-100">{prod.id}</td>
                                {/* PRODUCTO */}
                                <td className='p-5 rounded-l-xl border-y border-l text-center border-gray-100'>

                                    <span className='font-medium '>{prod.name}</span>

                                </td>

                                {/* CANTIDAD */}
                                <td className='p-5 border-y border-gray-100'>
                                    <div className='flex items-center justify-center gap-3 bg-white rounded-lg border border-gray-200 px-2 py-1 mx-auto w-max'>

                                        <span className='min-w-5 text-center'> {prod.stock} </span>

                                    </div>
                                </td>

                                {/* ACCIÓN */}
                                <td className=" p-5 flex gap-5 items-center justify-center text-center text-white">
                                    <button onClick={() => handleEditProduct(prod)} className="bg-blue-500 px-5 py-2 rounded-2xl cursor-pointer">Editar</button>
                                    <button onClick={() => { setProductToDelete(prod); setIsOpenDeleteModal(true); }} className="bg-red-500 px-5 py-2 rounded-2xl cursor-pointer">Eliminar</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

            </div>

            {/*CREAR UN NUEVO PRODCTO AL MENU */}
            {showCreateModal && (
                <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex justify-center items-center z-50 p-4">
                    <div className='bg-white border w-full max-w-md border-slate-300 rounded-2xl p-8 relative shadow-2xl max-h-[90vh] overflow-y-auto'>

                        <div
                            onClick={() => { setShowCreateModal(false); resetForm(); }}
                            className='absolute right-3 top-5'>
                            <X className='hover:text-red-600 ' />
                        </div>
                        <h2 className='text-center font-bold text-2xl mt-5'>Nuevo producto </h2>

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
                                <label className='block text-sm font-medium mb-1' htmlFor="Description">Descripcion</label>
                                <input
                                    className='w-full border bg-slate-100 border-slate-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-500'
                                    type="text"
                                    id='Description'
                                    name='Descrition'
                                    value={description}
                                    required
                                    placeholder='Descripcion detallada del producto'
                                    onChange={e => setDescription(e.target.value)}
                                />
                            </div>

                            <div className='flex flex-col '>
                                <label className='block text-sm font-medium mb-1' htmlFor="Price">Precio</label>
                                <input
                                    className='w-full border bg-slate-100 border-slate-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-500'
                                    type="number"
                                    id='Price'
                                    name='Price'

                                    step="0.01"
                                    value={price}
                                    placeholder='Precio del producto'
                                    required
                                    onChange={e => setPrice(e.target.value)}
                                />

                            </div>

                            <div className='flex flex-col '>
                                <label className='block text-sm font-medium mb-1' htmlFor="Category">Categoria</label>
                                <input
                                    className='w-full border bg-slate-100 border-slate-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-500'
                                    type="text"
                                    id='Category'
                                    name='Category'
                                    placeholder='Categoria del producto'
                                    value={category}
                                    required
                                    onChange={e => setCategory(e.target.value)}
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
                                    required
                                    onChange={e => setStock(e.target.value)}
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
