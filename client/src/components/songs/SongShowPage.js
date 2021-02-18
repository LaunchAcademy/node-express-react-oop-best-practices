import React, { useState, useEffect } from "react";
import { Redirect, Route, useParams, withRouter } from "react-router-dom";

import ReviewTile from "./ReviewTile"
import ReviewForm from "./ReviewForm"

const SongShowPage = (props) => {

  const { id } = useParams()


  const [song, setSong] = useState()
  // const [errors, setSong] = useState()
  const [reviews, setReviews] = useState()
  // const [redirect, setSong] = useState()
  
  // const id = props.match.params.id 

  const getSong = async () => {
  
    try {
      const response = await fetch(`/api/v1/song/${id}`)
      //// error and success handling
      setSong()
    }
  }

  useEffect(() => {
    getSong()
  }, [])

  let reviewForm 
  if (props.user) {
    reviewForm = <ReviewForm user={props.user} />
  }

  const reviewTiles = reviews.map((review) =>{
    <ReviewTile
      key={review.id}
      review={review}
      user={props.user}
    />
  }) 


  return (
    <div>
      <h1>Song Show Page</h1> 
      <p>song show info </p>

      {reviewForm}
      {reviewTiles}
    </div>
  );
};

export default SongShowPage;
