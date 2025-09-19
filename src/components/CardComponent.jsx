const CardComponent = ({title, text, icon}) => {
  return (
    <div className="flex flex-col justify-center items-center text-center gap-3 shadow-lg rounded-xl bg-white p-7 xl:max-w-90">
      <div className="rounded-full bg-cyan-h text-dark text-center text-4xl p-3">
        {icon}
      </div>

      <h3 className="font-bold text-xl">{title}</h3>

      <span className="">{text}</span>
    </div>
  )
}

export default CardComponent