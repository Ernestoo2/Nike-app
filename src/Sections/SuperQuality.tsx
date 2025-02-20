import Button from "../component/Button"
import arrowRight from '../assets/icons/arrow-right.svg'
import { shoe8 } from "../assets/images"
const SuperQuality = () => {
  return (
    <section id="about-Us"
    className="flex items-center justify-between w-full gap-10 max-container max-lg:flex-col"
    >    
    <div className="flex flex-col flex-1">
      <h2 className="text-4xl font-bold capitalize font-palanquin ">
        We provide you  <span className="text-coral-red">Super Quality Sneakers</span>
      </h2>
      <p className="mt-6 text-lg lg:max-w-lg info-text mb-14 sm:max-w-sm">
        Our sneakers are made with the finest materials and manufactured to be the
        best in class.
      </p>
      <p className=" info-text lg:max-w-lg"> Our dedication to detail and excellence ensures your satisfaction</p>
      <div>
        <Button label="View details" iconUrl={arrowRight}/>
      </div>
    </div>
    <div className="flex items-center justify-center flex-1">
      <img
        className="object-cover w-full h-auto"
        src={shoe8}
        alt="super-quality sneakers"
      />
    </div>
    </section>
  )
}

export default SuperQuality