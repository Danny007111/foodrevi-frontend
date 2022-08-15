import React, { useState } from "react";

function NewReview({ onAddReview }) {
  const [body, setBody] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    fetch("http://localhost:9292/reviews", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        body: body,
      }),
    })
      .then((r) => r.json())
      .then((newReview) => {
        onAddReview(newReview);
        setBody("");
      });
  }

  return (
    <form onSubmit={handleSubmit}>
      <h4>
        Create a new Review here!{body}
      </h4>
      <input
        type="text"
        name="body"
        value={body}
        onChange={(e) => setBody(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default NewReview;