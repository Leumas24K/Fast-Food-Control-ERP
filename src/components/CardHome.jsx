const CardHome = ({icon, tittle, description}) => {
  return (
    <div className='flex flex-col items-center gap-5 px-10 py-10'>

        <figure>
            <img src={icon} alt="" />
        </figure>

        <h1 className='text-4xl font-extrabold text-slate-900'>{tittle}</h1>

        <p className='text-sm  text-slate-600'>{description}</p>

        <p></p>
    </div>
  )
}

export default CardHome
