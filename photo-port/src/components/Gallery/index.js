import React from "react";
import { capitalizeFirstLetter } from '../../utils/helpers';
import photo from "../../assets/small/commercial/Screenshot 2022-07-21 201236.png";
import photo2 from "../../assets/small/commercial/Screenshot 2022-09-18 232422.png";
import photo3 from "../../assets/small/commercial/Screenshot 2022-11-10 180353.png";


function Gallery(props) {
  const currentCategory = {
    name: "Gallery",
     
  };
  return (
    <section>
      <h1>{capitalizeFirstLetter}</h1>
      <p></p>
      <div className="flex-row">
      <a href="https://maxbransontaylor.github.io/genre-buddy/">GenreBuddy</a>
          <img
            src={photo}
            alt="Commercial Example"
            className="img-thumbnail mx-1"
          />
        <a href="https://lonely-gamer-hours.herokuapp.com/home">Vinder</a>
            <img
            src={photo2}
            alt="Commercial Example"
            className="img-thumbnail mx-1"
          />
          <a href="https://green-up-heroku.herokuapp.com/">Green-Up</a>
            <img
            src={photo3}
            alt="Commercial Example"
            className="img-thumbnail mx-1"
          />
      </div>
    </section>
  );
}
export default Gallery;