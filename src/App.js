import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Search from "./components/Search";
import ReviewList from "./components/ReviewList.js";
import NewReview from "./components/NewReview";


function App() {
  
  const [reviews, setReviews] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("http://localhost:9292/reviews")
      .then((r) => r.json())
      .then((reviews) => setReviews(reviews));
  }, []);

  function handleAddReview(newReview) {
    setReviews([...reviews, newReview]);
  }

  function handleDeleteReview(id) {
    const updatedReviews = reviews.filter((review) => review.id !== id);
    setReviews(updatedReviews);
  }

  function handleUpdateReview(updatedReviewObj) {
    const updatedReviews = reviews.map((review) => {
      if (review.id === updatedReviewObj.id) {
        return updatedReviewObj;
      } else {
        return review;
      }
    });
    setReviews(updatedReviews);
  }

  const displayedReviews = reviews.filter((review) =>
    review.body.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main >
      
      <Header />
      <Search search={search} onSearchChange={setSearch} />
      <NewReview onAddReview={handleAddReview} />
      <ReviewList
        reviews={displayedReviews}
      
        onReviewDelete={handleDeleteReview}
        onUpdateReview={handleUpdateReview}
      />
    </main>
  );
}

export default App;