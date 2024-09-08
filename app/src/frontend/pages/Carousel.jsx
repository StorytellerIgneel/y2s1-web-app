import { useEffect, useRef, useState } from "react";
import axios from "axios";
import "../css/Carousel.css";
import { Link } from "react-router-dom";

const RADIUS = 1200; // Adjust this value based on the size of your images
const FLIP_RANGE = 3;

const CarouselFlow = () => {
  const [imageData, setImageData] = useState([]); // Store the fetched images
  const el = useRef(null);
  let angleUnit, currentIndex, currentAngle;

  // Helper function to set the transformation of carousel items
  function setTransform(el, xpos, zpos, angle, flipAngle) {
    el.style.transform = `translateX(${xpos}px) translateZ(${zpos}px) rotateY(${angle}deg) rotateX(${flipAngle}deg)`;
  }

  // Fetch games from the backend
  useEffect(() => {
    axios
      .get("http://localhost/y2s1-web-app/app/src/backend/php/carousel_get_game.php")
      .then((response) => {
        setImageData(response.data);
        if (response.data.length > 0) {
          angleUnit = 360 / response.data.length; // Angle between each item
          currentIndex = currentAngle = 0;
          target(0, true); // Initialize carousel with the first item in the middle
        }
      })
      .catch((error) => console.error("Error fetching images:", error));
  }, []);

  // Function to target the center item
  function target(index, initial = false) {
    let deltaAngle = -(index - currentIndex) * angleUnit;
    if (deltaAngle < -180) deltaAngle += 360;
    else if (deltaAngle > 180) deltaAngle -= 360;

    currentAngle += deltaAngle;
    currentIndex = index;

    const cf = el.current;
    cf.style.transform = `translateZ(-1250px) rotateY(${currentAngle}deg)`;

    const items = cf.children;

    // Adjust item positions and apply transformation
    for (let i = 0; i < items.length; i++) {
      const item = items[i];
      const itemAngle = angleUnit * i;
      const itemAngleRad = (itemAngle * Math.PI) / 180;
      const xpos = Math.sin(itemAngleRad) * RADIUS;
      const zpos = Math.cos(itemAngleRad) * RADIUS;

      let deltaIndex = Math.abs(i - index);
      if (deltaIndex > items.length / 2) {
        deltaIndex = items.length - deltaIndex;
      }

      let fliptAngle = 90;
      if (deltaIndex <= FLIP_RANGE) {
        fliptAngle = deltaIndex * (90 / FLIP_RANGE);
      } else {
        fliptAngle = 90;
      }
      setTransform(item, xpos, zpos, itemAngle, fliptAngle);
    }
  }

  // Function to handle click on items
  const handleItemClick = (index) => {
    if (index === currentIndex) {
      // Redirect only if the clicked item is already at the center
      window.location.href = `/store/${imageData[index].game_id}`;
    } else {
      // Rotate the carousel to bring the clicked item to the center
      target(index);
    }
  };

  return (
    <div className="carousel-container">
      <div className="carouselflow" ref={el}>
        {imageData.map((game, index) => (
          <div
            key={game.game_id}
            onClick={() => handleItemClick(index)}
            style={{ backgroundImage: `url(${game.img_src})` }}
            className="carouselflow-item"
          ></div>
        ))}
      </div>
    </div>
  );
};

export default CarouselFlow;
