const ReviewList = ({ reviews }) => {
   
  
    return (
      <ul className="space-y-4 mt-4">
        {reviews.map((review, index) => (
          <li key={index}>
            <p>
              <span className="text-green-600">
                {[...Array(5)].map((_, i) => { return <span key={i}>★</span>; })}
              </span><br></br>
              <small>{review.date}</small>
            </p>
            <p>{review.text}</p>
            <hr/> </li>
        ))}
      </ul>
    );
  };
  
  export default ReviewList;
  