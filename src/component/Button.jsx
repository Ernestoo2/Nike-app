const Button = ({label, iconUrl="", backgroundColor, textColor, borderColor, fullWidth}) => {
  return (
    <button type="button" 
    className={`flex items-center justify-center gap-2 py-4 text-lg leading-none 
     border  border-coral-red px-7 font-montserrat 
    bg-coral-red
    ${
      backgroundColor ? `${backgroundColor} ${textColor} ${borderColor}`
      : 'bg-coral-red text-white border-coral-red'
    } rounded-full ${fullWidth && "w-full"}
    `}>
         {label}
        {iconUrl && <img className="w-5 h-5 ml-2 rounded-full" src={iconUrl} alt="icon" />}
   </button>
  )
}

export default Button