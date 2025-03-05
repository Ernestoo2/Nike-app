import PopularProductsCard from "component/PopularProductsCard";
import { products } from "../constants";

const PopularProducts = () => {
  return (
    <section id="products"
    className="max-container max-sm:mt-12"
    >
      <div className="flex flex-col justify-start gap-5 ">
        <h2 className="text-4xl font-bold font-palanquin ">
          Our <span className="text-coral-red">Popular</span> Products
        </h2>
        <p className="mt-2 text-slate-gray lg:max-w-lg">
          Discover our most popular brands and styles for your favorite athletes.
        </p>
      </div>
      <div className="grid gap-5 grid-cols-2 mt-16 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 sm:gap-4 ">
        {products.map( (products) => (
          <PopularProductsCard key={products.name} {...products}/>
        ))}
      </div>
      
    </section>
  )
}

export default PopularProducts