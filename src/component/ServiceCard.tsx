const ServiceCard = ({imgURL, label, subtext}) => {
  return (
    <div  className="flex-1 sm:w-[350px] sm:min-w-[350px] shadow-3xl px-10 py-16 rounded-[20px] w-full   ">
      <div className="flex justify-center rounded-full w-11 h-11 bg-coral-red">
        <img src={imgURL} alt={label} width={24} height={24} />        
      </div>
      
    <h3 className="mt-5 text-3xl font-bold leading-normal font-palaquin">{label}</h3>
    <p className="mt-3 text-lg leading-normal break-words font-montserrat text-slate-gray">{subtext}</p>
</div>
  )
}

export default ServiceCard