import React, { useState, useEffect } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const SliderBanner = () => {
  const [categories, setCategories] = useState([]);
  console.log("state", categories);
  var settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 2,
    height: 300,
  };

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/categories");
      setCategories(response.data);
      console.log("response", response.data);
    } catch (error) {
      console.log("error fetching data");
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <Slider {...settings}>
        <div>
          <h3>1</h3>
        </div>
      </Slider>
    </>
  );
};

export default SliderBanner;
