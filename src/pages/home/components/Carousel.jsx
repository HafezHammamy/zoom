import { Box, Stack } from "@mui/system";
import React, { useRef } from "react";
import { BRANDS } from "../contants";
import "./Carousel.css"; // Optional: for custom styling

import logo1 from "assets/logo1.png";
import logo2 from "assets/logo2.png";
import logo3 from "assets/logo3.png";
import logo4 from "assets/logo4.png";

const Carousel = ({ selectedBrand, active }) => {
  const carouselRef = useRef(null);
  const itemRefs = useRef([]);

  // const scrollLeft = () => {
  //   if (carouselRef.current) {
  //     carouselRef.current.scrollBy({
  //       left: -200, // Adjust the scroll amount as needed
  //       behavior: "smooth",
  //     });
  //   }
  // };

  // const scrollRight = () => {
  //   if (carouselRef.current) {
  //     carouselRef.current.scrollBy({
  //       left: 200, // Adjust the scroll amount as needed
  //       behavior: "smooth",
  //     });
  //   }
  // };

  const scrollToCenter = (index) => {
    if (itemRefs.current[index] && carouselRef.current) {
      const carousel = carouselRef.current;
      const item = itemRefs.current[index];

      // Calculate the scroll position to center the clicked item
      const itemLeftPosition = item.offsetLeft;
      const itemWidth = item.offsetWidth;
      const carouselWidth = carousel.offsetWidth;
      const maxScrollLeft = carousel.scrollWidth - carouselWidth;

      // Scroll position to center the item
      let scrollPosition = itemLeftPosition - carouselWidth / 2 + itemWidth / 2;

      // Ensure scroll position stays within bounds
      if (scrollPosition < 0) {
        scrollPosition = 0;
      } else if (scrollPosition > maxScrollLeft) {
        scrollPosition = maxScrollLeft;
      }

      carousel.scrollTo({
        left: scrollPosition,
        behavior: "smooth",
      });
    }
  };

  const items = [
    { title: BRANDS.JUVELOOK, logo: logo1, video: "" },
    { title: BRANDS.LENISNA, logo: logo2, video: "" },
    { title: BRANDS.RENEE, logo: logo3, video: "" },
    { title: BRANDS.KSIRGERY, logo: logo4, video: "" },
  ];

  return (
    <div className="carousel-container">
      <Stack
        direction={"row"}
        spacing={5}
        justifyContent="center"
        alignItems={"center"}
      >
        {/* <button className="carousel-button" onClick={scrollLeft}>
          ❮
        </button> */}
        <Box sx={{ width: "550px" }}>
          <div className="carousel" ref={carouselRef}>
            {items.map((item, index) => (
              <div
                key={index}
                ref={(el) => (itemRefs.current[index] = el)}
                className={`carousel-item ${active === item.title && "active"}`}
                onClick={() => {
                  selectedBrand(item.title.toUpperCase());
                  scrollToCenter(index);
                }}
              >
                <img src={item.logo} />
              </div>
            ))}
          </div>
        </Box>
        {/* <Box>
          <button className="carousel-button" onClick={scrollRight}>
            ❯
          </button>
        </Box> */}
      </Stack>
    </div>
  );
};

export default Carousel;
