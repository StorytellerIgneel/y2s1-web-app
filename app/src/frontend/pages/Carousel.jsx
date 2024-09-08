import { useEffect, useRef, useState } from "react";
import axios from "axios"; // Axios for API calls
import "../css/Carousel.css";
import { Link, useNavigate } from "react-router-dom";

const RADIUS = 1200;
const FLIP_RANGE = 3;

const CarouselFlow = () => {
  const [imageData, setImageData] = useState([]); // To store the fetched images
  const el = useRef(null);
  const img = useRef(null);
  const videoModal = useRef(null); // To reference the video modal
  let angleUnit, currentIndex, currentAngle;
  const navigate = useNavigate(); // For redirecting to the product page

  // Helper function to set element style transform property
  function setTransform(el, xpos, zpos, angle, flipAngle) {
    el.style.transform = `translateX(${xpos}px) translateZ(${zpos}px) rotateY(${angle}deg) rotateX(${flipAngle}deg)`;
  }

  // Fetch random games from the database
  useEffect(() => {
    axios
      .get("http://localhost/y2s1-web-app/app/src/backend/php/carousel_get_game.php")
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

    let deltaAngle = -(index - currentIndex) * angleUnit;
    if (deltaAngle < -180) deltaAngle += 360;
    else if (deltaAngle > 180) deltaAngle -= 360;

    currentAngle += deltaAngle;
    currentIndex = index;

    const cf = el.current;
    cf.style.transform = `translateZ(-1250px) rotateY(${currentAngle}deg)`;

    let fliptAngle = 90;
    const items = cf.children;

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

  // Play video in modal
  const playVideo = () => {
    videoModal.current.style.transform = "scale(1, 1)";
  };

  // Close video modal
  const closeVideo = () => {
    videoModal.current.style.transform = "scale(0, 0)";
  };

  return (
    <div>
      <div className="carousel-container">
        <div className="carouselflow" ref={el}>
          {imageData.map((game, index) => (
            <div
              key={game.game_id}
              onClick={() => {
                if (index === currentIndex) {
                  // If the center image is clicked, play the video
                  playVideo();
                } else {
                  // Rotate carousel on side images click
                  target(index);
                }
              }}
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

      {/* Video modal */}
      <div className="video-modal" ref={videoModal}>
        <span className="close" onClick={closeVideo}>&times;</span>
        <iframe
          width="1000"
          height="600"
          src="https://video.akamai.steamstatic.com/store_trailers/256730989/movie480.webm?t=1538496199" //temporary video
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default CarouselFlow;
