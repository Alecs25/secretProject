import React, { useEffect, useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import "./Carousel.css";
 
export function Carousel() {
  const [data, setData] = useState(null);
  const [slide, setSlide] = useState(0);
  function NextSlide() {
    setSlide(slide === data.length- 1 ? 0 : slide + 1);
  }
  function PrevSlide() {
    setSlide(slide === 0 ? data.length - 1 : slide - 1);
  }
  useEffect(() => {
    async function RandomImg() {
      try {
        const response = await fetch(
          "https://random-data-api.com/api/users/random_user?size=4"
        );
        if (!response.ok) {
          throw new Error("impossibile fetchare");
        }
        const dataJson = await response.json();
        setData(dataJson);
      } catch (error) {
        console.log(error);
      }
    }
    RandomImg();
  }, []);
  return (
    <div className="carouselContainer">
      <BsArrowLeftCircleFill
        className=" arrow arrow-left"
        onClick={PrevSlide}
      />
      {data &&
        data.map((data, index) => (
            <img
              src={data.avatar}
              className={slide === index ? "slide" : "slide slide-hidden"}
              key={index}
            />
        ))}
      <BsArrowRightCircleFill
        className="arrow arrow-right"
        onClick={NextSlide}
      />
      <span className="indicators">
        {data &&
          data.map((_, index) => {
            return (
              <button
                key={index}
                onClick={()=> setSlide(index)}
                className={
                  slide === index ? "indicator" : "indicator indicator-inactive"
                }
              ></button>
            );
          })}
      </span>
    </div>
  );
}
