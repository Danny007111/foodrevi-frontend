import React from "react";
import EditReview from "./EditReview";

function Review({ review, onReviewDelete, onUpdateReview }) {

  const { id } = review;


  function handleDeleteClick() {
    fetch(`http://localhost:9292/reviews/${id}`, {
      method: "DELETE",
    });

    onReviewDelete(id);
  }

  function handleUpdateReview(updatedReview) {
    onUpdateReview(updatedReview);
  }

  return (
      
        <div>
        <EditReview
          id={id}
          onUpdateReview={handleUpdateReview}
        />
          <button onClick={handleDeleteClick}>
            <span role="img" aria-label="delete">
              🗑
            </span>
          </button>
        </div>
        
  );
}

export default Review;