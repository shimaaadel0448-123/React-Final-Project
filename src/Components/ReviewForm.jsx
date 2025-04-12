import React, { useState } from 'react';

const ReviewForm = ({ onAddReview }) => {
  const [reviewText, setReviewText] = useState('');
  const [rating, setRating] = useState(5);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (reviewText.trim() === '') return;

    const newReview = {
      text: reviewText,
      rating: rating,
      date: new Date().toLocaleString(),
    };

    onAddReview(newReview);
    setReviewText('');
    setRating(5);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-2">
      <textarea
        placeholder="Type Your Opinion"
        value={reviewText}
        onChange={(e) => setReviewText(e.target.value)}
        className="w-full p-2 border rounded"
        rows="1"
      />
      <div>
        <label>Review: </label>
        <select value={rating} onChange={(e) => setRating(Number(e.target.value))}>
          {[5, 4, 3, 2, 1].map((r) => (
            <option key={r} value={r}>{r} Stars</option>
          ))}
        </select>
      </div>
      <button type="submit" style={{backgroundColor:'#7BC7A6'}}className=" text-white px-4 py-2 rounded">Send</button>
    </form>
  );
};

export default ReviewForm;