import { useEffect, useRef, useState } from "react";
import axios from "axios"; // Axios for API calls
import "../css/Carousel.css";

const RADIUS = 1200;
const FLIP_RANGE = 3;

const CarouselFlow = () => {
  const [imageData, setImageData] = useState([]); // To store the fetched images
  const el = useRef(null);
  const img = useRef(null);
  let angleUnit, currentIndex, currentAngle;

  // Helper function to set element style transform property
  function setTransform(el, xpos, zpos, angle, flipAngle) {
    el.style.transform = `translateX(${xpos}px) translateZ(${zpos}px) rotateY(${angle}deg) rotateX(${flipAngle}deg)`;
  }

  // Fetch random games from the database
  useEffect(() => {
    // Replace with your API URL
    axios
      .get(
        "http://localhost/y2s1-web-app/app/src/backend/php/carousel_get_game.php",
      )
      .then((response) => {
        setImageData(response.data); // Store the image data in state
        if (response.data.length > 0) {
          angleUnit = 360 / response.data.length;
          currentIndex = currentAngle = 0;
          target(0, true);
        }
      })
      .catch((error) => {
        console.error("Error fetching images:", error);
      });
  }, []);

  // Target an item and make it center
  function target(index, initial = false) {
    // Display full-size image if matched index
    if (!initial && index === currentIndex) pickImage(imageData[index].img_src);

    // Calculate the amount of angle to shift
    let deltaAngle = -(index - currentIndex) * angleUnit;
    if (deltaAngle < -180) deltaAngle += 360;
    else if (deltaAngle > 180) deltaAngle -= 360;

    currentAngle += deltaAngle;
    currentIndex = index;

    // Rotate the container and flip item angle
    const cf = el.current;
    cf.style.transform = `translateZ(-1250px) rotateY(${currentAngle}deg)`;

    // Flip items angle
    let fliptAngle = 90;
    const items = cf.children;

    // Iterate the items and apply transformation
    for (let i = 0; i < items.length; i++) {
      const item = items[i];
      const itemAngle = angleUnit * i;
      const itemAngleRad = (itemAngle * Math.PI) / 180;
      const xpos = Math.sin(itemAngleRad) * RADIUS;
      const zpos = Math.cos(itemAngleRad) * RADIUS;

      let deltaIndex = Math.abs(i - index);
      if (deltaIndex > cf.children.length / 2) {
        deltaIndex = cf.children.length - deltaIndex;
      }
      if (deltaIndex <= FLIP_RANGE) {
        fliptAngle = deltaIndex * (90 / FLIP_RANGE);
      } else fliptAngle = 90;
      setTransform(item, xpos, zpos, itemAngle, fliptAngle);
    }
  }

  // Display full-size image
  const pickImage = (imgUrl) => {
    img.current.style.backgroundImage = `url(${imgUrl})`;
    img.current.style.transform = "scale(1, 1)";
  };

  return (
    <div>
      <div className="carousel-container">
        <div className="carouselflow" ref={el}>
          {imageData.map((game, index) => (
            <div
              key={game.game_id}
              onClick={() => target(index)}
              style={{ backgroundImage: `url(${game.img_src})` }}
              className="carouselflow-item"
            ></div>
          ))}
        </div>
        <div
          onClick={() => {
            img.current.style.transform = "scale(0, 0)";
          }}
          className="image-display"
          ref={img}
        ></div>
      </div>
    </div>
  );
};

export default CarouselFlow;
