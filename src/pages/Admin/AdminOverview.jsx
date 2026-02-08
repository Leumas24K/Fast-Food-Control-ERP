

export default function AdminOverview() {
  return (
    <div>
      <h1 className="text-2xl font-bold">Actividad General</h1>
      <p>Resumen de la actividad: ventas, mesas activas, alertas e indicadores clave.</p>
      <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-4 bg-white rounded shadow">Ventas hoy: <strong>$0</strong></div>
        <div className="p-4 bg-white rounded shadow">Mesas activas: <strong>0</strong></div>
        <div className="p-4 bg-white rounded shadow">Pedidos en cola: <strong>0</strong></div>
      </div>
    </div>
  )
}
