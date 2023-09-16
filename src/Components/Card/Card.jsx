import { FiDollarSign } from 'react-icons/fi';
import { BsBookHalf } from 'react-icons/bs';

const Card = ({data,handleCardData}) => {
    const {cover_img,course_details,course_name,credit,price} =data;
    
    return (
        <div>
            <div className="card w-full h-full bg-base-100 shadow-xl">
  <figure className="px-4 pt-4">
    <img src={cover_img} alt="Shoes" className="rounded-xl w-full" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">Learn {course_name}</h2>
    <p>{course_details}</p>
    <div className=' flex justify-between items-center gap-7'>
        <div className=' flex items-center gap-3'>
            <span><FiDollarSign/></span>
            <span>Price : {price}</span>
        </div>
        <div className=' flex items-center gap-3'>
        <span><BsBookHalf/></span>
            <span>Credit : {credit} hr</span>

        </div>
    </div>
   
      <button onClick={()=>handleCardData(data)} className="btn btn-primary w-full">Buy Now</button>
  </div>
</div>
            
        </div>
    );
};

export default Card;