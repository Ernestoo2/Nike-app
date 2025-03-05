import { star } from 'assets/icons'
import React from 'react'

const PopularProductsCard = ({imgURL, name, price}) => {
  return (
    <div className='flex flex-col flex-1 w-full max-sm:w-full'>
      <img 
      className='w-[280px] h-[280px]'
      src={imgURL} alt={name}/>
      <div>
        <img 
        width={24}
        height={24}
        src={star} alt="rating" />
        <p className='text-xl leading-normal font-montserrat text-slate-gray'>4.5</p>
      </div>
      <h3 className='mt-2 text-2xl font-semibold leading-normal font-palanquin'>{name}</h3>
      <p className='mt-2 text-2xl font-semibold leading-normal font-montserrat text-coral-red '>{price}</p>
    </div>
  )
}

export default PopularProductsCard