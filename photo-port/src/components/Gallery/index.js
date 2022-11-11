import React from "react";
import { capitalizeFirstLetter } from '../../utils/helpers';
import photo from "../../assets/small/commercial/Screenshot 2022-07-21 201236.png";
import photo2 from "../../assets/small/commercial/Screenshot 2022-09-18 232422.png";
import photo3 from "../../assets/small/commercial/Screenshot 2022-11-10 180353.png";


function Gallery(props) {
  const currentCategory = {
    name: "commercial",
    description:
      "Photos of grocery stores, food trucks, and other commercial projects",
  };
  return (
    <section>
      <h1>{capitalizeFirstLetter}</h1>
      <p></p>
      <div className="flex-row">
          <img
            src={photo}
            alt="Commercial Example"
            className="img-thumbnail mx-1"
             href="https://maxbransontaylor.github.io/genre-buddy/"
          />
            <img
            src={photo2}
            alt="Commercial Example"
            className="img-thumbnail mx-1"
          />
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