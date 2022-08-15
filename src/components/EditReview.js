import React, { useState } from "react";

function EditReview({ id, body, onUpdateReview }) {
  const [reviewBody, setReviewBody] = useState(body);

  function handleFormSubmit(e) {
    e.preventDefault();

    fetch(`http://localhost:9292/reviews/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        body: reviewBody,
      }),
    })
      .then((r) => r.json())
      .then((updatedReview) => onUpdateReview(updatedReview));
  }

  return (
    <form onSubmit={handleFormSubmit}>
      <input
        type="text"
        name="body"
        value={reviewBody}
        onChange={(e) => setReviewBody(e.target.value)}
      />
      <input type="submit" value="Save" />
    </form>
  );
}

export default EditReview;