import React from "react";
import { Carousel } from "antd";
const contentStyle = {
  margin: 0,
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};
const CarouselPage = () => {
  const [categories, setCategories] = useState([]);
  console.log("state", state);

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
  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };
  return (
    <Carousel afterChange={onChange}>
      {categories.map((data, index) => {
        <div key={index}>
          <h3 style={contentStyle}>{data.name}</h3>
        </div>;
      })}
    </Carousel>
  );
};
export default CarouselPage;
