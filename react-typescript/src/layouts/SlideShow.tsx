import React, { useState, useEffect } from "react";
import styles from "./SliderShow.module.scss";
import classNames from "classnames/bind";
import img1 from "../images/Rectangle 133.jpg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);

export type Props = {
  images: string[];
  interval?: number;
};

const Slideshow = ({ images, interval = 7000 }: Props) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);

    return () => clearInterval(timer);
  }, [images.length, interval]);

  const goToPrevious = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className={cx("slideshow")}>
      <div
        className={cx("slideshow-wrapper")}
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <div className={cx("slide")} key={index}>
            <img src={img1} alt={`slide-${index}`} />
            <div className={cx("slideshow-docs")}>
              <h1>Wir kümmern uns um Ihre schöner Garten und Haus</h1>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s,
              </p>
              <button>
                <a href="#">Lern mehr</a>
              </button>
            </div>
          </div>
        ))}
      </div>

      <button className={cx("prev")} onClick={goToPrevious}>
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>
      <button className={cx("next")} onClick={goToNext}>
        <FontAwesomeIcon icon={faChevronLeft} rotation={180} />
      </button>
    </div>
  );
};

export default Slideshow;