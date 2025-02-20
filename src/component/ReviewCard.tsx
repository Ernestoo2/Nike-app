import { star } from "assets/icons";

const ReviewCard = ({imgURL, customerName, rating, feedback}) => {
  return (
    <div className="flex justify-center items-center flex-col">
      <img 
      src={imgURL}
      alt="CustomerReview Card"
      className="rounded-full object-cover w-[120px] h-[120px]"
      />
      <p className="mt-6 max-w-sm text-center info-text">
        {feedback}
      </p>
      <div>
        
        <img 
          width={24} 
          height={24} 
          src={star} 
          alt="Rating" 
          className="object-contain m-0"
        />
        <p className="text-sm font-montserrat text-slate-gray">({rating})</p>
      </div>
      <h3 className="mt-1 font-palanquin text-3xl font-bold text-center">{customerName}</h3>
    </div>
  )
}

export default ReviewCard
