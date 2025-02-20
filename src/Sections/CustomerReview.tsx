import React from "react";
import ReviewCard from "component/ReviewCard";
import { reviews } from "../constants/index";

const CustomerReview = () => {
  return (
    <section className="max-container">
      <h3 className="font-palanquin text-center text-4xl font-bold">
        What Our <span className="text-coral-red">Customers</span> Say?
      </h3>
      <p className="info-text m-auto mt-4 max-w-lg text-center">
        Hear genine stories from our satisfied customers about their exceptional experience with us 
     </p>
     <div className="mt-24 flex gap-14 flex-1 max-lg:flex-col items-center justify-evenly ">
       {reviews.map((review) => (
        <ReviewCard key={review.customerName} 
        imgURL={review.imgURL}
        rating={review.rating}
        customerName={review.customerName}
        feedback={review.feedback}
        />
       ))} 
     </div>
    </section>
  )
}

export default CustomerReview