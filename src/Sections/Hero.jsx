import Button from '../component/Button'
import React, { useState } from 'react'

import arrowRight from '../assets/icons/arrow-right.svg'
import bigShoe1 from '../assets/images/big-shoe1.png'

import { shoes, statistics } from '../constants/index.js'
import ShoeCard from '../component/ShoeCard'

const Hero = () => {
  const [bigShoeImg, setbigShoeImg] = useState(bigShoe1)

  return (
    <section
      id='home'
      className='flex flex-col lg:flex-row  justify-center w-full min-h-screen gap-5  p-2 border-2 border-red-500 max-container'
    >
      
        <div className='relative flex-col items-start justify-center w-full xl:2/5  pt-28 '>
          <p className='text-xl font-montserrat text-coral-red '>
            Our Summer Collection
          </p>
          <h1 className='mt-10  h-auto  font-palanquin text-8xl max-sm:text-[50px]  max-sm:leading-[82px] font-bold'>
            <span className=' lg:bg-white md:text-nowrap md:whitespace-nowrap absolute z-10 '>
              The New Arrival
            </span>
            <br />
            <span className='text-coral-red mt-3 sm:pt-20 md:pt-5 inline-block'>Nike</span>Shoes
          </h1>
          <p className='font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm  '>
            Discover stylish Nike arrivals, quality confort, and innovation for
            your active life.
          </p>
          <Button label='Shop Now' iconUrl={arrowRight} />

          <div className='flex justify-start items-start flex-wrap w-full mt-20 gap-16 '>
            {statistics.map((stat, index) => (
              <div key={stat.label}>
                <p className='text-4xl font-palanquin font-bold'>
                  {stat.value}
                </p>
                <p className=' leading-7 font-montserrat text-slate-gray'>
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
                
      </div>
      <div className='relative w-full   flex items-center xl:min-h-screen max-xl:py-40 bg-p bg-primary '>
            <img
              src={bigShoeImg}
              alt='shoe collection'
              width={610}
              height={500}
            />

            <div className='flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] lg:left-[3%] max-sm:px-6 '>
              {shoes.map((shoe, index) => (
                <div key={index}>
                  <ShoeCard
                    imgURL={shoe}
                    changeBigShoeImage={shoe => {
                      setbigShoeImg(shoe)
                    }}
                    bigShoeImg={bigShoeImg}
                  />
                </div>
              ))}
            </div>
          </div>
    </section>
  )
}

export default Hero
