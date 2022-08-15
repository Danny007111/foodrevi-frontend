import React from "react";
import Review from "./Review";

function ReviewList({ reviews, onReviewDelete, onUpdateReview }) {
  return (
    <div >
      <ul>
        {reviews.map((review) => (
          <Review
            key={review.id}
            review={review}
            onReviewDelete={onReviewDelete}
            onUpdateReview={onUpdateReview}
          />
        ))}
      </ul>
    </div>
  );
}

export default ReviewList;